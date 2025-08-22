import { test, expect } from '@playwright/test';

test.describe('Homepage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Nevada Probate Real Estate/);
    
    // Check main heading
    await expect(page.locator('h1')).toContainText('Nevada Probate Real Estate');
    
    // Verify page loads without errors
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have proper SEO meta tags', async ({ page }) => {
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /probate real estate/);
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Nevada Probate/);
  });

  test('should display navigation menu correctly', async ({ page }) => {
    // Check main navigation items
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('nav a[href="/"]')).toBeVisible();
    await expect(page.locator('nav a[href="/services"]')).toBeVisible();
    
    // Check locations dropdown
    const locationsButton = page.locator('button:has-text("Locations")');
    await expect(locationsButton).toBeVisible();
    
    // Check resources dropdown
    const resourcesButton = page.locator('button:has-text("Resources")');
    await expect(resourcesButton).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    // Check phone CTA
    const phoneCTA = page.locator('a[href^="tel:"]');
    await expect(phoneCTA).toBeVisible();
    await expect(phoneCTA).toContainText('(702)');
    
    // Check other CTAs
    const ctaButtons = page.locator('button, a').filter({ hasText: /Get|Download|Contact|Call/i });
    await expect(ctaButtons).toHaveCount(3);
  });

  test('should display hero section with key messaging', async ({ page }) => {
    // Check hero section
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Check key messaging
    await expect(page.locator('h1')).toContainText('Nevada');
    await expect(page.locator('h1')).toContainText('Probate');
    await expect(page.locator('h1')).toContainText('Real Estate');
  });

  test('should show services section', async ({ page }) => {
    // Check services section
    const servicesSection = page.locator('#services');
    await expect(servicesSection).toBeVisible();
    
    // Check service cards
    const serviceCards = page.locator('.service-card');
    await expect(serviceCards).toHaveCount(3);
  });

  test('should display location information', async ({ page }) => {
    // Check locations section
    const locationsSection = page.locator('#locations');
    await expect(locationsSection).toBeVisible();
    
    // Check for Nevada-specific locations
    await expect(page.locator('text=Las Vegas')).toBeVisible();
    await expect(page.locator('text=Henderson')).toBeVisible();
    await expect(page.locator('text=Summerlin')).toBeVisible();
  });

  test('should have working internal links', async ({ page }) => {
    // Test navigation to services page
    await page.click('nav a[href="/services"]');
    await expect(page).toHaveURL(/.*services/);
    
    // Go back to homepage
    await page.goto('/');
    
    // Test navigation to locations page
    await page.click('nav a[href="/locations"]');
    await expect(page).toHaveURL(/.*locations/);
  });

  test('should be mobile responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check mobile menu button appears
    const mobileMenuButton = page.locator('button[aria-label*="menu"], button:has-text("Menu")');
    await expect(mobileMenuButton).toBeVisible();
    
    // Check content is still readable
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should have proper schema markup', async ({ page }) => {
    // Check for JSON-LD schema
    const schemaScript = page.locator('script[type="application/ld+json"]');
    await expect(schemaScript).toBeVisible();
    
    // Verify schema content
    const schemaContent = await schemaScript.textContent();
    expect(schemaContent).toContain('"@type"');
    expect(schemaContent).toContain('"RealEstateAgent"');
  });

  test('should load images with proper alt text', async ({ page }) => {
    // Check all images have alt text
    const images = page.locator('img');
    const imageCount = await images.count();
    await expect(images).toHaveCount(imageCount);
    
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have accessible form elements', async ({ page }) => {
    // Check form labels are properly associated
    const formElements = page.locator('input, select, textarea');
    if (await formElements.count() > 0) {
      for (let i = 0; i < await formElements.count(); i++) {
        const element = formElements.nth(i);
        const id = await element.getAttribute('id');
        if (id) {
          const label = page.locator(`label[for="${id}"]`);
          await expect(label).toBeVisible();
        }
      }
    }
  });

  test('should handle JavaScript errors gracefully', async ({ page }) => {
    // Listen for console errors
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    // Navigate and interact with page
    await page.click('nav a[href="/services"]');
    await page.goto('/');
    
    // Check for critical JavaScript errors
    const criticalErrors = errors.filter(error => 
      error.includes('Uncaught') || error.includes('ReferenceError')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check for single h1
    const h1Elements = page.locator('h1');
    await expect(h1Elements).toHaveCount(1);
    
    // Check heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;
    
    for (let i = 0; i < await headings.count(); i++) {
      const heading = headings.nth(i);
      const tagName = await heading.evaluate(el => el.tagName.toLowerCase());
      const level = Number.parseInt(tagName.charAt(1), 10);
      
      // Headings should not skip levels (e.g., h1 -> h3)
      expect(level).toBeLessThanOrEqual(previousLevel + 1);
      previousLevel = level;
    }
  });
});
