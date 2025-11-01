import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
          '/temp/*',
          '/_next/*',
          '/node_modules/*',
        ],
      },
      {
        userAgent: 'Googlebot',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
        ],
      },
      {
        userAgent: 'Bingbot',
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
        ],
      },
      {
        userAgent: 'GrokipediaBot',
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
        disallow: [
          '/api/*',
          '/admin/*',
          '/private/*',
          '/_next/*',
          '/node_modules/*',
        ],
      },
    ],
    sitemap: 'https://www.probaterealestatesales.com/sitemap.xml',
    host: 'https://www.probaterealestatesales.com',
  };
}
