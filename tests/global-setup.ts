import { chromium, type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { baseURL } = config.projects[0].use;

  console.log('🚀 Starting global setup...');
  console.log(`📍 Base URL: ${baseURL}`);

  // Launch browser for global setup
  const browser = await chromium.launch();
  // const page = await browser.newPage(); // Unused for now

  try {
    // Set up global test data or authentication if needed
    console.log('✅ Global setup completed successfully');
  } catch (error) {
    console.error('❌ Global setup failed:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

export default globalSetup;
