# 🔍 Google Search Console Setup Guide

## Overview
This guide will help you set up and verify your website in Google Search Console for optimal SEO performance.

## ✅ Pre-Setup Checklist

### 1. Technical SEO Elements (Already Configured)

- ✅ **Robots.txt** - Located at `/robots.txt`
  - Allows all search engines
  - Blocks API routes and admin areas
  - Points to sitemap

- ✅ **XML Sitemap** - Located at `/sitemap.xml`
  - All 41 pages included
  - Proper priorities and change frequencies
  - Updated timestamps

- ✅ **Canonical URLs** - All pages have canonical tags
  - Format: `https://www.probaterealestatesales.com/[page]/`
  - Consistent www subdomain

- ✅ **Structured Data (Schema.org)** - Complete implementation
  - LocalBusiness (matches GBP)
  - RealEstateAgent
  - Organization
  - FAQPage (all pages)
  - BreadcrumbList (all pages)
  - Review & AggregateRating
  - Person
  - WebSite
  - Article (blog posts)
  - HowTo (resource pages)

- ✅ **Meta Tags** - Complete on all pages
  - Title tags (unique per page)
  - Meta descriptions (unique per page)
  - Open Graph tags
  - Twitter Card tags
  - Robots meta tags

- ✅ **HTTPS & WWW Redirects** - Configured in middleware
  - All HTTP → HTTPS
  - Non-www → www

## 🚀 Step-by-Step Setup

### Step 1: Access Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**

### Step 2: Add Your Property

**Option A: Domain Property (Recommended)**
- Select **"Domain"** property type
- Enter: `probaterealestatesales.com`
- This covers both www and non-www versions

**Option B: URL Prefix Property**
- Select **"URL prefix"** property type
- Enter: `https://www.probaterealestatesales.com`

### Step 3: Verify Ownership

**Method 1: HTML Meta Tag (Easiest - Already Configured)**

1. Google will provide a verification code like: `abc123xyz789`
2. Add it to your Vercel environment variables:
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = `abc123xyz789`
   - Redeploy your site
3. The meta tag will automatically appear in your site's `<head>`
4. Click **"Verify"** in Google Search Console

**Method 2: HTML File Upload**
- Download the HTML file from Google
- Upload it to `/public/google[verification-code].html`
- Click **"Verify"** in Google Search Console

**Method 3: DNS Record**
- Add a TXT record to your DNS
- Name: `@` or root domain
- Value: `google-site-verification=abc123xyz789`
- Wait for DNS propagation (can take up to 48 hours)
- Click **"Verify"** in Google Search Console

### Step 4: Submit Your Sitemap

1. In Google Search Console, go to **"Sitemaps"** in the left menu
2. Enter: `https://www.probaterealestatesales.com/sitemap.xml`
3. Click **"Submit"**
4. Google will start crawling your site

### Step 5: Request Indexing (Important Pages)

After verification, request indexing for key pages:

1. **Homepage**: `https://www.probaterealestatesales.com/`
2. **Services**: `https://www.probaterealestatesales.com/services/`
3. **About**: `https://www.probaterealestatesales.com/about/`
4. **Contact**: `https://www.probaterealestatesales.com/contact/`
5. **FAQ**: `https://www.probaterealestatesales.com/faq/`

**How to Request Indexing:**
- Use the URL Inspection tool in Search Console
- Enter the URL
- Click **"Request Indexing"**

## 📊 Post-Setup Monitoring

### Week 1-2: Initial Monitoring

1. **Coverage Report**
   - Check for indexing errors
   - Monitor submitted vs indexed pages
   - Fix any crawl errors

2. **Performance Report**
   - Track impressions and clicks
   - Monitor average position
   - Identify top-performing pages

3. **Enhancements Report**
   - Check for structured data errors
   - Verify rich results are showing
   - Fix any schema markup issues

### Ongoing Monitoring

1. **Weekly Checks**
   - Review new indexing issues
   - Monitor search performance
   - Check for manual actions

2. **Monthly Reviews**
   - Analyze top queries
   - Review page performance
   - Update sitemap if needed

## 🔧 Environment Variable Setup

### For Vercel Deployment:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following:

```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION = [your-verification-code]
```

5. **Important**: Select **"Production"**, **"Preview"**, and **"Development"** environments
6. Click **"Save"**
7. Redeploy your site

### For Local Development:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code-here
```

**Note**: Never commit `.env.local` to git (it's already in `.gitignore`)

## ✅ Verification Checklist

After setup, verify the following:

- [ ] Google Search Console property added
- [ ] Ownership verified (meta tag method)
- [ ] Sitemap submitted and processed
- [ ] Key pages requested for indexing
- [ ] No crawl errors in Coverage report
- [ ] Structured data validated (use Rich Results Test)
- [ ] Mobile usability passed
- [ ] Core Web Vitals monitored
- [ ] Security issues checked (no manual actions)

## 🧪 Testing Tools

### 1. Rich Results Test
- URL: https://search.google.com/test/rich-results
- Test your homepage and key pages
- Verify all schema markup is valid

### 2. Mobile-Friendly Test
- URL: https://search.google.com/test/mobile-friendly
- Verify your site is mobile-friendly

### 3. PageSpeed Insights
- URL: https://pagespeed.web.dev/
- Monitor Core Web Vitals
- Track performance scores

### 4. URL Inspection Tool
- In Google Search Console
- Test individual URLs
- Request indexing for new/updated pages

## 📈 Expected Timeline

- **Day 1**: Property added and verified
- **Day 1-3**: Sitemap processed (41 pages)
- **Week 1**: Initial indexing begins
- **Week 2-4**: Most pages indexed
- **Month 1-3**: Search performance data accumulates

## 🚨 Common Issues & Solutions

### Issue: "Property not verified"
**Solution**: 
- Double-check meta tag is in `<head>`
- Ensure environment variable is set correctly
- Wait a few minutes and try again

### Issue: "Sitemap not found"
**Solution**:
- Verify sitemap is accessible: `https://www.probaterealestatesales.com/sitemap.xml`
- Check robots.txt allows sitemap
- Ensure sitemap URL is correct

### Issue: "Pages not indexed"
**Solution**:
- Request indexing manually
- Check for crawl errors
- Verify robots.txt isn't blocking
- Ensure pages have proper canonical URLs

### Issue: "Structured data errors"
**Solution**:
- Use Rich Results Test to identify errors
- Fix schema markup issues
- Re-test after fixes

## 📝 Next Steps After Setup

1. **Submit Sitemap** (if not done automatically)
2. **Request Indexing** for key pages
3. **Set up Email Notifications** in Search Console settings
4. **Connect Google Analytics** (if not already connected)
5. **Monitor Performance** weekly
6. **Fix Any Errors** promptly
7. **Update Content** regularly to maintain freshness

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Central](https://developers.google.com/search)

---

**Last Updated**: December 2025
**Status**: Ready for Google Search Console setup ✅

