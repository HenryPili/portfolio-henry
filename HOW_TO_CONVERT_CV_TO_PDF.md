# How to Convert Your Professional CV to PDF

Your professional CV has been created as an HTML file (`Henry_Pili_CV.html`). Here are the easiest ways to convert it to PDF:

## Method 1: Using Your Browser (Easiest)

1. **Open the CV in your browser:**
   - Navigate to: `http://localhost:3000/Henry_Pili_CV.html`
   - Or double-click the file: `public/Henry_Pili_CV.html`

2. **Print to PDF:**
   - Press `Ctrl + P` (Windows) or `Cmd + P` (Mac)
   - In the print dialog, select **"Save as PDF"** or **"Microsoft Print to PDF"**
   - Click **Save**
   - Name it: `Henry_Pili_CV.pdf`
   - Save it in the `public` folder

3. **Done!** Your professional PDF CV is ready.

## Method 2: Online Converter (Alternative)

1. Go to: https://www.html2pdf.com/ or https://pdfcrowd.com/
2. Upload `Henry_Pili_CV.html`
3. Download the PDF
4. Save it as `Henry_Pili_CV.pdf` in the `public` folder

## Method 3: Update the Download Link

After creating the PDF, update the About section to link to the PDF instead of HTML:

**File:** `components/sections/About.tsx`
**Line:** 166

Change:
```tsx
href="/Henry_Pili_CV.html"
```

To:
```tsx
href="/Henry_Pili_CV.pdf"
download
```

## What's Included in Your Professional CV

✅ Professional header with contact information
✅ Professional summary highlighting your skills
✅ Detailed work experience with bullet points
✅ Education section
✅ Technical skills (Web Development & Design)
✅ Core competencies
✅ Modern, clean design with accent colors
✅ Print-optimized layout
✅ Professional typography

## Tips for Best Results

- Use **Chrome** or **Edge** for best PDF conversion quality
- Make sure to select **"Background graphics"** in print settings
- Set margins to **"Default"** or **"Minimal"**
- Choose **"Portrait"** orientation
- Paper size: **"Letter"** or **"A4"**

---

**Note:** The CV is already styled professionally and will look great when converted to PDF!
