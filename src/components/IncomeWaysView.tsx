import React, { useState } from 'react';
import { incomeWays } from '../data/incomeWays';
import { useApp } from '../context/AppContext';
import {
  DollarSign,
  ChevronDown,
  Zap,
  Clock,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers,
  ShieldCheck,
  ArrowLeft
} from 'lucide-react';

export const IncomeWaysView: React.FC = () => {
  const { setActiveView } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleWay = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const getLevelBadge = (level: 'easy' | 'med' | 'hard') => {
    switch (level) {
      case 'easy':
        return <span className="bg-[#43E97B]/20 text-[#43E97B] text-[10px] font-bold px-2 py-0.5 rounded-full">سهل ومباشر</span>;
      case 'med':
        return <span className="bg-[#F7971E]/20 text-[#F7971E] text-[10px] font-bold px-2 py-0.5 rounded-full">متوسط ويتطلب صبراً</span>;
      case 'hard':
        return <span className="bg-[#FF6584]/20 text-[#FF6584] text-[10px] font-bold px-2 py-0.5 rounded-full">متقدم وتراكمي</span>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#1E1D2E] via-[#252340] to-[#1E1D2E] border border-[#F7971E]/30 rounded-3xl p-6 md:p-10 text-center shadow-xl relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-[#F7971E]/15 border border-[#F7971E]/30 px-4 py-1 rounded-full text-xs font-bold text-[#F7971E] mb-3">
          <DollarSign className="w-4 h-4" />
          <span>تحويل المهارة البرمجية إلى عائد مالي حقيقي</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black font-['Cairo'] text-white mb-2 leading-tight">
          7 طرق واقعية لتحقيق دخل من <span className="text-[#6C63FF]">HTML</span> و <span className="text-[#FF6584]">CSS</span>
        </h1>

        <p className="text-sm md:text-base text-[#A7A5C0] max-w-xl mx-auto leading-relaxed">
          البرمجة ليست مجرد أكواد تحفظها، بل هي أداة لحل مشاكل الناس وأصحاب الأعمال.<br />
          إليك الدليل العملي المجرب للبدء من الصفر حتى أول <strong className="text-white">100 دولار ثم 1,000 دولار شهرياً</strong>:
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mt-6 pt-6 border-t border-white/10">
          <div className="bg-black/30 p-2.5 rounded-2xl border border-white/5">
            <div className="text-xl font-black text-[#43E97B] font-['Cairo']">7 مسارات</div>
            <div className="text-[11px] text-[#A7A5C0]">متاحة للمبتدئين</div>
          </div>
          <div className="bg-black/30 p-2.5 rounded-2xl border border-white/5">
            <div className="text-xl font-black text-[#6C63FF] font-['Cairo']">$15</div>
            <div className="text-[11px] text-[#A7A5C0]">أول خدمة بسيطة</div>
          </div>
          <div className="bg-black/30 p-2.5 rounded-2xl border border-white/5">
            <div className="text-xl font-black text-[#F7971E] font-['Cairo']">$3,000+</div>
            <div className="text-[11px] text-[#A7A5C0]">سقف مشاريع الشركات</div>
          </div>
          <div className="bg-black/30 p-2.5 rounded-2xl border border-white/5">
            <div className="text-xl font-black text-[#FF6584] font-['Cairo']">100%</div>
            <div className="text-[11px] text-[#A7A5C0]">بدون رأس مال مسبق</div>
          </div>
        </div>
      </div>

      {/* Ways Accordion List */}
      <div className="space-y-3.5">
        {incomeWays.map((way, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-3xl border transition-all overflow-hidden ${
                isOpen
                  ? 'bg-[#1E1D2E] border-[#6C63FF]/40 shadow-xl'
                  : 'bg-[#181628] border-white/5 hover:border-[#6C63FF]/20'
              }`}
            >
              <button
                onClick={() => toggleWay(idx)}
                className="w-full p-4 md:p-6 text-right flex items-start gap-4 transition-colors"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center font-black text-lg text-white shadow-md flex-shrink-0"
                  style={{ backgroundColor: way.color }}
                >
                  {way.num}
                </div>

                <div className="flex-1">
                  <div className="text-[11px] font-bold text-[#A7A5C0] uppercase tracking-wider mb-1">
                    {way.tag}
                  </div>
                  <h3 className="text-base md:text-xl font-black font-['Cairo'] text-white">
                    {way.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#A7A5C0] mt-1">
                    {way.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="bg-[#43E97B]/15 text-[#43E97B] text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{way.income}</span>
                    </span>
                    <span className="bg-[#F7971E]/15 text-[#F7971E] text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{way.speed}</span>
                    </span>
                    {getLevelBadge(way.level)}
                  </div>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-[#A7A5C0] mt-2 transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180 text-white' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-6 pt-2 border-t border-white/5 space-y-4 animate-in fade-in duration-200">
                  <div className="text-xs font-black text-white uppercase tracking-wider">
                    خطوات التنفيذ العملية من الصفر:
                  </div>

                  <div className="space-y-2.5">
                    {way.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3 bg-[#141221] p-3.5 rounded-2xl border border-white/5">
                        <div 
                          className="w-6 h-6 rounded-lg text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: way.color }}
                        >
                          {sIdx + 1}
                        </div>
                        <div 
                          className="text-xs md:text-sm text-[#D6D4E8] leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: step.text }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Golden Tip Box */}
                  <div className="bg-[#F7971E]/10 border border-[#F7971E]/30 p-3.5 rounded-2xl text-xs md:text-sm text-[#F7971E] font-medium leading-relaxed">
                    💡 <strong>نصيحة ذهبية:</strong> {way.tip}
                  </div>

                  {/* Recommended Platforms */}
                  <div>
                    <div className="text-[11px] font-bold text-[#A7A5C0] mb-2">المنصات المقترحة للبدء:</div>
                    <div className="flex flex-wrap gap-2">
                      {way.platforms.map((plat, pIdx) => (
                        <span key={pIdx} className="bg-[#252340] border border-white/10 text-white text-xs font-semibold px-3 py-1 rounded-xl">
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary Comparison Table */}
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-6 md:p-8 shadow-xl space-y-4">
        <h3 className="text-lg md:text-xl font-black font-['Cairo'] text-white">
          جدول مقارنة المسارات لاختيار الأنسب لك
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-right text-xs md:text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[#A7A5C0] text-[11px] uppercase">
                <th className="py-2.5 px-3">المسار</th>
                <th className="py-2.5 px-3">العائد المتوقع</th>
                <th className="py-2.5 px-3">سرعة البداية</th>
                <th className="py-2.5 px-3">مستوى الصعوبة</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {incomeWays.map((w, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02]">
                  <td className="py-3 px-3 font-bold text-white">{w.title}</td>
                  <td className="py-3 px-3 text-[#43E97B] font-bold">{w.income}</td>
                  <td className="py-3 px-3 text-[#A7A5C0]">{w.speed}</td>
                  <td className="py-3 px-3">{getLevelBadge(w.level)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Motivational Ending Card */}
      <div className="bg-gradient-to-r from-[#6C63FF]/15 to-[#43E97B]/15 border border-[#43E97B]/30 rounded-3xl p-6 md:p-8 text-center space-y-3">
        <Sparkles className="w-8 h-8 text-[#43E97B] mx-auto" />
        <h3 className="text-xl md:text-2xl font-black font-['Cairo'] text-white">
          "أفضل وقت لتبدأ كان أمس، وثاني أفضل وقت هو الآن!"
        </h3>
        <p className="text-xs md:text-sm text-[#A7A5C0] max-w-md mx-auto">
          كل محترف تراه اليوم بدأ بنفس الدروس التي بين يديك الآن. ابدأ بالدرس الأول واصبر وستصل بإذن الله.
        </p>
        <button
          onClick={() => setActiveView({ type: 'lesson', subject: 'html', unit: 'u1', lesson: 'l1' })}
          className="mt-3 px-6 py-2.5 rounded-xl bg-[#43E97B] text-[#0A2010] font-black text-xs shadow-lg shadow-[#43E97B]/20 active:scale-95 transition-all"
        >
          ابدأ الدرس الأول الآن
        </button>
      </div>
    </div>
  );
};
