import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { downloadProjectZip } from '../utils/projectDownloader';
import {
  Flame,
  Trophy,
  User,
  Menu,
  Eye,
  Volume2,
  VolumeX,
  Download,
  Upload,
  ShieldCheck,
  BarChart2,
  LogOut,
  Sparkles,
  BookOpen,
  FolderArchive,
  Search
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  onOpenAccessibility: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onOpenAccessibility }) => {
  const {
    user,
    progress,
    setActiveView,
    setShowAuthModal,
    setShowStatsModal,
    setShowPrivacyModal,
    setShowSearchModal,
    logout,
    exportBackupData,
    importBackupData,
    ttsSpeaking,
    stopTTS,
  } = useApp();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const totalLessons = 90; // 30 HTML + 30 CSS + 30 JS
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const res = importBackupData(content);
        if (res.success) {
          alert('تم استيراد بيانات تقدمك بنجاح!');
        } else {
          alert('فشل استيراد البيانات: ' + (res.error || 'الملف غير صالح.'));
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 h-[68px] bg-[#0F0E17]/90 backdrop-blur-xl border-b border-[#6C63FF]/20 px-4 md:px-7 flex items-center justify-between gap-3 shadow-lg shadow-black/20">
      {/* Right side (RTL Start): Logo & Founder badge */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          aria-label="فتح القائمة الجانبية"
          className="md:hidden p-2 rounded-lg bg-[#1E1D2E] border border-[#6C63FF]/20 text-white hover:border-[#6C63FF] transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div 
          onClick={() => setActiveView({ type: 'home' })}
          className="cursor-pointer group flex flex-col items-start leading-tight select-none"
        >
          <div className="text-xl sm:text-2xl md:text-3xl font-black font-['Cairo'] tracking-tight bg-gradient-to-r from-[#6C63FF] via-[#A399FF] to-[#FF6584] bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            كودر سبيس <span className="text-[#43E97B]">Coder Space</span>
          </div>
          <span className="text-[10px] text-[#A7A5C0] font-medium hidden sm:inline-block">
            إعداد وتطوير: <strong className="text-[#6C63FF] font-bold">يوسف حسام عبدالرحمن</strong>
          </span>
        </div>
      </div>

      {/* Center: Search trigger & Overall Progress Bar */}
      <div className="hidden md:flex items-center gap-3">
        {/* Quick Search trigger button */}
        <button
          onClick={() => setShowSearchModal(true)}
          className="flex items-center gap-2.5 bg-[#1A1829] hover:bg-[#252340] border border-[#6C63FF]/20 hover:border-[#6C63FF]/50 px-3.5 py-1.5 rounded-full text-xs text-[#A7A5C0] hover:text-white transition-all shadow-sm"
        >
          <Search className="w-3.5 h-3.5 text-[#6C63FF]" />
          <span>ابحث في الدروس والمشاريع...</span>
          <kbd className="hidden lg:inline-block bg-black/40 px-1.5 py-0.5 rounded text-[10px] border border-white/10 font-mono">
            Ctrl+K
          </kbd>
        </button>

        {/* Progress Bar */}
        <div className="hidden xl:flex items-center gap-3 bg-[#1A1829] px-4 py-1.5 rounded-full border border-[#6C63FF]/15">
          <span className="text-xs font-semibold text-[#A7A5C0]">
            الإنجاز: <span className="text-white font-bold">{completedCount}/{totalLessons}</span>
          </span>
          <div className="w-28 h-2 bg-[#232136] rounded-full overflow-hidden p-0.5">
            <div 
              className="h-full bg-gradient-to-r from-[#6C63FF] to-[#43E97B] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-bold text-[#43E97B] font-mono">{progressPercent}%</span>
        </div>
      </div>

      {/* Left side (RTL End): Actions & User menu */}
      <div className="flex items-center gap-2 md:gap-3">
        {/* Mobile Search button */}
        <button
          onClick={() => setShowSearchModal(true)}
          title="البحث السريع"
          className="md:hidden p-2 rounded-full bg-[#1E1D2E] border border-[#6C63FF]/20 text-[#A7A5C0] hover:text-white"
        >
          <Search className="w-4 h-4 text-[#6C63FF]" />
        </button>

        {/* Streak Counter */}
        <div 
          title="أيام الالتزام والتعلم اليومي"
          className="flex items-center gap-1.5 bg-[#1E1D2E] border border-[#F7971E]/30 px-2.5 py-1 rounded-full text-xs font-bold text-[#F7971E]"
        >
          <Flame className="w-3.5 h-3.5 text-[#F7971E] animate-pulse" />
          <span>{progress.streakDays || 1} يوم</span>
        </div>

        {/* Score points */}
        <div 
          title="مجموع النقاط المكتسبة"
          className="flex items-center gap-1.5 bg-[#1E1D2E] border border-[#6C63FF]/30 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#43E97B] shadow-[0_0_8px_#43E97B]" />
          <span>{progress.score} نقطة</span>
        </div>

        {/* TTS Toggle indicator if speaking */}
        {ttsSpeaking && (
          <button
            onClick={stopTTS}
            title="إيقاف القراءة الصوتية"
            className="flex items-center gap-1 bg-[#FF6584]/20 border border-[#FF6584] text-[#FF6584] px-2.5 py-1 rounded-full text-xs font-bold animate-pulse hover:bg-[#FF6584] hover:text-white transition-all"
          >
            <VolumeX className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">إيقاف</span>
          </button>
        )}

        {/* Accessibility Button */}
        <button
          onClick={onOpenAccessibility}
          title="إعدادات سهولة الوصول والخطوط"
          className="p-2 rounded-full bg-[#1E1D2E] border border-[#6C63FF]/20 text-[#A7A5C0] hover:text-white hover:border-[#6C63FF] transition-all"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* User Account Button with Dropdown */}
        <div className="relative">
          {user ? (
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 bg-[#1E1D2E] hover:bg-[#252340] border border-[#6C63FF]/30 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#6C63FF] to-[#FF6584] flex items-center justify-center text-[11px] font-black text-white">
                {user.name[0] || 'م'}
              </div>
              <span className="hidden sm:inline max-w-[90px] truncate">{user.name}</span>
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-1.5 bg-gradient-to-r from-[#6C63FF] to-[#4B44CC] hover:brightness-110 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md shadow-[#6C63FF]/20 transition-all"
            >
              <User className="w-3.5 h-3.5" />
              <span>دخول / حساب</span>
            </button>
          )}

          {/* User Dropdown */}
          {dropdownOpen && user && (
            <div 
              className="absolute left-0 mt-2 w-64 bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="p-3 border-b border-[#6C63FF]/15 mb-1">
                <div className="font-bold text-sm text-white">{user.name}</div>
                <div className="text-xs text-[#A7A5C0]">@{user.username}</div>
                <div className="text-[11px] text-[#43E97B] mt-1 font-semibold">
                  العمر: {user.age} سنة • {progress.score} نقطة
                </div>
              </div>

              <button
                onClick={() => { setShowStatsModal(true); setDropdownOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-[#252340] rounded-xl transition-colors text-right"
              >
                <BarChart2 className="w-4 h-4 text-[#6C63FF]" />
                <span>إحصائياتي وشهاداتي</span>
              </button>

              <button
                onClick={() => { exportBackupData(); setDropdownOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-[#252340] rounded-xl transition-colors text-right"
              >
                <Download className="w-4 h-4 text-[#43E97B]" />
                <span>نسخ احتياطي (JSON)</span>
              </button>

              <button
                onClick={() => { downloadProjectZip(); setDropdownOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-[#252340] rounded-xl transition-colors text-right"
              >
                <FolderArchive className="w-4 h-4 text-[#6C63FF]" />
                <span>تحميل المشروع كاملاً (ZIP)</span>
              </button>

              <label className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-[#252340] rounded-xl transition-colors text-right cursor-pointer">
                <Upload className="w-4 h-4 text-[#F7971E]" />
                <span>استرجاع تقدم سابق</span>
                <input 
                  type="file" 
                  accept=".json" 
                  onChange={handleImportFile} 
                  className="hidden" 
                />
              </label>

              <button
                onClick={() => { setShowPrivacyModal(true); setDropdownOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-white hover:bg-[#252340] rounded-xl transition-colors text-right"
              >
                <ShieldCheck className="w-4 h-4 text-[#4FC3F7]" />
                <span>الخصوصية والتخزين المحلي</span>
              </button>

              <div className="my-1 border-t border-[#6C63FF]/15" />

              <button
                onClick={() => { logout(); setDropdownOpen(false); }}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-[#FF6584] hover:bg-[#FF6584]/10 rounded-xl transition-colors text-right"
              >
                <LogOut className="w-4 h-4" />
                <span>تسجيل الخروج</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
