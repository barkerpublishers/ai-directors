# AI Directors Academy Landing Page

A cinematic, high-conversion landing page that merges old Hollywood grandeur with futuristic AI aesthetics, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

## ✅ Implementation Status

### Completed Features

- **Next.js 14 Project Setup** - TypeScript, Tailwind CSS, App Router
- **Dark Theme Design System** - Custom colors, gradients, animations
- **Component Architecture**
  - Base UI Components (DarkSection, BlockyHeadline, GlowingButton, FeatureCard)
  - Animation Wrappers (ScrollReveal, FadeIn with Framer Motion)
  - Section Components (Hero, Features, SocialProof, CTASection)
- **Hero Section** - Full-screen with video background support
- **Features Section** - 3 core offerings with metallic card design
- **Social Proof** - Metrics, testimonials, partner logos
- **CTA Section** - Email capture form with API integration
- **API Route** - `/api/subscribe` endpoint for email subscriptions
- **SEO Optimization** - Metadata, Open Graph, JSON-LD structured data
- **Build Validation** - TypeScript compilation and ESLint pass

### Pending Tasks

1. **Add Video Assets**
   - Place hero background video at `/public/videos/hero-bg.mp4`
   - Specifications in `/public/videos/README.md`

2. **Add OG Image**
   - Create 1200x630px image at `/public/images/og-image.jpg`
   - Guidelines in `/public/images/README.md`

3. **Email Service Integration**
   - Connect `/api/subscribe` to actual email service
   - Update `.env.local` with API keys

4. **Performance Testing**
   - Run Lighthouse audit (target: > 90)
   - Test Core Web Vitals

5. **Responsive Testing**
   - Verify layout from 320px to 4K displays
   - Test on real devices

6. **Deployment**
   - Deploy to Vercel
   - Configure environment variables

## 🎨 Design Features

- **Old Hollywood Meets AI** aesthetic
- **Dark theme** with high contrast (WCAG AA compliant)
- **Gradient text** with Safari support
- **Metallic borders** and glow effects
- **Smooth scroll animations** using Framer Motion
- **Mobile-first responsive** design

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with fonts
├── page.tsx           # Home page
├── globals.css        # Global styles
└── api/
    └── subscribe/     # Email subscription endpoint

components/
├── ui/                # Reusable UI components
├── sections/          # Page sections
└── animations/        # Animation wrappers

lib/
├── constants.ts       # Data and configuration
├── types.ts          # TypeScript interfaces
└── utils.ts          # Helper functions
```

## 🔧 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add email service API keys
```

## 🚦 Validation Commands

```bash
# TypeScript check
npm run build

# ESLint
npm run lint

# Development server
npm run dev
```

## 📋 Anti-Patterns Avoided

- ✅ All motion components use 'use client' directive
- ✅ Gradient text includes Safari prefix
- ✅ High contrast text on dark backgrounds
- ✅ Only transform/opacity animations
- ✅ Responsive values using Tailwind/clamp()
- ✅ Proper TypeScript types throughout

## 🎯 Next Steps

1. Add video and image assets
2. Integrate email service
3. Run performance audits
4. Deploy to Vercel
5. Monitor analytics and conversions