AI Directors Academy - Initial Development Guide

Please reference: /home/phrogman/ai-directors/PLANNING.md for project planning details.

FEATURE:
AI Directors Academy Landing Page - A cinematic, high-conversion landing page that merges old Hollywood grandeur with futuristic AI aesthetics. The page showcases three core offerings for aspiring AI content creators: viral video creation, AI model building, and becoming an AI director. Built with Next.js 14, TypeScript, and Tailwind CSS, deployed on Vercel.

**Design Philosophy:**
- **Old Hollywood Meets AI**: Combining the monumental feel of classic cinema with sleek, futuristic AI elements
- **Visual Language**: Large, blocky typography reminiscent of vintage movie posters paired with metallic textures, dynamic gradients, and subtle glowing accents
- **Color Scheme**: Dark, sophisticated palette with strategic highlights to create depth and visual interest

Key Components:

Hero Section: Full-screen cinematic opener with blocky Hollywood typography and AI-inspired effects
Features Section: Three value propositions displayed as cinema-style cards with metallic borders
Social Proof: Testimonials and success metrics from AI creators
CTA Section: Email capture with glowing accent effects

EXAMPLES:
/examples/hero-animations/
tsx// GlowingCTA.tsx - Button with AI-inspired glow effect
const GlowingCTA = () => (
  <button className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
    rounded-lg font-bold text-white overflow-hidden group">
    <span className="relative z-10">Start Your Journey</span>
    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 
      blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
  </button>
)
/examples/typography/
tsx// BlockyHeadline.tsx - Hollywood-inspired typography
const BlockyHeadline = () => (
  <h1 className="text-8xl md:text-9xl font-black uppercase tracking-tighter
    bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
    AI Directors
    <span className="block text-6xl md:text-7xl">Academy</span>
  </h1>
)
/examples/layouts/
tsx// DarkSection.tsx - Base dark theme section with gradient mesh
const DarkSection = ({ children }) => (
  <section className="relative min-h-screen bg-black overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 
      via-black to-pink-900/20" />
    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
    <div className="relative z-10">{children}</div>
  </section>
)
/examples/cards/
tsx// FeatureCard.tsx - Metallic border cinema-style card
const FeatureCard = ({ number, title, description }) => (
  <div className="relative p-[2px] bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl">
    <div className="bg-gray-950 p-8 rounded-xl h-full">
      <span className="text-7xl font-black bg-gradient-to-r from-purple-400 
        to-pink-400 bg-clip-text text-transparent">{number}</span>
      <h3 className="text-2xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
)

DOCUMENTATION:
Reference Sites

Hero Section Inspiration: https://apexfilms.framer.website/

Study: Full-screen video backgrounds, typography scale, scroll animations
Key elements: Immersive opening, cinematic transitions, bold CTAs


Body Structure Reference: https://inno.framer.website

Study: Section layouts, content hierarchy, spacing systems
Key elements: Card designs, feature presentations, visual flow



Technical Documentation

Next.js 14 App Router: https://nextjs.org/docs/app

Server components, streaming, metadata API
Image optimization with next/image


Framer Motion: https://www.framer.com/motion/

Scroll-triggered animations, gesture controls
Performance-optimized transforms


Tailwind CSS: https://tailwindcss.com/docs

Dark mode implementation, gradient utilities
Custom animation keyframes



Design Resources

Hollywood Typography:

Bebas Neue, Oswald, Anton for headlines
Space Grotesk, Inter for body text


AI Visual Language:

Metallic gradients: from-gray-600 via-gray-500 to-gray-700
Glow effects: Multiple box-shadows with opacity
Grid patterns: SVG overlays at 10-20% opacity



Deployment Documentation

Vercel: https://vercel.com/docs

Environment variables, custom domains
Performance analytics, Web Vitals


GitHub CLI: https://cli.github.com/manual/

Repository creation, authentication
Automated workflows



OTHER CONSIDERATIONS:
Common AI Assistant Pitfalls

Dark Theme Contrast Issues

Always test text readability on pure black backgrounds
Use text-gray-100 minimum for body text, never text-gray-500 or darker
Gradient text needs fallback colors for accessibility


Performance with Animations

Framer Motion animations should use transform and opacity only
Avoid animating width, height, or position properties
Use will-change sparingly and remove after animation


Mobile-First Responsive Design
css/* Start mobile, enhance for desktop */
/* BAD: desktop-first */
.hero { font-size: 120px; }
@media (max-width: 768px) { .hero { font-size: 48px; } }

/* GOOD: mobile-first */
.hero { font-size: 48px; }
@media (min-width: 768px) { .hero { font-size: 120px; } }

Git Configuration Scope

Use --local flag for repository-specific Git config
Don't accidentally set global user config

bash# Correct for this project only
git config --local user.email "support@barkerpublishers.com"

Vercel Environment Variables

Create .env.local for local development
Never commit .env files
Use Vercel dashboard for production secrets


Image Optimization

Use Next.js Image component for all images
Provide blur placeholders for hero images
WebP format with PNG fallback


SEO Considerations

Implement proper meta tags using Next.js Metadata API
Include Open Graph images (1200x630px)
Structured data for course/educational content


Accessibility Requirements

Minimum WCAG AA compliance
Focus visible states for all interactive elements
Proper heading hierarchy (h1 → h2 → h3)
Alt text for all images


Browser Testing

Gradient rendering varies between browsers
Test blur effects on Safari (performance issues)
Check metallic effects on low-end devices


Development Workflow

Always create feature branches, never commit directly to main
Run npm run build before committing to catch TypeScript errors
Use conventional commits for better changelog generation



Project-Specific Gotchas

Large Typography on Mobile: Headlines need careful scaling - use clamp() for fluid typography
Dark Backgrounds: Require higher contrast ratios - test with Chrome DevTools contrast checker
Gradient Text: Needs -webkit-background-clip prefix for Safari
Metallic Effects: Use CSS custom properties for consistent color values across components
Video Backgrounds: Implement with loading="lazy" and provide static image fallback

Performance Budget

First Contentful Paint: < 1.5s
Total Blocking Time: < 300ms
Cumulative Layout Shift: < 0.1
Bundle size: < 150KB (JS) after gzip