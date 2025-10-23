# Design System Documentation

This document outlines the design principles, components, and styling used in your portfolio.

## 🎨 Color Palette

### Primary Colors

**Accent Color (Cyan)**
- Default: `#06b6d4` - Main accent color
- Light: `#22d3ee` - Lighter variant
- Dark: `#0891b2` - Darker variant

**Neutral Colors**
- White: `#ffffff` - Light mode background
- Gray 50: `#f9fafb` - Light mode secondary background
- Gray 100-900: Various shades for text and borders
- Gray 950: `#030712` - Dark mode background

### Usage

```tsx
// Text
className="text-accent"           // Accent color text
className="text-gradient"         // Gradient text effect

// Backgrounds
className="bg-accent"             // Accent background
className="bg-gray-50 dark:bg-gray-900/50"  // Adaptive background

// Borders
className="border-accent"         // Accent border
className="border-gray-200 dark:border-gray-800"  // Adaptive border
```

## 🔤 Typography

### Font Families

**Headings**: Space Grotesk
- Bold, modern sans-serif
- Used for: h1, h2, h3, section titles
- Class: `font-heading`

**Body**: Inter
- Clean, readable sans-serif
- Used for: paragraphs, UI text
- Class: `font-sans` (default)

### Font Sizes

```tsx
// Headings
text-5xl sm:text-7xl lg:text-8xl  // Hero title (48-96px)
text-4xl sm:text-5xl              // Section titles (36-48px)
text-2xl                          // Subsection titles (24px)
text-xl                           // Card titles (20px)

// Body
text-lg                           // Large body text (18px)
text-base                         // Default body text (16px)
text-sm                           // Small text (14px)
text-xs                           // Extra small text (12px)
```

### Font Weights

```tsx
font-bold      // 700 - Headings, emphasis
font-medium    // 500 - Subheadings, labels
font-normal    // 400 - Body text (default)
```

## 🎭 Effects & Utilities

### Glassmorphism

```tsx
className="glass"
// Translates to:
// - Semi-transparent background
// - Backdrop blur
// - Subtle border
```

**Usage**: Cards, navigation, modals

### Glow Effect

```tsx
className="glow-effect"
// Translates to:
// - Accent-colored shadow
// - Soft, diffused glow
```

**Usage**: Hover states, active elements, CTAs

### Text Gradient

```tsx
className="text-gradient"
// Translates to:
// - Gradient from accent-light to accent-dark
// - Clipped to text
```

**Usage**: Highlighted text, section titles

## 📦 Components

### Buttons

**Primary Button**
```tsx
<button className="px-8 py-3 bg-accent text-white rounded-lg font-medium 
                   hover:bg-accent-dark transition-colors shadow-lg 
                   hover:shadow-accent/50">
  Button Text
</button>
```

**Secondary Button**
```tsx
<button className="px-8 py-3 glass rounded-lg font-medium 
                   hover:glow-effect transition-all">
  Button Text
</button>
```

**Icon Button**
```tsx
<button className="p-3 glass rounded-lg hover:glow-effect transition-all">
  <Icon className="w-5 h-5" />
</button>
```

### Cards

**Glass Card**
```tsx
<div className="glass rounded-xl p-6 hover:glow-effect transition-all">
  {/* Content */}
</div>
```

**Project Card**
```tsx
<div className="glass rounded-xl overflow-hidden hover:glow-effect 
                transition-all duration-300">
  <div className="h-48 bg-gradient-to-br from-accent/20 to-purple-500/20">
    {/* Image/Icon */}
  </div>
  <div className="p-6">
    {/* Content */}
  </div>
</div>
```

### Form Elements

**Input Field**
```tsx
<input className="w-full px-4 py-3 bg-white/5 border border-gray-300 
                  dark:border-gray-700 rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-accent transition-all" />
```

**Textarea**
```tsx
<textarea className="w-full px-4 py-3 bg-white/5 border border-gray-300 
                     dark:border-gray-700 rounded-lg focus:outline-none 
                     focus:ring-2 focus:ring-accent transition-all 
                     resize-none" />
```

## 🎬 Animations

### Framer Motion Variants

**Container (Stagger Children)**
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

**Item (Fade & Slide Up)**
```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

### Hover Effects

**Scale Up**
```tsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

**Lift Up**
```tsx
whileHover={{ y: -8 }}
```

**Slide Right**
```tsx
whileHover={{ x: 5 }}
```

### Scroll Animations

```tsx
const ref = useRef(null)
const isInView = useInView(ref, { once: true, margin: '-100px' })

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? 'visible' : 'hidden'}
  variants={containerVariants}
>
```

## 📐 Layout & Spacing

### Container

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

**Max Width**: 1280px (7xl)
**Padding**: Responsive (16px → 24px → 32px)

### Section Spacing

```tsx
<section className="py-24">
  {/* Vertical padding: 96px */}
</section>
```

### Grid Layouts

**2 Columns (MD+)**
```tsx
<div className="grid md:grid-cols-2 gap-6">
```

**3 Columns (LG+)**
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Spacing Scale

```tsx
space-y-4   // 16px vertical spacing
space-y-6   // 24px vertical spacing
space-y-8   // 32px vertical spacing
space-y-12  // 48px vertical spacing

gap-4       // 16px grid gap
gap-6       // 24px grid gap
gap-8       // 32px grid gap
```

## 🌓 Dark Mode

### Implementation

Uses `next-themes` with class-based dark mode:

```tsx
// Light mode
className="bg-white text-gray-900"

// Dark mode
className="dark:bg-gray-950 dark:text-gray-100"

// Adaptive
className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
```

### Best Practices

1. Always provide both light and dark variants
2. Test contrast ratios in both modes
3. Use semi-transparent backgrounds for depth
4. Adjust shadow opacity for dark mode

## 📱 Responsive Design

### Breakpoints

```tsx
sm:   640px   // Small tablets
md:   768px   // Tablets
lg:   1024px  // Laptops
xl:   1280px  // Desktops
2xl:  1536px  // Large desktops
```

### Mobile-First Approach

```tsx
// Mobile (default)
className="text-4xl"

// Tablet and up
className="text-4xl sm:text-5xl"

// Desktop and up
className="text-4xl sm:text-5xl lg:text-6xl"
```

### Common Patterns

**Hide on Mobile**
```tsx
className="hidden md:block"
```

**Show on Mobile Only**
```tsx
className="md:hidden"
```

**Responsive Flex Direction**
```tsx
className="flex flex-col md:flex-row"
```

## 🎯 Accessibility

### Focus States

```tsx
className="focus:outline-none focus:ring-2 focus:ring-accent"
```

### ARIA Labels

```tsx
<button aria-label="Toggle theme">
  <Icon />
</button>
```

### Semantic HTML

- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<section>` for major sections
- Use `<nav>` for navigation
- Use `<footer>` for footer

### Color Contrast

- Minimum ratio: 4.5:1 for normal text
- Minimum ratio: 3:1 for large text
- Test with tools like WebAIM Contrast Checker

## 🚀 Performance

### Optimization Tips

1. **Images**: Use WebP format, optimize size
2. **Fonts**: Use `display: swap` for font loading
3. **Animations**: Use `transform` and `opacity` for GPU acceleration
4. **Code Splitting**: Components are automatically split by Next.js
5. **Lazy Loading**: Use `loading="lazy"` for images

### Animation Performance

```tsx
// Good (GPU accelerated)
transform: translateY(20px)
opacity: 0

// Avoid (causes reflow)
margin-top: 20px
height: auto
```

## 📝 Naming Conventions

### Components

- PascalCase: `Hero`, `Navigation`, `ThemeToggle`
- Descriptive: `ProjectCard`, `SkillBar`, `ContactForm`

### Files

- Component files: `ComponentName.tsx`
- Section files: `SectionName.tsx`
- Utility files: `utilityName.ts`

### CSS Classes

- Use Tailwind utility classes
- Custom utilities in `globals.css`
- Semantic naming: `glass`, `glow-effect`, `text-gradient`

## 🎨 Customization Guide

### Changing Accent Color

1. Update `tailwind.config.ts`:
```typescript
accent: {
  DEFAULT: '#your-color',
  light: '#lighter-variant',
  dark: '#darker-variant',
}
```

2. Test in both light and dark modes
3. Verify accessibility (contrast ratios)

### Adding New Sections

1. Create component in `components/sections/`
2. Follow existing pattern (ref, isInView, variants)
3. Add to `app/page.tsx`
4. Add navigation link

### Custom Animations

```tsx
const customVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -10 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}
```

---

This design system ensures consistency, accessibility, and maintainability throughout your portfolio. Refer to it when adding new features or customizing existing ones.
