# Mohammadhadi Kafi — Personal Portfolio & Infrastructure Site

Personal portfolio website for **Mohammadhadi Kafi (Hadi Kafi)**, Senior DevOps & Infrastructure Engineer.

Designed with clean typography, dark/light themes, and built with pure HTML, CSS, and JavaScript for GitHub Pages.

Live Preview: [https://hadikafi.github.io/](https://hadikafi.github.io/)

---

## ⚡ Tech Stack & Features

- **Pure Static Stack**: Pure HTML5, CSS3, and JavaScript — zero frameworks or build tools required.
- **GitHub Pages Ready**: Native compatibility (`.nojekyll` included).
- **Themes**: Dark Mode (default high-tech terminal/slate theme) & Light Mode with instant toggle and `localStorage` persistence.
- **SEO & Social Optimization**: OpenGraph metadata, descriptive title/meta tags, semantic layout.
- **Accessibility**: Skip links, ARIA labels, responsive navigation with mobile drawer and keyboard shortcuts.
- **DevOps Touches**: Interactive CLI command copier (`curl -sL https://hadikafi.me`), real-time operational status badge, metrics ribbon, and tech stack chips.
- **Curriculum Vitae**: Direct download link to compiled PDF (`assets/Hadi_Kafi_CV.pdf`).

---

## 📁 Project Structure

```text
hadikafi-website/
├── index.html              # Main webpage
├── css/
│   └── style.css           # Styling, design tokens, light/dark themes
├── js/
│   └── main.js             # Theme switch, scrollspy, interactive copy & toasts
├── assets/
│   ├── images/
│   │   └── profile.jpg     # Profile photo
│   ├── icons/
│   │   └── favicon.svg     # SVG favicon
│   └── Hadi_Kafi_CV.pdf    # Compiled CV PDF
├── main.tex                # Source LaTeX CV
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── .gitignore
└── README.md
```

---

## 🚀 How to Run Locally

Using Python's built-in HTTP server:

```powershell
python -m http.server 8000
```

Then open your browser at:
```
http://localhost:8000
```

---

## 🌐 How to Deploy to GitHub Pages

1. **Initialize Git repository & commit:**
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```

2. **Add your remote repository:**
   ```powershell
   git remote add origin https://github.com/hadikafi/hadikafi.github.io.git
   git branch -M main
   ```

3. **Push to GitHub:**
   ```powershell
   git push -u origin main
   ```

4. **Verify on GitHub:**
   - Go to your repository **Settings** &rarr; **Pages**.
   - Under **Build and deployment**, ensure **Source** is set to **Deploy from a branch** and select branch `main` / `root`.
   - Your website will be live in ~1-2 minutes at: `https://hadikafi.github.io/`
