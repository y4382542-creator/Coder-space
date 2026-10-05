import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, UserProgress, AccessibilitySettings, ActiveView } from '../types';

interface AppContextType {
  user: User | null;
  progress: UserProgress;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  accessibility: AccessibilitySettings;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
  resetAccessibility: () => void;
  register: (name: string, username: string, email: string, age: number, password?: string) => { success: boolean; error?: string };
  login: (username: string, password?: string) => { success: boolean; error?: string };
  logout: () => void;
  deleteAccount: () => void;
  completeLesson: (lessonId: string) => void;
  addScore: (points: number) => void;
  recordExamResult: (examKey: string, scorePercent: number, totalQuestions: number, correctAnswers: number) => void;
  recordProjectCompleted: (projectId: string) => void;
  exportBackupData: () => void;
  importBackupData: (jsonStr: string) => { success: boolean; error?: string };
  showAuthModal: boolean;
  setShowAuthModal: (show: boolean) => void;
  showPrivacyModal: boolean;
  setShowPrivacyModal: (show: boolean) => void;
  showStatsModal: boolean;
  setShowStatsModal: (show: boolean) => void;
  showSearchModal: boolean;
  setShowSearchModal: (show: boolean) => void;
  ttsSpeaking: boolean;
  ttsSpeed: number;
  setTtsSpeed: (speed: number) => void;
  playTTS: (text: string) => void;
  stopTTS: () => void;
}

const STORAGE_KEYS = {
  USERS_DB: 'codek_users_db_v2',
  CURRENT_USER: 'codek_current_user_v2',
  PROGRESS_PREFIX: 'codek_progress_v2_',
  SETTINGS: 'codek_settings_v2',
};

// Safe LocalStorage Helper
const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.warn('LocalStorage unavailable or quota exceeded:', e);
      return false;
    }
  },
  removeItem: (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch {}
  }
};

const defaultAccessibility: AccessibilitySettings = {
  fontSize: 100,
  lineHeight: 1,
  highContrast: false,
  reducedMotion: false,
  dyslexicFont: false,
};

const defaultProgress: UserProgress = {
  score: 0,
  completedLessons: [],
  passedExams: {},
  completedProjects: [],
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [activeView, setActiveView] = useState<ActiveView>({ type: 'home' });
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>(defaultAccessibility);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState<boolean>(false);
  const [showStatsModal, setShowStatsModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  // TTS State
  const [ttsSpeaking, setTtsSpeaking] = useState<boolean>(false);
  const [ttsSpeed, setTtsSpeed] = useState<number>(1);

  // Load saved session on mount
  useEffect(() => {
    try {
      const savedUserStr = safeStorage.getItem(STORAGE_KEYS.CURRENT_USER);
      if (savedUserStr) {
        const savedUser: User = JSON.parse(savedUserStr);
        setUser(savedUser);
        loadUserProgress(savedUser.username);
      } else {
        // Guest mode default progress
        const guestProgress = safeStorage.getItem(STORAGE_KEYS.PROGRESS_PREFIX + 'guest');
        if (guestProgress) {
          setProgress(JSON.parse(guestProgress));
        }
      }

      const savedSettings = safeStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (savedSettings) {
        setAccessibility(JSON.parse(savedSettings));
      }
    } catch (e) {
      console.warn('Error loading initial local storage state', e);
    }
  }, []);

  // Sync accessibility classes with document
  useEffect(() => {
    document.documentElement.style.fontSize = `${accessibility.fontSize}%`;
    
    if (accessibility.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    if (accessibility.reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    if (accessibility.dyslexicFont) {
      document.body.classList.add('dyslexic-font');
    } else {
      document.body.classList.remove('dyslexic-font');
    }

    safeStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(accessibility));
  }, [accessibility]);

  const loadUserProgress = (username: string) => {
    const raw = safeStorage.getItem(STORAGE_KEYS.PROGRESS_PREFIX + username);
    if (raw) {
      try {
        const loaded: UserProgress = JSON.parse(raw);
        // Check daily streak safely
        const today = new Date().toISOString().split('T')[0];
        if (loaded.lastActiveDate && loaded.lastActiveDate !== today) {
          const lastDate = new Date(loaded.lastActiveDate);
          const diffDays = Math.round((new Date(today).getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
          if (diffDays === 1) {
            loaded.streakDays = (loaded.streakDays || 1) + 1;
          } else if (diffDays > 1) {
            loaded.streakDays = 1;
          }
          loaded.lastActiveDate = today;
        } else if (!loaded.lastActiveDate) {
          loaded.lastActiveDate = today;
          loaded.streakDays = 1;
        }
        setProgress(loaded);
        return;
      } catch (err) {
        console.error('Error parsing user progress', err);
      }
    }
    setProgress(defaultProgress);
  };

  const saveProgressState = (newProg: UserProgress, username?: string) => {
    setProgress(newProg);
    const targetUser = username || user?.username || 'guest';
    safeStorage.setItem(STORAGE_KEYS.PROGRESS_PREFIX + targetUser, JSON.stringify(newProg));
  };

  // Auth Operations
  const register = (name: string, username: string, email: string, age: number) => {
    const cleanUser = username.trim().toLowerCase();
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || cleanName.length < 2) {
      return { success: false, error: 'يرجى إدخال اسم صحيح (حرفين على الأقل).' };
    }
    if (!cleanUser || cleanUser.length < 3) {
      return { success: false, error: 'اسم المستخدم يجب ألا يقل عن 3 أحرف.' };
    }
    if (!cleanEmail || !cleanEmail.includes('@') || !cleanEmail.includes('.')) {
      return { success: false, error: 'يرجى إدخال بريد إلكتروني صالح.' };
    }
    if (isNaN(age) || age < 8 || age > 95) {
      return { success: false, error: 'يرجى إدخال عمر صحيح بين 8 و 95 عاماً.' };
    }

    try {
      const usersDb = JSON.parse(safeStorage.getItem(STORAGE_KEYS.USERS_DB) || '{}');
      if (usersDb[cleanUser]) {
        return { success: false, error: 'اسم المستخدم مسجل مسبقاً، يرجى اختيار اسم آخر.' };
      }

      const newUser: User = {
        name: cleanName,
        username: cleanUser,
        email: cleanEmail,
        age,
        createdAt: Date.now(),
        lastSeen: Date.now(),
      };

      usersDb[cleanUser] = newUser;
      safeStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(usersDb));
      safeStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(newUser));
      setUser(newUser);

      // Migrate guest progress if exists
      const guestProgStr = safeStorage.getItem(STORAGE_KEYS.PROGRESS_PREFIX + 'guest');
      const initialProg = guestProgStr ? JSON.parse(guestProgStr) : defaultProgress;
      saveProgressState(initialProg, cleanUser);

      setShowAuthModal(false);
      return { success: true };
    } catch (e) {
      return { success: false, error: 'حدث خطأ أثناء حفظ الحساب محلياً.' };
    }
  };

  const login = (username: string) => {
    const cleanUser = username.trim().toLowerCase();
    if (!cleanUser) {
      return { success: false, error: 'يرجى كتابة اسم المستخدم للدخول.' };
    }

    try {
      const usersDb = JSON.parse(safeStorage.getItem(STORAGE_KEYS.USERS_DB) || '{}');
      const found = usersDb[cleanUser];
      if (!found) {
        return { success: false, error: 'الحساب غير موجود، يرجى إنشاء حساب جديد أولاً.' };
      }

      found.lastSeen = Date.now();
      usersDb[cleanUser] = found;
      safeStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(usersDb));
      safeStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(found));
      setUser(found);
      loadUserProgress(cleanUser);
      setShowAuthModal(false);
      return { success: true };
    } catch (e) {
      return { success: false, error: 'حدث خطأ أثناء محاولة تسجيل الدخول.' };
    }
  };

  const logout = () => {
    safeStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    setUser(null);
    setProgress(defaultProgress);
    setActiveView({ type: 'home' });
  };

  const deleteAccount = () => {
    if (!user) return;
    try {
      const usersDb = JSON.parse(safeStorage.getItem(STORAGE_KEYS.USERS_DB) || '{}');
      delete usersDb[user.username];
      safeStorage.setItem(STORAGE_KEYS.USERS_DB, JSON.stringify(usersDb));
      safeStorage.removeItem(STORAGE_KEYS.PROGRESS_PREFIX + user.username);
      logout();
    } catch (e) {
      console.error('Error deleting account', e);
    }
  };

  // Progress Actions
  const addScore = (points: number) => {
    const updated = {
      ...progress,
      score: Math.max(0, progress.score + points),
    };
    saveProgressState(updated);
  };

  const completeLesson = (lessonId: string) => {
    if (progress.completedLessons.includes(lessonId)) return;
    const updated = {
      ...progress,
      score: progress.score + 25,
      completedLessons: [...progress.completedLessons, lessonId],
    };
    saveProgressState(updated);
  };

  // Anti-Farming & Fair Exam Scoring
  const recordExamResult = (examKey: string, scorePercent: number, totalQuestions: number, correctAnswers: number) => {
    const safePercent = Math.min(100, Math.max(0, Math.round(scorePercent)));
    const prevRecord = progress.passedExams[examKey];

    // Only award points if it's the first time passing, or if the score improved!
    let pointsToAdd = 0;
    if (!prevRecord) {
      pointsToAdd = safePercent >= 60 ? 50 : 10;
    } else if (safePercent > prevRecord.scorePercent) {
      // Award difference in performance
      pointsToAdd = Math.round(((safePercent - prevRecord.scorePercent) / 100) * 50);
    }

    const updated = {
      ...progress,
      score: progress.score + Math.max(0, pointsToAdd),
      passedExams: {
        ...progress.passedExams,
        [examKey]: {
          scorePercent: Math.max(safePercent, prevRecord ? prevRecord.scorePercent : 0),
          passedDate: new Date().toLocaleDateString('ar-EG'),
          totalQuestions,
          correctAnswers: Math.max(correctAnswers, prevRecord ? prevRecord.correctAnswers : 0),
        },
      },
    };
    saveProgressState(updated);
  };

  const recordProjectCompleted = (projectId: string) => {
    if (progress.completedProjects.includes(projectId)) return;
    const updated = {
      ...progress,
      score: progress.score + 40,
      completedProjects: [...progress.completedProjects, projectId],
    };
    saveProgressState(updated);
  };

  // Backup & Restore with Strict Schema Sanitization
  const exportBackupData = () => {
    const backupObj = {
      version: '2.0',
      exportedAt: new Date().toISOString(),
      user: user || { name: 'زائر', username: 'guest' },
      progress,
    };
    const blob = new Blob([JSON.stringify(backupObj, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `coder-space-backup-${user?.username || 'progress'}-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importBackupData = (jsonStr: string) => {
    try {
      if (!jsonStr || jsonStr.length > 500000) {
        return { success: false, error: 'حجم الملف كبير جداً أو غير صالح.' };
      }
      const data = JSON.parse(jsonStr);
      if (!data.progress || !Array.isArray(data.progress.completedLessons)) {
        return { success: false, error: 'الملف لا يحوي بيانات تقدم متوافقة.' };
      }

      // Sanitize fields
      const cleanProgress: UserProgress = {
        score: typeof data.progress.score === 'number' && !isNaN(data.progress.score) ? Math.max(0, data.progress.score) : 0,
        completedLessons: Array.isArray(data.progress.completedLessons) ? data.progress.completedLessons.filter((l: any) => typeof l === 'string') : [],
        passedExams: typeof data.progress.passedExams === 'object' && data.progress.passedExams !== null ? data.progress.passedExams : {},
        completedProjects: Array.isArray(data.progress.completedProjects) ? data.progress.completedProjects.filter((p: any) => typeof p === 'string') : [],
        streakDays: typeof data.progress.streakDays === 'number' && !isNaN(data.progress.streakDays) ? Math.max(1, data.progress.streakDays) : 1,
        lastActiveDate: typeof data.progress.lastActiveDate === 'string' ? data.progress.lastActiveDate : new Date().toISOString().split('T')[0],
      };

      setProgress(cleanProgress);
      if (user) {
        saveProgressState(cleanProgress, user.username);
      } else {
        saveProgressState(cleanProgress, 'guest');
      }
      return { success: true };
    } catch (e) {
      return { success: false, error: 'تعذر استيراد الملف (تأكد من أنه ملف JSON صالح).' };
    }
  };

  const updateAccessibility = (settings: Partial<AccessibilitySettings>) => {
    setAccessibility((prev) => ({ ...prev, ...settings }));
  };

  const resetAccessibility = () => {
    setAccessibility(defaultAccessibility);
  };

  // Text-To-Speech (Web Speech API)
  const playTTS = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('المتصفح لا يدعم ميزة النطق الصوتي (Text-to-Speech).');
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = ttsSpeed;
    utterance.lang = 'ar-SA';
    const voices = window.speechSynthesis.getVoices();
    const arabicVoice = voices.find((v) => v.lang.startsWith('ar') || v.lang.includes('Arabic'));
    if (arabicVoice) {
      utterance.voice = arabicVoice;
    }
    utterance.onstart = () => setTtsSpeaking(true);
    utterance.onend = () => setTtsSpeaking(false);
    utterance.onerror = () => setTtsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopTTS = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setTtsSpeaking(false);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        progress,
        activeView,
        setActiveView,
        accessibility,
        updateAccessibility,
        resetAccessibility,
        register,
        login,
        logout,
        deleteAccount,
        completeLesson,
        addScore,
        recordExamResult,
        recordProjectCompleted,
        exportBackupData,
        importBackupData,
        showAuthModal,
        setShowAuthModal,
        showPrivacyModal,
        setShowPrivacyModal,
        showStatsModal,
        setShowStatsModal,
        showSearchModal,
        setShowSearchModal,
        ttsSpeaking,
        ttsSpeed,
        setTtsSpeed,
        playTTS,
        stopTTS,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
