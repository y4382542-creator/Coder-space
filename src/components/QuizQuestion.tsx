import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { Check, X, Eye, HelpCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  onAnswer?: (isCorrect: boolean) => void;
  readOnly?: boolean;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  questionNumber,
  onAnswer,
  readOnly = false,
}) => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | boolean | null>(null);
  const [showWhatAnswer, setShowWhatAnswer] = useState(false);
  const [selfEvalCorrect, setSelfEvalCorrect] = useState<boolean | null>(null);

  // Synchronize state when question changes or retake happens
  useEffect(() => {
    setHasAnswered(false);
    setSelectedAnswer(null);
    setShowWhatAnswer(false);
    setSelfEvalCorrect(null);
  }, [question.id]);

  const handleTFClick = (choice: boolean) => {
    if (hasAnswered || readOnly) return;
    setHasAnswered(true);
    setSelectedAnswer(choice);
    const isCorrect = choice === question.correct;
    if (onAnswer) onAnswer(isCorrect);
  };

  const handleMCClick = (index: number) => {
    if (hasAnswered || readOnly) return;
    setHasAnswered(true);
    setSelectedAnswer(index);
    const isCorrect = index === question.correct;
    if (onAnswer) onAnswer(isCorrect);
  };

  const handleRevealWhat = () => {
    setShowWhatAnswer(true);
  };

  const handleWhatSelfEval = (isCorrect: boolean) => {
    if (hasAnswered || readOnly) return;
    setHasAnswered(true);
    setSelfEvalCorrect(isCorrect);
    if (onAnswer) onAnswer(isCorrect);
  };

  const letters = ['أ', 'ب', 'ج', 'د'];
  const isQuestionSuccess =
    question.type === 'what'
      ? selfEvalCorrect === true
      : selectedAnswer === question.correct;

  return (
    <div className="bg-[#1A1829] border border-[#6C63FF]/20 rounded-2xl p-4 md:p-5 shadow-sm space-y-3.5 text-right">
      {/* Question Header */}
      <div className="flex items-center justify-between gap-2 border-b border-[#6C63FF]/15 pb-2.5">
        <span className="text-xs font-bold text-[#6C63FF] bg-[#6C63FF]/15 px-2.5 py-0.5 rounded-full flex items-center gap-1">
          <HelpCircle className="w-3 h-3" />
          <span>سؤال {questionNumber}</span>
        </span>

        {hasAnswered && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
            isQuestionSuccess
              ? 'bg-[#43E97B]/20 text-[#43E97B]'
              : 'bg-[#FF6584]/20 text-[#FF6584]'
          }`}>
            {isQuestionSuccess ? (
              <>
                <Check className="w-3 h-3" />
                <span>إجابة صحيحة</span>
              </>
            ) : (
              <>
                <X className="w-3 h-3" />
                <span>إجابة خاطئة</span>
              </>
            )}
          </span>
        )}
      </div>

      {/* Question Text */}
      <p className="text-sm md:text-base font-bold text-white leading-relaxed">
        {question.text}
      </p>

      {/* Code snippet if present */}
      {question.code && (
        <div className="bg-[#0A0918] p-3 rounded-xl border border-[#6C63FF]/20 font-mono text-xs text-[#A9B1D6] text-left overflow-x-auto" dir="ltr">
          {question.code}
        </div>
      )}

      {/* Question Options by Type */}
      {question.type === 'tf' && (
        <div className="grid grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            disabled={hasAnswered}
            onClick={() => handleTFClick(true)}
            className={`py-2.5 px-4 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              hasAnswered
                ? question.correct === true
                  ? 'bg-[#43E97B]/20 border-[#43E97B] text-[#43E97B]'
                  : selectedAnswer === true
                  ? 'bg-[#FF6584]/20 border-[#FF6584] text-[#FF6584]'
                  : 'bg-[#232136] border-white/5 text-white/40 opacity-60'
                : 'bg-[#232136] border-[#6C63FF]/20 hover:border-[#43E97B] hover:text-[#43E97B] text-white active:scale-95'
            }`}
          >
            <span>صح (نعم)</span>
          </button>

          <button
            type="button"
            disabled={hasAnswered}
            onClick={() => handleTFClick(false)}
            className={`py-2.5 px-4 rounded-xl border font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              hasAnswered
                ? question.correct === false
                  ? 'bg-[#43E97B]/20 border-[#43E97B] text-[#43E97B]'
                  : selectedAnswer === false
                  ? 'bg-[#FF6584]/20 border-[#FF6584] text-[#FF6584]'
                  : 'bg-[#232136] border-white/5 text-white/40 opacity-60'
                : 'bg-[#232136] border-[#6C63FF]/20 hover:border-[#FF6584] hover:text-[#FF6584] text-white active:scale-95'
            }`}
          >
            <span>خطأ (لا)</span>
          </button>
        </div>
      )}

      {question.type === 'mc' && question.options && (
        <div className="space-y-2 pt-1">
          {question.options.map((opt, idx) => {
            const isSelected = selectedAnswer === idx;
            const isCorrectOption = idx === question.correct;

            let buttonClass = 'bg-[#232136] border-[#6C63FF]/20 hover:border-[#6C63FF] text-white hover:bg-[#6C63FF]/10';
            if (hasAnswered) {
              if (isCorrectOption) {
                buttonClass = 'bg-[#43E97B]/20 border-[#43E97B] text-[#43E97B] font-bold';
              } else if (isSelected) {
                buttonClass = 'bg-[#FF6584]/20 border-[#FF6584] text-[#FF6584] font-bold';
              } else {
                buttonClass = 'bg-[#232136] border-white/5 text-white/40 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                type="button"
                disabled={hasAnswered}
                onClick={() => handleMCClick(idx)}
                className={`w-full p-3 rounded-xl border text-xs md:text-sm text-right flex items-center gap-3 transition-all ${buttonClass}`}
              >
                <span className="w-6 h-6 rounded-lg bg-black/30 flex items-center justify-center text-xs font-bold text-[#A7A5C0] flex-shrink-0">
                  {letters[idx] || idx + 1}
                </span>
                <span className="flex-1 font-medium font-mono" dir="ltr">{opt}</span>
              </button>
            );
          })}
        </div>
      )}

      {question.type === 'what' && (
        <div className="pt-1 space-y-3">
          {!showWhatAnswer ? (
            <button
              type="button"
              onClick={handleRevealWhat}
              className="w-full py-2.5 px-4 rounded-xl border border-dashed border-[#6C63FF] bg-[#6C63FF]/10 hover:bg-[#6C63FF]/20 text-[#6C63FF] font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <Eye className="w-4 h-4" />
              <span>فكر في الإجابة ثم اضغط لكشف الحل النموذجي</span>
            </button>
          ) : (
            <div className="space-y-3">
              <div className="p-3 bg-[#43E97B]/10 border border-[#43E97B]/30 rounded-xl text-xs md:text-sm text-[#43E97B] leading-relaxed">
                <span className="font-bold">الإجابة النموذجية: </span>
                {question.answer}
              </div>

              {!hasAnswered && (
                <div className="flex items-center justify-between p-2.5 bg-[#141221] rounded-xl border border-white/10 text-xs">
                  <span className="text-[#A7A5C0] font-medium">هل كانت إجابتك الذهنية مطابقة؟</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleWhatSelfEval(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#43E97B]/20 text-[#43E97B] hover:bg-[#43E97B] hover:text-black font-bold transition-all"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>نعم، أجبت صح</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleWhatSelfEval(false)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6584]/20 text-[#FF6584] hover:bg-[#FF6584] hover:text-white font-bold transition-all"
                    >
                      <ThumbsDown className="w-3.5 h-3.5" />
                      <span>لا، أخطأت</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Explanation if answered */}
      {hasAnswered && question.explanation && (
        <div className="mt-2 p-2.5 rounded-lg bg-black/30 border border-white/10 text-xs text-[#A7A5C0]">
          <strong className="text-white">التفسير العلمي: </strong>{question.explanation}
        </div>
      )}
    </div>
  );
};
