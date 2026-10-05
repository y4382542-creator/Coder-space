import { Lesson } from '../types';

export const cssUnitsMeta = [
  { id: 'cu1', num: 'الوحدة 1', title: 'ألوان النصوص والخطوط الأساسية', count: 5 },
  { id: 'cu2', num: 'الوحدة 2', title: 'الحدود والهوامش ومحاذاة النصوص', count: 5 },
  { id: 'cu3', num: 'الوحدة 3', title: 'الحالات التفاعلية والخلفيات والأبعاد', count: 5 },
  { id: 'cu4', num: 'الوحدة 4', title: 'المحددات والتحكم في ظهور العناصر', count: 5 },
  { id: 'cu5', num: 'الوحدة 5', title: 'التخطيط العصري Flexbox و Grid والظلال', count: 5 },
  { id: 'cu6', num: 'الوحدة 6', title: 'التحريك والتجاوب المتقدم للموبايل', count: 5 },
];

export const cssLessons: Record<string, Lesson> = {
  // CSS Unit 1
  'css-cu1-l1': {
    id: 'css-cu1-l1',
    subject: 'css',
    unit: 'cu1',
    lessonNumber: 'l1',
    title: 'لون النص عبر خاصية color',
    sub: 'تلوين النصوص باستخدام أسماء الألوان ورموز HEX و RGB',
    tag: 'CSS • الدرس 1',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تُستخدم خاصية <span class="text-[#FF6584] font-bold">color</span> في CSS لتحديد لون أي نص داخل الصفحة.<br><br>
        يمكنك كتابة اللون بعدة طرق شائعة:<br>
        1. بالاسم المباشر: <code class="text-amber-300">color: blue;</code><br>
        2. بنظام الست عشري HEX الأكثر شيوعاً: <code class="text-amber-300">color: #6C63FF;</code><br>
        3. بنظام RGB: <code class="text-amber-300">color: rgb(67, 233, 123);</code><br>
        4. بنظام RGBA الشفاف: <code class="text-amber-300">color: rgba(255, 101, 132, 0.8);</code>
      </p>
    `,
    code: `p {
  color: #6C63FF;
}

h1 {
  color: #FF6584;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <h2 style="color:#FF6584;margin:0 0 8px 0;">عنوان ملون بالوردي</h2>
      <p style="color:#6C63FF;margin:0;font-size:16px;">نص ملون بالرمز السداسي #6C63FF.</p>
    </div>`,
    practice: `p {
  color: #43E97B;
}
h1 {
  color: #6C63FF;
}`,
    hint: 'جرب استخدام ألوان مثل tomato, darkorange, royalblue.'
  },
  'css-cu1-l2': {
    id: 'css-cu1-l2',
    subject: 'css',
    unit: 'cu1',
    lessonNumber: 'l2',
    title: 'لون الخلفية عبر background-color',
    sub: 'إعطاء خلفيات ملونة للصفحة وللبطاقات والأزرار',
    tag: 'CSS • الدرس 2',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">background-color</span> مسؤولة عن تلوين مساحة خلفية أي عنصر.<br><br>
        يمكنك تطبيقها على كامل الصفحة عبر عنصر <code class="text-amber-300">body</code> لتحديد السمة الليلية أو الفاتحة.<br>
        كما تطبق على عناصر <code class="text-amber-300">div</code> و <code class="text-amber-300">button</code> لتشكيل البطاقات والمربعات والأزرار المتميزة.
      </p>
    `,
    code: `body {
  background-color: #0F0E17;
}

.card {
  background-color: #1E1D2E;
  color: #FFFFFE;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#1E1D2E;border-radius:8px;color:#fff;">
      <div style="background:#252340;padding:12px;border-radius:6px;">
        مربع بخلفية داكنة متناسقة
      </div>
    </div>`,
    practice: `div {
  background-color: #6C63FF;
  color: white;
}`,
    hint: 'اختر ألوان خلفية توفر تبايناً مريحاً للعين مع لون النص.'
  },
  'css-cu1-l3': {
    id: 'css-cu1-l3',
    subject: 'css',
    unit: 'cu1',
    lessonNumber: 'l3',
    title: 'عائلة الخطوط عبر font-family',
    sub: 'اختيار الخطوط العربية والإنجليزية المناسبة لهوية الموقع',
    tag: 'CSS • الدرس 3',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تحدد خاصية <span class="text-[#FF6584] font-bold">font-family</span> نوع الخط المستخدم في كتابة النصوص.<br><br>
        يُفضل وضع خطوط بديلة في حال لم يكن الخط مثبتاً على جهاز المستخدم:<br>
        <code class="text-amber-300">font-family: 'Tajawal', Arial, sans-serif;</code>
      </p>
    `,
    code: `body {
  font-family: 'Tajawal', Arial, sans-serif;
}

h1 {
  font-family: 'Cairo', sans-serif;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h3 style="font-family:'Cairo',sans-serif;margin:0 0 6px 0;font-size:20px;">خط كايرو العصري</h3>
      <p style="font-family:'Tajawal',sans-serif;margin:0;font-size:15px;color:#555;">خط تجوال الأنيق والمريح لقراءة الفقرات الطويلة.</p>
    </div>`,
    practice: `p {
  font-family: Arial, sans-serif;
}`,
    hint: 'ضع دائماً عائلة الخط العامة sans-serif كخيار أخير احتياطي.'
  },
  'css-cu1-l4': {
    id: 'css-cu1-l4',
    subject: 'css',
    unit: 'cu1',
    lessonNumber: 'l4',
    title: 'حجم الخطوط عبر font-size',
    sub: 'التحكم بحجم الكلمات بوحدات البكسل px والوحدات النسبية rem',
    tag: 'CSS • الدرس 4',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تتحكم خاصية <span class="text-[#FF6584] font-bold">font-size</span> بحجم النص وارتفاعه.<br><br>
        أشهر الوحدات المستخدمة:<br>
        1. <code class="text-amber-300">px</code> (البكسل الثابت): مثل <code class="text-amber-300">16px</code> وهو الحجم الافتراضي لمعظم المتصفحات.<br>
        2. <code class="text-amber-300">rem</code>: وحدة نسبية ممتازة تتجاوب مع إعدادات نظام المستخدم (1rem = 16px افتراضياً).<br>
        3. <code class="text-amber-300">%</code>: نسبة مئوية من حجم العنصر الحاوي.
      </p>
    `,
    code: `h1 {
  font-size: 32px;
}
p {
  font-size: 16px;
}
small {
  font-size: 12px;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <div style="font-size:28px;font-weight:bold;color:#4B44CC;margin-bottom:4px;">حجم 28px</div>
      <div style="font-size:16px;color:#444;margin-bottom:4px;">حجم 16px</div>
      <div style="font-size:12px;color:#888;">حجم 12px</div>
    </div>`,
    practice: `h1 {
  font-size: 36px;
}
p {
  font-size: 18px;
}`,
    hint: 'الحجم المريح لقراءة النصوص في الهواتف يبدأ من 16px.'
  },
  'css-cu1-l5': {
    id: 'css-cu1-l5',
    subject: 'css',
    unit: 'cu1',
    lessonNumber: 'l5',
    title: 'سُمك وميلان الخطوط font-weight & font-style',
    sub: 'إبراز العناوين بالخط العريض والنصوص المائلة',
    tag: 'CSS • الدرس 5',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">font-weight</span>: تحدد سُمك الخط (Bold أو Normal) وتأخذ قيماً رقمية من 100 إلى 900 (العادي 400 والعريض 700).<br><br>
        خاصية <span class="text-[#FF6584] font-bold">font-style</span>: تحدد ميلان الخط (<code class="text-amber-300">italic</code> للخط المائل أو <code class="text-amber-300">normal</code> للوضع الطبيعي).
      </p>
    `,
    code: `strong {
  font-weight: 700; /* خط عريض */
}

em {
  font-style: italic; /* خط مائل */
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <p style="font-weight:bold;margin:0 0 6px 0;color:#1e1e2f;">نص عريض عبر font-weight: bold</p>
      <p style="font-style:italic;margin:0;color:#555;">نص مائل عبر font-style: italic</p>
    </div>`,
    practice: `p {
  font-weight: bold;
  font-style: italic;
}`,
    hint: 'يمكنك إعطاء قيم رقمية مثل 100 خفيف و 900 سميك جداً.'
  },

  // CSS Unit 2
  'css-cu2-l1': {
    id: 'css-cu2-l1',
    subject: 'css',
    unit: 'cu2',
    lessonNumber: 'l1',
    title: 'إطارات العناصر وحوافها border',
    sub: 'رسم الإطارات الخارجية مع تدوير الزوايا border-radius',
    tag: 'CSS • الدرس 6',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تجمع خاصية <span class="text-[#FF6584] font-bold">border</span> ثلاثة عناصر في سطر واحد مختصر:<br>
        <code class="text-amber-300">border: السُمك والنوع واللون;</code><br><br>
        أنواع الإطار الأكثر شهرة: <code class="text-cyan-300">solid</code> (خط متصل)، <code class="text-cyan-300">dashed</code> (متقطع)، و <code class="text-cyan-300">dotted</code> (منقط).<br>
        أما خاصية <span class="text-[#FF6584] font-bold">border-radius</span> فتقوم بتدوير الزوايا لجعل التصميم عصرياً ومريحاً، وإذا وضعتها <code class="text-amber-300">50%</code> يصبح العنصر دائرياً بالكامل.
      </p>
    `,
    code: `.card {
  border: 2px solid #6C63FF;
  border-radius: 12px;
}

.avatar {
  border: 3px solid #43E97B;
  border-radius: 50%;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:14px;align-items:center;">
      <div style="padding:12px;border:2px solid #6C63FF;border-radius:12px;color:#222;font-size:14px;">
        بطاقة بزوايا مدورة 12px
      </div>
      <div style="width:50px;height:50px;border:3px solid #43E97B;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;color:#222;">
        دائرة
      </div>
    </div>`,
    practice: `div {
  border: 2px dashed #FF6584;
  border-radius: 8px;
}`,
    hint: 'border-radius تعطي مظهراً عصرياً وجذاباً لأي بطاقة.'
  },
  'css-cu2-l2': {
    id: 'css-cu2-l2',
    subject: 'css',
    unit: 'cu2',
    lessonNumber: 'l2',
    title: 'الهوامش الخارجية عبر margin',
    sub: 'إبعاد العناصر عن بعضها وتوسيط الصفحة تلقائياً',
    tag: 'CSS • الدرس 7',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">margin</span> تصنع مسافة فارغة <strong>خارج إطار العنصر</strong>.<br><br>
        تُستخدم لإبعاد البطاقات والفقرات عن بعضها حتى لا تلتصق الحواف ببعضها.<br>
        القيمة <code class="text-amber-300">margin: 20px;</code> تطبق مسافة 20 بكسل من جميع الجهات الأربع.<br>
        أما القيمة السحرية <code class="text-amber-300">margin: 0 auto;</code> فتقوم بتوسيط أي عنصر أفقي في منتصف الشاشة بدقة!
      </p>
    `,
    code: `.box {
  margin: 20px;
}

.centered-card {
  width: 300px;
  margin: 0 auto; /* توسيط تلقائي في المنتصف */
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#f5f5f7;border-radius:8px;">
      <div style="width:220px;margin:0 auto;background:#6C63FF;color:#fff;padding:12px;border-radius:8px;text-align:center;">
        عنصر تم توسيطه عبر margin: auto
      </div>
    </div>`,
    practice: `div {
  margin: 20px auto;
  width: 200px;
}`,
    hint: 'لتوسيط العنصر باستخدام margin: auto يجب تحديد width له أولاً.'
  },
  'css-cu2-l3': {
    id: 'css-cu2-l3',
    subject: 'css',
    unit: 'cu2',
    lessonNumber: 'l3',
    title: 'المسافات الداخلية عبر padding',
    sub: 'إعطاء متنفس ومساحة تنفس داخلية لمحتوى الأزرار والبطاقات',
    tag: 'CSS • الدرس 8',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">padding</span> تصنع مسافة فارغة <strong>داخل إطار العنصر</strong> بين النص والحدود.<br><br>
        <strong>الفرق الجوهري:</strong><br>
        <span class="text-amber-300">margin</span>: مسافة خارجية تدفع الجيران بعيداً.<br>
        <span class="text-cyan-300">padding</span>: مسافة داخلية توسع رقعة العنصر من الداخل ليصبح الزر فسيحاً وجذاباً.
      </p>
    `,
    code: `button {
  padding: 12px 24px;
  background-color: #6C63FF;
  color: white;
  border-radius: 8px;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:12px;align-items:center;">
      <button style="padding:4px 8px;background:#ddd;border:none;border-radius:4px;">زر بدون padding كافٍ</button>
      <button style="padding:12px 24px;background:#6C63FF;color:#fff;border:none;border-radius:8px;font-weight:bold;">زر فسيح مع padding بـ 12px 24px</button>
    </div>`,
    practice: `button {
  padding: 10px 20px;
}`,
    hint: 'القيمتان تعنيان: الأولى للأعلى والأسفل، والثانية لليمين واليسار.'
  },
  'css-cu2-l4': {
    id: 'css-cu2-l4',
    subject: 'css',
    unit: 'cu2',
    lessonNumber: 'l4',
    title: 'محاذاة النصوص عبر text-align',
    sub: 'ضبط اتجاه النصوص يميناً ويساراً وفي المنتصف والتنسيق الكامل',
    tag: 'CSS • الدرس 9',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تحدد خاصية <span class="text-[#FF6584] font-bold">text-align</span> تموضع الكلمات أفقياً داخل مساحتها:<br><br>
        <code class="text-amber-300">right</code>: محاذاة لليمين (الوضع الطبيعي للغة العربية).<br>
        <code class="text-amber-300">center</code>: توسيط النص في المنتصف تماماً (للعناوين والشعارات).<br>
        <code class="text-amber-300">left</code>: محاذاة لليسار (للنصوص الإنجليزية والأكواد البرمجية).<br>
        <code class="text-amber-300">justify</code>: ضبط أطراف السطور لتتساوى كأعمدة الصحف والكتب.
      </p>
    `,
    code: `h1 {
  text-align: center;
}
p {
  text-align: right;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h3 style="text-align:center;margin:0 0 8px 0;color:#6C63FF;">عنوان في المنتصف</h3>
      <p style="text-align:right;margin:0;font-size:14px;color:#555;">فقرة محاذاة إلى جهة اليمين بكل دقة ووضوح.</p>
    </div>`,
    practice: `h1 {
  text-align: center;
}`,
    hint: 'استخدم text-align: center لتوسيط العناوين الرئيسية دائماً.'
  },
  'css-cu2-l5': {
    id: 'css-cu2-l5',
    subject: 'css',
    unit: 'cu2',
    lessonNumber: 'l5',
    title: 'زخرفة وتسطير النصوص text-decoration',
    sub: 'إزالة الخط السفلي من الروابط وشطب الأسعار القديمة',
    tag: 'CSS • الدرس 10',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">text-decoration</span> تتحكم في الخطوط المصاحبة للنصوص:<br><br>
        <code class="text-amber-300">none</code>: إزالة أي خطوط (الاستخدام الأشهر لحذف الخط الافتراضي تحت الروابط).<br>
        <code class="text-amber-300">underline</code>: وضع خط مباشر تحت الكلمة للتوكيد.<br>
        <code class="text-amber-300">line-through</code>: شطب الكلمة بمنتصفها (شهير جداً في المتاجر لشطب السعر القديم بعد الخصم).
      </p>
    `,
    code: `a {
  text-decoration: none; /* إزالة الخط تحت الروابط */
}

.old-price {
  text-decoration: line-through; /* شطب السعر القديم */
  color: #888;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:14px;align-items:center;">
      <a href="#" style="text-decoration:none;color:#6C63FF;font-weight:bold;">رابط أنيق بلا خط سفلي</a>
      <span style="text-decoration:line-through;color:#999;font-size:14px;">100$</span>
      <span style="color:#28A745;font-weight:bold;font-size:16px;">50$</span>
    </div>`,
    practice: `a {
  text-decoration: none;
}`,
    hint: 'أول سطر يكتبه المطور في CSS غالباً هو a { text-decoration: none; }.'
  },

  // CSS Unit 3
  'css-cu3-l1': {
    id: 'css-cu3-l1',
    subject: 'css',
    unit: 'cu3',
    lessonNumber: 'l1',
    title: 'تفاعل الروابط عند التحويم a:hover',
    sub: 'تغيير شكل ولون الروابط عند مرور مؤشر الفأرة عليها',
    tag: 'CSS • الدرس 11',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        في CSS نستخدم الأصناف الزائفة (Pseudo-classes) لتغيير مظهر العنصر بناءً على حالة المستخدم:<br><br>
        <code class="text-amber-300">a</code>: الحالة العادية للرابط.<br>
        <code class="text-amber-300">a:hover</code>: الحالة عند مرور مؤشر الفأرة فوق الرابط.<br>
        <code class="text-amber-300">a:visited</code>: الحالة بعد أن يكون المستخدم قد زار الرابط بالفعل.<br>
        <code class="text-amber-300">a:active</code>: الحالة أثناء الضغط المستمر بزر الفأرة.
      </p>
    `,
    code: `a {
  color: #6C63FF;
  text-decoration: none;
}

a:hover {
  color: #FF6584;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <a href="#" style="color:#6C63FF;font-weight:bold;font-size:16px;text-decoration:none;">مرر الفأرة هنا لتشاهد التغيير التفاعلي</a>
    </div>`,
    practice: `a:hover {
  color: #43E97B;
}`,
    hint: 'النقطتان الرأسيتان :hover تعني استهداف حالة التحويم بالفأرة.'
  },
  'css-cu3-l2': {
    id: 'css-cu3-l2',
    subject: 'css',
    unit: 'cu3',
    lessonNumber: 'l2',
    title: 'تفاعل الأزرار عند التحويم hover',
    sub: 'منح الزائر شعوراً بالحيوية ورد الفعل الفوري للأزرار',
    tag: 'CSS • الدرس 12',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        لا يقتصر استخدام <span class="text-[#FF6584] font-bold">:hover</span> على الروابط فقط، بل يُستخدم بكثرة مع الأزرار والبطاقات.<br><br>
        عندما يمر المستخدم بالفأرة على الزر، يمكنك تغيير لونه إلى درجة أغمق أو أفتح قليلاً ليشعر الزائر بأن الزر مستعد للتنفيذ فوراً.
      </p>
    `,
    code: `button {
  background-color: #6C63FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
}

button:hover {
  background-color: #4B44CC;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <button style="background:#6C63FF;color:#fff;padding:10px 20px;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">زر تفاعلي يتجاوب معك</button>
    </div>`,
    practice: `button:hover {
  background: #FF6584;
}`,
    hint: 'جعل لون الزر أغمق بنسبة بسيطة في hover هو المعيار الاحترافي.'
  },
  'css-cu3-l3': {
    id: 'css-cu3-l3',
    subject: 'css',
    unit: 'cu3',
    lessonNumber: 'l3',
    title: 'الصور كخلفيات background-image',
    sub: 'وضع الصور كخلفيات متجاوبة مع خاصية background-size cover',
    tag: 'CSS • الدرس 13',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">background-image</span> تسمح بتعيين صورة كخلفية لأي قسم عبر رابط url.<br><br>
        ولاكتمال المظهر الاحترافي يُفضل دائماً مرافقتها بثلاث خصائص مكملة:<br>
        1. <code class="text-amber-300 font-mono">background-size: cover;</code> لتغطية المساحة بالكامل دون تشويه أبعاد الصورة.<br>
        2. <code class="text-amber-300 font-mono">background-repeat: no-repeat;</code> لمنع تكرار الصورة المتجاور كالبلاط.<br>
        3. <code class="text-amber-300 font-mono">background-position: center;</code> لتركيز منتصف الصورة دائماً.
      </p>
    `,
    code: `.hero-banner {
  background-image: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 180px;
}`,
    lang: 'CSS',
    preview: `<div style="background-image:url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600');background-size:cover;background-position:center;height:140px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:bold;font-size:18px;text-shadow:0 2px 6px rgba(0,0,0,0.8);">
      خلفية احترافية عبر cover
    </div>`,
    practice: `div {
  background-image: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600');
  background-size: cover;
}`,
    hint: 'background-size: cover تضمن ملاءمة الصورة لأي شاشة دون تمطيط.'
  },
  'css-cu3-l4': {
    id: 'css-cu3-l4',
    subject: 'css',
    unit: 'cu3',
    lessonNumber: 'l4',
    title: 'العرض والعرض الأقصى width & max-width',
    sub: 'بناء تخطيطات مرنة ومتجاوبة تمنع انكسار الصفحة في شاشات الجوال',
    tag: 'CSS • الدرس 14',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">width</span> تحدد عرض العنصر بقيمة ثابتة أو نسبية (مثل 300px أو 80%).<br><br>
        أما خاصية <span class="text-[#FF6584] font-bold">max-width</span> (العرض الأقصى) فهي سر التجاوب مع شاشات الهواتف:<br>
        تسمح للعنصر بأن يتوسع حتى حد أقصى محدد، لكن إذا كانت شاشة الهاتف أصغر منه، فإنه ينكمش تلقائياً ليناسب الشاشة دون ظهور شريط تمرير أفقي مزعج!
      </p>
    `,
    code: `.container {
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <div style="width:90%;max-width:320px;margin:0 auto;background:#6C63FF;color:#fff;padding:12px;border-radius:6px;text-align:center;">
        حاوية متجاوبة بحد أقصى 320px
      </div>
    </div>`,
    practice: `div {
  max-width: 400px;
  width: 100%;
}`,
    hint: 'استخدم دائماً max-width: 100% للصور لتجنب خروجها عن حواف الشاشة.'
  },
  'css-cu3-l5': {
    id: 'css-cu3-l5',
    subject: 'css',
    unit: 'cu3',
    lessonNumber: 'l5',
    title: 'الارتفاع ووحدات الشاشة height & vh',
    sub: 'التحكم بالارتفاع ووحدة Viewport Height',
    tag: 'CSS • الدرس 15',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تحدد خاصية <span class="text-[#FF6584] font-bold">height</span> ارتفاع العنصر عمودياً.<br><br>
        وحدة <code class="text-amber-300">vh</code> (اختصار Viewport Height) تمثل نسبة مئوية من كامل ارتفاع شاشة جهاز المستخدم الحالية:<br>
        فالقيمة <code class="text-amber-300 font-mono">100vh</code> تعني أن العنصر سيغطي 100% من كامل ارتفاع شاشة الزائر، مهما كان حجم هاتفه أو حاسوبه.
      </p>
    `,
    code: `.hero-section {
  min-height: 200px;
  height: 30vh;
}`,
    lang: 'CSS',
    preview: `<div style="height:120px;background:#1E1D2E;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#43E97B;font-weight:bold;">
      ارتفاع ثابت height: 120px
    </div>`,
    practice: `div {
  height: 150px;
}`,
    hint: 'min-height مفيدة جداً لضمان عدم انكماش القسم إذا زاد النص بداخله.'
  },

  // CSS Unit 4
  'css-cu4-l1': {
    id: 'css-cu4-l1',
    subject: 'css',
    unit: 'cu4',
    lessonNumber: 'l1',
    title: 'محدد الفئة النقطي class (.)',
    sub: 'استهداف الفئات المشتركة وتطبيق التنسيق على مئات العناصر',
    tag: 'CSS • الدرس 16',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        لاستهداف أي عنصر يحمل <code class="text-amber-300">class="btn"</code> في ملف CSS، نضع قبله <strong>علامة النقطة (.)</strong> مباشرة:<br>
        <code class="text-amber-300 font-mono">.btn { ... }</code><br><br>
        ميزة محدد الفئة أنه قابل لإعادة الاستخدام في 100 عنصر مختلف داخل نفس الصفحة، مما يقلل كتابة الأكواد المكررة بدرجة هائلة.
      </p>
    `,
    code: `.badge {
  background-color: #6C63FF;
  color: white;
  padding: 4px 12px;
  border-radius: 99px;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:8px;">
      <span style="background:#6C63FF;color:#fff;padding:4px 12px;border-radius:99px;font-size:13px;">.badge 1</span>
      <span style="background:#6C63FF;color:#fff;padding:4px 12px;border-radius:99px;font-size:13px;">.badge 2</span>
    </div>`,
    practice: `.card {
  background: #1E1D2E;
  color: white;
}`,
    hint: 'النقطة (.) هي علامة تمييز class في ملفات CSS.'
  },
  'css-cu4-l2': {
    id: 'css-cu4-l2',
    subject: 'css',
    unit: 'cu4',
    lessonNumber: 'l2',
    title: 'محدد المعرف الهاش id (#)',
    sub: 'استهداف العنصر الوحيد الفريد بأعلى درجات الأولوية',
    tag: 'CSS • الدرس 17',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        لاستهداف أي عنصر يحمل <code class="text-amber-300">id="hero"</code> في CSS، نضع قبله <strong>علامة الشباك (#)</strong>:<br>
        <code class="text-amber-300 font-mono">#hero { ... }</code><br><br>
        المعرف id يملك أولوية وتخصصية أعلى في قواعد CSS، لكن يُنصح بالاكتفاء به للعناصر الفريدة التي لا تتكرر في الصفحة مثل الشعار أو شريط التنقل الرئيسي.
      </p>
    `,
    code: `#main-header {
  background-color: #1E1D2E;
  color: #43E97B;
  padding: 16px;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#1E1D2E;border-radius:8px;color:#43E97B;font-weight:bold;text-align:center;">
      #main-header استهداف خاص بالمعرف
    </div>`,
    practice: `#logo {
  font-size: 28px;
  color: #6C63FF;
}`,
    hint: 'علامة الشباك # مخصصة حصراً لمعرفات id.'
  },
  'css-cu4-l3': {
    id: 'css-cu4-l3',
    subject: 'css',
    unit: 'cu4',
    lessonNumber: 'l3',
    title: 'زخرفة الخطوط المتقدمة والتسطير الملون',
    sub: 'التحكم بنوع الخط التحتي ولونه ونمطه المموج',
    tag: 'CSS • الدرس 18',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أصبح بإمكانك في الإصدارات الحديثة من CSS تلوين الخط التحتي بشكل مستقل عن لون الكلمة ذاتها:<br><br>
        1. تغيير لون التسطير: <code class="text-amber-300 font-mono">text-decoration-color: red;</code><br>
        2. تغيير نمط الخط التحتي: <code class="text-amber-300 font-mono">text-decoration-style: wavy;</code> (خط مموج جذاب) أو <code class="text-amber-300 font-mono">dotted</code> (منقط).
      </p>
    `,
    code: `.wavy-text {
  text-decoration: underline wavy #FF6584;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;color:#222;font-size:16px;">
      نص مزخرف بـ <span style="text-decoration:underline wavy #FF6584;color:#222;font-weight:bold;">خط سفلي مموج وردي</span> رائع
    </div>`,
    practice: `p {
  text-decoration: underline dotted #6C63FF;
}`,
    hint: 'يمكن دمج الخصائص في سطر واحد مختصر.'
  },
  'css-cu4-l4': {
    id: 'css-cu4-l4',
    subject: 'css',
    unit: 'cu4',
    lessonNumber: 'l4',
    title: 'شكل مؤشر الفأرة cursor',
    sub: 'إرشاد الزائر هل العنصر قابل للنقر، معطل، أم قابل للسحب',
    tag: 'CSS • الدرس 19',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">cursor</span> تغير شكل مؤشر الفأرة عندما يقف فوق العنصر:<br><br>
        <code class="text-amber-300">pointer</code>: شكل اليد الصغيرة (ضروري للأزرار والبطاقات القابلة للنقر).<br>
        <code class="text-amber-300">not-allowed</code>: علامة المنع الحمراء (للأزرار المعطلة disabled).<br>
        <code class="text-amber-300">grab</code>: يد مفتوحة للدلالة على إمكانية السحب والإفلات.
      </p>
    `,
    code: `button {
  cursor: pointer;
}

.disabled-btn {
  cursor: not-allowed;
  opacity: 0.6;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:12px;">
      <button style="padding:8px 16px;background:#6C63FF;color:#fff;border:none;border-radius:6px;cursor:pointer;">زر يد (Pointer)</button>
      <button style="padding:8px 16px;background:#eee;color:#888;border:none;border-radius:6px;cursor:not-allowed;">زر معطل (Not-Allowed)</button>
    </div>`,
    practice: `button {
  cursor: pointer;
}`,
    hint: 'اجعل دائماً الأزرار المخصصة تملك cursor: pointer.'
  },
  'css-cu4-l5': {
    id: 'css-cu4-l5',
    subject: 'css',
    unit: 'cu4',
    lessonNumber: 'l5',
    title: 'إخفاء العناصر عبر display: none',
    sub: 'الفرق الدقيق بين display: none و visibility: hidden',
    tag: 'CSS • الدرس 20',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        هناك طريقتان لإخفاء أي عنصر في CSS:<br><br>
        1. <span class="text-amber-300 font-mono">display: none;</span> تخفي العنصر تماماً وتزيله من تدفق الصفحة، فلا يترك أي مساحة فارغة مكانه (كأنه غير موجود).<br>
        2. <span class="text-cyan-300 font-mono">visibility: hidden;</span> تخفي العنصر بصرياً فقط، لكنها تبقي على مكانه ومساحته الفارغة محفوظة في الصفحة.
      </p>
    `,
    code: `.hidden-box {
  display: none; /* إخفاء تام من الصفحة */
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <p style="margin:0 0 6px 0;">نص ظاهر أول.</p>
      <p style="display:none;">نص مخفي تماماً عبر display: none لن تراه!</p>
      <p style="margin:0;">نص ظاهر ثانٍ احتل مكان المخفي فوراً.</p>
    </div>`,
    practice: `.secret {
  display: none;
}`,
    hint: 'display: none مستخدمة بكثرة لإخفاء القوائم المنبثقة حتى يفتحها المستخدم.'
  },

  // CSS Unit 5
  'css-cu5-l1': {
    id: 'css-cu5-l1',
    subject: 'css',
    unit: 'cu5',
    lessonNumber: 'l1',
    title: 'نظام الصندوق المرن Flexbox',
    sub: 'ترتيب وتوزيع العناصر في صفوف وأعمدة بكل سهولة ومرونة',
    tag: 'CSS • الدرس 21',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        بمجرد كتابة <code class="text-amber-300 font-mono">display: flex;</code> على العنصر الأب، يتحول أطفاله إلى عناصر مرنة مصطفة جنباً إلى جنب:<br><br>
        <code class="text-amber-300 font-mono">justify-content: center;</code> لتوسيط العناصر أفقياً.<br>
        <code class="text-amber-300 font-mono">justify-content: space-between;</code> لتوزيع العناصر على الأطراف وترك فراغات بينها (مثالي لأشرطة الروابط Navbar).<br>
        <code class="text-amber-300 font-mono">align-items: center;</code> لتوسيط العناصر عمودياً.<br>
        <code class="text-amber-300 font-mono">gap: 16px;</code> لصنع مسافات فاصلة متساوية بين العناصر.
      </p>
    `,
    code: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`,
    lang: 'CSS',
    preview: `<div style="padding:14px;background:#1E1D2E;border-radius:8px;display:flex;justify-content:space-between;align-items:center;">
      <div style="color:#6C63FF;font-weight:bold;">الشعار</div>
      <div style="display:flex;gap:10px;color:#fff;font-size:14px;">
        <span>الرئيسية</span>
        <span>الدروس</span>
        <span>اتصل بنا</span>
      </div>
    </div>`,
    practice: `.row {
  display: flex;
  gap: 12px;
  justify-content: center;
}`,
    hint: 'Flexbox يحل 90% من مشاكل ترتيب العناصر ومحاذاتها.'
  },
  'css-cu5-l2': {
    id: 'css-cu5-l2',
    subject: 'css',
    unit: 'cu5',
    lessonNumber: 'l2',
    title: 'نظام الشبكة ثنائية الأبعاد CSS Grid',
    sub: 'بناء معارض الصور وشبكات البطاقات بالأعمدة والصفوف المتناسقة',
    tag: 'CSS • الدرس 22',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        بينما يركز Flexbox على بعد واحد (صف أو عمود)، فإن نظام <span class="text-[#FF6584] font-bold">Grid</span> مصمم للشبكات المتكاملة ذات الصفوف والأعمدة معاً:<br><br>
        <code class="text-amber-300 font-mono">grid-template-columns: repeat(3, 1fr);</code> يقسم الشاشة إلى 3 أعمدة متساوية تماماً.<br>
        وحدة <code class="text-cyan-300 font-mono">1fr</code> تعني حصة واحدة عادلة من المساحة المتبقية.<br>
        <code class="text-amber-300 font-mono">gap: 20px;</code> مسافات شبكية متساوية بين كل بطاقة وأخرى.
      </p>
    `,
    code: `.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`,
    lang: 'CSS',
    preview: `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
      <div style="background:#6C63FF;padding:14px;border-radius:6px;text-align:center;color:#fff;font-size:13px;">عمود 1</div>
      <div style="background:#6C63FF;padding:14px;border-radius:6px;text-align:center;color:#fff;font-size:13px;">عمود 2</div>
      <div style="background:#6C63FF;padding:14px;border-radius:6px;text-align:center;color:#fff;font-size:13px;">عمود 3</div>
    </div>`,
    practice: `div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}`,
    hint: 'Grid ممتاز لمعارض المنتجات والمقالات.'
  },
  'css-cu5-l3': {
    id: 'css-cu5-l3',
    subject: 'css',
    unit: 'cu5',
    lessonNumber: 'l3',
    title: 'تدرجات الألوان الخطية linear-gradient',
    sub: 'صناعة خلفيات وتدرجات لونية ساحرة وجذابة بلا صور خارجية',
    tag: 'CSS • الدرس 23',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تتيح لك دالة <span class="text-[#FF6584] font-bold">linear-gradient()</span> دمج لونين أو أكثر في تدرج لوني انسيابي بديع:<br><br>
        الصيغة الأساسية:<br>
        <code class="text-amber-300 font-mono">background: linear-gradient(الاتجاه أو الزاوية, اللون1, اللون2);</code><br><br>
        يمكنك تحديد الاتجاه بالدرجات مثل <code class="text-cyan-300">135deg</code> أو بالكلمات مثل <code class="text-cyan-300">to right</code>.
      </p>
    `,
    code: `.gradient-btn {
  background: linear-gradient(135deg, #6C63FF, #FF6584);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
}`,
    lang: 'CSS',
    preview: `<div style="background:linear-gradient(135deg, #6C63FF, #FF6584);padding:18px;border-radius:8px;color:#fff;font-weight:bold;text-align:center;">
      تدرج انسيابي بزاوية 135deg
    </div>`,
    practice: `div {
  background: linear-gradient(to right, #6C63FF, #43E97B);
}`,
    hint: 'التدرجات اللونية من أهم صيحات التصميم الحديث.'
  },
  'css-cu5-l4': {
    id: 'css-cu5-l4',
    subject: 'css',
    unit: 'cu5',
    lessonNumber: 'l4',
    title: 'ظلال النصوص وتأثير النيون text-shadow',
    sub: 'إعطاء عمق وتوهج جذاب للكلمات والعناوين',
    tag: 'CSS • الدرس 24',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">text-shadow</span> تضفي ظلاً أو توهجاً خاصاً خلف الحروف:<br>
        <code class="text-amber-300 font-mono">text-shadow: إزاحة أفقية إزاحة عمودية شدة الضبابية اللون;</code><br><br>
        إذا جعلت الإزاحة الأفقية والعمودية صفراً واستخدمت لوناً فاقعاً، يتحول الظل إلى توهج نيون مضيء يخطف الأنظار!
      </p>
    `,
    code: `h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.neon {
  color: #43E97B;
  text-shadow: 0 0 10px #43E97B; /* توهج نيون أخضر */
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#1E1D2E;border-radius:8px;display:flex;gap:20px;align-items:center;">
      <h2 style="margin:0;color:#fff;text-shadow:2px 2px 6px rgba(0,0,0,0.6);font-size:20px;">ظل تقليدي</h2>
      <h2 style="margin:0;color:#43E97B;text-shadow:0 0 12px #43E97B;font-size:20px;">توهج نيون</h2>
    </div>`,
    practice: `h1 {
  text-shadow: 0 0 8px #6C63FF;
}`,
    hint: 'text-shadow يعطي مظهراً ثلاثي الأبعاد للنصوص.'
  },
  'css-cu5-l5': {
    id: 'css-cu5-l5',
    subject: 'css',
    unit: 'cu5',
    lessonNumber: 'l5',
    title: 'ظلال الصناديق والبطاقات box-shadow',
    sub: 'إضفاء عمق وارتفاع ثلاثي الأبعاد فوق سطح الصفحة',
    tag: 'CSS • الدرس 25',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">box-shadow</span> تضفي ظلاً على إطار العنصر بالكامل:<br>
        <code class="text-amber-300 font-mono">box-shadow: إزاحة-X إزاحة-Y ضبابية انتشار اللون;</code><br><br>
        هي العنصر الأساسي في تصميم البطاقات المرتفعة (Card Elevation) في واجهات الويب العالمية الحديثة، وتمنح شعوراً واقعياً بالعمق والطبقات.
      </p>
    `,
    code: `.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.25);
}`,
    lang: 'CSS',
    preview: `<div style="padding:20px;background:#f5f5f7;border-radius:8px;">
      <div style="background:#fff;padding:16px;border-radius:12px;box-shadow:0 8px 24px rgba(108,99,255,0.25);color:#222;text-align:center;font-weight:bold;">
        بطاقة طافية بظل ناعم 0 8px 24px
      </div>
    </div>`,
    practice: `div {
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}`,
    hint: 'استخدم دائماً درجات rgba الشفافة ليكون الظل واقعياً وناعماً.'
  },

  // CSS Unit 6
  'css-cu6-l1': {
    id: 'css-cu6-l1',
    subject: 'css',
    unit: 'cu6',
    lessonNumber: 'l1',
    title: 'تدوير العناصر عبر transform: rotate()',
    sub: 'إمالة الأوسمة والشارات بزوايا دائرية لافتة',
    tag: 'CSS • الدرس 26',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">transform: rotate(الزاوية)</span> تتيح لك تدوير أي عنصر في مكانه:<br><br>
        تُقاس الزاوية بوحدة <code class="text-amber-300 font-mono">deg</code> (الدرجات).<br>
        دوران باتجاه عقارب الساعة: <code class="text-amber-300">rotate(15deg)</code>.<br>
        دوران عكس عقارب الساعة: <code class="text-amber-300">rotate(-10deg)</code>.<br>
        الدورة الكاملة تساوي <code class="text-amber-300 font-mono">360deg</code>.
      </p>
    `,
    code: `.badge-sale {
  transform: rotate(-8deg);
  display: inline-block;
  background: #FF6584;
  color: white;
  padding: 6px 14px;
}`,
    lang: 'CSS',
    preview: `<div style="padding:20px;background:#fff;border-radius:8px;text-align:center;">
      <div style="display:inline-block;transform:rotate(-6deg);background:#FF6584;color:#fff;padding:8px 18px;border-radius:6px;font-weight:bold;">
        خصم خاص -6deg!
      </div>
    </div>`,
    practice: `div {
  transform: rotate(10deg);
}`,
    hint: 'تأكد من أن العنصر display: inline-block أو block لتفعيل التدوير.'
  },
  'css-cu6-l2': {
    id: 'css-cu6-l2',
    subject: 'css',
    unit: 'cu6',
    lessonNumber: 'l2',
    title: 'تكبير وتصغير العناصر عبر transform: scale()',
    sub: 'صناعة تأثير التكبير التفاعلي الممتع عند مرور الفأرة',
    tag: 'CSS • الدرس 27',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">transform: scale(النسبة)</span> تضخم أو تقلص حجم العنصر دون التأثير على العناصر المجاورة:<br><br>
        <code class="text-amber-300">scale(1)</code> تعني الحجم الطبيعي 100%.<br>
        <code class="text-amber-300">scale(1.1)</code> تكبر العنصر بنسبة 10% إضافية (رائع في hover).<br>
        <code class="text-amber-300">scale(0.9)</code> تصغر العنصر بنسبة 10%.
      </p>
    `,
    code: `.card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <button style="background:#6C63FF;color:#fff;padding:12px 24px;border:none;border-radius:8px;font-weight:bold;cursor:pointer;transform:scale(1.08);">
        زر مكبر بنسبة scale(1.08)
      </button>
    </div>`,
    practice: `button:hover {
  transform: scale(1.1);
}`,
    hint: 'scale تعطي شعوراً بالتفاعل ثلاثي الأبعاد.'
  },
  'css-cu6-l3': {
    id: 'css-cu6-l3',
    subject: 'css',
    unit: 'cu6',
    lessonNumber: 'l3',
    title: 'الحركة الانسيابية والنعومة transition',
    sub: 'تحويل التغيرات المفاجئة إلى حركات سينمائية سلسة ومريحة',
    tag: 'CSS • الدرس 28',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#FF6584] font-bold">transition</span> هي العصا السحرية التي تحول القفزات اللحظية المفاجئة في الألوان والحجم إلى حركة تدريجية سلسة:<br><br>
        الصيغة الأكثر استخداماً:<br>
        <code class="text-amber-300 font-mono">transition: الخاصية المدة منحنى-السرعة;</code><br><br>
        المعيار الشائع لمعظم المواقع: <code class="text-cyan-300 font-mono">transition: all 0.3s ease;</code> حيث 0.3 ثانية هي التوقيت الذهبي لعين الإنسان.
      </p>
    `,
    code: `button {
  background-color: #6C63FF;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #FF6584;
  transform: translateY(-4px);
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <button style="background:#6C63FF;color:#fff;padding:12px 24px;border:none;border-radius:8px;font-weight:bold;cursor:pointer;transition:all 0.3s ease;">
        زر بانتقال زمني ناعم 0.3 ثانية
      </button>
    </div>`,
    practice: `button {
  transition: all 0.3s ease;
}`,
    hint: 'ضع دائماً خاصية transition على العنصر الأساسي وليس في :hover.'
  },
  'css-cu6-l4': {
    id: 'css-cu6-l4',
    subject: 'css',
    unit: 'cu6',
    lessonNumber: 'l4',
    title: 'الرسوم المتحركة التلقائية @keyframes & animation',
    sub: 'تحريك العناصر تلقائياً وبشكل دوري متكرر ومستمر',
    tag: 'CSS • الدرس 29',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        لصناعة حركة مستمرة ومتقدمة في CSS نحتاج خطوتين:<br><br>
        1. <strong>تعريف مسار الحركة</strong> عبر <code class="text-amber-300 font-mono">@keyframes</code> وتحديد محطات البداية (0%) والوسط والنهاية (100%).<br>
        2. <strong>تطبيق الحركة على العنصر</strong> عبر خاصية <code class="text-cyan-300 font-mono">animation</code> مع تحديد المدة وخاصية <code class="text-amber-300">infinite</code> للتكرار إلى ما لا نهاية.
      </p>
    `,
    code: `@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.pulsing-dot {
  animation: pulse 1.5s infinite;
}`,
    lang: 'CSS',
    preview: `<div style="padding:20px;background:#1E1D2E;border-radius:8px;text-align:center;">
      <div style="display:inline-block;padding:10px 20px;background:#43E97B;color:#0A2010;font-weight:bold;border-radius:99px;animation:pulse 1.5s infinite;">
        عنصر ينبض تلقائياً عبر @keyframes
      </div>
    </div>`,
    practice: `div {
  animation: bounce 2s infinite;
}`,
    hint: '@keyframes تتيح لك ابتكار حركات حرة ومستمرة لا نهائية.'
  },
  'css-cu6-l5': {
    id: 'css-cu6-l5',
    subject: 'css',
    unit: 'cu6',
    lessonNumber: 'l5',
    title: 'استعلامات الوسائط والتجاوب @media query',
    sub: 'تعديل التصميم ليتناسب مع شاشات الهواتف والأجهزة اللوحية والحواسيب',
    tag: 'CSS • الدرس 30',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        قواعد <span class="text-[#FF6584] font-bold">@media</span> هي الركيزة الكبرى للتصميم المتجاوب في CSS الحديث:<br><br>
        تسمح بتطبيق شروط وتنسيقات خاصة بحسب عرض الشاشة:<br>
        <code class="text-amber-300 font-mono">@media (max-width: 768px) { ... }</code>: تطبق الأكواد فقط عندما يكون عرض الشاشة أصغر من 768 بكسل (أجهزة الجوال).<br>
        يمكنك عبرها تغيير ترتيب الأعمدة لتصبح عمودية، أو تصغير حجم الخطوط لتلائم راحة اليد.
      </p>
    `,
    code: `/* الوضع العادي للكمبيوتر */
.cards {
  display: flex;
}

/* التجاوب مع شاشات الهواتف */
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
  }
}`,
    lang: 'CSS',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;border:1px dashed #6C63FF;">
      <p style="margin:0;font-size:14px;color:#4B44CC;font-weight:bold;">تصميم متجاوب يتغير حسب مقاس نافذة التصفح لديك.</p>
    </div>`,
    practice: `@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}`,
    hint: 'التصميم المتجاوب مع الهواتف أولاً (Mobile-First Design) هو المعيار العالمي اليوم.'
  }
};
