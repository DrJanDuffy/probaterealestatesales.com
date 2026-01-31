/**
 * IndexNow - notify Bing, Yandex, etc. when URLs change
 * Key file: /a7f3c2e9d1b4567890abcdef12345678.txt (must contain the key)
 */

const INDEXNOW_KEY = 'a7f3c2e9d1b4567890abcdef12345678';
const HOST = 'www.probaterealestatesales.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

/** All canonical URLs to submit (matches sitemap) */
export const INDEXNOW_URLS = [
  'https://www.probaterealestatesales.com/',
  'https://www.probaterealestatesales.com/services/',
  'https://www.probaterealestatesales.com/probate-division/',
  'https://www.probaterealestatesales.com/probate-homes-for-sale/',
  'https://www.probaterealestatesales.com/trust-property-sales/',
  'https://www.probaterealestatesales.com/conservatorship-real-estate/',
  'https://www.probaterealestatesales.com/probate-property-buyers/',
  'https://www.probaterealestatesales.com/probate-property-valuation/',
  'https://www.probaterealestatesales.com/probate-estate-sales/',
  'https://www.probaterealestatesales.com/locations/',
  'https://www.probaterealestatesales.com/resources/',
  'https://www.probaterealestatesales.com/faq/',
  'https://www.probaterealestatesales.com/about/',
  'https://www.probaterealestatesales.com/contact/',
  'https://www.probaterealestatesales.com/blog/',
  'https://www.probaterealestatesales.com/testimonials/',
  'https://www.probaterealestatesales.com/home-valuation/',
  'https://www.probaterealestatesales.com/mortgage-calculator/',
  'https://www.probaterealestatesales.com/locations/las-vegas/',
  'https://www.probaterealestatesales.com/locations/henderson/',
  'https://www.probaterealestatesales.com/locations/summerlin/',
  'https://www.probaterealestatesales.com/locations/north-las-vegas/',
  'https://www.probaterealestatesales.com/locations/boulder-city/',
  'https://www.probaterealestatesales.com/locations/enterprise/',
  'https://www.probaterealestatesales.com/locations/mesquite/',
  'https://www.probaterealestatesales.com/locations/spring-valley/',
  'https://www.probaterealestatesales.com/resources/nevada-probate-guide/',
  'https://www.probaterealestatesales.com/resources/las-vegas-probate-guide/',
  'https://www.probaterealestatesales.com/privacy/',
  'https://www.probaterealestatesales.com/terms/',
  'https://www.probaterealestatesales.com/blog/probate-videos/',
  'https://www.probaterealestatesales.com/blog/market-updates/',
  'https://www.probaterealestatesales.com/blog/nevada-probate-timeline/',
  'https://www.probaterealestatesales.com/blog/certificate-of-incumbency/',
  'https://www.probaterealestatesales.com/blog/clark-county-probate/',
  'https://www.probaterealestatesales.com/blog/las-vegas-market-jan-2025/',
];

export async function submitToIndexNow(
  urls: string[] = INDEXNOW_URLS
): Promise<{ ok: boolean; status: number; message?: string }> {
  if (urls.length === 0) return { ok: true, status: 200 };
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls.slice(0, 10000),
  };
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  return {
    ok: res.ok,
    status: res.status,
    message: res.ok ? undefined : await res.text(),
  };
}

export function getIndexNowKey(): string {
  return INDEXNOW_KEY;
}
