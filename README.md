# NovativeAI Website

A modern website built with Astro for NovativeAI, showcasing AI solutions and services.

<!-- Last updated for GitHub Pages deployment -->

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/[your-username]/NovativeAI.git
   cd NovativeAI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Building for Production
```bash
npm run build
```

## 🌐 Deployment

This website is configured for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. **Update Astro Configuration**: 
   - Replace `[your-github-username]` in `astro.config.mjs` with your actual GitHub username

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "GitHub Actions"

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Pages setup"
   git push origin main
   ```

4. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://[your-username].github.io/NovativeAI`

### Manual Deployment
If you prefer manual deployment:
1. Build the site: `npm run build`
2. The built files will be in the `dist/` directory
3. Upload the contents of `dist/` to your web server

## 📁 Project Structure

```
NovativeAI/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── assets/         # Static assets
├── public/             # Public static files
├── .github/workflows/  # GitHub Actions workflows
└── astro.config.mjs    # Astro configuration
```

## 🛠️ Technologies Used

- [Astro](https://astro.build/) - Static site generator
- HTML/CSS/JavaScript
- GitHub Pages - Hosting
- GitHub Actions - CI/CD

## 📝 License

This project is private and proprietary to NovativeAI.

## 🤝 Contributing

This is a private project. For any issues or questions, please contact the development team.
