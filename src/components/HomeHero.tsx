import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowLeft, BookOpen, Award, FolderGit2, DollarSign, Star, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  const { setActiveView, progress, setShowAuthModal } = useApp();

  return (
    <div className="space-y-8 pb-12 animate-in fade-in duration-200 text-right">
      {/* Hero Card */}
      <div className="bg-gradient-to-b from-[#1A1829] via-[#1E1D2E] to-[#141221] border border-[#6C63FF]/30 rounded-3xl p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
        {/* Floating gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#6C63FF]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/15 border border-[#6C63FF]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#6C63FF] mb-5 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#43E97B]" />
          <span>منصة تعليمية مجانية 100% بدون أي تكاليف أو اشتراكات</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-['Cairo'] text-white tracking-tight mb-4 leading-tight">
          طريقك لاحتراف البرمجة <br />
          <span className="bg-gradient-to-r from-[#6C63FF] via-[#FF6584] to-[#43E97B] bg-clip-text text-transparent">
            من الصفر حتى أول مشروع ودخل مالي
          </span>
        </h1>

        <p className="text-sm md:text-lg text-[#A7A5C0] max-w-xl mx-auto leading-relaxed mb-8">
          منهج تطبيقي عملي شامل ومكثف لتعلم لغات الويب الأساسية: HTML و CSS و JavaScript عبر 90 درساً تفاعلياً ومشاريع حقيقية واختبارات مع شهادات معتمدة.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <button
            onClick={() => setActiveView({ type: 'lesson', subject: 'html', unit: 'u1', lesson: 'l1' })}
            className="flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#4B44CC] hover:brightness-110 text-white font-black text-sm md:text-base shadow-xl shadow-[#6C63FF]/35 active:scale-95 transition-all"
          >
            <span>ابدأ التعلم الآن مجاناً</span>
            <ArrowLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => setActiveView({ type: 'lesson', subject: 'js', unit: 'ju1', lesson: 'l1' })}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#1E1D2E] hover:bg-[#252340] border border-[#F7DF1E]/40 text-[#F7DF1E] font-bold text-sm md:text-base active:scale-95 transition-all"
          >
            <span>مسار JavaScript الجديد</span>
          </button>

          <button
            onClick={() => setActiveView({ type: 'income' })}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#1E1D2E] hover:bg-[#252340] border border-[#F7971E]/40 text-[#F7971E] font-bold text-sm md:text-base active:scale-95 transition-all"
          >
            <DollarSign className="w-4 h-4" />
            <span>طرق تحقيق الدخل</span>
          </button>
        </div>

        {/* 5 Stats Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto mt-10 pt-8 border-t border-white/10">
          <div className="p-3 bg-black/20 rounded-2xl border border-white/5">
            <div className="text-2xl md:text-3xl font-black font-['Cairo'] text-[#6C63FF]">30</div>
            <div className="text-xs text-[#A7A5C0] mt-0.5">درساً في HTML</div>
          </div>
          <div className="p-3 bg-black/20 rounded-2xl border border-white/5">
            <div className="text-2xl md:text-3xl font-black font-['Cairo'] text-[#FF6584]">30</div>
            <div className="text-xs text-[#A7A5C0] mt-0.5">درساً في CSS</div>
          </div>
          <div className="p-3 bg-black/20 rounded-2xl border border-[#F7DF1E]/30">
            <div className="text-2xl md:text-3xl font-black font-['Cairo'] text-[#F7DF1E]">30</div>
            <div className="text-xs text-[#F7DF1E] font-bold mt-0.5">درساً في JavaScript</div>
          </div>
          <div className="p-3 bg-black/20 rounded-2xl border border-white/5">
            <div className="text-2xl md:text-3xl font-black font-['Cairo'] text-[#43E97B]">18</div>
            <div className="text-xs text-[#A7A5C0] mt-0.5">مشروعاً عملياً</div>
          </div>
          <div className="p-3 bg-black/20 rounded-2xl border border-white/5 col-span-2 sm:col-span-1">
            <div className="text-2xl md:text-3xl font-black font-['Cairo'] text-[#F7971E]">180+</div>
            <div className="text-xs text-[#A7A5C0] mt-0.5">سؤالاً تدريبياً</div>
          </div>
        </div>
      </div>

      {/* Feature Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          onClick={() => setActiveView({ type: 'intro' })}
          className="bg-[#1E1D2E] hover:border-[#43E97B]/50 border border-white/5 rounded-3xl p-6 transition-all cursor-pointer group shadow-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#43E97B]/15 text-[#43E97B] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
            💡
          </div>
          <h3 className="text-lg font-black font-['Cairo'] text-white mb-2 group-hover:text-[#43E97B] transition-colors">
            فلسفة HTML و CSS بالتشبيهات
          </h3>
          <p className="text-xs md:text-sm text-[#A7A5C0] leading-relaxed">
            فهم العلاقة الهندسية والجمالية بين هيكل الصفحة وتنسيقات المظهر عبر تشبيهات الحياة الواقعية التي ترسخ الفكرة في عقلك.
          </p>
        </div>

        <div 
          onClick={() => setActiveView({ type: 'projects' })}
          className="bg-[#1E1D2E] hover:border-[#6C63FF]/50 border border-white/5 rounded-3xl p-6 transition-all cursor-pointer group shadow-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#6C63FF]/15 text-[#6C63FF] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
            🛠️
          </div>
          <h3 className="text-lg font-black font-['Cairo'] text-white mb-2 group-hover:text-[#6C63FF] transition-colors">
            18 مشروعاً تطبيقياً مع الحلول
          </h3>
          <p className="text-xs md:text-sm text-[#A7A5C0] leading-relaxed">
            بناء مشاريع واقعية حقيقية (HTML و CSS و JavaScript) مع محرر كود فوري ومقارنة الكود البرمجي مع الحل النموذجي خطوة بخطوة.
          </p>
        </div>

        <div 
          onClick={() => setActiveView({ type: 'income' })}
          className="bg-[#1E1D2E] hover:border-[#F7971E]/50 border border-white/5 rounded-3xl p-6 transition-all cursor-pointer group shadow-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-[#F7971E]/15 text-[#F7971E] flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
            💰
          </div>
          <h3 className="text-lg font-black font-['Cairo'] text-white mb-2 group-hover:text-[#F7971E] transition-colors">
            طرق الربح من البرمجة
          </h3>
          <p className="text-xs md:text-sm text-[#A7A5C0] leading-relaxed">
            دليل عملي مفصل لسبع طرق واقعية لتحقيق دخل مالي مستقر من مهاراتك البرمجية عبر العمل الحر، بيع القوالب، واستغلال الذكاء الاصطناعي.
          </p>
        </div>
      </div>
    </div>
  );
};
