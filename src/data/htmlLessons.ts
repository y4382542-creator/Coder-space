import { Lesson } from '../types';

export const htmlUnitsMeta = [
  { id: 'u1', num: 'الوحدة 1', title: 'الأساسيات وعناصر الصفحة الرئيسية', count: 5 },
  { id: 'u2', num: 'الوحدة 2', title: 'القوائم والجداول والتعليقات', count: 5 },
  { id: 'u3', num: 'الوحدة 3', title: 'النماذج والوسائط المتعددة', count: 5 },
  { id: 'u4', num: 'الوحدة 4', title: 'تقسيم العناصر والروابط المتقدمة', count: 5 },
  { id: 'u5', num: 'الوحدة 5', title: 'التضمين والهيكلة الدلالية', count: 5 },
  { id: 'u6', num: 'الوحدة 6', title: 'عناصر الهيكلة المتقدمة وتهيئة محركات البحث SEO', count: 5 },
];

export const htmlLessons: Record<string, Lesson> = {
  // Unit 1
  'html-u1-l1': {
    id: 'html-u1-l1',
    subject: 'html',
    unit: 'u1',
    lessonNumber: 'l1',
    title: 'هيكل وثيقة HTML الأساسي',
    sub: 'اللبنة الأولى لأي موقع إنترنت في العالم',
    tag: 'HTML • الدرس 1',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        كل صفحة ويب تبدأ بهيكل أساسي يخبر المتصفح بكيفية قراءة المحتوى:<br><br>
        <span class="text-[#6C63FF] font-bold">&lt;!DOCTYPE html&gt;</span> يحدد أن المستند يتبع معيار HTML5 الحديث.<br>
        <span class="text-[#6C63FF] font-bold">&lt;html&gt;</span> هو العنصر الجذري الذي يحوي كل شيء داخل الصفحة.<br>
        <span class="text-[#6C63FF] font-bold">&lt;head&gt;</span> يحتوي على معلومات الموقع الخفية (العنوان والترميز والروابط الخارجية).<br>
        <span class="text-[#6C63FF] font-bold">&lt;title&gt;</span> يحدد اسم الصفحة في شريط المتصفح ومحركات البحث.<br>
        <span class="text-[#6C63FF] font-bold">&lt;body&gt;</span> يحتوي على كل ما يراه المستخدم فعلياً على الشاشة.<br><br>
        <strong class="text-[#43E97B]">قاعدة ذهبية:</strong> أغلب وسوم HTML تحتاج وسم فتح <code class="bg-[#1F1D33] px-2 py-0.5 rounded text-amber-300">&lt;tag&gt;</code> ووسم إغلاق <code class="bg-[#1F1D33] px-2 py-0.5 rounded text-amber-300">&lt;/tag&gt;</code>.
      </p>
    `,
    code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>صفحتي الأولى</title>
  </head>
  <body>
    <h1>مرحباً بكم في عالم البرمجة!</h1>
    <p>هذا أول كود أكتبه بيدي.</p>
  </body>
</html>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#ffffff;color:#1e1e2f;border-radius:8px;font-family:Arial,sans-serif;">
      <h1 style="color:#4B44CC;margin-bottom:8px;font-size:24px;">مرحباً بكم في عالم البرمجة!</h1>
      <p style="color:#555;font-size:15px;margin:0;">هذا أول كود أكتبه بيدي.</p>
    </div>`,
    practice: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <title>تطبيقي التفاعلي</title>
  </head>
  <body>
    <!-- جرب تغيير العنوان والفقرة هنا -->
    <h1>أنا مبرمج المستقبل!</h1>
    <p>أتعلم تطوير الويب مجاناً وبكل ثقة.</p>
  </body>
</html>`,
    hint: 'تأكد من كتابة كل محتواك المرئي داخل وسم <body>.'
  },
  'html-u1-l2': {
    id: 'html-u1-l2',
    subject: 'html',
    unit: 'u1',
    lessonNumber: 'l2',
    title: 'وسم الفقرة <p>',
    sub: 'كتابة النصوص وتنسيق الفقرات المقروءة',
    tag: 'HTML • الدرس 2',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;p&gt;</span> (اختصار Paragraph) لكتابة فقرات النصوص العادية.<br><br>
        المتصفح يضيف تلقائياً مسافة فارغة عمودية قبل وبعد كل فقرة لتسهيل القراءة.<br>
        دائماً احرص على إغلاق كل فقرة بـ <code>&lt;/p&gt;</code> لضمان سلامة بناء الكود.
      </p>
    `,
    code: `<p>لغة HTML هي أساس كل صفحات الويب في العالم.</p>
<p>تعلّمها ممتع وسريع ويمهد لك الطريق لاحتراف البرمجة!</p>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#ffffff;color:#222;border-radius:8px;">
      <p style="margin:0 0 10px 0;font-size:15px;line-height:1.6;">لغة HTML هي أساس كل صفحات الويب في العالم.</p>
      <p style="margin:0;font-size:15px;line-height:1.6;color:#4B44CC;">تعلّمها ممتع وسريع ويمهد لك الطريق لاحتراف البرمجة!</p>
    </div>`,
    practice: `<p>أنا أحب تعلم البرمجة...</p>
<p>هذه فقرتي الثانية المستقلة تماماً!</p>`,
    hint: 'كل وسم <p> يظهر في سطر مستقل مع هوامش علوية وسفلية تلقائية.'
  },
  'html-u1-l3': {
    id: 'html-u1-l3',
    subject: 'html',
    unit: 'u1',
    lessonNumber: 'l3',
    title: 'عناوين الصفحات من <h1> إلى <h6>',
    sub: 'التسلسل الهرمي للعناوين وأهميتها لتهيئة محركات البحث SEO',
    tag: 'HTML • الدرس 3',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        توفر HTML ستة مستويات من العناوين من <code>&lt;h1&gt;</code> إلى <code>&lt;h6&gt;</code>:<br><br>
        <strong>&lt;h1&gt;</strong> العنوان الرئيسي الأهم في الصفحة (يُفضل وجود واحد فقط لكل صفحة لأجل محركات البحث SEO).<br>
        <strong>&lt;h2&gt;</strong> العناوين الفرعية للأقسام الرئيسية.<br>
        <strong>&lt;h3&gt;</strong> العناوين الفرعية داخل كل قسم.<br>
        <strong>&lt;h4&gt; إلى &lt;h6&gt;</strong> عناوين دقيقة وتفصيلية بحجم خط أصغر.
      </p>
    `,
    code: `<h1>العنوان الرئيسي للصفحة</h1>
<h2>عنوان القسم الأول</h2>
<h3>عنوان فرعي تفصيلي</h3>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h1 style="font-size:24px;margin:0 0 8px 0;color:#1e1e2f;">العنوان الرئيسي للصفحة</h1>
      <h2 style="font-size:19px;margin:0 0 6px 0;color:#6C63FF;">عنوان القسم الأول</h2>
      <h3 style="font-size:16px;margin:0;color:#666;">عنوان فرعي تفصيلي</h3>
    </div>`,
    practice: `<h1>موقعي الإلكتروني الشخصي</h1>
<h2>عن خبراتي البرمجية</h2>
<h3>مشاريع قمت ببنائها</h3>`,
    hint: 'استخدم h1 للعنوان الأكثر أهمية ثم h2 ثم h3 بتسلسل منطقي.'
  },
  'html-u1-l4': {
    id: 'html-u1-l4',
    subject: 'html',
    unit: 'u1',
    lessonNumber: 'l4',
    title: 'الروابط التشعبية عبر وسم <a>',
    sub: 'ربط الصفحات والمواقع الخارجية مع خاصية href',
    tag: 'HTML • الدرس 4',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُعد وسم <span class="text-[#6C63FF] font-bold">&lt;a&gt;</span> (Anchor) الوسيلة الأساسية للانتقال بين صفحات الإنترنت.<br><br>
        الخاصية الأهم بداخله هي <code class="bg-[#1F1D33] px-2 py-0.5 rounded text-amber-300">href</code> (اختصار Hypertext Reference) وتحدد الرابط أو المسار الذي سينتقل إليه المستخدم.<br>
        يمكنك وضع نصوص أو صور أو أزرار داخل وسم الرابط لتصبح قابلة للنقر.
      </p>
    `,
    code: `<a href="https://google.com">زيارة محرك بحث جوجل</a>
<br><br>
<a href="https://github.com">زيارة مجتمع جيت هب</a>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <a href="https://google.com" target="_blank" style="color:#6C63FF;font-weight:bold;text-decoration:none;display:inline-block;margin-bottom:8px;">زيارة محرك بحث جوجل</a><br>
      <a href="https://github.com" target="_blank" style="color:#222;font-weight:bold;text-decoration:none;">زيارة مجتمع جيت هب</a>
    </div>`,
    practice: `<a href="https://google.com">ابحث في جوجل</a>`,
    hint: 'تأكد من كتابة البروتوكول كاملاً مثل https:// في خاصية href.'
  },
  'html-u1-l5': {
    id: 'html-u1-l5',
    subject: 'html',
    unit: 'u1',
    lessonNumber: 'l5',
    title: 'عرض الصور عبر وسم <img>',
    sub: 'إدراج الصور والتحكم بأبعادها ونصها البديل alt',
    tag: 'HTML • الدرس 5',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;img&gt;</span> هو وسم أحادي الإغلاق (لا يحتاج &lt;/img&gt;).<br><br>
        الخصائص الأساسية له:<br>
        <code class="text-amber-300 font-mono">src</code>: مسار الصورة (سواء رابط ويب مباشر أو مسار محلي).<br>
        <code class="text-amber-300 font-mono">alt</code>: نص بديل يصف الصورة لمحركات البحث وقارئات الشاشة في حال تعذر تحميل الصورة.<br>
        <code class="text-amber-300 font-mono">width</code> و <code class="text-amber-300 font-mono">height</code>: لتحديد عرض وارتفاع الصورة بالبكسل.
      </p>
    `,
    code: `<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=320" alt="صورة حاسوب محمول للبرمجة" width="300">`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=320" alt="صورة حاسوب محمول للبرمجة" style="max-width:100%;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);">
    </div>`,
    practice: `<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=320" alt="شاشة كود وبرمجة" width="280">`,
    hint: 'لا تنسَ إضافة خاصية alt دائماً فهي معيار أساسي لإمكانية الوصول وSEO.'
  },

  // Unit 2
  'html-u2-l1': {
    id: 'html-u2-l1',
    subject: 'html',
    unit: 'u2',
    lessonNumber: 'l1',
    title: 'القوائم المرتبة <ol>',
    sub: 'ترتيب العناصر تسلسلياً وبشكل رقمي تلقائي',
    tag: 'HTML • الدرس 6',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;ol&gt;</span> (Ordered List) لإنشاء قوائم رقمية مرتبة.<br><br>
        كل عنصر داخل القائمة يُوضع في وسم <span class="text-amber-300">&lt;li&gt;</span> (List Item).<br>
        المتصفح يقوم تلقائياً بترقيم العناصر 1، 2، 3 دون الحاجة لكتابة الأرقام يدوياً.
      </p>
    `,
    code: `<ol>
  <li>تحميل محرر الأكواد VS Code</li>
  <li>تعلم أساسيات لغة HTML</li>
  <li>بناء أول موقع متكامل</li>
</ol>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <ol style="margin:0;padding-right:24px;line-height:1.8;">
        <li>تحميل محرر الأكواد VS Code</li>
        <li>تعلم أساسيات لغة HTML</li>
        <li>بناء أول موقع متكامل</li>
      </ol>
    </div>`,
    practice: `<ol>
  <li>خطوتي الأولى</li>
  <li>خطوتي الثانية</li>
  <li>خطوتي الثالثة</li>
</ol>`,
    hint: 'كل عنصر داخل القائمة يجب أن يغلف بوسم li.'
  },
  'html-u2-l2': {
    id: 'html-u2-l2',
    subject: 'html',
    unit: 'u2',
    lessonNumber: 'l2',
    title: 'القوائم النقطية وغير المرتبة <ul>',
    sub: 'سرد العناصر باستخدام النقاط الدائرية',
    tag: 'HTML • الدرس 7',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;ul&gt;</span> (Unordered List) لسرد عناصر لا يعتمد ترتيبها على تسلسل رقمي.<br><br>
        المتصفح يعرض نقطة سوداء صغيرة بجانب كل عنصر <code>&lt;li&gt;</code>.<br>
        تُستخدم القوائم غير المرتبة في معظم مواقع العالم لبناء أشرطة التنقل والقوائم الرئيسية (Navbars).
      </p>
    `,
    code: `<ul>
  <li>مسار لغة HTML لبناء الهيكل</li>
  <li>مسار لغة CSS لتصميم المظهر</li>
  <li>مسار لغة JavaScript للتفاعل</li>
</ul>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <ul style="margin:0;padding-right:24px;line-height:1.8;">
        <li>مسار لغة HTML لبناء الهيكل</li>
        <li>مسار لغة CSS لتصميم المظهر</li>
        <li>مسار لغة JavaScript للتفاعل</li>
      </ul>
    </div>`,
    practice: `<ul>
  <li>مهارة التصميم 1</li>
  <li>مهارة التصميم 2</li>
</ul>`,
    hint: 'استخدم ul عندما لا يكون ترتيب العناصر مهماً بصورة تسلسلية.'
  },
  'html-u2-l3': {
    id: 'html-u2-l3',
    subject: 'html',
    unit: 'u2',
    lessonNumber: 'l3',
    title: 'الجداول المنظمة عبر وسم <table>',
    sub: 'تنظيم البيانات في صفوف وأعمدة وخلايا واضحة',
    tag: 'HTML • الدرس 8',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تُبنى الجداول في HTML عبر مجموعة وسوم متكاملة:<br><br>
        <code class="text-amber-300">&lt;table&gt;</code>: الحاوية الرئيسية للجدول.<br>
        <code class="text-amber-300">&lt;tr&gt;</code>: لإنشاء صف جديد (Table Row).<br>
        <code class="text-amber-300">&lt;th&gt;</code>: خلية رأس الجدول (Table Header) وتكون بخط عريض.<br>
        <code class="text-amber-300">&lt;td&gt;</code>: خلية البيانات العادية (Table Data).
      </p>
    `,
    code: `<table border="1">
  <tr>
    <th>اللغة</th>
    <th>المدة المقترحة</th>
    <th>المستوى</th>
  </tr>
  <tr>
    <td>HTML الأساسية</td>
    <td>أسبوع واحد</td>
    <td>مبتدئ</td>
  </tr>
  <tr>
    <td>CSS التنسيق</td>
    <td>3 أسابيع</td>
    <td>متوسط</td>
  </tr>
</table>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <table style="width:100%;border-collapse:collapse;text-align:right;">
        <tr style="background:#f0efff;border-bottom:2px solid #6C63FF;">
          <th style="padding:8px 12px;color:#4B44CC;">اللغة</th>
          <th style="padding:8px 12px;color:#4B44CC;">المدة المقترحة</th>
          <th style="padding:8px 12px;color:#4B44CC;">المستوى</th>
        </tr>
        <tr style="border-bottom:1px solid #ddd;">
          <td style="padding:8px 12px;">HTML الأساسية</td>
          <td style="padding:8px 12px;">أسبوع واحد</td>
          <td style="padding:8px 12px;">مبتدئ</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;">CSS التنسيق</td>
          <td style="padding:8px 12px;">3 أسابيع</td>
          <td style="padding:8px 12px;">متوسط</td>
        </tr>
      </table>
    </div>`,
    practice: `<table border="1">
  <tr>
    <th>الاسم</th>
    <th>التقييم</th>
  </tr>
  <tr>
    <td>أحمد</td>
    <td>ممتاز</td>
  </tr>
</table>`,
    hint: 'كل صف <tr> يحتوي على خلايا <th> أو <td> بداخله.'
  },
  'html-u2-l4': {
    id: 'html-u2-l4',
    subject: 'html',
    unit: 'u2',
    lessonNumber: 'l4',
    title: 'التعليقات البرمجية <!-- -->',
    sub: 'تدوين الملاحظات للمطورين دون أن تظهر للمستخدم',
    tag: 'HTML • الدرس 9',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        التعليقات في HTML تُكتب بين <code class="text-amber-300">&lt;!--</code> و <code class="text-amber-300">--&gt;</code>.<br><br>
        المتصفح يتجاهلها تماماً ولا يعرضها للمستخدم على الشاشة.<br>
        تُستخدم لشرح الأكواد المعقدة، تقسيم أقسام الصفحة، أو لتعطيل جزء من الكود مؤقتاً أثناء الفحص.
      </p>
    `,
    code: `<!-- هذا عنوان الصفحة الترحيبي -->
<h1>مرحباً بالزوار الكرام</h1>
<!-- الفقرة التالية تشرح الهدف من الموقع -->
<p>موقعنا يقدم شروحات مجانية للمبرمجين.</p>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h1 style="font-size:22px;margin:0 0 6px 0;color:#1e1e2f;">مرحباً بالزوار الكرام</h1>
      <p style="margin:0;color:#555;">موقعنا يقدم شروحات مجانية للمبرمجين.</p>
    </div>`,
    practice: `<!-- تعليق تجريبي خاص بي -->
<p>هذا نص مرئي فقط.</p>`,
    hint: 'لا توجد قيود على عدد أسطر التعليق البرمجي.'
  },
  'html-u2-l5': {
    id: 'html-u2-l5',
    subject: 'html',
    unit: 'u2',
    lessonNumber: 'l5',
    title: 'الفواصل الأفقية عبر وسم <hr>',
    sub: 'رسم خط فاصل أفقي أنيق بين الفقرات والأقسام',
    tag: 'HTML • الدرس 10',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;hr&gt;</span> (اختصار Horizontal Rule) يقوم برسم خط فاصل أفقي يمتد بعرض الصفحة.<br><br>
        وهو وسم أحادي الإغلاق لا يحتاج إلى &lt;/hr&gt;.<br>
        يُستخدم للانتقال من فكرة إلى أخرى، أو للفصل بين مقالين أو قسمين مختلفين.
      </p>
    `,
    code: `<h2>القسم الأول</h2>
<p>محتوى الفقرة الأولى التمهيدي.</p>
<hr>
<h2>القسم الثاني</h2>
<p>محتوى يبدأ بعد الفاصل الأفقي مباشرة.</p>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h2 style="font-size:18px;margin:0 0 4px 0;color:#4B44CC;">القسم الأول</h2>
      <p style="margin:0 0 12px 0;font-size:14px;color:#666;">محتوى الفقرة الأولى التمهيدي.</p>
      <hr style="border:none;border-top:1px solid #ddd;margin:12px 0;">
      <h2 style="font-size:18px;margin:0 0 4px 0;color:#4B44CC;">القسم الثاني</h2>
      <p style="margin:0;font-size:14px;color:#666;">محتوى يبدأ بعد الفاصل الأفقي مباشرة.</p>
    </div>`,
    practice: `<p>فكرة سابقة</p>
<hr>
<p>فكرة لاحقة</p>`,
    hint: 'وسم hr وسم ذاتي الإغلاق ولا يحتاج محتوى داخلي.'
  },

  // Unit 3
  'html-u3-l1': {
    id: 'html-u3-l1',
    subject: 'html',
    unit: 'u3',
    lessonNumber: 'l1',
    title: 'حقول الإدخال عبر وسم <input>',
    sub: 'استقبال البيانات من المستخدم (نصوص، بريد، كلمة مرور)',
    tag: 'HTML • الدرس 11',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;input&gt;</span> هو المكون الأهم لاستقبال مدخلات المستخدمين.<br><br>
        تحدد خاصية <code class="text-amber-300">type</code> نوع الإدخال المطلوب:<br>
        <code class="text-cyan-300">text</code>: لكتابة نص عام (مثل الاسم).<br>
        <code class="text-cyan-300">email</code>: للتحقق من صيغة البريد الإلكتروني.<br>
        <code class="text-cyan-300">password</code>: لتشفير وإخفاء الحروف عند الكتابة بنقاط سرية.<br>
        <code class="text-cyan-300">number</code>: للأرقام فقط.<br>
        خاصية <code class="text-cyan-300">placeholder</code> تعرض نصاً توضيحياً خفيفاً يختفي عند بدء الكتابة.
      </p>
    `,
    code: `<input type="text" placeholder="أدخل اسمك الكريم">
<input type="email" placeholder="example@email.com">
<input type="password" placeholder="كلمة المرور السرية">`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;flex-direction:column;gap:8px;">
      <input type="text" placeholder="أدخل اسمك الكريم" style="padding:8px 12px;border:1px solid #ccc;border-radius:6px;font-size:14px;">
      <input type="email" placeholder="example@email.com" style="padding:8px 12px;border:1px solid #ccc;border-radius:6px;font-size:14px;">
      <input type="password" placeholder="كلمة المرور السرية" style="padding:8px 12px;border:1px solid #ccc;border-radius:6px;font-size:14px;">
    </div>`,
    practice: `<input type="text" placeholder="اسم المستخدم">
<input type="email" placeholder="البريد الإلكتروني">`,
    hint: 'استخدم placeholder لتوضيح المطلوب كتابته داخل الحقل.'
  },
  'html-u3-l2': {
    id: 'html-u3-l2',
    subject: 'html',
    unit: 'u3',
    lessonNumber: 'l2',
    title: 'الأزرار التفاعلية عبر وسم <button>',
    sub: 'صناعة أزرار النقر والإرسال والتنفيذ',
    tag: 'HTML • الدرس 12',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;button&gt;</span> لصناعة أزرار تفاعلية يستجيب لها المستخدم.<br><br>
        يمكن أن يحتوي الزر على نصوص، أيقونات، أو صور.<br>
        يرتبط عادةً بإرسال النماذج أو تشغيل دوال برمجية عبر لغة JavaScript.
      </p>
    `,
    code: `<button type="submit">إرسال البيانات الآن</button>
<button type="button">زر تجريبي عادي</button>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:10px;">
      <button style="padding:10px 20px;background:#6C63FF;color:#fff;border:none;border-radius:6px;font-weight:bold;cursor:pointer;">إرسال البيانات الآن</button>
      <button style="padding:10px 20px;background:#eee;color:#333;border:1px solid #ccc;border-radius:6px;cursor:pointer;">زر تجريبي عادي</button>
    </div>`,
    practice: `<button>اضغط هنا لتفعيل الميزة</button>`,
    hint: 'يمكن تنسيق الزر بحرية باستخدام CSS.'
  },
  'html-u3-l3': {
    id: 'html-u3-l3',
    subject: 'html',
    unit: 'u3',
    lessonNumber: 'l3',
    title: 'النماذج الشاملة عبر وسم <form>',
    sub: 'تجميع حقول الإدخال والأزرار وإرسالها',
    tag: 'HTML • الدرس 13',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;form&gt;</span> يمثل إطار النموذج الذي يجمع حقول الإدخال معاً.<br><br>
        يحتوي النموذج على حقول إدخال متنوعة وزر إرسال submit.<br>
        يملك خاصية <code class="text-amber-300">action</code> (الرابط المستلم للبيانات) وخاصية <code class="text-amber-300">method</code> (طريقة الإرسال مثل POST أو GET).
      </p>
    `,
    code: `<form>
  <h2>تسجيل الدخول</h2>
  <input type="email" placeholder="البريد الإلكتروني"><br><br>
  <input type="password" placeholder="كلمة المرور"><br><br>
  <button type="submit">دخول فوري</button>
</form>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;max-width:320px;">
      <h3 style="margin:0 0 10px 0;font-size:18px;">تسجيل الدخول</h3>
      <input type="email" placeholder="البريد الإلكتروني" style="width:100%;padding:8px;margin-bottom:8px;border:1px solid #ccc;border-radius:4px;"><br>
      <input type="password" placeholder="كلمة المرور" style="width:100%;padding:8px;margin-bottom:12px;border:1px solid #ccc;border-radius:4px;"><br>
      <button style="width:100%;padding:9px;background:#6C63FF;color:#fff;border:none;border-radius:4px;font-weight:bold;">دخول فوري</button>
    </div>`,
    practice: `<form>
  <input type="text" placeholder="الاسم الكامل">
  <button type="submit">تسجيل</button>
</form>`,
    hint: 'كل حقول الإدخال المرتبطة بإرسال واحد توضع داخل form.'
  },
  'html-u3-l4': {
    id: 'html-u3-l4',
    subject: 'html',
    unit: 'u3',
    lessonNumber: 'l4',
    title: 'تضمين الفيديو عبر وسم <video>',
    sub: 'تشغيل مقاطع الفيديو مباشرة مع أزرار التحكم',
    tag: 'HTML • الدرس 14',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أضافت HTML5 وسم <span class="text-[#6C63FF] font-bold">&lt;video&gt;</span> لتشغيل مقاطع الفيديو دون الحاجة لأي مشغلات خارجية.<br><br>
        أهم الخصائص:<br>
        <code class="text-amber-300 font-mono">controls</code>: إظهار أزرار التشغيل، الإيقاف، وتعديل الصوت.<br>
        <code class="text-amber-300 font-mono">autoplay</code>: التشغيل التلقائي عند فتح الصفحة.<br>
        <code class="text-amber-300 font-mono">loop</code>: إعادة تشغيل المقطع تلقائياً عند انتهائه.<br>
        يحتوي داخله على وسم <code class="text-amber-300">&lt;source&gt;</code> لتحديد ملف الفيديو ونوعه.
      </p>
    `,
    code: `<video width="320" height="200" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
</video>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <video width="100%" controls style="max-width:320px;border-radius:8px;">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
      </video>
    </div>`,
    practice: `<video controls width="300">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
</video>`,
    hint: 'خاصية controls ضرورية ليتمكن المستخدم من بدء الفيديو والتحكم به.'
  },
  'html-u3-l5': {
    id: 'html-u3-l5',
    subject: 'html',
    unit: 'u3',
    lessonNumber: 'l5',
    title: 'تشغيل الصوتيات عبر وسم <audio>',
    sub: 'إدراج المقاطع الصوتية والبودكاست في المتصفح',
    tag: 'HTML • الدرس 15',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;audio&gt;</span> لتضمين الصوتيات والبودكاست داخل صفحات الويب.<br><br>
        يشبه وسم video تماماً ويحتاج خاصية <code class="text-amber-300 font-mono">controls</code> لإظهار مشغل الصوت للمستخدم.<br>
        يدعم الصيغ الشهيرة مثل MP3 و WAV و OGG.
      </p>
    `,
    code: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
</audio>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <audio controls style="width:100%;max-width:320px;">
        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
      </audio>
    </div>`,
    practice: `<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
</audio>`,
    hint: 'تأكد من وضع خاصية controls لتظهر أزرار التشغيل.'
  },

  // Unit 4
  'html-u4-l1': {
    id: 'html-u4-l1',
    subject: 'html',
    unit: 'u4',
    lessonNumber: 'l1',
    title: 'حاوية التقسيم الكبرى <div>',
    sub: 'عنصر حاوي على مستوى الكتلة Block-level لتنظيم وبناء الأقسام',
    tag: 'HTML • الدرس 16',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُعد وسم <span class="text-[#6C63FF] font-bold">&lt;div&gt;</span> (اختصار Division) الحاوية الأكثر استخداماً في تاريخ الويب.<br><br>
        هو عنصر من نوع كتلة Block، أي أنه يبدأ في سطر جديد ويأخذ العرض الكامل المتاح أمامه.<br>
        يُستخدم لتجميع عناصر متعددة معاً بهدف تطبيق تنسيقات CSS عليها ككتلة واحدة (مثل البطاقات Card والأعمدة).
      </p>
    `,
    code: `<div style="background:#f4f4f9;padding:16px;border-radius:8px;">
  <h2>بطاقة تعريفية</h2>
  <p>هذا المحتوى بالكامل مجمع داخل وسم div واحد.</p>
</div>`,
    lang: 'HTML',
    preview: `<div style="background:#f4f4f9;padding:16px;border-radius:8px;color:#222;">
      <h3 style="margin:0 0 6px 0;color:#6C63FF;">بطاقة تعريفية</h3>
      <p style="margin:0;color:#555;">هذا المحتوى بالكامل مجمع داخل وسم div واحد.</p>
    </div>`,
    practice: `<div>
  <h2>قسم جديد</h2>
  <p>محتوى مجمع...</p>
</div>`,
    hint: 'استخدم div لتجميع العناصر التي تريد تطبيق تصميم مشترك عليها.'
  },
  'html-u4-l2': {
    id: 'html-u4-l2',
    subject: 'html',
    unit: 'u4',
    lessonNumber: 'l2',
    title: 'الحاوية السطرية <span>',
    sub: 'تنسيق جزء محدد من النص داخل السطر دون الانتقال لسطر جديد',
    tag: 'HTML • الدرس 17',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;span&gt;</span> هو عنصر سطري (Inline).<br><br>
        لا ينزل لسطر جديد ولا يفصل النص كما يفعل div.<br>
        يُستخدم لتلوين أو تمييز كلمة واحدة أو عبارة صغيرة داخل فقرة عادية.
      </p>
    `,
    code: `<p>سعر المنتج اليوم هو <span style="color:red;font-weight:bold;">50 دولاراً فقط</span> بدلاً من 100 دولار.</p>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <p style="margin:0;font-size:16px;">سعر المنتج اليوم هو <span style="color:#FF6584;font-weight:bold;font-size:18px;">50 دولاراً فقط</span> بدلاً من 100 دولار.</p>
    </div>`,
    practice: `<p>تعلم البرمجة هو <span style="color:blue;">أفضل استثمار</span> لمستقبلك المهني.</p>`,
    hint: 'وسم span ممتاز لتمييز الكلمات الفردية داخل الفقرات.'
  },
  'html-u4-l3': {
    id: 'html-u4-l3',
    subject: 'html',
    unit: 'u4',
    lessonNumber: 'l3',
    title: 'قوائم التعريف والمصطلحات <dl>',
    sub: 'تنظيم المصطلحات وتعاريفها بطريقة احترافية',
    tag: 'HTML • الدرس 18',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;dl&gt;</span> (Description List) يُستخدم لإنشاء قوائم تعريفية:<br><br>
        <code class="text-amber-300">&lt;dt&gt;</code>: لكتابة المصطلح أو السؤال (Definition Term).<br>
        <code class="text-amber-300">&lt;dd&gt;</code>: لكتابة شرح أو إجابة المصطلح (Definition Description).<br>
        مثالي جداً لصفحات الأسئلة الشائعة FAQ والمعاجم وقواميس المصطلحات.
      </p>
    `,
    code: `<dl>
  <dt><b>HTML</b></dt>
  <dd>لغة هيكلة وبناء صفحات الإنترنت الأساسية.</dd>
  <dt><b>CSS</b></dt>
  <dd>لغة تصميم وتنسيق مظهر صفحات الويب وألوانها.</dd>
</dl>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <dl style="margin:0;">
        <dt style="color:#6C63FF;font-weight:bold;">HTML</dt>
        <dd style="margin:0 16px 10px 0;color:#555;">لغة هيكلة وبناء صفحات الإنترنت الأساسية.</dd>
        <dt style="color:#FF6584;font-weight:bold;">CSS</dt>
        <dd style="margin:0 16px 0 0;color:#555;">لغة تصميم وتنسيق مظهر صفحات الويب وألوانها.</dd>
      </dl>
    </div>`,
    practice: `<dl>
  <dt>المصطلح البرمجي</dt>
  <dd>الشرح المفصل لهذا المصطلح.</dd>
</dl>`,
    hint: 'dl مفيد جداً لبناء أقسام FAQ والأسئلة والأجوبة.'
  },
  'html-u4-l4': {
    id: 'html-u4-l4',
    subject: 'html',
    unit: 'u4',
    lessonNumber: 'l4',
    title: 'فتح الروابط في تبويب جديد target="_blank"',
    sub: 'الحفاظ على بقاء الزائر في موقعك مع فتح الروابط الخارجية بذكاء',
    tag: 'HTML • الدرس 19',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        إضافة الخاصية <code class="text-amber-300 font-mono">target="_blank"</code> إلى وسم الرابط تجعل المتصفح يفتح الرابط في نافذة أو تبويب جديد كلياً.<br><br>
        هذا يمنع مغادرة الزائر لصفحتك الحالية، وهو إجراء محبذ دائماً عند وضع روابط لمواقع خارجية.
      </p>
    `,
    code: `<a href="https://google.com" target="_blank">فتح محرك بحث جوجل في لسان جديد</a>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <a href="https://google.com" target="_blank" style="color:#6C63FF;font-weight:bold;text-decoration:none;">فتح محرك بحث جوجل في لسان جديد</a>
    </div>`,
    practice: `<a href="https://google.com" target="_blank">انقر هنا لتفتح في نافذة جديدة</a>`,
    hint: 'اكتب target="_blank" بدقة مع علامة الشرطة السفلية.'
  },
  'html-u4-l5': {
    id: 'html-u4-l5',
    subject: 'html',
    unit: 'u4',
    lessonNumber: 'l5',
    title: 'تحويل الصور إلى روابط قابلة للنقر',
    sub: 'دمج وسم الصورة داخل وسم الرابط التشعبي',
    tag: 'HTML • الدرس 20',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يمكنك وضع وسم الصورة <code>&lt;img&gt;</code> بداخل وسم الرابط <code>&lt;a&gt;</code>.<br><br>
        بذلك تصبح الصورة بأكملها زراً قابلاً للنقر ينقل الزائر عند لمسها.<br>
        هذا هو النمط المتبع في شعارات المواقع (Logo) والإعلانات وبطاقات المنتجات.
      </p>
    `,
    code: `<a href="https://google.com" target="_blank">
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=240" alt="صورة رابط" width="200" style="border-radius:8px;">
</a>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <a href="https://google.com" target="_blank">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=240" alt="صورة رابط" style="width:200px;border-radius:8px;box-shadow:0 4px 10px rgba(0,0,0,0.15);cursor:pointer;">
      </a>
      <p style="color:#666;font-size:12px;margin-top:6px;">(انقر على الصورة لتجربتها)</p>
    </div>`,
    practice: `<a href="https://example.com">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200" alt="صورة قابلة للنقر" width="180">
</a>`,
    hint: 'ضع وسم img بين وسمي البداية والنهاية لـ a.'
  },

  // Unit 5
  'html-u5-l1': {
    id: 'html-u5-l1',
    subject: 'html',
    unit: 'u5',
    lessonNumber: 'l1',
    title: 'تضمين الصفحات والمواقع عبر <iframe>',
    sub: 'عرض خرائط وفيديوهات ومواقع أخرى داخل صفحتك',
    tag: 'HTML • الدرس 21',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;iframe&gt;</span> (اختصار Inline Frame) يسمح لك بفتح نافذة تعرض موقعاً أو صفحة أخرى بداخل صفحتك.<br><br>
        يستخدم خاصية <code class="text-amber-300">src</code> لتحديد الرابط، وخاصيتي <code class="text-amber-300">width</code> و <code class="text-amber-300">height</code> لتحديد الحجم.<br>
        <strong class="text-[#43E97B]">ملاحظة أمنية:</strong> بعض المواقع الكبرى تمنع تضمينها داخل iframe لأسباب الحماية.
      </p>
    `,
    code: `<iframe src="https://ar.m.wikipedia.org" width="100%" height="220" style="border:1px solid #ccc;border-radius:8px;"></iframe>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <iframe src="https://ar.m.wikipedia.org" style="width:100%;height:180px;border:1px solid #ddd;border-radius:6px;"></iframe>
    </div>`,
    practice: `<iframe src="https://ar.m.wikipedia.org" width="100%" height="200"></iframe>`,
    hint: 'استخدم iframe لعرض فيديوهات يوتيوب أو خرائط جوجل.'
  },
  'html-u5-l2': {
    id: 'html-u5-l2',
    subject: 'html',
    unit: 'u5',
    lessonNumber: 'l2',
    title: 'المعرف الفريد id',
    sub: 'إعطاء هوية خاصة وحصرية لعنصر واحد فقط في الصفحة',
    tag: 'HTML • الدرس 22',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#6C63FF] font-bold">id</span> تُعطي العنصر اسماً فريداً ومميزاً على مستوى الصفحة كاملة.<br><br>
        <strong class="text-[#FF6584]">قاعدة صارمة:</strong> لا يجوز تكرار نفس الـ id على أكثر من عنصر واحد في نفس الصفحة أبداً!<br>
        يُستخدم المعرف لاستهداف هذا العنصر بدقة عالية في تنسيقات CSS وفي أكواد لغة JavaScript.
      </p>
    `,
    code: `<h1 id="site-logo">شعار الموقع الرسمي</h1>
<button id="submit-btn">زر فريد</button>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h1 id="site-logo" style="color:#6C63FF;margin:0 0 8px 0;font-size:24px;">شعار الموقع الرسمي</h1>
      <button id="submit-btn" style="padding:8px 16px;background:#43E97B;color:#0A2010;border:none;border-radius:6px;font-weight:bold;">زر فريد</button>
    </div>`,
    practice: `<h1 id="main-heading">عنواني الوحيد</h1>`,
    hint: 'اختر أسماء واضحة باللغة الإنجليزية لمعرفات id.'
  },
  'html-u5-l3': {
    id: 'html-u5-l3',
    subject: 'html',
    unit: 'u5',
    lessonNumber: 'l3',
    title: 'فئات التصنيف المشتركة class',
    sub: 'مشاركة التنسيقات والخصائص بين عدة عناصر متكررة',
    tag: 'HTML • الدرس 23',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#6C63FF] font-bold">class</span> تُستخدم لتصنيف مجموعة من العناصر تحت فئة واحدة.<br><br>
        <strong class="text-[#43E97B]">عكس الـ id:</strong> يمكن تكرار نفس الـ class على عشرات أو مئات العناصر في الصفحة الواحدة!<br>
        كما يمكن للعنصر الواحد أن يحمل أكثر من فئة مفصولة بمسافة: <code>class="card featured highlighted"</code>.
      </p>
    `,
    code: `<p class="badge">وسام جديد</p>
<p class="badge">وسام متقدم</p>
<p class="badge">وسام محترف</p>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;display:flex;gap:8px;flex-wrap:wrap;">
      <span style="background:#ECEBFF;color:#6C63FF;padding:4px 10px;border-radius:99px;font-size:12px;font-weight:bold;">وسام جديد</span>
      <span style="background:#ECEBFF;color:#6C63FF;padding:4px 10px;border-radius:99px;font-size:12px;font-weight:bold;">وسام متقدم</span>
      <span style="background:#ECEBFF;color:#6C63FF;padding:4px 10px;border-radius:99px;font-size:12px;font-weight:bold;">وسام محترف</span>
    </div>`,
    practice: `<p class="highlight">نص مميز أول</p>
<p class="highlight">نص مميز ثان</p>`,
    hint: 'استخدم class عند وجود تنسيق سيتكرر على عدة عناصر.'
  },
  'html-u5-l4': {
    id: 'html-u5-l4',
    subject: 'html',
    unit: 'u5',
    lessonNumber: 'l4',
    title: 'شريط التنقل الدلالي <nav>',
    sub: 'تحديد روابط الموقع الرئيسية وتسهيل فهرسة محركات البحث',
    tag: 'HTML • الدرس 24',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;nav&gt;</span> (Navigation) لحفظ روابط التنقل الرئيسية في الموقع.<br><br>
        وهو وسم دلالي (Semantic Tag) يخبر متصفحات الإنترنت وقارئات الشاشة ومحركات البحث أن هذه الروابط هي خريطة التنقل في الموقع وليست مجرد فقرات أو عناصر div صامتة.
      </p>
    `,
    code: `<nav>
  <a href="#home">الرئيسية</a> |
  <a href="#courses">الدورات</a> |
  <a href="#about">من نحن</a> |
  <a href="#contact">تواصل معنا</a>
</nav>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <nav style="display:flex;gap:12px;font-weight:bold;color:#6C63FF;">
        <a href="#" style="color:#6C63FF;text-decoration:none;">الرئيسية</a>
        <a href="#" style="color:#6C63FF;text-decoration:none;">الدورات</a>
        <a href="#" style="color:#6C63FF;text-decoration:none;">من نحن</a>
        <a href="#" style="color:#6C63FF;text-decoration:none;">تواصل معنا</a>
      </nav>
    </div>`,
    practice: `<nav>
  <a href="#home">الصفحة الأولى</a>
  <a href="#contact">الاتصال بنا</a>
</nav>`,
    hint: 'وسم nav مخصص حصرياً لروابط التنقل الرئيسية.'
  },
  'html-u5-l5': {
    id: 'html-u5-l5',
    subject: 'html',
    unit: 'u5',
    lessonNumber: 'l5',
    title: 'المقالات المستقلة <article>',
    sub: 'هيكلة المحتوى المستقل القابل للمشاركة وإعادة النشر',
    tag: 'HTML • الدرس 25',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;article&gt;</span> لتغليف محتوى مستقل بذاته.<br><br>
        أي محتوى يمكن قراءته أو مشاركته أو إعادة نشره كتدوينة، أو خبر صحفي، أو تعليق منتدى مستقل.<br>
        يمنح موقعك تقييماً أعلى في محركات البحث لمحركات مثل Google.
      </p>
    `,
    code: `<article>
  <h2>أهم لغات الويب في 2026</h2>
  <p>تظل لغة HTML مع CSS و JavaScript الثالوث الأساسي الذي لا غنى عنه لأي مطور واجهات أمامية...</p>
</article>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <article style="border-right:3px solid #6C63FF;padding-right:12px;">
        <h3 style="margin:0 0 6px 0;color:#1e1e2f;">أهم لغات الويب في 2026</h3>
        <p style="margin:0;color:#555;font-size:14px;line-height:1.6;">تظل لغة HTML مع CSS و JavaScript الثالوث الأساسي الذي لا غنى عنه لأي مطور واجهات أمامية...</p>
      </article>
    </div>`,
    practice: `<article>
  <h2>تدوينة اليوم</h2>
  <p>محتوى مقالتي الأولى...</p>
</article>`,
    hint: 'استخدم article للمحتوى الذي يمكن نشره بمفرده دون سياق الصفحة.'
  },

  // Unit 6
  'html-u6-l1': {
    id: 'html-u6-l1',
    subject: 'html',
    unit: 'u6',
    lessonNumber: 'l1',
    title: 'أقسام الصفحة الموضوعية <section>',
    sub: 'تنظيم المستند في أقسام منطقية وموضوعية واضحة',
    tag: 'HTML • الدرس 26',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;section&gt;</span> لتحديد قسم موضوعي عام داخل الصفحة.<br><br>
        مثل قسم "من نحن"، قسم "المميزات"، قسم "الأسعار"، قسم "آراء العملاء".<br>
        في المعيار القياسي، يُفضل أن يبدأ كل section بعنوان خاص به مثل &lt;h2&gt; أو &lt;h3&gt;.
      </p>
    `,
    code: `<section>
  <h2>خدماتنا البرمجية</h2>
  <p>نقدم حلول تطوير المواقع والتطبيقات بأحدث المعايير العالمية.</p>
</section>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <section style="background:#fafafa;padding:12px;border-radius:6px;">
        <h3 style="margin:0 0 6px 0;color:#6C63FF;">خدماتنا البرمجية</h3>
        <p style="margin:0;color:#666;">نقدم حلول تطوير المواقع والتطبيقات بأحدث المعايير العالمية.</p>
      </section>
    </div>`,
    practice: `<section>
  <h2>قسم المميزات</h2>
  <p>شرح مميزات المنصة...</p>
</section>`,
    hint: 'كل قسم section يجب أن يحتوي على عنوان رئيسي بداخله.'
  },
  'html-u6-l2': {
    id: 'html-u6-l2',
    subject: 'html',
    unit: 'u6',
    lessonNumber: 'l2',
    title: 'ترويسة الصفحة والقسم <header>',
    sub: 'موقع الشعار وشريط العنوان والترحيب',
    tag: 'HTML • الدرس 27',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسم <span class="text-[#6C63FF] font-bold">&lt;header&gt;</span> يمثل مقدمة الصفحة أو مقدمة مقال معين.<br><br>
        يحتوي عادةً على شعار الموقع، العنوان الرئيسي، وأحياناً شريط الروابط nav.<br>
        <strong class="text-[#FF6584]">انتبه للفرق:</strong> وسم <code class="text-amber-300">&lt;head&gt;</code> (معلومات خفية) بينما وسم <code class="text-cyan-300">&lt;header&gt;</code> (مقدمة مرئية يراها الزائر داخل body).
      </p>
    `,
    code: `<header>
  <h1>أكاديمية كودر سبيس للبرمجة</h1>
  <nav>
    <a href="#">الدروس</a> |
    <a href="#">الشهادات</a>
  </nav>
</header>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#1E1D2E;color:#fff;border-radius:8px;">
      <header style="display:flex;justify-content:space-between;align-items:center;">
        <h2 style="margin:0;font-size:20px;color:#6C63FF;">أكاديمية كودر سبيس</h2>
        <nav style="font-size:14px;"><a href="#" style="color:#fff;text-decoration:none;">الدروس</a> • <a href="#" style="color:#43E97B;text-decoration:none;">الشهادات</a></nav>
      </header>
    </div>`,
    practice: `<header>
  <h1>شعار موقعي الباهر</h1>
</header>`,
    hint: 'وسم header مكانه داخل body وليس داخل head.'
  },
  'html-u6-l3': {
    id: 'html-u6-l3',
    subject: 'html',
    unit: 'u6',
    lessonNumber: 'l3',
    title: 'تذييل الصفحة <footer>',
    sub: 'حقوق النشر والروابط السفلية وسياسات الاستخدام',
    tag: 'HTML • الدرس 28',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;footer&gt;</span> لتمثيل خاتمة الصفحة أو نهاية مقال معين.<br><br>
        يحتوي تقليدياً على معلومات حقوق النشر والتأليف، روابط شروط الخدمة وسياسة الخصوصية، ومعلومات التواصل الاجتماعي.
      </p>
    `,
    code: `<footer>
  <p>جميع الحقوق محفوظة © 2026 منصة كودر سبيس (Coder Space).</p>
  <a href="#privacy">سياسة الخصوصية وحماية البيانات</a>
</footer>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#1A1829;color:#aaa;border-radius:8px;text-align:center;font-size:13px;">
      <p style="margin:0 0 6px 0;">جميع الحقوق محفوظة © 2026 منصة كودر سبيس (Coder Space).</p>
      <a href="#" style="color:#6C63FF;text-decoration:none;">سياسة الخصوصية وحماية البيانات</a>
    </div>`,
    practice: `<footer>
  <p>تم التطوير بواسطة مبرمج طموح</p>
</footer>`,
    hint: 'يوضع footer دائماً في أسفل الصفحة.'
  },
  'html-u6-l4': {
    id: 'html-u6-l4',
    subject: 'html',
    unit: 'u6',
    lessonNumber: 'l4',
    title: 'الأشكال التوضيحية <figure> و <figcaption>',
    sub: 'إقران الصور والرسوم البيانية بشروحات نصية رسمية',
    tag: 'HTML • الدرس 29',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُستخدم وسم <span class="text-[#6C63FF] font-bold">&lt;figure&gt;</span> لتأطير عنصر توضيحي مثل صورة أو رسم بياني.<br><br>
        ويرافقه وسم <span class="text-[#6C63FF] font-bold">&lt;figcaption&gt;</span> لكتابة التعليق التوضيحي أو التسمية الرسمية التابعة لتلك الصورة أو الرسمة.
      </p>
    `,
    code: `<figure>
  <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=280" alt="طبيعة خلابة" width="260" style="border-radius:6px;">
  <figcaption>الشكل رقم 1: مشهد للطبيعة الساحرة عند الغروب.</figcaption>
</figure>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;text-align:center;">
      <figure style="margin:0;">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=280" alt="طبيعة خلابة" style="max-width:240px;border-radius:6px;">
        <figcaption style="font-size:13px;color:#666;margin-top:6px;">الشكل رقم 1: مشهد للطبيعة الساحرة عند الغروب.</figcaption>
      </figure>
    </div>`,
    practice: `<figure>
  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200" alt="غابة خضراء">
  <figcaption>شكل 1: الغابات الطبيعية</figcaption>
</figure>`,
    hint: 'figcaption يوضع مباشرة داخل وسم figure.'
  },
  'html-u6-l5': {
    id: 'html-u6-l5',
    subject: 'html',
    unit: 'u6',
    lessonNumber: 'l5',
    title: 'الوسوم الوصفية لمحركات البحث <meta>',
    sub: 'تهيئة محركات البحث SEO، ترميز الحروف، والتجاوب مع الهواتف الذكية',
    tag: 'HTML • الدرس 30',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        وسوم <span class="text-[#6C63FF] font-bold">&lt;meta&gt;</span> توضع حصراً داخل وسم <code>&lt;head&gt;</code>.<br><br>
        أشهر وسوم meta الضرورية لكل موقع:<br>
        <code class="text-amber-300">&lt;meta charset="UTF-8"&gt;</code>: لدعم الحروف العربية والرموز العالمية دون أي تشويه.<br>
        <code class="text-amber-300">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>: لضمان التجاوب الدقيق مع شاشات الهواتف.<br>
        <code class="text-amber-300">&lt;meta name="description" content="..."&gt;</code>: النص الذي يظهر أسفل رابط موقعك في نتائج بحث جوجل.
      </p>
    `,
    code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="منصة تعليمية مجانية لاحتراف لغات الويب">
  <title>موقع متوافق مع معايير SEO</title>
</head>`,
    lang: 'HTML',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <p style="margin:0;font-size:14px;color:#28A745;font-weight:bold;">تم ضبط وسوم meta بنجاح في رأس المستند.</p>
    </div>`,
    practice: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`,
    hint: 'احرص على كتابة meta charset="UTF-8" في أول سطر داخل head.'
  }
};
