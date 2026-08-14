'use client';

import { useState } from 'react';
import { SITE } from '@/lib/siteData';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      body.append('source', 'floating-form');
      const res = await fetch('/form-handler.php', { method: 'POST', body });
      const data = await res.json().catch(() => ({}));
      setStatus(res.ok && data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      {/* ── Floating action buttons (no bar) ── */}
      <style>{`
        @keyframes cta-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232,117,26,0.5), 0 4px 15px rgba(232,117,26,0.3); }
          50%       { box-shadow: 0 0 0 8px rgba(232,117,26,0), 0 4px 15px rgba(232,117,26,0.3); }
        }
        .cta-pulse { animation: cta-pulse 2s infinite; }
      `}</style>

      {/* Phone button - bottom right */}
      <a
        href={`tel:${SITE.phone}`}
        dir="rtl"
        className="fixed bottom-6 right-5 z-40 flex items-center gap-2 text-white font-bold text-sm px-4 py-3 rounded-2xl shadow-xl hover:opacity-90 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
        style={{ background: 'var(--primary)' }}
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        {SITE.phoneDisplay}
      </a>

      {/* CTA button - bottom left, with pulse */}
      <button
        onClick={() => setOpen(true)}
        dir="rtl"
        className="cta-pulse fixed bottom-6 left-5 z-40 flex items-center gap-2 text-white font-bold text-sm px-4 py-3 rounded-2xl transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
        style={{ background: 'var(--accent)' }}
      >
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        השאירו פרטים
      </button>

      {/* ── Modal overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="w-full max-w-md rounded-xl overflow-hidden shadow-2xl"
            dir="rtl"
            style={{ background: 'white' }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 text-white"
              style={{ background: 'var(--primary)' }}>
              <span className="font-bold text-sm">השאירו פרטים - נחזור מהר</span>
              <button onClick={() => setOpen(false)} className="opacity-70 hover:opacity-100 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {status === 'success' ? (
              <div className="p-8 text-center">
                <div className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
                  style={{ background: '#f0fdf4' }}>
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-base mb-1" style={{ color: 'var(--primary)' }}>הפרטים התקבלו!</p>
                <p className="text-sm text-gray-500 mb-4">נחזור אליכם בהקדם</p>
                <button onClick={() => { setOpen(false); setStatus('idle'); setForm({ name: '', phone: '', message: '' }); }}
                  className="btn-primary text-sm px-5">סגירה</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">שם *</label>
                    <input type="text" required value={form.name}
                      onChange={e => set('name', e.target.value)}
                      placeholder="שם מלא"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--border)' }} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">טלפון *</label>
                    <input type="tel" required value={form.phone}
                      onChange={e => set('phone', e.target.value)}
                      placeholder="050-0000000"
                      className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: 'var(--border)' }} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">איך אפשר לעזור?</label>
                  <textarea value={form.message} onChange={e => set('message', e.target.value)}
                    rows={3}
                    placeholder="ספרו לנו במילים שלכם - סוג הרכב, מה קרה ואיפה אתם"
                    className="w-full border rounded-lg px-3 py-2 text-sm leading-relaxed resize-y focus:outline-none focus:ring-2"
                    style={{ borderColor: 'var(--border)' }} />
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-600 bg-red-50 rounded px-3 py-2">
                    שגיאה בשליחה - התקשרו ישירות
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full py-2.5 rounded-lg font-bold text-white text-sm"
                  style={{ background: 'var(--accent)', opacity: status === 'loading' ? 0.8 : 1 }}>
                  {status === 'loading' ? 'שולח...' : 'שליחה'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  זמינות 24/7 - מגיעים תוך 20 דקות
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
