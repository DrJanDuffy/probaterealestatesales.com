import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 4, // Increased from undefined for better performance
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'test-results.xml' }],
    ['list'] // Added for better console output
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    
    /* Take screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Record video on failure */
    video: 'retain-on-failure',
    
    /* Set viewport for consistent testing */
    viewport: { width: 1280, height: 720 },
    
    /* Set user agent for consistent testing */
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    
    /* Optimize for faster test execution */
    actionTimeout: 5000, // Reduced from default
    navigationTimeout: 10000, // Reduced from default
    
    /* Enable faster resource loading */
    bypassCSP: true,
    
    /* Optimize for probate real estate content */
    extraHTTPHeaders: {
      'Accept-Language': 'en-US,en;q=0.9',
      'Cache-Control': 'no-cache'
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Optimize for SEO testing
        viewport: { width: 1920, height: 1080 }
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        // Optimize for accessibility testing
        viewport: { width: 1280, height: 720 }
      },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        // Optimize for mobile-first testing
        viewport: { width: 768, height: 1024 }
      },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { 
        ...devices['Pixel 5'],
        // Optimize for mobile probate client experience
        viewport: { width: 375, height: 667 }
      },
    },
    {
      name: 'Mobile Safari',
      use: { 
        ...devices['iPhone 12'],
        // Optimize for mobile probate client experience
        viewport: { width: 390, height: 844 }
      },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
    // Optimize server startup
    env: {
      NODE_ENV: 'test',
      NEXT_TELEMETRY_DISABLED: '1'
    }
  },

  /* Global timeout for all tests */
  timeout: 30000,
  
  /* Expect timeout for assertions */
  expect: {
    timeout: 10000,
  },
  
  /* Global setup and teardown */
  globalSetup: './tests/global-setup.ts',
  globalTeardown: './tests/global-teardown.ts',
  
  /* Test output directory */
  outputDir: 'test-results/',
  
  /* Test retry strategy */
  retries: process.env.CI ? 2 : 1, // Reduced retries for faster feedback
  
  /* Test sharding for CI */
  shard: process.env.SHARD ? {
    total: Number.parseInt(process.env.SHARD_TOTAL || '1', 10),
    current: Number.parseInt(process.env.SHARD || '1', 10)
  } : undefined,
});
