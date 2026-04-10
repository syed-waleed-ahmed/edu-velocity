import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distIndex = resolve(process.cwd(), "dist", "index.html");

function fail(message: string): never {
  console.error(`Pages build verification failed: ${message}`);
  process.exit(1);
}

if (!existsSync(distIndex)) {
  fail("dist/index.html was not found. Run npm run build first.");
}

const html = readFileSync(distIndex, "utf-8");

if (html.includes("/src/")) {
  fail("dist/index.html still references /src/* paths instead of compiled assets.");
}

if (!html.includes("/edu-velocity/assets/")) {
  fail("dist/index.html does not contain /edu-velocity/assets/ references.");
}

if (!html.includes("<script type=\"module\"")) {
  fail("dist/index.html is missing the compiled module script tag.");
}

console.log("Pages build verification passed.");
