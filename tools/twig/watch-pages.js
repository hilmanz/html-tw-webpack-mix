const chokidar = require("chokidar");
const path = require("path");
const { spawn } = require("child_process");

const buildScript = path.resolve(__dirname, "./build-pages.js");

let isBuilding = false;
let queued = false;

function runBuild() {
  if (isBuilding) {
    queued = true;
    return;
  }

  isBuilding = true;
  console.log("⚙️ Building pages...");

  const proc = spawn("node", [buildScript], { stdio: "inherit" });

  proc.on("close", (code) => {
    isBuilding = false;

    if (code === 0) {
      console.log("✅ Build finished.");
    } else {
      console.log(`❌ Build failed (exit code ${code}).`);
    }

    if (queued) {
      queued = false;
      runBuild();
    }
  });
}

console.log("👀 Watching Twig + data changes...");

const watcher = chokidar.watch(
  ["src/views/**/*.twig", "src/data/**/*.json"],
  {
    ignoreInitial: true,
    awaitWriteFinish: {
      stabilityThreshold: 200,
      pollInterval: 50
    }
  }
);

watcher.on("all", (event, filePath) => {
  const time = new Date().toLocaleTimeString();
  console.log(`🔁 [${time}] ${event}: ${filePath}`);
  runBuild();
});

// build once on start (optional but recommended)
runBuild();
