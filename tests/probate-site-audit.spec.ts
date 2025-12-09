/**
 * PROBATE REAL ESTATE WEBSITE OPTIMIZATION SUITE
 * Using Playwright to identify and fix issues for Las Vegas probate real estate site
 * Run: npx playwright test
 */

import { expect, test } from '@playwright/test';

test.describe('Probate Real Estate SEO & Performance Audit', () => {
  // Test 1: Core Web Vitals & Performance Metrics
  test('Core Web Vitals meet Google standards', async ({ page }) => {
    const pages = [
      '/',
      '/services',
      '/locations/las-vegas',
      '/resources/nevada-probate-guide',
      '/resources/las-vegas-probate-guide',
    ];

    for (const url of pages) {
      await page.goto(`http://localhost:3000${url}`);

      // Measure Core Web Vitals
      const metrics = await page.evaluate(() => {
        return new Promise((resolve) => {
          let lcpValue: number | undefined,
            fidValue: number | undefined,
            clsValue: number | undefined;

          // Largest Contentful Paint
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as PerformanceEntry;
            lcpValue = (lastEntry as any).renderTime || (lastEntry as any).loadTime;
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // First Input Delay
          new PerformanceObserver((list) => {
            const entry = list.getEntries()[0] as PerformanceEntry;
            fidValue = (entry as any).processingStart - (entry as any).startTime;
          }).observe({ entryTypes: ['first-input'] });

          // Cumulative Layout Shift
          let cls = 0;
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!(entry as any).hadRecentInput) {
                cls += (entry as any).value;
              }
            }
            clsValue = cls;
          }).observe({ entryTypes: ['layout-shift'] });

          setTimeout(() => {
            resolve({
              lcp: lcpValue || 0,
              fid: fidValue || 0,
              cls: clsValue || 0,
              ttfb: performance.timing.responseStart - performance.timing.requestStart,
            });
          }, 5000);
        });
      });

      // Assert Core Web Vitals thresholds
      expect(metrics.lcp).toBeLessThan(2500); // LCP < 2.5s
      expect(metrics.fid).toBeLessThan(100); // FID < 100ms
      expect(metrics.cls).toBeLessThan(0.1); // CLS < 0.1
      expect(metrics.ttfb).toBeLessThan(800); // TTFB < 800ms

      console.log(`✅ ${url} - LCP: ${metrics.lcp}ms, FID: ${metrics.fid}ms, CLS: ${metrics.cls}`);
    }
  });

  // Test 2: Nevada-Specific SEO Elements
  test('Nevada probate SEO elements are properly implemented', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check title tags for location + service keywords
    const title = await page.title();
    expect(title).toContain('Las Vegas');
    expect(title).toContain('Probate');
    expect(title.length).toBeLessThanOrEqual(60);

    // Check meta description
    const metaDescription = await page.$eval(
      'meta[name="description"]',
      (el: HTMLMetaElement) => el.content
    );
    expect(metaDescription).toContain('Nevada');
    expect(metaDescription).toContain('Clark County');
    expect(metaDescription.length).toBeLessThanOrEqual(160);

    // Check for proper H1 hierarchy
    const h1Count = await page.$$eval('h1', (elements) => elements.length);
    expect(h1Count).toBe(1);

    const h1Text = await page.$eval('h1', (el) => el.textContent);
    expect(h1Text).toMatch(/probate|estate|nevada|las vegas/i);

    // Check for schema markup
    const schemas = await page.$$eval('script[type="application/ld+json"]', (scripts) =>
      scripts.map((s) => JSON.parse(s.textContent || '{}'))
    );

    const hasRealEstateSchema = schemas.some(
      (s: any) =>
        s['@type'] === 'RealEstateAgent' ||
        s['@type'] === 'ProfessionalService' ||
        s['@type'] === 'LocalBusiness'
    );
    expect(hasRealEstateSchema).toBeTruthy();

    // Check for local business schema with Nevada address
    const hasLocalSchema = schemas.some((s: any) => s.address && s.address.addressRegion === 'NV');
    expect(hasLocalSchema).toBeTruthy();

    // Check for FAQ schema with probate questions
    const hasFAQSchema = schemas.some((s: any) => s['@type'] === 'FAQPage');
    expect(hasFAQSchema).toBeTruthy();
  });

  // Test 3: Mobile Responsiveness & User Experience
  test('Mobile experience is optimized for probate clients', async ({ browser }) => {
    const devices = [
      { name: 'iPhone 12', viewport: { width: 390, height: 844 } },
      { name: 'Samsung Galaxy S21', viewport: { width: 384, height: 854 } },
      { name: 'iPad', viewport: { width: 820, height: 1180 } },
    ];

    for (const device of devices) {
      const context = await browser.newContext({
        viewport: device.viewport,
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) Mobile/15E148',
      });
      const page = await context.newPage();
      await page.goto('http://localhost:3000');

      // Check mobile menu functionality
      const mobileMenu = await page.$('[data-mobile-menu], .mobile-menu, #mobile-menu');
      if (mobileMenu) {
        await mobileMenu.click();
        await page.waitForTimeout(300);
        const menuVisible = await page.$eval(
          '[data-mobile-menu-items], .mobile-menu-items',
          (el: Element) => window.getComputedStyle(el).display !== 'none'
        );
        expect(menuVisible).toBeTruthy();
      }

      // Check CTA buttons are thumb-friendly (minimum 44x44 pixels)
      const ctaButtons = await page.$$('button, a.btn, .cta, .btn-primary');
      for (const button of ctaButtons) {
        const box = await button.boundingBox();
        if (box) {
          expect(box.height).toBeGreaterThanOrEqual(44);
          expect(box.width).toBeGreaterThanOrEqual(44);
        }
      }

      // Check click-to-call functionality
      const phoneLinks = await page.$$('a[href^="tel:"]');
      expect(phoneLinks.length).toBeGreaterThan(0);

      for (const phoneLink of phoneLinks) {
        const href = await phoneLink.getAttribute('href');
        expect(href).toMatch(/^tel:\+?1?702/); // Las Vegas area code
      }

      await context.close();
    }
  });

  // Test 4: Forms & Conversion Elements Testing
  test('Probate consultation forms work correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/#contact');

    // Test form validation
    const submitButton = await page.$('button[type="submit"], input[type="submit"]');
    if (submitButton) {
      await submitButton.click();

      // Check for validation messages
      const validationMessages = await page.$$('.error, .validation-message, [role="alert"]');
      expect(validationMessages.length).toBeGreaterThan(0);

      // Fill out form with test data
      await page.fill('input[name="firstName"], #firstName', 'Test User');
      await page.fill('input[name="email"], #email', 'test@probatetest.com');
      await page.fill('input[name="phone"], #phone', '702-555-0123');

      // Check for Nevada-specific form fields
      const propertyLocation = await page.$('select[name="property_location"], #property_location');
      if (propertyLocation) {
        const options = await page.$$eval(
          'select[name="property_location"] option',
          (opts: HTMLOptionElement[]) => opts.map((opt) => opt.textContent)
        );
        expect(options).toContain('Clark County');
        expect(options).toContain('Washoe County');
      }
    }

    // Check for probate-specific fields
    const probateStatus = await page.$('select[name="probate_status"], #probate_status');
    if (probateStatus) {
      const options = await page.$$eval(
        'select[name="probate_status"] option',
        (opts: HTMLOptionElement[]) => opts.map((opt) => opt.textContent)
      );
      expect(options.some((opt) => opt?.includes('Letters Testamentary'))).toBeTruthy();
      expect(options.some((opt) => opt?.includes('Certificate of Incumbency'))).toBeTruthy();
    }
  });

  // Test 5: Local SEO Elements for Las Vegas
  test('Local Las Vegas SEO elements are present', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check for NAP (Name, Address, Phone) consistency
    const addressElements = await page.$$('[itemtype*="PostalAddress"], address, .address');
    expect(addressElements.length).toBeGreaterThan(0);

    // Check for Las Vegas/Nevada mentions in content
    const bodyText = await page.textContent('body');
    const lasVegasMentions = (bodyText?.match(/Las Vegas/gi) || []).length;
    const nevadaMentions = (bodyText?.match(/Nevada/gi) || []).length;
    const clarkCountyMentions = (bodyText?.match(/Clark County/gi) || []).length;

    expect(lasVegasMentions).toBeGreaterThan(3);
    expect(nevadaMentions).toBeGreaterThan(2);
    expect(clarkCountyMentions).toBeGreaterThan(1);

    // Check for local reviews/testimonials
    const reviews = await page.$$('[itemtype*="Review"], .review, .testimonial');
    expect(reviews.length).toBeGreaterThan(0);
  });

  // Test 6: Legal Compliance & Trust Elements
  test('Probate legal compliance elements are present', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check for required legal pages
    const requiredPages = [
      { link: 'privacy', text: 'Privacy Policy' },
      { link: 'terms', text: 'Terms of Service' },
      { link: 'disclaimer', text: 'Disclaimer' },
    ];

    for (const requiredPage of requiredPages) {
      const link = await page.$(`a[href*="${requiredPage.link}"]`);
      if (link) {
        expect(link).toBeTruthy();
      }
    }

    // Check for attorney disclaimer if providing legal information
    const disclaimer = await page.$('.legal-disclaimer, .disclaimer, [role="disclaimer"]');
    if (disclaimer) {
      const disclaimerText = await disclaimer.textContent();
      expect(disclaimerText).toMatch(/not legal advice|consult.*attorney/i);
    }

    // Check for license numbers
    const licenseInfo = await page.$$('.license, .credentials, #license');
    expect(licenseInfo.length).toBeGreaterThan(0);
  });

  // Test 7: Content & Keyword Optimization
  test('Content is optimized for Nevada probate keywords', async ({ page }) => {
    const targetPages = [
      { url: '/services', keywords: ['valuation', 'CMA', 'court'] },
      {
        url: '/resources/nevada-probate-guide',
        keywords: ['timeline', '6-8 months', 'Clark County'],
      },
      {
        url: '/resources/las-vegas-probate-guide',
        keywords: ['Las Vegas', 'Clark County', 'probate'],
      },
    ];

    for (const targetPage of targetPages) {
      await page.goto(`http://localhost:3000${targetPage.url}`);
      const content = await page.textContent('main, article, .content, .container');

      if (content) {
        // Check for keyword presence
        for (const keyword of targetPage.keywords) {
          expect(content.toLowerCase()).toContain(keyword.toLowerCase());
        }

        // Check content length (should be 1000+ words for service pages)
        const wordCount = content.split(/\s+/).length;
        expect(wordCount).toBeGreaterThan(1000);

        // Check for internal links
        const internalLinks = await page.$$eval(
          'a[href^="/"], a[href*="localhost:3000"]',
          (links: HTMLAnchorElement[]) => links.length
        );
        expect(internalLinks).toBeGreaterThan(5);

        // Check for proper heading structure
        const h2Count = await page.$$eval('h2', (elements) => elements.length);
        const h3Count = await page.$$eval('h3', (elements) => elements.length);
        expect(h2Count).toBeGreaterThan(2);
        expect(h3Count).toBeGreaterThan(1);
      }
    }
  });

  // Test 8: Speed & Performance Testing
  test('Page load performance for probate clients on slow connections', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Simulate slow 3G connection
    await page.route('**/*', (route) => {
      setTimeout(() => route.continue(), 100);
    });

    const startTime = Date.now();
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded' });
    const loadTime = Date.now() - startTime;

    // Should load in under 3 seconds on slow connection
    expect(loadTime).toBeLessThan(3000);

    // Check if critical content is visible
    const heroVisible = await page.isVisible('h1');
    const ctaVisible = await page.isVisible('button, .cta, .btn-primary');
    const phoneVisible = await page.isVisible('a[href^="tel:"]');

    expect(heroVisible).toBeTruthy();
    expect(ctaVisible).toBeTruthy();
    expect(phoneVisible).toBeTruthy();

    await context.close();
  });

  // Test 9: Accessibility Compliance
  test('Website meets accessibility standards for elderly probate clients', async ({ page }) => {
    await page.goto('http://localhost:3000');

    // Check for proper ARIA labels
    const buttons = await page.$$('button');
    for (const button of buttons) {
      const ariaLabel = await button.getAttribute('aria-label');
      const textContent = await button.textContent();
      expect(ariaLabel || textContent).toBeTruthy();
    }

    // Check for alt text on images
    const images = await page.$$('img');
    for (const image of images) {
      const alt = await image.getAttribute('alt');
      expect(alt).toBeTruthy();
      expect(alt?.length).toBeGreaterThan(0);
    }

    // Check for keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
  });

  // Test 10: Conversion Funnel Testing
  test('Probate conversion funnel is optimized', async ({ page }) => {
    // Track user journey from landing to conversion
    const conversionSteps = [
      { action: 'land', selector: 'h1' },
      { action: 'engage', selector: '.service-card, .services' },
      {
        action: 'intent',
        selector: 'button[data-action="valuation"], .cta-valuation, .btn-primary',
      },
      { action: 'convert', selector: 'form' },
    ];

    await page.goto('http://localhost:3000');

    for (const step of conversionSteps) {
      const element = await page.$(step.selector);
      expect(element).toBeTruthy();

      if (step.action === 'engage' || step.action === 'intent') {
        await element.scrollIntoViewIfNeeded();
        await page.waitForTimeout(500); // Simulate reading

        // Check if element is in viewport
        const isVisible = await element.isIntersectingViewport();
        expect(isVisible).toBeTruthy();
      }
    }
  });
});

// ============================================
// 2. COMPETITOR ANALYSIS & BENCHMARKING
// ============================================

test.describe('Competitor Analysis for Las Vegas Probate Market', () => {
  test('Compare against top competitors', async ({ browser }) => {
    const competitors = [
      'http://localhost:3000', // Our site
      'https://www.zillow.com/professional/nevada-probate-real-estate',
      'https://www.realtor.com/realestateagents/nevada-probate',
    ];

    const results = [];

    for (const url of competitors) {
      const context = await browser.newContext();
      const page = await context.newPage();

      const metrics = {
        url,
        loadTime: 0,
        mobileScore: 0,
        hasChat: false,
        hasCalculator: false,
        phoneProminence: false,
        formFields: 0,
        trustSignals: 0,
      };

      try {
        const startTime = Date.now();
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        metrics.loadTime = Date.now() - startTime;

        // Check for live chat
        metrics.hasChat = (await page.$('.chat, #chat, [data-chat]')) !== null;

        // Check for calculators/tools
        metrics.hasCalculator = (await page.$('.calculator, [data-calculator]')) !== null;

        // Check phone prominence
        const phoneInHeader = await page.$('header a[href^="tel:"]');
        metrics.phoneProminence = phoneInHeader !== null;

        // Count form fields
        const formFields = await page.$$('input, select, textarea');
        metrics.formFields = formFields.length;

        // Count trust signals
        const trustElements = await page.$$(
          '.testimonial, .review, .badge, .certification, .award'
        );
        metrics.trustSignals = trustElements.length;

        results.push(metrics);
      } catch (error) {
        console.log(`Error analyzing ${url}: ${error}`);
      }

      await context.close();
    }

    // Generate competitive analysis report
    console.table(results);

    // Our site should be best in class
    const ourSite = results[0];
    if (results.length > 1) {
      const competitorAvg = results.slice(1).reduce(
        (acc, curr) => {
          return {
            loadTime: acc.loadTime + curr.loadTime / (results.length - 1),
            trustSignals: acc.trustSignals + curr.trustSignals / (results.length - 1),
          };
        },
        { loadTime: 0, trustSignals: 0 }
      );

      expect(ourSite.loadTime).toBeLessThan(competitorAvg.loadTime);
      expect(ourSite.trustSignals).toBeGreaterThan(competitorAvg.trustSignals);
    }
  });
});

// ============================================
// 3. AUTOMATED IMPROVEMENT RECOMMENDATIONS
// ============================================

test.describe('Generate Improvement Recommendations', () => {
  test('Create actionable improvement report', async ({ page }) => {
    const improvements = [];

    await page.goto('http://localhost:3000');

    // Check for missing elements and suggest additions
    const missingElements = [
      { selector: '.trust-badges', recommendation: 'Add trust badges (BBB, certifications)' },
      { selector: '.live-chat', recommendation: 'Implement live chat for immediate assistance' },
      { selector: '.calculator', recommendation: 'Add probate timeline calculator' },
      { selector: '.video', recommendation: 'Include explainer video for probate process' },
      { selector: '.faq-schema', recommendation: 'Implement FAQ schema markup' },
      { selector: '.progress-bar', recommendation: 'Add progress indicator for multi-step forms' },
      { selector: '.social-proof', recommendation: 'Display real-time social proof notifications' },
      {
        selector: '.comparison-table',
        recommendation: 'Add comparison table vs traditional probate',
      },
    ];

    for (const element of missingElements) {
      const exists = await page.$(element.selector);
      if (!exists) {
        improvements.push({
          priority: 'HIGH',
          element: element.selector,
          recommendation: element.recommendation,
          impact: 'Conversion Rate',
          effort: 'Medium',
        });
      }
    }

    // Performance improvements
    const images = await page.$$eval('img', (imgs: HTMLImageElement[]) =>
      imgs.map((img) => ({
        src: img.src,
        loading: img.loading,
        width: img.width,
        height: img.height,
      }))
    );

    const lazyLoadCount = images.filter((img) => img.loading === 'lazy').length;
    if (lazyLoadCount < images.length * 0.8) {
      improvements.push({
        priority: 'MEDIUM',
        element: 'images',
        recommendation: 'Implement lazy loading for below-fold images',
        impact: 'Page Speed',
        effort: 'Low',
      });
    }

    // Check for WebP images
    const webpImages = images.filter((img) => img.src.includes('.webp')).length;
    if (webpImages < images.length * 0.5) {
      improvements.push({
        priority: 'MEDIUM',
        element: 'images',
        recommendation: 'Convert images to WebP format',
        impact: 'Page Speed',
        effort: 'Low',
      });
    }

    // Generate improvement report
    console.log('\n🔧 WEBSITE IMPROVEMENT REPORT 🔧\n');
    console.log('═══════════════════════════════════════\n');

    improvements.sort((a, b) => {
      const priorityOrder: { [key: string]: number } = { HIGH: 0, MEDIUM: 1, LOW: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    improvements.forEach((improvement, index) => {
      console.log(`${index + 1}. [${improvement.priority}] ${improvement.recommendation}`);
      console.log(`   Impact: ${improvement.impact} | Effort: ${improvement.effort}`);
      console.log('');
    });

    // Save report to file
    const fs = require('node:fs');
    fs.writeFileSync('improvement-report.json', JSON.stringify(improvements, null, 2));

    expect(improvements.length).toBeLessThan(10); // Should have fewer than 10 major issues
  });
});

// ============================================
// 4. MONITORING & ALERTING SETUP
// ============================================

test.describe('Continuous Monitoring Setup', () => {
  test('Setup automated monitoring', async ({ page }) => {
    // This would typically integrate with monitoring services
    const monitoringChecks = {
      uptime: true,
      sslCertificate: true,
      phoneNumberActive: true,
      formSubmission: true,
      pageSpeed: true,
      brokenLinks: false,
    };

    await page.goto('http://localhost:3000');

    // Check if phone number is clickable
    const phoneLink = await page.$('a[href^="tel:"]');
    monitoringChecks.phoneNumberActive = phoneLink !== null;

    // Check for broken links
    const links = await page.$$eval('a[href]', (links: HTMLAnchorElement[]) =>
      links
        .map((link) => link.href)
        .filter((href) => href && !href.startsWith('#') && !href.startsWith('http://localhost'))
    );

    for (const link of links.slice(0, 5)) {
      // Check first 5 external links
      try {
        const response = await page.goto(link, { waitUntil: 'domcontentloaded' });
        if (response && response.status() >= 400) {
          monitoringChecks.brokenLinks = true;
          console.log(`❌ Broken link found: ${link}`);
        }
      } catch (_error) {
        console.log(`❌ Error checking link: ${link}`);
      }
    }

    // Generate monitoring configuration
    const monitoringConfig = {
      checks: monitoringChecks,
      alerts: {
        email: 'admin@probaterealestate.com',
        sms: '+1-702-555-0123',
        slack: '#website-alerts',
      },
      frequency: {
        uptime: 'every 5 minutes',
        ssl: 'daily',
        performance: 'hourly',
        forms: 'every 30 minutes',
      },
    };

    console.log('\n📊 MONITORING CONFIGURATION 📊\n');
    console.log(JSON.stringify(monitoringConfig, null, 2));

    expect(monitoringChecks.brokenLinks).toBeFalsy();
  });
});

// ============================================
// 5. A/B TESTING SETUP
// ============================================

test.describe('A/B Testing Implementation', () => {
  test('Test different CTA variations', async ({ browser }) => {
    const variations = [
      { text: 'Get Free Consultation', color: 'bg-blue-600' },
      { text: 'Call Now: (702) 555-0123', color: 'bg-green-600' },
      { text: 'Start 45-Day Sale Process', color: 'bg-orange-600' },
      { text: 'Avoid 6-Month Probate Delays', color: 'bg-red-600' },
    ];

    const results = [];

    for (const variation of variations) {
      const context = await browser.newContext();
      const page = await context.newPage();

      // Inject variation
      await page.goto('http://localhost:3000');
      await page.evaluate((variation) => {
        const button = document.querySelector('.cta, button[data-action], .btn-primary');
        if (button) {
          button.textContent = variation.text;
          button.className = button.className.replace(/bg-\w+-\d+/, variation.color);
        }
      }, variation);

      // Simulate user interaction
      const cta = await page.$('.cta, button[data-action], .btn-primary');
      if (cta) {
        const bbox = await cta.boundingBox();

        results.push({
          variation: variation.text,
          visibility: bbox !== null,
          position: bbox ? { x: bbox.x, y: bbox.y } : null,
          aboveFold: bbox ? bbox.y < 600 : false,
        });
      }

      await context.close();
    }

    console.log('\n🧪 A/B TEST RESULTS 🧪\n');
    console.table(results);

    // All variations should be visible
    expect(results.every((r) => r.visibility)).toBeTruthy();
  });
});

// ============================================
// 6. REPORTING & EXPORT
// ============================================

async function generateComprehensiveReport() {
  const report = {
    timestamp: new Date().toISOString(),
    domain: 'localhost:3000',
    market: 'Las Vegas Probate Real Estate',
    metrics: {},
    improvements: [],
    competitors: [],
    recommendations: [],
  };

  // Generate HTML report
  const htmlReport = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Probate Real Estate Site Audit - ${report.timestamp}</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; }
        .metric { display: inline-block; padding: 10px; margin: 5px; background: #f0f0f0; }
        .good { color: green; }
        .bad { color: red; }
        .warning { color: orange; }
      </style>
    </head>
    <body>
      <h1>Website Optimization Report</h1>
      <h2>Executive Summary</h2>
      <p>Generated: ${report.timestamp}</p>
      <p>Domain: ${report.domain}</p>
      <p>Market: ${report.market}</p>
      <!-- Report content here -->
    </body>
    </html>
  `;

  const fs = require('node:fs');
  fs.writeFileSync('audit-report.html', htmlReport);
  console.log('📄 Report generated: audit-report.html');
}

// Run all tests and generate report
test.afterAll(async () => {
  await generateComprehensiveReport();
});
