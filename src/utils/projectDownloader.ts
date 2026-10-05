import JSZip from 'jszip';

export async function downloadProjectZip() {
  const zip = new JSZip();

  // Glob all source files as raw text using Vite's eager raw import
  const rawFiles = import.meta.glob(
    [
      '/src/**/*.{ts,tsx,css}',
      '/index.html',
      '/package.json',
      '/tsconfig.json',
      '/vite.config.ts',
      '/metadata.json',
    ],
    { query: '?raw', import: 'default', eager: true }
  ) as Record<string, string>;

  // Add files to zip
  for (const [path, content] of Object.entries(rawFiles)) {
    // Remove leading slash
    const relativePath = path.startsWith('/') ? path.slice(1) : path;
    zip.file(relativePath, content);
  }

  // Add a helpful README.md in Arabic explaining how to run the project
  const readmeContent = `# منصة كودر سبيس (Coder Space) التعليمية لتعلم البرمجة

مشروع منصة كودر سبيس التفاعلية لتعليم لغات HTML و CSS و JavaScript بدون أي اشتراكات أو تكاليف.

### متطلبات التشغيل:
- بيئة Node.js (إصدار 18 أو أحدث) من https://nodejs.org

### خطوات التشغيل في جهازك:
1. افتح موجه الأوامر (Terminal أو Command Prompt) داخل هذا المجلد.
2. ثبت الحزم والمكتبات:
   \`\`\`bash
   npm install
   \`\`\`
3. شغل الخادم المحلي:
   \`\`\`bash
   npm run dev
   \`\`\`
4. افتح المتصفح على الرابط الظاهر:
   http://localhost:3000

### أهم الملفات والمجلدات:
- \`src/data/htmlLessons.ts\`: دروس لغة HTML الثلاثون
- \`src/data/cssLessons.ts\`: دروس لغة CSS الثلاثون
- \`src/data/jsLessons.ts\`: دروس لغة JavaScript الثلاثون
- \`src/data/projects.ts\`: المشاريع العملية الـ 18
- \`src/data/incomeWays.ts\`: دليل مسارات الربح من العمل الحر
- \`src/components/UnitExamView.tsx\`: نظام الاختبارات والشهادات المعتمدة
- \`src/context/AppContext.tsx\`: نظام حفظ التقدم والبيانات المحلي Local-First

بالتوفيق في رحلتك البرمجية مع كودر سبيس (Coder Space)!`;

  zip.file('README.md', readmeContent);

  // Generate ZIP blob
  const blob = await zip.generateAsync({ type: 'blob' });

  // Trigger download
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `coder-space-project-${new Date().toISOString().split('T')[0]}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
