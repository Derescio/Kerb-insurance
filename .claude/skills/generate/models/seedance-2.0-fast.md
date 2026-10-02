# Seedance 2.0 Fast (reference to video)

Animate up to 9 reference images into a clip. Use when the user has stills (product, UI, logo lockup) to motion — not a blank text prompt.

| Field | Value |
|---|---|
| Model ID | `bytedance/seedance-2.0/fast/reference-to-video` |
| Provider | fal.ai |
| Method | Sync-or-queue (fal.run) |
| Type | Video |
| API key | `.env` → `FAL_KEY` |
| Docs | https://fal.ai/models/bytedance/seedance-2.0/fast/reference-to-video |
| Cost | ~$0.24 / sec at 720p (5s ≈ $1.21). Quote before run. |

## Endpoint

```
POST https://fal.run/bytedance/seedance-2.0/fast/reference-to-video
Authorization: Key {FAL_KEY}
Content-Type: application/json
```

```json
{
  "prompt": "PROMPT referencing @Image1 @Image2",
  "image_urls": ["https://...", "https://..."],
  "duration": "5",
  "resolution": "720p",
  "aspect_ratio": "9:16",
  "generate_audio": false
}
```

`duration`: `"auto"` or `"4"`–`"15"`. `image_urls`: up to 9.

Need public URLs for local refs — upload via Kie file-stream (see [providers.md](../providers.md)) or another host, then pass those URLs.

## Notes

- Text-only Seedance: `bytedance/seedance-2.0/fast/text-to-video` if there are no refs.
- Non-fast (higher quality): drop `/fast` from the id. More expensive — quote first.
