import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className={`${inter.className} antialiased text-secondary-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
