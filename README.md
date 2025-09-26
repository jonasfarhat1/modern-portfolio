# Portfolio Template - Clean & Minimal

A beautiful, clean, and minimal portfolio template built with React, TypeScript, and Tailwind CSS. Perfect for developers, designers, and creatives who want a professional online presence.

![Portfolio Template Preview](preview.png)

## ✨ Features

- **🌙 Dark/Light Mode** - Seamless theme switching
- **📱 Responsive Design** - Looks great on all devices
- **⚡ Fast & Modern** - Built with Vite and optimized for performance
- **🎨 Customizable** - Easy to modify colors, content, and styling
- **♿ Accessible** - Built with accessibility best practices
- **🚀 Ready to Deploy** - One-click deployment to various platforms

## 🛠️ Built With

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Lightning fast build tool
- **Lucide React** - Beautiful icons
- **Radix UI** - Accessible UI components

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-template
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📝 Customization

### Personal Information

Update your personal information in `src/components/Portfolio.tsx`:

```typescript
// Update your name in the header
<span className="text-lg font-semibold text-foreground">Your Name</span>

// Update social links
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/yourusername",
  },
  // ... add more social links
];
```

### Content Sections

1. **About Section** - Update your bio and background
2. **Posts Section** - Add your blog posts or articles
3. **Contact Section** - Update your contact information

### Styling

The design system is defined in:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

### Colors

Modify the color scheme by updating the CSS variables in `src/index.css`:

```css
:root {
  --accent: 220 100% 60%; /* Change this for your brand color */
  /* ... other color variables */
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Portfolio.tsx       # Main portfolio content
│   ├── ThemeProvider.tsx   # Theme context
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── ui/                 # Reusable UI components
├── pages/
│   ├── Index.tsx           # Home page
│   └── NotFound.tsx        # 404 page
├── hooks/
│   └── use-mobile.tsx      # Mobile detection hook
└── lib/
    └── utils.ts            # Utility functions
```

## 🚀 Deployment

This template can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages
1. Enable GitHub Pages in your repository settings
2. Set up GitHub Actions for automatic deployment

## 🎨 Design Philosophy

This template follows these design principles:

- **Minimalism** - Clean, uncluttered design
- **Typography** - Excellent readability and hierarchy
- **Accessibility** - WCAG compliant and keyboard navigable
- **Performance** - Optimized for speed and SEO
- **Flexibility** - Easy to customize and extend

## 📄 License

MIT License - feel free to use this template for your personal or commercial projects.

## 🙏 Credits

Built and developed by **Jonas Farhat**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the template, please open an issue on GitHub.

---

⭐ If you found this template helpful, please give it a star on GitHub!