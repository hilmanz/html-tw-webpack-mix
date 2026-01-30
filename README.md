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
.
├── public/
│ ├── css/
│ ├── js/
│ ├── images/
│ ├── fonts/
│ └── index.html
│
├── src/
│ ├── assets/
│ │ ├── images/
│ │ └── fonts/
│ │
│ ├── data/
│ │ └── blog.json
│ │
│ ├── js/
│ │ └── app.js
│ │
│ ├── scss/
│ │ ├── main.scss
│ │ └── _variables.scss
│ │
│ └── views/
│ ├── layouts/
│ │ └── base.twig
│ ├── partials/
│ │ ├── head.twig
│ │ ├── nav.twig
│ │ ├── header.twig
│ │ ├── footer.twig
│ │ └── scripts.twig
│ └── pages/
│ ├── index.twig
│ ├── about.twig
│ └── contact.twig
│
├── tools/
│ └── twig/
│ ├── build-pages.js
│ └── watch-pages.js
│
├── webpack.mix.js
├── tailwind.config.js
├── postcss.config.js
└── package.json


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

## 📦 Development

Run dev mode (Twig + Mix together)

```bash
npm run dev

---




