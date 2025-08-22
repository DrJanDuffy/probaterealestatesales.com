// Cloudflare Optimization Utilities
import { cloudflareAPI, CLOUDFLARE_CONFIG } from './cloudflare';

export interface CloudflareOptimizationConfig {
  zoneId: string;
  accountId: string;
  domain: string;
}

export interface DNSSettings {
  minTlsVersion: '1.0' | '1.1' | '1.2' | '1.3';
  ssl: 'off' | 'flexible' | 'full' | 'full_strict';
  securityLevel: 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  browserCheck: 'on' | 'off';
  challengeTtl: number;
  privacyPass: 'on' | 'off';
}

export interface SpeedSettings {
  minify: {
    html: boolean;
    css: boolean;
    js: boolean;
  };
  brotli: 'on' | 'off';
  earlyHints: 'on' | 'off';
  http2: 'on' | 'off';
  http3: 'on' | 'off';
  rocketLoader: 'on' | 'off';
  mirage: 'on' | 'off';
  polish: 'off' | 'lossless' | 'lossy';
  webp: 'on' | 'off';
}

export interface SecuritySettings {
  waf: 'on' | 'off';
  rateLimiting: 'on' | 'off';
  botManagement: 'on' | 'off';
  managedRules: 'on' | 'off';
  securityLevel: 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';
  challengePass: number;
  privacyPass: 'on' | 'off';
}

export class CloudflareOptimizer {
  private zoneId: string;
  private accountId: string;
  private domain: string;

  constructor(config: CloudflareOptimizationConfig) {
    this.zoneId = config.zoneId;
    this.accountId = config.accountId;
    this.domain = config.domain;
  }

  // DNS Optimization
  async optimizeDNS() {
    console.log('🚀 Optimizing DNS configuration...');
    
    try {
      // Update zone settings
      await this.updateZoneSettings();
      
      // Create/update DNS records
      await this.setupDNSRecords();
      
      console.log('✅ DNS optimization completed');
    } catch (error) {
      console.error('❌ DNS optimization failed:', error);
      throw error;
    }
  }

  private async updateZoneSettings() {
    const settings: DNSSettings = {
      minTlsVersion: '1.2',
      ssl: 'full_strict',
      securityLevel: 'medium',
      browserCheck: 'on',
      challengeTtl: 300,
      privacyPass: 'on'
    };

    // Update SSL/TLS settings
    await this.updateZoneSetting('ssl', settings.ssl);
    await this.updateZoneSetting('min_tls_version', settings.minTlsVersion);
    await this.updateZoneSetting('security_level', settings.securityLevel);
    await this.updateZoneSetting('browser_check', settings.browserCheck);
    await this.updateZoneSetting('challenge_ttl', settings.challengeTtl);
    await this.updateZoneSetting('privacy_pass', settings.privacyPass);
  }

  private async updateZoneSetting(setting: string, value: any) {
    await fetch(
      `https://api.cloudflare.com/client/v4/zones/${this.zoneId}/settings/${setting}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_CONFIG.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value })
      }
    ).then(response => {
      if (!response.ok) {
        console.warn(`⚠️ Failed to update ${setting}:`, response.statusText);
      }
    });
  }

  private async setupDNSRecords() {
    const dnsRecords = [
      {
        type: 'A',
        name: '@',
        content: '76.76.19.36', // Vercel IP
        ttl: 1,
        proxied: true,
        comment: 'Vercel A record'
      },
      {
        type: 'CNAME',
        name: 'www',
        content: this.domain,
        ttl: 1,
        proxied: true,
        comment: 'WWW redirect'
      },
      {
        type: 'TXT',
        name: '@',
        content: 'v=spf1 include:_spf.google.com ~all',
        ttl: 1,
        proxied: false,
        comment: 'SPF record for email'
      }
    ];

    for (const record of dnsRecords) {
      try {
        await cloudflareAPI.createDNSRecord(this.zoneId, record);
        console.log(`✅ Created DNS record: ${record.type} ${record.name}`);
      } catch (error) {
        console.log(`ℹ️ DNS record ${record.type} ${record.name} may already exist`);
      }
    }
  }

  // Speed Optimization
  async optimizeSpeed() {
    console.log('⚡ Optimizing speed settings...');
    
    try {
      const speedSettings: SpeedSettings = {
        minify: { html: true, css: true, js: true },
        brotli: 'on',
        earlyHints: 'on',
        http2: 'on',
        http3: 'on',
        rocketLoader: 'on',
        mirage: 'on',
        polish: 'lossless',
        webp: 'on'
      };

      // Apply speed optimizations
      await this.updateZoneSetting('minify', speedSettings.minify);
      await this.updateZoneSetting('brotli', speedSettings.brotli);
      await this.updateZoneSetting('early_hints', speedSettings.earlyHints);
      await this.updateZoneSetting('http2', speedSettings.http2);
      await this.updateZoneSetting('http3', speedSettings.http3);
      await this.updateZoneSetting('rocket_loader', speedSettings.rocketLoader);
      await this.updateZoneSetting('mirage', speedSettings.mirage);
      await this.updateZoneSetting('polish', speedSettings.polish);
      await this.updateZoneSetting('webp', speedSettings.webp);

      console.log('✅ Speed optimization completed');
    } catch (error) {
      console.error('❌ Speed optimization failed:', error);
      throw error;
    }
  }

  // Security Optimization
  async optimizeSecurity() {
    console.log('🛡️ Optimizing security settings...');
    
    try {
      const securitySettings: SecuritySettings = {
        waf: 'on',
        rateLimiting: 'on',
        botManagement: 'on',
        managedRules: 'on',
        securityLevel: 'medium',
        challengePass: 300,
        privacyPass: 'on'
      };

      // Apply security optimizations
      await this.updateZoneSetting('waf', securitySettings.waf);
      await this.updateZoneSetting('rate_limiting', securitySettings.rateLimiting);
      await this.updateZoneSetting('bot_management', securitySettings.botManagement);
      await this.updateZoneSetting('managed_rules', securitySettings.managedRules);

      console.log('✅ Security optimization completed');
    } catch (error) {
      console.error('❌ Security optimization failed:', error);
      throw error;
    }
  }

  // Page Rules Optimization
  async setupPageRules() {
    console.log('📋 Setting up page rules...');
    
    try {
      const pageRules = [
        {
          target: `${this.domain}/*`,
          actions: {
            cache_level: 'cache_everything',
            edge_cache_ttl: 86400,
            browser_cache_ttl: 3600,
            always_online: 'on',
            minify: { html: true, css: true, js: true },
            rocket_loader: 'on',
            security_level: 'medium',
            ssl: 'full_strict'
          }
        },
        {
          target: `${this.domain}/api/*`,
          actions: {
            cache_level: 'bypass',
            always_online: 'off'
          }
        }
      ];

      for (const rule of pageRules) {
        try {
          await this.createPageRule(rule);
          console.log(`✅ Created page rule for: ${rule.target}`);
        } catch (error) {
          console.log(`ℹ️ Page rule for ${rule.target} may already exist`);
        }
      }

      console.log('✅ Page rules setup completed');
    } catch (error) {
      console.error('❌ Page rules setup failed:', error);
      throw error;
    }
  }

  private async createPageRule(rule: any) {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${this.zoneId}/pagerules`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_CONFIG.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rule)
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create page rule: ${response.statusText}`);
    }
  }

  // Cache Optimization
  async optimizeCache() {
    console.log('💾 Optimizing cache settings...');
    
    try {
      // Set cache TTL
      await this.updateZoneSetting('edge_cache_ttl', 86400);
      await this.updateZoneSetting('browser_cache_ttl', 3600);
      await this.updateZoneSetting('always_online', true);
      await this.updateZoneSetting('development_mode', false);

      console.log('✅ Cache optimization completed');
    } catch (error) {
      console.error('❌ Cache optimization failed:', error);
      throw error;
    }
  }

  // Firewall Rules
  async setupFirewallRules() {
    console.log('🔥 Setting up firewall rules...');
    
    try {
      const firewallRules = [
        {
          expression: '(http.request.uri.path contains ".php" or http.request.uri.path contains ".asp" or http.request.uri.path contains ".exe")',
          action: 'block',
          description: 'Block malicious file types'
        },
        {
          expression: 'http.user_agent contains "bot" and not http.user_agent contains "googlebot" and not http.user_agent contains "bingbot"',
          action: 'challenge',
          description: 'Challenge suspicious bots'
        }
      ];

      for (const rule of firewallRules) {
        try {
          await this.createFirewallRule(rule);
          console.log(`✅ Created firewall rule: ${rule.description}`);
        } catch (error) {
          console.log(`ℹ️ Firewall rule "${rule.description}" may already exist`);
        }
      }

      console.log('✅ Firewall rules setup completed');
    } catch (error) {
      console.error('❌ Firewall rules setup failed:', error);
      throw error;
    }
  }

  private async createFirewallRule(rule: any) {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${this.zoneId}/firewall/access_rules/rules`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_CONFIG.apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rule)
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to create firewall rule: ${response.statusText}`);
    }
  }

  // Complete Optimization
  async optimizeAll() {
    console.log('🚀 Starting complete Cloudflare optimization...');
    
    try {
      await this.optimizeDNS();
      await this.optimizeSpeed();
      await this.optimizeSecurity();
      await this.setupPageRules();
      await this.optimizeCache();
      await this.setupFirewallRules();
      
      console.log('🎉 Complete Cloudflare optimization finished successfully!');
    } catch (error) {
      console.error('💥 Optimization failed:', error);
      throw error;
    }
  }

  // Performance Analytics
  async getPerformanceMetrics() {
    try {
      const response = await fetch(
        `https://api.cloudflare.com/client/v4/zones/${this.zoneId}/analytics/dashboard`,
        {
          headers: {
            'Authorization': `Bearer ${CLOUDFLARE_CONFIG.apiToken}`,
          }
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch analytics: ${response.statusText}`);
      }

      const data = await response.json();
      return data.result;
    } catch (error) {
      console.error('Failed to fetch performance metrics:', error);
      return null;
    }
  }
}

// Export utility functions
export const createCloudflareOptimizer = (config: CloudflareOptimizationConfig) => {
  return new CloudflareOptimizer(config);
};

export const optimizeCloudflare = async (config: CloudflareOptimizationConfig) => {
  const optimizer = createCloudflareOptimizer(config);
  return optimizer.optimizeAll();
};
