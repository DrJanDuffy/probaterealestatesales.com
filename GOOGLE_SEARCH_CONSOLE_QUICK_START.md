# 🚀 Google Search Console - Quick Start Guide

## ⚡ 5-Minute Setup

### Canonical URL Rule (Important)
- Use `https://www.probaterealestatesales.com/.../` in URL Inspection and Rich Results Test.
- Do not validate non-canonical examples first (apex or missing trailing slash), because those are redirect variants.

### Step 1: Get Verification Code
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click **"Add Property"** → **"URL prefix"**
3. Enter: `https://www.probaterealestatesales.com`
4. Choose **"HTML tag"** verification method
5. Copy the verification code (looks like: `abc123xyz789`)

### Step 2: Add to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. **Settings** → **Environment Variables**
4. Add:
   - **Name**: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   - **Value**: `[paste-your-code]`
   - **Environments**: ✅ Production ✅ Preview ✅ Development
5. Click **"Save"**
6. **Redeploy** your site

### Step 3: Verify
1. Go back to Google Search Console
2. Click **"Verify"**
3. ✅ Success!

### Step 4: Submit Sitemap
1. In Search Console, click **"Sitemaps"** (left menu)
2. Enter: `sitemap.xml`
3. Click **"Submit"**

### Step 5: Request Indexing (Key Pages)
1. Use **URL Inspection** tool
2. Enter these URLs and click **"Request Indexing"**:
   - `https://www.probaterealestatesales.com/`
   - `https://www.probaterealestatesales.com/services/`
   - `https://www.probaterealestatesales.com/about/`
   - `https://www.probaterealestatesales.com/contact/`
   - `https://www.probaterealestatesales.com/faq/`

## ✅ Already Configured

**Primary site:** `https://www.probaterealestatesales.com` (www is canonical; bare domain redirects here.)

Your site is already optimized for Google Search Console:

- ✅ **Robots.txt** - `/robots.txt` (allows all search engines)
- ✅ **XML Sitemap** - `/sitemap.xml` (41 pages included)
- ✅ **Canonical URLs** - All pages have proper canonical tags (www + trailing slash)
- ✅ **Structured Data** - Complete schema.org markup
- ✅ **Meta Tags** - Title, description, Open Graph on all pages
- ✅ **HTTPS & WWW** - www is primary; non-www and HTTP 301 to www
- ✅ **Mobile-Friendly** - Responsive design
- ✅ **Fast Loading** - Optimized performance

## Not found (404) in GSC

If GSC shows **"Not found (404)"** for URLs like:

- **`https://www.probaterealestatesales.com/$`** – Fixed in code: `/$` and `/%24` now 301-redirect to `/` (see `next.config.js` and `vercel.json`). Deploy and re-validate.
- **`http://probaterealestatesales.com/`** or **`https://probaterealestatesales.com/terms`** – The bare domain must reach your app so middleware can 301 to `https://www...`. In **Vercel → Project → Settings → Domains**, add `probaterealestatesales.com` (in addition to `www.probaterealestatesales.com`). Point both to the same project; middleware will redirect non-www and HTTP to the canonical URL.

**"Unable to resolve https://probaterealestatesales.com/"** – This means DNS does not resolve the bare domain (apex). Fix it in your DNS provider (e.g. Cloudflare, your registrar): add the **apex** record Vercel shows when you add `probaterealestatesales.com` (usually an A record to Vercel’s IP or a CNAME flattening setup). Until the apex resolves, only `https://www.probaterealestatesales.com` will work; the site and canonicals use `www`, so the live site is fine.

### Apex DNS Fix Checklist (Vercel + Registrar)
1. In **Vercel → Project → Settings → Domains**, make sure both domains are attached:
   - `www.probaterealestatesales.com`
   - `probaterealestatesales.com`
2. In your DNS provider, set apex (`@`) to the exact record value Vercel shows for this project.
3. Remove conflicting apex records (old A/AAAA/CNAME entries pointing elsewhere).
4. If using Cloudflare, keep DNS-only (gray cloud), not proxied.
5. Re-test:
   - `https://probaterealestatesales.com/` should permanently redirect to `https://www.probaterealestatesales.com/`
   - `https://www.probaterealestatesales.com/` should return `200`

## Crawled - currently not indexed (non-www URLs)

If GSC shows **"Crawled - currently not indexed"** for URLs like:

- `https://probaterealestatesales.com/`
- `https://probaterealestatesales.com/faq`
- `https://probaterealestatesales.com/locations/boulder-city`

this usually means Google is crawling the **non-www** variant. Those URLs are not supposed to be indexed; the **canonical** version is `https://www.probaterealestatesales.com/...`. The app’s middleware 301-redirects non-www → www, so once the request hits your app, Google gets a redirect and indexes the www URL instead.

**What to do:**

1. **Ensure the bare domain reaches the app** – In **Vercel → Project → Settings → Domains**, add `probaterealestatesales.com` (same project as `www.probaterealestatesales.com`). Then every request to the bare domain hits your app and gets a 301 to www.
2. **No code change needed** – Middleware already redirects `probaterealestatesales.com` → `https://www.probaterealestatesales.com/...` with a trailing slash.
3. **Optional** – In GSC, use **URL Inspection** on the **www** URL (e.g. `https://www.probaterealestatesales.com/faq/`) and request indexing so Google reinforces the canonical. The non-www “Crawled - currently not indexed” count may stay for a while; it’s expected and not an error.

## 📊 What to Monitor

### Manual GSC Actions (Post-Deploy)
- Confirm property coverage:
  - URL-prefix property: `https://www.probaterealestatesales.com/`
  - Optional domain property: `probaterealestatesales.com`
- Submit/re-submit sitemap when route inventory changes:
  - `https://www.probaterealestatesales.com/sitemap.xml`
- URL Inspection priority queue (highest first):
  - homepage
  - services hub and new/updated service pages
  - locations hub and priority location pages
  - resources and blog pages updated this sprint
- For enhancement/indexing issues:
  1. fix template/code issue
  2. test live URL
  3. click **Validate fix** in the affected report
- Monitoring cadence:
  - weekly: Page indexing + Enhancements
  - monthly: Performance trends (queries/pages) and content refresh list

### Week 1-2
- **Coverage**: Check for indexing errors
- **Performance**: Track impressions and clicks
- **Enhancements**: Verify structured data

### Monthly
- Review top search queries
- Check page performance
- Fix any errors

## 🔗 Important Links

- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [URL Inspection Tool](https://search.google.com/search-console/inspect)

---

**Need more details?** See `GOOGLE_SEARCH_CONSOLE_SETUP.md` for comprehensive guide.

