# Veo 3.1

Higher-quality video from text or a start frame. Slower and more expensive than Kling. Use for a hero shot after Kling is not good enough.

| Field | Value |
|---|---|
| Model ID | `veo-3.1-generate-preview` |
| Provider | Google AI Studio |
| Method | Async |
| Type | Video |
| API key | `.env` → `GOOGLE_API_KEY` |
| Docs | https://ai.google.dev/gemini-api/docs/models/veo-3.1-generate-preview |
| Cost | Quote before run. ~8s clips, 720p. |

## Create

```
POST https://generativelanguage.googleapis.com/v1beta/models/veo-3.1-generate-preview:predictLongRunning
x-goog-api-key: {GOOGLE_API_KEY}
Content-Type: application/json
```

```json
{
  "instances": [{ "prompt": "PROMPT" }],
  "parameters": {
    "aspectRatio": "9:16",
    "resolution": "720p",
    "durationSeconds": 8,
    "sampleCount": 1
  }
}
```

Keep `sampleCount` at 1 unless the user pays for more.

## Poll

Response includes `name` (operation). Then:

```
GET https://generativelanguage.googleapis.com/v1beta/{name}
x-goog-api-key: {GOOGLE_API_KEY}
```

When `done: true`, download `response.generateVideoResponse.generatedSamples[0].video.uri` **with the same API key header**. URLs expire.

## Notes

- Faster/cheaper sibling: `veo-3.1-fast-generate-preview` if the user wants speed over quality.
- Always quote cost and wait for go. One approval = one run.
