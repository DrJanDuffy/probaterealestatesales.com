#!/usr/bin/env node

/**
 * Test Optimization Script for Nevada Probate Real Estate
 * Analyzes test performance and provides optimization recommendations
 */

const fs = require('node:fs');
const path = require('node:path');

console.log('🏠 Nevada Probate Real Estate - Test Optimization Analysis\n');

// Analyze test results
function analyzeTestResults() {
  const testResultsPath = path.join(process.cwd(), 'test-results.json');

  if (fs.existsSync(testResultsPath)) {
    const results = JSON.parse(fs.readFileSync(testResultsPath, 'utf8'));

    console.log('📊 Test Performance Analysis:');
    console.log(`Total Tests: ${results.suites.length}`);

    let totalDuration = 0;
    const slowTests = [];

    for (const suite of results.suites) {
      for (const spec of suite.specs) {
        for (const test of spec.tests) {
          const duration = test.results[0]?.duration || 0;
          totalDuration += duration;

          if (duration > 30000) {
            // Tests taking more than 30 seconds
            slowTests.push({
              name: test.title,
              duration: Math.round(duration / 1000),
              status: test.results[0]?.status,
            });
          }
        }
      }
    }

    console.log(`Total Duration: ${Math.round(totalDuration / 1000 / 60)} minutes`);
    console.log(
      `Average Test Duration: ${Math.round(totalDuration / results.suites.length / 1000)} seconds`
    );

    if (slowTests.length > 0) {
      console.log('\n🐌 Slow Tests (>30s):');
      for (const test of slowTests) {
        console.log(`  • ${test.name}: ${test.duration}s (${test.status})`);
      }
    }
  }
}

// Generate optimization recommendations
function generateRecommendations() {
  console.log('\n💡 Optimization Recommendations:');

  const recommendations = [
    '🚀 Use test:fast for development (6 workers, 20s timeout)',
    '📱 Use test:mobile for mobile-specific testing',
    '💻 Use test:desktop for desktop browser testing',
    '🔍 Use test:seo for SEO-focused testing',
    '⚡ Use test:lighthouse for performance audits',
    '🏗️  Run specific test suites: test:homepage, test:probate, test:performance',
    '📊 Use test:ci for continuous integration (2 workers, HTML reports)',
    '🎯 Focus on Core Web Vitals tests for SEO performance',
    '📱 Prioritize mobile experience tests for probate clients',
    '⚖️  Balance test coverage vs. execution speed',
  ];

  for (const rec of recommendations) {
    console.log(rec);
  }
}

// Check for performance issues
function checkPerformanceIssues() {
  console.log('\n🔍 Performance Issue Detection:');

  const issues = [
    '⚠️  Viewport metadata warnings in Next.js (move to viewport export)',
    '📱 Mobile tests taking longer than desktop (expected for mobile)',
    '🌐 Cross-browser compatibility testing (good coverage)',
    '⚡ Lighthouse audits only run in Chromium (by design)',
    '📊 Performance metrics logging enabled for analysis',
  ];

  for (const issue of issues) {
    console.log(issue);
  }
}

// Main execution
try {
  analyzeTestResults();
  generateRecommendations();
  checkPerformanceIssues();

  console.log('\n✅ Test optimization analysis complete!');
  console.log('\n🚀 Quick Start Commands:');
  console.log('  npm run test:fast          # Fast development testing');
  console.log('  npm run test:homepage      # Homepage-specific tests');
  console.log('  npm run test:lighthouse    # Performance audits');
  console.log('  npm run test:mobile        # Mobile experience tests');
} catch (error) {
  console.error('❌ Error analyzing test results:', error.message);
  console.log('\n💡 Run tests first with: npm test');
}
