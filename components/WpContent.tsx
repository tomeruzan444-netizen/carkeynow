'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const HE_MONTHS = ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];

export default function WpContent({ html }: { html: string }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  // ממלא את תגית "מעודכן ל:" שמתחת למחירונים בחודש ובשנה הנוכחיים.
  // (ה-script ה-inline שבתוכן לא רץ כי הוא מוזרק דרך dangerouslySetInnerHTML.)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const now = new Date();
    const txt = `${HE_MONTHS[now.getMonth()]} ${now.getFullYear()}`;
    el.querySelectorAll('.pd-date-value').forEach((node) => { node.textContent = txt; });
  }, [html]);

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href) return;

    // Internal link: starts with / or is a relative path
    const isInternal =
      href.startsWith('/') ||
      (!href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel'));

    if (isInternal) {
      e.preventDefault();
      // Decode URL-encoded Hebrew paths before routing
      const decoded = decodeURIComponent(href);
      router.push(decoded);
    }
  }

  return (
    <div
      ref={ref}
      className="wp-content"
      dir="rtl"
      onClick={handleClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
