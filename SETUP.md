# Portfolio Setup & Customization Guide

This guide will help you customize the portfolio with your information and deploy it.

## 🚀 Quick Start

### 1. Installation

```bash
# Navigate to project directory
cd kamrun-nahar-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your portfolio live.

## 📝 Customization

### Step 1: Update Personal Information

Edit `src/data/portfolioData.js` and update the following sections:

#### Personal Details
```javascript
personal: {
  name: 'Your Name',
  email: 'your.email@example.com',
  github: 'your-github-username',
  linkedin: 'your-linkedin-profile',
  codeforces: 'your-codeforces-username',
  resumePath: '/resume/Your_Resume.pdf',
}
```

#### Education
Fill in your school/college information:
```javascript
education: [
  {
    level: 'University',
    institution: 'Your University Name',
    degree: 'B.Sc. in Computer Science & Engineering',
    year: '2024 - Present',
    status: '2nd Year / 3rd Semester',
  },
  // ... HSC and SSC
]
```

#### Skills
Update with your actual skills:
```javascript
skills: {
  programming: ['C', 'C++', 'JavaScript', 'Python'],
  webDevelopment: ['HTML', 'CSS', 'JavaScript', 'React'],
  computerScience: ['Data Structures', 'Algorithms', 'OOP'],
  tools: ['Git', 'GitHub', 'VS Code'],
  exploring: ['Cybersecurity', 'Machine Learning'],
}
```

#### Projects
Update your featured projects:
```javascript
projects: [
  {
    id: 1,
    name: 'Your Project Name',
    tagline: 'Brief description',
    description: 'Longer description...',
    problem: 'What problem does it solve?',
    features: ['Feature 1', 'Feature 2'],
    technologies: ['React', 'Node.js'],
    liveDemo: 'https://your-project-demo.com',
    github: 'https://github.com/yourusername/project',
    status: 'Active',
  },
]
```

#### Achievements
```javascript
achievements: [
  {
    title: 'Achievement Title',
    category: 'Category - Award',
    date: '2024',
    icon: '🏆',
  },
]
```

#### Experience
```javascript
experience: [
  {
    position: 'Job Title',
    company: 'Company Name',
    duration: 'Start Date – End Date',
    type: 'Internship/Full-time',
    description: 'What did you do?',
    responsibilities: ['Responsibility 1', 'Responsibility 2'],
    skills: ['Skill 1', 'Skill 2'],
  },
]
```

### Step 2: Upload Your Resume

1. Create a folder: `public/resume/`
2. Add your resume PDF: `public/resume/Your_Name_Resume.pdf`
3. Update the path in `portfolioData.js`:
   ```javascript
   resumePath: '/resume/Your_Name_Resume.pdf',
   ```

### Step 3: Customize Colors (Optional)

Edit `tailwind.config.js` to change the accent color:

```javascript
colors: {
  accent: '#6366f1',      // Main accent color
  accentLight: '#818cf8',  // Lighter variant
  accentDark: '#4f46e5',   // Darker variant
}
```

**Color Suggestions:**
- Blue: `#3b82f6`
- Purple: `#a855f7`
- Pink: `#ec4899`
- Green: `#10b981`
- Teal: `#14b8a6`

### Step 4: Update Meta Information

Edit `index.html` to customize meta tags:

```html
<meta name="description" content="Your portfolio description" />
<meta property="og:title" content="Your Name | Your Title" />
<meta property="og:description" content="Your portfolio description" />
```

### Step 5: Customize Favicon

Edit `public/favicon.svg` to change the favicon. Replace "KN" with your initials and adjust colors as needed.

## 🎨 Design Customization

### Typography

The portfolio uses:
- **Display Font**: Inter Tight (headings)
- **Body Font**: Inter (body text)

To change fonts, edit `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700;900&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  display: ['Your Display Font', 'sans-serif'],
  body: ['Your Body Font', 'sans-serif'],
}
```

### Dark/Light Mode

The default is dark mode. To disable light mode, edit `Navigation.jsx` and remove the theme toggle button, or customize its behavior.

## 📱 Mobile Optimization

The portfolio is mobile-first and responsive. To test on different devices:

1. Use Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on various screen sizes

## 🚀 Building for Production

### Local Build

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Preview Build

```bash
npm run preview
```

This lets you test the production build locally.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository named `username.github.io`
2. Or enable GitHub Pages on an existing repository

3. Update `vite.config.js` if deploying to a subdirectory:
   ```javascript
   base: '/repository-name/' // if deploying to /username/repo-name/
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 2: Vercel (Free, Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Create new project → Select your GitHub repo
4. It auto-detects Vite → Click Deploy

### Option 3: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Authorize Netlify access to your repositories
4. New site from Git → Select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`

### Option 4: AWS S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Build: `npm run build`
4. Upload `dist/` contents to S3
5. Set up CloudFront distribution

## ✅ Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] Resume uploaded to `public/resume/`
- [ ] Projects have correct links
- [ ] All [PLACEHOLDER] text replaced with real information
- [ ] Social links are correct
- [ ] Email is valid and you can receive messages
- [ ] Favicon customized
- [ ] Tested on mobile, tablet, desktop
- [ ] Built successfully: `npm run build`
- [ ] No console errors
- [ ] Links work (internal and external)
- [ ] Form submission works (or disable if needed)

## 🔍 Testing

### Accessibility

```bash
# Install axe accessibility checker extension in Chrome
# Then run: chrome-extension://lhdoppojpmngadmnkpklempisson
```

### Performance

1. Build: `npm run build`
2. Run Lighthouse audit in Chrome DevTools
3. Aim for 90+ scores

### SEO

Check meta tags and Open Graph in DevTools Elements panel

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Loading
- Check image paths (use `/image.png` for public folder)
- Ensure images are in `public/` directory
- Use absolute paths, not relative

### Styles Look Wrong
- Clear browser cache: Ctrl+Shift+Delete
- Rebuild: `npm run build`
- Check Tailwind CSS is processing

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 💡 Tips

1. **Keep It Updated**: Update your portfolio every 2-3 months
2. **Add New Projects**: Showcase your latest work
3. **Monitor Performance**: Check Lighthouse scores regularly
4. **Backup Resume**: Keep your resume file updated
5. **Test Before Deploy**: Always test locally first
6. **Use Analytics**: Add Google Analytics to track visitors
7. **Update Links**: Ensure all external links are current

## 🎯 Next Steps

1. Customize `portfolioData.js` with your information
2. Upload your resume
3. Build locally: `npm run build`
4. Test thoroughly
5. Deploy to your preferred platform
6. Share your portfolio!

---

Need help? Check the README.md for more information!
