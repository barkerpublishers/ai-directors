# AI Directors Academy - Project Planning

## Phase 1: Project Setup & Foundation

### Project Description

**AI Directors Academy** is a premium landing page designed to attract aspiring AI content creators. The design merges classic Hollywood grandeur with futuristic AI aesthetics, creating a cinematic experience that positions visitors at the intersection of traditional filmmaking and cutting-edge technology.

**Design Philosophy:**
- **Old Hollywood Meets AI**: Combining the monumental feel of classic cinema with sleek, futuristic AI elements
- **Visual Language**: Large, blocky typography reminiscent of vintage movie posters paired with metallic textures, dynamic gradients, and subtle glowing accents
- **Color Scheme**: Dark, sophisticated palette with strategic highlights to create depth and visual interest
- **Reference Sites**:
  - Hero Section: https://apexfilms.framer.website/
  - Body Structure: https://inno.framer.website

**Core Value Propositions:**
1. Learn how to create your first viral AI video
2. Create your first AI model
3. Become an AI director

### Git Repository Setup

#### 1. Initialize Local Repository
```bash
# Create project directory
mkdir ai-directors
cd ai-directors

# Initialize git repository
git init

# Configure git user for this repository
git config user.email "support@barkerpublishers.com"
git config user.name "barkerpublishers"
```

#### 2. Create Private GitHub Repository
```bash
# Using GitHub CLI to create private repository
gh repo create ai-directors --private --description "AI Directors Academy Landing Page"

# Add remote origin
git remote add origin git@github.com:barkerpublishers/ai-directors.git
```

#### 3. Initial Commit & Push
```bash
# Create README
echo "# AI Directors Academy" > README.md

# Stage and commit
git add README.md
git commit -m "Initial commit: AI Directors Academy project"

# Push to GitHub
git push -u origin main
```

### Next.js Project Setup

#### 1. Create Next.js Application
```bash
# Create Next.js app with TypeScript and Tailwind CSS
npx create-next-app@latest ai-directors --typescript --tailwind --app --src-dir --import-alias "@/*"

# Navigate to project
cd ai-directors
```

#### 2. Project Structure
```
ai-directors/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── assets/
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

#### 3. Essential Dependencies
```bash
# Install additional dependencies
npm install framer-motion
npm install @radix-ui/react-icons
npm install clsx
npm install tailwind-merge
```

### Vercel Deployment Setup

#### 1. Connect to Vercel
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Login to Vercel
vercel login

# Link project to Vercel account
vercel link
```

#### 2. Configure Vercel Project
- **Account**: barker-publishing-network
- **Project Name**: ai-directors-academy
- **Framework**: Next.js
- **Build Settings**: Auto-detected
- **Environment Variables**: None required for Phase 1

#### 3. Deploy to Vercel
```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Landing Page Components

#### Core Sections
1. **Hero Section**
   - Cinematic full-screen opener
   - Large, blocky headline: "AI DIRECTORS ACADEMY"
   - Subheadline with value proposition
   - Primary CTA button with glow effect

2. **Features Section**
   - Three core offerings displayed as cinema-style cards
   - Metallic borders with gradient overlays
   - Hover animations with AI-inspired effects

3. **Social Proof Section**
   - Testimonials from AI creators
   - Success metrics and achievements
   - Video thumbnails of viral AI content

4. **Call-to-Action Section**
   - Final conversion push
   - Email capture form
   - Launch date or early access messaging

### Technical Specifications

#### Performance Goals
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

#### Browser Support
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

#### Responsive Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+
- Wide: 1440px+

### Development Workflow

#### Branch Strategy
- `main`: Production-ready code
- `develop`: Integration branch
- Feature branches: `feature/component-name`

#### Commit Convention
```
type(scope): description

Types: feat, fix, docs, style, refactor, test, chore
Example: feat(hero): add gradient animation to CTA button
```

#### Code Quality
- ESLint configuration for Next.js
- Prettier for code formatting
- Husky for pre-commit hooks
- TypeScript strict mode enabled

### Phase 1 Deliverables

- [ ] Git repository initialized and pushed to GitHub
- [ ] Next.js project scaffolded with TypeScript
- [ ] Vercel deployment pipeline configured
- [ ] Basic landing page structure implemented
- [ ] Dark theme with Hollywood/AI aesthetic applied
- [ ] Hero section with reference site inspiration
- [ ] Three core value propositions displayed
- [ ] Responsive design for all breakpoints
- [ ] Performance optimization completed
- [ ] Initial deployment to Vercel

### Success Metrics

- Clean, professional repository structure
- Successful Vercel deployment
- Landing page loads under 3 seconds
- Mobile-responsive design
- Visual design matches Hollywood + AI aesthetic
- Clear presentation of three core offerings
