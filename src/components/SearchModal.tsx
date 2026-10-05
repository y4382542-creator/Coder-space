import React, { useState, useEffect, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { htmlLessons } from '../data/htmlLessons';
import { cssLessons } from '../data/cssLessons';
import { jsLessons } from '../data/jsLessons';
import { projectsList } from '../data/projects';
import { incomeWays } from '../data/incomeWays';
import { Search, X, BookOpen, FolderGit2, DollarSign, ArrowLeft } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { showSearchModal, setShowSearchModal, setActiveView } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  // Keyboard shortcut Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowSearchModal(!showSearchModal);
      } else if (e.key === 'Escape' && showSearchModal) {
        setShowSearchModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showSearchModal, setShowSearchModal]);

  // Aggregate searchable items
  const allItems = useMemo(() => {
    const items: Array<{
      id: string;
      title: string;
      sub: string;
      type: 'lesson' | 'project' | 'income';
      subject?: 'html' | 'css' | 'js';
      unit?: string;
      lesson?: string;
      projectId?: string;
    }> = [];

    // Lessons (90)
    Object.values(htmlLessons).forEach((l) => {
      items.push({
        id: l.id,
        title: l.title,
        sub: `${l.tag} • ${l.sub}`,
        type: 'lesson',
        subject: 'html',
        unit: l.unit,
        lesson: l.lessonNumber,
      });
    });

    Object.values(cssLessons).forEach((l) => {
      items.push({
        id: l.id,
        title: l.title,
        sub: `${l.tag} • ${l.sub}`,
        type: 'lesson',
        subject: 'css',
        unit: l.unit,
        lesson: l.lessonNumber,
      });
    });

    Object.values(jsLessons).forEach((l) => {
      items.push({
        id: l.id,
        title: l.title,
        sub: `${l.tag} • ${l.sub}`,
        type: 'lesson',
        subject: 'js',
        unit: l.unit,
        lesson: l.lessonNumber,
      });
    });

    // Projects (18)
    Object.entries(projectsList).forEach(([key, p]) => {
      items.push({
        id: `p-${key}`,
        title: p.title,
        sub: `مشروع ${p.subject} • ${p.desc}`,
        type: 'project',
        projectId: key,
      });
    });

    // Income Ways (7)
    incomeWays.forEach((w, i) => {
      items.push({
        id: `inc-${i}`,
        title: w.title,
        sub: `طرق الربح • ${w.income} • ${w.desc}`,
        type: 'income',
      });
    });

    return items;
  }, []);

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return allItems.slice(0, 8); // show initial recommendations
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(term) ||
        item.sub.toLowerCase().includes(term) ||
        item.id.toLowerCase().includes(term)
    );
  }, [allItems, searchTerm]);

  if (!showSearchModal) return null;

  const handleSelectItem = (item: (typeof allItems)[0]) => {
    if (item.type === 'lesson' && item.subject && item.unit && item.lesson) {
      setActiveView({
        type: 'lesson',
        subject: item.subject,
        unit: item.unit,
        lesson: item.lesson,
      });
    } else if (item.type === 'project') {
      setActiveView({ type: 'projects', projectId: item.projectId });
    } else if (item.type === 'income') {
      setActiveView({ type: 'income' });
    }
    setShowSearchModal(false);
    setSearchTerm('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 text-right animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-[#1A1829] border border-[#6C63FF]/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#1E1D2E]">
          <Search className="w-5 h-5 text-[#6C63FF] flex-shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث في الـ 90 درساً والمشاريع وطرق الربح (مثلاً: Flexbox, input, المصفوفات)..."
            className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-full text-[#A7A5C0] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setShowSearchModal(false)}
            className="px-2.5 py-1 text-xs bg-white/5 hover:bg-white/10 text-[#A7A5C0] rounded-lg"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#A7A5C0] text-sm">
              لم نعثر على نتائج مطابقة لـ "{searchTerm}". جرب البحث بكلمة أخرى مثل "الصور" أو "Grid" أو "دوال".
            </div>
          ) : (
            filteredItems.map((item) => {
              const isLesson = item.type === 'lesson';
              const isProj = item.type === 'project';
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectItem(item)}
                  className="w-full p-3 rounded-2xl bg-[#141221] hover:bg-[#252340] border border-white/5 hover:border-[#6C63FF]/30 text-right flex items-center justify-between gap-3 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isLesson
                          ? 'bg-[#6C63FF]/20 text-[#6C63FF]'
                          : isProj
                          ? 'bg-[#28C874]/20 text-[#28C874]'
                          : 'bg-[#F7971E]/20 text-[#F7971E]'
                      }`}
                    >
                      {isLesson ? (
                        <BookOpen className="w-4 h-4" />
                      ) : isProj ? (
                        <FolderGit2 className="w-4 h-4" />
                      ) : (
                        <DollarSign className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-white group-hover:text-[#6C63FF] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#A7A5C0] line-clamp-1">{item.sub}</div>
                    </div>
                  </div>

                  <ArrowLeft className="w-4 h-4 text-[#A7A5C0] group-hover:text-white transition-colors" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts tip */}
        <div className="p-3 border-t border-white/5 bg-[#141221] text-[11px] text-[#A7A5C0] flex items-center justify-between">
          <span>نتائج البحث: {filteredItems.length} عنصر</span>
          <span>اضغط Ctrl+K للفتح في أي وقت</span>
        </div>
      </div>
    </div>
  );
};
