# Tailwind v4 + Twig + Laravel Mix Boilerplate

A modern front-end boilerplate for building **fast static websites** using:

- **Twig templating**
- **Tailwind CSS v4**
- **Laravel Mix (Webpack)**
- **BrowserSync live reload**
- Static page generator + watcher (Twig → HTML)

Perfect for:
- Landing pages
- Company profiles
- Portfolio sites
- Static marketing sites
- Travel/hotel/villa promo websites

---

## ✨ Tech Stack

### Core
- **Twig** (templating engine)
- **Tailwind CSS v4**
- **Sass (SCSS)**
- **Laravel Mix** (Webpack wrapper)
- **BrowserSync** (live reload + dev server)

### Node Tools
- `chokidar` (watch Twig + JSON changes)
- `fast-glob` (scan pages automatically)
- `fs-extra` (file system helper)
- `prettier` (format output HTML)

---

## 🚀 Features

### 🧩 Twig Templating System
- Layouts system (`@layouts/base.twig`)
- Partials system (`@partials/*.twig`)
- Page templates inside `src/views/pages/`
- Auto page generation into `/public`

### 🎨 Tailwind CSS v4 + SCSS
- Tailwind utilities inside Twig templates
- SCSS entry file `src/scss/main.scss`
- Output compiled CSS → `public/css/main.css`

### ⚡ Live Reload (BrowserSync)
- Reload on:
  - HTML changes
  - CSS changes
  - JS changes
- Runs local server at:
  - `http://localhost:3000`

### 📦 Static Page Builder (Auto Detect Pages)
- Automatically builds **all pages** inside:

  `src/views/pages/*.twig`

No need to manually add new pages to the build script.

### 🗂 Blog-ready structure (optional)
- `src/data/blog.json`
- Blog routes can be generated later (skipped for now)

---

## 📁 Folder Structure
```
└── 📁html-tw-webpack-mix
    └── 📁public
        └── 📁blog
            └── 📁art-of-clean-frontend
                ├── index.html
            └── 📁why-twig-still-slaps
                ├── index.html
        └── 📁css
            ├── main.css
        └── 📁favicon
        └── 📁fonts
            └── 📁graphik
                ├── Graphik-Black-Web.woff2
                ├── Graphik-Bold-Web.woff2
                ├── Graphik-Extralight-Web.woff2
                ├── Graphik-Light-Web.woff2
                ├── Graphik-Medium-Web.woff2
                ├── Graphik-Regular-Web.woff2
                ├── Graphik-Thin-Web.woff2
            ├── Inter-Black.woff
            ├── Inter-Bold.woff
            ├── Inter-ExtraBold.woff
            ├── Inter-ExtraLight-BETA.woff
            ├── Inter-Light-BETA.woff
            ├── Inter-Medium.woff
            ├── Inter-Regular.woff
            ├── Inter-SemiBold.woff
            ├── Inter-Thin-BETA.woff
        └── 📁images
            └── 📁blog
                ├── cover-1.jpg
                ├── cover-2.jpg
                ├── og-1.jpg
            ├── __og-cover.jpg
            ├── __og-cover.webp
            ├── og-cover.jpg
            ├── og-cover.png
            ├── og-cover.webp
        └── 📁js
            ├── app.js
            ├── app.js.LICENSE.txt
        ├── 404.html
        ├── about.html
        ├── blog-list.html
        ├── contact.html
        ├── faq.html
        ├── gallery.html
        ├── index.html
        ├── mix-manifest.json
        ├── robots.txt
        ├── sitemap.xml
        ├── testimonials.html
    └── 📁src
        └── 📁assets
            └── 📁fonts
                └── 📁graphik
                    ├── Graphik-Black-Web.woff2
                    ├── Graphik-Bold-Web.woff2
                    ├── Graphik-Extralight-Web.woff2
                    ├── Graphik-Light-Web.woff2
                    ├── Graphik-Medium-Web.woff2
                    ├── Graphik-Regular-Web.woff2
                    ├── Graphik-Thin-Web.woff2
                ├── Inter-Black.woff
                ├── Inter-Bold.woff
                ├── Inter-ExtraBold.woff
                ├── Inter-ExtraLight-BETA.woff
                ├── Inter-Light-BETA.woff
                ├── Inter-Medium.woff
                ├── Inter-Regular.woff
                ├── Inter-SemiBold.woff
                ├── Inter-Thin-BETA.woff
            └── 📁icons
            └── 📁images
                ├── __og-cover.jpg
                ├── og-cover.jpg
        └── 📁data
            ├── blog.json
        └── 📁js
            └── 📁components
                ├── animations.js
                ├── sliders.js
            ├── app.js
        └── 📁scss
            ├── _components.scss
            ├── _variables.scss
            ├── main.scss
        └── 📁views
            └── 📁layouts
                ├── base.twig
            └── 📁pages
                ├── 404.twig
                ├── about.twig
                ├── blog-list.twig
                ├── blog-post.twig
                ├── contact.twig
                ├── faq.twig
                ├── gallery.twig
                ├── index.twig
                ├── testimonials.twig
            └── 📁partials
                ├── footer.twig
                ├── head.twig
                ├── header.twig
                ├── nav.twig
                ├── scripts.twig
    └── 📁tools
        └── 📁bs
            ├── server.js
        └── 📁images
            ├── convert-webp.js
        └── 📁seo
            ├── generate-seo.js
        └── 📁twig
            ├── build-pages.js
            ├── watch-pages.js
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── README.md
    ├── tailwind.config.js
    └── webpack.mix.js
```


---

## ✅ Requirements

- Node.js **>= 18**
- npm / pnpm / yarn (recommended: npm)

---

## 📦 Installation

Install dependencies:

```bash
npm install


---


