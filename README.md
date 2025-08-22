# Probate Real Estate Sales Website

A modern, professional website for probate real estate services built with Next.js 15, TypeScript, Tailwind CSS, and Biome.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for real estate services
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Type Safety**: Full TypeScript support for better development experience
- **Code Quality**: Biome for formatting, linting, and code organization
- **Real Estate Focused**: Components and content specifically designed for probate real estate

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: Biome (formatter + linter)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 4. Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🧹 Code Quality Commands

- **Lint**: `npm run lint` - Check code with Biome
- **Lint & Fix**: `npm run lint:fix` - Fix auto-fixable issues
- **Format**: `npm run format` - Format code with Biome
- **Type Check**: `npm run type-check` - Run TypeScript compiler

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services showcase
│   ├── FeaturedProperties.tsx  # Property listings
│   ├── WhyChooseUs.tsx        # Company advantages
│   ├── Testimonials.tsx       # Client reviews
│   └── ContactSection.tsx     # Contact form
└── types/             # TypeScript type definitions
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts` with custom primary, secondary, and accent colors.

## 🔒 Fire Crawl Dashboard

The Fire Crawl Dashboard (`/firecrawl-dashboard`) was a development tool that has been **removed from public access** to improve website security and user experience.

### Current Status
- **Public Access**: ❌ Blocked (shows 404 page)
- **Development**: ❌ Removed from production
- **Security**: ✅ No longer accessible to unauthorized users

### Why It Was Removed
- The Fire Crawl integration was not fully functional
- It served no public purpose for website visitors
- It was a potential security risk when exposed publicly
- It created confusion for users who stumbled upon it

### Alternative Solutions
If you need content generation capabilities in the future, consider:
1. **Private Admin Panel**: Build a secure, authenticated admin interface
2. **Content Management System**: Use a proper CMS like Strapi or Contentful
3. **Automated Content**: Implement server-side content generation without public access
4. **Remove Route**: Completely remove the route from your Next.js application

### Components
All components are built with Tailwind CSS utility classes and can be easily customized by modifying the classes.

### Content
Update the content in each component file to match your business needs.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly buttons and forms
- Optimized typography for all screen sizes

## 🔧 Configuration Files

- **`biome.json`**: Biome configuration for code formatting and linting
- **`tailwind.config.ts`**: Tailwind CSS configuration with custom theme
- **`tsconfig.json`**: TypeScript configuration
- **`next.config.js`**: Next.js configuration

## 📈 Performance Features

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind CSS
- Code splitting and lazy loading
- Optimized bundle size

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please contact:
- Email: info@probaterealestate.com
- Phone: (555) 123-4567

## 🔄 Updates

To keep your project up to date:

```bash
npm update
# or
yarn upgrade
# or
pnpm update
```

Check the [Next.js documentation](https://nextjs.org/docs) for the latest features and best practices.
