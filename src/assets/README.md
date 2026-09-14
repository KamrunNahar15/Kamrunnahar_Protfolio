# Assets Folder

This folder contains static assets that are bundled by Vite.

## Resume PDF

**To add your resume:**

1. **Copy your resume PDF file** (`Kamrun_Nahar_Resume.pdf`) to this folder (`src/assets/`)
2. **Filename must be exactly:** `Kamrun_Nahar_Resume.pdf` (case-sensitive)
3. **Restart the dev server** after adding the file: `npm run dev`

### Why this approach?

- ✅ Vite bundles the PDF properly
- ✅ No 404 errors
- ✅ File is included in production builds
- ✅ Automatic path resolution at build time
- ✅ Works with `npm run build` for deployment

### File Structure

```
src/
├── assets/
│   ├── README.md (this file)
│   ├── resume.js (module that loads the PDF)
│   └── Kamrun_Nahar_Resume.pdf ← Place your PDF here
```

## Usage

The resume is automatically imported in `src/data/portfolioData.js` and used by all Resume buttons throughout the portfolio.

No additional configuration needed - just add the PDF file and you're done!
