# Hyperlocal Probate Strategy

Strategy and data for hyperlocal probate real estate SEO and content across Nevada/Clark County.

## Overview

- **Primary areas:** Las Vegas, Henderson, Summerlin, North Las Vegas, Boulder City, Enterprise, Mesquite, Spring Valley
- **Court:** Clark County District Court (James Fontana, Russell Geis)
- **Focus:** Location-specific probate services, NAP consistency, GBP alignment

## Folder Contents

| File | Purpose |
|------|---------|
| `README.md` | This overview |
| `locations.md` | Location data, coordinates, neighborhoods |
| `probate-services.md` | Comprehensive probate service list |
| `content-guidelines.md` | Hyperlocal content and alt text patterns |

## Key Data Sources

- `src/lib/hyperlocal.ts` – Location and service data for schema/content
- `src/app/locations/page.tsx` – Locations index
- `src/app/sitemap.ts` – Hyperlocal URLs

## Scripts

- `scripts/hyperlocal-schema-validate.js` – Validate sitemap and schema coverage
- `scripts/probate-content-audit.js` – Audit probate content across pages
