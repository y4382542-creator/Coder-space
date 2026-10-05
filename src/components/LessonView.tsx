import React, { useState, useEffect } from 'react';
import { Lesson } from '../types';
import { useApp } from '../context/AppContext';
import { htmlQuestionsByUnit, cssQuestionsByUnit, jsQuestionsByUnit } from '../data/questions';
import { QuizQuestion } from './QuizQuestion';
import {
  Play,
  Copy,
  Check,
  Volume2,
  ArrowRight,
  ArrowLeft,
  Code2,
  Eye,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Maximize2,
  Minimize2,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonViewProps {
  lesson: Lesson;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  const { progress, completeLesson, addScore, playTTS, ttsSpeed, setTtsSpeed } = useApp();
  const [copiedCode, setCopiedCode] = useState(false);
  const [userPracticeCode, setUserPracticeCode] = useState(lesson.practice);
  const [previewSrcDoc, setPreviewSrcDoc] = useState('');
  const [showLiveOutput, setShowLiveOutput] = useState(false);
  const [isFullscreenEditor, setIsFullscreenEditor] = useState(false);

  // Sync state when navigating between lessons (Scenario Fix!)
  useEffect(() => {
    setUserPracticeCode(lesson.practice);
    setPreviewSrcDoc('');
    setShowLiveOutput(false);
    setCopiedCode(false);
    setIsFullscreenEditor(false);
  }, [lesson.id]);

  const isCompleted = progress.completedLessons.includes(lesson.id);

  // Get 2 quiz questions for this lesson based on lesson number
  const lNum = parseInt(lesson.lessonNumber.replace('l', '')) || 1;
  const questionsList = lesson.subject === 'html' 
    ? (htmlQuestionsByUnit[lesson.unit] || []) 
    : lesson.subject === 'css'
    ? (cssQuestionsByUnit[lesson.unit] || [])
    : (jsQuestionsByUnit[lesson.unit] || []);

  const lessonQuestions = questionsList.slice((lNum - 1) * 2, (lNum - 1) * 2 + 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(lesson.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleResetPractice = () => {
    setUserPracticeCode(lesson.practice);
    setShowLiveOutput(false);
    setPreviewSrcDoc('');
  };

  const handleRunCode = () => {
    let fullCode = userPracticeCode;

    // Infinite loop protection injection for JS
    if (lesson.subject === 'js') {
      fullCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Tajawal', Arial, sans-serif; padding: 14px; background: #0F0E17; color: #FFFFFE; }
    #console-box { background: #0A0918; color: #43E97B; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 13px; margin-top: 14px; line-height: 1.6; direction: ltr; text-align: left; border: 1px solid #232136; max-height: 250px; overflow-y: auto; }
    .dom-preview { background: #fff; color: #222; padding: 12px; border-radius: 8px; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="dom-preview">
    <h2 id="main-title" style="color:#6C63FF;margin-top:0;">عنصر HTML للتعديل:</h2>
    <p id="welcome">نص تجريبي لاختبار دوال DOM و TextContent.</p>
    <button id="my-btn" style="padding:8px 16px;background:#6C63FF;color:#fff;border:none;border-radius:6px;cursor:pointer;">زر تجريبي</button>
  </div>

  <div id="console-box">
    <div style="color:#F7DF1E;border-bottom:1px solid #333;padding-bottom:4px;margin-bottom:6px;display:flex;justify-content:space-between;">
      <span>سجل المخرجات (Console):</span>
      <span style="font-size:10px;color:#888;">محلي وآمن</span>
    </div>
  </div>

  <script>
    const box = document.getElementById('console-box');
    const origLog = console.log;
    console.log = function(...args) {
      origLog.apply(console, args);
      const line = document.createElement('div');
      line.style.borderTop = '1px dashed rgba(255,255,255,0.1)';
      line.style.padding = '3px 0';
      line.textContent = '> ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
      box.appendChild(line);
      box.scrollTop = box.scrollHeight;
    };

    window.onerror = function(msg, url, line) {
      const errLine = document.createElement('div');
      errLine.style.color = '#FF6584';
      errLine.style.fontWeight = 'bold';
      errLine.textContent = '❌ خطأ: ' + msg;
      box.appendChild(errLine);
      return true;
    };

    try {
      ${userPracticeCode}
    } catch(err) {
      console.log("خطأ في التنفيذ: " + err.message);
    }
  </script>
</body>
</html>`;
    } else if (lesson.subject === 'css') {
      fullCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Tajawal', Arial, sans-serif; padding: 16px; background: #fff; color: #222; }
    ${userPracticeCode}
  </style>
</head>
<body>
  <h1 id="main-title">عنوان رئيسي h1</h1>
  <h2>عنوان فرعي h2</h2>
  <p class="highlight note">هذه فقرة تجريبية لاختبار تنسيقات class و id وخصائص CSS.</p>
  <p>فقرة عادية ثانية للمقارنة.</p>
  <button>زر قابل للتنسيق</button>
  <a href="#">رابط تجريبي</a>
  <div class="card" style="margin-top:12px;padding:12px;border:1px solid #ddd;border-radius:8px;">
    محتوى بطاقة تجريبية داخل div
  </div>
</body>
</html>`;
    } else {
      fullCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Tajawal', Arial, sans-serif; padding: 16px; background: #fff; color: #222; line-height: 1.7; }
  </style>
</head>
<body>
  ${userPracticeCode}
</body>
</html>`;
    }

    setPreviewSrcDoc(fullCode);
    setShowLiveOutput(true);
  };

  const handleComplete = () => {
    if (!isCompleted) {
      completeLesson(lesson.id);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    }
    if (hasNext) {
      onNext();
    }
  };

  const handleQuestionAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      addScore(10);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-[#1A1829] via-[#1E1D2E] to-[#1A1829] border border-[#6C63FF]/20 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6C63FF]/15 border border-[#6C63FF]/30 px-3 py-1 rounded-full text-xs font-bold text-[#6C63FF] mb-2.5">
              <span>{lesson.tag}</span>
              {isCompleted && (
                <span className="flex items-center gap-1 text-[#43E97B]">
                  • تم الإنجاز <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
              )}
            </div>

            <h1 className="text-2xl md:text-4xl font-black font-['Cairo'] text-white tracking-tight mb-2">
              {lesson.title}
            </h1>
            <p className="text-sm md:text-base text-[#A7A5C0]">
              {lesson.sub}
            </p>
          </div>

          {/* Audio TTS controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => playTTS(`${lesson.title}. ${lesson.sub}. ${lesson.conceptHtml.replace(/<[^>]*>?/gm, ' ')}`)}
              className="flex items-center gap-2 bg-[#6C63FF]/20 hover:bg-[#6C63FF] text-[#6C63FF] hover:text-white px-4 py-2.5 rounded-2xl border border-[#6C63FF]/40 text-xs font-bold transition-all shadow-sm active:scale-95"
            >
              <Volume2 className="w-4 h-4" />
              <span>استمع للشرح</span>
            </button>
            <select
              value={ttsSpeed}
              onChange={(e) => setTtsSpeed(Number(e.target.value))}
              aria-label="سرعة القراءة الصوتية"
              className="bg-[#1E1D2E] border border-white/10 rounded-xl px-2.5 py-2 text-xs text-[#A7A5C0] focus:outline-none focus:border-[#6C63FF]"
            >
              <option value={0.8}>0.8x</option>
              <option value={1}>1.0x</option>
              <option value={1.25}>1.25x</option>
              <option value={1.5}>1.5x</option>
            </select>
          </div>
        </div>
      </div>

      {/* 1. Concept Card */}
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#A7A5C0] border-b border-[#6C63FF]/15 pb-3 mb-4">
          <div className="w-7 h-7 rounded-lg bg-[#6C63FF]/20 text-[#6C63FF] flex items-center justify-center">
            <BookOpen className="w-4 h-4" />
          </div>
          <span>المفهوم النظري والشرح المعياري</span>
        </div>

        <div 
          className="prose prose-invert max-w-none text-sm md:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: lesson.conceptHtml }}
        />
      </div>

      {/* 2. Code Example Card */}
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center justify-between border-b border-[#6C63FF]/15 pb-3 mb-4">
          <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#A7A5C0]">
            <div className="w-7 h-7 rounded-lg bg-[#4FC3F7]/20 text-[#4FC3F7] flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <span>الكود البرمجي القياسي</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#A7A5C0] bg-black/30 px-2 py-0.5 rounded">
              {lesson.lang}
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 bg-[#6C63FF]/20 hover:bg-[#6C63FF] text-[#6C63FF] hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>تم النسخ!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>نسخ الكود</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-[#0A0918] rounded-2xl border border-white/10 p-4 font-mono text-xs md:text-sm text-[#A9B1D6] leading-relaxed overflow-x-auto text-left" dir="ltr">
          <pre>{lesson.code}</pre>
        </div>
      </div>

      {/* 3. Static Preview Card */}
      <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-sm">
        <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#A7A5C0] border-b border-[#6C63FF]/15 pb-3 mb-4">
          <div className="w-7 h-7 rounded-lg bg-[#43E97B]/20 text-[#43E97B] flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
          <span>المعاينة النموذجية لما يراه المستخدم</span>
        </div>

        <div 
          className="rounded-2xl overflow-hidden border border-white/10"
          dangerouslySetInnerHTML={{ __html: lesson.preview }}
        />
      </div>

      {/* 4. Interactive Live Practice Editor */}
      <div className={`bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-sm transition-all ${
        isFullscreenEditor ? 'fixed inset-4 z-50 overflow-y-auto bg-[#141221] border-[#6C63FF]' : ''
      }`}>
        <div className="flex items-center justify-between border-b border-[#6C63FF]/15 pb-3 mb-4">
          <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#A7A5C0]">
            <div className="w-7 h-7 rounded-lg bg-[#F7971E]/20 text-[#F7971E] flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <span>التطبيق العملي الفوري!</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetPractice}
              title="إعادة تعيين كود التمرين الأولي"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#A7A5C0] hover:text-white transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsFullscreenEditor(!isFullscreenEditor)}
              title={isFullscreenEditor ? 'تصغير المحرر' : 'تكبير المحرر لكامل الشاشة'}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-[#A7A5C0] hover:text-white transition-colors"
            >
              {isFullscreenEditor ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={handleRunCode}
              className="flex items-center gap-2 bg-gradient-to-r from-[#43E97B] to-[#28C874] hover:brightness-110 text-[#0A2010] px-4 py-2 rounded-xl text-xs font-extrabold shadow-md shadow-[#43E97B]/20 active:scale-95 transition-all"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>تشغيل الكود (Run)</span>
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-2xl overflow-hidden border border-[#6C63FF]/30 bg-[#0A0918]">
            <div className="bg-[#141221] px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-[#A7A5C0]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              </div>
              <span className="font-mono">{lesson.lang === 'CSS' ? 'style.css' : lesson.lang === 'JavaScript' ? 'script.js' : 'index.html'}</span>
            </div>

            <textarea
              value={userPracticeCode}
              onChange={(e) => setUserPracticeCode(e.target.value)}
              className={`w-full bg-transparent p-4 font-mono text-xs md:text-sm text-[#A9B1D6] focus:outline-none resize-y text-left leading-relaxed ${
                isFullscreenEditor ? 'min-h-[280px]' : 'min-h-[140px]'
              }`}
              dir="ltr"
              spellCheck="false"
            />
          </div>

          {showLiveOutput && (
            <div className="rounded-2xl overflow-hidden border border-[#43E97B]/40 bg-white">
              <div className="bg-gray-100 px-4 py-1.5 border-b border-gray-200 text-xs text-gray-600 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#43E97B]" />
                <span>النتيجة الحية المباشرة:</span>
              </div>
              <iframe
                title="live-output"
                srcDoc={previewSrcDoc}
                className="w-full min-h-[170px] border-none bg-white p-2"
                sandbox="allow-scripts"
              />
            </div>
          )}

          <div className="flex items-start gap-2 bg-[#F7971E]/10 border border-[#F7971E]/20 p-3 rounded-xl text-xs text-[#F7971E] font-medium">
            <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>تلميح ذهبي: {lesson.hint}</span>
          </div>
        </div>
      </div>

      {/* 5. Mini Quiz Questions for this Lesson */}
      {lessonQuestions.length > 0 && (
        <div className="bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-[#A7A5C0] border-b border-[#6C63FF]/15 pb-3">
            <div className="w-7 h-7 rounded-lg bg-[#FF6584]/20 text-[#FF6584] flex items-center justify-center">
              <HelpCircle className="w-4 h-4" />
            </div>
            <span>اختبر استيعابك السريع للدرس (+10 نقاط لكل سؤال)</span>
          </div>

          <div className="space-y-4">
            {lessonQuestions.map((q, idx) => (
              <QuizQuestion
                key={q.id}
                question={q}
                questionNumber={idx + 1}
                onAnswer={handleQuestionAnswer}
              />
            ))}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#6C63FF]/20">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-bold transition-all ${
            hasPrev
              ? 'bg-[#1E1D2E] border-[#6C63FF]/30 text-white hover:border-[#6C63FF]'
              : 'opacity-40 cursor-not-allowed border-transparent text-[#A7A5C0]'
          }`}
        >
          <ArrowRight className="w-4 h-4" />
          <span>الدرس السابق</span>
        </button>

        <button
          onClick={handleComplete}
          className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-[#6C63FF] to-[#4B44CC] hover:brightness-110 text-white text-sm font-black shadow-lg shadow-[#6C63FF]/30 active:scale-95 transition-all"
        >
          <span>{hasNext ? 'أكملت الدرس، التالي' : 'إنهاء المسار بنجاح!'}</span>
          <ArrowLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
