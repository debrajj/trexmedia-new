# Deployment Guide - Trexx IT Pro ISP Website

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
http://localhost:3000
```

## 📦 Build for Production

```bash
# Create optimized production build
npm run build

# Test production build locally
npm start
```

## ☁️ Deployment Options

### 1. Vercel (Recommended)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant deployments

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Import project at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js
4. Click "Deploy"
5. Done! Your site is live

**Custom Domain:**
```bash
# Add in Vercel dashboard
Settings → Domains → Add Domain
```

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### 3. AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### 4. Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

**Build and Run:**
```bash
docker build -t trexx-it-pro-isp .
docker run -p 3000:3000 trexx-it-pro-isp
```

### 5. Traditional VPS (Ubuntu)

```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone repository
git clone <your-repo-url>
cd trexx-it-pro-isp

# Install dependencies
npm install

# Build
npm run build

# Install PM2 for process management
npm install -g pm2

# Start with PM2
pm2 start npm --name "trexx-it-pro" -- start

# Setup PM2 to start on boot
pm2 startup
pm2 save
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔧 Environment Variables

Create `.env.local` for environment-specific settings:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Trexx IT Pro

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (Optional)
CONTACT_EMAIL=support@yourdomain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🎯 Pre-Deployment Checklist

### Content
- [ ] Update company name and branding
- [ ] Replace placeholder contact information
- [ ] Update pricing plans
- [ ] Add real product images
- [ ] Update social media links
- [ ] Customize service descriptions

### Technical
- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Check form submissions
- [ ] Test navigation menu
- [ ] Validate SEO metadata
- [ ] Optimize images
- [ ] Test loading performance

### SEO
- [ ] Update meta titles and descriptions
- [ ] Add favicon
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Setup Google Analytics
- [ ] Setup Google Search Console
- [ ] Add structured data (Schema.org)

### Security
- [ ] Enable HTTPS
- [ ] Setup CSP headers
- [ ] Configure CORS if needed
- [ ] Add rate limiting
- [ ] Setup error monitoring

## 📊 Performance Optimization

### Image Optimization
```javascript
// Already using Next.js Image component
// Automatically optimizes images
<Image src={...} alt={...} />
```

### Font Optimization
```javascript
// Already configured in layout.js
// Fonts are automatically optimized
```

### Code Splitting
- Automatic with Next.js App Router
- Each page loads only required code

### Caching Strategy
```javascript
// next.config.mjs
export default {
  images: {
    minimumCacheTTL: 60,
  },
  // Add more cache settings
}
```

## 🔍 Monitoring

### Recommended Tools
1. **Vercel Analytics** - Built-in performance monitoring
2. **Google Analytics** - User behavior tracking
3. **Sentry** - Error tracking
4. **Lighthouse** - Performance audits

### Setup Sentry (Optional)
```bash
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard -i nextjs
```

## 🔄 CI/CD Pipeline

### GitHub Actions Example

**.github/workflows/deploy.yml:**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm test
      # Add deployment step
```

## 🌐 Custom Domain Setup

### DNS Configuration
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     your-app.vercel.app
```

### SSL Certificate
- Automatic with Vercel/Netlify
- Let's Encrypt for VPS

## 📱 Progressive Web App (Optional)

Add PWA support:

```bash
npm install next-pwa
```

**next.config.mjs:**
```javascript
import withPWA from 'next-pwa';

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
});
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📈 Post-Deployment

1. **Test Everything**
   - All pages load correctly
   - Forms submit properly
   - Links work
   - Mobile responsive

2. **Setup Monitoring**
   - Analytics tracking
   - Error monitoring
   - Performance monitoring

3. **SEO Setup**
   - Submit sitemap to Google
   - Verify domain ownership
   - Setup Google My Business

4. **Marketing**
   - Social media announcement
   - Email newsletter
   - Press release

## 🔐 Security Best Practices

1. Keep dependencies updated
2. Use environment variables for secrets
3. Enable HTTPS only
4. Setup rate limiting
5. Add CSRF protection
6. Sanitize user inputs
7. Regular security audits

## 📞 Support

For deployment issues:
- Check Next.js documentation
- Vercel support (if using Vercel)
- GitHub Issues
- Community forums

## 🎉 Success!

Your ISP website is now live and ready to serve customers!

Next steps:
- Monitor performance
- Gather user feedback
- Iterate and improve
- Scale as needed
