# Installation Guide for Windows

## Prerequisites

Your portfolio requires **Node.js** to run. Follow these steps to get everything set up.

## Step 1: Install Node.js

### Option A: Using Official Installer (Recommended)

1. **Download Node.js**:
   - Go to [https://nodejs.org/](https://nodejs.org/)
   - Download the **LTS (Long Term Support)** version for Windows
   - Current recommended version: **18.x or 20.x**

2. **Run the Installer**:
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - Accept the license agreement
   - Keep the default installation path
   - **Important**: Make sure "Add to PATH" is checked
   - Click "Install"

3. **Verify Installation**:
   - Open a **new** PowerShell or Command Prompt window
   - Run these commands:
   ```bash
   node --version
   # Should show: v18.x.x or v20.x.x
   
   npm --version
   # Should show: 9.x.x or 10.x.x
   ```

### Option B: Using Winget (Windows Package Manager)

If you have Windows 10/11 with winget:

```bash
winget install OpenJS.NodeJS.LTS
```

### Option C: Using Chocolatey

If you have Chocolatey installed:

```bash
choco install nodejs-lts
```

## Step 2: Install Portfolio Dependencies

Once Node.js is installed:

1. **Open PowerShell or Command Prompt**

2. **Navigate to the project folder**:
   ```bash
   cd C:\Users\user\Desktop\Portfolio\portfolio-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install:
   - Next.js 14
   - React 18
   - TypeScript
   - Tailwind CSS
   - Framer Motion
   - Lucide React
   - next-themes
   - And all other required packages

   **Note**: This may take 2-5 minutes depending on your internet speed.

## Step 3: Run the Development Server

After installation completes:

```bash
npm run dev
```

You should see output like:

```
▲ Next.js 14.0.4
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

## Step 4: View Your Portfolio

1. Open your web browser
2. Go to: **http://localhost:3000**
3. You should see your portfolio website!

## Troubleshooting

### "npm is not recognized"

**Solution**: Node.js is not in your PATH
- Close and reopen your terminal/PowerShell
- If still not working, restart your computer
- Verify Node.js installation path is in System Environment Variables

### Port 3000 is already in use

**Solution**: Use a different port
```bash
npm run dev -- -p 3001
```

### Installation fails with permission errors

**Solution**: Run PowerShell as Administrator
- Right-click PowerShell
- Select "Run as Administrator"
- Navigate to project folder
- Run `npm install` again

### "Cannot find module" errors

**Solution**: Clear cache and reinstall
```bash
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Slow installation

**Solution**: This is normal for first-time install
- The project has many dependencies
- Subsequent installs will be faster
- Consider using `npm ci` for faster installs after first time

## Next Steps

Once your development server is running:

1. **Customize Your Content**:
   - See `SETUP.md` for detailed customization guide
   - See `CUSTOMIZATION_CHECKLIST.md` for a complete checklist

2. **Update Personal Information**:
   - Edit files in `components/sections/`
   - Replace placeholder text with your information
   - Add your projects, skills, and contact details

3. **Test Everything**:
   - Test on different browsers
   - Test dark/light mode toggle
   - Test all navigation links
   - Test contact form

4. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

5. **Deploy**:
   - Push to GitHub
   - Deploy to Vercel (free)
   - See `README.md` for deployment instructions

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Install a new package
npm install package-name

# Update all packages
npm update
```

## System Requirements

**Minimum**:
- Windows 10 or later
- 4GB RAM
- 500MB free disk space
- Internet connection (for initial install)

**Recommended**:
- Windows 11
- 8GB+ RAM
- Modern browser (Chrome, Firefox, Edge)
- Fast internet connection

## Additional Resources

- **Node.js Documentation**: https://nodejs.org/docs
- **Next.js Documentation**: https://nextjs.org/docs
- **npm Documentation**: https://docs.npmjs.com/
- **Troubleshooting Guide**: https://nextjs.org/docs/messages

## Getting Help

If you encounter issues:

1. Check the error message carefully
2. Search for the error on Google or Stack Overflow
3. Check Next.js GitHub issues
4. Ensure all dependencies are installed correctly
5. Try deleting `node_modules` and reinstalling

---

**Ready to start?** Install Node.js, then run `npm install` and `npm run dev`! 🚀
