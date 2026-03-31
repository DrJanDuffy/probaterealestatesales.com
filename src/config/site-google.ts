/**
 * Canonical URLs for Google Search Console, Maps, and Business Profile alignment.
 * NAP must match Google Business Profile everywhere (visible text + JSON-LD).
 * Lead flow is primarily GBP-driven; keep `src/lib/site-contact.ts` in sync with the live profile.
 */

export const SITE_ORIGIN = 'https://www.probaterealestatesales.com';

/** Use in JSON-LD logo / image when a dedicated /logo.png is not deployed (matches OG + Person schema). */
export const SITE_LOGO_ABSOLUTE_URL = `${SITE_ORIGIN}/images/dr-jan-duffy.jpg`;

/** Single-line address for Maps query params (matches GBP / site NAP) */
export const OFFICE_ADDRESS_LINE = '400 S 4th St suite 250 b, Las Vegas, NV 89101';

/** Google Maps: search / place listing (use in schema.org hasMap + sameAs) */
export const OFFICE_GOOGLE_MAPS_LISTING_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS_LINE)}`;

/** Google Maps: driving directions (Call / Directions / GBP consistency) */
export const OFFICE_GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS_LINE)}`;

/** Embed iframe src (Google Maps embed) */
export const OFFICE_GOOGLE_MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS_LINE)}&output=embed&hl=en&z=15`;

/** Official business profiles (use in footer + sameAs; keep in sync with GBP / marketing). */
export const FACEBOOK_PAGE_URL = 'https://www.facebook.com/probaterealestatesales' as const;
export const INSTAGRAM_PAGE_URL = 'https://www.instagram.com/probaterealestatesales' as const;
export const LINKEDIN_COMPANY_URL = 'https://www.linkedin.com/company/probaterealestatesales' as const;
export const THREADS_PROFILE_URL = 'https://www.threads.com/@probaterealestatesales' as const;

const SOCIAL_SAME_AS = [
  SITE_ORIGIN,
  FACEBOOK_PAGE_URL,
  LINKEDIN_COMPANY_URL,
  INSTAGRAM_PAGE_URL,
  THREADS_PROFILE_URL,
] as const;

/**
 * sameAs for LocalBusiness: optional GBP URL first (from env), then social + Maps listing.
 * Set NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL to your public Business Profile / Maps CID link.
 */
export function getLocalBusinessSameAsUrls(): string[] {
  const gbp = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim();
  const out: string[] = [];

  if (gbp && /^https?:\/\//i.test(gbp) && !out.includes(gbp)) {
    out.push(gbp);
  }

  for (const u of SOCIAL_SAME_AS) {
    if (!out.includes(u)) out.push(u);
  }

  if (!out.includes(OFFICE_GOOGLE_MAPS_LISTING_URL)) {
    out.push(OFFICE_GOOGLE_MAPS_LISTING_URL);
  }

  return out;
}
