# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Fast Track

### 1. Install Node.js
Download from: **https://nodejs.org/** (LTS version)

### 2. Install Dependencies
```bash
cd C:\Users\user\Desktop\Portfolio\portfolio-website
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open Browser
Go to: **http://localhost:3000**

---

## 📝 First Customizations

### Update Your Name
**File**: `components/sections/Hero.tsx`
- **Line 42**: Change "Your Name"

### Update Your Email
**File**: `components/sections/Contact.tsx`
- **Line 95**: Change email address

### Update Social Links
**File**: `components/sections/Hero.tsx`
- **Lines 69-91**: Update GitHub, LinkedIn, Email URLs

### Add Your Projects
**File**: `components/sections/Projects.tsx`
- **Lines 8-61**: Replace with your actual projects

---

## 🎨 Quick Customizations

### Change Accent Color
**File**: `tailwind.config.ts`
```typescript
accent: {
  DEFAULT: '#06b6d4', // Change this!
}
```

**Popular Options**:
- Cyan: `#06b6d4` (current)
- Amber: `#f59e0b`
- Violet: `#8b5cf6`
- Emerald: `#10b981`
- Rose: `#f43f5e`

### Change Fonts
**File**: `app/layout.tsx`
```typescript
import { YourFont } from 'next/font/google'
```

Browse fonts: **https://fonts.google.com/**

---

## 🛠️ Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for errors
npm run lint
```

---

## 📁 Key Files to Edit

| File | What to Change |
|------|----------------|
| `components/sections/Hero.tsx` | Name, tagline, social links |
| `components/sections/About.tsx` | Bio, photo, location, CV |
| `components/sections/Projects.tsx` | Your projects |
| `components/sections/Skills.tsx` | Your skills |
| `components/sections/Contact.tsx` | Contact info |
| `app/layout.tsx` | SEO metadata |
| `tailwind.config.ts` | Colors, theme |

---

## 🚨 Troubleshooting

### npm not found?
→ Install Node.js from nodejs.org

### Port 3000 in use?
→ Run: `npm run dev -- -p 3001`

### Changes not showing?
→ Save file and refresh browser (Ctrl+R)

### Build errors?
→ Run: `npm run lint` to check for issues

---

## 📚 Full Documentation

- **Installation**: See `INSTALLATION_GUIDE.md`
- **Customization**: See `SETUP.md`
- **Checklist**: See `CUSTOMIZATION_CHECKLIST.md`
- **Design**: See `DESIGN_SYSTEM.md`

---

## 🎯 Deployment Checklist

- [ ] Install Node.js
- [ ] Run `npm install`
- [ ] Update your name
- [ ] Update your email
- [ ] Update social links
- [ ] Add your projects
- [ ] Add your skills
- [ ] Test in browser
- [ ] Build: `npm run build`
- [ ] Deploy to Vercel

---

**Need help?** Check `INSTALLATION_GUIDE.md` for detailed instructions!
