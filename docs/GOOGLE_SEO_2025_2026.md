# Google SEO 2025/2026 Implementation Guide

This document tracks implementation of Google's evolving SEO guidelines for E-E-A-T and people-first content.

## Key Updates (Post-December 2025 Core Update)

- **E-E-A-T** is the primary ranking lever
- **Speed** is table stakes (threshold to avoid penalties)
- **People-first content** is explicitly favored over search-first content
- **Entity-based indexing** emphasizes distinct people, organizations, topics

## E-E-A-T Implementation

### Experience (E)
- Real-world, lived experience in the topic
- **Implemented:** Person schema with 20+ years experience, 500+ probate sales
- **Implemented:** About page with credentials, license, court access
- **TODO:** Add case studies with specific numbers, before/after examples

### Expertise (E)
- Deep knowledge demonstrated through original research, comprehensive coverage, source citation
- **Implemented:** hasCredential (Nevada License S.0197614, Ph.D.)
- **Implemented:** knowsAbout array (Nevada Probate Law, Clark County Court, etc.)
- **Implemented:** 2,000+ word guides on key pages (resources, FAQ)
- **TODO:** Add expert citations, technical accuracy verification

### Authoritativeness (A)
- Recognition as go-to source: awards, speaking, accomplishments
- **Implemented:** worksFor (Berkshire Hathaway HomeServices)
- **Implemented:** award array (Top Probate Realtor, 20+ Years)
- **Implemented:** sameAs (About page, LinkedIn)
- **TODO:** Add speaking engagements, media mentions, measurable milestones

### Trustworthiness (T)
- Reliability, honesty, accuracy
- **Implemented:** NAP consistency across all pages
- **Implemented:** aggregateRating in schema
- **Implemented:** Privacy policy, Terms of Service
- **Implemented:** LocalBusiness, LegalService schema

## Schema Markup (Entity Identity)

| Schema | Purpose |
|--------|---------|
| **Person** | Dr. Jan Duffy - identity, credentials, expertise |
| **LocalBusiness** | Organization, NAP, services |
| **RealEstateAgent** | Real estate specialty, worksFor |
| **LegalService** | Probate/legal service type |
| **FAQPage** | Common questions |
| **BreadcrumbList** | Navigation context |

## People-First Content Checklist

- [x] Unique title, description per page
- [x] Authors metadata (Dr. Jan Duffy)
- [x] Author byline on About page
- [x] No keyword stuffing
- [x] Helpful, reliable content
- [ ] Last updated dates on key pages (optional)
- [ ] First-hand experience callouts in content

## References

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Schema.org Person](https://schema.org/Person)
- [E-E-A-T and search quality](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
