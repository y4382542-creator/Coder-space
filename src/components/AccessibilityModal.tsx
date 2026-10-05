import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Eye, ZoomIn, ZoomOut, Contrast, Zap, Type, RotateCcw } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const { accessibility, updateAccessibility, resetAccessibility } = useApp();

  if (!isOpen) return null;

  const handleFontSize = (delta: number) => {
    const newSize = Math.min(180, Math.max(80, accessibility.fontSize + delta));
    updateAccessibility({ fontSize: newSize });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 text-right animate-in fade-in duration-200">
      <div 
        className="w-full max-w-sm bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 shadow-2xl relative space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-full text-[#A7A5C0] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 border-b border-white/10 pb-3">
          <div className="w-8 h-8 rounded-xl bg-[#6C63FF]/20 text-[#6C63FF] flex items-center justify-center">
            <Eye className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-black font-['Cairo'] text-white">إعدادات سهولة الاستخدام</h3>
            <p className="text-[11px] text-[#A7A5C0]">تخصيص العرض والخطوط بما يناسب راحتك</p>
          </div>
        </div>

        <div className="space-y-4 text-xs">
          {/* Font Size */}
          <div className="flex items-center justify-between bg-[#141221] p-3 rounded-2xl border border-white/5">
            <span className="font-bold text-white">حجم الخط ({accessibility.fontSize}%)</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleFontSize(-10)}
                className="w-8 h-8 rounded-xl bg-[#252340] hover:bg-[#6C63FF] text-white flex items-center justify-center font-bold text-sm transition-colors"
              >
                A-
              </button>
              <button
                onClick={() => handleFontSize(10)}
                className="w-8 h-8 rounded-xl bg-[#252340] hover:bg-[#6C63FF] text-white flex items-center justify-center font-bold text-sm transition-colors"
              >
                A+
              </button>
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between bg-[#141221] p-3 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <Contrast className="w-4 h-4 text-[#F7971E]" />
              <span className="font-bold text-white">تباين لوني عالي (High Contrast)</span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.highContrast}
              onChange={(e) => updateAccessibility({ highContrast: e.target.checked })}
              className="w-5 h-5 accent-[#6C63FF] rounded cursor-pointer"
            />
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between bg-[#141221] p-3 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FF6584]" />
              <span className="font-bold text-white">تقليل الرسوم المتحركة</span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.reducedMotion}
              onChange={(e) => updateAccessibility({ reducedMotion: e.target.checked })}
              className="w-5 h-5 accent-[#6C63FF] rounded cursor-pointer"
            />
          </div>

          {/* Dyslexic Font */}
          <div className="flex items-center justify-between bg-[#141221] p-3 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <Type className="w-4 h-4 text-[#43E97B]" />
              <span className="font-bold text-white">خط مريح للقراءة وعسر القراءة</span>
            </div>
            <input
              type="checkbox"
              checked={accessibility.dyslexicFont}
              onChange={(e) => updateAccessibility({ dyslexicFont: e.target.checked })}
              className="w-5 h-5 accent-[#6C63FF] rounded cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10">
          <button
            onClick={resetAccessibility}
            className="flex items-center gap-1.5 text-xs text-[#A7A5C0] hover:text-[#FF6584] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة للوضع الافتراضي</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#6C63FF] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-[#6C63FF]/20"
          >
            حفظ وإغلاق
          </button>
        </div>
      </div>
    </div>
  );
};
