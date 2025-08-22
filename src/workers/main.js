// Cloudflare Worker for probaterealestatesales.com
// Performance and security optimizations

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const userAgent = request.headers.get('User-Agent') || '';
    
    // Security headers
    const securityHeaders = {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';"
    };

    // Bot protection
    if (isSuspiciousBot(userAgent)) {
      return new Response('Access denied', { status: 403 });
    }

    // Rate limiting (basic implementation)
    if (await isRateLimited(request, env)) {
      return new Response('Too many requests', { status: 429 });
    }

    // Cache optimization
    const cacheKey = new Request(url, request);
    const cache = caches.default;
    
    // Check cache first
    let response = await cache.match(cacheKey);
    
    if (!response) {
      // Fetch from origin
      response = await fetch(request);
      
      // Clone response to modify headers
      const responseToCache = new Response(response.body, response);
      
      // Add security headers
      for (const [key, value] of Object.entries(securityHeaders)) {
        responseToCache.headers.set(key, value);
      }
      
      // Cache static assets aggressively
      if (isStaticAsset(url.pathname)) {
        responseToCache.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        responseToCache.headers.set('CDN-Cache-Control', 'public, max-age=31536000');
        responseToCache.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=31536000');
      } else if (isHTMLPage(url.pathname)) {
        responseToCache.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=86400');
        responseToCache.headers.set('CDN-Cache-Control', 'public, max-age=86400');
        responseToCache.headers.set('Vercel-CDN-Cache-Control', 'public, max-age=86400');
      }
      
      // Store in cache
      ctx.waitUntil(cache.put(cacheKey, responseToCache.clone()));
      
      return responseToCache;
    }
    
    // Return cached response with security headers
    const cachedResponse = new Response(response.body, response);
    for (const [key, value] of Object.entries(securityHeaders)) {
      cachedResponse.headers.set(key, value);
    }
    
    return cachedResponse;
  }
};

// Helper functions
function isSuspiciousBot(userAgent) {
  const suspiciousPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i
  ];
  
  // Allow legitimate bots
  const legitimateBots = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot'
  ];
  
  if (legitimateBots.some(bot => userAgent.toLowerCase().includes(bot))) {
    return false;
  }
  
  return suspiciousPatterns.some(pattern => pattern.test(userAgent));
}

async function isRateLimited(request, env) {
  const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = `rate_limit:${clientIP}`;
  
  // Basic rate limiting - 100 requests per minute
  const current = await env.KV.get(key);
  if (current && Number.parseInt(current, 10) > 100) {
    return true;
  }
  
  // Increment counter
  await env.KV.put(key, (Number.parseInt(current, 10) || 0) + 1, { expirationTtl: 60 });
  return false;
}

function isStaticAsset(pathname) {
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot'];
  return staticExtensions.some(ext => pathname.endsWith(ext));
}

function isHTMLPage(pathname) {
  return pathname.endsWith('.html') || pathname.endsWith('/') || !pathname.includes('.');
}
