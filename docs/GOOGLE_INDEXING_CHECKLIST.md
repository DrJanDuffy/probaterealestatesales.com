# Google Indexing Preparation Checklist

Use this checklist to prepare and maintain the site for optimal Google indexing.

## Google 2025/2026 SEO Focus: E-E-A-T

Post-December 2025 Core Update, **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness) is the primary ranking factor. The site implements:

| Pillar | Implementation |
|--------|----------------|
| **Experience (E)** | Person schema with 20+ years, 500+ sales, case-specific credentials |
| **Expertise (E)** | hasCredential (license S.0197614, Ph.D.), knowsAbout, comprehensive topic coverage |
| **Authoritativeness (A)** | worksFor (Berkshire Hathaway), award, sameAs (LinkedIn, About page) |
| **Trustworthiness (T)** | NAP consistency, aggregateRating, LegalService schema, privacy/terms |

**People-first content:** Authors metadata, author bylines on About, unique titles/descriptions per page, no keyword stuffing.

## Technical Setup (Already Implemented)

| Item | Status |
|------|--------|
| **robots.txt** | Allows Googlebot, blocks only `/api/*`, `/admin/*`, `/private/*` |
| **Sitemap** | `https://www.probaterealestatesales.com/sitemap.xml` – all 38+ pages |
| **Canonical URLs** | Every page has canonical; www + trailing slash enforced |
| **Metadata** | Unique title, description, keywords on each page |
| **robots meta** | `index, follow` on key pages; `googleBot` hints (max-snippet, max-image-preview) |
| **JSON-LD** | LocalBusiness, RealEstateAgent, Person (E-E-A-T), LegalService on every page |
| **Viewport** | Mobile-friendly viewport meta |
| **Internal links** | Homepage Quick Nav + Services dropdown link to key pages |

## Pre-Launch Verification

1. **robots.txt**
   - Visit: `https://www.probaterealestatesales.com/robots.txt`
   - Confirm `Sitemap:` line and `Allow` for `/` (no over-restrictive rules)

2. **Sitemap**
   - Visit: `https://www.probaterealestatesales.com/sitemap.xml`
   - Confirm all URLs use `https://www.` and trailing slashes
   - Check for 404s: open a few URLs from the sitemap

3. **Structured Data**
   - Use [Rich Results Test](https://search.google.com/test/rich-results) on homepage and a service page
   - Fix any errors or warnings

4. **Mobile-Friendly**
   - Use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## Google Search Console Setup

1. **Verify property**
   - Domain: `probaterealestatesales.com` (DNS TXT or HTML file)
   - Or URL prefix: `https://www.probaterealestatesales.com/`

2. **Submit sitemap**
   - GSC → Sitemaps → Add: `https://www.probaterealestatesales.com/sitemap.xml`
   - Click Submit

3. **Request indexing for key pages** (if "Discovered - not indexed")
   - Use URL Inspection for each URL
   - See [GOOGLE_INDEXING_REQUEST.md](GOOGLE_INDEXING_REQUEST.md) for the 8 affected URLs

## Ongoing Maintenance

| Task | Frequency |
|------|-----------|
| Request indexing for new/updated pages | After publishing |
| Review Coverage report in GSC | Monthly |
| Fix crawl errors | As reported |
| Update sitemap when adding pages | Automatic (Next.js generates) |
| Re-submit sitemap after major changes | Optional |

## URL Format (Canonical)

- **Preferred:** `https://www.probaterealestatesales.com/contact/`
- Middleware redirects: `http` → `https`, non-www → www, adds trailing slash
- All sitemap and internal links use this format

## Quick Links

- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
