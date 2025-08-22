# Playwright Testing Suite for Nevada Probate Real Estate

This project includes a comprehensive Playwright testing suite designed to ensure the quality, performance, and accessibility of the probate real estate website.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Install dependencies
npm install

# Install Playwright browsers
npm run test:install
```

### Running Tests
```bash
# Run all tests
npm test

# Run tests with UI (recommended for development)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests in debug mode
npm run test:debug

# View test report
npm run test:report
```

## 📁 Test Structure

```
tests/
├── global-setup.ts          # Global test setup
├── global-teardown.ts       # Global test cleanup
├── homepage.spec.ts         # Homepage functionality tests
├── services.spec.ts         # Services page tests
└── performance.spec.ts      # Performance & optimization tests
```

## 🧪 Test Categories

### 1. Homepage Tests (`homepage.spec.ts`)
- **Page Loading**: Title, headings, content visibility
- **SEO Elements**: Meta tags, Open Graph, schema markup
- **Navigation**: Menu items, dropdowns, mobile responsiveness
- **CTAs**: Phone numbers, buttons, forms
- **Content**: Hero section, services, locations
- **Accessibility**: ARIA labels, heading hierarchy, form associations
- **JavaScript**: Error handling, console errors

### 2. Services Page Tests (`services.spec.ts`)
- **MASTER SERVICE PAGE ARCHITECTURE**: All 9 components
- **Hero Section**: Psychological triggers, stakeholder messages
- **Service Cards**: Micro-conversions, deliverables, proof points
- **Hyper-Local Content**: Neighborhood-specific information
- **Interactive Elements**: Timeline calculator, form interactions
- **Trust Building**: Attorney endorsements, certifications, live chat
- **Conversion Optimization**: 45-day guarantee, CTAs, guarantees
- **SEO & Schema**: JSON-LD markup, meta tags, accessibility

### 3. Performance Tests (`performance.spec.ts`)
- **Core Web Vitals**: LCP, FID, CLS measurements
- **Resource Optimization**: Images, CSS, JavaScript, fonts
- **Loading Performance**: DOM content, load times, first byte
- **Bundle Analysis**: File sizes, resource counts, optimization
- **Animation Performance**: CSS transforms, efficient animations
- **Caching**: Headers, resource hints, optimization

## ⚙️ Configuration

### Playwright Config (`playwright.config.ts`)
- **Multi-browser Support**: Chromium, Firefox, WebKit
- **Mobile Testing**: Pixel 5, iPhone 12 viewports
- **Performance Monitoring**: Traces, screenshots, videos
- **CI/CD Ready**: Parallel execution, retries, reporting
- **Local Development**: Auto-start dev server, hot reload

### Environment Variables
```bash
# Base URL for testing
BASE_URL=http://localhost:3000

# CI environment
CI=true
```

## 🔧 Test Commands

### Development Workflow
```bash
# 1. Start development server
npm run dev

# 2. In another terminal, run tests
npm run test:ui

# 3. View results in browser
npm run test:report
```

### Specific Test Suites
```bash
# Test only homepage
npx playwright test homepage.spec.ts

# Test only services page
npx playwright test services.spec.ts

# Test only performance
npx playwright test performance.spec.ts

# Test specific browser
npx playwright test --project=chromium

# Test mobile viewport
npx playwright test --project="Mobile Chrome"
```

### Debugging Tests
```bash
# Run with debugger
npm run test:debug

# Run specific test with debug
npx playwright test --debug homepage.spec.ts

# Run with trace viewer
npx playwright test --trace on
```

## 📊 Test Reports

### HTML Report
```bash
npm run test:report
```
- Interactive test results
- Screenshots and videos
- Performance metrics
- Error details and stack traces

### JSON Report
```bash
npx playwright test --reporter=json
```
- Machine-readable output
- CI/CD integration
- Custom reporting tools

### JUnit Report
```bash
npx playwright test --reporter=junit
```
- Standard CI/CD format
- GitHub Actions integration
- Team collaboration

## 🎯 Testing Best Practices

### 1. Test Organization
- **Describe blocks**: Group related tests
- **BeforeEach**: Setup common test state
- **Meaningful names**: Clear test descriptions
- **Single responsibility**: One assertion per test

### 2. Selectors
- **Data attributes**: `[data-service="court-confirmation"]`
- **Semantic selectors**: `button:has-text("Submit")`
- **Accessibility**: `[aria-label="Menu"]`
- **Avoid**: XPath, complex CSS selectors

### 3. Assertions
- **Visible elements**: `await expect(element).toBeVisible()`
- **Text content**: `await expect(element).toContainText("Expected")`
- **Attributes**: `await expect(element).toHaveAttribute("href", "/services")`
- **Counts**: `await expect(elements).toHaveCount(3)`

### 4. Performance Testing
- **Wait strategies**: `waitUntil: 'networkidle'`
- **Timeouts**: Reasonable thresholds for CI/CD
- **Metrics collection**: Performance API integration
- **Resource monitoring**: Bundle sizes, load times

## 🚨 Common Issues & Solutions

### 1. Test Failures
```bash
# Check test output
npm test

# Run with verbose logging
npx playwright test --verbose

# Debug specific test
npx playwright test --debug failing-test.spec.ts
```

### 2. Browser Issues
```bash
# Reinstall browsers
npm run test:install

# Clear browser cache
npx playwright install --force

# Check browser compatibility
npx playwright test --project=chromium
```

### 3. Performance Issues
```bash
# Run performance tests only
npx playwright test performance.spec.ts

# Check resource loading
npx playwright test --trace on

# Monitor network activity
npx playwright test --headed
```

## 🔄 CI/CD Integration

### GitHub Actions
```yaml
- name: Run Playwright Tests
  run: npm test
  env:
    CI: true

- name: Upload Test Results
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: test-results/
```

### Vercel Integration
```json
{
  "scripts": {
    "vercel-build": "npm run build && npm test"
  }
}
```

## 📈 Performance Benchmarks

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **First Input Delay**: < 100ms
- **Cumulative Layout Shift**: < 0.1
- **Total Blocking Time**: < 300ms

### Resource Limits
- **JavaScript**: < 500KB total
- **CSS**: < 200KB total
- **Images**: < 1MB per image
- **Fonts**: < 300KB total
- **Total Page Size**: < 2MB

## 🎨 Custom Test Utilities

### Page Object Model
```typescript
class HomePage {
  constructor(private page: Page) {}
  
  async navigate() {
    await this.page.goto('/');
  }
  
  async getHeroText() {
    return this.page.locator('h1').textContent();
  }
}
```

### Custom Assertions
```typescript
expect.extend({
  toMeetPerformanceThreshold(received: number, threshold: number) {
    const pass = received < threshold;
    return {
      pass,
      message: () => `Expected ${received} to be less than ${threshold}`
    };
  }
});
```

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Testing Best Practices](https://playwright.dev/docs/best-practices)
- [Performance Testing](https://playwright.dev/docs/performance)
- [CI/CD Integration](https://playwright.dev/docs/ci)

## 🤝 Contributing

### Adding New Tests
1. Create test file in `tests/` directory
2. Follow naming convention: `feature.spec.ts`
3. Use descriptive test names
4. Include performance considerations
5. Add to appropriate test suite

### Test Maintenance
- **Weekly**: Run full test suite
- **Monthly**: Review performance benchmarks
- **Quarterly**: Update test data and thresholds
- **As needed**: Fix failing tests immediately

---

**Happy Testing! 🎯**

For questions or issues, check the test output or run `npm run test:debug` for detailed debugging information.
