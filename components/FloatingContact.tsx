'use client';

import { useState } from 'react';
import { SITE } from '@/lib/siteData';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICES = [
  'שכפול מפתח לרכב',
  'שחזור מפתח לרכב',
  'תיקון סוויץ לרכב',
  'פתיחת רכב נעול',
  'התקנת קודן לרכב',
  'תיקון/ניתוק קודן',
  'אחר',
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', phone: '', service: '' });

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
      {/* ── Floating bottom bar ── */}
      {/* Glow animation styles */}
      <style>{`
        @keyframes cta-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(232,117,26,0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(232,117,26,0); }
        }
        .cta-pulse { animation: cta-pulse 2s infinite; }
      `}</style>

      <div
        dir="rtl"
        className="fixed bottom-0 right-0 left-0 z-40"
        style={{ boxShadow: '0 -4px 20px rgba(0,0,0,0.25)' }}
      >
        {/* Top micro-bar: availability indicator */}
        <div className="flex items-center justify-center gap-2 py-1 text-xs font-semibold"
          style={{ background: '#0d1a2e', color: '#94a3b8' }}>
          <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 animate-pulse" />
          זמינים עכשיו · מגיעים תוך 20 דקות · 24/7
        </div>

        {/* Main bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-3"
          style={{ background: 'var(--primary)' }}>

          {/* Phone */}
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 text-white font-bold text-sm whitespace-nowrap hover:opacity-90 transition"
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,255,255,0.12)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xs opacity-60 font-normal">התקשרו עכשיו</span>
              <span>{SITE.phoneDisplay}</span>
            </span>
          </a>

          {/* CTA Button — prominent with pulse */}
          <button
            onClick={() => setOpen(true)}
            className="cta-pulse flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-transform hover:scale-105 active:scale-95 whitespace-nowrap"
            style={{ background: 'var(--accent)' }}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="flex flex-col items-start leading-tight">
              <span className="text-xs opacity-80 font-normal">קבלו הצעת מחיר</span>
              <span>השאירו פרטים</span>
            </span>
          </button>
        </div>
      </div>

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
              <span className="font-bold text-sm">השאירו פרטים — נחזור מהר</span>
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
                <button onClick={() => { setOpen(false); setStatus('idle'); setForm({ name: '', phone: '', service: '' }); }}
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
                  <label className="block text-xs font-semibold text-gray-600 mb-1">שירות נדרש</label>
                  <select value={form.service} onChange={e => set('service', e.target.value)}
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none appearance-none"
                    style={{ borderColor: 'var(--border)', color: form.service ? '#1a2535' : '#9ca3af' }}>
                    <option value="">בחרו שירות...</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-600 bg-red-50 rounded px-3 py-2">
                    שגיאה בשליחה — התקשרו ישירות
                  </p>
                )}

                <button type="submit" disabled={status === 'loading'}
                  className="w-full py-2.5 rounded-lg font-bold text-white text-sm"
                  style={{ background: 'var(--accent)', opacity: status === 'loading' ? 0.8 : 1 }}>
                  {status === 'loading' ? 'שולח...' : 'שליחה'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  זמינות 24/7 — מגיעים תוך 20 דקות
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
