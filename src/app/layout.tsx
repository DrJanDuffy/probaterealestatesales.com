import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { defaultSchemas } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Las Vegas Probate Realtor | Probate Homes Expert | Dr. Jan Duffy',
  description:
    'Top Las Vegas probate realtor specializing in probate homes. Sell inherited properties in 45 days - guaranteed! Free consultation: (702) 830-9222. Court-approved expert with 500+ sales. No upfront costs.',
  keywords:
    'probate realtor, probate homes, Las Vegas probate realtor, probate real estate agent, probate homes Las Vegas, sell probate property, inherited property sales, grokipedia',
  authors: [{ name: 'Probate Real Estate Sales' }],
  openGraph: {
    title: 'Las Vegas Probate Realtor | Probate Homes Expert | Dr. Jan Duffy',
    description:
      'Top Las Vegas probate realtor specializing in probate homes. Sell inherited properties in 45 days - guaranteed! Free consultation: (702) 830-9222. No upfront costs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Probate Real Estate Sales',
    url: '/',
    images: [
      {
        url: '/images/dr-jan-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Probate Real Estate Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Las Vegas Probate Realtor | Probate Homes Expert',
    description:
      'Top Las Vegas probate realtor specializing in probate homes. Sell inherited properties in 45 days. Free consultation.',
    images: ['/images/dr-jan-duffy.jpg'],
  },
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/',
  },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Sitemap for crawlers */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* Google Search Console & Performance Optimizations */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* Grokipedia Optimizations */}
        <link rel="preconnect" href="https://grokipedia.com" />

        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          async
        />
        {/* LocalBusiness + RealEstateAgent - on every page */}
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
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: 'Probate Real Estate Sales',
              alternateName: 'Grokipedia - Probate Real Estate',
              description:
                'Nevada probate real estate specialists. Expert services for court-approved property sales, estate liquidation, and probate administration.',
              url: 'https://www.probaterealestatesales.com',
              logo: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
              image: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '400 S 4th Street Suite 250 B',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89101',
                addressCountry: 'US',
              },
              telephone: '(702) 830-9222',
              email: 'DrJanSells@ProbateRealEstateSales.com',
              openingHours: 'Mo-Fr 08:00-18:00, Sa 09:00-14:00',
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
              sameAs: ['https://www.probaterealestatesales.com'],
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
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '25',
              },
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
        <meta name="grokipedia:business-type" content="Legal Services, Real Estate Services" />
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
        {/* RealScout: lazy load after page interactive (avoids render block, 206 KiB) */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="lazyOnload"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P0TH2525DP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
