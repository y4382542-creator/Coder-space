export interface User {
  id?: string;
  name: string;
  username: string;
  email: string;
  age: number;
  createdAt: number;
  lastSeen: number;
}

export interface UserProgress {
  score: number;
  completedLessons: string[];
  passedExams: Record<string, { scorePercent: number; passedDate: string; totalQuestions: number; correctAnswers: number }>;
  completedProjects: string[];
  streakDays: number;
  lastActiveDate: string;
}

export interface Lesson {
  id: string; // e.g. "html-u1-l1", "js-ju1-l1"
  subject: 'html' | 'css' | 'js';
  unit: string; // e.g. "u1", "cu1", "ju1"
  lessonNumber: string; // e.g. "l1"
  title: string;
  sub: string;
  tag: string;
  conceptHtml: string;
  code: string;
  lang: 'HTML' | 'CSS' | 'JavaScript';
  preview: string;
  practice: string;
  hint: string;
}

export type QuestionType = 'tf' | 'mc' | 'what';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  code?: string;
  options?: string[];
  correct: number | boolean | string;
  answer?: string; // For "what" type questions
  explanation?: string;
}

export interface UnitSummary {
  id: string;
  title: string;
  subject: 'html' | 'css' | 'js';
  items: Array<{ code: string; desc: string }>;
}

export interface Project {
  id: string;
  title: string;
  subject: 'HTML' | 'CSS' | 'JavaScript';
  desc: string;
  reqs: string[];
  solution: string;
  starterCode?: string;
}

export interface IncomeWay {
  num: string;
  tag: string;
  title: string;
  desc: string;
  income: string;
  speed: string;
  level: 'easy' | 'med' | 'hard';
  color: string;
  steps: Array<{ text: string }>;
  tip: string;
  platforms: string[];
}

export interface AccessibilitySettings {
  fontSize: number; // 80 - 180%
  lineHeight: number; // 1 - 4
  highContrast: boolean;
  reducedMotion: boolean;
  dyslexicFont: boolean;
}

export type ActiveView =
  | { type: 'home' }
  | { type: 'lesson'; subject: 'html' | 'css' | 'js'; unit: string; lesson: string }
  | { type: 'summary'; key: string }
  | { type: 'exam'; key: string }
  | { type: 'projects'; projectId?: string }
  | { type: 'income' }
  | { type: 'intro' }
  | { type: 'how-to-use' }
  | { type: 'roadmap' };
