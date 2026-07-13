'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
}

/**
 * טבלת תוכן מתקפלת (סגורה כברירת מחדל) - סורקת את כל כותרות ה-H2 בעמוד
 * ומאפשרת ניווט מהיר. ממותגת, רספונסיבית, ללא תלות חיצונית.
 */
export function TableOfContents({ show = false }: { show?: boolean }) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!show) return;
    const container = document.getElementById('page-article');
    if (!container) return;
    const list: TocItem[] = [];
    let i = 0;
    container.querySelectorAll('h2').forEach((h) => {
      const text = (h.textContent || '').trim();
      if (!text) return;
      if (!h.id) h.id = `sec-${i}`;
      list.push({ id: h.id, text });
      i++;
    });
    setItems(list);
  }, [show]);

  if (!show || items.length < 2) return null;

  const handleJump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <nav dir="rtl" className="card mb-5 overflow-hidden" aria-label="תוכן העמוד">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="toc-list"
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 hover:bg-gray-50 transition-colors"
      >
        <span className="flex items-center gap-2.5 font-bold text-base" style={{ color: 'var(--primary)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" style={{ color: 'var(--accent)' }} aria-hidden="true">
            <line x1="8" y1="6" x2="20" y2="6" />
            <line x1="8" y1="12" x2="20" y2="12" />
            <line x1="8" y1="18" x2="20" y2="18" />
            <circle cx="3.6" cy="6" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="3.6" cy="12" r="1.3" fill="currentColor" stroke="none" />
            <circle cx="3.6" cy="18" r="1.3" fill="currentColor" stroke="none" />
          </svg>
          תוכן העמוד
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          className={`shrink-0 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ol id="toc-list" className="px-2.5 sm:px-3 pb-3 pt-1 border-t border-gray-100">
          {items.map((it, idx) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => handleJump(e, it.id)}
                className="flex gap-2.5 items-start rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors"
              >
                <span className="text-xs font-extrabold mt-0.5 shrink-0" style={{ color: 'var(--accent)' }}>
                  {idx + 1}
                </span>
                <span className="leading-snug">{it.text}</span>
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
