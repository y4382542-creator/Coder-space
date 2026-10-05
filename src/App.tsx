import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomeHero } from './components/HomeHero';
import { LessonView } from './components/LessonView';
import { SummaryView } from './components/SummaryView';
import { UnitExamView } from './components/UnitExamView';
import { ProjectsView } from './components/ProjectsView';
import { IncomeWaysView } from './components/IncomeWaysView';
import { IntroView } from './components/IntroView';
import { HowToUseView } from './components/HowToUseView';
import { RoadmapView } from './components/RoadmapView';
import { AuthModal } from './components/AuthModal';
import { PrivacyModal } from './components/PrivacyModal';
import { StatsModal } from './components/StatsModal';
import { AccessibilityModal } from './components/AccessibilityModal';
import { SearchModal } from './components/SearchModal';
import { CodekTutorBot } from './components/CodekTutorBot';
import { htmlLessons } from './data/htmlLessons';
import { cssLessons } from './data/cssLessons';
import { jsLessons } from './data/jsLessons';

// Ordered array of all 90 lesson keys
const ALL_LESSON_KEYS: string[] = [
  // HTML (30)
  'html-u1-l1', 'html-u1-l2', 'html-u1-l3', 'html-u1-l4', 'html-u1-l5',
  'html-u2-l1', 'html-u2-l2', 'html-u2-l3', 'html-u2-l4', 'html-u2-l5',
  'html-u3-l1', 'html-u3-l2', 'html-u3-l3', 'html-u3-l4', 'html-u3-l5',
  'html-u4-l1', 'html-u4-l2', 'html-u4-l3', 'html-u4-l4', 'html-u4-l5',
  'html-u5-l1', 'html-u5-l2', 'html-u5-l3', 'html-u5-l4', 'html-u5-l5',
  'html-u6-l1', 'html-u6-l2', 'html-u6-l3', 'html-u6-l4', 'html-u6-l5',
  // CSS (30)
  'css-cu1-l1', 'css-cu1-l2', 'css-cu1-l3', 'css-cu1-l4', 'css-cu1-l5',
  'css-cu2-l1', 'css-cu2-l2', 'css-cu2-l3', 'css-cu2-l4', 'css-cu2-l5',
  'css-cu3-l1', 'css-cu3-l2', 'css-cu3-l3', 'css-cu3-l4', 'css-cu3-l5',
  'css-cu4-l1', 'css-cu4-l2', 'css-cu4-l3', 'css-cu4-l4', 'css-cu4-l5',
  'css-cu5-l1', 'css-cu5-l2', 'css-cu5-l3', 'css-cu5-l4', 'css-cu5-l5',
  'css-cu6-l1', 'css-cu6-l2', 'css-cu6-l3', 'css-cu6-l4', 'css-cu6-l5',
  // JavaScript (30)
  'js-ju1-l1', 'js-ju1-l2', 'js-ju1-l3', 'js-ju1-l4', 'js-ju1-l5',
  'js-ju2-l1', 'js-ju2-l2', 'js-ju2-l3', 'js-ju2-l4', 'js-ju2-l5',
  'js-ju3-l1', 'js-ju3-l2', 'js-ju3-l3', 'js-ju3-l4', 'js-ju3-l5',
  'js-ju4-l1', 'js-ju4-l2', 'js-ju4-l3', 'js-ju4-l4', 'js-ju4-l5',
  'js-ju5-l1', 'js-ju5-l2', 'js-ju5-l3', 'js-ju5-l4', 'js-ju5-l5',
  'js-ju6-l1', 'js-ju6-l2', 'js-ju6-l3', 'js-ju6-l4', 'js-ju6-l5',
];

const MainContent: React.FC = () => {
  const { activeView, setActiveView, setShowPrivacyModal } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [accessibilityModalOpen, setAccessibilityModalOpen] = useState(false);

  // Helper for lesson navigation
  const renderCurrentLesson = (subject: 'html' | 'css' | 'js', unit: string, lesson: string) => {
    const lessonKey = `${subject}-${unit}-${lesson}`;
    const lessonData =
      subject === 'html'
        ? htmlLessons[lessonKey]
        : subject === 'css'
        ? cssLessons[lessonKey]
        : jsLessons[lessonKey];

    if (!lessonData) {
      return (
        <div className="text-center py-16 text-[#A7A5C0]">
          <p>الدرس غير متوفر حالياً.</p>
          <button
            onClick={() => setActiveView({ type: 'home' })}
            className="mt-4 px-5 py-2 bg-[#6C63FF] text-white rounded-xl text-xs font-bold"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>
      );
    }

    const currentIndex = ALL_LESSON_KEYS.indexOf(lessonKey);
    const hasNext = currentIndex >= 0 && currentIndex < ALL_LESSON_KEYS.length - 1;
    const hasPrev = currentIndex > 0;

    const navigateToKey = (key: string) => {
      const parts = key.split('-');
      const targetSubj = parts[0] as 'html' | 'css' | 'js';
      setActiveView({ type: 'lesson', subject: targetSubj, unit: parts[1], lesson: parts[2] });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <LessonView
        key={lessonData.id}
        lesson={lessonData}
        hasNext={hasNext}
        hasPrev={hasPrev}
        onNext={() => hasNext && navigateToKey(ALL_LESSON_KEYS[currentIndex + 1])}
        onPrev={() => hasPrev && navigateToKey(ALL_LESSON_KEYS[currentIndex - 1])}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#0F0E17] text-[#FFFFFE] flex flex-col font-['Tajawal'] antialiased selection:bg-[#6C63FF] selection:text-white">
      {/* Top Header */}
      <Header
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onOpenAccessibility={() => setAccessibilityModalOpen(true)}
      />

      {/* Main Layout Area */}
      <div className="flex-1 flex max-w-[1440px] w-full mx-auto relative">
        {/* Right Sidebar (in RTL) */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Center Main Stage */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 lg:p-10">
          {activeView.type === 'home' && <HomeHero />}
          
          {activeView.type === 'lesson' && renderCurrentLesson(
            activeView.subject,
            activeView.unit,
            activeView.lesson
          )}

          {activeView.type === 'summary' && (
            <SummaryView summaryKey={activeView.key} />
          )}

          {activeView.type === 'exam' && (
            <UnitExamView
              examKey={activeView.key}
              onBackToCourse={() => setActiveView({ type: 'home' })}
            />
          )}

          {activeView.type === 'projects' && (
            <ProjectsView initialProjectId={activeView.projectId} />
          )}

          {activeView.type === 'income' && <IncomeWaysView />}
          {activeView.type === 'intro' && <IntroView />}
          {activeView.type === 'how-to-use' && <HowToUseView />}
          {activeView.type === 'roadmap' && <RoadmapView />}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#141221] border-t border-[#6C63FF]/20 py-8 px-6 text-center text-xs text-[#A7A5C0] space-y-2">
        <div className="text-xl font-black font-['Cairo'] bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent inline-block">
          منصة كودر سبيس <span className="text-[#43E97B]">(Coder Space)</span>
        </div>
        <div>
          إعداد وتطوير: <strong className="text-[#6C63FF] font-bold">يوسف حسام عبدالرحمن</strong> • منصة مجانية 100% بدون أي تكاليف أو اشتراكات
        </div>
        <div className="flex items-center justify-center gap-4 pt-1 text-[11px]">
          <button
            onClick={() => setShowPrivacyModal(true)}
            className="hover:text-white underline transition-colors"
          >
            سياسة الخصوصية والتخزين المحلي
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveView({ type: 'roadmap' })}
            className="hover:text-white underline transition-colors"
          >
            خارطة طريق المستقبل
          </button>
        </div>
      </footer>

      {/* Floating Coding Assistant */}
      <CodekTutorBot />

      {/* Global Modals */}
      <AuthModal />
      <PrivacyModal />
      <StatsModal />
      <AccessibilityModal
        isOpen={accessibilityModalOpen}
        onClose={() => setAccessibilityModalOpen(false)}
      />
      <SearchModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
