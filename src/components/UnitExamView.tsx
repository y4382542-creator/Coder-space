import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { htmlQuestionsByUnit, cssQuestionsByUnit, jsQuestionsByUnit } from '../data/questions';
import { Question } from '../types';
import { QuizQuestion } from './QuizQuestion';
import {
  Award,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Download,
  Printer,
  Share2,
  Star,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface UnitExamViewProps {
  examKey: string; // e.g. "html-u1", "css-cu2", "css-u2", "js-ju1", "js-final"
  onBackToCourse: () => void;
}

export const UnitExamView: React.FC<UnitExamViewProps> = ({ examKey, onBackToCourse }) => {
  const { user, progress, recordExamResult, setActiveView } = useApp();

  const isHtmlFinal = examKey === 'html-final';
  const isCssFinal = examKey === 'css-final';
  const isJsFinal = examKey === 'js-final';
  const isFinal = isHtmlFinal || isCssFinal || isJsFinal;

  // Gather questions with normalized unit ids
  let examQuestions: Question[] = [];
  let examTitle = '';
  let examSubtitle = '';

  if (isHtmlFinal) {
    examTitle = 'الامتحان الشامل النهائي لمسار HTML';
    examSubtitle = 'اختبار شامل ومكثف لجميع وحدات HTML الست (18 سؤالاً معيارياً)';
    Object.values(htmlQuestionsByUnit).forEach((unitQs) => {
      examQuestions.push(...unitQs.slice(0, 3));
    });
  } else if (isCssFinal) {
    examTitle = 'الامتحان الشامل النهائي لمسار CSS';
    examSubtitle = 'اختبار شامل ومكثف لجميع وحدات CSS الست (18 سؤالاً معيارياً)';
    Object.values(cssQuestionsByUnit).forEach((unitQs) => {
      examQuestions.push(...unitQs.slice(0, 3));
    });
  } else if (isJsFinal) {
    examTitle = 'الامتحان الشامل النهائي لمسار JavaScript';
    examSubtitle = 'اختبار شامل ومكثف لجميع وحدات JavaScript الست (18 سؤالاً معيارياً)';
    Object.values(jsQuestionsByUnit).forEach((unitQs) => {
      examQuestions.push(...unitQs.slice(0, 3));
    });
  } else if (examKey.startsWith('html-')) {
    const rawUnit = examKey.replace('html-', '');
    const unitId = rawUnit.startsWith('u') ? rawUnit : `u${rawUnit}`;
    examQuestions = htmlQuestionsByUnit[unitId] || [];
    examTitle = `اختبار الوحدة (${unitId.replace('u', '')}) في HTML`;
    examSubtitle = `تقييم تحصيلي شامل لمفاهيم الوحدة (${examQuestions.length} أسئلة)`;
  } else if (examKey.startsWith('css-')) {
    const rawUnit = examKey.replace('css-', '');
    // Normalize cu1 or u1 to cu1
    const unitId = rawUnit.startsWith('cu') ? rawUnit : rawUnit.startsWith('u') ? `c${rawUnit}` : `cu${rawUnit}`;
    examQuestions = cssQuestionsByUnit[unitId] || [];
    examTitle = `اختبار الوحدة (${unitId.replace('cu', '')}) في CSS`;
    examSubtitle = `تقييم تحصيلي شامل لمفاهيم الوحدة (${examQuestions.length} أسئلة)`;
  } else if (examKey.startsWith('js-')) {
    const rawUnit = examKey.replace('js-', '');
    const unitId = rawUnit.startsWith('ju') ? rawUnit : rawUnit.startsWith('u') ? `j${rawUnit}` : `ju${rawUnit}`;
    examQuestions = jsQuestionsByUnit[unitId] || [];
    examTitle = `اختبار الوحدة (${unitId.replace('ju', '')}) في JavaScript`;
    examSubtitle = `تقييم تحصيلي شامل لمفاهيم الوحدة (${examQuestions.length} أسئلة)`;
  }

  // State: track answers per question index
  const [answersMap, setAnswersMap] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [scorePercent, setScorePercent] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);

  // Reset exam state if examKey changes
  useEffect(() => {
    setAnswersMap({});
    setSubmitted(false);
    setScorePercent(0);
    setCorrectCount(0);
  }, [examKey]);

  const handleRecordAnswer = (questionId: string, isCorrect: boolean) => {
    setAnswersMap((prev) => ({
      ...prev,
      [questionId]: isCorrect,
    }));
  };

  const handleSubmitExam = () => {
    const total = examQuestions.length;
    if (total === 0) return;

    let correct = 0;
    examQuestions.forEach((q) => {
      if (answersMap[q.id] === true) {
        correct++;
      }
    });

    // Mathematically bounded percentage (0% to 100%)
    const pct = Math.min(100, Math.max(0, Math.round((correct / total) * 100)));
    setCorrectCount(correct);
    setScorePercent(pct);
    setSubmitted(true);

    recordExamResult(examKey, pct, total, correct);

    if (pct >= 60) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    // Scroll to results
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const handleRetry = () => {
    setAnswersMap({});
    setSubmitted(false);
    setScorePercent(0);
    setCorrectCount(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const previousRecord = progress.passedExams[examKey];
  const passed = scorePercent >= 60;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      {/* Exam Header Banner */}
      <div className={`border rounded-3xl p-6 md:p-8 text-center relative overflow-hidden shadow-xl ${
        isFinal 
          ? 'bg-gradient-to-r from-[#F7971E]/15 via-[#FF6584]/15 to-[#6C63FF]/15 border-[#F7971E]/40' 
          : 'bg-gradient-to-r from-[#1A1829] to-[#252340] border-[#6C63FF]/30'
      }`}>
        <div className="inline-flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-1 rounded-full text-xs font-bold text-amber-300 mb-3">
          <Award className="w-4 h-4 text-amber-400" />
          <span>{isFinal ? 'الامتحان النهائي المعتمد' : 'اختبار تحصيلي معتمد'}</span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black font-['Cairo'] text-white mb-2">
          {examTitle}
        </h1>
        <p className="text-sm md:text-base text-[#A7A5C0] max-w-lg mx-auto">
          {examSubtitle}
        </p>
        <p className="text-xs text-[#43E97B] font-bold mt-2">
          نسبة النجاح لاجتياز الاختبار والحصول على الشهادة: 60% فأعلى
        </p>
      </div>

      {/* Previous Certificate Fast-Access Banner */}
      {previousRecord && !submitted && (
        <div className="bg-[#43E97B]/10 border border-[#43E97B]/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#43E97B]/20 text-[#43E97B] flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                لقد اجتزت هذا الاختبار بنجاح سابقاً! ({previousRecord.scorePercent}%)
              </div>
              <div className="text-xs text-[#A7A5C0]">
                تاريخ الإنجاز: {previousRecord.passedDate}
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setScorePercent(previousRecord.scorePercent);
              setCorrectCount(previousRecord.correctAnswers);
              setSubmitted(true);
            }}
            className="px-4 py-2 rounded-xl bg-[#43E97B] text-[#0A2010] font-black text-xs hover:bg-[#38d46e] transition-all whitespace-nowrap shadow-md shadow-[#43E97B]/20"
          >
            عرض شهادتي المعتمدة
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {examQuestions.map((q, idx) => (
          <QuizQuestion
            key={q.id}
            question={q}
            questionNumber={idx + 1}
            onAnswer={(isCorrect) => handleRecordAnswer(q.id, isCorrect)}
          />
        ))}
      </div>

      {/* Submit Button */}
      {!submitted ? (
        <div className="pt-4">
          <button
            onClick={handleSubmitExam}
            className={`w-full py-4 rounded-2xl text-white font-black text-base md:text-lg shadow-xl transition-all active:scale-95 ${
              isFinal
                ? 'bg-gradient-to-r from-[#F7971E] to-[#FF6584] hover:brightness-110 shadow-[#F7971E]/20'
                : 'bg-gradient-to-r from-[#6C63FF] to-[#4B44CC] hover:brightness-110 shadow-[#6C63FF]/30'
            }`}
          >
            تسليم الإجابات واعتماد النتيجة الرسمية
          </button>
        </div>
      ) : (
        /* Results Section */
        <div className="space-y-6 pt-4 animate-in fade-in duration-300">
          <div className="bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 md:p-8 text-center space-y-4 shadow-xl">
            {/* Score Ring */}
            <div className={`w-28 h-28 rounded-full mx-auto flex items-center justify-center font-['Cairo'] text-3xl font-black border-4 shadow-xl ${
              passed
                ? 'bg-[#43E97B]/10 border-[#43E97B] text-[#43E97B] shadow-[#43E97B]/20'
                : 'bg-[#FF6584]/10 border-[#FF6584] text-[#FF6584] shadow-[#FF6584]/20'
            }`}>
              {scorePercent}%
            </div>

            <div>
              <h2 className="text-2xl font-black text-white font-['Cairo']">
                {passed ? 'تهانينا الحارة، لقد اجتزت الاختبار بنجاح!' : 'لم توفق هذه المرة، لا تيأس!'}
              </h2>
              <p className="text-sm text-[#A7A5C0] mt-1">
                أجبت بشكل صحيح على <strong className="text-white font-bold">{correctCount}</strong> من أصل <strong className="text-white font-bold">{examQuestions.length}</strong> أسئلة ({scorePercent}%).
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleRetry}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#252340] border border-white/10 hover:border-white/30 text-white text-xs font-bold transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة المحاولة</span>
              </button>
              <button
                onClick={onBackToCourse}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6C63FF] hover:bg-[#5850e0] text-white text-xs font-bold transition-all"
              >
                <span>متابعة التعلم</span>
              </button>
            </div>
          </div>

          {/* Official Certificate for Passing Score */}
          {passed && (
            <div id="official-certificate" className="print-certificate-container bg-gradient-to-b from-[#1F1D33] to-[#121120] border-2 border-amber-400/40 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-[#6C63FF] to-[#43E97B]" />
              
              <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-bold mb-2 uppercase tracking-widest">
                <Star className="w-4 h-4 fill-current" />
                <span>شهادة إتمام وتفوق معتمدة</span>
                <Star className="w-4 h-4 fill-current" />
              </div>

              <h3 className="text-xl md:text-3xl font-black font-['Cairo'] text-white mb-4">
                شهادة اجتياز وتفوق برمجية
              </h3>

              <p className="text-sm text-[#A7A5C0]">
                تشهد إدارة منصة كودر سبيس (Coder Space) التعليمية بأن المتعلم:
              </p>

              <div className="text-2xl md:text-3xl font-black text-amber-300 font-['Cairo'] my-3 py-2 border-b border-white/10 max-w-sm mx-auto">
                {user?.name || 'مبرمج كودر سبيس المتميز'}
              </div>

              <p className="text-sm text-[#D6D4E8] max-w-md mx-auto leading-relaxed">
                قد أتم بنجاح متطلبات واختبار <strong className="text-white">{examTitle}</strong> بمعدل تفوق بلغ <strong className="text-[#43E97B] font-mono">{scorePercent}%</strong>.
              </p>

              <div className="flex items-center justify-between max-w-md mx-auto mt-8 pt-6 border-t border-white/10 text-xs text-[#A7A5C0]">
                <div>
                  <div className="font-bold text-white">تاريخ المنح:</div>
                  <div className="font-mono mt-0.5">{new Date().toLocaleDateString('ar-EG')}</div>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full border-2 border-amber-400/60 bg-amber-400/10 flex items-center justify-center mx-auto text-amber-400 text-xs font-black leading-tight text-center">
                    كودر<br/>سبيس
                  </div>
                  <span className="text-[10px] text-amber-300 font-bold block mt-1">معتمد محلياً</span>
                </div>
                <div>
                  <div className="font-bold text-white">المشرف التعليمي:</div>
                  <div className="text-[#6C63FF] font-bold mt-0.5">يوسف حسام عبدالرحمن</div>
                </div>
              </div>

              {/* Print / Save button */}
              <div className="mt-6 pt-4 border-t border-white/10 print:hidden flex justify-center">
                <button
                  onClick={handlePrintCertificate}
                  className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black px-6 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-amber-400/20 active:scale-95 transition-all"
                >
                  <Printer className="w-4 h-4" />
                  <span>طباعة أو حفظ كملف PDF</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
