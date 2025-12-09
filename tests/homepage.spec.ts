import fs from 'node:fs';
import { expect, test } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

// Configuration for Nevada probate real estate specifics
const _PROBATE_CONFIG = {
  requiredKeywords: {
    nevada: ['Nevada', 'NV', 'Clark County'],
    probate: ['probate', 'estate', 'inheritance', 'executor', 'letters testamentary'],
    legal: ['court confirmation', 'independent administration', 'certificate of incumbency'],
    timeline: ['45 days', '6-8 months', 'expedited'],
  },
  trustSignals: {
    phone: '(702)',
    license: ['Nevada Real Estate License', 'NV License #'],
    court: ['Clark County District Court', 'Eighth Judicial'],
    attorneys: ['probate attorney', 'estate planning'],
  },
  competitors: ['https://competitor1.com', 'https://competitor2.com'],
};

test.describe('Nevada Probate Real Estate - Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    // Set up performance monitoring
    await page.addInitScript(() => {
      (window as any).performanceMetrics = {
        startTime: Date.now(),
        interactions: [],
      };
    });
  });

  // ============================================
  // ENHANCED SEO TESTS FOR PROBATE KEYWORDS
  // ============================================

  test('should have Nevada probate-specific SEO optimization', async ({ page }) => {
    // Title should include location + service + benefit
    const title = await page.title();
    expect(title.length).toBeLessThanOrEqual(60);
    expect(title).toMatch(/Nevada|Las Vegas/i);
    expect(title).toMatch(/Probate.*Real Estate|Estate.*Sale/i);

    // Meta description should mention timeline advantage
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBeTruthy();
    if (metaDescription) {
      expect(metaDescription.length).toBeLessThanOrEqual(160);
      expect(metaDescription).toMatch(/45 days|avoid.*6.*8.*months|expedited/i);
      expect(metaDescription).toMatch(/Clark County|Las Vegas|Nevada/i);
    }

    // Check for local SEO meta tags
    const geoRegion = await page.locator('meta[name="geo.region"]').getAttribute('content');
    expect(geoRegion).toBe('US-NV');

    const geoPlacename = await page.locator('meta[name="geo.placename"]').getAttribute('content');
    expect(geoPlacename).toContain('Las Vegas');
  });

  test('should have proper probate-specific schema markup', async ({ page }) => {
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    const parsedSchemas = schemas.map((s) => JSON.parse(s));

    // Check for RealEstateAgent schema
    const realEstateSchema = parsedSchemas.find((s) => s['@type'] === 'RealEstateAgent');
    expect(realEstateSchema).toBeTruthy();
    expect(realEstateSchema.areaServed).toContain('Clark County');
    expect(realEstateSchema.knowsAbout).toContain('Nevada Probate Law');

    // Check for Service schema with probate services
    const serviceSchema = parsedSchemas.find((s) => s['@type'] === 'Service');
    expect(serviceSchema).toBeTruthy();
    expect(serviceSchema.serviceType).toMatch(/probate|estate/i);

    // Check for FAQPage schema with probate questions
    const faqSchema = parsedSchemas.find((s) => s['@type'] === 'FAQPage');
    expect(faqSchema).toBeTruthy();
    const faqQuestions = faqSchema.mainEntity.map((q) => q.name);
    expect(faqQuestions.some((q) => q.includes('letters testamentary'))).toBeTruthy();
    expect(faqQuestions.some((q) => q.includes('court confirmation'))).toBeTruthy();
  });

  // ============================================
  // PROBATE-SPECIFIC CONTENT TESTS
  // ============================================

  test('should display Nevada probate legal terminology', async ({ page }) => {
    const bodyText = await page.locator('body').textContent();

    // Check for required legal terms
    const requiredTerms = [
      'letters testamentary',
      'certificate of incumbency',
      'court confirmation',
      'independent administration',
      'Clark County',
      'personal representative',
      'NRS 148', // Nevada Revised Statutes for probate
    ];

    for (const term of requiredTerms) {
      expect(bodyText.toLowerCase()).toContain(term.toLowerCase());
    }

    // Check for proper capitalization of legal terms
    expect(bodyText).toContain('Letters Testamentary');
    expect(bodyText).toContain('Clark County District Court');
  });

  test('should have probate timeline comparison', async ({ page }) => {
    // Look for timeline comparison elements
    const timelineSection = page.locator('[data-testid="timeline"], .timeline, #timeline');
    await expect(timelineSection).toBeVisible();

    // Check for specific timeline mentions
    await expect(page.locator('text=/45.*days?/i')).toBeVisible();
    await expect(page.locator('text=/6.*8.*months?/i')).toBeVisible();

    // Check for comparison table or visual
    const comparisonTable = page.locator('table:has-text("Traditional"), .comparison');
    await expect(comparisonTable).toBeVisible();
  });

  // ============================================
  // CONVERSION OPTIMIZATION TESTS
  // ============================================

  test('should have optimized CTAs for probate clients', async ({ page }) => {
    // Primary CTA should address urgency
    const primaryCTA = page.locator('button.primary, .btn-primary').first();
    const ctaText = await primaryCTA.textContent();
    expect(ctaText).toMatch(/free|consultation|valuation|avoid.*delay/i);

    // Phone CTA should be prominent
    const phoneCTA = page.locator('a[href^="tel:"]').first();
    await expect(phoneCTA).toBeVisible();
    const phoneNumber = await phoneCTA.getAttribute('href');
    expect(phoneNumber).toContain('702'); // Las Vegas area code

    // Check for trust-building micro-copy
    const microCopy = page.locator('.micro-copy, .cta-subtext, small');
    const microCopyTexts = await microCopy.allTextContents();
    expect(microCopyTexts.some((text) => text.includes('No obligation'))).toBeTruthy();
    expect(microCopyTexts.some((text) => text.includes('24'))).toBeTruthy(); // 24hr response
  });

  test('should have probate-specific trust signals', async ({ page }) => {
    // Check for attorney partnerships
    await expect(page.locator('text=/attorney|lawyer/i')).toBeVisible();

    // Check for court approval mentions
    await expect(page.locator('text=/court.*approved|approved.*vendor/i')).toBeVisible();

    // Check for experience metrics
    await expect(page.locator('text=/d+.*years|families.*helped|d+.*properties/i')).toBeVisible();

    // Check for Nevada licensing
    await expect(
      page.locator('text=/Nevada.*license|NV.*license|licensed.*Nevada/i')
    ).toBeVisible();
  });

  // ============================================
  // PERFORMANCE TESTS
  // ============================================

  test('should meet Core Web Vitals for SEO', async ({ page }) => {
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        let lcpValue = 0;
        const _fidValue = 0;
        let clsValue = 0;

        // Observe LCP
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          lcpValue = lastEntry.renderTime || lastEntry.loadTime;
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe CLS
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          }
        }).observe({ entryTypes: ['layout-shift'] });

        setTimeout(() => {
          resolve({
            lcp: lcpValue,
            cls: clsValue,
            fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
          });
        }, 3000);
      });
    });

    expect(metrics.lcp).toBeLessThan(2500); // Good LCP
    expect(metrics.cls).toBeLessThan(0.1); // Good CLS
    expect(metrics.fcp).toBeLessThan(1800); // Good FCP
  });

  // ============================================
  // NEVADA LOCATION-SPECIFIC TESTS
  // ============================================

  test('should have comprehensive Las Vegas area coverage', async ({ page }) => {
    const requiredLocations = [
      'Las Vegas',
      'Henderson',
      'Summerlin',
      'North Las Vegas',
      'Green Valley',
      'Spring Valley',
      'Paradise',
      'Enterprise',
      'Centennial Hills',
      'Mountains Edge',
    ];

    const bodyText = await page.locator('body').textContent();
    for (const location of requiredLocations) {
      expect(bodyText).toContain(location);
    }

    // Check for neighborhood-specific pages
    const locationLinks = await page
      .locator('a[href*="location"], a[href*="summerlin"], a[href*="henderson"]')
      .count();
    expect(locationLinks).toBeGreaterThan(5);
  });

  // ============================================
  // COMPETITIVE ANALYSIS
  // ============================================

  test('should have competitive advantages highlighted', async ({ page }) => {
    // Check for differentiators
    const differentiators = [
      '45 days',
      'no upfront',
      'court approved',
      'free consultation',
      'cash offer',
    ];

    const bodyText = await page.locator('body').textContent().toLowerCase();
    for (const diff of differentiators) {
      expect(bodyText).toContain(diff);
    }
  });

  // ============================================
  // FORMS AND LEAD CAPTURE
  // ============================================

  test('should have optimized probate inquiry form', async ({ page }) => {
    const form = page.locator('form').first();

    // Check for probate-specific fields
    const probateStatusField = form.locator('select[name*="status"], input[name*="status"]');
    if ((await probateStatusField.count()) > 0) {
      const options = await probateStatusField.locator('option').allTextContents();
      expect(options.some((opt) => opt.includes('Letters'))).toBeTruthy();
      expect(options.some((opt) => opt.includes('No attorney'))).toBeTruthy();
    }

    // Check for property location field
    const locationField = form.locator('select[name*="location"], input[name*="location"]');
    await expect(locationField).toBeVisible();

    // Check form has minimal fields (reduce friction)
    const requiredFields = await form.locator('[required]').count();
    expect(requiredFields).toBeLessThanOrEqual(4); // Name, email, phone, message max
  });

  // ============================================
  // MONITORING AND REPORTING
  // ============================================

  test.afterEach(async ({ page }, testInfo) => {
    // Capture screenshot on failure
    if (testInfo.status !== 'passed') {
      await page.screenshot({
        path: `screenshots/${testInfo.title}-failure.png`,
        fullPage: true,
      });
    }

    // Log performance metrics
    const performanceMetrics = await page.evaluate(() =>
      JSON.stringify(performance.getEntriesByType('navigation')[0])
    );

    // Save metrics for analysis
    fs.appendFileSync(
      'performance-log.json',
      `${JSON.stringify({
        test: testInfo.title,
        timestamp: new Date().toISOString(),
        metrics: JSON.parse(performanceMetrics),
        status: testInfo.status,
      })}\n`
    );
  });
});

// ============================================
// LIGHTHOUSE AUDIT TEST
// ============================================

test.describe('Lighthouse Audits', () => {
  test('should pass Lighthouse SEO audit', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'Lighthouse only works in Chromium');

    await page.goto('/');

    const auditResults = await playAudit({
      page,
      thresholds: {
        performance: 85,
        accessibility: 90,
        'best-practices': 85,
        seo: 95, // High SEO requirement
        pwa: 50,
      },
      reports: {
        formats: {
          html: true,
          json: true,
        },
        name: `lighthouse-${new Date().toISOString()}`,
        directory: 'lighthouse-reports',
      },
    });

    // Additional SEO checks from Lighthouse
    expect(auditResults.lhr.categories.seo.score).toBeGreaterThan(0.95);
  });
});
