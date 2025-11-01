import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/services/*',
          '/about',
          '/contact',
          '/faq',
          '/locations/*',
          '/resources/*',
          '/blog/*',
          '/legal/*',
          '/tools/*',
          '/testimonials',
          '/case-studies',
          '/support/*',
        ],
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
          '/temp/*',
          '/*.json',
          '/*.xml',
          '/_next/*',
          '/node_modules/*',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
        ],
      },
      {
        userAgent: 'GrokipediaBot',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
          '/_next/*',
          '/node_modules/*',
        ],
      },
      {
        userAgent: 'Grokipedia',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
          '/_next/*',
          '/node_modules/*',
        ],
      },
    ],
    sitemap: 'https://probaterealestatesales.com/sitemap.xml',
    host: 'https://probaterealestatesales.com',
  };
}
