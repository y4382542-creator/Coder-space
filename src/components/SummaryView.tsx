import React from 'react';
import { unitSummaries } from '../data/summaries';
import { useApp } from '../context/AppContext';
import { FileText, ArrowRight, Copy, Check } from 'lucide-react';

interface SummaryViewProps {
  summaryKey: string;
}

export const SummaryView: React.FC<SummaryViewProps> = ({ summaryKey }) => {
  const { setActiveView } = useApp();
  const summary = unitSummaries[summaryKey];
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  if (!summary) {
    return (
      <div className="text-center py-12 text-[#A7A5C0]">
        <p>الملخص غير متوفر حالياً.</p>
        <button 
          onClick={() => setActiveView({ type: 'home' })}
          className="mt-4 px-4 py-2 bg-[#6C63FF] text-white rounded-xl text-xs font-bold"
        >
          العودة للرئيسية
        </button>
      </div>
    );
  }

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/15 border border-[#6C63FF]/30 px-3 py-1 rounded-full text-xs font-bold text-[#6C63FF] mb-2">
          <FileText className="w-3.5 h-3.5" />
          <span>بطاقة المراجعة المركزة</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black font-['Cairo'] text-white mb-2">
          {summary.title}
        </h1>
        <p className="text-sm text-[#A7A5C0]">
          مراجعة سريعة لأهم الأكواد والوسوم التي تعلمتها في هذه الوحدة لترسيخ الفهم قبل خوض الاختبار.
        </p>
      </div>

      <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-sm space-y-3">
        <div className="text-xs font-black uppercase tracking-wider text-[#A7A5C0] border-b border-[#6C63FF]/15 pb-3 mb-2">
          جدول الأكواد والوظائف
        </div>

        <div className="divide-y divide-white/5">
          {summary.items.map((item, idx) => (
            <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-right">
              <div className="flex-1">
                <span className="text-sm font-semibold text-white leading-relaxed">{item.desc}</span>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <code className="bg-[#0A0918] text-[#43E97B] px-3 py-1.5 rounded-xl border border-[#43E97B]/20 text-xs font-mono" dir="ltr">
                  {item.code}
                </code>
                <button
                  onClick={() => handleCopy(item.code, idx)}
                  className="p-1.5 rounded-lg bg-black/20 hover:bg-[#6C63FF]/20 text-[#A7A5C0] hover:text-[#6C63FF] transition-colors"
                  title="نسخ الكود"
                >
                  {copiedIndex === idx ? <Check className="w-4 h-4 text-[#43E97B]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => setActiveView({ type: 'home' })}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#252340] hover:bg-[#2e2b50] text-white text-xs font-bold transition-all"
        >
          <ArrowRight className="w-4 h-4" />
          <span>الرئيسية</span>
        </button>

        <button
          onClick={() => setActiveView({ type: 'exam', key: summaryKey })}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#F7971E] hover:bg-[#e08515] text-black text-xs font-black transition-all shadow-md shadow-[#F7971E]/20"
        >
          <span>خوض اختبار الوحدة الآن</span>
        </button>
      </div>
    </div>
  );
};
