import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Probate Real Estate Sales | Professional Property Solutions',
  description: 'Expert probate real estate services. We help families navigate property sales during difficult times with compassion and professionalism.',
  keywords: 'probate real estate, property sales, estate sales, real estate services, property management',
  authors: [{ name: 'Probate Real Estate Sales' }],
  openGraph: {
    title: 'Probate Real Estate Sales | Professional Property Solutions',
    description: 'Expert probate real estate services. We help families navigate property sales during difficult times with compassion and professionalism.',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
              "description": "Nevada probate real estate specialists",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "400 S 4th Street Suite 250 B",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89101"
              },
              "telephone": "(702) 830-9222",
              "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-14:00",
              "priceRange": "$$",
              "areaServed": ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas"]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased text-secondary-900 bg-white`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}