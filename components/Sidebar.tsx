import Link from 'next/link';
import { NAV_SERVICES, NAV_CITIES, NAV_BRANDS } from '@/lib/siteData';
import ContactForm from './ContactForm';

type SidebarGroup = 'service' | 'brand' | 'city-key' | 'city-lockout' | 'city-alarm' | 'static';

interface Props {
  group: SidebarGroup;
  currentSlug: string;
}

function NavBlock({ title, items, currentSlug }: {
  title: string;
  items: { label: string; href: string }[];
  currentSlug: string;
}) {
  return (
    <div className="card overflow-hidden">
      <div className="px-4 py-2.5 font-bold text-sm text-white" style={{ background: 'var(--primary)' }}>
        {title}
      </div>
      <ul className="py-1 divide-y" style={{ borderColor: 'var(--border)' }}>
        {items.map((item) => {
          const slug = item.href.replace(/^\//, '').replace(/\/$/, '');
          const isActive = slug === currentSlug;
          return (
            <li key={item.href}>
              <Link href={item.href}
                className={`sidebar-link ${isActive ? 'active' : ''}`}>
                {isActive && (
                  <span className="inline-block w-1.5 h-1.5 rounded-full ml-2 shrink-0 align-middle"
                    style={{ background: 'var(--accent)' }} />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const CITY_LOCKOUT = [
  { label: 'פורץ רכבים בתל אביב',     href: '/פורץ-רכבים-בתל-אביב' },
  { label: 'פורץ רכבים בהרצליה',      href: '/פורץ-רכבים-בהרצליה' },
  { label: 'פורץ רכבים בראשון לציון', href: '/פורץ-רכבים-בראשון-לציון' },
  { label: 'פורץ רכבים ברחובות',      href: '/פורץ-רכבים-ברחובות' },
  { label: 'פורץ רכבים בבאר שבע',     href: '/פורץ-רכבים-בבאר-שבע' },
  { label: 'פורץ רכבים ברמת גן',      href: '/פורץ-רכבים-ברמת-גן' },
  { label: 'פורץ רכבים בנתניה',       href: '/פורץ-רכבים-בנתניה' },
  { label: 'פורץ רכבים בקריות',       href: '/פורץ-רכבים-בקריות' },
];

const CITY_ALARM = [
  { label: 'קודן לרכב בתל אביב',      href: '/קודן-לרכב-בתל-אביב' },
  { label: 'קודן לרכב בחיפה',         href: '/קודן-לרכב-בחיפה' },
  { label: 'קודן לרכב בירושלים',      href: '/קודן-לרכב-בירושלים' },
  { label: 'קודן לרכב בבאר שבע',      href: '/קודן-לרכב-בבאר-שבע' },
  { label: 'קודן לרכב ברמת גן',       href: '/קודן-לרכב-ברמת-גן' },
  { label: 'קודן לרכב במודיעין',      href: '/קודן-לרכב-במודיעין' },
  { label: 'קודן לרכב בפתח תקווה',    href: '/קודן-לרכב-בפתח-תקווה' },
  { label: 'קודן לרכב בכפר סבא',      href: '/קודן-לרכב-בכפר-סבא' },
  { label: 'קודן לרכב ברעננה',        href: '/קודן-לרכב-ברעננה' },
];

export function detectGroup(slug: string): SidebarGroup {
  if (slug.startsWith('שכפול-מפתח-לרכב-ב')) return 'city-key';
  if (slug.startsWith('פורץ-רכבים-ב')) return 'city-lockout';
  if (slug.startsWith('קודן-לרכב-ב') || slug === 'קודן-לרכב-מצפצף-2') return 'city-alarm';
  if (slug.startsWith('שכפול-מפתח-ל') && !slug.startsWith('שכפול-מפתח-לרכב')) return 'brand';
  if (['אודות','צרו-קשר','מדיניות-פרטיות','תנאי-שימוש','הצהרת-נגישות','בלוג','לקוחות-ממליצים'].includes(slug)) return 'static';
  return 'service';
}

export default function Sidebar({ group, currentSlug }: Props) {
  return (
    <aside className="space-y-4" dir="rtl">
      <ContactForm compact />

      {group === 'city-key' && (
        <NavBlock title="שכפול מפתח לרכב בערים" items={NAV_CITIES} currentSlug={currentSlug} />
      )}
      {group === 'brand' && (
        <NavBlock title="שכפול מפתח לפי דגם" items={NAV_BRANDS} currentSlug={currentSlug} />
      )}
      {group === 'city-lockout' && (
        <NavBlock title="פורץ רכבים בערים" items={CITY_LOCKOUT} currentSlug={currentSlug} />
      )}
      {group === 'city-alarm' && (
        <NavBlock title="קודן לרכב בערים" items={CITY_ALARM} currentSlug={currentSlug} />
      )}
      {(group === 'service' || group === 'static') && (
        <NavBlock title="השירותים שלנו" items={NAV_SERVICES} currentSlug={currentSlug} />
      )}

      {/* Always show brand nav except on brand pages */}
      {group !== 'brand' && group !== 'static' && (
        <NavBlock title="שכפול לפי דגם" items={NAV_BRANDS.slice(0, 10)} currentSlug={currentSlug} />
      )}

      {/* Info box */}
      <div className="card p-4 text-sm" dir="rtl">
        <p className="font-bold mb-2" style={{ color: 'var(--primary)' }}>זמינות 24/7</p>
        <p className="text-gray-500 text-xs mb-3">זמן הגעה ממוצע 20 דקות בערים הגדולות.</p>
        <a href={`tel:033822752`}
          className="block w-full text-center py-2 rounded font-bold text-white text-sm"
          style={{ background: 'var(--accent)' }}>
          03-382-2752
        </a>
      </div>
    </aside>
  );
}
