import { Question } from '../types';

export const htmlQuestionsByUnit: Record<string, Question[]> = {
  u1: [
    {
      id: 'html-u1-q1',
      type: 'tf',
      text: 'هل تصريح <!DOCTYPE html> يحدد أن المستند يتبع معيار HTML5 القياسي الحديث؟',
      correct: true,
      explanation: '<!DOCTYPE html> هو التصريح القياسي لتعريف مستندات HTML5.'
    },
    {
      id: 'html-u1-q2',
      type: 'what',
      text: 'ما هو الدور الرئيسي لوسم <title> الموجود داخل <head>؟',
      code: '<title>صفحتي الرائعة</title>',
      correct: 'title',
      answer: 'يحدد عنوان الصفحة الذي يظهر في شريط تبويب المتصفح ومحركات البحث.',
      explanation: 'العنوان يظهر في أعلى لسان التبويب وفي نتائج بحث Google.'
    },
    {
      id: 'html-u1-q3',
      type: 'mc',
      text: 'أي من الوسوم التالية يُستخدم لكتابة فقرة نصية عادية؟',
      options: ['<p>', '<text>', '<paragraph>', '<para>'],
      correct: 0,
      explanation: 'الوسم <p> هو اختصار كلمة Paragraph في معيار HTML.'
    },
    {
      id: 'html-u1-q4',
      type: 'tf',
      text: 'هل وسم <html> هو العنصر الجذري الذي يضم جميع عناصر الصفحة داخله؟',
      correct: true,
      explanation: 'نعم، وسم <html> هو الجذر (Root Element) لكل وثيقة HTML.'
    },
    {
      id: 'html-u1-q5',
      type: 'what',
      text: 'ما الذي يمثله هذا الكود عند عرضه في المتصفح؟',
      code: '<h1>مرحباً بكم في الأكاديمية</h1>',
      correct: 'h1',
      answer: 'يعرض العنوان الرئيسي الأكبر حجماً والأعلى أهمية في الصفحة.',
      explanation: '<h1> هو أعلى مستوى هرمي للعناوين في HTML.'
    },
    {
      id: 'html-u1-q6',
      type: 'mc',
      text: 'أين يجب وضع كل المحتوى المرئي الذي يراه زائر صفحة HTML؟',
      options: ['<head>', '<body>', '<title>', '<meta>'],
      correct: 1,
      explanation: 'كل المحتوى المرئي يوضع حصراً داخل وسم <body>.'
    },
    {
      id: 'html-u1-q7',
      type: 'tf',
      text: 'هل وسم <a> وسم أحادي لا يحتاج لوسم إغلاق </a>؟',
      correct: false,
      explanation: 'خطأ! وسم <a> يحتاج دائماً لوسم إغلاق </a> لتحديد النص القابل للنقر.'
    },
    {
      id: 'html-u1-q8',
      type: 'what',
      text: 'ما وظيفة خاصية href في هذا الرابط؟',
      code: '<a href="https://example.com">زيارة الموقع</a>',
      correct: 'href',
      answer: 'تحدد عنوان الرابط (URL) أو الصفحة التي سينتقل إليها المستخدم عند النقر.',
      explanation: 'href اختصار لـ Hypertext Reference.'
    },
    {
      id: 'html-u1-q9',
      type: 'mc',
      text: 'ما هي الخاصية المسؤولة عن تحديد مسار ملف الصورة في وسم <img>؟',
      options: ['src', 'href', 'url', 'link'],
      correct: 0,
      explanation: 'src اختصار Source وتحدد مسار أو رابط الصورة.'
    },
    {
      id: 'html-u1-q10',
      type: 'tf',
      text: 'هل وسم <img> ذاتي الإغلاق ولا يحتاج إلى </img>؟',
      correct: true,
      explanation: 'نعم، وسم <img> من الوسوم الفارغة ذاتية الإغلاق (Self-closing).'
    }
  ],
  u2: [
    {
      id: 'html-u2-q1',
      type: 'mc',
      text: 'أي من الأكواد التالية يُنشئ قائمة مرتبة رقمياً (1, 2, 3)؟',
      options: ['<ol><li>نقطة</li></ol>', '<ul><li>نقطة</li></ul>', '<list><li>نقطة</li></list>', '<dl><li>نقطة</li></dl>'],
      correct: 0,
      explanation: '<ol> اختصار Ordered List وترقم العناصر تلقائياً.'
    },
    {
      id: 'html-u2-q2',
      type: 'tf',
      text: 'هل تستخدم القائمة النقطية <ul> النقاط الدائرية افتراضياً لسرد العناصر؟',
      correct: true,
      explanation: 'نعم، <ul> اختصار Unordered List وتعرض نقاطاً دائرية.'
    },
    {
      id: 'html-u2-q3',
      type: 'what',
      text: 'ما وظيفة وسم <tr> في كود الجداول التالي؟',
      code: '<table><tr><td>بيانات</td></tr></table>',
      correct: 'tr',
      answer: 'ينشئ صفاً أفقياً جديداً داخل الجدول (Table Row).',
      explanation: 'tr اختصار لـ Table Row.'
    },
    {
      id: 'html-u2-q4',
      type: 'tf',
      text: 'تكتب التعليقات في HTML بالصيغة: <!-- هذا تعليق للمطور -->؟',
      correct: true,
      explanation: 'نعم، التعليقات تبدأ بـ <!-- وتنتهي بـ -->.'
    },
    {
      id: 'html-u2-q5',
      type: 'what',
      text: 'ما الذي يفعله وسم <hr> في الصفحة؟',
      code: '<p>فقرة 1</p><hr><p>فقرة 2</p>',
      correct: 'hr',
      answer: 'يرسم خطاً فاصلاً أفقياً ممتداً بين الفقرتين.',
      explanation: 'hr اختصار Horizontal Rule.'
    },
    {
      id: 'html-u2-q6',
      type: 'mc',
      text: 'ما هو الوسم الذي يوضع بداخله كل عنصر من عناصر القائمة سواء ol أو ul؟',
      options: ['<item>', '<list>', '<li>', '<el>'],
      correct: 2,
      explanation: '<li> اختصار List Item.'
    },
    {
      id: 'html-u2-q7',
      type: 'tf',
      text: 'هل خلايا <th> تظهر بنفس مظهر وحجم خلايا <td> العادية في الجدول؟',
      correct: false,
      explanation: 'لا! خلايا <th> تظهر بخط عريض وبمحاذاة في المنتصف لأنها رؤوس أعمدة.'
    },
    {
      id: 'html-u2-q8',
      type: 'what',
      text: 'ماذا يحدث لهذا السطر عند فتحه في المتصفح؟',
      code: '<!-- لا تظهر هذا النص للمستخدم -->',
      correct: 'comments',
      answer: 'يتجاهله المتصفح تماماً ولا يظهر أي أثر له على الشاشة المرئية.',
      explanation: 'التعليقات مخصصة لقراءة المطورين فقط.'
    },
    {
      id: 'html-u2-q9',
      type: 'mc',
      text: 'ما الفرق بين القائمتين <ol> و <ul>؟',
      options: ['ol رقمية مرتبة بينما ul نقطية غير مرتبة', 'ul رقمية بينما ol نقطية', 'لا يوجد أي فرق بينهما', 'ol للصور فقط'],
      correct: 0,
      explanation: 'ol تعني مرتبة رقمياً بينما ul غير مرتبة عددياً.'
    },
    {
      id: 'html-u2-q10',
      type: 'tf',
      text: 'هل وسم <hr> يحتاج لوسم إغلاق </hr> ليظهر الخط الفاصل؟',
      correct: false,
      explanation: 'خطأ! وسم <hr> وسم ذاتي الإغلاق لا يحتاج محتوى أو وسم إغلاق.'
    }
  ],
  u3: [
    {
      id: 'html-u3-q1',
      type: 'mc',
      text: 'أي نوع إدخال يضمن تشفير حروف كلمة المرور وإظهارها كنقاط سرية؟',
      options: ['<input type="password">', '<input type="secret">', '<input type="hidden">', '<input type="secure">'],
      correct: 0,
      explanation: 'type="password" يحول الحروف إلى نقاط دائرية سرية.'
    },
    {
      id: 'html-u3-q2',
      type: 'tf',
      text: 'هل خاصية placeholder تعرض نصاً توضيحياً خفيفاً داخل الحقل يختفي عند بدء الكتابة؟',
      correct: true,
      explanation: 'نعم، خاصية placeholder مخصصة لتوجيه المستخدم بنص إرشادي مؤقت.'
    },
    {
      id: 'html-u3-q3',
      type: 'what',
      text: 'ما الغرض من تجميع حقول الإدخال داخل وسم <form>؟',
      code: '<form action="/submit" method="POST">...</form>',
      correct: 'form',
      answer: 'تجميع بيانات الحقول معاً وإرسالها إلى الخادم دفعة واحدة عند الضغط على زر الإرسال.',
      explanation: 'form هو إطار إدارة وإرسال النماذج في الويب.'
    },
    {
      id: 'html-u3-q4',
      type: 'mc',
      text: 'ما هي الخاصية الضرورية في وسم <video> لإظهار أزرار التشغيل والتحكم للمستخدم؟',
      options: ['controls', 'buttons', 'playbar', 'show-ui'],
      correct: 0,
      explanation: 'بدون خاصية controls لن تظهر أزرار التشغيل ولن يستطيع المستخدم التحكم بالفيديو.'
    },
    {
      id: 'html-u3-q5',
      type: 'tf',
      text: 'هل يمكن لوسم <audio> تشغيل مقاطع الفيديو المصورة؟',
      correct: false,
      explanation: 'خطأ! وسم <audio> مخصص حصراً للصوتيات بينما <video> للفيديو.'
    },
    {
      id: 'html-u3-q6',
      type: 'what',
      text: 'ما وظيفة خاصية loop في وسوم الفيديو والصوت؟',
      code: '<video src="video.mp4" controls loop></video>',
      correct: 'loop',
      answer: 'إعادة تشغيل المقطع تلقائياً من البداية عند وصوله لنهايته بشكل مستمر.',
      explanation: 'loop تعني التكرار التلقائي.'
    },
    {
      id: 'html-u3-q7',
      type: 'mc',
      text: 'أي نوع input يضمن التحقق تلقائياً من احتواء النص المدخل على علامة @؟',
      options: ['type="email"', 'type="text"', 'type="mail"', 'type="address"'],
      correct: 0,
      explanation: 'type="email" يجبر المتصفح على التحقق من صحة صياغة البريد.'
    },
    {
      id: 'html-u3-q8',
      type: 'tf',
      text: 'هل وسم <button> يحتاج لوسم إغلاق </button> لوضع النص بداخله؟',
      correct: true,
      explanation: 'نعم، يوضع النص أو الأيقونة بين وسمي الفتح والإغلاق للزر.'
    },
    {
      id: 'html-u3-q9',
      type: 'what',
      text: 'ما دور وسم <source> داخل مشغلات <video> و <audio>؟',
      code: '<video controls><source src="file.mp4" type="video/mp4"></video>',
      correct: 'source',
      answer: 'تحديد مسار الملف وصيغته الرقمية ليختار المتصفح الصيغة المدعومة لديه.',
      explanation: 'source تتيح توفير صيغ متعددة للملف لضمان توافقه مع كافة المتصفحات.'
    },
    {
      id: 'html-u3-q10',
      type: 'mc',
      text: 'ما نوع الزر الذي يقوم بإرسال بيانات النموذج فعلياً؟',
      options: ['<button type="submit">', '<button type="reset">', '<button type="button">', '<button type="cancel">'],
      correct: 0,
      explanation: 'type="submit" هو النوع الافتراضي لإرسال النماذج.'
    }
  ],
  u4: [
    {
      id: 'html-u4-q1',
      type: 'what',
      text: 'ما هو السلوك الطبيعي لوسم <div> في تدفق الصفحة؟',
      code: '<div>محتوى</div>',
      correct: 'div',
      answer: 'عنصر كتلة (Block-level) يبدأ في سطر جديد ويستحوذ على العرض الكامل المتاح أمامه.',
      explanation: 'div هو الحاوية الهيكلية الكبرى الأكثر انتشاراً.'
    },
    {
      id: 'html-u4-q2',
      type: 'mc',
      text: 'ما هو الفرق الجوهري بين div و span؟',
      options: ['div عنصر كتلة بينما span عنصر سطري مدمج في نفس السطر', 'span عنصر كتلة فقط', 'div للصور بينما span للأرقام', 'لا يوجد أي فرق تقني'],
      correct: 0,
      explanation: 'div يأخذ سطراً مستقلاً (Block) بينما span يندمج في السطر (Inline).'
    },
    {
      id: 'html-u4-q3',
      type: 'tf',
      text: 'هل وسم <span> ممتاز لتمييز كلمة مفردة وتلوينها داخل فقرة دون النزول لسطر جديد؟',
      correct: true,
      explanation: 'نعم، وسم span مصمم تحديداً للمقاطع السطرية الصغيرة Inline.'
    },
    {
      id: 'html-u4-q4',
      type: 'what',
      text: 'ما النتيجة المترتبة على استخدام target="_blank" في هذا الرابط؟',
      code: '<a href="https://example.com" target="_blank">زيارة</a>',
      correct: 'target',
      answer: 'فتح الرابط في تبويب أو نافذة جديدة تماماً دون مغادرة صفحتك الحالية.',
      explanation: 'target="_blank" يمنع خروج المستخدم من موقعك.'
    },
    {
      id: 'html-u4-q5',
      type: 'mc',
      text: 'كيف نجعل صورة عادية تعمل كرابط ينقلك لموقع آخر عند النقر عليها؟',
      options: ['تضمين وسم <img> بالكامل داخل وسم <a>', 'تضمين وسم <a> داخل وسم <img>', 'إضافة خاصية link لوسم img', 'استخدام وسم <image-link>'],
      correct: 0,
      explanation: '<a href="..."><img src="..."></a> يجعل الصورة كاملة قابلة للنقر.'
    },
    {
      id: 'html-u4-q6',
      type: 'tf',
      text: 'في قوائم التعريف <dl>، يمثل <dt> المصطلح بينما يمثل <dd> الشرح والتفسير؟',
      correct: true,
      explanation: 'dt = Definition Term و dd = Definition Description.'
    },
    {
      id: 'html-u4-q7',
      type: 'what',
      text: 'لماذا استخدمنا <span> هنا بدلاً من <div>؟',
      code: '<p>السعر اليوم هو <span style="color:red">50$</span> فقط للجميع.</p>',
      correct: 'span',
      answer: 'لأننا نريد تلوين السعر دون أن ينزل إلى سطر جديد ويفصل سياق الجملة.',
      explanation: 'span عنصر سطري يحافظ على انسياب الجملة.'
    },
    {
      id: 'html-u4-q8',
      type: 'mc',
      text: 'أي من الوسوم التالية هو الأنسب لبناء قائمة أسئلة وأجوبة شائعة FAQ؟',
      options: ['<dl>', '<ol>', '<ul>', '<list>'],
      correct: 0,
      explanation: '<dl> يتيح وضع السؤال في dt والإجابة في dd بشكل قياسي.'
    },
    {
      id: 'html-u4-q9',
      type: 'tf',
      text: 'هل وسم <div> يضيف تصميماً ملوناً وإطاراً وظلالاً بشكل تلقائي دون الحاجة لكتابة CSS؟',
      correct: false,
      explanation: 'خطأ! وسم div مجرد حاوية صامتة لا يحمل أي تصميم مرئي بدون CSS.'
    },
    {
      id: 'html-u4-q10',
      type: 'what',
      text: 'ما هو الاستخدام الشائع لكود <a><img></a> في شريط المواقع العلوي؟',
      code: '<a href="/"><img src="logo.png" alt="شعار الموقع"></a>',
      correct: 'logo',
      answer: 'إنشاء شعار الموقع (Logo) القابل للنقر لإعادة الزائر إلى الصفحة الرئيسية.',
      explanation: 'النمط المتبع عالمياً في جميع مواقع الإنترنت.'
    }
  ],
  u5: [
    {
      id: 'html-u5-q1',
      type: 'mc',
      text: 'أي وسم يسمح لك بعرض صفحة موقع أو خريطة أو مستند خارجي داخل نافذة بصفحتك؟',
      options: ['<iframe src="https://example.com"></iframe>', '<embed-page url="https://example.com">', '<include src="https://example.com">', '<window href="https://example.com">'],
      correct: 0,
      explanation: 'iframe هو الوسم القياسي لتضمين الصفحات الخارجية.'
    },
    {
      id: 'html-u5-q2',
      type: 'tf',
      text: 'هل يجوز تكرار نفس قيمة المعرف id على 10 عناصر مختلفة في نفس صفحة HTML؟',
      correct: false,
      explanation: 'قطعاً لا! المعرف id يجب أن يكون حصرياً وفريداً لعنصر واحد فقط بالصفحة.'
    },
    {
      id: 'html-u5-q3',
      type: 'what',
      text: 'ما الفرق الرئيسي في الاستخدام بين id و class؟',
      code: '<div id="main-nav"> مقابل <div class="card">',
      correct: 'id-vs-class',
      answer: 'id لعنصر واحد فريد، بينما class فئة تصنيف يمكن تكرارها على مئات العناصر.',
      explanation: 'id فريد بينما class متعدد الاستخدام.'
    },
    {
      id: 'html-u5-q4',
      type: 'mc',
      text: 'ما هو الوسم الدلالي الأنسب المخصص لجمع روابط التنقل في الموقع؟',
      options: ['<nav>', '<menu-links>', '<links>', '<navigation>'],
      correct: 0,
      explanation: '<nav> هو الوسم الدلالي المعياري لروابط التنقل في HTML5.'
    },
    {
      id: 'html-u5-q5',
      type: 'tf',
      text: 'هل وسم <article> مخصص للمحتوى المستقل بذاته القابل للمشاركة وإعادة النشر؟',
      correct: true,
      explanation: 'نعم، وسم article للمقالات والتدوينات والأخبار المستقلة.'
    },
    {
      id: 'html-u5-q6',
      type: 'what',
      text: 'ما الذي يعنيه وجود عدة أسماء داخل خاصية class مفصولة بمسافات؟',
      code: '<button class="btn btn-primary active">حفظ</button>',
      correct: 'multiple-classes',
      answer: 'تطبيق عدة فئات وتنسيقات مختلفة على نفس هذا العنصر في آن واحد.',
      explanation: 'يمكن للعنصر أن ينتمي إلى عدة فئات class.'
    },
    {
      id: 'html-u5-q7',
      type: 'mc',
      text: 'لماذا قد تفشل بعض المواقع العالمية الشهيرة في الظهور عند تضمينها داخل <iframe>؟',
      options: ['بسبب سياسات الأمان والحماية التي تفعل ترويسة X-Frame-Options', 'لأن الإنترنت ضعيف فقط', 'لأن المتصفح لا يدعم iframe', 'لأن حجم الصفحة كبير جداً'],
      correct: 0,
      explanation: 'المواقع تمنع تضمينها لحماية مستخدميها من هجمات Clickjacking.'
    },
    {
      id: 'html-u5-q8',
      type: 'tf',
      text: 'هل استخدام الوسوم الدلالية مثل <nav> و <article> يحسن ترتيب الموقع في محركات البحث SEO؟',
      correct: true,
      explanation: 'نعم، الوسوم الدلالية تساعد خوارزميات محركات البحث على فهم بنية المحتوى.'
    },
    {
      id: 'html-u5-q9',
      type: 'what',
      text: 'ما فائدة إعطاء معرف فريد للعنصر بهذا الشكل؟',
      code: '<h1 id="top-title">أهلاً بكم</h1>',
      correct: 'id-title',
      answer: 'إمكانية استهداف هذا العنصر بدقة حصرية عبر CSS أو الوصول له برمجياً عبر JavaScript.',
      explanation: 'يسهل الوصول للعنصر عبر #top-title أو getElementById.'
    },
    {
      id: 'html-u5-q10',
      type: 'mc',
      text: 'ما هي الخاصية التي تحدد رابط الصفحة المراد عرضها داخل <iframe>؟',
      options: ['src', 'href', 'url', 'source'],
      correct: 0,
      explanation: 'تستخدم خاصية src لتحديد مصدر النافذة المضمنة.'
    }
  ],
  u6: [
    {
      id: 'html-u6-q1',
      type: 'what',
      text: 'ما هو الدور الدلالي لوسم <section> في تنظيم الصفحة؟',
      code: '<section><h2>خدماتنا</h2><p>نص الشرح...</p></section>',
      correct: 'section',
      answer: 'تقسيم الصفحة إلى أقسام موضوعية مستقلة يحمل كل منها عنواناً خاصاً به.',
      explanation: 'section يفصل أجزاء الصفحة منطقياً وموضوعياً.'
    },
    {
      id: 'html-u6-q2',
      type: 'mc',
      text: 'أي وسم يمثل تذييل الصفحة الرسمي الذي يوضع فيه حقوق الملكية ومعلومات التواصل؟',
      options: ['<footer>', '<bottom>', '<end>', '<base>'],
      correct: 0,
      explanation: '<footer> هو الوسم الدلالي المخصص لتذييل المستند أو القسم.'
    },
    {
      id: 'html-u6-q3',
      type: 'tf',
      text: 'هل وسم <head> هو نفسه تماماً وسم <header> في الاستخدام والمكان؟',
      correct: false,
      explanation: 'لا! <head> للمعلومات الوصفية الخفية، بينما <header> لمقدمة وترويسة الصفحة المرئية داخل <body>.'
    },
    {
      id: 'html-u6-q4',
      type: 'what',
      text: 'ما الأهمية البالغة لكتابة <meta charset="UTF-8"> في رأس المستند؟',
      code: '<meta charset="UTF-8">',
      correct: 'charset',
      answer: 'ضمان قراءة وعرض الحروف والكلمات العربية والرموز العالمية بشكل سليم دون أي رموز مشوهة.',
      explanation: 'UTF-8 هو الترميز العالمي القياسي لجميع اللغات.'
    },
    {
      id: 'html-u6-q5',
      type: 'mc',
      text: 'ما هو الوسم الذي يكتب بداخله التعليق التوضيحي الرسمي التابع لوسم <figure>؟',
      options: ['<figcaption>', '<caption>', '<desc>', '<alt>'],
      correct: 0,
      explanation: '<figcaption> مخصص لكتابة التسمية التوضيحية داخل <figure>.'
    },
    {
      id: 'html-u6-q6',
      type: 'tf',
      text: 'هل يمكن وجود أكثر من وسم <header> في نفس الصفحة (مثلاً ترويسة رئيسية للصفحة وترويسة داخل كل <article>)؟',
      correct: true,
      explanation: 'نعم، يمكن استخدام header لكل مقال أو قسم مستقل.'
    },
    {
      id: 'html-u6-q7',
      type: 'what',
      text: 'ما أهمية وسم meta viewport التالي؟',
      code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      correct: 'viewport',
      answer: 'جعل الموقع متجاوباً تماماً مع شاشات الهواتف الذكية وفق حجم كل شاشة دون تصغير مشوه.',
      explanation: 'viewport هو حجر الأساس الأول لتجاوب صفحات الويب مع الموبايل.'
    },
    {
      id: 'html-u6-q8',
      type: 'mc',
      text: 'أين يجب كتابة وسوم <meta> في ملف HTML؟',
      options: ['حصراً داخل وسم <head>', 'في نهاية وسم <body>', 'داخل تذييل <footer>', 'خارج وسم </html>'],
      correct: 0,
      explanation: 'تكتب وسوم meta دائماً داخل <head>.'
    },
    {
      id: 'html-u6-q9',
      type: 'tf',
      text: 'هل يصح وضع وسوم توضيحية متعددة كصورة ورسم بياني معاً داخل نفس وسم figure واحد؟',
      correct: true,
      explanation: 'figure يمكن أن تحتوي على صورة واحدة أو مجموعة صور تابعة لنفس الشرح.'
    },
    {
      id: 'html-u6-q10',
      type: 'what',
      text: 'ما فائدة وسم description في وسوم meta لمحركات البحث؟',
      code: '<meta name="description" content="منصة كودر سبيس لتعليم البرمجة مجاناً">',
      correct: 'meta-desc',
      answer: 'هو النص الوصفي الذي يظهر للمستخدم في نتائج بحث جوجل أسفل عنوان الرابط مباشرة.',
      explanation: 'يحدد مقتطف البحث Snippet في Google ويزيد من معدل النقر CTR.'
    }
  ]
};

export const cssQuestionsByUnit: Record<string, Question[]> = {
  cu1: [
    {
      id: 'css-cu1-q1',
      type: 'tf',
      text: 'هل خاصية color: blue; في CSS مسؤولة عن تلوين النص وليس لون الخلفية؟',
      correct: true,
      explanation: 'color تلون النص في CSS بينما background-color تلون الخلفية.'
    },
    {
      id: 'css-cu1-q2',
      type: 'what',
      text: 'ما النتيجة المتوقعة لهذا الكود في المتصفح؟',
      code: 'h1 { color: #6C63FF; }',
      correct: 'color-hex',
      answer: 'تلوين جميع عناوين h1 باللون البنفسجي العصري باستخدام نظام الترقيم السداسي عشر HEX.',
      explanation: '#6C63FF هو كود لوني بصيغة HEX.'
    },
    {
      id: 'css-cu1-q3',
      type: 'mc',
      text: 'ما هي الخاصية المسؤولة عن تغيير لون خلفية الأقسام أو الصفحة؟',
      options: ['background-color', 'font-color', 'color', 'background-text'],
      correct: 0,
      explanation: 'background-color هي الخاصية المسؤولة عن لون الخلفية.'
    },
    {
      id: 'css-cu1-q4',
      type: 'tf',
      text: 'هل الخاصية font-size: 24px تجعل حجم ارتفاع حروف النص مساوياً لـ 24 بكسل؟',
      correct: true,
      explanation: 'font-size تحدد حجم الخط بالبكسل أو الوحدات النسبية.'
    },
    {
      id: 'css-cu1-q5',
      type: 'what',
      text: 'ماذا تعني كتابة خط احتياطي بعد الفاصلة في font-family؟',
      code: 'body { font-family: Arial, sans-serif; }',
      correct: 'font-family',
      answer: 'إذا لم يكن خط Arial مثبتاً على جهاز الزائر، سيقوم المتصفح باستخدام أي خط بديل من عائلة sans-serif.',
      explanation: 'يسمى بخط الاحتياط Fallback Font.'
    },
    {
      id: 'css-cu1-q6',
      type: 'mc',
      text: 'أي قيمة رقمية لخاصية font-weight تمثل الخط العريض (Bold) القياسي؟',
      options: ['700', '100', 'italic', 'normal'],
      correct: 0,
      explanation: 'font-weight: 700 تكافئ تماماً كلمة bold.'
    },
    {
      id: 'css-cu1-q7',
      type: 'tf',
      text: 'هل تطبيق font-style: italic يجعل الكلمات مائلة نحو اليمين؟',
      correct: true,
      explanation: 'italic يحول مظهر النص إلى مائل.'
    },
    {
      id: 'css-cu1-q8',
      type: 'what',
      text: 'ما هي ميزة استخدام وحدة rem لحجم الخط مقارنة بالبكسل الثابت px؟',
      code: 'p { font-size: 1.2rem; }',
      correct: 'rem',
      answer: 'تتجاوب نسبياً مع إعدادات تفضيل حجم الخط في جهاز المستخدم ومتصفحه مما يحسن إمكانية الوصول.',
      explanation: 'rem تعتمد على حجم الخط الجذري لعنصر html.'
    },
    {
      id: 'css-cu1-q9',
      type: 'mc',
      text: 'أي صيغة من التالية خاطئة لتحديد الألوان في CSS؟',
      options: ['color: [255, 0, 0];', 'color: red;', 'color: #FF0000;', 'color: rgb(255, 0, 0);'],
      correct: 0,
      explanation: 'الأقواس المربعة [255, 0, 0] غير مقبولة في معيار CSS.'
    },
    {
      id: 'css-cu1-q10',
      type: 'tf',
      text: 'هل كل قاعدة برمجية في CSS يجب أن تنتهي بفاصلة منقوطة (;)؟',
      correct: true,
      explanation: 'الفاصلة المنقوطة تفصل الخصائص البرمجية عن بعضها.'
    }
  ],
  cu2: [
    {
      id: 'css-cu2-q1',
      type: 'tf',
      text: 'هل الكود border: 2px solid black ينشئ إطاراً أسود متصلاً بسُمك 2 بكسل؟',
      correct: true,
      explanation: 'border يجمع السُمك والنوع واللون معاً.'
    },
    {
      id: 'css-cu2-q2',
      type: 'what',
      text: 'ما الوظيفة التي تؤديها خاصية border-radius في التصميم؟',
      code: 'div { border-radius: 12px; }',
      correct: 'border-radius',
      answer: 'تقوم بتدوير حواف وزوايا العنصر الخارجية بنعومة بمقدار 12 بكسل لمنحه مظهراً عصرياً.',
      explanation: 'border-radius تلغي الزوايا الحادة 90 درجة.'
    },
    {
      id: 'css-cu2-q3',
      type: 'mc',
      text: 'ما الفرق الأساسي بين margin و padding؟',
      options: ['margin مسافة فارغة خارجية تدفع العناصر المجاورة، بينما padding مسافة داخلية توسع رقعة العنصر', 'padding مسافة خارجية و margin داخلية', 'كلاهما نفس الشيء تماماً', 'margin للأزرار فقط'],
      correct: 0,
      explanation: 'margin خارجي يباعد العناصر، و padding داخلي يوسع العنصر.'
    },
    {
      id: 'css-cu2-q4',
      type: 'tf',
      text: 'هل كتابة margin: 0 auto; تقوم بتوسيط العنصر أفقياً في منتصف الشاشة بشرط وجود عرض محدد width؟',
      correct: true,
      explanation: 'auto تحسب الهوامش يميناً ويساراً بالتساوي لتوسيط العنصر.'
    },
    {
      id: 'css-cu2-q5',
      type: 'what',
      text: 'ما الذي يفعله السطر التالي بالنصوص؟',
      code: 'h1 { text-align: center; }',
      correct: 'text-align-center',
      answer: 'يقوم بمحاذاة وتوسيط النص أفقياً في منتصف مساحته المتاحة.',
      explanation: 'text-align تتحكم في تموضع الكلمات أفقياً.'
    },
    {
      id: 'css-cu2-q6',
      type: 'mc',
      text: 'كيف نلغي الخط السفلي التلقائي المزعج الذي يظهر تحت الروابط التشعبية <a>؟',
      options: ['text-decoration: none;', 'font-line: none;', 'text-style: plain;', 'border: none;'],
      correct: 0,
      explanation: 'text-decoration: none تحذف خطوط التسطير.'
    },
    {
      id: 'css-cu2-q7',
      type: 'tf',
      text: 'هل إعطاء border-radius: 50% لعنصر مربع يحوله إلى دائرة مثالية هندسياً؟',
      correct: true,
      explanation: 'نعم، 50% على الأبعاد المتساوية تنتج شكلاً دائرياً كاملاً.'
    },
    {
      id: 'css-cu2-q8',
      type: 'what',
      text: 'في أي حالة عملية يُستخدم كود text-decoration: line-through؟',
      code: '.discount { text-decoration: line-through; }',
      correct: 'line-through',
      answer: 'لشطب السعر القديم للمنتج بخط وسطي لإبراز التخفيض والسعر الجديد.',
      explanation: 'line-through يشطب النص بمنتصفه.'
    },
    {
      id: 'css-cu2-q9',
      type: 'mc',
      text: 'أي قيمة لنوع الإطار border تجعل الخط يظهر متقطعاً وليس متصلاً؟',
      options: ['dashed', 'solid', 'double', 'groove'],
      correct: 0,
      explanation: 'dashed تجعل الإطار يظهر كشرطات متقطعة.'
    },
    {
      id: 'css-cu2-q10',
      type: 'tf',
      text: 'هل زيادة قيمة padding داخل الزر تجعله يبدو أكبر وأفسح ومريحاً للنقر بالإصبع؟',
      correct: true,
      explanation: 'نعم، padding يكبر المساحة الملموسة للزر.'
    }
  ],
  cu3: [
    {
      id: 'css-cu3-q1',
      type: 'what',
      text: 'ما الذي يعنيه محدد a:hover في ورقة الأنماط؟',
      code: 'a:hover { color: #FF6584; }',
      correct: 'hover',
      answer: 'تغيير لون الرابط إلى الوردي اللحظي عندما يقف مؤشر الفأرة فوقه مباشرة.',
      explanation: ':hover يمثل حالة التحويم بالفأرة.'
    },
    {
      id: 'css-cu3-q2',
      type: 'mc',
      text: 'أي خاصية تضمن تغطية صورة الخلفية لكامل مساحة العنصر تلقائياً دون تشويه أبعادها؟',
      options: ['background-size: cover;', 'background-size: stretch;', 'background-size: auto;', 'background-size: full;'],
      correct: 0,
      explanation: 'cover تغطي كامل الصندوق مع الحفاظ على نسبة العرض للارتفاع.'
    },
    {
      id: 'css-cu3-q3',
      type: 'tf',
      text: 'هل يمكن تطبيق الصنف الزائف :hover على الأزرار والصناديق وليس الروابط فقط؟',
      correct: true,
      explanation: 'نعم، :hover يعمل على أي عنصر تفاعلي في الصفحة.'
    },
    {
      id: 'css-cu3-q4',
      type: 'what',
      text: 'ما فائدة استخدام max-width بدلاً من width الثابت فقط في التصميم؟',
      code: 'div { max-width: 500px; width: 100%; }',
      correct: 'max-width',
      answer: 'يسمح للعنصر بالتوسع حتى 500 بكسل على شاشات الكمبيوتر، ولكنه ينكمش ليناسب شاشة الجوال إذا كان عرضها أصغر من 500 بكسل دون أن تنكسر الصفحة.',
      explanation: 'max-width يمنع خروج المحتوى عن حواف شاشة الهاتف.'
    },
    {
      id: 'css-cu3-q5',
      type: 'mc',
      text: 'ماذا تعني القيمة 100vh عند إعطائها لخاصية height؟',
      options: ['100% من كامل ارتفاع شاشة نافذة المستخدم الحالية', '100 بكسل فقط', 'عرض الشاشة بالكامل', '100% من حجم الخط'],
      correct: 0,
      explanation: 'vh اختصار Viewport Height أي ارتفاع نافذة الرؤية.'
    },
    {
      id: 'css-cu3-q6',
      type: 'tf',
      text: 'هل خاصية background-repeat: no-repeat تمنع تكرار صورة الخلفية المتجاور كالبلاط؟',
      correct: true,
      explanation: 'نعم، no-repeat تضمن ظهور الصورة مرة واحدة فقط.'
    },
    {
      id: 'css-cu3-q7',
      type: 'what',
      text: 'أين الخطأ في هذه العبارة: width: 100 px;؟',
      code: 'div { width: 100 px; }',
      correct: 'spacing-bug',
      answer: 'وجود مسافة فارغة غير مسموح بها بين الرقم 100 والوحدة px.',
      explanation: 'يجب أن تلتصق الوحدة بالرقم مباشرة دون أي فراغ: 100px.'
    },
    {
      id: 'css-cu3-q8',
      type: 'mc',
      text: 'أي صنف زائف يستهدف الرابط بعد أن يكون الزائر قد فتحه وزار صفحته بالفعل؟',
      options: ['a:visited', 'a:hover', 'a:active', 'a:focus'],
      correct: 0,
      explanation: ':visited مخصص للروابط التي تمت زيارتها.'
    },
    {
      id: 'css-cu3-q9',
      type: 'tf',
      text: 'هل كتابة background-position: center تجعل منتصف صورة الخلفية متمركزاً في وسط الصندوق؟',
      correct: true,
      explanation: 'center تضمن تمركز بؤرة الصورة في الوسط.'
    },
    {
      id: 'css-cu3-q10',
      type: 'what',
      text: 'ما فائدة جعل height: auto مع الصور في CSS؟',
      code: 'img { width: 100%; height: auto; }',
      correct: 'img-aspect',
      answer: 'تغيير ارتفاع الصورة تلقائياً بما يحفظ التناسب الطبيعي ويمنع تمطيطها أو ضغطها المشوه.',
      explanation: 'height: auto يحافظ على النسبة الرياضية للأبعاد Aspect Ratio.'
    }
  ],
  cu4: [
    {
      id: 'css-cu4-q1',
      type: 'mc',
      text: 'كيف نستهدف في ملف CSS أي عنصر يحمل الفئة class="btn"؟',
      options: ['.btn { }', '#btn { }', '*btn { }', 'btn { }'],
      correct: 0,
      explanation: 'النقطة (.) هي علامة استهداف الفئات class في CSS.'
    },
    {
      id: 'css-cu4-q2',
      type: 'tf',
      text: 'هل علامة الشباك (#) في CSS مخصصة حصراً لاستهداف المعرفات id؟',
      correct: true,
      explanation: 'نعم، الهاش # مخصص لاستهداف id في ورقة الأنماط.'
    },
    {
      id: 'css-cu4-q3',
      type: 'what',
      text: 'ما الفرق بين display: none و visibility: hidden؟',
      code: '.a { display: none; } مقابل .b { visibility: hidden; }',
      correct: 'display-vs-visibility',
      answer: 'display: none تخفي العنصر وتزيل مساحته بالكامل من الصفحة، بينما visibility: hidden تخفيه بصرياً مع حجز مكانه الفارغ.',
      explanation: 'display: none تلغي وجود العنصر من التدفق الهيكلي.'
    },
    {
      id: 'css-cu4-q4',
      type: 'mc',
      text: 'ما هي خاصية cursor التي تحول شكل الفأرة إلى يد صغيرة تشير إلى إمكانية النقر؟',
      options: ['cursor: pointer;', 'cursor: hand;', 'cursor: click;', 'cursor: button;'],
      correct: 0,
      explanation: 'pointer تحول المؤشر إلى يد تفاعلية قابلة للنقر.'
    },
    {
      id: 'css-cu4-q5',
      type: 'tf',
      text: 'هل القاعدة .note { color: red; } ستطبق على جميع العناصر التي تحمل class="note" في الصفحة كاملة؟',
      correct: true,
      explanation: 'نعم، محدد الفئة يطبق على كل العناصر الحاملة لتلك الفئة.'
    },
    {
      id: 'css-cu4-q6',
      type: 'what',
      text: 'ما الفائدة من خاصية cursor: not-allowed للأزرار؟',
      code: '.disabled { cursor: not-allowed; }',
      correct: 'not-allowed',
      answer: 'إظهار علامة المنع الحمراء لتحذير الزائر من أن هذا الزر معطل ولا يقبل النقر حالياً.',
      explanation: 'not-allowed ترشد المستخدم لحالة التعطيل.'
    },
    {
      id: 'css-cu4-q7',
      type: 'mc',
      text: 'ما الفرق في أولوية التطبيق بين #header و .header في قواعد CSS؟',
      options: ['#header يحمل أولوية وتخصصية أعلى من .header لأنه معرف id', '.header أعلى أولوية من #header', 'كلاهما بنفس التخصصية تماماً', '#header يطبق فقط في الهواتف'],
      correct: 0,
      explanation: 'المعرفات # id لها خصوصية تزن أعلى بكثير من فئات النقطة class.'
    },
    {
      id: 'css-cu4-q8',
      type: 'tf',
      text: 'هل يمكنك في CSS الحديثة جعل الخط التحتي مموجاً عبر text-decoration: underline wavy red;؟',
      correct: true,
      explanation: 'نعم، يمكن دمج النمط المموج واللون في خاصية واحدة.'
    },
    {
      id: 'css-cu4-q9',
      type: 'what',
      text: 'لماذا يُفضل المطورون استخدام class بدلاً من id في تصميم البطاقات والأزرار؟',
      code: '.card { padding: 16px; }',
      correct: 'class-reusability',
      answer: 'لأن الفئات class يمكن إعادة استخدامها في مئات العناصر، بينما id محظور تكراره في الصفحة.',
      explanation: 'الفئات تمنح مرونة كبرى وتمنع التضارب.'
    },
    {
      id: 'css-cu4-q10',
      type: 'mc',
      text: 'ماذا يحدث للعناصر المجاورة للعنصر الذي تم تطبيق display: none عليه؟',
      options: ['تحتل مكانه فوراً وتسد الفراغ كأنه لم يكن موجوداً أبداً', 'تترك فراغاً فارغاً بنسبة 50%', 'تختفي هي الأخرى تلقائياً', 'تتحول للون الشفاف'],
      correct: 0,
      explanation: 'display: none تلغي العنصر تماماً من تدفق المستند.'
    }
  ],
  cu5: [
    {
      id: 'css-cu5-q1',
      type: 'mc',
      text: 'كيف نقوم بتفعيل نظام الصندوق المرن Flexbox على أي حاوية؟',
      options: ['display: flex;', 'layout: flexbox;', 'type: flex;', 'flex: active;'],
      correct: 0,
      explanation: 'display: flex تفعل بيئة Flexbox على الأب وأطفاله المباشرين.'
    },
    {
      id: 'css-cu5-q2',
      type: 'tf',
      text: 'هل خاصية justify-content في Flexbox مسؤولة عن محاذاة وتوزيع العناصر على المحور الرئيسي الأفقي؟',
      correct: true,
      explanation: 'نعم، justify-content تتحكم في التوزيع الأفقي الافتراضي.'
    },
    {
      id: 'css-cu5-q3',
      type: 'what',
      text: 'ما الذي تعنيه وحدة 1fr في شبكات CSS Grid؟',
      code: '.grid { grid-template-columns: 1fr 1fr 1fr; }',
      correct: '1fr',
      answer: 'تمثل حصة واحدة (Fraction) من المساحة المتبقية، وتوزيعها بالتساوي بين الأعمدة الثلاثة.',
      explanation: 'fr اختصار Fraction أي جزء نسبي عادل.'
    },
    {
      id: 'css-cu5-q4',
      type: 'mc',
      text: 'أي دالة في CSS تستخدم لإنشاء تدرج لوني انسيابي بين لونين أو أكثر؟',
      options: ['linear-gradient(...)', 'color-blend(...)', 'gradient-color(...)', 'multi-color(...)'],
      correct: 0,
      explanation: 'linear-gradient تصنع تدرجات لونية خطية متميزة.'
    },
    {
      id: 'css-cu5-q5',
      type: 'tf',
      text: 'هل خاصية gap: 16px تصنع فواصل بـ 16 بكسل بين العناصر في كل من Flexbox و Grid دون الحاجة لهوامش يدوية؟',
      correct: true,
      explanation: 'gap هي الطريقة العصرية لضبط المسافات بين عناصر الشبكات.'
    },
    {
      id: 'css-cu5-q6',
      type: 'what',
      text: 'ما الفرق بين text-shadow و box-shadow؟',
      code: 'h1 { text-shadow: ... } مقابل div { box-shadow: ... }',
      correct: 'shadows',
      answer: 'text-shadow تضع ظلاً أو توهجاً وراء حروف الكلمات، بينما box-shadow تضع ظلاً لإطار الصندوق والبطاقة ككل.',
      explanation: 'الأولى للنصوص والثانية لإطارات الصناديق.'
    },
    {
      id: 'css-cu5-q7',
      type: 'mc',
      text: 'ما هي الخاصية التي تسمح لعناصر Flexbox بالانتقال إلى سطر جديد إذا ضاقت الشاشة؟',
      options: ['flex-wrap: wrap;', 'flex-direction: row;', 'flex-flow: next;', 'wrap-line: true;'],
      correct: 0,
      explanation: 'flex-wrap: wrap تسمح بالتفاف العناصر في سطور متعددة.'
    },
    {
      id: 'css-cu5-q8',
      type: 'tf',
      text: 'هل الخاصية align-items: center تقوم بتوسيط العناصر عمودياً على المحور المتقاطع في Flexbox؟',
      correct: true,
      explanation: 'align-items تتحكم في المحاذاة العمودية.'
    },
    {
      id: 'css-cu5-q9',
      type: 'what',
      text: 'ما الذي تعنيه كلمة inset في خاصية box-shadow؟',
      code: 'div { box-shadow: inset 0 2px 4px black; }',
      correct: 'inset-shadow',
      answer: 'تجعل الظل ينعكس إلى داخل الصندوق بدلاً من خروجه للخارج، مما يعطي مظهراً غائراً للأزرار.',
      explanation: 'inset تصنع ظلالاً داخلية مقعرة.'
    },
    {
      id: 'css-cu5-q10',
      type: 'mc',
      text: 'كيف نختصر تقسيم الصفحة إلى 4 أعمدة متساوية في CSS Grid؟',
      options: ['grid-template-columns: repeat(4, 1fr);', 'grid-columns: 4fr;', 'columns: 4 equal;', 'grid-template: 4;'],
      correct: 0,
      explanation: 'repeat(4, 1fr) تكرر 1fr أربع مرات بصيغة مقتضبة.'
    }
  ],
  cu6: [
    {
      id: 'css-cu6-q1',
      type: 'mc',
      text: 'أي كود يقوم بتدوير العنصر بزاوية 45 درجة مع اتجاه عقارب الساعة؟',
      options: ['transform: rotate(45deg);', 'rotate: 45;', 'transform: spin(45);', 'direction: 45deg;'],
      correct: 0,
      explanation: 'transform: rotate(45deg) هي الصيغة الصحيحة.'
    },
    {
      id: 'css-cu6-q2',
      type: 'tf',
      text: 'هل كتابة transform: rotate(360deg); تجعل العنصر يدور دورة كاملة؟',
      correct: true,
      explanation: '360 درجة تمثل دورة كاملة هندسياً.'
    },
    {
      id: 'css-cu6-q3',
      type: 'what',
      text: 'ما التأثير البصري لتطبيق transform: scale(1.2) عند التحويم على الزر؟',
      code: 'button:hover { transform: scale(1.2); }',
      correct: 'scale',
      answer: 'تكبير حجم الزر بنسبة 20% إضافية فوق حجمه الطبيعي دون إزاحة العناصر المحيطة به.',
      explanation: 'scale تضخم العنصر في مكانه.'
    },
    {
      id: 'css-cu6-q4',
      type: 'mc',
      text: 'ما هي الخاصية التي تحول القفزات اللحظية المفاجئة في الألوان إلى حركة تدريجية انسيابية ناعمة؟',
      options: ['transition', 'smooth', 'animation-speed', 'timing'],
      correct: 0,
      explanation: 'transition تصنع انتقالات زمنية ناعمة وسلسة.'
    },
    {
      id: 'css-cu6-q5',
      type: 'tf',
      text: 'هل يُفضل دائماً كتابة خاصية transition على الصنف الأساسي للعنصر وليس داخل صنف :hover فقط؟',
      correct: true,
      explanation: 'نعم، لتكون الحركة ناعمة عند دخول الفأرة وعند خروجها أيضاً.'
    },
    {
      id: 'css-cu6-q6',
      type: 'what',
      text: 'ما الغرض من استخدام قاعدة @keyframes في CSS؟',
      code: '@keyframes bounce { from { top: 0; } to { top: 20px; } }',
      correct: 'keyframes',
      answer: 'رسم وتصميم مسار حركة مخصص بمحطات زمنية متعددة لتشغيله كرسوم متحركة متقدمة.',
      explanation: 'keyframes تحدد الإطارات المفتاحية للحركة.'
    },
    {
      id: 'css-cu6-q7',
      type: 'mc',
      text: 'ما هي الأداة القياسية في CSS التي تسمح لنا بتغيير التصميم ليتوافق مع شاشات الهواتف الذكية؟',
      options: ['استعلامات الوسائط @media queries', 'أوامر التجاوب @mobile', 'مكتبات السيرفر فقط', 'وسم التجاوب @screen'],
      correct: 0,
      explanation: '@media queries هي أساس التصميم المتجاوب Responsive Web Design.'
    },
    {
      id: 'css-cu6-q8',
      type: 'tf',
      text: 'هل الكلمة infinite في خاصية animation تجعل الحركة تتكرر إلى ما لا نهاية دون توقف؟',
      correct: true,
      explanation: 'infinite تعني تكرار الحركة باستمرار للأبد.'
    },
    {
      id: 'css-cu6-q9',
      type: 'what',
      text: 'متى تطبق الخصائص المكتوبة داخل هذا الشرط؟',
      code: '@media (max-width: 600px) { body { font-size: 14px; } }',
      correct: 'media-condition',
      answer: 'فقط عندما يكون عرض شاشة الجهاز 600 بكسل أو أقل (شاشات الهواتف الصغيرة).',
      explanation: 'max-width تحدد الحد الأقصى لعرض الشاشة لتفعيل القاعدة.'
    },
    {
      id: 'css-cu6-q10',
      type: 'mc',
      text: 'ما هي صياغة transition القياسية لتغيير جميع الخصائص بنعومة خلال ثلث ثانية؟',
      options: ['transition: all 0.3s ease;', 'transition: 0.3s all time;', 'transition: move 300px;', 'transition: smooth 1s;'],
      correct: 0,
      explanation: 'all 0.3s ease هي الصيغة الأكثر انتشاراً.'
    }
  ]
};

export const jsQuestionsByUnit: Record<string, Question[]> = {
  ju1: [
    {
      id: 'js-ju1-q1',
      type: 'tf',
      text: 'هل أمر console.log() يطبع المخرجات في شاشة وحدة التحكم الخاصة بالمطور دون أن تظهر كنص مباشر في الصفحة؟',
      correct: true,
      explanation: 'console.log مخصص لمخرجات الطرفية وفحص البرامج.'
    },
    {
      id: 'js-ju1-q2',
      type: 'what',
      text: 'ما الفرق الجوهري بين المتغيرين في هذا السطر؟',
      code: 'const pi = 3.14; let score = 0;',
      correct: 'const-vs-let',
      answer: 'pi ثابت لا يمكن تغيير قيمته مطلقاً، بينما score متغير يمكن تحديثه وزيادته لاحقاً.',
      explanation: 'const للثوابت و let للمتغيرات القابلة للتعديل.'
    },
    {
      id: 'js-ju1-q3',
      type: 'mc',
      text: 'ما هي النتيجة المطبوعة لهذا الكود: console.log("5" + 5);؟',
      options: ['"55" (نص ملتصق)', '10 (رقم حسابي)', 'NaN (خطأ حسابي)', '5 (قيمة مكررة)'],
      correct: 0,
      explanation: 'علامة الجمع مع وجود نص تقوم بلصق النصين "55" وليس الجمع الحسابي.'
    },
    {
      id: 'js-ju1-q4',
      type: 'tf',
      text: 'هل النوع المنطقي Boolean يقبل قيمتين فقط هما true و false؟',
      correct: true,
      explanation: 'النوع المنطقي Boolean ثنائي الحالة فقط.'
    },
    {
      id: 'js-ju1-q5',
      type: 'what',
      text: 'ما الناتج الذي ستعيده العبارة typeof 2026؟',
      code: 'console.log(typeof 2026);',
      correct: 'typeof-num',
      answer: '"number"',
      explanation: 'typeof تفحص نوع القيمة وترجع "number" للأرقام.'
    },
    {
      id: 'js-ju1-q6',
      type: 'mc',
      text: 'أي كلمة محجوزة تستخدم لتعريف متغير لا يمكن إعادة إسناد قيمة جديدة له لاحقاً؟',
      options: ['const', 'let', 'var', 'fixed'],
      correct: 0,
      explanation: 'const اختصار Constant وتعني ثابتاً غير قابل للتغيير.'
    },
    {
      id: 'js-ju1-q7',
      type: 'tf',
      text: 'هل العبارة typeof "كودر سبيس" ترجع نوع البيانات "string"؟',
      correct: true,
      explanation: 'كل النصوص بين علامات الاقتباس هي من نوع string.'
    },
    {
      id: 'js-ju1-q8',
      type: 'what',
      text: 'كيف نحول النص "100" إلى رقم حسابي 100 في جافاسكريبت؟',
      code: 'const text = "100";',
      correct: 'number-conversion',
      answer: 'باستخدام الدالة Number("100") أو دالة parseInt("100").',
      explanation: 'Number() تحول النصوص الرقمية إلى قيم عددية.'
    },
    {
      id: 'js-ju1-q9',
      type: 'mc',
      text: 'ما نوع البيانات الذي يمثله المتغير: const isOnline = true;؟',
      options: ['boolean', 'string', 'number', 'undefined'],
      correct: 0,
      explanation: 'true و false هما من النوع المنطقي boolean.'
    },
    {
      id: 'js-ju1-q10',
      type: 'tf',
      text: 'هل محاولة تغيير قيمة متغير معرف بـ let ستسبب خطأ وتوقف البرنامج؟',
      correct: false,
      explanation: 'خطأ! let مصممة خصيصاً لتسمح بتغيير وإعادة تعيين القيمة.'
    }
  ],
  ju2: [
    {
      id: 'js-ju2-q1',
      type: 'what',
      text: 'ما ناتج عملية باقي القسمة % (Modulo) في هذا السطر؟',
      code: 'console.log(10 % 3);',
      correct: 'modulo',
      answer: '1 (لأن 10 تحوي ثلاث ثلاثات ويتبقى 1).',
      explanation: '10 مقسومة على 3 تساوي 3 مع باقي 1.'
    },
    {
      id: 'js-ju2-q2',
      type: 'mc',
      text: 'ما الفرق بين 5 == "5" و 5 === "5"؟',
      options: ['الأولى true بينما الثانية false لأن === تقارن القيمة والنوع معاً', 'كلاهما true', 'كلاهما false', 'الأولى خطأ برمجي'],
      correct: 0,
      explanation: '=== هي المقارنة الصارمة (Strict Equality) وتتحقق من نوع البيانات.'
    },
    {
      id: 'js-ju2-q3',
      type: 'tf',
      text: 'هل المعامل المنطقي && (AND) يتطلب تحقق كلا الشرطين معاً ليكون الناتج true؟',
      correct: true,
      explanation: 'في && يجب أن تكون جميع الأطراف true.'
    },
    {
      id: 'js-ju2-q4',
      type: 'what',
      text: 'ما الناتج المنطقي لهذا التعبير باستخدام المعامل || (OR)؟',
      code: 'console.log(true || false);',
      correct: 'or-logic',
      answer: 'true (لأن المعامل || يكفيه تحقق طرف واحد فقط).',
      explanation: 'يكفي طرف واحد صحيح لإنتاج true مع معامِل OR.'
    },
    {
      id: 'js-ju2-q5',
      type: 'mc',
      text: 'ما هي الصيغة الصحيحة للمعامل الشرطي الثلاثي (Ternary Operator)؟',
      options: ['condition ? ifTrue : ifFalse', 'condition : ifTrue ? ifFalse', 'if condition then result', 'condition => true : false'],
      correct: 0,
      explanation: 'الشرط متبوعاً بعلامة استفهام ثم القيمة الصائبة ثم نقطتين فالقيمة الخاطئة.'
    },
    {
      id: 'js-ju2-q6',
      type: 'tf',
      text: 'هل علامة التعجب ! تقلب القيمة المنطقية (فمثلاً !true تصبح false)؟',
      correct: true,
      explanation: '!NOT تعكس القيمة المنطقية.'
    },
    {
      id: 'js-ju2-q7',
      type: 'what',
      text: 'ما الذي سيحدث إذا لم يتحقق الشرط في جملة if بدون وجود else؟',
      code: 'if (score > 100) { console.log("تهانينا"); }',
      correct: 'if-skip',
      answer: 'يتجاهل المتصفح كتلة الكود بالكامل ويواصل تنفيذ الأسطر التالية بسلام.',
      explanation: 'يتم تخطي كود if عند عدم تحقق الشرط.'
    },
    {
      id: 'js-ju2-q8',
      type: 'mc',
      text: 'أي تعبير برمجي يتحقق من أن الرقم x هو عدد زوجي؟',
      options: ['x % 2 === 0', 'x / 2 === 0', 'x * 2 === 0', 'x + 2 === 0'],
      correct: 0,
      explanation: 'إذا كان باقي قسمة الرقم على 2 يساوي صفراً فالرقم زوجي بالتأكيد.'
    },
    {
      id: 'js-ju2-q9',
      type: 'tf',
      text: 'هل يُنصح دائماً باستخدام === بدلاً من == في مشاريع جافاسكريبت الاحترافية؟',
      correct: true,
      explanation: 'المقارنة الصارمة تمنع الأخطاء غير المتوقعة الناتجة عن تحويل الأنواع التلقائي.'
    },
    {
      id: 'js-ju2-q10',
      type: 'what',
      text: 'ما هي القيمة المحفوظة في res: const res = (10 > 5) ? "نعم" : "لا"؟',
      code: 'const res = (10 > 5) ? "نعم" : "لا";',
      correct: 'ternary-val',
      answer: '"نعم" (لأن الشرط 10 أكبر من 5 صحيح).',
      explanation: 'الشرط محقق لذلك تؤخذ القيمة الأولى بعد علامة الاستفهام.'
    }
  ],
  ju3: [
    {
      id: 'js-ju3-q1',
      type: 'mc',
      text: 'أي كلمة محجوزة تستخدم لإرجاع ناتج من داخل الدالة وإنهاء تنفيذها فوراً؟',
      options: ['return', 'send', 'output', 'exit'],
      correct: 0,
      explanation: 'return هي الكلمة المحجوزة لإرجاع القيمة من الدوال.'
    },
    {
      id: 'js-ju3-q2',
      type: 'tf',
      text: 'هل الدوال السهمية (Arrow Functions) تستخدم رمز السهم => بدلاً من كتابة كلمة function؟',
      correct: true,
      explanation: 'الصيغة السهمية () => { ... } دخلت في معيار ES6.'
    },
    {
      id: 'js-ju3-q3',
      type: 'what',
      text: 'ما الذي سيحدث عند محاولة طباعة secret خارج الدالة هنا؟',
      code: 'function test() { const secret = 123; } console.log(secret);',
      correct: 'scope-error',
      answer: 'سينتج خطأ (ReferenceError: secret is not defined) لأن المتغير محلي ومحصور داخل الدالة فقط.',
      explanation: 'المتغيرات داخل الدوال تملك نطاقاً محلياً Block Scope.'
    },
    {
      id: 'js-ju3-q4',
      type: 'mc',
      text: 'أي من الصيغ التالية تمثل دالة سهمية صحيحة تضاعف الرقم الممرر لها؟',
      options: ['const double = x => x * 2;', 'function double(x) = x * 2;', 'const double = (x) -> x * 2;', 'let double(x) => x * 2;'],
      correct: 0,
      explanation: 'const double = x => x * 2; صيغة سهمية قياسية موجزة.'
    },
    {
      id: 'js-ju3-q5',
      type: 'tf',
      text: 'هل كتابة قيمة افتراضية مثل function greet(name = "زائر") تمنع وقوع أخطاء عند عدم تمرير قيمة؟',
      correct: true,
      explanation: 'القيم الافتراضية تعوض عن المعاملات المنسية وتحمي من undefined.'
    },
    {
      id: 'js-ju3-q6',
      type: 'what',
      text: 'ما الفرق بين تعريف الدالة واستدعائها في الكود؟',
      code: 'function run() {} مقابل run();',
      correct: 'call-vs-def',
      answer: 'الأولى بناء وتجهيز لخريطة الدالة، بينما run() هو أمر التشغيل والتنفيذ الفعلي لها.',
      explanation: 'الدالة لا تنفذ إلا عند استدعائها بالقوسين ().'
    },
    {
      id: 'js-ju3-q7',
      type: 'mc',
      text: 'ما ناتج استدعاء calculate(4, 5) للدالة: const calculate = (a, b) => a + b;؟',
      options: ['9', '45', '"45"', 'undefined'],
      correct: 0,
      explanation: '4 + 5 = 9.'
    },
    {
      id: 'js-ju3-q8',
      type: 'tf',
      text: 'هل يمكن للدالة الواحدة أن تستقبل عدة معاملات تفصل بينها فواصل؟',
      correct: true,
      explanation: 'نعم، مثل function sum(a, b, c) { ... }.'
    },
    {
      id: 'js-ju3-q9',
      type: 'what',
      text: 'ما الفائدة البرمجية الكبرى من كتابة العمليات المتكررة داخل دوال؟',
      code: 'function calculateTotal() { ... }',
      correct: 'func-benefits',
      answer: 'إعادة استخدام الأكواد بدون تكرار، وسهولة تعديل المنطق في مكان واحد وتسهيل صيانة البرنامج.',
      explanation: 'تطبيق مبدأ DRY (Don\'t Repeat Yourself) في هندسة البرمجيات.'
    },
    {
      id: 'js-ju3-q10',
      type: 'mc',
      text: 'ما القيمة التي ترجعها الدالة إذا لم نضع بداخلها كلمة return صريحة؟',
      options: ['undefined', 'null', '0', 'false'],
      correct: 0,
      explanation: 'الدوال بدون إرجاع تعيد القيمة undefined افتراضياً.'
    }
  ],
  ju4: [
    {
      id: 'js-ju4-q1',
      type: 'mc',
      text: 'إذا كانت لدينا المصفوفة const arr = ["HTML", "CSS", "JS"];، فما قيمة arr[0]؟',
      options: ['"HTML"', '"CSS"', '"JS"', 'undefined'],
      correct: 0,
      explanation: 'فهرسة المصفوفات تبدأ دائماً من الصفر (0).'
    },
    {
      id: 'js-ju4-q2',
      type: 'tf',
      text: 'هل خاصية arr.length تعيد عدد العناصر الموجودة داخل المصفوفة؟',
      correct: true,
      explanation: 'نعم، خاصية length تمثل طول وعدد عناصر المصفوفة.'
    },
    {
      id: 'js-ju4-q3',
      type: 'what',
      text: 'ما وظيفة أمر arr.push("قيمة")؟',
      code: 'const list = [1, 2]; list.push(3);',
      correct: 'push',
      answer: 'إضافة عنصر جديد إلى نهاية المصفوفة وتحديث طولها.',
      explanation: 'push تضيف دائماً في آخر القائمة.'
    },
    {
      id: 'js-ju4-q4',
      type: 'mc',
      text: 'أي دالة تقوم بحذف العنصر الأخير من المصفوفة وتعيده؟',
      options: ['arr.pop()', 'arr.delete()', 'arr.remove()', 'arr.shift()'],
      correct: 0,
      explanation: 'pop() تسحب العنصر الأخير من المصفوفة.'
    },
    {
      id: 'js-ju4-q5',
      type: 'tf',
      text: 'هل تُحاط الكائنات (Objects) بقوسين معقوفين وتتكون من أزواج { key: value }؟',
      correct: true,
      explanation: 'نعم، الكائنات تمثل بيانات المفاتيح والقيم مثل { name: "أحمد", age: 20 }.'
    },
    {
      id: 'js-ju4-q6',
      type: 'what',
      text: 'ما الفرق بين forEach و map عند التعامل مع المصفوفات؟',
      code: 'arr.forEach(...) مقابل arr.map(...)',
      correct: 'foreach-vs-map',
      answer: 'map تنتج وتعيد مصفوفة جديدة معدلة، بينما forEach تقوم فقط بالمرور دون إنشاء مصفوفة مخرجات جديدة.',
      explanation: 'map تستخدم لتحويل البيانات وتوليد واجهات المستخدم.'
    },
    {
      id: 'js-ju4-q7',
      type: 'mc',
      text: 'كيف نصل إلى خاصية age للكائن التالي: const user = { name: "سالم", age: 22 };؟',
      options: ['user.age', 'user[age]', 'user->age', 'user:age'],
      correct: 0,
      explanation: 'استخدام النقطة user.age أو الأقواس user["age"].'
    },
    {
      id: 'js-ju4-q8',
      type: 'tf',
      text: 'هل دالة .filter() تستخرج وتصنع مصفوفة جديدة تضم العناصر التي تحقق شرطاً معيناً فقط؟',
      correct: true,
      explanation: 'نعم، دالة filter تصفي العناصر وفق دالة الفحص.'
    },
    {
      id: 'js-ju4-q9',
      type: 'what',
      text: 'ما هي هذه البنية البرمجية الشائعة جداً في الويب؟',
      code: 'const users = [{id: 1, name: "عمر"}, {id: 2, name: "سارة"}];',
      correct: 'array-objects',
      answer: 'مصفوفة من الكائنات (Array of Objects) تمثل قائمة من السجلات المنظمة مثل جدول المستخدمين أو المنتجات.',
      explanation: 'الصيغة القياسية لبيانات الـ API.'
    },
    {
      id: 'js-ju4-q10',
      type: 'mc',
      text: 'ما ناتج تنفيذ: [1, 2, 3].map(x => x * 10)؟',
      options: ['[10, 20, 30]', '[1, 2, 3]', '60', '[10]'],
      correct: 0,
      explanation: 'كل عنصر يضرب في 10 لتنتج مصفوفة جديدة [10, 20, 30].'
    }
  ],
  ju5: [
    {
      id: 'js-ju5-q1',
      type: 'mc',
      text: 'أي دالة تستخدم لاستهداف عنصر في الصفحة يحمل معرفاً محدداً id؟',
      options: ['document.getElementById("id")', 'document.find("id")', 'document.selectId("id")', 'window.getId("id")'],
      correct: 0,
      explanation: 'getElementById هي الدالة الأسرع لاستهداف المعرف الفريد.'
    },
    {
      id: 'js-ju5-q2',
      type: 'tf',
      text: 'هل الخاصية element.textContent تقوم بتحديث وتغيير النص الظاهر داخل العنصر في صفحة HTML فوراً؟',
      correct: true,
      explanation: 'نعم، textContent تحدث محتوى النص بأمان وسرعة.'
    },
    {
      id: 'js-ju5-q3',
      type: 'what',
      text: 'كيف تتم كتابة خصائص CSS المكونة من كلمتين داخل كود جافاسكريبت؟',
      code: 'element.style.backgroundColor = "blue";',
      correct: 'js-style',
      answer: 'تتحول الشرطة إلى نمط سنام الجمل camelCase مثل element.style.backgroundColor بدلاً من background-color.',
      explanation: 'جافاسكريبت تستخدم camelCase مع خصائص style مثل fontSize و backgroundColor.'
    },
    {
      id: 'js-ju5-q4',
      type: 'mc',
      text: 'ما هي الدالة التي تستمع لتصرفات المستخدم مثل النقر على الأزرار؟',
      options: ['addEventListener("click", ...)', 'onClick(...)', 'listen("press", ...)', 'attachEvent("tap", ...)'],
      correct: 0,
      explanation: 'addEventListener("click", callback) هي الطريقة المعيارية في شجرة DOM.'
    },
    {
      id: 'js-ju5-q5',
      type: 'tf',
      text: 'هل الأمر element.classList.toggle("active") يقوم بإضافة الفئة إذا كانت مفقودة، وحذفها إذا كانت موجودة تلقائياً؟',
      correct: true,
      explanation: 'نعم، أمر toggle يقوم بالتبديل الذكي ثنائي الحالة.'
    },
    {
      id: 'js-ju5-q6',
      type: 'what',
      text: 'ما هو نموذج شجرة DOM باختصار؟',
      code: 'document.querySelector("h1")',
      correct: 'dom-concept',
      answer: 'تمثيل شجري برمجي لكل وسوم ونصوص صفحة الويب يتيح لجافاسكريبت قراءتها والتحكم بها وتعديلها حياً.',
      explanation: 'DOM = Document Object Model.'
    },
    {
      id: 'js-ju5-q7',
      type: 'mc',
      text: 'أي دالة تسمح باستهداف العناصر في الصفحة باستخدام نفس محددات CSS مثل .card أو #logo؟',
      options: ['document.querySelector(...)', 'document.getCss(...)', 'document.findSelector(...)', 'document.fetchElement(...)'],
      correct: 0,
      explanation: 'querySelector تقبل أي محدد CSS قياسي.'
    },
    {
      id: 'js-ju5-q8',
      type: 'tf',
      text: 'هل التعديل عبر element.style يضع التنسيقات كنمط مضمن Inline Style على العنصر في HTML؟',
      correct: true,
      explanation: 'نعم، التعديل المباشر بخاصية style يضيف خاصية style="..." على الوسم.'
    },
    {
      id: 'js-ju5-q9',
      type: 'what',
      text: 'ما الفائدة من classList.add("show")؟',
      code: 'modal.classList.add("show");',
      correct: 'classlist-add',
      answer: 'إضافة فئة show المجهزة في ملف CSS لإظهار النافذة المنبثقة بحركتها وتنسيقها.',
      explanation: 'classList.add تفعل التنسيقات المصممة مسبقاً.'
    },
    {
      id: 'js-ju5-q10',
      type: 'mc',
      text: 'ما هو اسم الحدث الذي يعمل فور كتابة المستخدم لأي حرف داخل حقل الإدخال؟',
      options: ['"input"', '"click"', '"hover"', '"load"'],
      correct: 0,
      explanation: 'الحدث "input" يرصد التغييرات الفورية للحروف أثناء الكتابة.'
    }
  ],
  ju6: [
    {
      id: 'js-ju6-q1',
      type: 'mc',
      text: 'أي دالة تستخدم لتأخير تنفيذ كود معين لمرة واحدة فقط بعد مرور وقت محدد (مثل 3000ms)؟',
      options: ['setTimeout', 'setInterval', 'delayTime', 'wait'],
      correct: 0,
      explanation: 'setTimeout تؤجل التنفيذ لمرة واحدة.'
    },
    {
      id: 'js-ju6-q2',
      type: 'tf',
      text: 'هل دالة setInterval تكرر تنفيذ الكود باستمرار وبشكل دوري كل فترة زمنية حتى يتم إيقافها؟',
      correct: true,
      explanation: 'نعم، setInterval تكرر التنفيذ بلا توقف حتى إيقافها.'
    },
    {
      id: 'js-ju6-q3',
      type: 'what',
      text: 'ما هي ميزة قوالب النصوص العصرية (Template Literals) المكتوبة بعلامة الاقتباس المائلة (` `)؟',
      code: '`مرحباً يا ${userName} درجاتك هي ${points}`',
      correct: 'template-literals',
      answer: 'دمج المتغيرات والعمليات الحسابية مباشرة داخل النصوص عبر ${...} دون الحاجة لتقطيع النصوص بروابط الجمع المربكة.',
      explanation: 'توفر سهولة كبرى في صياغة الجمل الديناميكية.'
    },
    {
      id: 'js-ju6-q4',
      type: 'mc',
      text: 'كيف نخزن معلومة محلياً في متصفح الزائر لتبقى محفوظة حتى بعد إغلاق الحاسوب؟',
      options: ['localStorage.setItem("key", "value")', 'localStorage.save("key", "value")', 'localStorage.write("key", "value")', 'localStorage.add("key", "value")'],
      correct: 0,
      explanation: 'setItem هي الدالة القياسية لتخزين مفتاح وقيمة في localStorage.'
    },
    {
      id: 'js-ju6-q5',
      type: 'tf',
      text: 'هل التخزين المحلي localStorage يستهلك أي تكلفة سيرفرات أو قواعد بيانات مدفوعة؟',
      correct: true,
      explanation: 'مجاني تماماً لأنه يتم على القرص الصلب الخاص بجهاز المستخدم المحلي.'
    },
    {
      id: 'js-ju6-q6',
      type: 'what',
      text: 'كيف نقرأ معلومة محفوظة مسبقاً في التخزين المحلي؟',
      code: 'const user = localStorage.getItem("username");',
      correct: 'localstorage-get',
      answer: 'باستخدام الدالة localStorage.getItem("key") التي تبحث عن المفتاح وتعيد قيمته المخزنة.',
      explanation: 'getItem تسترجع البيانات المحفوظة محلياً.'
    },
    {
      id: 'js-ju6-q7',
      type: 'mc',
      text: 'كيف نوقف عمل المؤقت المتكرر في setInterval لمنعه من مواصلة العمل؟',
      options: ['clearInterval(timerId)', 'stopInterval(timerId)', 'endTimer(timerId)', 'pause(timerId)'],
      correct: 0,
      explanation: 'clearInterval توقف المؤقت باستخدام المعرف العائد من setInterval.'
    },
    {
      id: 'js-ju6-q8',
      type: 'tf',
      text: 'هل أداة fetch() في جافاسكريبت الحديثة تُستخدم لطلب وتبادل البيانات مع السيرفرات والواجهات البرمجية (APIs)؟',
      correct: true,
      explanation: 'نعم، fetch هي الأداة القياسية لإجراء طلبات الشبكة في المتصفح.'
    },
    {
      id: 'js-ju6-q9',
      type: 'what',
      text: 'ما هي صيغة JSON المستخدمة عالمياً لتبادل البيانات؟',
      code: '{"name": "أحمد", "score": 100}',
      correct: 'json-format',
      answer: 'صيغة نصية قياسية خفيفة لتبادل البيانات بين المواقع والخوادم، مبنية على شكل كائنات جافاسكريبت.',
      explanation: 'JSON = JavaScript Object Notation.'
    },
    {
      id: 'js-ju6-q10',
      type: 'mc',
      text: 'أي دالة تحول كائن Object في جافاسكريبت إلى نص بتنسيق JSON ليتم تخزينه محلياً؟',
      options: ['JSON.stringify(obj)', 'JSON.parse(obj)', 'obj.toJson()', 'JSON.toString(obj)'],
      correct: 0,
      explanation: 'JSON.stringify تحول الكائن إلى نص، بينما JSON.parse تعيد النص إلى كائن.'
    }
  ]
};
