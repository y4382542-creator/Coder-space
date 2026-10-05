import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Code2, Palette, ArrowLeft, Lightbulb, Check } from 'lucide-react';

export const IntroView: React.FC = () => {
  const { setActiveView } = useApp();

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      {/* Hero Header */}
      <div className="bg-[#1E1D2E] border border-[#43E97B]/30 rounded-3xl p-6 md:p-10 text-center shadow-xl relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-[#43E97B]/15 border border-[#43E97B]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#43E97B] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>التأسيس المفاهيمي للويب</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black font-['Cairo'] text-white mb-3">
          الفرق الفلسفي والعملي بين <span className="text-[#6C63FF]">HTML</span> و <span className="text-[#FF6584]">CSS</span>
        </h1>

        <p className="text-sm md:text-base text-[#A7A5C0] max-w-lg mx-auto leading-relaxed">
          قبل أن تكتب أول سطر كود، من المهم جداً أن تستوعب في ذهنك كيف تتكامل هاتان اللغتان معاً لصناعة كل ما تراه في الإنترنت.
        </p>
      </div>

      {/* Analogy Cards: HTML vs CSS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* HTML Card */}
        <div className="bg-[#1A1829] border border-[#6C63FF]/30 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-[#6C63FF]/15 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#6C63FF]/20 text-[#6C63FF] flex items-center justify-center text-xl font-bold">
              🏗️
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#6C63FF] uppercase tracking-wider">الهيكل الأساسي</div>
              <h2 className="text-lg font-black text-white font-['Cairo']">HTML هي البناء والعظام</h2>
            </div>
          </div>

          <p className="text-xs md:text-sm text-[#D6D4E8] leading-relaxed">
            تشبه <strong>العظام في جسم الإنسان</strong>، أو <strong>الأعمدة الإسمنتية والحديد في المبنى</strong>. لغة HTML تحدد ما هي الأشياء الموجودة: هنا يوجد عنوان، هنا زر، هنا صورة، وهنا حقل إدخال.
          </p>

          <div className="space-y-2 bg-[#141221] p-3.5 rounded-2xl border border-white/5 text-xs text-[#A7A5C0]">
            <div className="text-white font-bold mb-1">HTML تقول للمتصفح:</div>
            <div>• "ضع عنواناً رئيسياً هنا"</div>
            <div>• "ضع زراً للنقر هنا"</div>
            <div>• "ضع صورة في هذا الموضع"</div>
          </div>
        </div>

        {/* CSS Card */}
        <div className="bg-[#1A1829] border border-[#FF6584]/30 rounded-3xl p-6 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-[#FF6584]/15 pb-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF6584]/20 text-[#FF6584] flex items-center justify-center text-xl font-bold">
              🎨
            </div>
            <div>
              <div className="text-[11px] font-bold text-[#FF6584] uppercase tracking-wider">المظهر والجمال</div>
              <h2 className="text-lg font-black text-white font-['Cairo']">CSS هي المظهر والروح</h2>
            </div>
          </div>

          <p className="text-xs md:text-sm text-[#D6D4E8] leading-relaxed">
            تشبه <strong>الملابس ولون العيون والملامح</strong>، أو <strong>الطلاء والديكور والإضاءة في المبنى</strong>. لغة CSS تأخذ عناصر HTML البسيطة وتجعلها تحفة فنية تلائم المستخدم.
          </p>

          <div className="space-y-2 bg-[#141221] p-3.5 rounded-2xl border border-white/5 text-xs text-[#A7A5C0]">
            <div className="text-white font-bold mb-1">CSS تقول للمتصفح:</div>
            <div>• "اجعل العنوان بلون بنفسجي وبحجم 28px"</div>
            <div>• "اجعل الزر بزوايا دائرية وظل ناعم"</div>
            <div>• "رتب الأقسام بجانب بعضها بتدرج لوني"</div>
          </div>
        </div>
      </div>

      {/* Linking CSS to HTML Methods */}
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-6 md:p-8 shadow-sm space-y-5">
        <h3 className="text-lg md:text-xl font-black font-['Cairo'] text-white">
          كيف نربط كود CSS بصفحة HTML؟
        </h3>
        <p className="text-xs md:text-sm text-[#A7A5C0]">
          هناك طريقتان رئيسيتان لكتابة وتطبيق أكواد CSS:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-6 h-6 rounded-md bg-[#6C63FF]/20 text-[#6C63FF] text-xs flex items-center justify-center">1</span>
              <span>داخل صفحة HTML عبر &lt;style&gt;</span>
            </div>
            <p className="text-xs text-[#A7A5C0] leading-relaxed">
              توضع وسوم الأنماط داخل <code>&lt;head&gt;</code> ونكتب بداخلها وسم <code>&lt;style&gt;</code> لتضمين قواعد CSS بداخل نفس الملف.
            </p>
            <div className="bg-[#0A0918] p-3 rounded-xl border border-white/10 font-mono text-[11px] text-[#A9B1D6]" dir="ltr">
              &lt;head&gt;<br />
              &nbsp;&nbsp;&lt;style&gt;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;h1 &#123; color: blue; &#125;<br />
              &nbsp;&nbsp;&lt;/style&gt;<br />
              &lt;/head&gt;
            </div>
          </div>

          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <span className="w-6 h-6 rounded-md bg-[#43E97B]/20 text-[#43E97B] text-xs flex items-center justify-center">2</span>
              <span>في ملف خارجي مستقل style.css</span>
            </div>
            <p className="text-xs text-[#A7A5C0] leading-relaxed">
              الطريقة القياسية المتبعة للمشاريع الكبيرة: فصل كود CSS في ملف <code>style.css</code> وربطه عبر وسم <code>&lt;link&gt;</code>.
            </p>
            <div className="bg-[#0A0918] p-3 rounded-xl border border-white/10 font-mono text-[11px] text-[#A9B1D6]" dir="ltr">
              &lt;head&gt;<br />
              &nbsp;&nbsp;&lt;link rel="stylesheet" href="style.css"&gt;<br />
              &lt;/head&gt;
            </div>
          </div>
        </div>
      </div>

      {/* Start Button */}
      <div className="text-center pt-2">
        <button
          onClick={() => setActiveView({ type: 'lesson', subject: 'html', unit: 'u1', lesson: 'l1' })}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#4B44CC] hover:brightness-110 text-white font-black text-sm md:text-base shadow-xl shadow-[#6C63FF]/30 active:scale-95 transition-all"
        >
          <span>ابدأ الآن بتعلم دروس HTML</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
