export interface KnowledgeTopic {
  id: string;
  keywords: string[];
  title: string;
  category: 'ai-web' | 'ai-python' | 'web-dev' | 'troubleshoot';
  summary: string;
  codeSnippet?: string;
  codeLang?: string;
  tips?: string[];
}

export const aiKnowledgeBase: KnowledgeTopic[] = [
  // ==========================================
  // 1. Web AI Libraries (مكتبات الذكاء الاصطناعي في المتصفح)
  // ==========================================
  {
    id: 'tensorflow-js',
    keywords: ['tensorflow', 'tensorflow.js', 'tfjs', 'تنسرفلو', 'تعلم الالة', 'ذكاء اصطناعي', 'تدريب نموذج', 'تصنيف صور'],
    title: 'مكتبة TensorFlow.js للذكاء الاصطناعي في المتصفح',
    category: 'ai-web',
    summary: 'تعد TensorFlow.js المكتبة الرسمية من Google لتشغيل وتدريب نماذج تعلم الآلة (Machine Learning) مباشرة داخل متصفح الويب أو بيئة Node.js.\n\nتتميز باستغلال عتاد كرت الشاشة (WebGL / WebGPU) للعمل بسرعة فائقة وحماية خصوصية بيانات المستخدمين دون إرسالها لأي خادم خارجي.',
    codeSnippet: `// استيراد عبر CDN أو npm:
// import * as tf from '@tensorflow/tfjs';

// 1. تعريف نموذج عصبي بسيط:
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

// 2. بيانات التدريب البسيطة: العلاقة y = 2x
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-2, 0, 2, 4, 6, 8], [6, 1]);

// 3. تدريب النموذج:
await model.fit(xs, ys, { epochs: 100 });

// 4. التنبؤ بقيمة جديدة (مثلاً x = 10)
const prediction = model.predict(tf.tensor2d([10], [1, 1]));
prediction.print(); // النتيجة تقريباً 20!`,
    codeLang: 'javascript',
    tips: [
      'يمكنك تحويل أي نموذج مدرب بلغة بايثون إلى المتصفح عبر أداة tfjs-converter.',
      'تتوفر نماذج جاهزة فورية مثل MobileNet لتصنيف الصور و PoseNet لتتبع حركات الجسم.'
    ]
  },
  {
    id: 'transformers-js',
    keywords: ['transformers', 'transformers.js', 'ترانسفورمرز', 'huggingface', 'نماذج لغوية', 'تشغيل llm محليا', 'ترجمة آلية'],
    title: 'مكتبة Transformers.js (من Hugging Face)',
    category: 'ai-web',
    summary: 'تمكنك Transformers.js من تشغيل أحدث نماذج الذكاء الاصطناعي التوليدي والنماذج اللغوية الكبيرة (LLMs) مباشرة في المتصفح بدون سيرفر، بالاعتماد على تقنية ONNX Runtime ومسرعات WebGPU.\n\nتدعم مهام تلخيص النصوص، تحليل المشاعر، تصنيف الصوت، والتعرف الصوتي (Whisper)!',
    codeSnippet: `// التثبيت: npm install @xenova/transformers
import { pipeline } from '@xenova/transformers';

// تجهيز خط المعالجة لتحليل المشاعر:
const classifier = await pipeline('sentiment-analysis');

// فحص النص:
const result = await classifier('أنا سعيد ومتحمس جداً لتعلم البرمجة!');
console.log(result); // [{ label: 'POSITIVE', score: 0.9998 }]`,
    codeLang: 'javascript',
    tips: [
      'النماذج يتم تخزينها مؤقتاً في متصفح المستخدم فلا يعاد تحميلها كل مرة.',
      'اختر دائماً نماذج خفيفة مخصصة للويب مثل Xenova/distilbert.'
    ]
  },
  {
    id: 'brain-js',
    keywords: ['brain.js', 'شبكات عصبية', 'برين', 'brainjs', 'تعلم عميق بسيط'],
    title: 'مكتبة Brain.js السريعة للمبتدئين',
    category: 'ai-web',
    summary: 'مكتبة خفيفة وظريفة للغاية تتيح للمطورين بناء شبكات عصبية (Neural Networks) بسيطة بعدة أسطر فقط دون الحاجة لمعادلات رياضية معقدة.\n\nتستخدم في التعرف على الألوان، التنبؤ البسيط، وتصنيف النصوص.',
    codeSnippet: `// استخدام Brain.js
const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// تدريب الشبكة لتحديد لون الخط الأنسب (فاتح أو داكن) حسب لون الخلفية:
net.train([
  { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { darkText: 1 } },
  { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { lightText: 1 } },
  { input: { r: 0.9, g: 0.9, b: 0.9 }, output: { darkText: 1 } }
]);

const output = net.run({ r: 0.05, g: 0.05, b: 0.05 }); // خلفية سوداء تقريباً
console.log(output); // { lightText: 0.98 } -> يوصي بالخط الفاتح!`,
    codeLang: 'javascript',
    tips: [
      'ممتازة للألعاب التفاعلية وتطبيقات Node.js الخفيفة.',
      'تدعم الشبكات المتكررة RNN للنصوص التسلسلية.'
    ]
  },
  {
    id: 'mediapipe',
    keywords: ['mediapipe', 'ميديا بايب', 'تتبع اليد', 'التعرف على الوجه', 'رؤية حاسوبية', 'كاميرا ذكاء اصطناعي'],
    title: 'مكتبة MediaPipe من Google للرؤية الحاسوبية',
    category: 'ai-web',
    summary: 'أداة خارقة من Google تقدم معالجة بصرية فورية لأكثر من 60 إطاراً في الثانية من الكاميرا مباشرة: تتبع حركات اليد، نقاط الوجه الدقيقة (Face Mesh)، وضعيات الجسم، وتجزئة الخلفية.',
    codeSnippet: `// استيراد MediaPipe للكشف عن وضعية اليد
import { HandLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';

const vision = await FilesetResolver.forVisionTasks(
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm'
);

const handLandmarker = await HandLandmarker.createFromOptions(vision, {
  baseOptions: { modelAssetPath: 'hand_landmarker.task' },
  runningMode: 'VIDEO',
  numHands: 2 // تتبع يدين معاً
});

// تحليل إطار الفيديو:
// const results = handLandmarker.detectForVideo(videoElement, timestamp);`,
    codeLang: 'javascript',
    tips: [
      'تمنحك إمكانية بناء ألعاب وتطبيقات يتم التحكم بها بحركات اليد أمام الكاميرا!',
      'تعمل بسلاسة فائقة حتى على الهواتف الذكية المتوسطة.'
    ]
  },
  {
    id: 'langchain-js',
    keywords: ['langchain', 'langchain.js', 'لانج تشين', 'ai agents', 'وكلاء ذكاء اصطناعي', 'rag', 'دمج الذكاء الاصطناعي'],
    title: 'إطار LangChain.js لبناء تطبيقات الـ AI المتقدمة',
    category: 'ai-web',
    summary: 'إطار العمل الأشهر عالمياً لربط النماذج اللغوية بالبيانات الخارجية والأدوات وبناء الوكلاء الأذكياء (AI Agents). يتيح لك ربط نماذج (مثل Gemini أو ChatGPT) بملفات PDF وقواعد المعرفة الخاصة بك عبر تقنية RAG (Retrieval-Augmented Generation).',
    codeSnippet: `import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  temperature: 0.7,
});

const prompt = PromptTemplate.fromTemplate(
  "اشرح لي مفهوم {concept} بلغة برمجية مبسطة مع مثال عملي."
);

const chain = prompt.pipe(model);
const response = await chain.invoke({ concept: "الدوال السهمية في جافاسكريبت" });
console.log(response.content);`,
    codeLang: 'javascript',
    tips: [
      'يدعم استدعاء الأدوات الخارجية (Tool Calling) تلقائياً.',
      'يسهل ربط قواعد البيانات المتجهة Vector Databases.'
    ]
  },
  {
    id: 'gemini-api-web',
    keywords: ['gemini', 'gemini api', 'جيميناي', 'جوجل جيميناي', 'ربط api ذكاء اصطناعي', 'fetch ai', 'استدعاء نموذج لغوي'],
    title: 'الاتصال بنماذج الذكاء الاصطناعي السحابية عبر APIs',
    category: 'ai-web',
    summary: 'الطريقة التقليدية لربط خدمات الذكاء الاصطناعي السحابية (Cloud REST APIs) بموقعك عبر استدعاء fetch() من المتصفح إلى السيرفر الخاص بك.\n\nتتيح الحصول على ردود ذكية جداً وإرجاع كائنات JSON منظمة لتحديث عناصر الويب ديناميكياً.',
    codeSnippet: `// استدعاء من الواجهة الأمامية:
async function askAI(userPrompt) {
  const response = await fetch('/api/chat', { // مسار API خاص بالسيرفر
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: userPrompt })
  });
  const data = await response.json();
  console.log("رد المساعد الذكي:", data.reply);
  return data.reply;
}`,
    codeLang: 'javascript',
    tips: [
      'لا تضع أبداً مفاتيح API الخاصة في كود المتصفح المكشوف، بل اجعل الطلب يمر عبر السيرفر الوسيط (Proxy Route).'
    ]
  },

  // ==========================================
  // 2. Python AI & ML Libraries (مكتبات الذكاء في بايثون للمقارنة)
  // ==========================================
  {
    id: 'pytorch-tensorflow-python',
    keywords: ['pytorch', 'بايثون ذكاء اصطناعي', 'باي تورتش', 'tensorflow بايثون', 'تعلم عميق', 'deep learning'],
    title: 'مكتبتا PyTorch و TensorFlow في بايثون',
    category: 'ai-python',
    summary: 'الركيزتان الأساسيتان في عالم أبحاث وتطوير الذكاء الاصطناعي في بيئة بايثون: PyTorch (من شركة Meta) و TensorFlow (من Google).\n\nتُستخدم لتدريب النماذج الضخمة على السيرفرات القوية، ثم تصديرها بصيغ مثل ONNX أو TFJS لتعمل في المتصفحات.',
    codeSnippet: `# نموذج مصنف بسيط في PyTorch
import torch
import torch.nn as nn

class SimpleClassifier(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Linear(10, 2) # 10 مدخلات ومخرجان
        
    def forward(self, x):
        return self.fc(x)

model = SimpleClassifier()
print(model)`,
    codeLang: 'python',
    tips: [
      'تتميز PyTorch بسهولة التجربة والتنقيح للأبحاث الأكاديمية.',
      'تتميز TensorFlow بتوافقيتها العالية مع بيئات الإنتاج و Keras.'
    ]
  },
  {
    id: 'scikit-learn-pandas',
    keywords: ['pandas', 'numpy', 'scikit-learn', 'sklearn', 'تحليل البيانات', 'خوارزميات انحدار', 'مصفوفات بايثون'],
    title: 'ثالوث معالجة البيانات: Pandas و NumPy و Scikit-learn',
    category: 'ai-python',
    summary: 'الأساس المتين لكل عالم بيانات: NumPy للعمليات الرياضية السريعة والمصفوفات، Pandas لتحليل الجداول وملفات Excel و CSV، و Scikit-learn للخوارزميات الكلاسيكية (الانحدار الخطي، أشجار القرار، التجميع).',
    codeSnippet: `import pandas as pd
from sklearn.linear_model import LinearRegression

# تجهيز البيانات
data = pd.DataFrame({
    'area': [80, 120, 150, 200],
    'price': [160, 240, 300, 400]
})

model = LinearRegression()
model.fit(data[['area']], data['price'])

# التنبؤ بسعر شقة مساحتها 100 متر
print("السعر المتوقع:", model.predict([[100]])[0]) # 200`,
    codeLang: 'python',
    tips: [
      'تعد الخطوة الأولى الضرورية قبل الانتقال إلى الشبكات العصبية العميقة.'
    ]
  },

  // ==========================================
  // 3. Web Development Essentials & Libraries
  // ==========================================
  {
    id: 'react-essentials',
    keywords: ['react', 'رياكت', 'hooks', 'usestate', 'useeffect', 'مكونات', 'كيف يعمل react'],
    title: 'أساسيات مكتبة React.js للواجهات التفاعلية',
    category: 'web-dev',
    summary: 'المكتبة الأكثر طلباً في سوق العمل لبناء تطبيقات الصفحة الواحدة (Single Page Applications).\n\nتعتمد على تقسيم الصفحة إلى مكونات صغيرة (Components) وإدارة الحالة التفاعلية عبر دوال Hooks.',
    codeSnippet: `import React, { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>العداد: {count}</h2>
      <button onClick={() => setCount(count + 1)}>زيادة +</button>
      <button onClick={() => setCount(count - 1)}>نقصان -</button>
    </div>
  );
}`,
    codeLang: 'jsx',
    tips: [
      'تستخدم لغة JSX التي تجمع كود HTML مع قوة JavaScript في ملف واحد.',
      'تعتمد على تقنية Virtual DOM لتحديث العناصر المتغيرة بسرعة صاروخية دون إعادة تحميل الصفحة.'
    ]
  },
  {
    id: 'tailwind-css',
    keywords: ['tailwind', 'تيلويند', 'فئات تيلويند', 'tailwind css', 'تنسيق حديث'],
    title: 'إطار العمل السريع Tailwind CSS',
    category: 'web-dev',
    summary: 'إطار التنسيق الأكثر شعبية في عام 2026. يمنحك فئات مساعدة جاهزة (Utility Classes) تكتبها مباشرة داخل وسوم HTML دون الحاجة لفتح ملفات CSS منفصلة.\n\nفئات مثل flex و p-4 و text-white و rounded-xl تتيح لك بناء واجهات متناسقة وفورية.',
    codeSnippet: `<div class="bg-indigo-600 text-white p-6 rounded-2xl shadow-xl flex items-center justify-between">
  <div>
    <h3 class="text-xl font-bold">بطاقة تيلويند العصرية</h3>
    <p class="text-sm opacity-90">تصميم جذاب وسريع جداً في الإنجاز!</p>
  </div>
  <button class="bg-white text-indigo-600 px-4 py-2 rounded-xl font-bold hover:bg-gray-100 transition">
    تفاعل الآن
  </button>
</div>`,
    codeLang: 'html',
    tips: [
      'يقلل حجم ملفات الـ CSS النهائية بدرجة مذهلة عبر تنظيف الفئات غير المستخدمة.',
      'يوفر تناسقاً فائقاً في المسافات والظلال والألوان.'
    ]
  },
  {
    id: 'flexbox-grid',
    keywords: ['flex', 'flexbox', 'فليكس بوكس', 'grid', 'جريد', 'شبكة', 'توسيط', 'محاذاة'],
    title: 'قوتا التخطيط المعاصر: Flexbox و Grid',
    category: 'web-dev',
    summary: 'القاعدتان الأساسيتان لتخطيط المواقع: Flexbox مثالي للتوزيع على بعد واحد (مثل أشرطة التنقل Navbars)، و CSS Grid مخصص للشبكات ثنائية الأبعاد (صفوف وأعمدة معاً مثل معارض المنتجات).',
    codeSnippet: `/* لتوسيط أي عنصر في منتصف الشاشة عبر Flexbox: */
.parent {
  display: flex;
  justify-content: center; /* أفقياً */
  align-items: center;     /* عمودياً */
  min-height: 200px;
}

/* تقسيم فوري إلى أعمدة متجاوبة عبر Grid: */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`,
    codeLang: 'css',
    tips: [
      'استخدم Flexbox دائماً لتوسيط العناصر بدلاً من الطرق القديمة مثل margin: 0 auto;',
      'خاصية gap تغنيك عن كتابة هوامش margins يدوية بين العناصر.'
    ]
  },
  {
    id: 'async-await-fetch',
    keywords: ['fetch', 'async', 'await', 'بروميس', 'promise', 'طلب بيانات', 'اتصال بالسيرفر', 'api'],
    title: 'العمليات غير المتزامنة: async / await و fetch()',
    category: 'web-dev',
    summary: 'الأسلوب القياسي لتنفيذ المهام التي تحتاج وقتاً (مثل تحميل البيانات من الإنترنت) دون تجميد شاشة المستخدم.\n\nتستخدم الكلمات async و await لقراءة الردود البرمجية بشكل خطي ومقروء وسهل.',
    codeSnippet: `async function loadData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error('فشل الاتصال بالخادم');
    
    const post = await response.json();
    console.log("عنوان المنشور:", post.title);
  } catch (error) {
    console.error("حدث خطأ أثناء جلب البيانات:", error.message);
  }
}

loadData();`,
    codeLang: 'javascript',
    tips: [
      'احرص دائماً على تغليف كود fetch بكتلة try / catch لرصد انقطاع الاتصال بلباقة.'
    ]
  },
  {
    id: 'localstorage-cookies',
    keywords: ['localstorage', 'تخزين محلي', 'حفظ بيانات الزائر', 'sessionstorage', 'cookies', 'كوكيز'],
    title: 'حفظ بيانات الزائر في المتصفح (LocalStorage)',
    category: 'web-dev',
    summary: 'تتيح لك تقنية localStorage حفظ بيانات المستخدم في جهازه المحلي بدون الحاجة إلى أي قاعدة بيانات أو سيرفر.\n\nتخزن البيانات على شكل مفاتيح وقيم (Key-Value) وتبقى محفوظة حتى لو أعاد تشغيل جهازه بالكامل.',
    codeSnippet: `// 1. حفظ معلومة:
localStorage.setItem('theme', 'dark');

// 2. قراءة المعلومة:
const currentTheme = localStorage.getItem('theme'); // 'dark'

// 3. حفظ بيانات مركبة (عبر تحويلها إلى نص JSON):
const user = { name: 'أحمد', score: 120 };
localStorage.setItem('user_profile', JSON.stringify(user));

// 4. استرجاع البيانات المركبة:
const savedUser = JSON.parse(localStorage.getItem('user_profile'));
console.log(savedUser.name); // أحمد`,
    codeLang: 'javascript',
    tips: [
      'السعة التخزينية المتاحة تبلغ حوالي 5 إلى 10 ميجابايت، وهي كافية جداً للتطبيقات العادية.',
      'إذا أردت مسح البيانات عند إغلاق التبويب فقط فاستخدم sessionStorage.'
    ]
  },
  {
    id: 'dom-manipulation',
    keywords: ['dom', 'queryselector', 'addeventlistener', 'تعديل عناصر', 'شجرة دوم', 'تفاعل الواجهة'],
    title: 'التحكم بعناصر الصفحة (DOM Manipulation)',
    category: 'web-dev',
    summary: 'تعد شجرة DOM هي لغة التفاهم بين جافاسكريبت ووسوم صفحتك. من خلالها تستطيع تغيير النصوص، إخفاء العناصر، وتعديل الألوان استجابة لنقرات المستخدم.',
    codeSnippet: `// 1. استهداف العنصر بمحدد CSS Selector:
const titleEl = document.querySelector('#main-title');
const btn = document.querySelector('.action-btn');

// 2. تعديل النص والمظهر:
titleEl.textContent = 'أهلاً بك في عالم التفاعل!';

// 3. الاستجابة للنقر:
btn.addEventListener('click', () => {
  titleEl.style.color = '#43E97B';
  document.body.classList.toggle('dark-mode');
});`,
    codeLang: 'javascript',
    tips: [
      'استخدم textContent دائماً لحقن النصوص وتجنب ثغرات XSS الناتجة عن innerHTML عند التعامل مع مدخلات المستخدمين.'
    ]
  }
];

// Helper: Normalize Arabic text for intelligent fuzzy matching
export function normalizeArabic(text: string): string {
  return text
    .toLowerCase()
    .replace(/[أإآ]/g, 'ا')
    .replace(/[ة]/g, 'ه')
    .replace(/[ى]/g, 'ي')
    .replace(/[\u064B-\u065F]/g, '') // remove tashkeel
    .replace(/[^\w\s\u0600-\u06FF]/gi, ' ') // replace punctuation with spaces
    .trim();
}

// Smart Search: finds best matching topic from knowledge base
export function findMatchingTopic(query: string): KnowledgeTopic | null {
  const normQuery = normalizeArabic(query);
  const words = normQuery.split(/\s+/).filter((w) => w.length > 1);

  let bestTopic: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of aiKnowledgeBase) {
    let score = 0;

    // Check direct keyword match
    for (const kw of topic.keywords) {
      const normKw = normalizeArabic(kw);
      if (normQuery.includes(normKw)) {
        score += 15;
      } else {
        // partial word match
        for (const word of words) {
          if (normKw.includes(word)) {
            score += 3;
          }
        }
      }
    }

    // Check title match
    const normTitle = normalizeArabic(topic.title);
    for (const word of words) {
      if (normTitle.includes(word)) {
        score += 4;
      }
    }

    if (score > highestScore && score >= 4) {
      highestScore = score;
      bestTopic = topic;
    }
  }

  return bestTopic;
}
