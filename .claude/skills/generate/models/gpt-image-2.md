# GPT Image 2

Best when the image must contain **readable text**: signs, posters, UI mockups, packaging, menus.

| Field | Value |
|---|---|
| Model ID | `openai/gpt-image-2` |
| Provider | fal.ai (Kie / WaveSpeed if fal fails) |
| Method | Sync (fal.run; may still queue) |
| Type | Image |
| API key | `.env` → `FAL_KEY` |
| Docs | https://fal.ai/models/openai/gpt-image-2 |
| Cost | ~$0.05 per image at medium |

## Endpoint

```
POST https://fal.run/openai/gpt-image-2
Authorization: Key {FAL_KEY}
Content-Type: application/json
```

```json
{
  "prompt": "PROMPT",
  "image_size": "landscape_16_9",
  "quality": "medium",
  "num_images": 1,
  "output_format": "png"
}
```

`image_size` presets: `square_hd`, `square`, `portrait_4_3`, `portrait_16_9`, `landscape_4_3`, `landscape_16_9`, `auto`.

Edit / refs: `POST https://fal.run/openai/gpt-image-2/edit` with `image_urls: ["https://..."]`.

## Response

Download the first image URL in the reply (usually `images[0].url`). Save immediately.

## Notes

- Use this instead of Nano Banana when lettering must be correct.
- Do not send an OpenAI key unless the user explicitly wants BYOK.
