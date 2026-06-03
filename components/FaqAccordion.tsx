'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div dir="rtl" className="mt-2">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-1 h-7 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
        <h2 className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
          שאלות נפוצות
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-xl overflow-hidden transition-shadow"
              style={{
                border: `1.5px solid ${isOpen ? 'var(--accent)' : 'var(--border)'}`,
                boxShadow: isOpen ? '0 4px 16px rgba(232,117,26,.10)' : '0 1px 4px rgba(30,74,114,.05)',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-right flex items-start justify-between gap-3 px-5 py-4 transition-colors"
                style={{ background: isOpen ? '#fff8f3' : '#ffffff' }}
              >
                <span
                  className="font-semibold text-sm leading-snug"
                  style={{ color: isOpen ? 'var(--accent)' : 'var(--primary)' }}
                >
                  {item.q}
                </span>

                {/* +/- icon */}
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 transition-all"
                  style={{ background: isOpen ? 'var(--accent)' : 'var(--primary)' }}
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {/* Answer panel */}
              {isOpen && (
                <div
                  className="px-5 pb-5 pt-1 text-sm leading-relaxed"
                  style={{ color: '#4b5563', borderTop: '1px solid #ffe8d6', background: '#fffaf6' }}
                >
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
