---
name: generate
description: Generate images and videos via Kie AI, fal.ai, WaveSpeed, and Google APIs. Routes to the cheapest capable model, quotes video cost before running, and saves a flat generations library with sidecar logs. Use when the user types /generate, generate image, generate video, create image, thumbnail, animate, Nano Banana, Kling, Seedance, Veo, or asks for a cheaper alternative to Higgsfield. Not for HyperFrames HTML video compositions.
---

# /generate

API stills and clips for the **Kerb** design-system portfolio project (project-scoped copy of the global `/generate` skill, which stays set up for Opsed). This is **not** HyperFrames (HTML video). If the user wants a HyperFrames composition, stop and use that skill instead.

Read the matching recipe in `models/` before every generation. Auth shapes: [providers.md](providers.md).

## Models

| Task | Default model | Recipe |
|---|---|---|
| Image (default / draft) | Nano Banana 2 Lite | [models/nano-banana-2-lite.md](models/nano-banana-2-lite.md) |
| Image (product close-ups / cheap photoreal) | Nano Banana (original) | [models/nano-banana.md](models/nano-banana.md) |
| Image (quality / refs) | Nano Banana 2 | [models/nano-banana-2.md](models/nano-banana-2.md) |
| Image (readable text) | GPT Image 2 | [models/gpt-image-2.md](models/gpt-image-2.md) |
| Video (default) | Kling 3.0 | [models/kling-3.0.md](models/kling-3.0.md) |
| Video (hero / start frame) | Veo 3.1 | [models/veo-3.1.md](models/veo-3.1.md) |
| Video (animate refs) | Seedance 2.0 Fast | [models/seedance-2.0-fast.md](models/seedance-2.0-fast.md) |

Start with Lite + Kling unless the user asks for quality, text-in-image, hero video, or reference-to-video.

## Keys

Read the project-root `.env` (`C:/DDW_WEB_DEV_PROJECTS/Kerb/.env`) privately. It is gitignored. Check key presence by name only (never `cat`/`Read` the file). Never print values. Never paste keys into code, chat, or git.

| Need | First name | Aliases |
|---|---|---|
| Kie AI | `KIE_API_KEY` | `KIE.AI__API_KEY` |
| fal.ai | `FAL_KEY` | `FAL.AI__KEY` |
| WaveSpeed | `WAVESPEED_API_KEY` | |
| Google | `GOOGLE_API_KEY` | `GOOGLE_KEY`, `GEMINI_API_KEY` |

If the required key is empty, stop and tell the user to put it in that `.env` file. Do not ask them to paste the key into chat.

## Provider routing

1. Default to the **lowest cost** provider that runs the model well: Kie AI → fal.ai → WaveSpeed. Google is the home route for Nano Banana and Veo.
2. If the cheapest route lacks the model, fails auth, or errors, fall back and **say which route ran and why**.
3. WaveSpeed is the last fallback. See [providers.md](providers.md).

## Output

- Save every file **flat** into `C:/DDW_WEB_DEV_PROJECTS/Kerb/generations`
- No subfolders. Reference images live in `C:/DDW_WEB_DEV_PROJECTS/Kerb/generations/refs`
- Naming: `kerb_{description}_{timestamp}.{ext}` — example `kerb_claim_tracker_hero_20261001-1330.png`
- Promote keepers into `assets/images/` by hand; `generations/` is the scratch library
- After every save, write a sidecar `{same-basename}.json` (see Logging)
- Prefer `node scripts/save-output.mjs` in this skill folder to download + log

## Rules

- Quote the cost and wait for **explicit go** before any paid video run. Quoting is not approval. One approval = one run.
- Draft on Nano Banana 2 Lite first. Only rerun on a quality model when the user picks a favourite.
- Never describe a logo or face in text. Pass the real file from `refs/`. If it's missing, stop and ask.
- Run multiple generations one at a time.
- After every save, write the sidecar log.
- Kerb is a fictional UK digital car insurer. Follow `readme.md` (content fundamentals, visual foundations) and `guidelines/`: calm, competent, plain English, sentence case. No crash/injury gore, no fear-selling. Kerb is invented — never show real insurer brands or real number plates.

## Pipeline

1. **Route** — pick model + cheapest provider. Read that recipe.
2. **Prep refs** — load real files from `refs/`. Upload to a public URL if the API requires one (Kie file-stream upload).
3. **Generate** — call the API. Poll if async. Download immediately (result URLs expire).
4. **Log** — sidecar JSON next to the file.

## Logging

Same basename as the media file:

```json
{
  "model": "gemini-3.1-flash-lite-image",
  "provider": "google",
  "prompt": "full prompt sent",
  "refs": ["refs/kerb-wordmark.png"],
  "params": { "aspect": "9:16" },
  "cost_quote": "$0.03",
  "created": "2026-08-14T17:30:00Z"
}
```

## Cost ballpark

Treat as estimates; check the provider page if it matters.

| Job | Ballpark |
|---|---|
| Draft image (Lite) | $0.01–$0.03 |
| Quality image | $0.05–$0.15 |
| Video per second | $0.20–$0.35 (10s ≈ $2–$3.50) |
