const path = require("path");
const fs = require("fs-extra");
const prettier = require("prettier");
const glob = require("fast-glob");
const Twig = require("twig");

const blogPosts = require("../../src/data/blog.json");

const SRC_VIEWS = path.resolve(__dirname, "../../src/views");
const SRC_PAGES = path.resolve(SRC_VIEWS, "pages");
const OUT_DIR = path.resolve(__dirname, "../../public");

const SITE = {
  name: "My Website",
  baseUrl: "https://example.com",
  ogFallback: "/images/og-cover.jpg"
};

function renderTwig(templatePath, data = {}) {
  return new Promise((resolve, reject) => {
    Twig.cache(false);

    Twig.twig({
      path: templatePath,
      allowInlineIncludes: true,
      base: SRC_VIEWS,
      namespaces: {
        layouts: path.join(SRC_VIEWS, "layouts"),
        partials: path.join(SRC_VIEWS, "partials"),
        pages: path.join(SRC_VIEWS, "pages")
      },
      load(template) {
        try {
          const html = template.render(data);
          resolve(html);
        } catch (e) {
          reject(e);
        }
      },
      error(err) {
        reject(err);
      }
    });
  });
}

async function writeHTML(outPath, html) {
  const formatted = await prettier.format(html, { parser: "html" });

  const exists = await fs.pathExists(outPath);
  if (exists) {
    const current = await fs.readFile(outPath, "utf8");
    if (current === formatted) return; // no rewrite = no re-trigger
  }

  await fs.outputFile(outPath, formatted, "utf8");
}

async function buildStaticPages() {
  const pages = await glob(["**/*.twig"], { cwd: SRC_PAGES });

  for (const file of pages) {
    const pageName = file.replace(".twig", "");

    // Skip templates that should NOT become standalone pages
    // (example: blog-post template, components, etc)
    if (pageName.startsWith("_")) continue; // underscore convention
    if (pageName.includes("blog-post")) continue;

    const templatePath = path.join(SRC_PAGES, file);

    const html = await renderTwig(templatePath, {
      site: SITE,
      blog_posts: blogPosts,
      og_fallback: SITE.ogFallback
    });

    // output path mirrors folder structure
    // pages/about.twig -> public/about.html
    // pages/company/team.twig -> public/company/team.html
    const outFile = `${pageName}.html`;
    const outPath = path.join(OUT_DIR, outFile);

    await writeHTML(outPath, html);
    console.log(`✔ Built: ${outFile}`);
  }
}

async function buildBlogRoutes() {
  const templatePath = path.join(SRC_PAGES, "blog-post.twig");

  for (const post of blogPosts) {
    const html = await renderTwig(templatePath, {
      site: SITE,
      post,
      og_fallback: SITE.ogFallback
    });

    const outPath = path.join(OUT_DIR, "blog", post.slug, "index.html");
    await writeHTML(outPath, html);
    console.log(`✔ Built: blog/${post.slug}/index.html`);
  }
}

async function run() {
  try {
    await fs.ensureDir(OUT_DIR);
    await buildStaticPages();
    await buildBlogRoutes();
    console.log("✅ Twig build complete.");
  } catch (e) {
    console.error("❌ Twig build failed:\n", e);
    process.exit(1);
  }
}

run();
