# Quick Setup Guide

## 🚀 Getting Started

Follow these steps to get your portfolio website up and running:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- next-themes

### 2. Run Development Server

```bash
npm run dev
```

Your site will be available at [http://localhost:3000](http://localhost:3000)

### 3. Customize Your Content

#### Update Personal Information

**Hero Section** (`components/sections/Hero.tsx`):
- Line 42: Change "Your Name" to your actual name
- Line 49: Update your tagline
- Line 57: Update your personal statement
- Lines 69-91: Update social media links

**About Section** (`components/sections/About.tsx`):
- Lines 61-68: Update your bio text
- Lines 73-96: Update location, experience, and education
- Line 101: Add link to your CV/resume

**Projects Section** (`components/sections/Projects.tsx`):
- Lines 8-61: Replace with your actual projects
- Update title, description, tags, GitHub links, and live demo links

**Skills Section** (`components/sections/Skills.tsx`):
- Lines 8-58: Update with your actual skills and proficiency levels

**Now Section** (`components/sections/Now.tsx`):
- Lines 8-31: Update with your current activities

**Contact Section** (`components/sections/Contact.tsx`):
- Line 95: Update your email
- Line 107: Update your location

**Footer** (`components/sections/Footer.tsx`):
- Lines 6-11: Update social media links
- Line 28: Update your name/brand

**Navigation** (`components/Navigation.tsx`):
- Line 25: Update logo/name

**Metadata** (`app/layout.tsx`):
- Lines 17-23: Update SEO metadata

### 4. Customize Theme

**Change Accent Color** (`tailwind.config.ts`):

```typescript
accent: {
  DEFAULT: '#06b6d4', // Cyan (current)
  // Try: '#f59e0b' for amber, '#8b5cf6' for violet
  light: '#22d3ee',
  dark: '#0891b2',
},
```

**Change Fonts** (`app/layout.tsx`):

```typescript
import { YourHeadingFont, YourBodyFont } from 'next/font/google'
```

### 5. Add Your Photo

Replace the emoji placeholder in `components/sections/About.tsx` (line 50) with:

```tsx
<img 
  src="/your-photo.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-xl"
/>
```

Place your photo in the `public` folder.

### 6. Add Project Images

For each project in `components/sections/Projects.tsx`, replace the emoji with:

```tsx
<img 
  src="/projects/project-name.jpg" 
  alt="Project Name"
  className="w-full h-full object-cover"
/>
```

### 7. Build for Production

```bash
npm run build
npm start
```

### 8. Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

## 📝 Customization Tips

### Adding New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Add a navigation link in `components/Navigation.tsx`

### Changing Colors Throughout

All color classes use Tailwind. Common patterns:
- `text-accent` - Accent color text
- `bg-accent` - Accent color background
- `hover:text-accent` - Accent color on hover
- `glass` - Glassmorphism effect
- `glow-effect` - Glow shadow effect

### Animation Customization

Framer Motion animations are in each section component. Adjust:
- `initial` - Starting state
- `animate` - End state
- `transition` - Animation timing
- `whileHover` - Hover effects
- `whileTap` - Click effects

## 🐛 Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
- Check all imports are correct
- Ensure all personal info placeholders are updated
- Run `npm run lint` to check for issues

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 🎨 Design Inspiration

Your portfolio uses:
- **Glassmorphism**: Frosted glass effect on cards
- **Gradient Accents**: Smooth color transitions
- **Micro-interactions**: Subtle hover and scroll animations
- **Dark Mode First**: Optimized for dark theme with light mode option
- **Minimalism**: Clean, focused design with ample whitespace

Enjoy building your portfolio! 🚀
