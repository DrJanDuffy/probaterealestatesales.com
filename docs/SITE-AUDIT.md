# Site audit checklist (ongoing)

Use after major content or template changes. Prefer [Rich Results Test](https://search.google.com/test/rich-results), [PageSpeed Insights](https://pagespeed.web.dev/), and Google Search Console.

## Technical SEO

- [ ] `https://www.probaterealestatesales.com/sitemap.xml` loads and lists canonical URLs (trailing slash).
- [ ] `robots.txt` allows crawling and points sitemap to `www` on production.
- [ ] Root layout `metadataBase` and page-level `alternates.canonical` match live URLs.
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` set in Vercel (Search Console HTML tag).
- [ ] `npm run lint:internal-links` — internal links use trailing slashes for paths.

## Structured data

- [ ] LocalBusiness / LegalService JSON-LD: NAP + hours match Google Business Profile.
- [ ] `logo` / `image` URLs return 200 (use `SITE_LOGO_ABSOLUTE_URL` from `src/config/site-google.ts`).
- [ ] At most one FAQPage per page (see `SchemaMarkup` dedupe logic).

## Google Maps & GBP

- [ ] Office address and Maps links from `src/config/site-google.ts` match GBP.
- [ ] Optional: `NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL` for `sameAs` + footer “Google reviews”.

## Performance & a11y

- [ ] Lighthouse: contrast (primary text on white uses 700/900), heading order, no hydration errors on legal pages with dates.
- [ ] Images: descriptive `alt` with location/service where relevant.

## RealScout / IDX

- [ ] Do not change `components/idx/*` without explicit approval (MLS compliance).
