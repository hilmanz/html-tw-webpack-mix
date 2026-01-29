const path = require("path");
const fs = require("fs-extra");
const glob = require("fast-glob");
const sharp = require("sharp");

const SRC = path.resolve(__dirname, "../../src/assets/images");
const OUT = path.resolve(__dirname, "../../public/images");

async function run() {
  await fs.ensureDir(OUT);

  const files = await glob(["**/*.{jpg,jpeg,png}"], { cwd: SRC });

  for (const file of files) {
    const inputPath = path.join(SRC, file);

    const outFile = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const outputPath = path.join(OUT, outFile);

    await fs.ensureDir(path.dirname(outputPath));

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✔ WebP: images/${outFile}`);
  }

  console.log("✅ WebP conversion complete.");
}

run().catch((e) => {
  console.error("❌ WebP conversion failed:", e);
  process.exit(1);
});
