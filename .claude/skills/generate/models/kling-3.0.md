# Kling 3.0

Default video. Good motion, fair price. 3–15 seconds. `std` = 720p drafts, `pro` = 1080p finals.

| Field | Value |
|---|---|
| Model ID | `kling-3.0/video` |
| Provider | Kie AI |
| Method | Async |
| Type | Video |
| API key | `.env` → `KIE_API_KEY` |
| Docs | https://docs.kie.ai/market/kling/kling-3-0 |
| Cost | Quote before run. Video is the expensive lane. |

## Create

```
POST https://api.kie.ai/api/v1/jobs/createTask
Authorization: Bearer {KIE_API_KEY}
Content-Type: application/json
```

```json
{
  "model": "kling-3.0/video",
  "input": {
    "prompt": "PROMPT",
    "duration": "5",
    "aspect_ratio": "9:16",
    "mode": "std",
    "multi_shots": false,
    "sound": false
  }
}
```

If createTask rejects the model id, retry `"model": "kling-3.0"` and update this file if that works.

Optional first/last frames: `image_urls: ["https://..."]` (upload local refs first — see [providers.md](../providers.md)).

## Poll

```
GET https://api.kie.ai/api/v1/jobs/recordInfo?taskId={taskId}
Authorization: Bearer {KIE_API_KEY}
```

Every 10–15 seconds until `success` or `fail`. Then download the result URL immediately.

## Rules for this model

- Quote duration, mode (`std`/`pro`), aspect, and expected dollars. Wait for explicit go.
- Default Kerb social: 5s, `9:16`, `std`. Use `pro` only for a chosen final.
- Duration 3–15. Do not start at 15s.
