import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Probate Real Estate Sales | Professional Property Solutions',
  description: 'Expert probate real estate services. We help families navigate property sales during difficult times with compassion and professionalism.',
  keywords: 'probate real estate, property sales, estate sales, real estate services, property management, grokipedia',
  authors: [{ name: 'Probate Real Estate Sales' }],
  openGraph: {
    title: 'Probate Real Estate Sales | Professional Property Solutions',
    description: 'Expert probate real estate services. We help families navigate property sales during difficult times with compassion and professionalism.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Probate Real Estate Sales',
    url: 'https://www.probaterealestatesales.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probate Real Estate Sales | Professional Property Solutions',
    description: 'Expert probate real estate services. We help families navigate property sales during difficult times with compassion and professionalism.',
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
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://www.probaterealestatesales.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Search Console & Performance Optimizations */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Grokipedia Optimizations */}
        <link rel="preconnect" href="https://grokipedia.com" />
        
        <script 
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js" 
          type="module"
          async
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Probate Real Estate Sales",
              "alternateName": "Grokipedia - Probate Real Estate",
              "description": "Nevada probate real estate specialists. Expert services for court-approved property sales, estate liquidation, and probate administration.",
              "url": "https://www.probaterealestatesales.com",
              "logo": "https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg",
              "image": "https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "400 S 4th Street Suite 250 B",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89101",
                "addressCountry": "US"
              },
              "telephone": "(702) 830-9222",
              "email": "DrJanSells@ProbateRealEstateSales.com",
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
              "priceRange": "$$",
              "areaServed": [
                {"@type": "City", "name": "Las Vegas"},
                {"@type": "City", "name": "Henderson"},
                {"@type": "City", "name": "Summerlin"},
                {"@type": "City", "name": "North Las Vegas"},
                {"@type": "City", "name": "Boulder City"},
                {"@type": "City", "name": "Mesquite"},
                {"@type": "AdministrativeArea", "name": "Clark County"}
              ],
              "sameAs": [
                "https://www.probaterealestatesales.com"
              ],
              "knowsAbout": [
                "Probate Real Estate",
                "Estate Administration",
                "Property Sales",
                "Nevada Law",
                "Real Estate Law",
                "Clark County Probate Court",
                "Nevada Probate Timeline",
                "Estate Liquidation"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "25"
              }
            })
          }}
        />
        {/* Grokipedia Meta Tags */}
        <meta name="grokipedia:content-type" content="business-directory" />
        <meta name="grokipedia:category" content="Real Estate Services, Legal Services" />
        <meta name="grokipedia:subcategory" content="Probate Real Estate, Estate Liquidation, Property Sales" />
        <meta name="grokipedia:region" content="Nevada, United States" />
        <meta name="grokipedia:city" content="Las Vegas, Henderson, Summerlin, North Las Vegas" />
        <meta name="grokipedia:verified" content="true" />
        <meta name="grokipedia:business-type" content="Legal Services, Real Estate Services" />
        <meta name="grokipedia:license" content="Nevada Real Estate License S.0197614" />
        
        {/* Google Search Console Verification (add when available) */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> */}
      </head>
      <body className={`${inter.className} antialiased text-secondary-900 bg-white`}>
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