#!/usr/bin/env node

// Cloudflare Deployment Script
// Automates DNS, Workers, and optimization setup

const fs = require('node:fs');
const path = require('node:path');

// Load configuration
const configPath = path.join(process.cwd(), 'cloudflare-config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const CLOUDFLARE_GLOBAL_API_KEY = config.cloudflare.apiToken;
const CLOUDFLARE_EMAIL = process.env.CLOUDFLARE_EMAIL || 'your-email@example.com';
const ZONE_ID = config.cloudflare.zoneId;
const ACCOUNT_ID = config.cloudflare.accountId;
const DOMAIN = config.domains[0];

if (!CLOUDFLARE_GLOBAL_API_KEY || !ZONE_ID || !ACCOUNT_ID) {
  console.error('❌ Missing required configuration values');
  console.error('Please update cloudflare-config.json with your Zone ID and Account ID');
  process.exit(1);
}

if (CLOUDFLARE_EMAIL === 'your-email@example.com') {
  console.error('❌ Please set your Cloudflare email address:');
  console.error('   Set CLOUDFLARE_EMAIL environment variable, or');
  console.error('   Update the script with your email address');
  process.exit(1);
}

console.log('🚀 Starting Cloudflare deployment...');
console.log(`Domain: ${DOMAIN}`);
console.log(`Zone ID: ${ZONE_ID}`);
console.log(`Account ID: ${ACCOUNT_ID}`);

// Cloudflare API base URL
const API_BASE = 'https://api.cloudflare.com/client/v4';

// Headers for API requests (Global API Key)
const headers = {
  'X-Auth-Key': CLOUDFLARE_GLOBAL_API_KEY,
  'X-Auth-Email': CLOUDFLARE_EMAIL,
  'Content-Type': 'application/json',
  'User-Agent': 'Cloudflare-Deployment-Script/1.0',
};

// Utility functions
async function makeRequest(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const response = await fetch(url, {
    headers,
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API request failed: ${response.status} ${response.statusText} - ${error}`);
  }

  return response.json();
}

async function deployDNS() {
  console.log('\n🔧 Setting up DNS records...');

  const dnsRecords = config.dns.records;

  for (const record of dnsRecords) {
    try {
      // Check if record exists
      const existing = await makeRequest(
        `/zones/${ZONE_ID}/dns_records?name=${record.name}&type=${record.type}`
      );

      if (existing.result.length > 0) {
        // Update existing record
        const recordId = existing.result[0].id;
        await makeRequest(`/zones/${ZONE_ID}/dns_records/${recordId}`, {
          method: 'PUT',
          body: JSON.stringify(record),
        });
        console.log(`✅ Updated DNS record: ${record.type} ${record.name}`);
      } else {
        // Create new record
        await makeRequest(`/zones/${ZONE_ID}/dns_records`, {
          method: 'POST',
          body: JSON.stringify(record),
        });
        console.log(`✅ Created DNS record: ${record.type} ${record.name}`);
      }
    } catch (error) {
      console.error(`❌ Failed to setup DNS record ${record.type} ${record.name}:`, error.message);
    }
  }
}

async function deployWorkers() {
  console.log('\n⚡ Setting up Cloudflare Workers...');

  try {
    // Deploy worker script
    const workerScript = fs.readFileSync(path.join(process.cwd(), 'src/workers/main.js'), 'utf8');

    // Upload worker script
    await makeRequest(
      `/accounts/${ACCOUNT_ID}/workers/scripts/${config.workers.scripts['probaterealestatesales-worker'].name}`,
      {
        method: 'PUT',
        body: JSON.stringify({
          script: workerScript,
          compatibility_date:
            config.workers.scripts['probaterealestatesales-worker'].compatibilityDate,
          compatibility_flags:
            config.workers.scripts['probaterealestatesales-worker'].compatibilityFlags,
          usage_model: config.workers.scripts['probaterealestatesales-worker'].usageModel,
        }),
      }
    );

    console.log('✅ Worker script deployed');

    // Setup worker routes
    for (const route of config.workers.routes) {
      try {
        await makeRequest(`/zones/${ZONE_ID}/workers/routes`, {
          method: 'POST',
          body: JSON.stringify({
            pattern: route.pattern,
            script: route.script,
          }),
        });
        console.log(`✅ Worker route created: ${route.pattern}`);
      } catch (_error) {
        console.log(`ℹ️ Worker route ${route.pattern} may already exist`);
      }
    }
  } catch (error) {
    console.error('❌ Failed to deploy Workers:', error.message);
  }
}

async function setupPageRules() {
  console.log('\n📋 Setting up Page Rules...');

  for (const rule of config.pageRules) {
    try {
      await makeRequest(`/zones/${ZONE_ID}/pagerules`, {
        method: 'POST',
        body: JSON.stringify(rule),
      });
      console.log(`✅ Page rule created: ${rule.target}`);
    } catch (_error) {
      console.log(`ℹ️ Page rule for ${rule.target} may already exist`);
    }
  }
}

async function setupFirewallRules() {
  console.log('\n🔥 Setting up Firewall Rules...');

  for (const rule of config.firewall.rules) {
    try {
      await makeRequest(`/zones/${ZONE_ID}/firewall/access_rules/rules`, {
        method: 'POST',
        body: JSON.stringify(rule),
      });
      console.log(`✅ Firewall rule created: ${rule.description}`);
    } catch (_error) {
      console.log(`ℹ️ Firewall rule "${rule.description}" may already exist`);
    }
  }
}

async function updateZoneSettings() {
  console.log('\n⚙️ Updating Zone Settings...');

  const settings = [
    { name: 'ssl', value: config.dns.settings.ssl },
    { name: 'min_tls_version', value: config.dns.settings.minTlsVersion },
    { name: 'security_level', value: config.dns.settings.securityLevel },
    { name: 'browser_check', value: config.dns.settings.browserCheck },
    { name: 'challenge_ttl', value: config.dns.settings.challengeTtl },
    { name: 'privacy_pass', value: config.dns.settings.privacyPass },
  ];

  for (const setting of settings) {
    try {
      await makeRequest(`/zones/${ZONE_ID}/settings/${setting.name}`, {
        method: 'PATCH',
        body: JSON.stringify({ value: setting.value }),
      });
      console.log(`✅ Updated setting: ${setting.name} = ${setting.value}`);
    } catch (error) {
      console.warn(`⚠️ Failed to update ${setting.name}:`, error.message);
    }
  }
}

async function updateSpeedSettings() {
  console.log('\n🚀 Updating Speed Settings...');

  const speedSettings = config.speed;

  try {
    await makeRequest(`/zones/${ZONE_ID}/settings/minify`, {
      method: 'PATCH',
      body: JSON.stringify({ value: speedSettings.minify }),
    });
    console.log('✅ Minification settings updated');
  } catch (error) {
    console.warn('⚠️ Failed to update minification settings:', error.message);
  }

  // Update other speed settings
  const settings = [
    { name: 'brotli', value: speedSettings.brotli },
    { name: 'early_hints', value: speedSettings.earlyHints },
    { name: 'http2', value: speedSettings.http2 },
    { name: 'http3', value: speedSettings.http3 },
    { name: 'rocket_loader', value: speedSettings.rocketLoader },
    { name: 'mirage', value: speedSettings.mirage },
    { name: 'polish', value: speedSettings.polish },
    { name: 'webp', value: speedSettings.webp },
  ];

  for (const setting of settings) {
    try {
      await makeRequest(`/zones/${ZONE_ID}/settings/${setting.name}`, {
        method: 'PATCH',
        body: JSON.stringify({ value: setting.value }),
      });
      console.log(`✅ Updated speed setting: ${setting.name} = ${setting.value}`);
    } catch (error) {
      console.warn(`⚠️ Failed to update ${setting.name}:`, error.message);
    }
  }
}

async function updateSecuritySettings() {
  console.log('\n🛡️ Updating Security Settings...');

  const securitySettings = config.security;

  const settings = [
    { name: 'waf', value: securitySettings.waf },
    { name: 'rate_limiting', value: securitySettings.rateLimiting },
    { name: 'bot_management', value: securitySettings.botManagement },
    { name: 'managed_rules', value: securitySettings.managedRules },
  ];

  for (const setting of settings) {
    try {
      await makeRequest(`/zones/${ZONE_ID}/settings/${setting.name}`, {
        method: 'PATCH',
        body: JSON.stringify({ value: setting.value }),
      });
      console.log(`✅ Updated security setting: ${setting.name} = ${setting.value}`);
    } catch (error) {
      console.warn(`⚠️ Failed to update ${setting.name}:`, error.message);
    }
  }
}

async function updateCacheSettings() {
  console.log('\n💾 Updating Cache Settings...');

  try {
    await makeRequest(`/zones/${ZONE_ID}/settings/edge_cache_ttl`, {
      method: 'PATCH',
      body: JSON.stringify({ value: config.cache.edgeCacheTtl }),
    });
    console.log('✅ Edge cache TTL updated');
  } catch (error) {
    console.warn('⚠️ Failed to update edge cache TTL:', error.message);
  }

  try {
    await makeRequest(`/zones/${ZONE_ID}/settings/always_online`, {
      method: 'PATCH',
      body: JSON.stringify({ value: config.cache.alwaysOnline }),
    });
    console.log('✅ Always Online setting updated');
  } catch (error) {
    console.warn('⚠️ Failed to update Always Online setting:', error.message);
  }
}

async function purgeCache() {
  console.log('\n🧹 Purging cache...');

  try {
    await makeRequest(`/zones/${ZONE_ID}/purge_cache`, {
      method: 'POST',
      body: JSON.stringify({ purge_everything: true }),
    });
    console.log('✅ Cache purged successfully');
  } catch (error) {
    console.error('❌ Failed to purge cache:', error.message);
  }
}

async function main() {
  try {
    // Deploy all components
    await deployDNS();
    await deployWorkers();
    await setupPageRules();
    await setupFirewallRules();
    await updateZoneSettings();
    await updateSpeedSettings();
    await updateSecuritySettings();
    await updateCacheSettings();
    await purgeCache();

    console.log('\n🎉 Cloudflare deployment completed successfully!');
    console.log('\n📊 Your site is now optimized with:');
    console.log('   ✅ DNS optimization');
    console.log('   ✅ Cloudflare Workers');
    console.log('   ✅ Page Rules');
    console.log('   ✅ Firewall Rules');
    console.log('   ✅ Speed optimizations');
    console.log('   ✅ Security enhancements');
    console.log('   ✅ Cache optimization');
  } catch (error) {
    console.error('\n💥 Deployment failed:', error.message);
    process.exit(1);
  }
}

// Run deployment
if (require.main === module) {
  main();
}

module.exports = {
  deployDNS,
  deployWorkers,
  setupPageRules,
  setupFirewallRules,
  updateZoneSettings,
  updateSpeedSettings,
  updateSecuritySettings,
  updateCacheSettings,
  purgeCache,
};
