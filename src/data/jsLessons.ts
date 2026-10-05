import { Lesson } from '../types';

export const jsUnitsMeta = [
  { id: 'ju1', num: 'الوحدة 1', title: 'الأساسيات والمتغيرات وأنواع البيانات', count: 5 },
  { id: 'ju2', num: 'الوحدة 2', title: 'الشروط والعمليات الحسابية والمنطقية', count: 5 },
  { id: 'ju3', num: 'الوحدة 3', title: 'الدوال والمدى والدوال السهمية', count: 5 },
  { id: 'ju4', num: 'الوحدة 4', title: 'المصفوفات والكائنات ومعالجة البيانات', count: 5 },
  { id: 'ju5', num: 'الوحدة 5', title: 'التفاعل مع صفحة الويب وشجرة DOM', count: 5 },
  { id: 'ju6', num: 'الوحدة 6', title: 'المؤقتات والتخزين المحلي والتعامل مع API', count: 5 },
];

export const jsLessons: Record<string, Lesson> = {
  // Unit 1
  'js-ju1-l1': {
    id: 'js-ju1-l1',
    subject: 'js',
    unit: 'ju1',
    lessonNumber: 'l1',
    title: 'أول أمر برمجي console.log()',
    sub: 'طباعة النتائج وتتبع الأخطاء في طرفية المطور',
    tag: 'JavaScript • الدرس 1',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أهلاً بك في عقل صفحة الويب المفكر (JavaScript)!<br><br>
        أمر <span class="text-[#F7DF1E] font-bold">console.log()</span> هو الأداة الأولى لأي مبرمج لطباعة المخرجات في شاشة وحدة التحكم (Console) لمشاهدة ما يحدث خلف الكواليس.<br><br>
        يمكنك طباعة نصوص بين علامتي تنصيص <code class="text-amber-300">"نص"</code> أو <code class="text-amber-300">'Hello'</code>.<br>
        كما يمكنك طباعة أرقام وحسابات مباشرة: <code class="text-amber-300">console.log(2026);</code>
      </p>
    `,
    code: `console.log("مرحباً بك في لغة جافاسكريبت!");
console.log(100 + 50);
console.log("النتيجة النهائية:", 150);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; مرحباً بك في لغة جافاسكريبت!<br>
      &gt; 150<br>
      &gt; النتيجة النهائية: 150
    </div>`,
    practice: `console.log("أنا أتعلم جافاسكريبت بمتعة!");
console.log(25 * 4);`,
    hint: 'استخدم console.log لتجربة وفحص أي قيمة برمجية.'
  },
  'js-ju1-l2': {
    id: 'js-ju1-l2',
    subject: 'js',
    unit: 'ju1',
    lessonNumber: 'l2',
    title: 'المتغيرات عبر let و const',
    sub: 'تخزين البيانات وحفظ القيم القابلة والثابتة للتغيير',
    tag: 'JavaScript • الدرس 2',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        المتغيرات مثل صناديق ذات أسماء تحفظ بداخلها معلومات لاستخدامها لاحقاً:<br><br>
        <span class="text-[#F7DF1E] font-bold">let</span>: لإنشاء متغير يمكن تغيير وتحديث قيمته لاحقاً (مثل نقاط اللعبة أو عداد الزوار).<br>
        <span class="text-[#F7DF1E] font-bold">const</span>: لإنشاء ثابت لا تتغير قيمته طوال تشغيل البرنامج (مثل اسم الموقع، أو ثابت النسبة التقريبية PI = 3.14).<br><br>
        <strong class="text-[#43E97B]">قاعدة المحترفين:</strong> استخدم دائماً <code class="text-amber-300">const</code> افتراضياً، وإذا كنت متأكداً أن القيمة ستتغير فاستخدم <code class="text-amber-300">let</code>.
      </p>
    `,
    code: `const platformName = "منصة كودر سبيس";
let userScore = 0;

userScore = userScore + 50;

console.log(platformName, "نقاط المستخدم:", userScore);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; منصة كودر سبيس نقاط المستخدم: 50
    </div>`,
    practice: `const userName = "سارة";
let level = 1;
level = 2;
console.log(userName, "في المستوى:", level);`,
    hint: 'المتغيرات المعرفة بـ const يمنع إعادة إسناد قيمة جديدة لها.'
  },
  'js-ju1-l3': {
    id: 'js-ju1-l3',
    subject: 'js',
    unit: 'ju1',
    lessonNumber: 'l3',
    title: 'أنواع البيانات: النصوص والأرقام',
    sub: 'الفرق بين النصوص Strings والأرقام الحسابية Numbers',
    tag: 'JavaScript • الدرس 3',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        لجافاسكريبت أنواع بيانات مختلفة تتعامل مع كل منها بذكاء:<br><br>
        <span class="text-[#F7DF1E] font-bold">Number (الأرقام)</span>: للعمليات الحسابية مثل <code class="text-amber-300">10</code> أو الأرقام العشرية <code class="text-amber-300">5.5</code> دون أي علامات تنصيص.<br>
        <span class="text-[#F7DF1E] font-bold">String (النصوص)</span>: أي كلام محاط بعلامات تنصيص حتى لو كانت أرقاماً مثل <code class="text-amber-300">"10"</code> تصبح نصاً.<br><br>
        انتبه: العملية <code class="text-cyan-300">"5" + 5</code> ينتج عنها النص <code class="text-cyan-300">"55"</code> وليس الرقم 10 لأن علامة الجمع مع النصوص تقوم بلصق الكلمات (Concatenation)!
      </p>
    `,
    code: `const price = 100;
const tax = 15;
const total = price + tax;
console.log("السعر الإجمالي:", total); // 115`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; السعر الإجمالي: 115
    </div>`,
    practice: `let a = 20;
let b = 30;
console.log("المجموع:", a + b);`,
    hint: 'الأرقام تكتب مباشرة دون علامات تنصيص.'
  },
  'js-ju1-l4': {
    id: 'js-ju1-l4',
    subject: 'js',
    unit: 'ju1',
    lessonNumber: 'l4',
    title: 'القيم المنطقية Booleans',
    sub: 'الصح والخطأ true و false واتخاذ القرارات البرمجية',
    tag: 'JavaScript • الدرس 4',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        نوع البيانات المنطقي <span class="text-[#F7DF1E] font-bold">Boolean</span> لا يحمل إلا احتمالين فقط لا ثالث لهما:<br><br>
        <code class="text-amber-300">true</code>: صحيح، نعم، متطابق.<br>
        <code class="text-amber-300">false</code>: خاطئ، لا، غير متطابق.<br><br>
        تُستخدم القيم المنطقية للتحقق من حالة المستخدم (هل سجل دخوله؟ هل أكمل الاختبار؟ هل مسموح له بالمرور؟).
      </p>
    `,
    code: `const isUserLoggedIn = true;
const hasFinishedQuiz = false;

console.log("مسجل الدخول:", isUserLoggedIn);
console.log("أنهى الاختبار:", hasFinishedQuiz);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; مسجل الدخول: true<br>
      &gt; أنهى الاختبار: false
    </div>`,
    practice: `let isSubscriber = true;
console.log("مشترك فعال:", isSubscriber);`,
    hint: 'اكتب true و false بأحرف صغيرة دون علامات تنصيص.'
  },
  'js-ju1-l5': {
    id: 'js-ju1-l5',
    subject: 'js',
    unit: 'ju1',
    lessonNumber: 'l5',
    title: 'معرفة نوع البيانات عبر typeof',
    sub: 'كشف هوية المتغيرات والتحويل الآمن بين الأنواع',
    tag: 'JavaScript • الدرس 5',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أمر <span class="text-[#F7DF1E] font-bold">typeof</span> يرجع لك نوع البيانات التي يحملها أي متغير (string, number, boolean):<br><br>
        <code class="text-amber-300 font-mono">typeof "كودر سبيس"</code> ينتج "string".<br>
        <code class="text-amber-300 font-mono">typeof 2026</code> ينتج "number".<br><br>
        ولتحويل نص رقمي إلى رقم حقيقي، نستخدم الدالة <code class="text-cyan-300 font-mono">Number("50")</code> أو دالة <code class="text-cyan-300 font-mono">parseInt()</code>.
      </p>
    `,
    code: `const ageText = "20";
const ageNumber = Number(ageText);

console.log(typeof ageText);   // string
console.log(typeof ageNumber); // number`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; string<br>
      &gt; number
    </div>`,
    practice: `let score = 95;
console.log("نوع المتغير:", typeof score);`,
    hint: 'typeof مفيد جداً للتأكد من وصول بيانات النماذج بالشكل الصحيح.'
  },

  // Unit 2
  'js-ju2-l1': {
    id: 'js-ju2-l1',
    subject: 'js',
    unit: 'ju2',
    lessonNumber: 'l1',
    title: 'العمليات الحسابية وباقي القسمة %',
    sub: 'الجمع والطرح والضرب وباقي القسمة Modulo لكشف الأعداد الفردية والزوجية',
    tag: 'JavaScript • الدرس 6',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        توفر لغة جافاسكريبت جميع العمليات الحسابية القياسية:<br><br>
        <code class="text-amber-300">+</code> للجمع و <code class="text-amber-300">-</code> للطرح.<br>
        <code class="text-amber-300">*</code> للضرب و <code class="text-amber-300">/</code> للقسمة.<br>
        <span class="text-[#F7DF1E] font-bold">% (Modulo)</span>: تعطي باقي القسمة (مثلاً: 10 % 3 = 1). تُستخدم بكثرة لمعرفة هل الرقم زوجي (% 2 === 0) أم فردي.
      </p>
    `,
    code: `const x = 10;
const y = 3;

console.log("الضرب:", x * y);   // 30
console.log("باقي القسمة:", x % y);  // 1`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; الضرب: 30<br>
      &gt; باقي القسمة: 1
    </div>`,
    practice: `let count = 15;
console.log("باقي قسمة 15 على 4 هو:", count % 4);`,
    hint: 'علامة النجمة * هي علامة الضرب في البرمجة.'
  },
  'js-ju2-l2': {
    id: 'js-ju2-l2',
    subject: 'js',
    unit: 'ju2',
    lessonNumber: 'l2',
    title: 'الجمل الشرطية if / else',
    sub: 'توجيه مسار تنفيذ البرنامج بناءً على تحقق الشروط',
    tag: 'JavaScript • الدرس 7',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تسمح لك جملة <span class="text-[#F7DF1E] font-bold">if / else</span> باتخاذ القرارات الذكية في تطبيقك:<br><br>
        <code class="text-amber-300 font-mono">if (الشرط) { نفذ هذا } else { نفذ البديل }</code><br><br>
        إذا تحقق الشرط (كانت نتيجته true) ينفذ الكود داخل القوسين المعقوفين، وإلا يتم الانتقال إلى كتلة else.
      </p>
    `,
    code: `const score = 85;

if (score >= 60) {
  console.log("تهانينا، لقد اجتزت الاختبار بنجاح!");
} else {
  console.log("حاول مرة أخرى في الفرصة القادمة.");
}`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; تهانينا، لقد اجتزت الاختبار بنجاح!
    </div>`,
    practice: `let age = 18;
if (age >= 18) {
  console.log("مؤهل للتسجيل في الدورة المتقدمة");
} else {
  console.log("مرحباً بك في دورة المبتدئين");
}`,
    hint: 'جرب تغيير قيمة score إلى أقل من 60 لتشاهد عمل كود else.'
  },
  'js-ju2-l3': {
    id: 'js-ju2-l3',
    subject: 'js',
    unit: 'ju2',
    lessonNumber: 'l3',
    title: 'المقارنة المتطابقة === مقابل ==',
    sub: 'تجنب أشهر أخطاء المبتدئين في مقارنة القيم والأنواع',
    tag: 'JavaScript • الدرس 8',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        هناك فرق شاسع بين علامتي المقارنة في جافاسكريبت:<br><br>
        <code class="text-cyan-300 font-mono">==</code> (المقارنة المتساهلة): تحاول تحويل الأنواع قسرياً، فتقول لك إن 5 == "5" هي true (وهذا قد يسبب أخطاء خفية كارثية!).<br>
        <span class="text-[#F7DF1E] font-bold font-mono">===</span> (المقارنة الصارمة Strict Equality): تقارن <strong>القيمة ونوع البيانات معاً</strong> (مثلاً 5 === "5" تنتج false لأن أحدهما رقم والآخر نص).<br><br>
        <strong class="text-[#43E97B]">قاعدة المحترفين:</strong> استخدم دائماً <code class="text-amber-300">===</code> في كل أكوادك دون استثناء.
      </p>
    `,
    code: `console.log(5 == "5");  // true (متساهل)
console.log(5 === "5"); // false (صارم وصحيح)`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; true<br>
      &gt; false
    </div>`,
    practice: `let a = 10;
let b = "10";
console.log("هل متطابقان تماماً؟", a === b);`,
    hint: 'استخدم دائماً === لتفادي الأخطاء المنطقية غير المتوقعة.'
  },
  'js-ju2-l4': {
    id: 'js-ju2-l4',
    subject: 'js',
    unit: 'ju2',
    lessonNumber: 'l4',
    title: 'المعاملات المنطقية && و || و !',
    sub: 'دمج الشروط المتعددة: "و"، "أو"، والنفي "ليس"',
    tag: 'JavaScript • الدرس 9',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تسمح المعاملات المنطقية بتركيب شروط معقدة في جملة if واحدة:<br><br>
        <span class="text-[#F7DF1E] font-bold font-mono">&& (AND)</span>: تتطلب تحقق <strong>كلا الشرطين معاً</strong>.<br>
        <span class="text-[#F7DF1E] font-bold font-mono">|| (OR)</span>: يكفي تحقق <strong>أحد الشرطين فقط</strong> على الأقل.<br>
        <span class="text-[#F7DF1E] font-bold font-mono">! (NOT)</span>: يعكس الحالة، فيحول true إلى false والعكس.
      </p>
    `,
    code: `const age = 22;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("مسموح لك بقيادة السيارة.");
}`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; مسموح لك بقيادة السيارة.
    </div>`,
    practice: `let score = 90;
let attended = true;
if (score > 80 && attended) {
  console.log("مؤهل للشهادة التقديرية");
}`,
    hint: 'في معامِل && إذا فشل طرف واحد يفشل الشرط كاملاً.'
  },
  'js-ju2-l5': {
    id: 'js-ju2-l5',
    subject: 'js',
    unit: 'ju2',
    lessonNumber: 'l5',
    title: 'المعامل الشرطي المختصر Ternary Operator',
    sub: 'كتابة شروط if / else كاملة في سطر واحد أنيق',
    tag: 'JavaScript • الدرس 10',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُعد المعامل الشرطي الثلاثي (Ternary Operator) بديلاً فائق السرعة والأناقة لجمل if/else البسيطة:<br><br>
        <code class="text-amber-300 font-mono">الشرط ? القيمة إذا تحقق : القيمة إذا لم يتحقق</code><br><br>
        يُستخدم بكثرة لتعيين قيم المتغيرات وإظهار نصوص الحالة مثل "متصل" أو "غير متصل".
      </p>
    `,
    code: `const points = 120;
const status = points >= 100 ? "مستخدم ذهبي" : "مستخدم فضي";

console.log(status);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; مستخدم ذهبي
    </div>`,
    practice: `let isOnline = true;
let msg = isOnline ? "الخدمة متاحة" : "الخدمة غير متوفرة";
console.log(msg);`,
    hint: 'علامة الاستفهام تعني "هل تحقق؟" والنقطتان الرأسيتان تعنيان "وإلا".'
  },

  // Unit 3
  'js-ju3-l1': {
    id: 'js-ju3-l1',
    subject: 'js',
    unit: 'ju3',
    lessonNumber: 'l1',
    title: 'صناعة واستدعاء الدوال Functions',
    sub: 'تنظيم الأكواد وإعادة استخدامها دون تكرار',
    tag: 'JavaScript • الدرس 11',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        الدالة (Function) هي كتلة من الأكواد المصممة لإنجاز مهمة معينة، تقوم بكتابتها مرة واحدة فقط، ثم تستطيع استدعاءها متى ما أردت.<br><br>
        تُعرف الدالة بكلمة <code class="text-amber-300 font-mono">function</code> متبوعة باسمها وقوسين، وتستدعى بكتابة اسمها: <code class="text-amber-300 font-mono">sayHello();</code>
      </p>
    `,
    code: `function welcomeUser() {
  console.log("مرحباً بك في منصة كودر سبيس!");
  console.log("نتمنى لك تجربة ممتعة.");
}

welcomeUser(); // استدعاء الدالة`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; مرحباً بك في منصة كودر سبيس!<br>
      &gt; نتمنى لك تجربة ممتعة.
    </div>`,
    practice: `function startEngine() {
  console.log("المحرك يعمل بنجاح!");
}
startEngine();`,
    hint: 'لا تنسَ كتابة القوسين () عند استدعاء الدالة لتنفيذها.'
  },
  'js-ju3-l2': {
    id: 'js-ju3-l2',
    subject: 'js',
    unit: 'ju3',
    lessonNumber: 'l2',
    title: 'المعاملات وإرجاع النتائج Parameters & Return',
    sub: 'تمرير البيانات للدوال والحصول على المخرجات النهائية',
    tag: 'JavaScript • الدرس 12',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        تكتسب الدوال قوتها الحقيقية عندما تستقبل مدخلات وتنتج مخرجات:<br><br>
        <span class="text-[#F7DF1E] font-bold">Parameters (المعاملات)</span>: متغيرات نضعها بين قوسي الدالة لتعمل بها.<br>
        <span class="text-[#F7DF1E] font-bold">return (الإرجاع)</span>: تعيد النتيجة المحسوبة إلى المكان الذي تم استدعاء الدالة منه، وتنهي تنفيذ الدالة فوراً.
      </p>
    `,
    code: `function calculateArea(width, height) {
  return width * height;
}

const area = calculateArea(5, 10);
console.log("المساحة الإجمالية:", area); // 50`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; المساحة الإجمالية: 50
    </div>`,
    practice: `function multiply(a, b) {
  return a * b;
}
console.log("حاصل الضرب:", multiply(6, 7));`,
    hint: 'أي سطر كود يوضع بعد كلمة return في الدالة لا ينفذ أبداً.'
  },
  'js-ju3-l3': {
    id: 'js-ju3-l3',
    subject: 'js',
    unit: 'ju3',
    lessonNumber: 'l3',
    title: 'الدوال السهمية الحديثة Arrow Functions (=>)',
    sub: 'الأسلوب العصري والمختصر لكتابة الدوال في المعيار ES6+',
    tag: 'JavaScript • الدرس 13',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أدخل معيار ES6 شكلاً أنيقاً وسريعاً لكتابة الدوال يسمى الدوال السهمية (Arrow Functions):<br><br>
        بدلاً من كتابة function، نستخدم السهم <code class="text-amber-300 font-mono">=&gt;</code>:<br>
        <code class="text-amber-300 font-mono">const add = (a, b) =&gt; a + b;</code><br><br>
        تُستخدم بكثرة مع مكتبات وأطر العمل الحديثة مثل React وأدوات معالجة المصفوفات.
      </p>
    `,
    code: `const greet = (name) => {
  return "أهلاً بك يا " + name;
};

const square = (n) => n * n;

console.log(greet("عبدالله"));
console.log("مربع الرقم 4:", square(4));`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; أهلاً بك يا عبدالله<br>
      &gt; مربع الرقم 4: 16
    </div>`,
    practice: `const double = (x) => x * 2;
console.log("ضعف 8 هو:", double(8));`,
    hint: 'إذا كانت الدالة تتكون من سطر حسابي واحد، يمكنك حذف الأقواس وكلمة return.'
  },
  'js-ju3-l4': {
    id: 'js-ju3-l4',
    subject: 'js',
    unit: 'ju3',
    lessonNumber: 'l4',
    title: 'مدى رؤية المتغيرات Scope',
    sub: 'الفرق بين المتغيرات العامة (Global) والمتغيرات المحلية (Local/Block)',
    tag: 'JavaScript • الدرس 14',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يحدد المدى (Scope) الأماكن التي يمكن فيها الوصول إلى المتغير داخل الكود:<br><br>
        <span class="text-[#F7DF1E] font-bold">Global Scope (المدى العام)</span>: المتغير المعرف خارج أي دالة، ويمكن الوصول إليه في أي مكان في البرنامج.<br>
        <span class="text-[#F7DF1E] font-bold">Block / Local Scope (المدى المحلي)</span>: المتغير المعرف بـ let أو const داخل دالة أو داخل أقواس <code class="text-amber-300">{ ... }</code>، ولا يمكن رؤيته أو استخدامه خارج تلك الأقواس أبداً!
      </p>
    `,
    code: `const site = "منصة كودر سبيس"; // عام

function test() {
  const secret = 12345; // محلي داخل الدالة فقط
  console.log(site);   // يعمل
}

test();
// console.log(secret); // خطأ ReferenceError لأنها غير مرئية هنا`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; منصة كودر سبيس
    </div>`,
    practice: `let points = 50;
function addBonus() {
  let bonus = 10;
  console.log("المجموع:", points + bonus);
}
addBonus();`,
    hint: 'المتغيرات المحلية داخل الدوال تحمي البيانات من التضارب.'
  },
  'js-ju3-l5': {
    id: 'js-ju3-l5',
    subject: 'js',
    unit: 'ju3',
    lessonNumber: 'l5',
    title: 'القيم الافتراضية للمعاملات Default Parameters',
    sub: 'حماية الدوال من الانهيار عند نسيان تمرير المدخلات',
    tag: 'JavaScript • الدرس 15',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يمكنك تعيين قيمة افتراضية للمعاملات لحمايتها في حال لم يمرر المستدعي قيمة لها:<br><br>
        <code class="text-amber-300 font-mono">function greet(name = "صديقي") { ... }</code><br><br>
        بهذه الطريقة، إذا استدعى أحد المطورين الدالة دون تمرير قيمة، ستستخدم القيمة الاحتياطية بدلاً من إنتاج خطأ undefined!
      </p>
    `,
    code: `function createUser(name = "زائر جديد", role = "متعلم") {
  console.log("المستخدم:", name, "| الدور:", role);
}

createUser();                   // يستخدم القيم الافتراضية
createUser("أحمد", "مشرف");   // يستخدم القيم الممررة`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; المستخدم: زائر جديد | الدور: متعلم<br>
      &gt; المستخدم: أحمد | الدور: مشرف
    </div>`,
    practice: `function discount(price, percent = 10) {
  return price - (price * (percent / 100));
}
console.log("السعر بعد الخصم الافتراضي:", discount(100));`,
    hint: 'القيم الافتراضية تحمي برنامجك وتجعله مرناً للغاية.'
  },

  // Unit 4
  'js-ju4-l1': {
    id: 'js-ju4-l1',
    subject: 'js',
    unit: 'ju4',
    lessonNumber: 'l1',
    title: 'المصفوفات وفهرستها Arrays & Index',
    sub: 'تخزين قوائم البيانات المتعددة والوصول للعناصر برقم الفهرس',
    tag: 'JavaScript • الدرس 16',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        المصفوفة (Array) هي قائمة مرتبة من البيانات تُحاط بقوسين مربعين <code class="text-amber-300">[ ]</code>:<br><br>
        يبدأ ترقيم العناصر دائماً من <strong>الصفر (Zero-indexed)</strong>:<br>
        العنصر الأول: <code class="text-cyan-300 font-mono">arr[0]</code><br>
        العنصر الثاني: <code class="text-cyan-300 font-mono">arr[1]</code><br>
        خاصية <code class="text-amber-300 font-mono">.length</code> تعطيك عدد العناصر الموجودة داخل المصفوفة.
      </p>
    `,
    code: `const courses = ["HTML", "CSS", "JavaScript"];

console.log("الكورس الأول:", courses[0]); // HTML
console.log("عدد الكورسات:", courses.length); // 3`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; الكورس الأول: HTML<br>
      &gt; عدد الكورسات: 3
    </div>`,
    practice: `let fruits = ["تفاح", "برتقال", "موز"];
console.log("الفاكهة الثانية:", fruits[1]);`,
    hint: 'تذكر دائماً أن أول عنصر يملك الفهرس (0) وليس (1).'
  },
  'js-ju4-l2': {
    id: 'js-ju4-l2',
    subject: 'js',
    unit: 'ju4',
    lessonNumber: 'l2',
    title: 'إضافة وحذف العناصر push و pop',
    sub: 'تعديل محتويات المصفوفات ديناميكياً بكل سهولة',
    tag: 'JavaScript • الدرس 17',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        توفر المصفوفات دوال جاهزة للتعديل السريع:<br><br>
        <span class="text-[#F7DF1E] font-bold font-mono">.push(عنصر)</span>: تضيف عنصراً جديداً إلى نهاية المصفوفة.<br>
        <span class="text-[#F7DF1E] font-bold font-mono">.pop()</span>: تحذف العنصر الأخير من المصفوفة وتعيده إليك.<br>
        <span class="text-[#F7DF1E] font-bold font-mono">.includes(عنصر)</span>: تفحص هل العنصر موجود في القائمة أم لا (ترجع true أو false).
      </p>
    `,
    code: `const tasks = ["تثبيت HTML", "تصميم CSS"];

tasks.push("برمجة JS"); // إضافة
console.log("المهام الحالية:", tasks);

tasks.pop(); // حذف الأخير
console.log("بعد الحذف:", tasks);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; المهام الحالية: [ "تثبيت HTML", "تصميم CSS", "برمجة JS" ]<br>
      &gt; بعد الحذف: [ "تثبيت HTML", "تصميم CSS" ]
    </div>`,
    practice: `let list = [1, 2, 3];
list.push(4);
console.log(list);`,
    hint: 'دالة push تعدل على المصفوفة الأصلية مباشرة.'
  },
  'js-ju4-l3': {
    id: 'js-ju4-l3',
    subject: 'js',
    unit: 'ju4',
    lessonNumber: 'l3',
    title: 'الكائنات في جافاسكريبت Objects { key: value }',
    sub: 'تمثيل الكيانات الواقعية بخصائصها وقيمها المتنوعة',
    tag: 'JavaScript • الدرس 18',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        الكائن (Object) يجمع خصائص متعددة لكيان واحد بين قوسين معقوفين <code class="text-amber-300">{ }</code>:<br><br>
        يتكون من أزواج من المفاتيح والقيم (Key : Value).<br>
        نصل إلى أي خاصية باستخدام النقطة: <code class="text-cyan-300 font-mono">user.name</code> أو <code class="text-cyan-300 font-mono">user.age</code>.
      </p>
    `,
    code: `const student = {
  name: "خالد",
  age: 20,
  track: "Frontend",
  score: 95
};

console.log("اسم الطالب:", student.name);
console.log("المسار:", student.track);
console.log("الدرجة:", student.score);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; اسم الطالب: خالد<br>
      &gt; المسار: Frontend<br>
      &gt; الدرجة: 95
    </div>`,
    practice: `const car = {
  brand: "Toyota",
  year: 2024,
  color: "white"
};
console.log("الشركة المصنعة:", car.brand);`,
    hint: 'الكائنات هي حجر الأساس لكل البيانات القادمة من الخوادم وقواعد البيانات.'
  },
  'js-ju4-l4': {
    id: 'js-ju4-l4',
    subject: 'js',
    unit: 'ju4',
    lessonNumber: 'l4',
    title: 'المرور والتحويل forEach و map',
    sub: 'معالجة عناصر المصفوفات وتوليد قوائم جديدة بأسلوب دالي احترافي',
    tag: 'JavaScript • الدرس 19',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أهم دالتين في التعامل مع المصفوفات الحديثة:<br><br>
        <span class="text-[#F7DF1E] font-bold font-mono">.forEach()</span>: للمرور على كل عنصر وتنفيذ أمر معين (مثل طباعة كل اسم).<br>
        <span class="text-[#F7DF1E] font-bold font-mono">.map()</span>: تأخذ كل عنصر، تعدل عليه، وترجع لك <strong>مصفوفة جديدة تماماً</strong> (القلب النابض لتوليد واجهات React).
      </p>
    `,
    code: `const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);

console.log("الأرقام المضاعفة:", doubled); // [2, 4, 6, 8]`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; الأرقام المضاعفة: [ 2, 4, 6, 8 ]
    </div>`,
    practice: `let names = ["أحمد", "منى", "عمر"];
names.forEach(name => console.log("مرحباً يا", name));`,
    hint: 'دالة map لا تغير المصفوفة الأصلية بل تنتج نسخة جديدة.'
  },
  'js-ju4-l5': {
    id: 'js-ju4-l5',
    subject: 'js',
    unit: 'ju4',
    lessonNumber: 'l5',
    title: 'مصفوفات الكائنات والفلترة .filter()',
    sub: 'فرز قوائم المنتجات والطلاب واستخراج العناصر المطابقة للشروط',
    tag: 'JavaScript • الدرس 20',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        في الواقع العملي تكون أغلب البيانات على شكل مصفوفة تحوي كائنات:<br><br>
        تتيح لك دالة <code class="text-amber-300">.filter()</code> استخراج العناصر التي تحقق شرطاً معيناً فقط (مثل استخراج الطلاب الناجحين أو المنتجات المتوفرة في المخزن).
      </p>
    `,
    code: `const students = [
  { name: "علي", score: 85 },
  { name: "سارة", score: 45 },
  { name: "هند", score: 92 }
];

const passed = students.filter(s => s.score >= 60);
console.log("عدد الناجحين:", passed.length);
console.log("أول ناجح:", passed[0].name);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; عدد الناجحين: 2<br>
      &gt; أول ناجح: علي
    </div>`,
    practice: `let products = [
  { title: "قلم", price: 5 },
  { title: "دفتر", price: 15 }
];
console.log(products[0].title, "سعره:", products[0].price);`,
    hint: 'تستخدم filter في محركات البحث والتصفية في كل المتاجر الإلكترونية.'
  },

  // Unit 5
  'js-ju5-l1': {
    id: 'js-ju5-l1',
    subject: 'js',
    unit: 'ju5',
    lessonNumber: 'l1',
    title: 'استهداف عناصر الصفحة DOM Selection',
    sub: 'الربط بين كود جافاسكريبت ووسوم HTML عبر كائن document',
    tag: 'JavaScript • الدرس 21',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يُعد <span class="text-[#F7DF1E] font-bold">DOM (Document Object Model)</span> جسر التواصل الذي يسمح لجافاسكريبت بقراءة وتعديل عناصر صفحة HTML بالكامل!<br><br>
        أشهر طريقتين لاستهداف العناصر:<br>
        <code class="text-amber-300 font-mono">document.getElementById('id')</code>: لاستهداف العنصر الذي يحمل المعرف id.<br>
        <code class="text-amber-300 font-mono">document.querySelector('.class')</code>: الطريقة العصرية لاستهداف أي عنصر باستخدام نفس محددات CSS.
      </p>
    `,
    code: `// استهداف عنصر العنوان
const title = document.getElementById("main-title");
console.log("تم الإمساك بالعنصر:", title);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h2 id="main-title" style="color:#6C63FF;margin:0;">العنوان المستهدف في الصفحة</h2>
    </div>`,
    practice: `const heading = document.querySelector("h1");
console.log(heading);`,
    hint: 'استخدم querySelector لأنه يدعم نفس محددات CSS (نقطة للفئة وشباك للمعرف).'
  },
  'js-ju5-l2': {
    id: 'js-ju5-l2',
    subject: 'js',
    unit: 'ju5',
    lessonNumber: 'l2',
    title: 'تغيير النصوص ديناميكياً .textContent',
    sub: 'تحديث الكلمات والرسائل والنتائج على الشاشة فوراً',
    tag: 'JavaScript • الدرس 22',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#F7DF1E] font-bold">.textContent</span> تسمح لك بقراءة أو تغيير النص المكتوب داخل أي عنصر في الصفحة:<br><br>
        <code class="text-amber-300 font-mono">element.textContent = "النص الجديد المحدث";</code><br><br>
        هذا هو الأساس الذي يجعل المواقع تفاعلية، حيث يتغير المحتوى فوراً استجابة لأفعال الزائر.
      </p>
    `,
    code: `const title = document.getElementById("welcome");
title.textContent = "أهلاً بك يا بطل، لقد تم تحديث النص برمجياً!";`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#fff;color:#222;border-radius:8px;">
      <h3 id="welcome" style="color:#28A745;margin:0;">أهلاً بك يا بطل، لقد تم تحديث النص برمجياً!</h3>
    </div>`,
    practice: `document.getElementById("main-title").textContent = "تم تغيير العنوان بنجاح!";`,
    hint: 'textContent آمن وسريع ولا يسبب ثغرات أمنية.'
  },
  'js-ju5-l3': {
    id: 'js-ju5-l3',
    subject: 'js',
    unit: 'ju5',
    lessonNumber: 'l3',
    title: 'تغيير التصميم والألوان .style',
    sub: 'التحكم في خصائص CSS عبر كود جافاسكريبت',
    tag: 'JavaScript • الدرس 23',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        يمكنك تعديل أي خاصية CSS مباشرة عبر خاصية <span class="text-[#F7DF1E] font-bold">.style</span>:<br><br>
        <code class="text-amber-300 font-mono">element.style.color = "red";</code><br>
        <code class="text-amber-300 font-mono">element.style.backgroundColor = "#1E1D2E";</code> (تحول الشرطة إلى نمط سنام الجمل camelCase).
      </p>
    `,
    code: `const box = document.getElementById("box");

box.style.backgroundColor = "#6C63FF";
box.style.color = "white";
box.style.borderRadius = "12px";`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <div id="box" style="background:#6C63FF;color:#fff;padding:12px;border-radius:12px;text-align:center;">
        مربع تم تنسيقه بالكامل عبر جافاسكريبت
      </div>
    </div>`,
    practice: `let el = document.getElementById("main-title");
el.style.color = "#FF6584";`,
    hint: 'خاصية background-color تصبح backgroundColor في جافاسكريبت.'
  },
  'js-ju5-l4': {
    id: 'js-ju5-l4',
    subject: 'js',
    unit: 'ju5',
    lessonNumber: 'l4',
    title: 'الاستماع للأحداث addEventListener',
    sub: 'الاستجابة للنقرات، واللمس، والكتابة في لوحة المفاتيح',
    tag: 'JavaScript • الدرس 24',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        دالة <span class="text-[#F7DF1E] font-bold">addEventListener</span> تسمح لبرنامجك بالانتظار والاستماع لتصرفات المستخدم:<br><br>
        <code class="text-amber-300 font-mono">btn.addEventListener('click', () => { نفذ الأوامر });</code><br><br>
        أشهر الأحداث:<br>
        <code class="text-cyan-300">click</code>: عند نقر الزر أو البطاقة.<br>
        <code class="text-cyan-300">input</code>: عند كتابة أي حرف في حقل الإدخال.<br>
        <code class="text-cyan-300">submit</code>: عند إرسال النموذج.
      </p>
    `,
    code: `const btn = document.getElementById("my-btn");

btn.addEventListener("click", () => {
  console.log("تم النقر على الزر بنجاح!");
});`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#fff;border-radius:8px;">
      <button style="padding:8px 18px;background:#43E97B;color:#0A2010;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">
        زر تفاعلي مبرمج بـ Event Listener
      </button>
    </div>`,
    practice: `const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("أمر النقر يعمل بنجاح!");
});`,
    hint: 'الحدث click هو الحدث الأكثر استخداماً في واجهات المستخدم.'
  },
  'js-ju5-l5': {
    id: 'js-ju5-l5',
    subject: 'js',
    unit: 'ju5',
    lessonNumber: 'l5',
    title: 'إدارة الفئات وتبديل الوضع الليلي classList (toggle)',
    sub: 'إضافة وإزالة وتبديل فئات CSS بسهولة واحترافية',
    tag: 'JavaScript • الدرس 25',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        بدلاً من كتابة سطور CSS متعددة داخل جافاسكريبت، الأسلوب الاحترافي هو إعداد فئة في ملف CSS ثم إضافتها أو إزالتها عبر <span class="text-[#F7DF1E] font-bold">classList</span>:<br><br>
        <code class="text-amber-300 font-mono">element.classList.add('dark')</code> لإضافة الفئة.<br>
        <code class="text-amber-300 font-mono">element.classList.remove('dark')</code> لحذف الفئة.<br>
        <code class="text-amber-300 font-mono">element.classList.toggle('dark')</code> لتبديل الفئة تلقائياً (السر خلف أزرار الوضع الليلي Dark Mode)!
      </p>
    `,
    code: `const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#1E1D2E;border-radius:8px;color:#fff;display:flex;justify-content:space-between;align-items:center;">
      <span>الوضع الليلي التفاعلي</span>
      <button style="padding:6px 14px;background:#6C63FF;color:#fff;border:none;border-radius:6px;cursor:pointer;">تبديل المظهر</button>
    </div>`,
    practice: `document.body.classList.toggle("active");
console.log("تم تبديل الفئة بنجاح");`,
    hint: 'دالة toggle تغنيك عن كتابة جمل if/else لفحص هل الفئة موجودة أم لا.'
  },

  // Unit 6
  'js-ju6-l1': {
    id: 'js-ju6-l1',
    subject: 'js',
    unit: 'ju6',
    lessonNumber: 'l1',
    title: 'المؤقت لمرة واحدة setTimeout',
    sub: 'تنفيذ الأوامر بعد انقضاء فترة زمنية محددة بالملي ثانية',
    tag: 'JavaScript • الدرس 26',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        دالة <span class="text-[#F7DF1E] font-bold">setTimeout</span> تؤجل تنفيذ كود معين بعد مرور عدد محدد من الملي ثانية (1000ms = ثانية واحدة):<br><br>
        <code class="text-amber-300 font-mono">setTimeout(() => { نفذ الكود }, 2000);</code><br><br>
        تُستخدم لإخفاء الإشعارات التلقائية (Toast messages) أو إنشاء مؤقتات العد التنازلي.
      </p>
    `,
    code: `console.log("بدأ المؤقت...");

setTimeout(() => {
  console.log("مرت ثانيتان بنجاح!");
}, 2000);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; بدأ المؤقت...<br>
      &gt; (بعد ثانيتين): مرت ثانيتان بنجاح!
    </div>`,
    practice: `setTimeout(() => {
  console.log("تمت العملية بعد ثانية واحدة");
}, 1000);`,
    hint: 'الوقت يقاس بالملي ثانية، فمثلاً 3000 تعني ثلاث ثوانٍ.'
  },
  'js-ju6-l2': {
    id: 'js-ju6-l2',
    subject: 'js',
    unit: 'ju6',
    lessonNumber: 'l2',
    title: 'المؤقت المتكرر setInterval & clearInterval',
    sub: 'تكرار تنفيذ الأوامر بانتظام لصناعة الساعات الرقمية والعدادات',
    tag: 'JavaScript • الدرس 27',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        بخلاف setTimeout التي تنفذ لمرة واحدة فقط، فإن دالة <span class="text-[#F7DF1E] font-bold">setInterval</span> تكرر تنفيذ الكود باستمرار كل فترة محددة:<br><br>
        ولإيقاف التكرار عند حد معين، نستخدم دالة <code class="text-cyan-300 font-mono">clearInterval(timerId)</code>.
      </p>
    `,
    code: `let seconds = 0;

const timer = setInterval(() => {
  seconds++;
  console.log("الثواني المنقضية:", seconds);
  
  if (seconds >= 3) {
    clearInterval(timer); // إيقاف المؤقت
  }
}, 1000);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; الثواني المنقضية: 1<br>
      &gt; الثواني المنقضية: 2<br>
      &gt; الثواني المنقضية: 3
    </div>`,
    practice: `let count = 0;
let id = setInterval(() => {
  count++;
  console.log("العداد:", count);
  if (count === 2) clearInterval(id);
}, 1000);`,
    hint: 'احفظ دائماً معرف المؤقت في متغير لتتمكن من إيقافه عبر clearInterval.'
  },
  'js-ju6-l3': {
    id: 'js-ju6-l3',
    subject: 'js',
    unit: 'ju6',
    lessonNumber: 'l3',
    title: 'قوالب النصوص العصرية Template Literals',
    sub: 'دمج المتغيرات داخل النصوص بمرونة عبر علامة Backtick (` `)',
    tag: 'JavaScript • الدرس 28',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        بدلاً من الربط المعقد والمربك باستخدام علامات الجمع <code class="text-amber-300">"مرحباً " + name + " نقاطك هي " + age</code>، قدمت جافاسكريبت <span class="text-[#F7DF1E] font-bold">Template Literals</span> باستخدام علامة الاقتباس المائلة (Backtick):<br><br>
        <code class="text-amber-300 font-mono">\`مرحباً \${name} نقاطك: \${score}\`</code><br><br>
        يمكنك تضمين أي متغير أو عملية حسابية مباشرة داخل <code class="text-cyan-300">\${...}</code> مع دعم الأسطر المتعددة دون الحاجة لرموز n\\.
      </p>
    `,
    code: `const name = "عمر";
const lessonsCount = 60;

const message = \`مرحباً يا \${name}! لقد أكملت \${lessonsCount} درساً بنجاح.\`;
console.log(message);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; مرحباً يا عمر! لقد أكملت 60 درساً بنجاح.
    </div>`,
    practice: `let user = "فاطمة";
let pts = 150;
console.log(\`أهلاً \${user}، مجموع درجاتك هو \${pts} نقطة!\`);`,
    hint: 'علامة Backtick تكتب بالضغط على زر حرف الذال أو الزر أعلى Tab.'
  },
  'js-ju6-l4': {
    id: 'js-ju6-l4',
    subject: 'js',
    unit: 'ju6',
    lessonNumber: 'l4',
    title: 'التخزين المحلي في المتصفح localStorage',
    sub: 'حفظ بيانات المستخدم ومستواه حتى بعد إغلاق المتصفح',
    tag: 'JavaScript • الدرس 29',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        خاصية <span class="text-[#F7DF1E] font-bold">localStorage</span> تتيح لك تخزين بيانات المستخدم على جهازه المحلي بدون خادم وبدون تكاليف:<br><br>
        <code class="text-amber-300 font-mono">localStorage.setItem('key', 'value')</code>: لحفظ معلومة.<br>
        <code class="text-amber-300 font-mono">localStorage.getItem('key')</code>: لاسترجاع المعلومة المحفوظة.<br>
        <code class="text-amber-300 font-mono">localStorage.removeItem('key')</code>: لحذف معلومة محددة.<br><br>
        تبقى البيانات محفوظة حتى لو أغلق المستخدم المتصفح وأعاد فتحه بعد شهور!
      </p>
    `,
    code: `// حفظ اسم المستخدم
localStorage.setItem("coderspace_username", "ahmed_dev");

// استرجاعه
const savedUser = localStorage.getItem("coderspace_username");
console.log("المستخدم المحفوظ:", savedUser);`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; المستخدم المحفوظ: ahmed_dev
    </div>`,
    practice: `localStorage.setItem("test_score", "100");
console.log("النتيجة المخزنة:", localStorage.getItem("test_score"));`,
    hint: 'لحفظ كائنات أو مصفوفات في localStorage، استخدم JSON.stringify.'
  },
  'js-ju6-l5': {
    id: 'js-ju6-l5',
    subject: 'js',
    unit: 'ju6',
    lessonNumber: 'l5',
    title: 'صيغة JSON والاتصال بالواجهات البرمجية fetch()',
    sub: 'تبادل البيانات مع السيرفرات والخدمات السحابية',
    tag: 'JavaScript • الدرس 30',
    conceptHtml: `
      <p class="text-base leading-relaxed text-[#D6D4E8]">
        أداة <span class="text-[#F7DF1E] font-bold">fetch()</span> هي البوابة التي تتواصل بها صفحتك مع خوادم العالم الخارجي!<br><br>
        تُستخدم لطلب أو إرسال البيانات من واجهات برمجة التطبيقات (API) بصيغة <span class="text-amber-300 font-bold">JSON</span> (النص القياسي لتبادل البيانات).<br>
        تعمل بنظام الوعود (Promises) والكلمات المفتاحية الحديثة <code class="text-cyan-300 font-mono">async / await</code> لتنفيذ الطلبات دون تجميد واجهة المستخدم.
      </p>
    `,
    code: `// نموذج لطلب بيانات عبر fetch
async function loadData() {
  console.log("جاري طلب البيانات...");
  // مثال للاتصال بواجهة API حقيقية:
  // const res = await fetch("https://api.example.com/data");
  // const data = await res.json();
  console.log("تم استلام البيانات بصيغة JSON!");
}

loadData();`,
    lang: 'JavaScript',
    preview: `<div style="padding:16px;background:#0A0918;border-radius:8px;font-family:monospace;color:#43E97B;font-size:13px;" dir="ltr">
      &gt; جاري طلب البيانات...<br>
      &gt; تم استلام البيانات بصيغة JSON!
    </div>`,
    practice: `console.log("التعامل مع الواجهات البرمجية APIs هو قمة الاحتراف!");`,
    hint: 'يمكن دمج نتائج fetch لتوليد عناصر HTML وعرضها في DOM.'
  }
};
