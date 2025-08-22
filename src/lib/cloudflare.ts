// Cloudflare API utilities
export const CLOUDFLARE_CONFIG = {
  apiToken: process.env.CLOUDFLARE_API_TOKEN || '006a036208c6527a48175ccf9393d794509e3',
  zoneId: process.env.CLOUDFLARE_ZONE_ID,
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
};

export interface CloudflareDNSRecord {
  id: string;
  type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'TXT' | 'SRV';
  name: string;
  content: string;
  ttl: number;
  proxied?: boolean;
}

export class CloudflareAPI {
  private baseUrl = 'https://api.cloudflare.com/client/v4';
  private headers: HeadersInit;

  constructor() {
    this.headers = {
      'Authorization': `Bearer ${CLOUDFLARE_CONFIG.apiToken}`,
      'Content-Type': 'application/json',
    };
  }

  // Get DNS records for a zone
  async getDNSRecords(zoneId: string): Promise<CloudflareDNSRecord[]> {
    const response = await fetch(`${this.baseUrl}/zones/${zoneId}/dns_records`, {
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DNS records: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result || [];
  }

  // Create a new DNS record
  async createDNSRecord(zoneId: string, record: Omit<CloudflareDNSRecord, 'id'>): Promise<CloudflareDNSRecord> {
    const response = await fetch(`${this.baseUrl}/zones/${zoneId}/dns_records`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(record),
    });

    if (!response.ok) {
      throw new Error(`Failed to create DNS record: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result;
  }

  // Update an existing DNS record
  async updateDNSRecord(zoneId: string, recordId: string, updates: Partial<CloudflareDNSRecord>): Promise<CloudflareDNSRecord> {
    const response = await fetch(`${this.baseUrl}/zones/${zoneId}/dns_records/${recordId}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`Failed to update DNS record: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result;
  }

  // Delete a DNS record
  async deleteDNSRecord(zoneId: string, recordId: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/zones/${zoneId}/dns_records/${recordId}`, {
      method: 'DELETE',
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to delete DNS record: ${response.statusText}`);
    }
  }

  // Get zone information
  async getZone(zoneId: string) {
    const response = await fetch(`${this.baseUrl}/zones/${zoneId}`, {
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch zone: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result;
  }

  // Purge cache for a zone
  async purgeCache(zoneId: string, urls?: string[]) {
    const body = urls ? { files: urls } : { purge_everything: true };
    
    const response = await fetch(`${this.baseUrl}/zones/${zoneId}/purge_cache`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Failed to purge cache: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result;
  }
}

// Export a default instance
export const cloudflareAPI = new CloudflareAPI();
