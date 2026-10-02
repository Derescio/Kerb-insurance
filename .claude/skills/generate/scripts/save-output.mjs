#!/usr/bin/env node
/**
 * Download a generation into the flat Kerb media library and write a sidecar log.
 * Does not print secrets.
 *
 * node scripts/save-output.mjs --url https://... --basename kerb_hook --ext mp4 \
 *   --model kling-3.0/video --provider kie --prompt "..." --cost "$1.20"
 */
import { createWriteStream, readFileSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";

// Skill lives at <project>/.claude/skills/generate
const skillDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectDir = join(skillDir, "..", "..", "..");
const outDir = join(projectDir, "generations");

function arg(name, fallback = "") {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : fallback;
}

function loadEnv() {
  const env = {};
  let raw = "";
  try {
    raw = readFileSync(join(projectDir, ".env"), "utf8");
  } catch {
    raw = "";
  }
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

function pick(env, names) {
  for (const name of names) {
    if (env[name]) return env[name];
  }
  return "";
}

const url = arg("url");
const basename = arg("basename");
const ext = arg("ext", "bin").replace(/^\./, "");
const model = arg("model");
const provider = arg("provider");
const prompt = arg("prompt");
const cost = arg("cost");
const refs = arg("refs");
const params = arg("params", "{}");

if (!url || !basename) {
  console.error("Need --url and --basename");
  process.exit(1);
}

const env = loadEnv();
const googleKey = pick(env, ["GOOGLE_API_KEY", "GOOGLE_KEY", "GEMINI_API_KEY"]);

await mkdir(outDir, { recursive: true });
await mkdir(join(outDir, "refs"), { recursive: true });

const stamp = new Date().toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15);
const fileBase = `${basename}_${stamp}`;
const mediaPath = join(outDir, `${fileBase}.${ext}`);
const jsonPath = join(outDir, `${fileBase}.json`);

const headers = {};
if (url.includes("generativelanguage.googleapis.com") && googleKey) {
  headers["x-goog-api-key"] = googleKey;
}

const res = await fetch(url, { headers });
if (!res.ok) {
  console.error(`Download failed: ${res.status}`);
  process.exit(1);
}

await pipeline(res.body, createWriteStream(mediaPath));

let parsedParams = {};
try {
  parsedParams = JSON.parse(params);
} catch {
  parsedParams = { raw: params };
}

await writeFile(
  jsonPath,
  JSON.stringify(
    {
      model,
      provider,
      prompt,
      refs: refs ? refs.split(",").map((s) => s.trim()) : [],
      params: parsedParams,
      cost_quote: cost,
      source_url_host: (() => {
        try {
          return new URL(url).host;
        } catch {
          return "";
        }
      })(),
      created: new Date().toISOString(),
    },
    null,
    2
  )
);

console.log(mediaPath);
console.log(jsonPath);
