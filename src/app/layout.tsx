import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { getLocalBusinessSameAsUrls, OFFICE_GOOGLE_MAPS_LISTING_URL } from '@/config/site-google';
import {
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_OPENING_HOURS_STRING,
  SITE_PHONE_TEL,
} from '@/lib/site-contact';
import { defaultSchemas } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Probate Real Estate Sales | Las Vegas & Clark County Probate Real Estate',
  description:
    'Probate Real Estate Sales: expert probate real estate in Las Vegas and Clark County—court-approved property sales, estate liquidation, and Nevada’s 6–8 month timeline. Free consultation: (702) 830-9222.',
  keywords:
    'probate real estate sales, probate homes Las Vegas, Clark County probate, probate property sales, inherited property sales, Nevada probate real estate, grokipedia',
  authors: [
    { name: 'Probate Real Estate Sales' },
    { name: 'Dr. Jan Duffy', url: 'https://www.probaterealestatesales.com/about/' },
  ],
  openGraph: {
    title: 'Probate Real Estate Sales | Las Vegas & Clark County Probate Real Estate',
    description:
      'Probate Real Estate Sales: Las Vegas and Clark County probate real estate—court-approved sales and inherited property guidance. Free consultation: (702) 830-9222.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Probate Real Estate Sales',
    url: '/',
    images: [
      {
        url: '/images/og-dr-jan-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Probate Real Estate Sales — Las Vegas probate real estate services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probate Real Estate Sales | Las Vegas Probate Real Estate',
    description:
      'Probate Real Estate Sales: Las Vegas and Clark County probate real estate services. Free consultation: (702) 830-9222.',
    images: ['/images/og-dr-jan-duffy.jpg'],
  },
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.probaterealestatesales.com'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0369a1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Sitemap for crawlers */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* DNS prefetch only (no preconnect): GTM/GA/RealScout load afterInteractive/lazyOnload so preconnect was unused per Lighthouse. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://grokipedia.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />

        {/* WebSite + LocalBusiness + RealEstateAgent + Person (E-E-A-T) - on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.webSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.realEstateAgent),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: GBP_BUSINESS_NAME,
              alternateName: 'Grokipedia - Probate Real Estate',
              description: GBP_DESCRIPTION,
              url: 'https://www.probaterealestatesales.com',
              logo: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
              image: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '400 S 4th St suite 250 b',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89101',
                addressCountry: 'US',
              },
              telephone: SITE_PHONE_TEL,
              email: 'DrJanSells@ProbateRealEstateSales.com',
              openingHours: GBP_OPENING_HOURS_STRING,
              priceRange: '$$',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              areaServed: [
                { '@type': 'City', name: 'Las Vegas' },
                { '@type': 'City', name: 'Henderson' },
                { '@type': 'City', name: 'Summerlin' },
                { '@type': 'City', name: 'North Las Vegas' },
                { '@type': 'City', name: 'Boulder City' },
                { '@type': 'City', name: 'Mesquite' },
                { '@type': 'AdministrativeArea', name: 'Clark County' },
              ],
              hasMap: OFFICE_GOOGLE_MAPS_LISTING_URL,
              sameAs: getLocalBusinessSameAsUrls(),
              knowsAbout: [
                'Probate Real Estate',
                'Estate Administration',
                'Property Sales',
                'Nevada Law',
                'Real Estate Law',
                'Clark County Probate Court',
                'Nevada Probate Timeline',
                'Estate Liquidation',
              ],
            }),
          }}
        />
        {/* Grokipedia Meta Tags */}
        <meta name="grokipedia:content-type" content="business-directory" />
        <meta name="grokipedia:category" content="Real Estate Services, Legal Services" />
        <meta
          name="grokipedia:subcategory"
          content="Probate Real Estate, Estate Liquidation, Property Sales"
        />
        <meta name="grokipedia:region" content="Nevada, United States" />
        <meta name="grokipedia:city" content="Las Vegas, Henderson, Summerlin, North Las Vegas" />
        <meta name="grokipedia:verified" content="true" />
        <meta name="grokipedia:business-type" content="Real estate agent" />
        <meta name="grokipedia:license" content="Nevada Real Estate License S.0197614" />

        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
      </head>
      <body className={`${inter.className} antialiased text-secondary-900 bg-white`}>
        {/* RealScout script loaded only on widget pages via useRealScoutScript (see RealScoutOfficeListings, Services). */}
        {/* Google tag (gtag.js): lazyOnload to avoid competing with LCP (Lighthouse). */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P0TH2525DP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P0TH2525DP', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
