# Configuration & Secrets Management

## 🔐 Cloudflare API Configuration

Your Cloudflare API token has been stored in `cloudflare-config.json`. This file is **NOT** committed to version control for security.

### Current Configuration:
- **API Token**: `006a036208c6527a48175ccf9393d794509e3`
- **Zone ID**: [Add your Cloudflare Zone ID here]
- **Account ID**: [Add your Cloudflare Account ID here]

### 🔒 Security Notes:
1. **Never commit** `cloudflare-config.json` to version control
2. **Keep your API token secure** - don't share it publicly
3. **Rotate tokens regularly** for security best practices

### 📝 To Complete Setup:
1. Add your **Zone ID** from Cloudflare dashboard
2. Add your **Account ID** from Cloudflare dashboard
3. Update domain settings as needed

## 🚀 Cloudflare Optimization Features

### ✨ What's Included:

#### 🔧 DNS Optimization
- **A Record**: Points to Vercel (76.76.19.36)
- **CNAME**: WWW redirect to root domain
- **TXT Records**: SPF for email, Google verification
- **SSL/TLS**: Full (strict) with minimum TLS 1.2
- **Security Level**: Medium with browser check enabled

#### ⚡ Speed Optimization
- **Minification**: HTML, CSS, and JavaScript
- **Compression**: Brotli enabled
- **HTTP/2 & HTTP/3**: Enabled for modern browsers
- **Rocket Loader**: JavaScript loading optimization
- **Mirage**: Image optimization
- **Polish**: Lossless image compression
- **WebP**: Modern image format support
- **Early Hints**: Resource preloading

#### 🛡️ Security Features
- **WAF**: Web Application Firewall enabled
- **Rate Limiting**: Protection against abuse
- **Bot Management**: Smart bot detection
- **Managed Rules**: Cloudflare security rules
- **Firewall Rules**: Block malicious file types, challenge suspicious bots

#### 💾 Cache Optimization
- **Edge Cache**: 24-hour TTL for static content
- **Browser Cache**: 1-hour TTL for HTML pages
- **Always Online**: Serves cached content when origin is down
- **Smart Caching**: Different rules for different content types

#### 📋 Page Rules
- **Main Site**: Cache everything, minify, enable Rocket Loader
- **API Routes**: Bypass cache for dynamic content

#### ⚙️ Cloudflare Workers
- **Security Headers**: Comprehensive security headers
- **Bot Protection**: Intelligent bot filtering
- **Rate Limiting**: 100 requests per minute per IP
- **Cache Optimization**: Smart caching strategies
- **Performance Monitoring**: Real-time analytics

### 🚀 Quick Start:

1. **Update Configuration**:
   ```bash
   # Edit cloudflare-config.json
   # Add your Zone ID and Account ID
   ```

2. **Deploy Everything**:
   ```bash
   npm run deploy:cloudflare
   ```

3. **Verify Setup**:
   - Check DNS records in Cloudflare dashboard
   - Verify Workers are running
   - Test page rules and firewall rules
   - Monitor performance in Cloudflare analytics

### 🔧 Manual Deployment Options:

```bash
# Deploy specific components
npm run cloudflare:optimize

# Or run individual functions
node -e "
const { deployDNS, deployWorkers, setupPageRules } = require('./scripts/deploy-cloudflare.js');
// Run specific functions as needed
"
```

### 📊 Performance Benefits:

- **⚡ 2-3x faster loading** with edge caching
- **🛡️ Enhanced security** with WAF and bot protection
- **📱 Better mobile performance** with image optimization
- **🌍 Global CDN** with 200+ data centers
- **💰 Reduced bandwidth costs** with compression
- **📈 Better SEO** with faster page speeds

### 🛠️ Advanced Configuration:

#### Custom Worker Scripts:
- Edit `src/workers/main.js` for custom logic
- Add environment variables in Cloudflare dashboard
- Configure KV storage for rate limiting

#### Page Rules Customization:
- Modify `cloudflare-config.json` page rules
- Add custom caching strategies
- Configure security policies per route

#### Firewall Rules:
- Add custom expressions in `cloudflare-config.json`
- Configure challenge/block actions
- Set up IP allowlists/blocklists

### 🔍 Monitoring & Analytics:

#### Performance Metrics:
- **Core Web Vitals**: LCP, FID, CLS
- **Cache Hit Ratio**: Monitor cache effectiveness
- **Bandwidth Savings**: Track compression benefits
- **Security Events**: Monitor WAF and bot activity

#### Cloudflare Dashboard:
- Real-time traffic analytics
- Security threat monitoring
- Performance insights
- Cache performance metrics

### 🚨 Troubleshooting:

#### Common Issues:
1. **DNS Propagation**: Wait 24-48 hours for full propagation
2. **SSL Errors**: Ensure SSL mode is set to "Full (strict)"
3. **Cache Issues**: Use cache purge function in deployment script
4. **Worker Errors**: Check compatibility flags and date

#### Debug Commands:
```bash
# Check DNS propagation
dig probaterealestatesales.com

# Test SSL configuration
curl -I https://probaterealestatesales.com

# Verify Worker deployment
curl -H "User-Agent: test-bot" https://probaterealestatesales.com
```

### 📚 Additional Resources:
- [Cloudflare API Documentation](https://developers.cloudflare.com/api/)
- [Cloudflare API Token Management](https://dash.cloudflare.com/profile/api-tokens)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Page Rules Best Practices](https://developers.cloudflare.com/firewall/learning-paths/page-rules/)
- [Performance Optimization Guide](https://developers.cloudflare.com/speed/)

### 🎯 Next Steps:

1. **Complete Configuration**: Add Zone ID and Account ID
2. **Deploy**: Run `npm run deploy:cloudflare`
3. **Monitor**: Check Cloudflare dashboard for performance
4. **Optimize**: Fine-tune settings based on analytics
5. **Scale**: Add more domains or advanced features

---

**Your probate real estate website is now ready for enterprise-grade performance and security! 🏠✨**
