name: "AI Directors Academy Landing Page - Complete Implementation"
description: |

## Purpose
Build a cinematic, high-conversion landing page for AI Directors Academy that merges old Hollywood grandeur with futuristic AI aesthetics. The page will showcase three core offerings for aspiring AI content creators using Next.js 14, TypeScript, and Tailwind CSS, deployed on Vercel.

## Core Principles
1. **Context is King**: Include ALL necessary documentation, examples, and caveats
2. **Validation Loops**: Provide executable tests/lints the AI can run and fix
3. **Information Dense**: Use keywords and patterns from the codebase
4. **Progressive Success**: Start simple, validate, then enhance
5. **Global rules**: Be sure to follow all rules in CLAUDE.md

---

## Goal
Create a fully functional, high-converting landing page for AI Directors Academy that captures the essence of old Hollywood cinema merged with modern AI aesthetics. The page must be performant, accessible, and optimized for conversion with strategic CTA placement, social proof, and compelling visual design.

## Why
- **Business value**: Convert visitors into AI Directors Academy students through compelling design and clear value propositions
- **User impact**: Inspire aspiring content creators to see the potential of AI-powered filmmaking
- **Problems solved**: Provides a professional, trustworthy entry point for the academy that stands out in the crowded AI education space

## What
A dark-themed landing page with:
- Full-screen cinematic hero section with video background
- Three feature cards showcasing core offerings
- Social proof section with testimonials and metrics
- Email capture CTA with glowing effects
- Smooth scroll animations and parallax effects
- Mobile-first responsive design

### Success Criteria
- [ ] Lighthouse performance score > 90
- [ ] All sections responsive from 320px to 4K displays
- [ ] Smooth 60fps animations on scroll
- [ ] WCAG AA accessibility compliance
- [ ] Email capture form functional
- [ ] Deployed successfully to Vercel

## All Needed Context

### Documentation & References
```yaml
# MUST READ - Include these in your context window
- url: https://nextjs.org/docs/app
  why: Next.js 14 App Router architecture, server components, layouts
  
- url: https://nextjs.org/docs/app/building-your-application/data-fetching/patterns
  why: Server component data fetching patterns and best practices
  
- url: https://motion.dev/docs/react-scroll-animations
  why: Framer Motion scroll animations and performance optimization
  
- url: https://tailwindcss.com/docs/dark-mode
  why: Dark mode implementation with class strategy
  
- url: https://vercel.com/docs/deployments/overview
  why: Deployment configuration and environment variables
  
- file: /home/phrogman/ai-directors/INITIAL.md
  why: Complete feature requirements, design examples, and anti-patterns
  
- url: https://unbounce.com/landing-page-articles/landing-page-best-practices/
  why: Conversion optimization patterns and CTA placement strategies
```

### Current Codebase tree
```bash
/home/phrogman/ai-directors/
├── CLAUDE.md
├── INITIAL.md
├── LICENSE
├── PLANNING.md
├── PRPs/
│   ├── EXAMPLE_multi_agent_prp.md
│   ├── ai-directors-academy-landing.md (this file)
│   └── templates/
│       └── prp_base.md
├── README.md
└── examples/
    └── .gitkeep
```

### Desired Codebase tree with files
```bash
/home/phrogman/ai-directors/
├── app/                              # Next.js 14 App Router
│   ├── layout.tsx                    # Root layout with dark theme and fonts
│   ├── page.tsx                      # Home page composition
│   ├── globals.css                   # Global styles, Tailwind directives
│   └── api/
│       └── subscribe/
│           └── route.ts              # Email subscription endpoint
├── components/
│   ├── sections/
│   │   ├── Hero.tsx                  # Hero with video background
│   │   ├── Features.tsx              # Three core offerings cards
│   │   ├── SocialProof.tsx           # Testimonials and metrics
│   │   └── CTASection.tsx            # Email capture section
│   ├── ui/
│   │   ├── GlowingButton.tsx         # Reusable glowing CTA button
│   │   ├── BlockyHeadline.tsx        # Hollywood-style typography
│   │   ├── FeatureCard.tsx           # Metallic border feature card
│   │   └── DarkSection.tsx           # Dark theme section wrapper
│   └── animations/
│       ├── ScrollReveal.tsx          # Scroll-triggered animations
│       └── FadeIn.tsx                # Basic fade animations
├── lib/
│   ├── constants.ts                  # Design tokens, breakpoints
│   └── utils.ts                      # Helper functions, cn()
├── public/
│   ├── images/
│   │   └── og-image.jpg              # Open Graph image 1200x630
│   ├── videos/
│   │   └── hero-bg.mp4               # Hero background video
│   └── grid.svg                      # Grid overlay pattern
├── .env.local                        # Local environment variables
├── .gitignore                        # Git ignore patterns
├── next.config.js                    # Next.js configuration
├── package.json                      # Dependencies and scripts
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── vercel.json                       # Vercel deployment config
```

### Known Gotchas & Library Quirks
```typescript
// CRITICAL: Framer Motion requires 'use client' directive
// Always add 'use client' at top of files using motion components

// CRITICAL: Gradient text needs Safari prefix
// Always use -webkit-background-clip for gradient text
// Example: className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"

// CRITICAL: Dark backgrounds need high contrast
// Minimum text-gray-100 for body text on pure black
// Never use text-gray-500 or darker on dark backgrounds

// CRITICAL: Large typography needs fluid scaling
// Use clamp() for responsive typography
// Example: fontSize: clamp(3rem, 10vw, 8rem)

// CRITICAL: Next.js Image requires dimensions
// Always provide width/height or use fill with relative parent

// CRITICAL: Vercel env vars
// Use NEXT_PUBLIC_ prefix for client-side variables
```

## Implementation Blueprint

### Data models and structure

Create TypeScript types for type safety:
```typescript
// lib/types.ts
export interface Feature {
  number: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface SubscribeFormData {
  email: string;
  source?: string;
}
```

### List of tasks to complete

```yaml
Task 1: Initialize Next.js 14 project with TypeScript and Tailwind
EXECUTE:
  - npx create-next-app@latest . --typescript --tailwind --app --no-src-dir
  - Select: Yes for ESLint, No for import alias
  - npm install framer-motion clsx tailwind-merge
  - npm install -D @types/node

Task 2: Configure Tailwind for dark mode and custom design system
MODIFY tailwind.config.ts:
  - Set darkMode: 'class'
  - Add custom colors for gradients
  - Add font families (Bebas Neue, Space Grotesk)
  - Configure animation keyframes

CREATE app/globals.css:
  - Add Tailwind directives
  - Define CSS custom properties for design tokens
  - Add base styles for dark theme

Task 3: Create utility functions and constants
CREATE lib/utils.ts:
  - cn() function for className merging
  - Add any helper functions

CREATE lib/constants.ts:
  - Define breakpoints, colors, animation durations
  - Feature data array
  - Testimonial data array

Task 4: Build base UI components
CREATE components/ui/DarkSection.tsx:
  - Dark background with gradient mesh
  - Grid overlay pattern
  - Proper z-index layering

CREATE components/ui/BlockyHeadline.tsx:
  - Large blocky typography with gradient
  - Responsive font sizing with clamp()
  - Uppercase tracking

CREATE components/ui/GlowingButton.tsx:
  - Gradient background with glow effect
  - Hover animations
  - Loading state support

CREATE components/ui/FeatureCard.tsx:
  - Metallic gradient border
  - Dark inner background
  - Number display with gradient

Task 5: Create animation wrapper components
CREATE components/animations/ScrollReveal.tsx:
  - 'use client' directive
  - Framer Motion whileInView
  - Stagger children support

CREATE components/animations/FadeIn.tsx:
  - Basic fade animation wrapper
  - Direction variants

Task 6: Implement Hero section
CREATE components/sections/Hero.tsx:
  - Full-screen height (100vh)
  - Video background with fallback image
  - BlockyHeadline component
  - Subtitle with value proposition
  - Primary CTA button
  - Scroll indicator animation

Task 7: Implement Features section
CREATE components/sections/Features.tsx:
  - Grid layout (1 col mobile, 3 cols desktop)
  - Map through features data
  - ScrollReveal animation on cards
  - Proper spacing and alignment

Task 8: Implement Social Proof section
CREATE components/sections/SocialProof.tsx:
  - Metrics display (students, videos created, etc)
  - Testimonial cards with gradient borders
  - Logo bar with partner brands
  - Trust badges/awards

Task 9: Implement CTA section
CREATE components/sections/CTASection.tsx:
  - Email capture form
  - API route integration
  - Success/error states
  - Glowing submit button
  - Privacy policy link

Task 10: Create API route for email subscription
CREATE app/api/subscribe/route.ts:
  - POST endpoint
  - Email validation
  - Integration with email service (placeholder)
  - Error handling
  - CORS headers

Task 11: Compose main page
MODIFY app/page.tsx:
  - Import all sections
  - Add metadata for SEO
  - Compose sections in order
  - Add JSON-LD structured data

Task 12: Configure root layout
MODIFY app/layout.tsx:
  - Import Google Fonts (or use next/font/local)
  - Set up dark theme class on html
  - Add metadata defaults
  - Viewport configuration

Task 13: Optimize performance
ADD next.config.js:
  - Image optimization config
  - Video file handling
  
ADD public assets:
  - Optimize hero video (< 5MB)
  - Create grid.svg pattern
  - Add OG image

Task 14: Set up deployment
CREATE vercel.json:
  - Environment variables config
  - Redirect rules if needed

ADD .env.local:
  - NEXT_PUBLIC_SITE_URL
  - Email service API keys

CONFIGURE Git:
  - Initialize repository
  - Add .gitignore
  - Initial commit
```

### Per task pseudocode

```typescript
// Task 4 - DarkSection.tsx pseudocode
'use client'
const DarkSection = ({ children, className }) => {
  // Merge classes with cn() utility
  // Layer 1: Base black background
  // Layer 2: Gradient overlay (purple/pink at 20% opacity)  
  // Layer 3: Grid SVG pattern at 10% opacity
  // Layer 4: Content with relative z-10
  return (
    <section className={cn("relative min-h-screen bg-black overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

// Task 6 - Hero.tsx pseudocode
'use client'
const Hero = () => {
  // Use next/video or video tag with autoplay muted loop
  // Overlay with gradient for text readability
  // BlockyHeadline with "AI DIRECTORS" and "ACADEMY"
  // Subtitle explaining value prop
  // GlowingButton with smooth scroll to CTA
  // Animate entrance with Framer Motion
  
  return (
    <DarkSection className="flex items-center justify-center">
      <video className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <BlockyHeadline />
        <p className="text-xl text-gray-300">Transform your creativity...</p>
        <GlowingButton>Start Your Journey</GlowingButton>
      </motion.div>
    </DarkSection>
  )
}

// Task 9 - Email form handling
const handleSubmit = async (e: FormEvent) => {
  // Prevent default
  // Validate email format
  // Set loading state
  // POST to /api/subscribe
  // Handle success: Show success message
  // Handle error: Show error message
  // Reset form on success
}
```

### Integration Points
```yaml
FONTS:
  - Import in: app/layout.tsx
  - Fonts needed: Bebas Neue, Space Grotesk, Inter
  - Use next/font for optimization
  
ENVIRONMENT:
  - File: .env.local
  - Variables:
    - NEXT_PUBLIC_SITE_URL=http://localhost:3000
    - EMAIL_API_KEY=your-key-here
  
SEO:
  - File: app/page.tsx
  - Add metadata object with:
    - title, description
    - OpenGraph tags
    - Twitter card
  - Add JSON-LD for educational organization
```

## Validation Loop

### Level 1: Syntax & Style
```bash
# Run these FIRST - fix any errors before proceeding
npm run build              # TypeScript compilation check
npm run lint              # ESLint checks

# Expected: No errors. If errors, READ the error and fix.
```

### Level 2: Component Testing
```bash
# Start development server
npm run dev

# Manual component testing checklist:
# - [ ] Hero video loads and plays
# - [ ] All text is readable on dark background
# - [ ] Gradient text visible in Chrome/Safari/Firefox
# - [ ] Buttons have hover states
# - [ ] Form submits successfully
# - [ ] Mobile responsive at 375px
# - [ ] Desktop layout at 1920px
```

### Level 3: Performance Testing
```bash
# Build for production
npm run build
npm start

# Run Lighthouse
# Open Chrome DevTools > Lighthouse > Generate report

# Expected scores:
# - Performance: > 90
# - Accessibility: > 90
# - Best Practices: > 90
# - SEO: 100

# Check Core Web Vitals:
# - FCP < 1.5s
# - LCP < 2.5s
# - CLS < 0.1
```

### Level 4: Cross-browser Testing
```bash
# Test in multiple browsers:
# - Chrome (latest)
# - Safari (check gradient text)
# - Firefox
# - Edge

# Mobile testing:
# - iPhone Safari
# - Android Chrome

# Check for:
# - [ ] Gradient text rendering
# - [ ] Video playback
# - [ ] Animation smoothness
# - [ ] Form functionality
```

## Final validation Checklist
- [ ] All TypeScript errors resolved: `npm run build`
- [ ] No ESLint errors: `npm run lint`
- [ ] Lighthouse scores meet targets
- [ ] Responsive design works 320px to 4K
- [ ] Animations run at 60fps
- [ ] Email form captures submissions
- [ ] Dark theme contrast passes WCAG AA
- [ ] All images optimized with next/image
- [ ] Deployment to Vercel successful

---

## Anti-Patterns to Avoid
- ❌ Don't use motion components without 'use client'
- ❌ Don't forget Safari prefix for gradient text
- ❌ Don't use low contrast text on dark backgrounds
- ❌ Don't animate properties other than transform/opacity
- ❌ Don't hardcode values that should be responsive
- ❌ Don't skip accessibility testing
- ❌ Don't use unoptimized images or videos
- ❌ Don't forget to test on real mobile devices

## Confidence Score: 9/10

The PRP provides comprehensive context including documentation links, code examples, implementation steps, and validation gates. The only point deducted is for potential edge cases in email service integration which may require additional context based on the specific service chosen.