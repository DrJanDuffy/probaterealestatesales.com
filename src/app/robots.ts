import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

function sitemapBaseUrl(hostHeader: string): string {
  const host = (hostHeader.split(':')[0] || 'localhost').toLowerCase();
  if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.vercel.app')) {
    return `https://${host}`;
  }
  if (host.includes('probaterealestatesales.com')) {
    return 'https://www.probaterealestatesales.com';
  }
  return `https://${host}`;
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('x-forwarded-host') || headersList.get('host') || 'localhost';
  const baseUrl = sitemapBaseUrl(host);

  return {
    rules: [
      // Default: allow all crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // ── AI Retrieval Bots (power AI search results) ──
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      {
        userAgent: 'Bytespider',
        allow: '/',
      },
      // ── AI Training Bots (maximizes visibility in AI models) ──
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
