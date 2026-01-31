# Hyperlocal SEO Checklist

Monthly checklist for hyperlocal probate SEO across all locations.

## Location Pages

- [ ] All 8 locations have dedicated pages (Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, Enterprise, Mesquite, Spring Valley)
- [ ] Each location page has unique title, meta description, H1
- [ ] Location-specific schema (LocalBusiness with areaServed)
- [ ] NAP consistent on every location page
- [ ] Internal links use location anchor text ("probate in Henderson")
- [ ] Map embed and "Directions" on location pages

## Probate Services

- [ ] All 7 probate service pages in sitemap
- [ ] Service pages link to relevant location pages
- [ ] hasOfferCatalog in schema includes all services
- [ ] FAQ schema on /faq/

## Content

- [ ] Nevada probate facts correct (6-8 months, $1,000 Clark County)
- [ ] Phone (702) 830-9222 on every page
- [ ] Alt text includes location + service on images
- [ ] Blog/resource links from service and location pages

## Scripts

Run before deployment:
```bash
node scripts/hyperlocal-schema-validate.js
node scripts/probate-content-audit.js
```
