# Nano Banana 2 Lite

Everyday draft images. Cheap, fast. Default image model. Weak on multi-ref and sequential edits — use Nano Banana 2 or GPT Image 2 for those.

| Field | Value |
|---|---|
| Model ID | `gemini-3.1-flash-lite-image` |
| Provider | Google AI Studio (also on fal.ai / WaveSpeed if Google is down) |
| Method | Sync |
| Type | Image |
| API key | `.env` → `GOOGLE_API_KEY` |
| Docs | https://ai.google.dev/gemini-api/docs/image-generation |
| Cost | ~$0.01–$0.03 per 1K image |

## Endpoint (preferred)

```
POST https://generativelanguage.googleapis.com/v1beta/interactions
x-goog-api-key: {GOOGLE_API_KEY}
Content-Type: application/json
```

```json
{
  "model": "gemini-3.1-flash-lite-image",
  "input": [
    { "type": "text", "text": "PROMPT" }
  ]
}
```

With a local ref (logo/face), add:

```json
{
  "type": "image",
  "data": "<base64>",
  "mime_type": "image/png"
}
```

Decode the image bytes from `output_image.data` (or the last image block in `output`). Save as `.png`.

## Fallback (PDF generateContent)

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite-image:generateContent?key={GOOGLE_API_KEY}
```

```json
{
  "contents": [{ "parts": [{ "text": "PROMPT" }] }],
  "generationConfig": { "responseModalities": ["IMAGE"] }
}
```

Inline image parts use `inlineData: { mimeType, data }`.

## Notes

- If this id 404s, check Google’s current Nano Banana Lite id and update this file.
- fal fallback: search fal for the same Gemini image model; auth is `Authorization: Key {FAL_KEY}`.
