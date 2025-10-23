# 📁 Project Structure Guide

Understanding your portfolio's file organization.

## 🌳 Directory Tree

```
portfolio-website/
│
├── 📂 app/                          # Next.js App Router
│   ├── layout.tsx                   # Root layout (theme, fonts, metadata)
│   ├── page.tsx                     # Home page (all sections)
│   └── globals.css                  # Global styles & Tailwind
│
├── 📂 components/                   # React Components
│   ├── Navigation.tsx               # Top navigation bar
│   ├── ThemeProvider.tsx            # Theme context wrapper
│   ├── ThemeToggle.tsx              # Dark/light mode button
│   │
│   └── 📂 sections/                 # Page Sections
│       ├── Hero.tsx                 # Landing section
│       ├── About.tsx                # About me section
│       ├── Projects.tsx             # Projects showcase
│       ├── Skills.tsx               # Skills & expertise
│       ├── Now.tsx                  # Current activities
│       ├── Contact.tsx              # Contact form
│       └── Footer.tsx               # Footer with links
│
├── 📂 public/                       # Static Assets
│   ├── robots.txt                   # SEO crawler instructions
│   ├── favicon.ico                  # (Add your favicon)
│   ├── cv.pdf                       # (Add your CV/resume)
│   └── 📂 projects/                 # (Add project images)
│
├── 📂 src/                          # Old HTML files (can be deleted)
│   └── ...                          # Legacy files - not used
│
├── 📄 package.json                  # Dependencies & scripts
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 tailwind.config.ts            # Tailwind CSS configuration
├── 📄 postcss.config.js             # PostCSS configuration
├── 📄 next.config.js                # Next.js configuration
├── 📄 .eslintrc.json                # ESLint configuration
├── 📄 .gitignore                    # Git ignore rules
├── 📄 .env.example                  # Environment variables template
│
└── 📚 Documentation/
    ├── README.md                    # Main documentation
    ├── QUICK_START.md               # Fast setup guide
    ├── INSTALLATION_GUIDE.md        # Node.js installation
    ├── SETUP.md                     # Detailed setup
    ├── CUSTOMIZATION_CHECKLIST.md   # Complete checklist
    ├── DESIGN_SYSTEM.md             # Design guidelines
    └── PROJECT_STRUCTURE.md         # This file
```

## 🎯 Key Files Explained

### Configuration Files

**`package.json`**
- Lists all dependencies (React, Next.js, etc.)
- Defines npm scripts (dev, build, start)
- Project metadata

**`tsconfig.json`**
- TypeScript compiler settings
- Path aliases (@/ for root imports)
- Type checking rules

**`tailwind.config.ts`**
- Custom colors (accent color)
- Custom animations
- Theme extensions
- Dark mode settings

**`next.config.js`**
- Next.js framework settings
- Image optimization
- Build configuration

### Application Files

**`app/layout.tsx`** ⭐ IMPORTANT
- Root component wrapping entire app
- Loads fonts (Inter, Space Grotesk)
- Sets up theme provider
- Defines SEO metadata
- **Edit this**: Update title, description, your name

**`app/page.tsx`**
- Main home page
- Imports and renders all sections
- Simple and clean - just composition

**`app/globals.css`**
- Tailwind CSS imports
- Custom utility classes (glass, glow-effect, text-gradient)
- Global styles
- Dark mode color definitions

### Component Files

**Navigation Components**

`components/Navigation.tsx`
- Sticky navigation bar
- Mobile hamburger menu
- Smooth scroll links
- Theme toggle integration

`components/ThemeToggle.tsx`
- Sun/moon icon button
- Switches between dark/light mode
- Smooth transitions

`components/ThemeProvider.tsx`
- Wraps app with theme context
- Manages theme state
- Persists theme preference

**Section Components**

`components/sections/Hero.tsx` ⭐ EDIT THIS
- First section visitors see
- Your name and tagline
- Animated background
- Social media links
- CTA buttons

`components/sections/About.tsx` ⭐ EDIT THIS
- Personal bio
- Profile photo placeholder
- Quick facts (location, experience)
- CV download button

`components/sections/Projects.tsx` ⭐ EDIT THIS
- Project cards grid
- Hover effects
- GitHub and live demo links
- Tech stack tags

`components/sections/Skills.tsx` ⭐ EDIT THIS
- Categorized skills
- Animated progress bars
- Icon for each category

`components/sections/Now.tsx` ⭐ EDIT THIS
- Current activities
- What you're learning
- Active projects
- Last updated date

`components/sections/Contact.tsx` ⭐ EDIT THIS
- Contact form
- Email and location
- Availability status
- Form validation

`components/sections/Footer.tsx` ⭐ EDIT THIS
- Quick links
- Social media icons
- Copyright notice
- Scroll to top button

## 📝 Files You MUST Edit

### Priority 1 (Essential)
1. `components/sections/Hero.tsx` - Your name, tagline
2. `components/sections/Contact.tsx` - Your email
3. `components/sections/Projects.tsx` - Your projects
4. `app/layout.tsx` - SEO metadata

### Priority 2 (Important)
5. `components/sections/About.tsx` - Your bio
6. `components/sections/Skills.tsx` - Your skills
7. `components/sections/Footer.tsx` - Social links
8. `components/Navigation.tsx` - Logo/name

### Priority 3 (Nice to Have)
9. `components/sections/Now.tsx` - Current activities
10. `tailwind.config.ts` - Accent color
11. `.env.local` - Environment variables

## 🗂️ Files You Can Ignore

- `node_modules/` - Auto-generated dependencies
- `.next/` - Build output (auto-generated)
- `package-lock.json` - Dependency lock file
- `.eslintrc.json` - Linting rules (works out of box)
- `postcss.config.js` - CSS processing (works out of box)

## 📂 Files You Should Add

### In `public/` folder:

**Images**
- `favicon.ico` - Browser tab icon (16x16 or 32x32 px)
- `your-photo.jpg` - Your profile photo
- `projects/project1.jpg` - Project screenshots
- `projects/project2.jpg` - More project images

**Documents**
- `cv.pdf` - Your resume/CV for download

**Optional**
- `og-image.jpg` - Social media preview image (1200x630 px)
- `apple-touch-icon.png` - iOS home screen icon
- `manifest.json` - PWA manifest

## 🔄 Data Flow

```
User visits site
    ↓
app/layout.tsx (loads fonts, theme, metadata)
    ↓
app/page.tsx (main page)
    ↓
components/Navigation.tsx (sticky nav)
    ↓
components/sections/Hero.tsx (first view)
    ↓
components/sections/About.tsx
    ↓
components/sections/Projects.tsx
    ↓
components/sections/Skills.tsx
    ↓
components/sections/Now.tsx
    ↓
components/sections/Contact.tsx
    ↓
components/sections/Footer.tsx
```

## 🎨 Styling Architecture

```
tailwind.config.ts
    ↓ (defines custom colors, animations)
app/globals.css
    ↓ (imports Tailwind, adds utilities)
Components
    ↓ (use Tailwind classes)
Browser
```

## 🚀 Build Process

```
Development:
npm run dev → Next.js dev server → Hot reload

Production:
npm run build → TypeScript compile → 
                Tailwind purge → 
                Next.js optimize → 
                Output to .next/

npm start → Serve optimized build
```

## 📦 Dependencies Overview

**Core Framework**
- `next` - React framework with SSR/SSG
- `react` - UI library
- `react-dom` - React DOM rendering

**Styling**
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

**Animations**
- `framer-motion` - Animation library

**UI Components**
- `lucide-react` - Icon library

**Theming**
- `next-themes` - Dark/light mode

**Development**
- `typescript` - Type safety
- `eslint` - Code linting
- `@types/*` - TypeScript definitions

## 🔍 Finding Things

**Need to change colors?**
→ `tailwind.config.ts`

**Need to change content?**
→ `components/sections/*.tsx`

**Need to change SEO?**
→ `app/layout.tsx`

**Need to add images?**
→ `public/` folder

**Need to change fonts?**
→ `app/layout.tsx`

**Need to add pages?**
→ Create in `app/` folder

## 🧹 Old Files (Can Delete)

The `src/` folder contains your old HTML/CSS/JS portfolio:
- `src/index.html` - Old HTML file
- `src/css/styles.css` - Old CSS file
- `src/js/main.js` - Old JavaScript file

**These are NOT used** by the new Next.js portfolio. You can:
- Keep them as backup
- Delete them to clean up
- Archive them in a separate folder

## 💡 Pro Tips

1. **Use VS Code**: Install extensions for better DX
   - ESLint
   - Tailwind CSS IntelliSense
   - TypeScript and JavaScript Language Features

2. **Hot Reload**: Save files and see changes instantly in browser

3. **Component Organization**: Each section is self-contained

4. **Type Safety**: TypeScript catches errors before runtime

5. **Git Ignore**: `.gitignore` already configured properly

---

**Ready to customize?** Start with `components/sections/Hero.tsx`! 🎨
