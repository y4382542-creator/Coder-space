import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { htmlUnitsMeta } from '../data/htmlLessons';
import { cssUnitsMeta } from '../data/cssLessons';
import { jsUnitsMeta } from '../data/jsLessons';
import {
  BookOpen,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  FileText,
  Award,
  FolderGit2,
  DollarSign,
  Compass,
  X,
  Code
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { activeView, setActiveView, progress } = useApp();

  // Track open accordion units
  const [openUnits, setOpenUnits] = useState<Record<string, boolean>>({
    u1: true,
    cu1: false,
    ju1: false,
  });

  const toggleUnit = (unitId: string) => {
    setOpenUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const isLessonActive = (subject: 'html' | 'css' | 'js', unit: string, lessonNumber: string) => {
    return activeView.type === 'lesson' && activeView.subject === subject && activeView.unit === unit && activeView.lesson === lessonNumber;
  };

  const isLessonCompleted = (subject: 'html' | 'css' | 'js', unit: string, lessonNumber: string) => {
    const id = `${subject}-${unit}-${lessonNumber}`;
    return progress.completedLessons.includes(id);
  };

  // Lesson titles dictionary for clean sidebar labels
  const lessonTitles: Record<string, string> = {
    // HTML
    'html-u1-l1': 'الهيكل الأساسي',
    'html-u1-l2': 'الفقرات <p>',
    'html-u1-l3': 'العناوين <h1>',
    'html-u1-l4': 'الروابط <a>',
    'html-u1-l5': 'الصور <img>',
    'html-u2-l1': 'القوائم <ol>',
    'html-u2-l2': 'القوائم <ul>',
    'html-u2-l3': 'الجداول <table>',
    'html-u2-l4': 'التعليقات <!-- -->',
    'html-u2-l5': 'الفاصل <hr>',
    'html-u3-l1': 'الإدخال <input>',
    'html-u3-l2': 'الأزرار <button>',
    'html-u3-l3': 'النماذج <form>',
    'html-u3-l4': 'الفيديو <video>',
    'html-u3-l5': 'الصوت <audio>',
    'html-u4-l1': 'الحاوية <div>',
    'html-u4-l2': 'النص السطري <span>',
    'html-u4-l3': 'المصطلحات <dl>',
    'html-u4-l4': 'التبويب الجديد',
    'html-u4-l5': 'الصور كروابط',
    'html-u5-l1': 'التضمين <iframe>',
    'html-u5-l2': 'المعرف id',
    'html-u5-l3': 'الفئة class',
    'html-u5-l4': 'التنقل <nav>',
    'html-u5-l5': 'المقال <article>',
    'html-u6-l1': 'القسم <section>',
    'html-u6-l2': 'الترويسة <header>',
    'html-u6-l3': 'التذييل <footer>',
    'html-u6-l4': 'الشكل <figure>',
    'html-u6-l5': 'الوسوم <meta>',

    // CSS
    'css-cu1-l1': 'لون النص color',
    'css-cu1-l2': 'لون الخلفية bg-color',
    'css-cu1-l3': 'نوع الخط font-family',
    'css-cu1-l4': 'حجم الخط font-size',
    'css-cu1-l5': 'سُمك الخط font-weight',
    'css-cu2-l1': 'الإطارات border',
    'css-cu2-l2': 'الهامش الخارجي margin',
    'css-cu2-l3': 'الهامش الداخلي padding',
    'css-cu2-l4': 'المحاذاة text-align',
    'css-cu2-l5': 'التسطير decoration',
    'css-cu3-l1': 'تحويم الروابط a:hover',
    'css-cu3-l2': 'تحويم الأزرار hover',
    'css-cu3-l3': 'صورة الخلفية bg-image',
    'css-cu3-l4': 'العرض الأقصى width',
    'css-cu3-l5': 'الارتفاع والشاشة height',
    'css-cu4-l1': 'محدد الفئة class (.)',
    'css-cu4-l2': 'محدد المعرف id (#)',
    'css-cu4-l3': 'التسطير الملون المتقدم',
    'css-cu4-l4': 'مؤشر الفأرة cursor',
    'css-cu4-l5': 'الإخفاء display: none',
    'css-cu5-l1': 'الصندوق المرن Flexbox',
    'css-cu5-l2': 'الشبكة CSS Grid',
    'css-cu5-l3': 'تدرج الألوان gradient',
    'css-cu5-l4': 'ظلال النص text-shadow',
    'css-cu5-l5': 'ظلال البطاقات box-shadow',
    'css-cu6-l1': 'تدوير العنصر rotate',
    'css-cu6-l2': 'تكبير العنصر scale',
    'css-cu6-l3': 'الحركة الناعمة transition',
    'css-cu6-l4': 'الرسوم التلقائية animation',
    'css-cu6-l5': 'التجاوب @media query',

    // JavaScript
    'js-ju1-l1': 'الطباعة console.log()',
    'js-ju1-l2': 'المتغيرات let & const',
    'js-ju1-l3': 'النصوص والأرقام Strings',
    'js-ju1-l4': 'القيم المنطقية Booleans',
    'js-ju1-l5': 'كشف النوع typeof',
    'js-ju2-l1': 'العمليات وباقي القسمة %',
    'js-ju2-l2': 'الشروط if / else',
    'js-ju2-l3': 'المقارنة الصارمة == و ===',
    'js-ju2-l4': 'العمليات المنطقية && و || و !',
    'js-ju2-l5': 'المعامل الشرطي Ternary',
    'js-ju3-l1': 'صناعة الدوال Functions',
    'js-ju3-l2': 'المعاملات والإرجاع Return',
    'js-ju3-l3': 'الدوال السهمية Arrow (=>)',
    'js-ju3-l4': 'مدى المتغيرات Scope',
    'js-ju3-l5': 'القيم الافتراضية للمعاملات',
    'js-ju4-l1': 'المصفوفات وفهرستها Arrays',
    'js-ju4-l2': 'إضافة وحذف العناصر push & pop',
    'js-ju4-l3': 'الكائنات Objects',
    'js-ju4-l4': 'المرور والتحويل forEach & map',
    'js-ju4-l5': 'الفلترة المتقدمة filter',
    'js-ju5-l1': 'استهداف العناصر DOM & querySelector',
    'js-ju5-l2': 'تحديث النصوص textContent',
    'js-ju5-l3': 'تعديل التصميم والألوان style',
    'js-ju5-l4': 'الاستماع للأحداث addEventListener',
    'js-ju5-l5': 'تبديل السمة classList',
    'js-ju6-l1': 'المؤقت لمرة واحدة setTimeout',
    'js-ju6-l2': 'المؤقت المتكرر setInterval',
    'js-ju6-l3': 'قوالب النصوص المائلة Template ``',
    'js-ju6-l4': 'التخزين المحلي localStorage',
    'js-ju6-l5': 'الربط السحابي JSON & fetch()',
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
        />
      )}

      <aside className={`
        fixed md:sticky top-[68px] right-0 z-40
        w-[290px] h-[calc(100vh-68px)]
        bg-[#141221] border-l border-[#6C63FF]/20
        flex flex-col overflow-y-auto p-3.5 space-y-4
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
      `}>
        {/* Mobile Close Button */}
        <div className="flex md:hidden items-center justify-between pb-2 border-b border-[#6C63FF]/15">
          <span className="text-xs font-bold text-[#A7A5C0]">قائمة الدروس والمحتوى</span>
          <button onClick={onClose} className="p-1 rounded text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Essential Quick Nav Links */}
        <div className="space-y-1.5">
          <button
            onClick={() => { setActiveView({ type: 'how-to-use' }); onClose(); }}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all text-right ${
              activeView.type === 'how-to-use'
                ? 'bg-[#6C63FF]/20 border-[#6C63FF] text-[#6C63FF]'
                : 'bg-[#1E1D2E] border-[#6C63FF]/15 text-white hover:border-[#6C63FF]/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#6C63FF]" />
              <span>كيف تستخدم المنصة؟</span>
            </div>
            <span className="text-[10px] bg-[#6C63FF]/20 text-[#6C63FF] px-2 py-0.5 rounded-full">دليل</span>
          </button>

          <button
            onClick={() => { setActiveView({ type: 'intro' }); onClose(); }}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all text-right ${
              activeView.type === 'intro'
                ? 'bg-[#43E97B]/20 border-[#43E97B] text-[#43E97B]'
                : 'bg-[#1E1D2E] border-[#43E97B]/15 text-white hover:border-[#43E97B]/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#43E97B]" />
              <span>فلسفة HTML و CSS بالتشبيهات</span>
            </div>
            <span className="text-[10px] bg-[#43E97B]/20 text-[#43E97B] px-2 py-0.5 rounded-full">فهم</span>
          </button>

          <button
            onClick={() => { setActiveView({ type: 'projects' }); onClose(); }}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all text-right ${
              activeView.type === 'projects'
                ? 'bg-[#28C874]/20 border-[#28C874] text-[#28C874]'
                : 'bg-[#1E1D2E] border-[#28C874]/15 text-white hover:border-[#28C874]/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-[#28C874]" />
              <span>18 مشروعاً تطبيقياً (مع الحلول)</span>
            </div>
            <span className="text-[10px] bg-[#28C874]/20 text-[#28C874] px-2 py-0.5 rounded-full">مشاريع</span>
          </button>

          <button
            onClick={() => { setActiveView({ type: 'income' }); onClose(); }}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all text-right ${
              activeView.type === 'income'
                ? 'bg-[#F7971E]/20 border-[#F7971E] text-[#F7971E]'
                : 'bg-[#1E1D2E] border-[#F7971E]/20 text-[#F7971E] hover:border-[#F7971E]/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#F7971E]" />
              <span className="font-extrabold">طرق الربح من البرمجة 💰</span>
            </div>
            <span className="text-[10px] bg-[#F7971E]/20 text-[#F7971E] px-2 py-0.5 rounded-full">دخل</span>
          </button>

          <button
            onClick={() => { setActiveView({ type: 'roadmap' }); onClose(); }}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-xs font-bold transition-all text-right ${
              activeView.type === 'roadmap'
                ? 'bg-[#4FC3F7]/20 border-[#4FC3F7] text-[#4FC3F7]'
                : 'bg-[#1E1D2E] border-[#4FC3F7]/15 text-white hover:border-[#4FC3F7]/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#4FC3F7]" />
              <span>خارطة طريق المستقبل</span>
            </div>
            <span className="text-[10px] bg-[#4FC3F7]/20 text-[#4FC3F7] px-2 py-0.5 rounded-full">توجيه</span>
          </button>
        </div>

        {/* HTML Section */}
        <div>
          <div className="text-[11px] font-black uppercase tracking-wider text-[#6C63FF] px-2 py-1 mb-1">
            مسار لغة HTML (30 درساً)
          </div>
          <div className="space-y-1">
            {htmlUnitsMeta.map((u) => {
              const isOpenUnit = !!openUnits[u.id];
              return (
                <div key={u.id} className="rounded-xl overflow-hidden bg-[#1A1829]/60 border border-[#6C63FF]/15">
                  <button
                    onClick={() => toggleUnit(u.id)}
                    className="w-full flex items-center justify-between p-2 text-right hover:bg-[#232136] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#6C63FF]/20 text-[#6C63FF] text-xs font-bold flex items-center justify-center">
                        {u.num.replace('الوحدة ', '')}
                      </span>
                      <span className="text-xs font-bold text-white">{u.title}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#A7A5C0] transition-transform duration-200 ${isOpenUnit ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpenUnit && (
                    <div className="p-1 space-y-0.5 bg-[#141221]/80 border-t border-[#6C63FF]/10 pr-4">
                      {[1, 2, 3, 4, 5].map((lNum) => {
                        const lessonKey = `l${lNum}`;
                        const fullKey = `html-${u.id}-${lessonKey}`;
                        const active = isLessonActive('html', u.id, lessonKey);
                        const done = isLessonCompleted('html', u.id, lessonKey);
                        const title = lessonTitles[fullKey] || `درس ${lNum}`;

                        return (
                          <button
                            key={lNum}
                            onClick={() => {
                              setActiveView({ type: 'lesson', subject: 'html', unit: u.id, lesson: lessonKey });
                              onClose();
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all text-right ${
                              active
                                ? 'bg-[#6C63FF] text-white font-bold'
                                : done
                                ? 'text-[#43E97B] hover:bg-[#1E1D2E]'
                                : 'text-[#A7A5C0] hover:text-white hover:bg-[#1E1D2E]'
                            }`}
                          >
                            <span className="truncate">{title}</span>
                            {done && <CheckCircle2 className="w-3 h-3 text-[#43E97B] flex-shrink-0" />}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => { setActiveView({ type: 'summary', key: `html-${u.id}` }); onClose(); }}
                        className="w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#A7A5C0] hover:text-[#6C63FF] text-right italic"
                      >
                        <FileText className="w-3 h-3" />
                        <span>ملخص الوحدة</span>
                      </button>

                      <button
                        onClick={() => { setActiveView({ type: 'exam', key: `html-${u.id}` }); onClose(); }}
                        className="w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#F7971E] hover:underline text-right font-bold"
                      >
                        <Award className="w-3 h-3" />
                        <span>اختبار الوحدة</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* HTML Final Exam */}
            <button
              onClick={() => { setActiveView({ type: 'exam', key: 'html-final' }); onClose(); }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#F7971E]/15 to-[#FF6584]/15 border border-[#F7971E]/30 text-xs font-bold text-[#F7971E] hover:border-[#F7971E] transition-all text-right mt-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏆</span>
                <span>الامتحان الشامل والشهادة (HTML)</span>
              </div>
              <span className="text-[10px] bg-[#F7971E]/20 px-2 py-0.5 rounded-full">شهادة</span>
            </button>
          </div>
        </div>

        {/* CSS Section */}
        <div>
          <div className="text-[11px] font-black uppercase tracking-wider text-[#FF6584] px-2 py-1 mb-1">
            مسار لغة CSS (30 درساً)
          </div>
          <div className="space-y-1">
            {cssUnitsMeta.map((u) => {
              const isOpenUnit = !!openUnits[u.id];
              return (
                <div key={u.id} className="rounded-xl overflow-hidden bg-[#1A1829]/60 border border-[#FF6584]/15">
                  <button
                    onClick={() => toggleUnit(u.id)}
                    className="w-full flex items-center justify-between p-2 text-right hover:bg-[#232136] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#FF6584]/20 text-[#FF6584] text-xs font-bold flex items-center justify-center">
                        {u.num.replace('الوحدة ', '')}
                      </span>
                      <span className="text-xs font-bold text-white">{u.title}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#A7A5C0] transition-transform duration-200 ${isOpenUnit ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpenUnit && (
                    <div className="p-1 space-y-0.5 bg-[#141221]/80 border-t border-[#FF6584]/10 pr-4">
                      {[1, 2, 3, 4, 5].map((lNum) => {
                        const lessonKey = `l${lNum}`;
                        const fullKey = `css-${u.id}-${lessonKey}`;
                        const active = isLessonActive('css', u.id, lessonKey);
                        const done = isLessonCompleted('css', u.id, lessonKey);
                        const title = lessonTitles[fullKey] || `درس ${lNum}`;

                        return (
                          <button
                            key={lNum}
                            onClick={() => {
                              setActiveView({ type: 'lesson', subject: 'css', unit: u.id, lesson: lessonKey });
                              onClose();
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all text-right ${
                              active
                                ? 'bg-[#FF6584] text-white font-bold'
                                : done
                                ? 'text-[#43E97B] hover:bg-[#1E1D2E]'
                                : 'text-[#A7A5C0] hover:text-white hover:bg-[#1E1D2E]'
                            }`}
                          >
                            <span className="truncate">{title}</span>
                            {done && <CheckCircle2 className="w-3 h-3 text-[#43E97B] flex-shrink-0" />}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => { setActiveView({ type: 'summary', key: `css-${u.id.replace('cu','u')}` }); onClose(); }}
                        className="w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#A7A5C0] hover:text-[#FF6584] text-right italic"
                      >
                        <FileText className="w-3 h-3" />
                        <span>ملخص الوحدة</span>
                      </button>

                      <button
                        onClick={() => { setActiveView({ type: 'exam', key: `css-${u.id}` }); onClose(); }}
                        className="w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#FF6584] hover:underline text-right font-bold"
                      >
                        <Award className="w-3 h-3" />
                        <span>اختبار الوحدة</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* CSS Final Exam */}
            <button
              onClick={() => { setActiveView({ type: 'exam', key: 'css-final' }); onClose(); }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#FF6584]/15 to-[#F7971E]/15 border border-[#FF6584]/30 text-xs font-bold text-[#FF6584] hover:border-[#FF6584] transition-all text-right mt-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏆</span>
                <span>الامتحان الشامل والشهادة (CSS)</span>
              </div>
              <span className="text-[10px] bg-[#FF6584]/20 px-2 py-0.5 rounded-full">شهادة</span>
            </button>
          </div>
        </div>

        {/* JavaScript Section */}
        <div>
          <div className="text-[11px] font-black uppercase tracking-wider text-[#F7DF1E] px-2 py-1 mb-1 flex items-center justify-between">
            <span>مسار لغة JavaScript (30 درساً)</span>
            <span className="text-[9px] bg-[#F7DF1E]/20 text-[#F7DF1E] px-1.5 py-0.5 rounded font-bold">تفاعلي</span>
          </div>
          <div className="space-y-1">
            {jsUnitsMeta.map((u) => {
              const isOpenUnit = !!openUnits[u.id];
              return (
                <div key={u.id} className="rounded-xl overflow-hidden bg-[#1A1829]/60 border border-[#F7DF1E]/15">
                  <button
                    onClick={() => toggleUnit(u.id)}
                    className="w-full flex items-center justify-between p-2 text-right hover:bg-[#232136] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-[#F7DF1E]/20 text-[#F7DF1E] text-xs font-bold flex items-center justify-center">
                        {u.num.replace('الوحدة ', '')}
                      </span>
                      <span className="text-xs font-bold text-white">{u.title}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#A7A5C0] transition-transform duration-200 ${isOpenUnit ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpenUnit && (
                    <div className="p-1 space-y-0.5 bg-[#141221]/80 border-t border-[#F7DF1E]/10 pr-4">
                      {[1, 2, 3, 4, 5].map((lNum) => {
                        const lessonKey = `l${lNum}`;
                        const fullKey = `js-${u.id}-${lessonKey}`;
                        const active = isLessonActive('js', u.id, lessonKey);
                        const done = isLessonCompleted('js', u.id, lessonKey);
                        const title = lessonTitles[fullKey] || `درس ${lNum}`;

                        return (
                          <button
                            key={lNum}
                            onClick={() => {
                              setActiveView({ type: 'lesson', subject: 'js', unit: u.id, lesson: lessonKey });
                              onClose();
                            }}
                            className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all text-right ${
                              active
                                ? 'bg-[#F7DF1E] text-black font-bold'
                                : done
                                ? 'text-[#43E97B] hover:bg-[#1E1D2E]'
                                : 'text-[#A7A5C0] hover:text-white hover:bg-[#1E1D2E]'
                            }`}
                          >
                            <span className="truncate">{title}</span>
                            {done && <CheckCircle2 className="w-3 h-3 text-[#43E97B] flex-shrink-0" />}
                          </button>
                        );
                      })}

                      <button
                        onClick={() => { setActiveView({ type: 'summary', key: `js-${u.id}` }); onClose(); }}
                        className="w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#A7A5C0] hover:text-[#F7DF1E] text-right italic"
                      >
                        <FileText className="w-3 h-3" />
                        <span>ملخص الوحدة</span>
                      </button>

                      <button
                        onClick={() => { setActiveView({ type: 'exam', key: `js-${u.id}` }); onClose(); }}
                        className="w-full flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-[#F7DF1E] hover:underline text-right font-bold"
                      >
                        <Award className="w-3 h-3" />
                        <span>اختبار الوحدة</span>
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

            {/* JS Final Exam */}
            <button
              onClick={() => { setActiveView({ type: 'exam', key: 'js-final' }); onClose(); }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-[#F7DF1E]/15 to-[#43E97B]/15 border border-[#F7DF1E]/30 text-xs font-bold text-[#F7DF1E] hover:border-[#F7DF1E] transition-all text-right mt-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">🏆</span>
                <span>الامتحان الشامل والشهادة (JavaScript)</span>
              </div>
              <span className="text-[10px] bg-[#F7DF1E]/20 px-2 py-0.5 rounded-full">شهادة</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
