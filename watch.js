const chokidar = require("chokidar");
const { exec } = require("child_process");

const ignore = ["output", "node_modules"];

let ref;
// One-liner for current directory
chokidar.watch(".").on("all", (event, path) => {
  if (path.startsWith(".")) return;
  if (ignore.some((s) => path.includes(s))) return;
  if (ref) clearTimeout(ref);

  ref = setTimeout(() => {
    console.log(event, path);
    exec("pnpm build", (error, stdout, stderr) => console.log(stdout));
  }, 500);
});
