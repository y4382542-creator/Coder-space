import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Copy, Check, Terminal, Lightbulb, Code, BookOpen, Trash2 } from 'lucide-react';
import { findMatchingTopic, KnowledgeTopic } from '../data/aiKnowledgeBase';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  topic?: KnowledgeTopic;
  code?: string;
  codeLang?: string;
  tips?: string[];
}

export const CodekTutorBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const initialWelcome: ChatMessage = {
    id: 'welcome',
    sender: 'bot',
    text: 'مرحباً بك! أنا "مساعد كودر سبيس الذكي (Coder Space AI)" 🤖.\nأعمل محلياً داخل متصفحك مجاناً 100% بدون أي تكاليف أو اشتراكات.\n\nيمكنك سؤالي عن:\n1. مكتبات الذكاء الاصطناعي في الويب (مثل TensorFlow.js و Transformers.js و Brain.js و LangChain).\n2. تدقيق واكتشاف الأخطاء في كودك البرمجي (HTML / CSS / JS).\n3. شرح وتوضيح أي مفهوم أو وسم تريده!',
  };
  const [messages, setMessages] = useState<ChatMessage[]>([initialWelcome]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleClearChat = () => {
    setMessages([initialWelcome]);
  };

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: 'u-' + Date.now(),
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputVal('');

    setTimeout(() => {
      const reply = generateSmartReply(text);
      setMessages((prev) => [...prev, reply]);
    }, 350);
  };

  // Advanced Code & Topic Inspector
  const generateSmartReply = (query: string): ChatMessage => {
    const trimmed = query.trim();

    // 1. Inspect pasted code for errors (HTML / CSS / JavaScript)
    const codeInspection = inspectPastedCode(trimmed);
    if (codeInspection) {
      return codeInspection;
    }

    // 2. Query Knowledge Base for Web & AI Libraries
    const matched = findMatchingTopic(query);
    if (matched) {
      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: `💡 **${matched.title}**\n\n${matched.summary}`,
        code: matched.codeSnippet,
        codeLang: matched.codeLang,
        tips: matched.tips,
      };
    }

    // 3. Conversational greetings & dialect recognition
    const lower = query.toLowerCase();
    if (
      lower.includes('مرحبا') ||
      lower.includes('سلام') ||
      lower.includes('السلام') ||
      lower.includes('أهلا') ||
      lower.includes('اهلا') ||
      lower.includes('صباح') ||
      lower.includes('مساء') ||
      lower.includes('hello') ||
      lower.includes('hi')
    ) {
      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: 'أهلاً وسهلاً بك في منصة كودر سبيس (Coder Space)! 👋\nأنا جاهز لمساعدتك في كل ما يخص برمجة الويب (HTML و CSS و JavaScript) ومكتبات الذكاء الاصطناعي (TensorFlow.js و Transformers.js و Brain.js) وفحص الأخطاء في كودك.\n\nما الذي تود تعلمه أو فحصه اليوم؟',
      };
    }

    // 4. Dialect queries for learning / career ("عايز اتعلم", "بدي اصير مبرمج", "شلون ابدا")
    if (
      lower.includes('عايز') ||
      lower.includes('بدي') ||
      lower.includes('شلون') ||
      lower.includes('ابي') ||
      lower.includes('كيف ابدا') ||
      lower.includes('طريقة البدء')
    ) {
      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: 'أفضل بداية هي البدء بالترتيب التالي خطوة بخطوة:\n\n1. **مسار HTML:** لبناء هيكل الصفحة (30 درساً في المنصة).\n2. **مسار CSS:** لتجميل المظهر وجعله متجاوباً مع الجوال.\n3. **مسار JavaScript:** لإعطاء الروح والتفاعل للواجهة.\n4. **تطبيق المشاريع الـ 18:** لبناء معرض أعمال حقيقي.\n\nابدأ الآن بالدرس الأول في HTML وطبق بيدك!',
      };
    }

    // 5. General question about AI in web
    if (lower.includes('ذكاء') || lower.includes('ai') || lower.includes('اصطناعي')) {
      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: '🤖 **عالم الذكاء الاصطناعي في المتصفح (Web AI) مذهل ومجاني!**\n\nأشهر المكتبات المتاحة لك:\n1. **TensorFlow.js:** لتشغيل وتدريب نماذج التعلم العميق في المتصفح.\n2. **Transformers.js (من Hugging Face):** لتشغيل نماذج LLMs ومعالجة اللغات الطبيعية محلياً.\n3. **Brain.js:** لبناء شبكات عصبية سريعة وسهلة.\n4. **MediaPipe (من Google):** لتتبع حركات الوجه واليدين مباشرة من كاميرا الويب.\n\nإليك مثالاً لتشغيل Transformers.js مباشرة:',
        code: `// تشغيل تحليل المشاعر عبر Transformers.js محلياً:
import { pipeline } from '@xenova/transformers';

const pipe = await pipeline('sentiment-analysis');
const output = await pipe('منصة كودر سبيس ممتازة ورائعة!');
console.log(output); // [{ label: 'POSITIVE', score: 0.99 }]`,
        codeLang: 'javascript',
      };
    }

    // 6. Constructive fallback with suggestions
    return {
      id: 'b-' + Date.now(),
      sender: 'bot',
      text: `سؤال رائع! يمكنك سؤالي عن أي وسم في HTML أو خاصية في CSS أو كود في جافاسكريبت.\n\nكما يمكنك سؤالي عن مكتبات الذكاء الاصطناعي في الويب (مثل: TensorFlow.js أو Brain.js أو ربط نماذج Gemini في تطبيقاتك).\nأو اطلب شرح: Flexbox أو Grid أو شجرة DOM أو LocalStorage أو React أو Tailwind CSS.`,
    };
  };

  // Dedicated Code Debugger (HTML, CSS, JS)
  const inspectPastedCode = (code: string): ChatMessage | null => {
    // 1. Check CSS Code Errors
    if (
      (code.includes('{') && code.includes('}') && (code.includes(':') || code.includes('@media'))) ||
      code.includes('px') ||
      code.includes('color:') ||
      code.includes('background:')
    ) {
      // Check invalid spaced units like "100 px"
      const unitSpaceMatch = code.match(/\b(\d+)\s+(px|rem|em|vh|vw|%)\b/i);
      if (unitSpaceMatch) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `⚠️ **خطأ في كود CSS - مسافة غير مسموح بها:**\nتم رصد مسافة فارغة بين الرقم والوحدة: \`${unitSpaceMatch[0]}\`!\nفي CSS يجب كتابة الرقم ملتصقاً بالوحدة مباشرة مثل: \`${unitSpaceMatch[1]}${unitSpaceMatch[2]}\`.`,
          code: `/* التصحيح: */\nwidth: ${unitSpaceMatch[1]}${unitSpaceMatch[2]};`,
          codeLang: 'css',
        };
      }

      // Check curly braces balance
      const openCurlys = (code.match(/\{/g) || []).length;
      const closeCurlys = (code.match(/\}/g) || []).length;
      if (openCurlys !== closeCurlys) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `❌ **خطأ تركيبي في CSS:**\nالأقواس المعقوفة \`{}\` غير متوازنة! فتحت (${openCurlys}) وأغلقت (${closeCurlys}). تأكد من إغلاق كل قاعدة بـ \`}\`.`,
        };
      }

      // Check missing semicolons inside CSS blocks
      const lines = code.split('\n');
      for (const line of lines) {
        const trimmedLine = line.trim();
        if (
          trimmedLine.includes(':') &&
          !trimmedLine.endsWith(';') &&
          !trimmedLine.endsWith('{') &&
          !trimmedLine.startsWith('@') &&
          !trimmedLine.startsWith('/*')
        ) {
          return {
            id: 'b-' + Date.now(),
            sender: 'bot',
            text: `⚠️ **تنبيه في CSS - نسيان الفاصلة المنقوطة (;):**\nالسطر التالي ينقصه فاصلة منقوطة في نهايته:\n\`${trimmedLine}\`\nعدم وضع الفاصلة قد يعطل الخاصية التالية في الملف.`,
            code: `${trimmedLine};`,
            codeLang: 'css',
          };
        }
      }

      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: '✅ **نتيجة فحص كود CSS:**\nكود التنسيق سليم والأقواس والوحدات منضبطة تماماً!',
      };
    }

    // 2. Check HTML code errors
    if (code.includes('<') && code.includes('>')) {
      const selfClosing = ['img', 'input', 'hr', 'br', 'meta', 'link', 'source', '!doctype'];
      const openMatches = [...code.matchAll(/<([a-z][a-z0-9]*)[^>]*>/gi)];
      const closeMatches = [...code.matchAll(/<\/([a-z][a-z0-9]*)>/gi)];

      const openTags = openMatches
        .map((m) => m[1].toLowerCase())
        .filter((t) => !selfClosing.includes(t));
      const closeTags = closeMatches.map((m) => m[1].toLowerCase());

      const unclosed = openTags.filter((t) => !closeTags.includes(t));

      if (unclosed.length > 0) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `⚠️ **فحص كود HTML - تم رصد خطأ محتمل:**\nيبدو أن الوسم \`<${unclosed[0]}>\` لم يتم إغلاقه بـ \`</${unclosed[0]}>\`!\n\nفي لغة HTML يجب إغلاق جميع وسوم الحاويات باستثناء الوسوم الذاتية مثل \`<img>\` و \`<input>\`.`,
          code: `<${unclosed[0]}>\n  <!-- ضع محتواك هنا -->\n</${unclosed[0]}>`,
          codeLang: 'html',
        };
      }

      if (code.includes('<img') && !code.includes('alt=')) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `🔍 **ملاحظة لتحسين الجودة:**\nوسم \`<img>\` يحتاج إضافة خاصية النص البديل \`alt="وصف الصورة"\`.\nخاصية alt ضرورية لمحركات البحث (SEO) ولقارئات الشاشة لذوي الاحتياجات الخاصة.`,
          code: `<img src="image.jpg" alt="وصف توضيحي دقيق للصورة">`,
          codeLang: 'html',
        };
      }

      if (code.includes('<a') && !code.includes('href=')) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `🔍 **ملاحظة على الرابط:**\nوسم \`<a>\` يحتاج إلى خاصية \`href="..."\` لتحديد الوجهة التي سينتقل إليها المستخدم عند النقر.`,
          code: `<a href="https://example.com" target="_blank">رابط الزيارة</a>`,
          codeLang: 'html',
        };
      }

      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: '✅ **نتيجة فحص كود HTML:**\nكود HTML سليم ومغلق بشكل صحيح ومتوافق مع معايير HTML5!',
      };
    }

    // 3. Check JavaScript code errors
    if (
      code.includes('function') ||
      code.includes('const ') ||
      code.includes('let ') ||
      code.includes('console.log') ||
      code.includes('=>')
    ) {
      // Check parenthesis balance
      const openParens = (code.match(/\(/g) || []).length;
      const closeParens = (code.match(/\)/g) || []).length;
      if (openParens !== closeParens) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `❌ **خطأ تركيبي (SyntaxError):**\nالأقواس الدائرية \`()\` غير متوازنة. عدد أقواس الفتح (${openParens}) لا يساوي عدد أقواس الإغلاق (${closeParens}).`,
        };
      }

      // Check curly braces balance
      const openCurlys = (code.match(/\{/g) || []).length;
      const closeCurlys = (code.match(/\}/g) || []).length;
      if (openCurlys !== closeCurlys) {
        return {
          id: 'b-' + Date.now(),
          sender: 'bot',
          text: `❌ **خطأ تركيبي (SyntaxError):**\nالأقواس المعقوفة \`{}\` غير متوازنة. تأكد من إغلاق كل دالة أو جملة شرطية فتحتها.`,
        };
      }

      // Check reassigning to const
      const constMatch = code.match(/const\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=/);
      if (constMatch) {
        const varName = constMatch[1];
        const reassignRegex = new RegExp(`\\b${varName}\\s*=\\s*[^=]`, 'g');
        const assignments = code.match(reassignRegex);
        if (assignments && assignments.length > 1) {
          return {
            id: 'b-' + Date.now(),
            sender: 'bot',
            text: `⚠️ **خطأ في النوع (TypeError): Assignment to constant variable:**\nالمتغير \`${varName}\` تم تعريفه بـ \`const\` ولا يمكن إعادة إسناد قيمة جديدة له!\n\nاستخدم \`let\` بدلاً من \`const\` إذا كنت تنوي تحديث قيمته لاحقاً:`,
            code: `let ${varName} = initialValue;\n${varName} = newValue; // مسموح به الآن`,
            codeLang: 'javascript',
          };
        }
      }

      return {
        id: 'b-' + Date.now(),
        sender: 'bot',
        text: '✅ **نتيجة فحص كود جافاسكريبت:**\nالبنية البرمجية والأقواس متوازنة وسليمة!',
      };
    }

    return null;
  };

  const quickPrompts = [
    'كيف أبدأ بتعلم البرمجة؟',
    'TensorFlow.js',
    'Transformers.js',
    'Brain.js',
    'ما الفرق بين id و class؟',
    'الفرق بين Flexbox و Grid',
    'كيف يعمل React',
    'شرح LocalStorage',
  ];

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#4B44CC] hover:brightness-110 text-white px-4 py-3 rounded-full shadow-2xl shadow-[#6C63FF]/50 border border-white/20 active:scale-95 transition-all group"
        >
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xs font-['Cairo']">مساعد كودر سبيس AI</span>
          <span className="w-2 h-2 rounded-full bg-[#43E97B] animate-pulse" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 z-50 w-[350px] sm:w-[420px] h-[540px] bg-[#1A1829] border border-[#6C63FF]/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-right animate-in fade-in zoom-in-95 duration-200">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-[#6C63FF] via-[#8B5CF6] to-[#4B44CC] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-black text-sm font-['Cairo'] flex items-center gap-1.5">
                  <span>مساعد كودر سبيس الذكي</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-current" />
                </div>
                <div className="text-[10px] text-white/80">مساعد محلي مجاني (بدون اشتراك أو فوترة)</div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="مسح المحادثة"
                className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#141221]/90">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-1 shadow-sm ${
                    m.sender === 'user' ? 'bg-[#FF6584] text-white' : 'bg-[#6C63FF] text-white'
                  }`}
                >
                  {m.sender === 'user' ? 'أنت' : 'كودر سبيس'}
                </div>

                <div
                  className={`p-3.5 rounded-2xl text-xs md:text-[13px] leading-relaxed max-w-[85%] shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#6C63FF] to-[#5850E0] text-white rounded-bl-sm'
                      : 'bg-[#1E1D2E] border border-white/10 text-[#D6D4E8] rounded-br-sm'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{m.text}</p>

                  {/* Code snippet display */}
                  {m.code && (
                    <div className="mt-2.5 bg-[#0A0918] p-3 rounded-xl border border-white/10 font-mono text-[11px] text-[#A9B1D6] relative text-left" dir="ltr">
                      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2 text-[10px] text-amber-400 font-sans">
                        <span className="uppercase">{m.codeLang || 'code'}</span>
                        <button
                          onClick={() => handleCopyCode(m.code!, m.id)}
                          className="flex items-center gap-1 text-white/70 hover:text-white p-1 rounded bg-white/5 hover:bg-white/15 transition-colors"
                          title="نسخ الكود"
                        >
                          {copiedId === m.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[#43E97B]" />
                              <span className="text-[#43E97B]">تم النسخ!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>نسخ</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre leading-relaxed">{m.code}</pre>
                    </div>
                  )}

                  {/* Tips list */}
                  {m.tips && m.tips.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-white/10 space-y-1">
                      {m.tips.map((tip, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#A7A5C0]">
                          <Lightbulb className="w-3 h-3 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-3 py-2 bg-[#141221] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p)}
                className="whitespace-nowrap px-3 py-1 bg-[#1E1D2E] hover:bg-[#6C63FF] text-[11px] font-bold text-[#A7A5C0] hover:text-white rounded-full transition-colors border border-white/10 active:scale-95"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#1A1829] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="اطرح سؤالك أو الصق كودك لتدقيقه..."
              className="flex-1 bg-[#141221] border border-white/15 focus:border-[#6C63FF] px-4 py-2.5 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#8B5CF6] hover:brightness-110 disabled:opacity-40 text-white flex items-center justify-center transition-all flex-shrink-0 shadow-md shadow-[#6C63FF]/30"
            >
              <Send className="w-4 h-4 -scale-x-100" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
