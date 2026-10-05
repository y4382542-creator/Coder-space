import React from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Trophy,
  CheckCircle2,
  Flame,
  Award,
  FolderGit2,
  BarChart3,
  Calendar
} from 'lucide-react';

export const StatsModal: React.FC = () => {
  const { user, progress, showStatsModal, setShowStatsModal, setActiveView } = useApp();

  if (!showStatsModal) return null;

  const totalLessons = 90;
  const completedCount = progress.completedLessons.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalLessons) * 100));

  const htmlDone = progress.completedLessons.filter((l) => l.startsWith('html')).length;
  const cssDone = progress.completedLessons.filter((l) => l.startsWith('css')).length;
  const jsDone = progress.completedLessons.filter((l) => l.startsWith('js')).length;

  const htmlPct = Math.round((htmlDone / 30) * 100);
  const cssPct = Math.round((cssDone / 30) * 100);
  const jsPct = Math.round((jsDone / 30) * 100);

  const passedExamsCount = Object.keys(progress.passedExams).length;
  const completedProjectsCount = progress.completedProjects.length;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 text-right animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowStatsModal(false)}
          className="absolute top-4 left-4 p-1.5 rounded-full text-[#A7A5C0] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-[#6C63FF]/20 text-[#6C63FF] flex items-center justify-center">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black font-['Cairo'] text-white">
              لوحة إحصائيات وإنجازات المتعلم
            </h2>
            <p className="text-xs text-[#A7A5C0]">
              {user ? `المتعلم: ${user.name} (@${user.username})` : 'جلسة تعلم كزائر'}
            </p>
          </div>
        </div>

        {/* 4 Stat Boxes */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-2xl font-black font-['Cairo'] text-[#43E97B]">{progress.score}</div>
            <div className="text-xs text-[#A7A5C0] flex items-center justify-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-[#43E97B]" />
              <span>مجموع النقاط المكتسبة</span>
            </div>
          </div>

          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-2xl font-black font-['Cairo'] text-[#6C63FF]">
              {completedCount}/{totalLessons}
            </div>
            <div className="text-xs text-[#A7A5C0] flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#6C63FF]" />
              <span>الدروس المنجزة</span>
            </div>
          </div>

          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-2xl font-black font-['Cairo'] text-amber-400">
              {passedExamsCount}
            </div>
            <div className="text-xs text-[#A7A5C0] flex items-center justify-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>الاختبارات المجتازة</span>
            </div>
          </div>

          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 text-center space-y-1">
            <div className="text-2xl font-black font-['Cairo'] text-[#28C874]">
              {completedProjectsCount}/18
            </div>
            <div className="text-xs text-[#A7A5C0] flex items-center justify-center gap-1">
              <FolderGit2 className="w-3.5 h-3.5 text-[#28C874]" />
              <span>المشاريع المنجزة</span>
            </div>
          </div>
        </div>

        {/* Course Progress Bars */}
        <div className="space-y-3 bg-[#141221] p-4 rounded-2xl border border-white/5">
          <div>
            <div className="flex justify-between text-xs font-bold text-white mb-1.5">
              <span>مسار HTML</span>
              <span className="text-[#6C63FF]">{htmlDone}/30 درس ({htmlPct}%)</span>
            </div>
            <div className="w-full h-2 bg-[#1E1D2E] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#6C63FF] to-[#A399FF] rounded-full transition-all duration-300"
                style={{ width: `${htmlPct}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-white mb-1.5">
              <span>مسار CSS</span>
              <span className="text-[#FF6584]">{cssDone}/30 درس ({cssPct}%)</span>
            </div>
            <div className="w-full h-2 bg-[#1E1D2E] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#FF6584] to-[#FFA3B5] rounded-full transition-all duration-300"
                style={{ width: `${cssPct}%` }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-white mb-1.5">
              <span>مسار JavaScript</span>
              <span className="text-[#F7DF1E]">{jsDone}/30 درس ({jsPct}%)</span>
            </div>
            <div className="w-full h-2 bg-[#1E1D2E] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#F7DF1E] to-[#FFEB60] rounded-full transition-all duration-300"
                style={{ width: `${jsPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Earned Certificates List */}
        {passedExamsCount > 0 && (
          <div className="space-y-2.5 bg-[#141221] p-4 rounded-2xl border border-amber-400/20">
            <div className="flex items-center justify-between text-xs font-bold text-amber-300 border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>شهاداتك المكتسبة ({passedExamsCount})</span>
              </div>
              <span className="text-[10px] text-[#A7A5C0]">جاهزة للطباعة والحفظ PDF</span>
            </div>

            <div className="max-h-40 overflow-y-auto space-y-1.5 pr-1">
              {Object.entries(progress.passedExams).map(([examKey, data]) => {
                let displayTitle = examKey;
                if (examKey === 'html-final') displayTitle = 'الامتحان الشامل HTML';
                else if (examKey === 'css-final') displayTitle = 'الامتحان الشامل CSS';
                else if (examKey === 'js-final') displayTitle = 'الامتحان الشامل JavaScript';
                else if (examKey.startsWith('html-')) displayTitle = `اختبار HTML (${examKey.replace('html-u', 'الوحدة ')})`;
                else if (examKey.startsWith('css-')) displayTitle = `اختبار CSS (${examKey.replace('css-cu', 'الوحدة ')})`;
                else if (examKey.startsWith('js-')) displayTitle = `اختبار JS (${examKey.replace('js-ju', 'الوحدة ')})`;

                return (
                  <div key={examKey} className="flex items-center justify-between p-2 rounded-xl bg-[#1E1D2E] border border-white/5 text-xs">
                    <div>
                      <div className="font-bold text-white leading-tight">{displayTitle}</div>
                      <div className="text-[10px] text-[#A7A5C0]">النتيجة: {data.scorePercent}% • {data.passedDate}</div>
                    </div>
                    <button
                      onClick={() => {
                        setShowStatsModal(false);
                        setActiveView({ type: 'exam', key: examKey });
                      }}
                      className="px-2.5 py-1 bg-amber-400/20 hover:bg-amber-400 text-amber-300 hover:text-black rounded-lg text-[10px] font-bold transition-colors whitespace-nowrap"
                    >
                      عرض الشهادة
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={() => setShowStatsModal(false)}
          className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-colors"
        >
          إغلاق النافذة
        </button>
      </div>
    </div>
  );
};
