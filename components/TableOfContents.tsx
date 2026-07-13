'use client';

import { useState } from 'react';
import type { TocItem } from '@/lib/toc';

/**
 * טבלת תוכן מתקפלת (סגורה כברירת מחדל). הרשימה מרונדרת בשרת (קישורי עוגן
 * אמיתיים ב-HTML) - כדי לאפשר jump-to sitelinks בגוגל. הפתיחה/סגירה בצד לקוח.
 */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);
  if (!items || items.length < 2) return null;

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

      <div
        id="toc-list"
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '1600px' : '0px' }}
      >
        <ol className="px-2.5 sm:px-3 pb-3 pt-1 border-t border-gray-100">
          {items.map((it, idx) => (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
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
      </div>
    </nav>
  );
}
