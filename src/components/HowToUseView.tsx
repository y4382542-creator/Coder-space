import React from 'react';
import { useApp } from '../context/AppContext';
import { 
  BookOpen, 
  CheckCircle2, 
  HelpCircle, 
  Youtube, 
  MessageSquare, 
  Mail, 
  ArrowLeft,
  Sparkles 
} from 'lucide-react';

export const HowToUseView: React.FC = () => {
  const { setActiveView } = useApp();

  const steps = [
    {
      num: '1',
      title: 'اختر المسار: ابدأ بـ HTML ثم CSS ثم JavaScript',
      desc: 'الترتيب المنطقي السليم هو إتقان هيكل الصفحة أولاً، ثم تزيين المظهر بالألوان والتنسيقات، ثم إضافة الروح والتفاعل البرمجي بـ JS.'
    },
    {
      num: '2',
      title: 'اقرأ الشرح النظري واستمع للشرح الصوتي',
      desc: 'كل درس مصحوب بشرح مفاهيمي مبسط، مع زر قراءة صوتية يدعم النطق العربي الفصيح لمساعدتك على الاستيعاب السريع أثناء التنقل.'
    },
    {
      num: '3',
      title: 'طبق عملياً في المحرر الحي المباشر',
      desc: 'لا تكتفِ بالقراءة! اكتب الكود في المحرر التفاعلي واضغط زر "تشغيل الكود (Run)" لتشاهد النتيجة الحية الفورية أمام عينيك.'
    },
    {
      num: '4',
      title: 'أجب عن الأسئلة واكسب النقاط',
      desc: 'في نهاية كل درس سؤالان سريعان، وعند إنهاء الوحدة ادخل الاختبار التحصيلي الشامل لتختبر نفسك بدقة وتكسب نقاط الـ XP.'
    },
    {
      num: '5',
      title: 'احصل على شهاداتك المعتمدة واطبعها',
      desc: 'عند اجتياز الاختبار بنسبة 60% فأعلى، ستفتح لك شهادة إتمام وتفوق رسمية تحمل اسمك وتاريخ إنجازك ويمكنك طباعتها أو حفظها كـ PDF.'
    },
    {
      num: '6',
      title: 'طبق في قسم الـ 18 مشروعاً',
      desc: 'المشاريع العملية هي جواز سفرك للعمل الحر وتوظيف مهاراتك؛ طبقها وقارن كودك مع الحلول النموذجية المقترحة.'
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-[#6C63FF]/15 border border-[#6C63FF]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#6C63FF] mb-2.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>دليل الاستخدام الكامل</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black font-['Cairo'] text-white mb-2">
          كيف تحقق أقصى استفادة من منصة كودر سبيس (Coder Space)؟
        </h1>
        <p className="text-sm text-[#A7A5C0] max-w-xl">
          صُممت هذه المنصة لتكون دليلك المتكامل خطوة بخطوة للوصول للاحتراف بدون تشتت وبشكل مجاني تماماً.
        </p>
      </div>

      {/* Steps List */}
      <div className="space-y-3">
        {steps.map((st, idx) => (
          <div key={idx} className="bg-[#1A1829] border border-white/5 hover:border-[#6C63FF]/30 p-4 md:p-5 rounded-2xl flex items-start gap-4 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6C63FF] to-[#4B44CC] text-white flex items-center justify-center font-['Cairo'] font-black text-base flex-shrink-0">
              {st.num}
            </div>
            <div>
              <h3 className="text-sm md:text-base font-bold text-white mb-1">
                {st.title}
              </h3>
              <p className="text-xs md:text-sm text-[#A7A5C0] leading-relaxed">
                {st.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Support & Community Channels */}
      <div className="bg-[#1E1D2E] border border-white/10 rounded-3xl p-6 md:p-8 space-y-4">
        <h3 className="text-lg font-black font-['Cairo'] text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#4FC3F7]" />
          <span>مجتمع كودر سبيس (Coder Space) والدعم التعليمي:</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="https://whatsapp.com/channel/0029VbCumaTGzzKYt6PYI42l"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-[#141221] border border-white/5 hover:border-[#43E97B] text-right flex flex-col justify-between transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#43E97B]/20 text-[#43E97B] flex items-center justify-center mb-3">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="font-bold text-sm text-white group-hover:text-[#43E97B] transition-colors">قناة واتساب الرسمية</div>
            <div className="text-[11px] text-[#A7A5C0] mt-1">تحديثات الدروس والتحديات</div>
          </a>

          <a
            href="https://www.youtube.com/@CoderSpace_Platform"
            target="_blank"
            rel="noreferrer"
            className="p-4 rounded-2xl bg-[#141221] border border-white/5 hover:border-[#FF0000] text-right flex flex-col justify-between transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FF0000]/20 text-[#FF0000] flex items-center justify-center mb-3">
              <Youtube className="w-4 h-4" />
            </div>
            <div className="font-bold text-sm text-white group-hover:text-[#FF0000] transition-colors">قناة يوتيوب</div>
            <div className="text-[11px] text-[#A7A5C0] mt-1">شروحات فيديو تفصيلية</div>
          </a>

          <a
            href="mailto:coderspace.platform@gmail.com"
            className="p-4 rounded-2xl bg-[#141221] border border-white/5 hover:border-[#6C63FF] text-right flex flex-col justify-between transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#6C63FF]/20 text-[#6C63FF] flex items-center justify-center mb-3">
              <Mail className="w-4 h-4" />
            </div>
            <div className="font-bold text-sm text-white group-hover:text-[#6C63FF] transition-colors">البريد الإلكتروني</div>
            <div className="text-[11px] text-[#A7A5C0] mt-1">coderspace.platform@gmail.com</div>
          </a>
        </div>
      </div>

      <div className="text-center pt-2">
        <button
          onClick={() => setActiveView({ type: 'intro' })}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#43E97B] text-[#0A2010] font-black text-sm md:text-base shadow-lg shadow-[#43E97B]/20 active:scale-95 transition-all"
        >
          <span>انتقل لشرح الفلسفة والتشبيهات</span>
        </button>
      </div>
    </div>
  );
};
