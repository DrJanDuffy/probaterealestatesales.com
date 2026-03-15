# SEO, GEO & AEO Audit — Probate Real Estate Sales

**Site:** https://www.probaterealestatesales.com  
**Primary:** www (canonical); bare domain redirects to www  
**Audit focus:** Traditional SEO, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO)  
**Date:** March 2026

---

## Standards & sources (March 2026)

This audit follows current best practices as of March 2026:

- **SEO / E-E-A-T:** Post–December 2025 Core Update, E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is the primary ranking lens. Google emphasizes entity-first signals: clear ownership, consistent NAP, credentials, and human oversight. Speed is table stakes; trust and experience differentiate. Aggressive AI-only content or unreviewed automation can trigger penalties. ([E-E-A-T 2026 playbooks](https://www.ultraseosolutions.com/google-leak-e-e-a-t-trust-the-2026-seo-playbook/), [Trusted AI SEO](https://trustedaiseo.com/e-e-a-t-for-ai-content/).)
- **Structured data:** JSON-LD is Google’s recommended format. Entity-first schema with stable `@id` and `sameAs` supports rich results and AI/answer-engine understanding. **FAQ rich results** (expandable FAQ in SERPs) are restricted to government and health sites (since Aug 2023); **FAQPage markup is still recommended** for all sites—Google uses it for understanding and AI Overviews even when the FAQ rich result is not shown. ([Structured data 2026](https://www.digitalapplied.com/blog/structured-data-seo-2026-rich-results-guide), [FAQ schema 2025](https://www.oreateai.com/blog/unlocking-faq-rich-results-2025-guide-for-government-and-health-sites).)
- **GEO / llms.txt:** llms.txt at `/llms.txt` is the de facto standard for AI discoverability (proposed 2024, widely adopted by 2025–2026). Markdown format with H1/H2, blockquotes for summaries, and structured links reduces token use and improves AI citation. robots.txt controls crawler access; llms.txt curates what AI should read. ([llms.txt 2025](https://llmscentral.com/what-is-llms-txt-file), [specs](https://www.oreateai.com/blog/llmstxt-technical-specifications-and-application-guide).)
- **AEO / answer engines:** Optimize for AI Overview and answer-engine citations by making entities unambiguous and intent explicit; direct, answer-first phrasing and definitional Q&A help. ([Structured data 2026](https://www.digitalapplied.com/blog/structured-data-seo-2026-rich-results-guide).)

---

## Executive summary

| Area | Status | Priority fixes |
|------|--------|----------------|
| **SEO** | Strong | Keep internal links trailing-slash; validate schema; monitor Core Web Vitals |
| **GEO** | Good | llms.txt links fixed; add llms.txt discovery (link or doc) |
| **AEO** | Good | FAQ schema + definitional content; tighten answer-first phrasing for snippets/AI |

The site is well set up for E-E-A-T, local SEO, and AI discoverability. Remaining work is refinement and ensuring GEO/AEO assets are discoverable and consistent.

---

## 1. SEO audit

### 1.1 Technical SEO

| Check | Status | Notes |
|-------|--------|------|
| Canonical host | OK | www.probaterealestatesales.com; middleware 301 non-www and HTTP |
| Trailing slash | OK | next.config `trailingSlash: true`; internal links normalized |
| Sitemap | OK | `/sitemap.xml`; URLs use www + trailing slash |
| robots.txt | OK | Allows `/`; AI bots (GPTBot, ClaudeBot, etc.) allowed; sitemap URL present |
| metadataBase | OK | `https://www.probaterealestatesales.com` (www) in layout |
| Redirects | OK | /$, /%24, /lander → homepage (301); no chains |
| Mobile / viewport | OK | Viewport meta; responsive layout |
| Core Web Vitals | Verify | Run LCP, INP (or FID), CLS in production; optimize images if needed |

**Recommendation:** Run Lighthouse (or PageSpeed) on key URLs monthly; fix any regressions.

### 1.2 On-page & metadata

| Check | Status | Notes |
|-------|--------|------|
| Unique title per page | OK | Titles include location/service/key intent |
| Meta description length | OK | Target &lt; 160 chars; check a few long ones |
| H1 per page | OK | Single H1, intent-aligned |
| Canonical on every page | OK | alternates.canonical with full www URL |
| Open Graph / Twitter | OK | og:title, og:description, og:image, twitter cards |
| robots | OK | index, follow; googleBot max-snippet, max-image-preview |

**Recommendation:** Audit 3–5 service/location pages for meta description length and keyword fit.

### 1.3 Schema & structured data

| Check | Status | Notes |
|-------|--------|------|
| LocalBusiness | OK | NAP, geo, openingHours, areaServed |
| RealEstateAgent | OK | Person + organization; service area |
| WebSite | OK | SearchAction; sitelinks potential |
| Person (E-E-A-T) | OK | License, credentials, sameAs |
| FAQPage | OK | FAQ component drives schema on /faq/. Note: FAQ *rich results* in SERPs are restricted to gov/health sites (Aug 2023); markup still recommended for indexing and AI/answer engines. |
| Article (blog) | Verify | Blog posts use Article schema with author, datePublished |

**Recommendation:** Validate homepage and /faq/ in [Rich Results Test](https://search.google.com/test/rich-results). Add or fix Article on blog posts if missing. Keep FAQPage schema—it supports AI Overviews and understanding even when the FAQ rich result is not shown.

### 1.4 NAP & GBP

| Check | Status | Notes |
|-------|--------|------|
| NAP consistency | OK | Same NAP in schema and visible content |
| GBP alignment | OK | Business name, address, phone match GBP |
| Call / Directions / Reviews | OK | Present on contact and key pages |

### 1.5 Internal linking

| Check | Status | Notes |
|-------|--------|------|
| Trailing slash | OK | All internal links use trailing slash (lint:internal-links) |
| Location anchor text | OK | “Probate in [Location]” style used |
| Key pages from homepage | OK | Services, locations, resources linked |

---

## 2. GEO audit (Generative Engine Optimization)

GEO optimizes for AI/LLM discovery and citation: clear entity, structured content, and machine-readable summaries.

### 2.1 AI discoverability

| Check | Status | Notes |
|-------|--------|------|
| llms.txt | OK | `/llms.txt` — Markdown-style (H1, H2, blockquotes, lists); About, Services, Coverage, Key facts, Key pages, Contact. Aligns with 2025–2026 llms.txt spec. |
| llms.txt links | Fixed | Valid routes: /about/, /resources/nevada-probate-guide/, /locations/ (was probate-guide, communities) |
| Trailing slash in llms.txt | OK | Key page URLs use trailing slash |
| robots.txt and AI bots | OK | GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, Google-Extended, etc. allowed `/` |
| Sitemap for AI | OK | Same sitemap as search; all canonical URLs |

**Recommendation:** Add a discoverable link to `/llms.txt` (e.g. `<link rel="alternate" type="text/plain" href="/llms.txt" />` in head, or footer “For AI / Researchers” link) so crawlers that don’t guess the path can find it.

### 2.2 Entity & structure

| Check | Status | Notes |
|-------|--------|------|
| Clear entity | OK | “Dr. Jan Duffy,” “Probate Real Estate Sales,” license, brokerage |
| Structured facts | OK | llms.txt and schema: timeline, costs, small estate limit, sale methods |
| Service list | OK | Bulleted services in llms.txt and schema |
| Geographic scope | OK | Clark County, cities, Nevada |

### 2.3 Content for AI consumption

| Check | Status | Notes |
|-------|--------|------|
| Definitional content | OK | FAQ and guides define probate, certificate of incumbency, timelines |
| Scannable headings | OK | H2/H3 hierarchy; FAQ questions as headings |
| Numbers and dates | OK | “6–8 months,” “$100,000,” “$8,000–9,000” in text and schema |
| Citations / sources | Partial | Internal links to guides; consider citing NRS or court when relevant |

**Recommendation:** Where legally appropriate, add short “Source: NRS …” or “Clark County Court” references to strengthen authority for GEO.

---

## 3. AEO audit (Answer Engine Optimization)

AEO optimizes for being used as the source of answers in search snippets and AI answers: direct answers, definitions, and FAQ schema.

### 3.1 Featured snippet / answer readiness

| Check | Status | Notes |
|-------|--------|------|
| FAQ schema | OK | FAQPage with question/answer pairs on /faq/ |
| Answer-first phrasing | Good | e.g. “Nevada probate typically takes 6–8 months” at start of answers |
| Definitional Q&A | OK | “What is a probate sale?”, “What is a certificate of incumbency?” |
| Lists and steps | OK | Numbered steps in process answers; bullet lists in content |
| Tables (if needed) | Optional | Consider a small “Timeline vs cost” table on /faq/ or /resources/ |

**Recommendation:** For top 3–5 questions, ensure the first sentence is a direct, snippet-ready answer (40–60 words), then expand.

### 3.2 Snippet-friendly patterns

| Check | Status | Notes |
|-------|--------|------|
| H2/H3 as questions | OK | FAQ headings are full questions |
| One clear answer per Q | OK | No multi-topic paragraphs per question |
| Length of answers | Good | 1–3 short paragraphs; some could be tightened for snippet length |
| Internal links from answers | OK | Links to /blog/, /resources/, /services/ |

### 3.3 Authority and citation

| Check | Status | Notes |
|-------|--------|------|
| Author byline | OK | Dr. Jan Duffy; authors in metadata |
| Expert schema | OK | Person, RealEstateAgent, credentials |
| Contact visible | OK | Phone, email, contact page |

---

## 4. Prioritized recommendations

### High (do soon)

1. **llms.txt discovery** — Add a discoverable link to `/llms.txt` (e.g. in footer “For AI/Researchers” or in docs) so AI crawlers can find it.
2. **Validate schema** — Run Rich Results Test on homepage, /faq/, and one blog post; fix any errors and add Article where missing.
3. **GSC** — Keep fixing “Page with redirect” and “Not found (404)” via trailing-slash links and redirects; add bare domain in Vercel if needed.

### Medium (next 1–2 months)

4. **AEO** — Edit 3–5 top FAQ answers so the first sentence is a single, 40–60 word direct answer.
5. **Blog Article schema** — Ensure every blog post has Article JSON-LD (author, datePublished, dateModified).
6. **Core Web Vitals** — Measure LCP, INP (or FID), CLS on production; optimize images and blocking resources if needed.

### Low (ongoing)

7. **Citations** — Add 1–2 authoritative references (e.g. NRS, court) where it fits and is compliant.
8. **Tables** — Add a small comparison table (e.g. probate vs trust timeline/cost) on FAQ or resources for snippets.
9. **Monthly checklist** — Use `docs/seo/audit-checklist.md` and this doc for a quick monthly pass.

---

## 5. Quick reference

| Asset | URL |
|-------|-----|
| Primary site | https://www.probaterealestatesales.com |
| Sitemap | https://www.probaterealestatesales.com/sitemap.xml |
| robots | https://www.probaterealestatesales.com/robots.txt |
| llms.txt (GEO) | https://www.probaterealestatesales.com/llms.txt |
| FAQ (AEO) | https://www.probaterealestatesales.com/faq/ |
| Rich Results Test | https://search.google.com/test/rich-results |
| GSC | https://search.google.com/search-console |

---

## References (March 2026)

- Google E-E-A-T and post–Dec 2025 Core Update: entity-first SEO, experience signals, human oversight.
- Structured data: [Google Search Central](https://support.google.com/webmasters/answer/99170), [Rich Results Test](https://search.google.com/test/rich-results). JSON-LD preferred; FAQPage still recommended for non–gov/health for AI and indexing.
- llms.txt: [What is llms.txt (2025)](https://llmscentral.com/what-is-llms-txt-file), [Technical specs](https://www.oreateai.com/blog/llmstxt-technical-specifications-and-application-guide). Markdown at `/llms.txt`, blockquotes for summaries.

*Audit performed against codebase and docs per March 2026 best practices; production URLs should be spot-checked. Re-run key checks after major content or schema changes.*
