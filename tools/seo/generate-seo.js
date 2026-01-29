const path = require("path");
const fs = require("fs-extra");

const blogPosts = require("../../src/data/blog.json");

const OUT_DIR = path.resolve(__dirname, "../../public");

const SITE = {
  baseUrl: "https://example.com"
};

function url(loc) {
  return `${SITE.baseUrl}${loc}`;
}

async function generateSitemap() {
  const staticPages = [
    "/",
    "/about.html",
    "/testimonials.html",
    "/gallery.html",
    "/blog.html",
    "/contact.html"
  ];

  const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}/`);

  const allUrls = [...staticPages, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (u) => `
  <url>
    <loc>${url(u)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  await fs.outputFile(path.join(OUT_DIR, "sitemap.xml"), xml.trim(), "utf8");
  console.log("✔ Generated: sitemap.xml");
}

async function generateRobots() {
  const robots = `
User-agent: *
Allow: /

Sitemap: ${url("/sitemap.xml")}
`.trim();

  await fs.outputFile(path.join(OUT_DIR, "robots.txt"), robots, "utf8");
  console.log("✔ Generated: robots.txt");
}

async function run() {
  await generateSitemap();
  await generateRobots();
  console.log("✅ SEO files generated.");
}

run();
