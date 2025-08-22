import type { FullConfig } from '@playwright/test';

async function globalTeardown(_config: FullConfig) {
  console.log('🧹 Starting global teardown...');

  try {
    // Clean up global test data, close connections, etc.
    console.log('✅ Global teardown completed successfully');
  } catch (error) {
    console.error('❌ Global teardown failed:', error);
    // Don't throw here as it's cleanup
  }
}

export default globalTeardown;
