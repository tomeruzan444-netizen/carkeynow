import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE } from '@/lib/siteData';

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-rubik',
});

const DEFAULT_DESC =
  'מנעולן רכב מקצועי בפריסה ארצית. שכפול מפתחות, שחזור מפתח לרכב, תיקון סוויץ, פורץ רכבים ועוד. זמינות 24/7 כולל שבתות.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: DEFAULT_DESC,
  keywords: ['מנעולן רכב', 'שכפול מפתח לרכב', 'שחזור מפתח', 'פורץ רכבים', 'תיקון סוויץ', 'קודן לרכב', 'מפתח לרכב'],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: DEFAULT_DESC,
    url: SITE.url,
    images: [
      {
        url: '/wp-images/שכפול-מפתחות-לרכב-מפתח-עכשיו.webp',
        width: 1200,
        height: 630,
        alt: `${SITE.name} - ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | ${SITE.tagline}`,
    description: DEFAULT_DESC,
    images: ['/wp-images/שכפול-מפתחות-לרכב-מפתח-עכשיו.webp'],
  },
  alternates: { canonical: `${SITE.url}/` },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '/wp-images/מפתח-עכשיו-פאביקון.webp',
    apple: '/wp-images/מפתח-עכשיו-פאביקון.webp',
  },
  verification: {
    // Add Google Search Console verification token here when ready
    // google: 'YOUR_TOKEN_HERE',
  },
};

// Organization JSON-LD — site-wide
function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${SITE.url}/#organization`,
          name: SITE.name,
          url: SITE.url,
          logo: `${SITE.url}/wp-images/מפתח-עכשיו-לוגו.webp`,
          image: `${SITE.url}/wp-images/שכפול-מפתחות-לרכב-מפתח-עכשיו.webp`,
          telephone: SITE.phone,
          email: SITE.email,
          sameAs: [SITE.facebook],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'IL',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Israel',
          },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
          priceRange: '₪₪',
          description: DEFAULT_DESC,
        }),
      }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="font-sans antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
