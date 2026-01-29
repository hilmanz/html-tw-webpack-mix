const browserSync = require("browser-sync").create();
const historyApiFallback = require("connect-history-api-fallback");
const path = require("path");
const fs = require("fs");

const PUBLIC_DIR = path.resolve(__dirname, "../../public");

function fileExists(p) {
  try {
    return fs.existsSync(p);
  } catch (e) {
    return false;
  }
}

browserSync.init({
  port: 3000,
  notify: false,
  open: true,
  server: {
    baseDir: PUBLIC_DIR,
    middleware: [
      // custom routing for blog slugs
      (req, res, next) => {
        const url = req.url.split("?")[0];

        // if requesting /blog/some-slug or /blog/some-slug/
        if (url.startsWith("/blog/")) {
          const slug = url.replace("/blog/", "").replace(/\/$/, "");

          // ignore direct file requests like /blog/x/style.css
          if (slug.includes(".")) return next();

          const blogIndexPath = path.join(PUBLIC_DIR, "blog", slug, "index.html");

          if (fileExists(blogIndexPath)) {
            req.url = `/blog/${slug}/index.html`;
            return next();
          }

          // fallback to 404.html if slug not found
          req.url = `/404.html`;
          return next();
        }

        return next();
      },

      // fallback for other routes like /about -> /about.html
      historyApiFallback({
        disableDotRule: true,
        rewrites: [
          { from: /^\/$/, to: "/index.html" },
          { from: /^\/about\/?$/, to: "/about.html" },
          { from: /^\/testimonials\/?$/, to: "/testimonials.html" },
          { from: /^\/gallery\/?$/, to: "/gallery.html" },
          { from: /^\/blog\/?$/, to: "/blog-list.html" },
          { from: /^\/contact\/?$/, to: "/contact.html" }
        ]
      })
    ]
  },
  files: [
    path.join(PUBLIC_DIR, "**/*.html"),
    path.join(PUBLIC_DIR, "css/**/*.css"),
    path.join(PUBLIC_DIR, "js/**/*.js")
  ]
});
