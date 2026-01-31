# IndexNow Setup

IndexNow notifies Bing, Yandex, and other search engines when your URLs change for faster indexing.

## Key File

- **Location:** `https://www.probaterealestatesales.com/a7f3c2e9d1b4567890abcdef12345678.txt`
- **Content:** The key (same as filename minus .txt)
- **Do not change** unless you rotate the key

## Submitting URLs

### Option 1: API (on deploy or after content update)

```bash
curl -X POST "https://www.probaterealestatesales.com/api/indexnow?secret=YOUR_REVALIDATION_SECRET"
```

With specific URLs:
```bash
curl -X POST "https://www.probaterealestatesales.com/api/indexnow?secret=XXX&urls=/terms/,/faq/"
```

### Option 2: Script (manual or cron)

```bash
# Submit all sitemap URLs
node scripts/indexnow-submit.js

# Submit specific paths
node scripts/indexnow-submit.js /terms/ /faq/ /locations/henderson/
```

### Option 3: Single URL (browser or curl)

```
https://api.indexnow.org/indexnow?url=https://www.probaterealestatesales.com/terms/&key=a7f3c2e9d1b4567890abcdef12345678
```

## When to Submit

- After publishing new blog posts
- After updating key pages (terms, privacy, services)
- After deployment (optional: add to Vercel deploy hook)
- When triggering ISR revalidation

## Integration with Revalidate

To submit to IndexNow when revalidating, call both:

```bash
curl -X POST "https://www.probaterealestatesales.com/api/revalidate?secret=XXX&path=/locations/henderson/"
curl -X POST "https://www.probaterealestatesales.com/api/indexnow?secret=XXX&urls=/locations/henderson/"
```

Or extend the revalidate API to optionally trigger IndexNow.
