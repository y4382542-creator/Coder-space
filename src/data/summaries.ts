import { UnitSummary } from '../types';

export const unitSummaries: Record<string, UnitSummary> = {
  // HTML Summaries
  'html-u1': {
    id: 'html-u1',
    title: 'ملخص أساسيات وثيقة HTML',
    subject: 'html',
    items: [
      { code: '<!DOCTYPE html>', desc: 'تصريح معيار HTML5 القياسي' },
      { code: '<html lang="ar" dir="rtl">', desc: 'العنصر الجذري مع دعم اللغة العربية من اليمين لليسار' },
      { code: '<head>...</head>', desc: 'حاوية المعلومات الوصفية (غير المرئية)' },
      { code: '<body>...</body>', desc: 'حاوية المحتوى المرئي لصفحة الويب' },
      { code: '<p>فقرة نصية</p>', desc: 'إنشاء فقرة نصية مستقلة' },
      { code: '<h1> إلى <h6>', desc: 'عناوين الأقسام الرئيسية (h1 هو الأهم)' },
      { code: '<a href="url">رابط</a>', desc: 'رابط تشعبي للانتقال للمواقع والصفحات' },
      { code: '<img src="url" alt="وصف">', desc: 'إدراج صورة مع نص بديل لمحركات البحث' },
    ]
  },
  'html-u2': {
    id: 'html-u2',
    title: 'ملخص القوائم والجداول والتعليقات',
    subject: 'html',
    items: [
      { code: '<ol><li>عنصر</li></ol>', desc: 'قائمة مرتبة رقمياً 1, 2, 3 تلقائياً' },
      { code: '<ul><li>عنصر</li></ul>', desc: 'قائمة نقطية غير مرتبة' },
      { code: '<table>...</table>', desc: 'إنشاء جدول لتنظيم البيانات' },
      { code: '<tr>...</tr>', desc: 'إنشاء صف أفقي (Table Row)' },
      { code: '<th>...</th>', desc: 'خلية رأس الجدول بخط عريض (Table Header)' },
      { code: '<td>...</td>', desc: 'خلية بيانات عادية (Table Data)' },
      { code: '<!-- تعليق برمجي -->', desc: 'ملاحظة للمطور يتجاهلها المتصفح' },
      { code: '<hr>', desc: 'خط فاصل أفقي ممتد' },
    ]
  },
  'html-u3': {
    id: 'html-u3',
    title: 'ملخص النماذج وحقول الإدخال والوسائط',
    subject: 'html',
    items: [
      { code: '<form>...</form>', desc: 'إطار تجميع حقول الإدخال للإرسال' },
      { code: '<input type="text">', desc: 'حقل إدخال نصوص عادية' },
      { code: '<input type="email">', desc: 'حقل إدخال بريد إلكتروني يتحقق من @' },
      { code: '<input type="password">', desc: 'حقل إدخال كلمة سر مشفرة بنقاط' },
      { code: 'placeholder="نص توضيحي"', desc: 'نص إرشادي خفيف يختفي عند بدء الكتابة' },
      { code: '<button type="submit">', desc: 'زر إرسال بيانات النموذج' },
      { code: '<video controls>', desc: 'مشغل فيديو تفاعلي مع شريط التحكم' },
      { code: '<audio controls>', desc: 'مشغل مقاطع صوتية وبودكاست' },
    ]
  },
  'html-u4': {
    id: 'html-u4',
    title: 'ملخص الحاويات والروابط المتقدمة',
    subject: 'html',
    items: [
      { code: '<div>...</div>', desc: 'حاوية كتلة Block لتجميع العناصر والبطاقات' },
      { code: '<span>...</span>', desc: 'حاوية سطرية Inline لتمييز كلمة داخل سطر' },
      { code: '<dl><dt><dd></dl>', desc: 'قائمة تعريف المصطلحات وشروحاتها وأسئلة FAQ' },
      { code: 'target="_blank"', desc: 'فتح الرابط في نافذة أو لسان تبويب جديد' },
      { code: '<a href="..."><img src="..."></a>', desc: 'تحويل الصورة إلى زر ورابط قابل للنقر' },
    ]
  },
  'html-u5': {
    id: 'html-u5',
    title: 'ملخص التضمين والمعرفات والهيكلة الدلالية',
    subject: 'html',
    items: [
      { code: '<iframe src="url">', desc: 'تضمين نافذة موقع خارجي أو خريطة أو فيديو' },
      { code: 'id="معرف-فريد"', desc: 'اسم حصري لعنصر واحد فقط في كامل الصفحة' },
      { code: 'class="فئة-مشتركة"', desc: 'اسم تصنيف يمكن تكراره على مئات العناصر' },
      { code: '<nav>...</nav>', desc: 'شريط روابط التنقل الدلالي' },
      { code: '<article>...</article>', desc: 'مقال أو تدوينة مستقلة قابلة للنشر المنفصل' },
    ]
  },
  'html-u6': {
    id: 'html-u6',
    title: 'ملخص الهيكلة الاحترافية ومعايير SEO',
    subject: 'html',
    items: [
      { code: '<section>...</section>', desc: 'قسم موضوعي مستقل يبدأ بعنوان' },
      { code: '<header>...</header>', desc: 'ترويسة الصفحة أو مقدمة القسم' },
      { code: '<footer>...</footer>', desc: 'تذييل الصفحة وحقوق النشر والتواصل' },
      { code: '<figure><figcaption>', desc: 'إقران الصورة بشرح توضيحي رسمي' },
      { code: '<meta charset="UTF-8">', desc: 'ترميز الحروف لدعم اللغة العربية عالمياً' },
      { code: '<meta name="viewport">', desc: 'تجاوب الصفحة بدقة مع جميع شاشات الموبايل' },
    ]
  },

  // CSS Summaries (Supports both css-cuX and css-uX keys)
  'css-cu1': {
    id: 'css-cu1',
    title: 'ملخص ألوان وخطوط CSS (الوحدة 1)',
    subject: 'css',
    items: [
      { code: 'color: #6C63FF;', desc: 'تلوين النص برموز HEX أو RGB' },
      { code: 'background-color: #1E1D2E;', desc: 'تلوين خلفية العنصر أو الصفحة' },
      { code: "font-family: 'Tajawal', sans-serif;", desc: 'تحديد عائلة ونوع الخط' },
      { code: 'font-size: 16px;', desc: 'تحديد حجم الخط بالبكسل أو rem' },
      { code: 'font-weight: bold; (700)', desc: 'تحديد سُمك الخط العريض' },
      { code: 'font-style: italic;', desc: 'جعل النص مائلاً' },
    ]
  },
  'css-cu2': {
    id: 'css-cu2',
    title: 'ملخص الإطارات والهوامش والمحاذاة (الوحدة 2)',
    subject: 'css',
    items: [
      { code: 'border: 2px solid #6C63FF;', desc: 'رسم إطار خارجي حول العنصر' },
      { code: 'border-radius: 12px;', desc: 'تدوير حواف وزوايا الإطار بنعومة' },
      { code: 'margin: 20px;', desc: 'مسافة فارغة خارج العنصر تدفع جيرانه' },
      { code: 'margin: 0 auto;', desc: 'توسيط العنصر أفقياً في منتصف الشاشة' },
      { code: 'padding: 16px;', desc: 'مسافة فارغة داخلية توسع رقعة العنصر' },
      { code: 'text-align: center;', desc: 'محاذاة النص بالمنتصف (أو right / left)' },
      { code: 'text-decoration: none;', desc: 'إزالة الخط التحتي من الروابط' },
    ]
  },
  'css-cu3': {
    id: 'css-cu3',
    title: 'ملخص الحالات التفاعلية والخلفيات والأبعاد (الوحدة 3)',
    subject: 'css',
    items: [
      { code: 'a:hover { color: #FF6584; }', desc: 'تغيير المظهر عند مرور الفأرة' },
      { code: "background-image: url('...');", desc: 'وضع صورة كخلفية للقسم' },
      { code: 'background-size: cover;', desc: 'تغطية المساحة بالكامل بالصورة دون تمطيط' },
      { code: 'background-repeat: no-repeat;', desc: 'منع تكرار صورة الخلفية' },
      { code: 'width: 300px; max-width: 100%;', desc: 'عرض متجاوب لا ينكسر على الهواتف' },
      { code: 'height: 100vh;', desc: 'ارتفاع يغطي 100% من شاشة المستخدم' },
    ]
  },
  'css-cu4': {
    id: 'css-cu4',
    title: 'ملخص المحددات والتحكم في الظهور (الوحدة 4)',
    subject: 'css',
    items: [
      { code: '.classname { ... }', desc: 'استهداف فئة class عبر النقطة' },
      { code: '#idname { ... }', desc: 'استهداف معرف id عبر الهاش #' },
      { code: 'cursor: pointer;', desc: 'تحويل مؤشر الفأرة لشكل يد قابلة للنقر' },
      { code: 'cursor: not-allowed;', desc: 'مؤشر المنع للأزرار المعطلة' },
      { code: 'display: none;', desc: 'إخفاء العنصر تماماً وإزالته من التدفق' },
      { code: 'visibility: hidden;', desc: 'إخفاء بصري مع حجز مكانه الفارغ' },
    ]
  },
  'css-cu5': {
    id: 'css-cu5',
    title: 'ملخص Flexbox و Grid والظلال والتدرجات (الوحدة 5)',
    subject: 'css',
    items: [
      { code: 'display: flex;', desc: 'تفعيل نظام الصندوق المرن' },
      { code: 'justify-content: space-between;', desc: 'توزيع العناصر على الأطراف بفراغات متساوية' },
      { code: 'align-items: center;', desc: 'توسيط العناصر عمودياً' },
      { code: 'gap: 16px;', desc: 'مسافات فاصلة متساوية في Flexbox و Grid' },
      { code: 'display: grid; grid-template-columns: repeat(3, 1fr);', desc: 'تقسيم الصفحة إلى 3 أعمدة شبكية متساوية' },
      { code: 'linear-gradient(135deg, #6C63FF, #FF6584)', desc: 'تدرج لوني انسيابي بديع' },
      { code: 'text-shadow: 0 0 10px #6C63FF;', desc: 'توهج نيون وظلال للنصوص' },
      { code: 'box-shadow: 0 8px 24px rgba(0,0,0,0.2);', desc: 'إعطاء عمق وارتفاع واقعي للبطاقات' },
    ]
  },
  'css-cu6': {
    id: 'css-cu6',
    title: 'ملخص التحريك والانتقال والتجاوب للموبايل (الوحدة 6)',
    subject: 'css',
    items: [
      { code: 'transform: rotate(45deg);', desc: 'تدوير العنصر بزاوية دائرية' },
      { code: 'transform: scale(1.1);', desc: 'تكبير حجم العنصر بنسبة مئوية' },
      { code: 'transition: all 0.3s ease;', desc: 'حركة انسيابية تدريجية ناعمة' },
      { code: '@keyframes name { ... }', desc: 'بناء مسار تحريك تلقائي مخصص' },
      { code: 'animation: name 2s infinite;', desc: 'تشغيل الحركة بتكرار مستمر' },
      { code: '@media (max-width: 768px) { ... }', desc: 'شروط التجاوب مع شاشات الهواتف' },
    ]
  },

  // Aliases for css-uX keys
  'css-u1': { id: 'css-u1', title: 'ملخص ألوان وخطوط CSS (الوحدة 1)', subject: 'css', items: [] },
  'css-u2': { id: 'css-u2', title: 'ملخص الإطارات والهوامش والمحاذاة (الوحدة 2)', subject: 'css', items: [] },
  'css-u3': { id: 'css-u3', title: 'ملخص الحالات التفاعلية والخلفيات والأبعاد (الوحدة 3)', subject: 'css', items: [] },
  'css-u4': { id: 'css-u4', title: 'ملخص المحددات والتحكم في الظهور (الوحدة 4)', subject: 'css', items: [] },
  'css-u5': { id: 'css-u5', title: 'ملخص Flexbox و Grid والظلال والتدرجات (الوحدة 5)', subject: 'css', items: [] },
  'css-u6': { id: 'css-u6', title: 'ملخص التحريك والانتقال والتجاوب للموبايل (الوحدة 6)', subject: 'css', items: [] },

  // JS Summaries
  'js-ju1': {
    id: 'js-ju1',
    title: 'ملخص أساسيات جافاسكريبت والمتغيرات (الوحدة 1)',
    subject: 'js',
    items: [
      { code: 'console.log("رسالة");', desc: 'طباعة المخرجات وتتبع النتائج في الطرفية' },
      { code: 'const app = "كودر سبيس";', desc: 'تعريف ثابت لا تتغير قيمته أبداً' },
      { code: 'let score = 0;', desc: 'تعريف متغير يمكن تحديث قيمته' },
      { code: 'typeof variable', desc: 'فحص نوع البيانات (string, number, boolean)' },
      { code: 'Number("100")', desc: 'تحويل نص رقمي إلى رقم حسابي حقيقي' },
    ]
  },
  'js-ju2': {
    id: 'js-ju2',
    title: 'ملخص الشروط والعمليات الحسابية والمنطقية (الوحدة 2)',
    subject: 'js',
    items: [
      { code: 'a % b (Modulo)', desc: 'باقي القسمة لمعرفة الأعداد الفردية والزوجية' },
      { code: 'if (condition) { } else { }', desc: 'اتخاذ القرارات البرمجية وتوجيه التنفيذ' },
      { code: '=== (Strict Equality)', desc: 'المقارنة الصارمة للقيمة والنوع معاً' },
      { code: '&& (AND) و || (OR)', desc: 'دمج الشروط المتعددة في جملة واحدة' },
      { code: 'condition ? trueVal : falseVal', desc: 'المعامل الشرطي المختصر في سطر واحد' },
    ]
  },
  'js-ju3': {
    id: 'js-ju3',
    title: 'ملخص الدوال والمدى والدوال السهمية (الوحدة 3)',
    subject: 'js',
    items: [
      { code: 'function name(params) { }', desc: 'تعريف دالة لإعادة استخدامها' },
      { code: 'return result;', desc: 'إرجاع النتيجة وإنهاء تنفيذ الدالة' },
      { code: 'const add = (a, b) => a + b;', desc: 'الدوال السهمية الحديثة والموجزة' },
      { code: 'Scope (Global vs Local)', desc: 'مدى رؤية المتغيرات المحمية داخل الأقواس' },
      { code: 'function greet(name = "زائر")', desc: 'القيم الافتراضية لمنع أخطاء undefined' },
    ]
  },
  'js-ju4': {
    id: 'js-ju4',
    title: 'ملخص المصفوفات والكائنات والفلترة (الوحدة 4)',
    subject: 'js',
    items: [
      { code: 'const arr = ["HTML", "JS"];', desc: 'مصفوفة مرتبة تبدأ من الفهرس arr[0]' },
      { code: 'arr.push("CSS") و arr.pop()', desc: 'إضافة عنصر للنهاية أو حذف العنصر الأخير' },
      { code: 'const user = { name: "خالد" };', desc: 'كائن يجمع خصائص واقعية { key: value }' },
      { code: 'arr.map(x => x * 2)', desc: 'توليد مصفوفة جديدة بعد تعديل كل عنصر' },
      { code: 'arr.filter(item => condition)', desc: 'تصفية واستخراج العناصر المحققة للشرط' },
    ]
  },
  'js-ju5': {
    id: 'js-ju5',
    title: 'ملخص التفاعل مع الصفحة وشجرة DOM (الوحدة 5)',
    subject: 'js',
    items: [
      { code: 'document.getElementById("id")', desc: 'استهداف عنصر HTML بالمعرف الفريد' },
      { code: 'document.querySelector(".class")', desc: 'استهداف العنصر بنفس محددات CSS' },
      { code: 'el.textContent = "جديد";', desc: 'تحديث النص المكتوب داخل العنصر فوراً' },
      { code: 'el.style.color = "blue";', desc: 'تعديل خصائص CSS برمجياً عبر جافاسكريبت' },
      { code: 'btn.addEventListener("click", fn)', desc: 'الاستجابة لنقرات الفأرة وكتابة المفاتيح' },
      { code: 'el.classList.toggle("active")', desc: 'تبديل فئة لتفعيل الوضع الليلي بسهولة' },
    ]
  },
  'js-ju6': {
    id: 'js-ju6',
    title: 'ملخص المؤقتات والتخزين والواجهات البرمجية APIs (الوحدة 6)',
    subject: 'js',
    items: [
      { code: 'setTimeout(fn, 2000);', desc: 'تنفيذ كود لمرة واحدة بعد انقضاء الوقت' },
      { code: 'setInterval(fn, 1000);', desc: 'تكرار تنفيذ كود باستمرار كل فترة' },
      { code: '`مرحباً ${name}` (Backtick)', desc: 'قوالب نصوص عصرية لدمج المتغيرات بسلاسة' },
      { code: 'localStorage.setItem("k", "v")', desc: 'تخزين بيانات المستخدم محلياً في جهازه مجاناً' },
      { code: 'fetch(url) و JSON', desc: 'الاتصال بالسيرفرات وتبادل البيانات مع APIs' },
    ]
  }
};

// Mirror items to css-uX keys so both keys work identically
for (let i = 1; i <= 6; i++) {
  unitSummaries[`css-u${i}`].items = unitSummaries[`css-cu${i}`].items;
}
