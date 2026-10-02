# Nano Banana (original)

First-gen Gemini image model. Cheap, solid at product shots and single-ref edits. Weaker than Nano Banana 2 on text and multi-ref; stronger than Lite on photoreal detail.

| Field | Value |
|---|---|
| Model ID | `gemini-2.5-flash-image` (Google) · `google/nano-banana` (Kie) · `fal-ai/nano-banana` (fal) |
| Provider | Kie AI → fal.ai → Google AI Studio (home route) |
| Method | Kie: async task · fal: sync (may queue) · Google: sync |
| Type | Image |
| API key | `.env` → `KIE_API_KEY` / `FAL_KEY` / `GOOGLE_API_KEY` |
| Docs | https://ai.google.dev/gemini-api/docs/image-generation · https://fal.ai/models/fal-ai/nano-banana |
| Cost | ~$0.02–$0.04 per image (Google list ~$0.039; check Kie/fal pages before a batch) |

## Kie AI (cheapest when available)

```
POST https://api.kie.ai/api/v1/jobs/createTask
Authorization: Bearer {KIE_API_KEY}
```

```json
{
  "model": "google/nano-banana",
  "input": { "prompt": "PROMPT", "output_format": "png", "image_size": "4:5" }
}
```

With refs use `"model": "google/nano-banana-edit"` and add `"image_urls": ["https://..."]` (upload local refs via Kie file-stream upload first — see providers.md). Poll `recordInfo` until `success`, then download.

## fal.ai

```
POST https://fal.run/fal-ai/nano-banana
Authorization: Key {FAL_KEY}
```

```json
{ "prompt": "PROMPT", "aspect_ratio": "4:5", "num_images": 1, "output_format": "png" }
```

Refs: `POST https://fal.run/fal-ai/nano-banana/edit` with `image_urls`.

## Google AI Studio

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent
x-goog-api-key: {GOOGLE_API_KEY}
```

```json
{
  "contents": [{ "parts": [{ "text": "PROMPT" }] }],
  "generationConfig": { "responseModalities": ["IMAGE"], "imageConfig": { "aspectRatio": "4:5" } }
}
```

Refs go in as `inlineData: { mimeType, data }` parts (base64, no upload needed).

## Notes

- Model ids drift. If Kie/fal 404, check their model page, update this file, retry.
- Aspect ratios: 1:1, 2:3, 3:2, 3:4, 4:3, 4:5, 5:4, 9:16, 16:9, 21:9.
