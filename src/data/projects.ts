import { Project } from '../types';

export const projectsList: Record<string, Project> = {
  // HTML Projects (6)
  'html-u1': {
    id: 'html-u1',
    title: 'المشروع 1: صفحة الملف الشخصي التقديمي',
    subject: 'HTML',
    desc: 'بناء صفحة تعريفية متكاملة للمطور (Portfolio) باستخدام هيكل HTML5 القياسي والعناوين والفقرات والصور والروابط.',
    reqs: [
      'استخدام هيكل HTML5 القياسي كاملاً مع DOCTYPE و html و head و body مع خاصية dir="rtl"',
      'وضع عنوان رئيسي h1 يحمل اسمك ومهاراتك البرمجية',
      'إدراج فقرتين p تشرحان اهتماماتك وشغفك بتطوير الويب',
      'إضافة رابط a ينقل الزائر إلى حسابك على GitHub أو موقع مفيد',
      'إدراج صورة شخصية img مع تحديد النص البديل alt والأبعاد المناسبة'
    ],
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>الملف الشخصي</title>
  </head>
  <body>
    <!-- ابدأ بكتابة كود مشروعك هنا -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>الملف التعريفي للمطور</title>
  </head>
  <body style="font-family:Arial,sans-serif;padding:24px;line-height:1.7;background:#f9f9fc;color:#222;">
    <h1 style="color:#4B44CC;">أنا مبرمج واجهات أمامية طموح</h1>
    <p>أتعلم لغات HTML و CSS و JavaScript لبناء مواقع ويب عصرية وسريعة تخدم مجتمعي وتوفر تجربة استخدام استثنائية.</p>
    <a href="https://github.com" target="_blank" style="color:#6C63FF;font-weight:bold;text-decoration:none;">
      🔗 تصفح مستودعات أعمالي على GitHub
    </a>
    <br><br>
    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=320" alt="صورة حاسوب البرمجة" width="280" style="border-radius:8px;">
  </body>
</html>`
  },
  'html-u2': {
    id: 'html-u2',
    title: 'المشروع 2: قائمة المقررات وجدول الأسعار',
    subject: 'HTML',
    desc: 'إنشاء صفحة منظمة تضم قائمة مرتبة ومخططاً نقطياً وجدول بيانات مفصلاً للمقررات مع فواصل أفقية وتعليقات.',
    reqs: [
      'إنشاء قائمة مرتبة ol بالخطوات التعليمية لمسار المطور',
      'إنشاء قائمة نقطية ul للمهارات المكتسبة',
      'بناء جدول table يحوي صفوف tr وخلايا رأس th وخلايا بيانات td للأسعار والمستويات',
      'وضع خط فاصل hr بين كل قسم وآخر',
      'إضافة تعليقات برمجية تشرح الغرض من كل جزء'
    ],
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>جدول المقررات</title>
  </head>
  <body>
    <!-- اكتب القوائم والجداول هنا -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>جدول المقررات والمهام</title>
  </head>
  <body style="font-family:Arial,sans-serif;padding:24px;background:#fff;color:#222;">
    <!-- قائمة المهارات المطلوبة -->
    <h2 style="color:#6C63FF;">المهارات المكتسبة في المنصة:</h2>
    <ul>
      <li>هيكلة الصفحات بمعيار HTML5</li>
      <li>تنسيق المظهر بالألوان والخطوط</li>
      <li>بناء الجداول والنماذج المتفاعلة</li>
    </ul>

    <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;">

    <!-- قائمة خطوات العمل -->
    <h2 style="color:#6C63FF;">خطة الدراسة الأسبوعية:</h2>
    <ol>
      <li>مشاهدة الدروس وتدوين الملاحظات</li>
      <li>حل الاختبار التفاعلي لكل وحدة</li>
      <li>بناء المشروع العملي وتطبيقه</li>
    </ol>

    <hr style="border:none;border-top:1px solid #ddd;margin:16px 0;">

    <!-- جدول المقررات -->
    <h2 style="color:#6C63FF;">جدول المستويات:</h2>
    <table border="1" style="width:100%;max-width:360px;border-collapse:collapse;text-align:right;">
      <tr style="background:#f0efff;">
        <th style="padding:8px 12px;">المسار</th>
        <th style="padding:8px 12px;">الساعات</th>
      </tr>
      <tr>
        <td style="padding:8px 12px;">أساسيات الويب</td>
        <td style="padding:8px 12px;">15 ساعة</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;">التصميم المرئي</td>
        <td style="padding:8px 12px;">22 ساعة</td>
      </tr>
    </table>
  </body>
</html>`
  },
  'html-u3': {
    id: 'html-u3',
    title: 'المشروع 3: نموذج تسجيل متكامل مع فيديو توضيحي',
    subject: 'HTML',
    desc: 'تصميم استمارة تسجيل بيانات كاملة تضم حقول نصوص وإيميل وكلمة سر مع زر إرسال ومشغل فيديو تعليمي.',
    reqs: [
      'إنشاء وسم form يجمع حقول التسجيل معاً',
      'حقل input نوع text لاستقبال الاسم بالكامل مع placeholder',
      'حقل input نوع email للتأكد من البريد الإلكتروني',
      'حقل input نوع password لإخفاء كلمة السر',
      'زر button نوع submit لإرسال النموذج',
      'تضمين مشغل فيديو video مع خاصية controls لتوضيح شروط التسجيل'
    ],
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>نموذج التسجيل</title>
  </head>
  <body>
    <!-- اكتب النموذج ومشغل الفيديو هنا -->
    
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>استمارة الانضمام للأكاديمية</title>
  </head>
  <body style="font-family:Arial,sans-serif;padding:30px;background:#f5f5f7;color:#222;">
    <div style="max-width:380px;margin:0 auto;background:#fff;padding:24px;border-radius:12px;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
      <h2 style="color:#6C63FF;margin-top:0;">انضم كمتعلم مجاناً</h2>
      <form>
        <p>
          <label style="font-weight:bold;font-size:14px;">الاسم الكامل:</label><br>
          <input type="text" placeholder="مثال: يوسف حسام عبدالرحمن" style="width:100%;padding:10px;margin-top:4px;border:1px solid #ccc;border-radius:6px;box-sizing:border-box;">
        </p>
        <p>
          <label style="font-weight:bold;font-size:14px;">البريد الإلكتروني:</label><br>
          <input type="email" placeholder="example@email.com" style="width:100%;padding:10px;margin-top:4px;border:1px solid #ccc;border-radius:6px;box-sizing:border-box;">
        </p>
        <p>
          <label style="font-weight:bold;font-size:14px;">كلمة المرور:</label><br>
          <input type="password" placeholder="••••••••" style="width:100%;padding:10px;margin-top:4px;border:1px solid #ccc;border-radius:6px;box-sizing:border-box;">
        </p>
        <button type="submit" style="width:100%;padding:12px;background:#6C63FF;color:#fff;border:none;border-radius:8px;font-weight:bold;cursor:pointer;font-size:15px;">
          إنشاء حساب مجاني فوري
        </button>
      </form>
    </div>
  </body>
</html>`
  },
  'html-u4': {
    id: 'html-u4',
    title: 'المشروع 4: بطاقة منتج متجر إلكتروني',
    subject: 'HTML',
    desc: 'بناء بطاقة منتج تجاري تضم صورة قابلة للنقر وحاوية div ونصوص تمييز span وقائمة مواصفات dl.',
    reqs: [
      'استخدام حاوية div رئيسية لتأطير البطاقة',
      'وضع صورة منتج img قابلة للنقر عبر تغليفها برابط a يفتح في تبويب جديد target="_blank"',
      'استخدام وسم span لتلوين وتكبير سعر الخصم داخل الفقرة',
      'إنشاء قائمة مواصفات ومصطلحات dl تضم dt و dd لشرح مميزات المنتج'
    ],
    starterCode: `<div>
  <!-- بطاقة المنتج -->
</div>`,
    solution: `<div style="max-width:320px;padding:20px;background:#fff;border:1px solid #e2e2ee;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.06);font-family:Arial,sans-serif;direction:rtl;">
  <a href="https://example.com" target="_blank">
    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=320" alt="سماعات رأس لاسلكية" style="width:100%;border-radius:8px;">
  </a>
  <h2 style="font-size:18px;margin:12px 0 6px 0;color:#1e1e2f;">سماعات رأس احترافية</h2>
  <p style="font-size:14px;color:#555;">السعر الحالي: <span style="color:#28A745;font-weight:bold;font-size:18px;">89 دولاراً</span> بدلاً من 130$</p>
  <dl style="font-size:13px;line-height:1.6;margin:10px 0 0 0;border-top:1px solid #eee;padding-top:10px;">
    <dt style="font-weight:bold;color:#6C63FF;">تقنية العزل:</dt>
    <dd style="margin:0 12px 6px 0;color:#666;">عزل ضوضاء فعال ANC متقدم</dd>
    <dt style="font-weight:bold;color:#6C63FF;">عمر البطارية:</dt>
    <dd style="margin:0 12px 6px 0;color:#666;">تعمل لمدة 40 ساعة متواصلة</dd>
  </dl>
</div>`
  },
  'html-u5': {
    id: 'html-u5',
    title: 'المشروع 5: منصة مقالات بهيكلة دلالية',
    subject: 'HTML',
    desc: 'إنشاء صفحة مقالات تستخدم شريط تنقل nav ومقالات article ومعرفات id وفئات class وتضمين نافذة موقع خارجي iframe.',
    reqs: [
      'بناء شريط تنقل دلالي nav يحتوي على 3 روابط رئيسية',
      'استخدام معرف id فريد في الترويسة الرئيسية',
      'إنشاء مقالين على الأقل باستخدام وسم article الدلالي',
      'استخدام فئة class مشتركة لتطبيق تنسيق بطاقات المقالات',
      'تضمين نافذة موقع أو مستند خارجي عبر وسم iframe'
    ],
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <title>منصة المقالات</title>
  </head>
  <body>
    <!-- الهيكل الدلالي هنا -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <title>مدونة المطور العربي</title>
  </head>
  <body style="font-family:Arial,sans-serif;padding:20px;line-height:1.7;background:#fcfcff;color:#222;">
    <nav style="padding:12px;background:#6C63FF;border-radius:8px;margin-bottom:20px;">
      <a href="#about" style="color:#fff;text-decoration:none;margin-left:14px;font-weight:bold;">عن المدونة</a>
      <a href="#articles" style="color:#fff;text-decoration:none;margin-left:14px;font-weight:bold;">المقالات الحديثة</a>
      <a href="#resources" style="color:#fff;text-decoration:none;font-weight:bold;">المراجع</a>
    </nav>
    <section id="about" style="margin-bottom:24px;">
      <h1 style="color:#4B44CC;">مرحباً بكم في مدونتي التقنية</h1>
      <p>أشارك معكم يومياً ملخصات وخبرات تعلم البرمجة الاحترافية.</p>
    </section>
    <section id="articles" style="margin-bottom:24px;">
      <h2 style="color:#6C63FF;">أحدث التدوينات:</h2>
      <article class="post-card" style="padding:14px;background:#fff;border:1px solid #ddd;border-radius:8px;margin-bottom:12px;">
        <h3 style="margin:0 0 6px 0;">أسرار HTML في 2026</h3>
        <p style="margin:0;color:#555;font-size:14px;">لماذا تظل الهيكلة الدلالية أهم عامل لتصدر محركات البحث.</p>
      </article>
      <article class="post-card" style="padding:14px;background:#fff;border:1px solid #ddd;border-radius:8px;">
        <h3 style="margin:0 0 6px 0;">نصائح للمبتدئين</h3>
        <p style="margin:0;color:#555;font-size:14px;">التطبيق العملي اليومي هو مفتاح التمكن الحقيقي.</p>
      </article>
    </section>
  </body>
</html>`
  },
  'html-u6': {
    id: 'html-u6',
    title: 'المشروع 6: صفحة هبوط متوافقة مع محركات البحث SEO',
    subject: 'HTML',
    desc: 'بناء صفحة هبوط كاملة مطابقة لمعايير الويب العالمية، تحتوي على وسوم meta الدقيقة، وترويسة header وتذييل footer وأقسام section وشروحات figure.',
    reqs: [
      'وضع وسوم meta الثلاثية: charset و viewport و description داخل head',
      'بناء ترويسة رئيسية header تضم h1 وشعار وروابط تنقل',
      'تقسيم الصفحة إلى قسمين موضوعيين على الأقل باستخدام وسم section',
      'إدراج شكل توضيحي figure يرافقه شرح رسمي في figcaption',
      'إنشاء تذييل كامل footer يحتوي على حقوق النشر ورابط الخصوصية'
    ],
    starterCode: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <!-- وسوم meta الوصفية -->
  </head>
  <body>
    <!-- صفحة الهبوط الكاملة -->
  </body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="منصة تعليمية عربية مجانية لاحتراف لغات الويب ومسارات العمل الحر">
    <title>منصة كودر سبيس التعليمية</title>
  </head>
  <body style="font-family:Arial,sans-serif;margin:0;padding:0;background:#fbfbfb;color:#222;">
    <header style="background:#1E1D2E;color:#fff;padding:16px 24px;display:flex;justify-content:space-between;align-items:center;">
      <h1 style="margin:0;font-size:22px;color:#6C63FF;">منصة كودر سبيس</h1>
      <nav>
        <a href="#services" style="color:#fff;text-decoration:none;margin-left:12px;">خدماتنا</a>
        <a href="#team" style="color:#fff;text-decoration:none;">فريق العمل</a>
      </nav>
    </header>
    <main style="padding:24px;max-width:700px;margin:0 auto;">
      <section id="services" style="margin-bottom:28px;">
        <h2 style="color:#4B44CC;">ماذا نقدم للمتعلم؟</h2>
        <p>مسارات برمجية تطبيقية تفاعلية مجانية 100% بدون أي تكاليف أو اشتراكات.</p>
      </section>
      <section id="team" style="margin-bottom:28px;">
        <h2 style="color:#4B44CC;">بيئة التعلم الرقمية</h2>
        <figure style="margin:0;text-align:center;">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=360" alt="فريق المبرمجين يتعاون" style="width:100%;max-width:360px;border-radius:8px;">
          <figcaption style="font-size:13px;color:#666;margin-top:8px;">شكل 1: التعاون البرمجي المستمر طريقك للاحتراف.</figcaption>
        </figure>
      </section>
    </main>
    <footer style="background:#0F0E17;color:#aaa;text-align:center;padding:20px;font-size:13px;">
      <p style="margin:0 0 6px 0;">جميع الحقوق محفوظة © 2026 منصة كودر سبيس للبرمجة.</p>
      <a href="#privacy" style="color:#6C63FF;text-decoration:none;">سياسة الخصوصية</a>
    </footer>
  </body>
</html>`
  },

  // CSS Projects (6)
  'css-cu1': {
    id: 'css-cu1',
    title: 'المشروع 7: تصميم هوية خطوط وألوان الصفحة',
    subject: 'CSS',
    desc: 'إنشاء قالب أنماط يحدد الألوان والخطوط وخلفية الصفحة وسمك الخطوط والميلان بتناسق فني جذاب.',
    reqs: [
      'تطبيق ألوان نصوص مميزة color للعناوين والفقرات باستخدام قيم HEX',
      'تحديد لون خلفية داكن ومهيب background-color للصفحة كاملة',
      'ضبط عائلة الخط font-family ليكون خطاً عربياً أنيقاً مع خط احتياطي',
      'تحديد أحجام الخطوط font-size بتسلسل هرمي واضح (العنوان 28px والفقرة 16px)',
      'استخدام font-weight لتثخين العناوين و font-style لإمالة العبارات التوضيحية'
    ],
    starterCode: `/* اكتب قواعد CSS هنا */
body {
}
h1 {
}`,
    solution: `body {
  background-color: #0F0E17;
  color: #FFFFFE;
  font-family: 'Tajawal', Arial, sans-serif;
  padding: 24px;
}

h1 {
  color: #6C63FF;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 8px;
}

p {
  color: #A7A5C0;
  font-size: 16px;
  line-height: 1.8;
}

.highlight {
  color: #FF6584;
  font-style: italic;
}`
  },
  'css-cu2': {
    id: 'css-cu2',
    title: 'المشروع 8: تصميم بطاقة حساب متوسطة وبوردر دائري',
    subject: 'CSS',
    desc: 'تنسيق بطاقة تعريفية متوسطة الشاشة مع حواف مدورة ومسافات تنفس داخلية padding ومحاذاة نصوص دقيقة.',
    reqs: [
      'تطبيق إطار border بلون جذاب وتدوير الحواف عبر border-radius',
      'إعطاء مسافة تنفس داخلية padding مناسبة للبطاقة',
      'توسيط البطاقة أفقياً في منتصف الشاشة عبر margin: auto',
      'محاذاة العناوين بالمنتصف text-align: center',
      'إلغاء الخط السفلي للروابط عبر text-decoration: none'
    ],
    starterCode: `.profile-card {
  /* أكمل التنسيقات */
}`,
    solution: `.profile-card {
  width: 320px;
  margin: 30px auto;
  padding: 24px;
  background-color: #1E1D2E;
  border: 2px solid #6C63FF;
  border-radius: 16px;
  text-align: center;
  color: #fff;
}

.profile-card h2 {
  text-align: center;
  margin-bottom: 12px;
  color: #43E97B;
}

.profile-card a {
  text-decoration: none;
  color: #6C63FF;
  font-weight: bold;
}`
  },
  'css-cu3': {
    id: 'css-cu3',
    title: 'المشروع 9: لافتة عريضة مع صورة خلفية وتفاعل Hover',
    subject: 'CSS',
    desc: 'بناء قسم لافتة رئيسية Hero Banner مع صورة خلفية ممتدة بخاصية cover وأبعاد متجاوبة وتفاعل الأزرار عند التحويم.',
    reqs: [
      'وضع صورة كخلفية background-image مع ضبط background-size: cover',
      'منع تكرار الصورة عبر background-repeat: no-repeat وضبط المركز في المنتصف',
      'تحديد عرض متجاوب يجمع بين width بالنسبة المئوية و max-width بالبكسل',
      'تنسيق أزرار الروابط وإعطاؤها تأثيراً لونياً تفاعلياً عند التحويم :hover'
    ],
    starterCode: `.hero-banner {
  /* التنسيق هنا */
}`,
    solution: `.hero-banner {
  background-image: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  max-width: 500px;
  height: 220px;
  margin: 20px auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.hero-banner a {
  background-color: #6C63FF;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

.hero-banner a:hover {
  background-color: #FF6584;
}`
  },
  'css-cu4': {
    id: 'css-cu4',
    title: 'المشروع 10: نظام الأزرار والشارات التفاعلية',
    subject: 'CSS',
    desc: 'تنظيم محددات الفئات class والمعرفات id وتغيير مؤشرات الفأرة cursor وإخفاء العناصر السرية عبر display: none.',
    reqs: [
      'استهداف فئة البطاقة عبر محدد النقطة .card',
      'استهداف الشارة المميزة الوحيدة عبر محدد الشباك #special-badge',
      'جعل جميع الأزرار تملك مؤشر الفأرة اليدوي cursor: pointer',
      'إنشاء فئة خاصة .hidden تطبق خاصية display: none لإخفاء أي عنصر'
    ],
    starterCode: `/* طبق المحددات هنا */`,
    solution: `.card {
  background-color: #1E1D2E;
  border: 1px solid rgba(108, 99, 255, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin: 16px;
  color: #fff;
}

#special-badge {
  background-color: #FF6584;
  color: #fff;
  padding: 4px 10px;
  border-radius: 99px;
  font-weight: bold;
}

button {
  cursor: pointer;
  padding: 10px 18px;
  background-color: #6C63FF;
  color: white;
  border: none;
  border-radius: 8px;
}

.hidden {
  display: none;
}`
  },
  'css-cu5': {
    id: 'css-cu5',
    title: 'المشروع 11: شبكة بطاقات متناسقة وظلال وتدرجات',
    subject: 'CSS',
    desc: 'دمج قوى التخطيط العصري Flexbox للأشرطة العلوية مع CSS Grid لشبكة البطاقات، وإضافة تدرجات الألوان linear-gradient والظلال.',
    reqs: [
      'استخدام display: flex مع justify-content: space-between لشريط التنقل',
      'بناء شبكة بطاقات متساوية عبر display: grid مع repeat(3, 1fr) و gap مناسب',
      'تطبيق خلفية تدرج لوني انسيابي بديع linear-gradient بزاوية 135deg',
      'تطبيق ظلال ناعمة box-shadow للبطاقات وظلال نصوص text-shadow للعناوين'
    ],
    starterCode: `nav {
}
.grid-cards {
}
.hero-gradient {
}`,
    solution: `nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #1E1D2E;
  color: white;
}

.hero-gradient {
  background: linear-gradient(135deg, #6C63FF, #FF6584);
  padding: 40px;
  text-align: center;
  color: white;
  border-radius: 12px;
  margin: 16px;
}

.hero-gradient h1 {
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
}

.grid-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.15);
  color: #222;
}`
  },
  'css-cu6': {
    id: 'css-cu6',
    title: 'المشروع 12: واجهة تفاعلية متحركة ومتجاوبة للجوال',
    subject: 'CSS',
    desc: 'إضفاء الحركات السينمائية السلسة عبر transition والتدوير والتكبير transform، مع حركة نبض تلقائية @keyframes واستعلام وسائط @media للهواتف.',
    reqs: [
      'تدوير شارة الخصم بزاوية مائلة عبر transform: rotate()',
      'تكبير البطاقات برفق عند التحويم عبر transform: scale()',
      'إعطاء حركة انسيابية ناعمة عبر transition: all 0.3s ease',
      'بناء رسوم متحركة تلقائية تنبض باستمرار عبر @keyframes و animation',
      'استخدام @media (max-width: 768px) لتحويل العرض إلى عمودي على الهواتف'
    ],
    starterCode: `.badge {
}
.card:hover {
}
@media (max-width: 768px) {
}`,
    solution: `.badge {
  transform: rotate(-6deg);
  display: inline-block;
  background: #FF6584;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
}

.card {
  transition: all 0.3s ease;
  background: #1E1D2E;
  color: white;
  padding: 20px;
  border-radius: 12px;
}

.card:hover {
  transform: scale(1.04);
  box-shadow: 0 12px 32px rgba(108, 99, 255, 0.3);
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.live-indicator {
  animation: pulse 1.5s infinite;
}

@media (max-width: 768px) {
  .nav-bar, .cards-container {
    flex-direction: column;
    gap: 12px;
  }
}`
  },

  // JavaScript Projects (6)
  'js-ju1': {
    id: 'js-ju1',
    title: 'المشروع 13: حاسبة متوسط درجات الطالب',
    subject: 'JavaScript',
    desc: 'برنامج جافاسكريبت يحسب مجموع الدرجات والمتوسط الحسابي مع طباعة تقرير مفصل بالطرفية وفحص أنواع البيانات.',
    reqs: [
      'تعريف ثوابت const لاسم الطالب واسم الدورة',
      'تعريف متغيرات let لدرجات المواد المختلفة (HTML, CSS, JS)',
      'حساب المجموع الكلي والمتوسط الحسابي عبر العمليات الرياضية',
      'طباعة التقرير الكامل في الطرفية باستخدام console.log'
    ],
    starterCode: `// اكتب كود حساب المتوسط هنا`,
    solution: `const studentName = "أحمد محمد";
const course = "مسار الويب الشامل";

let htmlScore = 90;
let cssScore = 85;
let jsScore = 95;

const totalScore = htmlScore + cssScore + jsScore;
const average = totalScore / 3;

console.log("تقرير أداء الطالب:", studentName);
console.log("المسار:", course);
console.log("المجموع الإجمالي:", totalScore);
console.log("المعدل النهائي:", average);`
  },
  'js-ju2': {
    id: 'js-ju2',
    title: 'المشروع 14: نظام تقييم الدرجات الذكي والشهادات',
    subject: 'JavaScript',
    desc: 'نظام شروط منطقية if/else يفحص درجة الطالب ويمنحه التقدير المستحق (ممتاز، جيد، مقبول، راسب) مع استخدام المعامل الشرطي الثلاثي.',
    reqs: [
      'استخدام جمل الشرط if و else if و else لتقييم الدرجة',
      'استخدام المقارنة الصارمة والرموز المنطقية >= و <',
      'استخدام المعامل الشرطي الثلاثي (Ternary) لتحديد رسالة النجاح في سطر واحد',
      'طباعة النتيجة والتقدير المستحق في الطرفية'
    ],
    starterCode: `let score = 88;
// ضع الشروط هنا`,
    solution: `let score = 88;
let grade = "";

if (score >= 90) {
  grade = "ممتاز مرتفع (A+) 🌟";
} else if (score >= 80) {
  grade = "جيد جداً (B) 👏";
} else if (score >= 60) {
  grade = "مقبول (C) 👍";
} else {
  grade = "يحتاج لإعادة المحاولة (F)";
}

const statusMsg = score >= 60 ? "ناجح ومستحق للشهادة" : "معاد للاختبار";

console.log("الدرجة:", score);
console.log("التقدير:", grade);
console.log("الحالة:", statusMsg);`
  },
  'js-ju3': {
    id: 'js-ju3',
    title: 'المشروع 15: محول العملات وحاسبة الخصم المتقدمة',
    subject: 'JavaScript',
    desc: 'مجموعة دوال عادية وسهمية Arrow Functions لحساب خصومات المتاجر وتحويل العملات مع قيم افتراضية للمعاملات.',
    reqs: [
      'إنشاء دالة تقليدية function لحساب السعر بعد الخصم مع قيمة افتراضية للنسبة المئوية',
      'إنشاء دالة سهمية Arrow Function لتحويل السعر من الدولار إلى الريال السعودي',
      'إرجاع النتائج باستخدام كلمة return الصريحة',
      'استدعاء الدوال وتمرير أسعار حقيقية وطباعة الفاتورة النهائية'
    ],
    starterCode: `// اكتب دوال الحساب هنا`,
    solution: `// دالة حساب الخصم بنسبة افتراضية 15%
function applyDiscount(price, discountPercent = 15) {
  const discountAmount = price * (discountPercent / 100);
  return price - discountAmount;
}

// دالة سهمية لتحويل الدولار إلى ريال
const convertUsdToSar = (usd) => usd * 3.75;

const originalPrice = 200;
const finalPriceUsd = applyDiscount(originalPrice, 20);
const finalPriceSar = convertUsdToSar(finalPriceUsd);

console.log("السعر الأصلي:", originalPrice);
console.log("السعر بعد الخصم (USD):", finalPriceUsd);
console.log("السعر بالريال (SAR):", finalPriceSar);`
  },
  'js-ju4': {
    id: 'js-ju4',
    title: 'المشروع 16: نظام إدارة وتصفية منتجات المتجر',
    subject: 'JavaScript',
    desc: 'إدارة مصفوفة من كائنات المنتجات (Array of Objects) وإضافة منتج جديد، ثم استخراج وتصفية المنتجات المتوفرة فقط باستخدام filter و map.',
    reqs: [
      'إنشاء مصفوفة كائنات تحوي منتجات بكل من (name, price, inStock)',
      'إضافة منتج جديد للمصفوفة باستخدام دالة push',
      'استخراج المنتجات المتوفرة فقط (inStock === true) باستخدام دالة .filter()',
      'استخراج أسماء المنتجات المتوفرة فقط في قائمة نصوص جديدة باستخدام دالة .map()'
    ],
    starterCode: `// إدارة المنتجات`,
    solution: `const products = [
  { id: 1, name: "ماوس لاسلكي", price: 75, inStock: true },
  { id: 2, name: "شاشة ألعاب 24 بوصة", price: 180, inStock: false },
  { id: 3, name: "لوحة مفاتيح ميكانيكية", price: 35, inStock: true },
  { id: 4, name: "سماعات محيطية", price: 60, inStock: true }
];

// إضافة منتج جديد
products.push({ id: 5, name: "كاميرا ويب عالية الدقة", price: 25, inStock: true });

// فلترة المتوفر في المخزن فقط
const availableProducts = products.filter(item => item.inStock);

// تحويل المنتجات المتاحة إلى مصفوفة أسماء فقط
const availableNames = availableProducts.map(item => item.name);

console.log("عدد المنتجات المتوفرة:", availableProducts.length);
console.log("أسماء المنتجات المتوفرة للبيع:", availableNames);`
  },
  'js-ju5': {
    id: 'js-ju5',
    title: 'المشروع 17: عداد رقمي تفاعلي مع تبديل السمة الليلية',
    subject: 'JavaScript',
    desc: 'تطبيق ويب تفاعلي بالكامل يربط جافاسكريبت مع شجرة عناصر DOM لزيادة ونقصان عداد النقاط وتبديل الوضع الليلي بضغطة زر.',
    reqs: [
      'استهداف عناصر الصفحة باستخدام document.getElementById و querySelector',
      'تحديث الرقم المعروض على الشاشة برمجياً عبر خاصية textContent',
      'إضافة مستمع للأحداث addEventListener("click") لأزرار الزيادة والنقصان',
      'تبديل مظهر الصفحة إلى الوضع الليلي باستخدام classList.toggle("dark")'
    ],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <h2 id="counter">0</h2>
  <button id="inc-btn">زيادة +</button>
  <button id="dec-btn">نقصان -</button>
  <script>
    // تحكم في شجرة DOM هنا
  </script>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; padding: 30px; transition: all 0.3s; }
    .dark-mode { background: #121120; color: #fff; }
    button { padding: 8px 16px; margin: 4px; border-radius: 8px; cursor: pointer; }
  </style>
</head>
<body>
  <button id="theme-btn">تبديل الوضع الليلي</button>
  <h1 id="counter" style="font-size: 48px; color: #6C63FF;">0</h1>
  <button id="inc-btn" style="background: #43E97B; color: #000; font-weight: bold;">+ زيادة</button>
  <button id="dec-btn" style="background: #FF6584; color: #fff; font-weight: bold;">- نقصان</button>

  <script>
    let count = 0;
    const counterEl = document.getElementById("counter");
    const incBtn = document.getElementById("inc-btn");
    const decBtn = document.getElementById("dec-btn");
    const themeBtn = document.getElementById("theme-btn");

    incBtn.addEventListener("click", () => {
      count++;
      counterEl.textContent = count;
    });

    decBtn.addEventListener("click", () => {
      count--;
      counterEl.textContent = count;
    });

    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  </script>
</body>
</html>`
  },
  'js-ju6': {
    id: 'js-ju6',
    title: 'المشروع 18: تطبيق الملاحظات الذكية والساعة الحية',
    subject: 'JavaScript',
    desc: 'بناء ساعة رقمية تتحدث كل ثانية بـ setInterval، ومفكرة تحفظ نصوص المستخدم محلياً في localStorage تلقائياً حتى لا تضيع عند إغلاق الصفحة.',
    reqs: [
      'تحديث الساعة الرقمية الحية باستمرار كل ثانية عبر setInterval',
      'صياغة النصوص الترحيبية الحديثة عبر Template Literals المائلة',
      'حفظ الملاحظة فور كتابتها في التخزين المحلي عبر localStorage.setItem',
      'استرجاع الملاحظة المحفوظة مسبقاً عند فتح الصفحة عبر localStorage.getItem'
    ],
    starterCode: `<!DOCTYPE html>
<html>
<body>
  <div id="clock">00:00:00</div>
  <textarea id="note"></textarea>
</body>
</html>`,
    solution: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; padding: 24px; background: #0F0E17; color: #fff; }
    #clock { font-size: 42px; font-family: monospace; color: #43E97B; margin-bottom: 20px; }
    textarea { width: 90%; max-width: 400px; height: 100px; padding: 12px; border-radius: 8px; }
  </style>
</head>
<body>
  <h2>الساعة الرقمية الحية:</h2>
  <div id="clock">--:--:--</div>

  <h3>ملاحظتي السريعة (محفوظة محلياً في LocalStorage):</h3>
  <textarea id="note-box" placeholder="اكتب ملاحظاتك هنا وستبقى للأبد حتى لو أغلقت المتصفح..."></textarea>

  <script>
    // 1. تشغيل الساعة الحية عبر setInterval
    setInterval(() => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('ar-EG');
      document.getElementById("clock").textContent = timeStr;
    }, 1000);

    // 2. إدارة التخزين المحلي LocalStorage
    const noteBox = document.getElementById("note-box");
    noteBox.value = localStorage.getItem("saved_quick_note") || "";

    noteBox.addEventListener("input", (e) => {
      localStorage.setItem("saved_quick_note", e.target.value);
    });
  </script>
</body>
</html>`
  }
};
