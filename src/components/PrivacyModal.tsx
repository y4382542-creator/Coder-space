import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, X, Lock, Download, Trash2, CheckCircle2, AlertTriangle, Database } from 'lucide-react';

export const PrivacyModal: React.FC = () => {
  const { 
    showPrivacyModal, 
    setShowPrivacyModal, 
    user, 
    exportBackupData, 
    deleteAccount 
  } = useApp();

  if (!showPrivacyModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 text-right animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl max-h-[90vh] bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-y-auto space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#43E97B] via-[#6C63FF] to-[#FF6584]" />

        {/* Close Button */}
        <button
          onClick={() => setShowPrivacyModal(false)}
          className="absolute top-4 left-4 p-1.5 rounded-full text-[#A7A5C0] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-[#43E97B]/20 text-[#43E97B] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black font-['Cairo'] text-white">
              سياسة الخصوصية والتخزين المحلي
            </h2>
            <p className="text-xs text-[#A7A5C0]">
              بياناتك ملكك وحدك، ولا نطلب بطاقة بنكية أو أي اشتراكات مدفوعة
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="space-y-4 text-xs md:text-sm text-[#D6D4E8] leading-relaxed">
          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <Database className="w-4 h-4 text-[#6C63FF]" />
              <span>هندسة التخزين المحلي أولاً (Local-First Architecture)</span>
            </div>
            <p className="text-xs text-[#A7A5C0]">
              جميع بيانات تقدمك، نتائج اختباراتك، نقاطك، وأكواد مشاريعك يتم حفظها مباشرة داخل متصفحك على جهازك الشخصي عبر تقنية LocalStorage الآمنة، بدون إرسالها لأي خوادم خارجية أو تتبع إعلاني (No-cors scripts).
            </p>
          </div>

          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <Lock className="w-4 h-4 text-[#43E97B]" />
              <span>حماية خصوصية صغار السن (Minor Protection)</span>
            </div>
            <p className="text-xs text-[#A7A5C0]">
              المنصة مصممة لتكون بيئة آمنة تماماً للمتعلمين من مختلف الأعمار، ولا تطلب أي أرقام هواتف أو وسائل دفع بنكية أو معلومات حساسة.
            </p>
          </div>

          <div className="bg-[#141221] p-4 rounded-2xl border border-white/5 space-y-2">
            <div className="flex items-center gap-2 text-white font-bold">
              <Download className="w-4 h-4 text-[#F7971E]" />
              <span>العمل بدون اتصال بالإنترنت (Offline Capability)</span>
            </div>
            <p className="text-xs text-[#A7A5C0]">
              تعتمد المنصة على تقنيات التخزين المؤقت (Cache) لتعمل معك بكفاءة، ويمكنك في أي لحظة الضغط على <strong>"تصدير نسخة احتياطية"</strong> لتحميل ملف JSON يحوي كل تقدمك ونقله لأي جهاز آخر.
            </p>
          </div>
        </div>

        {/* User Data Controls */}
        <div className="bg-[#252340]/60 p-5 rounded-2xl border border-white/10 space-y-3">
          <div className="text-xs font-bold text-white">إدارة بياناتك والتحكم الكامل:</div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => { exportBackupData(); }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6C63FF] hover:bg-[#5850e0] text-white text-xs font-bold transition-all shadow-md shadow-[#6C63FF]/20"
            >
              <Download className="w-4 h-4" />
              <span>تحميل نسخة من بياناتي (JSON)</span>
            </button>

            {user && (
              <button
                onClick={() => {
                  if (window.confirm('هل أنت متأكد من رغبتك في حذف حسابك ومسح جميع بيانات تقدمك وشهاداتك المخزنة محلياً؟ لا يمكن التراجع عن هذا الإجراء.')) {
                    deleteAccount();
                    setShowPrivacyModal(false);
                  }
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FF6584]/20 hover:bg-[#FF6584] text-[#FF6584] hover:text-white text-xs font-bold transition-all border border-[#FF6584]/30"
              >
                <Trash2 className="w-4 h-4" />
                <span>حذف حسابي ومسح البيانات</span>
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-2 border-t border-white/10">
          <button
            onClick={() => setShowPrivacyModal(false)}
            className="px-6 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            إغلاق النافذة
          </button>
        </div>
      </div>
    </div>
  );
};
