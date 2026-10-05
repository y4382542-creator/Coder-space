import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, UserPlus, LogIn, AlertCircle, ShieldCheck } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { showAuthModal, setShowAuthModal, register, login, setShowPrivacyModal } = useApp();
  const [tab, setTab] = useState<'login' | 'register'>('login');

  // Login fields
  const [loginUsername, setLoginUsername] = useState('');

  // Register fields
  const [regName, setRegName] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regAge, setRegAge] = useState<number | ''>('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!showAuthModal) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const res = login(loginUsername);
    if (!res.success) {
      setErrorMessage(res.error || 'تعذر تسجيل الدخول.');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    const numAge = Number(regAge);
    const res = register(regName, regUsername, regEmail, numAge);
    if (!res.success) {
      setErrorMessage(res.error || 'تعذر إتمام التسجيل.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 text-right animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-[#1E1D2E] border border-[#6C63FF]/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#6C63FF] via-[#FF6584] to-[#43E97B]" />

        {/* Close button */}
        <button
          onClick={() => setShowAuthModal(false)}
          className="absolute top-4 left-4 p-1.5 rounded-full text-[#A7A5C0] hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Title */}
        <div className="text-center pt-2">
          <div className="text-3xl font-black font-['Cairo'] bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent inline-block">
            كودر سبيس <span className="text-[#43E97B]">Coder Space</span>
          </div>
          <p className="text-xs text-[#A7A5C0] mt-1">
            تسجيل الدخول لحفظ تقدمك ونقاطك وشهاداتك المعتمدة محلياً
          </p>
        </div>

        {/* Tabs */}
        <div className="flex bg-[#141221] p-1 rounded-2xl border border-white/5">
          <button
            onClick={() => { setTab('login'); setErrorMessage(''); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              tab === 'login'
                ? 'bg-[#1E1D2E] text-white shadow-md'
                : 'text-[#A7A5C0] hover:text-white'
            }`}
          >
            تسجيل الدخول
          </button>
          <button
            onClick={() => { setTab('register'); setErrorMessage(''); }}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
              tab === 'register'
                ? 'bg-[#1E1D2E] text-white shadow-md'
                : 'text-[#A7A5C0] hover:text-white'
            }`}
          >
            إنشاء حساب جديد
          </button>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="flex items-center gap-2 bg-[#FF6584]/15 border border-[#FF6584]/30 text-[#FF6584] p-3 rounded-2xl text-xs font-medium animate-shake">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Login Form */}
        {tab === 'login' ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#A7A5C0] mb-1.5">
                اسم المستخدم (Username)
              </label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                placeholder="اكتب اسم المستخدم الخاص بك"
                className="w-full bg-[#141221] border border-white/10 focus:border-[#6C63FF] rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#4B44CC] hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-[#6C63FF]/30 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>دخول إلى حسابي</span>
            </button>
          </form>
        ) : (
          /* Register Form */
          <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-[#A7A5C0] mb-1">
                الاسم الكريم (سيظهر في الشهادات الرسمية)
              </label>
              <input
                type="text"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                placeholder="مثال: يوسف حسام عبدالرحمن"
                className="w-full bg-[#141221] border border-white/10 focus:border-[#6C63FF] rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#A7A5C0] mb-1">
                اسم المستخدم للدخول (بدون مسافات)
              </label>
              <input
                type="text"
                value={regUsername}
                onChange={(e) => setRegUsername(e.target.value)}
                placeholder="مثال: ahmed_coder"
                dir="ltr"
                className="w-full bg-[#141221] border border-white/10 focus:border-[#6C63FF] rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors text-right"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#A7A5C0] mb-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                placeholder="example@gmail.com"
                dir="ltr"
                className="w-full bg-[#141221] border border-white/10 focus:border-[#6C63FF] rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors text-right"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-[#A7A5C0]">
                  العمر (بالسنوات)
                </label>
                {typeof regAge === 'number' && regAge < 16 && (
                  <span className="text-[10px] text-[#43E97B] font-bold">
                    حماية الخصوصية لصغار السن مفعلة
                  </span>
                )}
              </div>
              <input
                type="number"
                min="8"
                max="95"
                value={regAge}
                onChange={(e) => setRegAge(e.target.value === '' ? '' : parseInt(e.target.value))}
                placeholder="مثال: 18"
                className="w-full bg-[#141221] border border-white/10 focus:border-[#6C63FF] rounded-xl px-3.5 py-2 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#43E97B] to-[#28C874] hover:brightness-110 text-[#0A2010] font-black text-sm shadow-lg shadow-[#43E97B]/20 active:scale-95 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <UserPlus className="w-4 h-4 fill-current" />
              <span>إنشاء الحساب ومتابعة التعلم</span>
            </button>
          </form>
        )}

        {/* Security & Privacy Notice */}
        <div className="pt-2 border-t border-white/5 text-center">
          <button
            onClick={() => { setShowAuthModal(false); setShowPrivacyModal(true); }}
            className="text-[11px] text-[#A7A5C0] hover:text-white flex items-center justify-center gap-1.5 mx-auto transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#43E97B]" />
            <span>بياناتك محفوظة محلياً 100% (خصوصية تامة)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
