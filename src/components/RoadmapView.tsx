import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, CheckCircle2, Clock, Sparkles, ArrowLeft, Code } from 'lucide-react';

export const RoadmapView: React.FC = () => {
  const { setActiveView } = useApp();

  const phases = [
    {
      status: 'active',
      badge: 'متاح الآن بالكامل',
      title: 'المرحلة 1: بناء وتصميم الواجهات الأساسية (HTML & CSS)',
      desc: 'إتقان 60 درساً شاملاً و 12 مشروعاً في هيكلة وتنسيق صفحات الويب وتجاوب الموبايل.',
      items: ['هيكلة HTML5 القياسية ومعايير SEO', 'تنسيق CSS المتقدم وتقنيات Flexbox & Grid', 'التصميم المتجاوب مع الهواتف الذكية']
    },
    {
      status: 'active',
      badge: 'متاح الآن بالكامل',
      title: 'المرحلة 2: لغة المنطق والتفاعل (JavaScript)',
      desc: '30 درساً و 6 مشاريع تفاعلية تجعلك متمكناً في عقل الويب JavaScript.',
      items: ['أساسيات اللغة (Variables, Conditions, Functions)', 'التفاعل مع الصفحة (Events & DOM)', 'معالجة البيانات (Arrays, Objects & LocalStorage)']
    },
    {
      status: 'soon',
      badge: 'قريباً',
      title: 'المرحلة 3: أطر العمل الحديثة (React & Tailwind CSS)',
      desc: 'بناء تطبيقات الصفحة الواحدة (SPA) ومكونات الواجهات فائقة السرعة.',
      items: ['تنسيقات Tailwind CSS فائقة السرعة', 'مكتبة React و دوال Hooks وإدارة الحالة (State Management)', 'بناء لوحات تحكم ومتاجر تفاعلية']
    },
    {
      status: 'upcoming',
      badge: 'خطة مستقبلية',
      title: 'المرحلة 4: البرمجة الخلفية والذكاء الاصطناعي (Backend & Python)',
      desc: 'ربط الواجهات بالسيرفرات وبناء تطبيقات ذكية متطورة.',
      items: ['قواعد البيانات والواجهات البرمجية REST APIs', 'أساسيات بايثون وتحليل البيانات', 'دمج نماذج الذكاء الاصطناعي مثل Gemini']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      <div className="bg-[#1E1D2E] border border-[#4FC3F7]/30 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-[#4FC3F7]/15 border border-[#4FC3F7]/30 px-3.5 py-1 rounded-full text-xs font-bold text-[#4FC3F7] mb-2.5">
          <Compass className="w-3.5 h-3.5" />
          <span>خارطة طريق مبرمج الويب المتكامل</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black font-['Cairo'] text-white mb-2">
          خارطة الطريق التعليمية والمهنية
        </h1>
        <p className="text-sm text-[#A7A5C0] max-w-xl">
          أنت الآن في المرحلة الذهبية الأولى لبناء <strong>"الأساس الصلب"</strong> الذي يرتكز عليه كل مبرمج محترف في العالم (HTML و CSS و JavaScript).
        </p>
      </div>

      <div className="space-y-4">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className={`rounded-3xl border p-5 md:p-6 transition-all ${
              phase.status === 'active'
                ? 'bg-[#1E1D2E] border-[#43E97B]/40 shadow-lg'
                : 'bg-[#181628] border-white/5 opacity-90'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3 mb-3">
              <h3 className="text-base md:text-lg font-black font-['Cairo'] text-white">
                {phase.title}
              </h3>
              <span className={`text-[11px] font-bold px-3 py-1 rounded-full self-start sm:self-auto ${
                phase.status === 'active'
                  ? 'bg-[#43E97B]/20 text-[#43E97B] border border-[#43E97B]/30'
                  : 'bg-white/5 text-[#A7A5C0] border border-white/10'
              }`}>
                {phase.badge}
              </span>
            </div>

            <p className="text-xs md:text-sm text-[#D6D4E8] leading-relaxed mb-3">
              {phase.desc}
            </p>

            <div className="space-y-1.5">
              {phase.items.map((it, iIdx) => (
                <div key={iIdx} className="flex items-center gap-2 text-xs text-[#A7A5C0]">
                  <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 ${phase.status === 'active' ? 'text-[#43E97B]' : 'text-gray-500'}`} />
                  <span>{it}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-2">
        <button
          onClick={() => setActiveView({ type: 'lesson', subject: 'html', unit: 'u1', lesson: 'l1' })}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#6C63FF] hover:bg-[#5850e0] text-white font-black text-sm md:text-base shadow-xl shadow-[#6C63FF]/30 active:scale-95 transition-all"
        >
          <span>ابدأ الآن بتأسيس مهاراتك من الدرس الأول</span>
        </button>
      </div>
    </div>
  );
};
