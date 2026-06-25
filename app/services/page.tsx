import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export const metadata: Metadata = {
  title: { absolute: 'כל השירותים - מנעולן רכב מקצועי | מפתח עכשיו' },
  description: 'כל שירותי מנעולן הרכב: שכפול מפתח, שחזור מפתח, התקנת קודן, תיקון שלט, פריצת רכב ועוד. הגעה עד אליכם 24/7 בכל הארץ.',
  alternates: { canonical: 'https://carkeynow.co.il/שירותים/' },
};

const SERVICE_DETAILS = [
  { href: '/שחזור-מפתח-לרכב',    label: 'שחזור מפתח לרכב',    desc: 'אבדת את כל המפתחות? אנחנו מייצרים מפתח חדש לחלוטין על פי קוד הרכב.' },
  { href: '/שכפול-מפתח-לרכב',    label: 'שכפול מפתח לרכב',    desc: 'יש לך מפתח קיים ורוצה להכין עוד אחד? שכפול מהיר עם קידוד אימובילייזר.' },
  { href: '/התקנת-קודן-לרכב',    label: 'התקנת קודן לרכב',    desc: 'התקנת מערכת אזעקה וקודן לרכב עם קידוד מקצועי לכל הדגמים.' },
  { href: '/תיקון-קודן-לרכב',    label: 'תיקון קודן לרכב',    desc: 'קודן שמתקלקל, לא מגיב או מצפצף ללא סיבה - אנחנו מאתרים ומתקנים.' },
  { href: '/קודן-לרכב-מצפצף-2',  label: 'קודן לרכב מצפצף',   desc: 'קודן שמצפצף ללא הפסקה? אנחנו מאתרים את הגורם ומסיימים את הרעש.' },
  { href: '/ניתוק-קודן-לרכב',    label: 'ניתוק קודן לרכב',    desc: 'ניתוק מקצועי של מערכת קודן ישנה או תקולה ללא נזק לרכב.' },
  { href: '/תיקון-שלט-לרכב',     label: 'תיקון שלט לרכב',     desc: 'שלט שלא עובד, כפתור תקוע או סוללה שנגמרה - תיקון במקום.' },
  { href: '/שכפול-שלט-לרכב',     label: 'שכפול שלט לרכב',     desc: 'שכפול שלט רחוק לרכב עם סנכרון מלא לכל הפונקציות.' },
  { href: '/קידוד-שלט-לרכב',     label: 'קידוד שלט לרכב',     desc: 'קידוד שלט חדש או קיים למערכת הרכב באמצעות ציוד OBD מקצועי.' },
  { href: '/תיקון-סוויץ-לרכב',   label: 'תיקון סוויץ לרכב',   desc: 'סוויץ תקוע, שבור או לא מסתובב - תיקון או החלפה על המקום.' },
  { href: '/מפתח-תקוע-בסוויץ',   label: 'מפתח תקוע בסוויץ',   desc: 'מפתח שנתקע בסוויץ ולא יוצא - חילוץ מקצועי ללא נזק.' },
  { href: '/פורץ-רכבים',          label: 'פורץ רכבים',          desc: 'נעלת את עצמך בחוץ? אנחנו פותחים רכב מנועל תוך דקות ללא שבירה.' },
  { href: '/אבד-מפתח-לרכב',      label: 'אבד מפתח לרכב',      desc: 'מדריך מה לעשות כשאבד מפתח הרכב - שלבים, עלויות ואיך לחסוך כסף.' },
  { href: '/שחזור-מפתח-לאופנוע', label: 'שחזור מפתח לאופנוע', desc: 'שחזור ושכפול מפתחות לאופנועים מכל הדגמים והיצרנים.' },
  { href: '/פריצת-כיסא-אופנוע',  label: 'פריצת כיסא אופנוע',  desc: 'נעלת את המפתח מתחת לכיסא האופנוע? אנחנו פותחים ללא נזק.' },
];

export default function ServicesPage() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <div style={{ background: 'var(--primary)' }} className="text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs mb-2 opacity-70">
            <Link href="/" className="hover:opacity-100">דף הבית</Link>
            <span className="mx-1">/</span>
            <span>כל השירותים</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">כל שירותי מנעולן הרכב</h1>
          <p className="text-sm opacity-80">הגעה עד אליכם 24/7 בכל הארץ. ציוד ממוחשב לכל הדגמים.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICE_DETAILS.map((s) => (
            <Link key={s.href} href={s.href}
              className="card p-5 hover:shadow-md transition group flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 rounded shrink-0" style={{ background: 'var(--accent)' }} />
                <span className="font-bold text-sm group-hover:text-orange-500 transition"
                  style={{ color: 'var(--primary)' }}>{s.label}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--primary)' }} className="text-white py-8 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-bold text-lg mb-4">צריכים עזרה? אנחנו כאן 24/7</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8">{SITE.phoneDisplay}</a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-2.5 rounded-md transition text-base">
              וואטסאפ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
