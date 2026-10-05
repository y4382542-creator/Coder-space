import React, { useState, useEffect } from 'react';
import { projectsList } from '../data/projects';
import { useApp } from '../context/AppContext';
import {
  FolderGit2,
  CheckCircle2,
  Play,
  Trash2,
  Sparkles,
  Check,
  ListChecks,
  Code,
  Columns,
  ArrowLeft,
  Maximize2,
  Minimize2,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectsViewProps {
  initialProjectId?: string;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ initialProjectId }) => {
  const { progress, recordProjectCompleted } = useApp();
  const allProjectKeys = Object.keys(projectsList);

  const [selectedKey, setSelectedKey] = useState<string>(initialProjectId || allProjectKeys[0]);
  const [currentTab, setCurrentTab] = useState<'reqs' | 'editor' | 'compare'>('reqs');
  const [isFullscreenEditor, setIsFullscreenEditor] = useState(false);

  const currentProject = projectsList[selectedKey] || projectsList[allProjectKeys[0]];
  const storageKey = `codek_project_code_${selectedKey}`;

  // User's project code from local storage
  const [userCode, setUserCode] = useState<string>('');
  const [previewSrcDoc, setPreviewSrcDoc] = useState<string>('');
  const [showPreview, setShowPreview] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setUserCode(saved || currentProject.starterCode || '');
    setShowPreview(false);
    setIsFullscreenEditor(false);
  }, [selectedKey]);

  const handleCodeChange = (newCode: string) => {
    setUserCode(newCode);
    localStorage.setItem(storageKey, newCode);
  };

  const handleClearCode = () => {
    if (window.confirm('هل تريد استعادة الكود الأولي للمشروع ومسح تعديلاتك؟')) {
      setUserCode(currentProject.starterCode || '');
      localStorage.removeItem(storageKey);
      setShowPreview(false);
    }
  };

  const handleRunCode = () => {
    let fullDoc = userCode;

    if (currentProject.subject === 'JavaScript') {
      if (userCode.includes('<!DOCTYPE') || userCode.includes('<html')) {
        fullDoc = userCode;
      } else {
        fullDoc = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Tajawal', Arial, sans-serif; padding: 16px; background: #0F0E17; color: #fff; }
    #console-box { background: #0A0918; color: #43E97B; padding: 14px; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.6; direction: ltr; text-align: left; border: 1px solid #232136; max-height: 250px; overflow-y: auto; }
  </style>
</head>
<body>
  <div style="margin-bottom:12px;color:#F7DF1E;font-weight:bold;font-size:14px;">سجل الطرفية (Console Output):</div>
  <div id="console-box"></div>
  <script>
    const box = document.getElementById('console-box');
    const origLog = console.log;
    console.log = function(...args) {
      origLog.apply(console, args);
      const line = document.createElement('div');
      line.style.borderBottom = '1px dashed rgba(255,255,255,0.1)';
      line.style.padding = '4px 0';
      line.textContent = '> ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
      box.appendChild(line);
      box.scrollTop = box.scrollHeight;
    };
    window.onerror = function(msg) {
      const errLine = document.createElement('div');
      errLine.style.color = '#FF6584';
      errLine.textContent = '❌ خطأ: ' + msg;
      box.appendChild(errLine);
      return true;
    };
    try {
      ${userCode}
    } catch(err) {
      console.log("خطأ برمجي: " + err.message);
    }
  </script>
</body>
</html>`;
      }
    } else if (currentProject.subject === 'CSS') {
      fullDoc = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: 'Tajawal', Arial, sans-serif; padding: 20px; background: #fff; color: #222; }
    ${userCode}
  </style>
</head>
<body>
  <div id="hero" class="hero">
    <h1>مرحباً بكم</h1>
    <p>هذا كود تجريبي لمعاينة تنسيقات CSS على العناصر.</p>
    <a href="#">رابط الزيارة</a>
    <button>زر تفاعلي</button>
  </div>
  <div class="cards-grid cards" style="display:flex;gap:12px;margin-top:16px;">
    <div class="card" style="padding:16px;border:1px solid #ddd;border-radius:8px;">بطاقة 1</div>
    <div class="card" style="padding:16px;border:1px solid #ddd;border-radius:8px;">بطاقة 2</div>
    <div class="card" style="padding:16px;border:1px solid #ddd;border-radius:8px;">بطاقة 3</div>
  </div>
</body>
</html>`;
    }

    setPreviewSrcDoc(fullDoc);
    setShowPreview(true);
  };

  const handleCompleteProject = () => {
    recordProjectCompleted(selectedKey);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
    });
    alert('تهانينا! تم تسجيل إنجاز المشروع وحصولك على 40 نقطة إضافية!');
  };

  const isCompleted = progress.completedProjects.includes(selectedKey);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12 animate-in fade-in duration-200 text-right">
      {/* Header */}
      <div className="bg-[#1E1D2E] border border-[#28C874]/30 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 bg-[#28C874]/15 border border-[#28C874]/30 px-3 py-1 rounded-full text-xs font-bold text-[#28C874] mb-2.5">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>مشاريع عملية متدرجة (18 مشروعاً)</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black font-['Cairo'] text-white mb-2">
          المشاريع التطبيقية العملية
        </h1>
        <p className="text-sm text-[#A7A5C0] max-w-2xl">
          البرمجة لا تُتعلم بالمشاهدة النظرية فقط، بل بكتابة الأكواد بيدك وحل التحديات الحقيقية. اختر المشروع وطبق متطلباته وشاهد النتيجة الحية وقارنها بالحل النموذجي.
        </p>
      </div>

      {/* Projects Horizontal Grid Selector */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-[#A7A5C0] px-1">اختر المشروع للتطبيق:</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {allProjectKeys.map((pKey) => {
            const p = projectsList[pKey];
            const isDone = progress.completedProjects.includes(pKey);
            const isSelected = selectedKey === pKey;
            const isCss = p.subject === 'CSS';
            const isJs = p.subject === 'JavaScript';

            return (
              <button
                key={pKey}
                onClick={() => setSelectedKey(pKey)}
                className={`p-3 rounded-2xl border text-right transition-all flex flex-col justify-between min-h-[78px] ${
                  isSelected
                    ? isJs
                      ? 'bg-[#F7DF1E]/20 border-[#F7DF1E] text-white shadow-md shadow-[#F7DF1E]/20'
                      : isCss
                      ? 'bg-[#FF6584]/20 border-[#FF6584] text-white shadow-md shadow-[#FF6584]/20'
                      : 'bg-[#6C63FF]/20 border-[#6C63FF] text-white shadow-md shadow-[#6C63FF]/20'
                    : 'bg-[#1E1D2E] border-white/5 hover:border-white/20 text-[#A7A5C0]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 w-full">
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    isJs
                      ? 'bg-[#F7DF1E]/20 text-[#F7DF1E]'
                      : isCss
                      ? 'bg-[#FF6584]/20 text-[#FF6584]'
                      : 'bg-[#6C63FF]/20 text-[#6C63FF]'
                  }`}>
                    {p.subject === 'JavaScript' ? 'JS' : p.subject}
                  </span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-[#43E97B]" />}
                </div>
                <span className="text-xs font-bold text-white mt-1 leading-tight line-clamp-1">{p.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Project Box */}
      <div className={`bg-[#1E1D2E] border border-[#6C63FF]/20 rounded-3xl p-5 md:p-7 shadow-lg space-y-5 transition-all ${
        isFullscreenEditor ? 'fixed inset-4 z-50 overflow-y-auto bg-[#141221] border-[#6C63FF]' : ''
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="text-xs font-bold text-[#6C63FF] mb-1">
              مشروع تطبيقي في مسار {currentProject.subject} • {currentProject.title}
            </div>
            <h2 className="text-xl md:text-2xl font-black font-['Cairo'] text-white">
              {currentProject.desc}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreenEditor(!isFullscreenEditor)}
              title={isFullscreenEditor ? 'تصغير' : 'ملء الشاشة'}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-[#A7A5C0] hover:text-white transition-colors"
            >
              {isFullscreenEditor ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {isCompleted ? (
              <span className="inline-flex items-center gap-1.5 bg-[#43E97B]/20 text-[#43E97B] border border-[#43E97B]/30 px-3.5 py-1.5 rounded-xl text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>تم إنجاز هذا المشروع بنجاح!</span>
              </span>
            ) : (
              <button
                onClick={handleCompleteProject}
                className="flex items-center gap-1.5 bg-gradient-to-r from-[#43E97B] to-[#28C874] text-[#0A2010] px-4 py-2 rounded-xl text-xs font-extrabold shadow-md shadow-[#43E97B]/20 active:scale-95 transition-all"
              >
                <Sparkles className="w-4 h-4 fill-current" />
                <span>تسجيل إتمام المشروع (+40 نقطة)</span>
              </button>
            )}
          </div>
        </div>

        {/* Project View Tabs */}
        <div className="flex border-b border-white/10 gap-2">
          <button
            onClick={() => setCurrentTab('reqs')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              currentTab === 'reqs'
                ? 'border-[#6C63FF] text-[#6C63FF]'
                : 'border-transparent text-[#A7A5C0] hover:text-white'
            }`}
          >
            <ListChecks className="w-4 h-4" />
            <span>المتطلبات المطلوب بناؤها</span>
          </button>
          <button
            onClick={() => setCurrentTab('editor')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              currentTab === 'editor'
                ? 'border-[#6C63FF] text-[#6C63FF]'
                : 'border-transparent text-[#A7A5C0] hover:text-white'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>محرر الكود والتنفيذ الحي</span>
          </button>
          <button
            onClick={() => setCurrentTab('compare')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
              currentTab === 'compare'
                ? 'border-[#6C63FF] text-[#6C63FF]'
                : 'border-transparent text-[#A7A5C0] hover:text-white'
            }`}
          >
            <Columns className="w-4 h-4" />
            <span>المقارنة مع الحل النموذجي</span>
          </button>
        </div>

        {/* Tab 1: Requirements */}
        {currentTab === 'reqs' && (
          <div className="space-y-4 pt-1 animate-in fade-in duration-150">
            <p className="text-sm text-[#A7A5C0]">
              اقرأ المتطلبات التالية بعناية، ثم انتقل لتبويب محرر الكود لتطبيقها بنفسك:
            </p>
            <div className="space-y-2.5">
              {currentProject.reqs.map((req, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#141221] p-3.5 rounded-2xl border border-white/5">
                  <div className="w-6 h-6 rounded-lg bg-[#6C63FF]/20 text-[#6C63FF] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="text-sm text-white font-medium leading-relaxed">{req}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCurrentTab('editor')}
              className="mt-4 flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5850e0] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md shadow-[#6C63FF]/20"
            >
              <span>انتقل لمحرر الكود لبدء البرمجة</span>
            </button>
          </div>
        )}

        {/* Tab 2: Code Editor */}
        {currentTab === 'editor' && (
          <div className="space-y-4 pt-1 animate-in fade-in duration-150">
            <div className="flex items-center justify-between text-xs text-[#A7A5C0]">
              <span>محرر الكود التفاعلي:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClearCode}
                  className="flex items-center gap-1 text-[#FF6584] hover:bg-[#FF6584]/10 px-2.5 py-1 rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>إعادة تعيين الكود</span>
                </button>
                <button
                  onClick={handleRunCode}
                  className="flex items-center gap-1.5 bg-[#43E97B] text-[#0A2010] font-black px-4 py-1.5 rounded-xl transition-transform active:scale-95 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>تشغيل ومعاينة</span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#6C63FF]/30 bg-[#0A0918]">
              <textarea
                value={userCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                className={`w-full bg-transparent p-4 font-mono text-xs md:text-sm text-[#A9B1D6] focus:outline-none resize-y text-left leading-relaxed ${
                  isFullscreenEditor ? 'min-h-[350px]' : 'min-h-[220px]'
                }`}
                dir="ltr"
                spellCheck="false"
                placeholder={currentProject.subject === 'CSS' ? '/* اكتب كود CSS الخاص بك هنا... */' : '<!-- اكتب كود HTML الخاص بك هنا... -->'}
              />
            </div>

            {showPreview && (
              <div className="rounded-2xl overflow-hidden border border-[#43E97B]/40 bg-white shadow-xl">
                <div className="bg-gray-100 px-4 py-1.5 border-b border-gray-200 text-xs text-gray-700 font-bold flex items-center justify-between">
                  <span>معاينة مشروعك الحية:</span>
                  <span className="text-[10px] text-gray-500 font-normal">بيئة تجريبية معزولة</span>
                </div>
                <iframe
                  title="project-live"
                  srcDoc={previewSrcDoc}
                  className="w-full min-h-[220px] border-none bg-white p-3"
                  sandbox="allow-scripts"
                />
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Side-by-Side Comparison */}
        {currentTab === 'compare' && (
          <div className="space-y-4 pt-1 animate-in fade-in duration-150">
            <p className="text-xs text-[#A7A5C0]">
              قارن الكود الذي كتبته بيدك مع كود الحل النموذجي الموصى به لمعرفة نقاط التحسين:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* User's Code */}
              <div className="bg-[#0A0918] border border-white/10 rounded-2xl overflow-hidden">
                <div className="bg-[#141221] px-4 py-2 border-b border-white/10 text-xs font-bold text-[#43E97B] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#43E97B]" />
                  <span>كودك الحالي ({userCode.trim().length} حرف)</span>
                </div>
                <pre className="p-4 font-mono text-xs text-[#A9B1D6] overflow-x-auto max-h-[360px] text-left leading-relaxed" dir="ltr">
                  {userCode.trim() || '// لم تكتب أي كود بعد في هذا المشروع.'}
                </pre>
              </div>

              {/* Model Solution */}
              <div className="bg-[#0A0918] border border-[#6C63FF]/30 rounded-2xl overflow-hidden">
                <div className="bg-[#141221] px-4 py-2 border-b border-white/10 text-xs font-bold text-[#6C63FF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#6C63FF]" />
                  <span>الحل النموذجي الموصى به</span>
                </div>
                <pre className="p-4 font-mono text-xs text-[#A9B1D6] overflow-x-auto max-h-[360px] text-left leading-relaxed" dir="ltr">
                  {currentProject.solution}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
