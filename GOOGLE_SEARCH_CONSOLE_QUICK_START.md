# 🚀 Google Search Console - Quick Start Guide

## ⚡ 5-Minute Setup

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

Your site is already optimized for Google Search Console:

- ✅ **Robots.txt** - `/robots.txt` (allows all search engines)
- ✅ **XML Sitemap** - `/sitemap.xml` (41 pages included)
- ✅ **Canonical URLs** - All pages have proper canonical tags
- ✅ **Structured Data** - Complete schema.org markup
- ✅ **Meta Tags** - Title, description, Open Graph on all pages
- ✅ **HTTPS & WWW** - Proper redirects configured
- ✅ **Mobile-Friendly** - Responsive design
- ✅ **Fast Loading** - Optimized performance

## Not found (404) in GSC

If GSC shows **"Not found (404)"** for URLs like:

- **`https://www.probaterealestatesales.com/$`** – Fixed in code: `/$` and `/%24` now 301-redirect to `/` (see `next.config.js` and `vercel.json`). Deploy and re-validate.
- **`http://probaterealestatesales.com/`** or **`https://probaterealestatesales.com/terms`** – The bare domain must reach your app so middleware can 301 to `https://www...`. In **Vercel → Project → Settings → Domains**, add `probaterealestatesales.com` (in addition to `www.probaterealestatesales.com`). Point both to the same project; middleware will redirect non-www and HTTP to the canonical URL.

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

