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

### 🚀 Usage Examples:

#### Next.js Environment Variables:
```bash
# Create .env.local (not committed to git)
CLOUDFLARE_API_TOKEN=006a036208c6527a48175ccf9393d794509e3
CLOUDFLARE_ZONE_ID=your_zone_id_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

#### Vercel Environment Variables:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ZONE_ID`
   - `CLOUDFLARE_ACCOUNT_ID`

### 🛡️ Best Practices:
- Use environment variables in production
- Keep configuration files local only
- Regularly rotate API tokens
- Monitor API usage and permissions
- Use least-privilege access for API tokens

### 📚 Additional Resources:
- [Cloudflare API Documentation](https://developers.cloudflare.com/api/)
- [Cloudflare API Token Management](https://dash.cloudflare.com/profile/api-tokens)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
