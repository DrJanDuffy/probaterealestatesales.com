# Cloudflare Crawler Hints (IndexNow) for All Domains

Cloudflare **Crawler Hints** includes IndexNow support. When enabled, Cloudflare automatically notifies Bing, Yandex, and others when content changes (via cache-status MISS).

**Note:** Crawler Hints has **no public API**. It can only be enabled via the dashboard.

## Enable for All Domains

### Option 1: Script (dashboard links)

```bash
# Set your Cloudflare API token
export CLOUDFLARE_API_TOKEN=your_token_here

# List zones
npm run cloudflare:crawler-hints

# Print direct dashboard URLs for Caching > Configuration
npm run cloudflare:crawler-hints -- --links

# Zone names only
npm run cloudflare:crawler-hints -- --list
```

### Option 2: Manual (per domain)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select a domain (zone)
3. **Caching** → **Configuration**
4. Enable **Crawler Hints**
5. Repeat for each domain

## API Token Permissions

Create a token at [Profile → API Tokens](https://dash.cloudflare.com/profile/api-tokens):

- **Edit zone DNS** (or custom token with Zone → Zone → Edit)
- **Edit zone cache** (or Zone → Cache Purge)

Or use a template: **Edit zone cache**.

## How It Works

- **Crawler Hints** uses cache-status `MISS` to detect content changes
- Automatically submits changed URLs to IndexNow (Bing, Yandex, etc.)
- No key file needed when using Cloudflare Crawler Hints
- Works alongside your manual IndexNow API (probaterealestatesales.com on Vercel)

## Note: Vercel vs Cloudflare

- **probaterealestatesales.com** deploys to **Vercel** – use the IndexNow API/script in this repo
- **Other domains** on **Cloudflare** (DNS or full proxy) – enable Crawler Hints per zone
- If a domain is DNS-only on Cloudflare (gray cloud), Crawler Hints may not apply; it works when Cloudflare proxies traffic (orange cloud)
