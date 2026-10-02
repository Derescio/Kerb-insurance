# Nano Banana 2

Quality / workhorse images. Better with multiple reference images and text rendering than Lite. Use after the user picks a Lite draft.

| Field | Value |
|---|---|
| Model ID | `gemini-3.1-flash-image` |
| Provider | Google AI Studio |
| Method | Sync |
| Type | Image |
| API key | `.env` → `GOOGLE_API_KEY` |
| Docs | https://ai.google.dev/gemini-api/docs/image-generation |
| Cost | ~$0.05–$0.15 |

## Endpoint

Same as Lite, different model id:

```
POST https://generativelanguage.googleapis.com/v1beta/interactions
x-goog-api-key: {GOOGLE_API_KEY}
```

```json
{
  "model": "gemini-3.1-flash-image",
  "input": [
    { "type": "text", "text": "PROMPT" }
  ]
}
```

Pass real refs as `type: "image"` parts. Never describe a logo in the prompt if the file exists in `refs/`.

## Notes

- PDF also listed `gemini-3.1-flash-image-preview`. If the stable id 404s, try the `-preview` suffix and then update this file.
- Premium next step is `gemini-3-pro-image` (Nano Banana Pro) — only if the user asks.
