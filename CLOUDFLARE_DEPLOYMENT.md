# 🚀 Cloudflare Pages Deployment Guide

## Overview
Deploy your Next.js probate real estate website to Cloudflare Pages for:
- ⚡ **Edge Rendering** - Global performance from 200+ locations
- 🖼️ **Image Optimization** - Automatic WebP/AVIF conversion
- 🔒 **HTTPS by Default** - Security out of the box
- 📱 **Mobile Optimization** - Built-in performance enhancements

## 🎯 Quick Start (GitHub Integration)

### 1. Connect GitHub Repository
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Select **Connect to Git**
4. Choose your `probaterealestatesales.com` repository
5. Authorize Cloudflare access

### 2. Build Configuration
```
Build command: npm run build:cf
Build output directory: out
Root directory: / (leave blank)
```

### 3. Environment Variables
```
NODE_ENV = production
NEXT_IMAGE_DOMAINS = images.unsplash.com,via.placeholder.com
```

### 4. Deploy Settings
- **Framework preset**: Next.js
- **Build output directory**: `out`
- **Root directory**: `/` (leave blank)

## 🔧 Manual Deployment

### Install Wrangler CLI
```bash
npm install -g wrangler
```

### Login to Cloudflare
```bash
wrangler login
```

### Build and Deploy
```bash
npm run build:cf
wrangler pages deploy out
```

## 🔍 Crawler Hints (IndexNow) – All Domains

Enable Crawler Hints to automatically notify Bing and Yandex when content changes. **Crawler Hints has no public API**; enable via the dashboard only.

### Get dashboard links for all zones

```bash
export CLOUDFLARE_API_TOKEN=your_token_here
npm run cloudflare:crawler-hints -- --links
```

### Manual (per domain)

1. **Caching** → **Configuration**
2. Enable **Crawler Hints**

See [docs/CLOUDFLARE-INDEXNOW.md](docs/CLOUDFLARE-INDEXNOW.md) for details.

## 📊 Performance Optimizations

### 1. Edge Caching
- Static assets cached at edge locations
- HTML pages cached for optimal performance
- Automatic cache invalidation on updates

### 2. Image Optimization
- Automatic WebP/AVIF conversion
- Responsive image sizing
- Lazy loading optimization

### 3. Code Splitting
- Automatic JavaScript bundling
- CSS optimization and minification
- Tree shaking for unused code removal

## 🌍 Custom Domain Setup

### 1. Add Custom Domain
1. Go to your Pages project
2. **Custom domains** → **Set up a custom domain**
3. Enter: `probaterealestatesales.com`
4. Follow DNS configuration instructions

### 2. DNS Configuration
```
Type: CNAME
Name: @
Target: your-project.pages.dev
```

## 📈 Analytics & Monitoring

### 1. Web Analytics
- Built-in performance metrics
- Real user monitoring (RUM)
- Core Web Vitals tracking

### 2. Performance Insights
- Page load times
- Geographic performance data
- Mobile vs desktop metrics

## 🔄 Continuous Deployment

### 1. Automatic Deploys
- Deploy on every push to `main` branch
- Preview deployments for pull requests
- Automatic rollback on failures

### 2. Branch Deployments
- `main` → Production
- `develop` → Preview
- Feature branches → Preview URLs

## 🚨 Troubleshooting

### Common Issues
1. **Build Failures**: Check `npm run build:cf` locally
2. **Image Loading**: Verify `NEXT_IMAGE_DOMAINS` environment variable
3. **Routing Issues**: Ensure `trailingSlash: true` in Next.js config

### Support
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)

## 🎉 Benefits of Cloudflare Pages

- **Global Performance**: 200+ edge locations worldwide
- **Zero Configuration**: Automatic optimization
- **Cost Effective**: Generous free tier
- **Developer Experience**: Git-based deployments
- **Security**: DDoS protection, WAF, and SSL included

---

**Ready to deploy?** Follow the Quick Start section above to get your probate real estate website live on Cloudflare Pages! 🚀
