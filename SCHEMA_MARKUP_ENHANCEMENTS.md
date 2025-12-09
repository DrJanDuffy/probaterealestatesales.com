# Schema Markup Enhancements Required
## Based on User Rules & Google Search Console 2025 Guidelines

### ✅ Currently Implemented:
1. **LocalBusiness** - Basic implementation
2. **RealEstateAgent** - Implemented
3. **Organization** - Implemented
4. **FAQPage** - Implemented
5. **BreadcrumbList** - Implemented
6. **Article** - Implemented
7. **HowTo** - Implemented
8. **Service** - Implemented
9. **LegalService** - Implemented

### ❌ Missing Critical Schema Types:

#### 1. **Review Schema** (HIGH PRIORITY)
- **Required for:** Testimonials page, Google Reviews integration
- **Purpose:** Show star ratings in search results
- **Location:** `/testimonials/` page
- **Google Requirement:** Must include reviewRating, author, reviewBody, datePublished

#### 2. **AggregateRating Schema** (HIGH PRIORITY)
- **Required for:** All pages with reviews/testimonials
- **Purpose:** Display overall rating in search results
- **Google Requirement:** Must match Google Business Profile rating
- **Fields:** ratingValue, reviewCount, bestRating, worstRating

#### 3. **Person Schema** (HIGH PRIORITY)
- **Required for:** About page, Dr. Jan Duffy profile
- **Purpose:** Knowledge Panel for Dr. Jan Duffy
- **Fields:** name, jobTitle, description, image, sameAs, knowsAbout, award

#### 4. **VideoObject Schema** (MEDIUM PRIORITY)
- **Required for:** Blog videos, probate videos
- **Purpose:** Video rich results
- **Location:** `/blog/probate-videos/`

#### 5. **ImageObject Schema** (MEDIUM PRIORITY)
- **Required for:** Property images, team photos
- **Purpose:** Image search optimization

#### 6. **LocalBusiness Enhancements** (HIGH PRIORITY)
- **Must match Google Business Profile exactly:**
  - ✅ Name (matches)
  - ✅ Address (matches)
  - ✅ Phone (matches)
  - ❌ **Business Hours** - Need to verify exact hours match GBP
  - ❌ **Attributes** - Add business attributes from GBP
  - ❌ **Reviews** - Link to Google Reviews
  - ❌ **Logo** - Ensure logo URL is correct
  - ❌ **SameAs** - Social media profiles

#### 7. **WebSite Schema** (MEDIUM PRIORITY)
- **Purpose:** Site-wide search box, sitelinks
- **Fields:** name, url, potentialAction (SearchAction)

#### 8. **WebPage Schema** (LOW PRIORITY)
- **Purpose:** Page-specific metadata
- **Fields:** name, description, url, isPartOf

### Implementation Priority:

**Phase 1 (Critical - Do Now):**
1. Review Schema for testimonials
2. AggregateRating Schema
3. Person Schema for Dr. Jan Duffy
4. LocalBusiness enhancements (hours, attributes, reviews)

**Phase 2 (Important - Soon):**
5. VideoObject Schema
6. WebSite Schema
7. ImageObject Schema

**Phase 3 (Nice to Have):**
8. WebPage Schema

