# Provider auth

Same idea, four shapes. Get this right once; every model on that provider then works.

Never put keys in URLs in logs or chat. Prefer headers.

## Google AI Studio

Key in header (preferred) or `?key=`.

```
x-goog-api-key: {GOOGLE_API_KEY}
```

Image (current docs): `POST https://generativelanguage.googleapis.com/v1beta/interactions`

Image (PDF / generateContent): `POST https://generativelanguage.googleapis.com/v1beta/models/{model-id}:generateContent?key={GOOGLE_API_KEY}`

Veo: `POST https://generativelanguage.googleapis.com/v1beta/models/{model-id}:predictLongRunning`

Also accept `GOOGLE_KEY` or `GEMINI_API_KEY` from `.env`.

## fal.ai

```
POST https://fal.run/{model-id}
Authorization: Key {FAL_KEY}
Content-Type: application/json
```

Also accept `FAL.AI__KEY`.

Sync-looking `fal.run` calls can still queue. If the body has a request id and no file, poll fal queue status per their docs, then download.

## Kie AI

```
POST https://api.kie.ai/api/v1/jobs/createTask
Authorization: Bearer {KIE_API_KEY}
Content-Type: application/json
```

Poll:

```
GET https://api.kie.ai/api/v1/jobs/recordInfo?taskId={taskId}
Authorization: Bearer {KIE_API_KEY}
```

States: `waiting` | `queuing` | `generating` | `success` | `fail`. Poll every 10–15s. Stop after ~15 minutes. Download result URLs immediately (often expire in 24h).

Also accept `KIE.AI__API_KEY`.

Local refs → public URL:

```
POST https://api.kie.ai/api/file-stream-upload
Authorization: Bearer {KIE_API_KEY}
form field file=@path
```

If that 404s, try `https://kieai.redpandaai.co/api/file-stream-upload`.

## WaveSpeed AI (fallback)

```
POST https://api.wavespeed.ai/api/v3/{model-path}
Authorization: Bearer {WAVESPEED_API_KEY}
Content-Type: application/json
```

Submit returns a prediction. Poll the result URL until `status` is `completed`. File is usually `data.outputs[0]`.

Look up the exact `{model-path}` on wavespeed.ai for the same model if Kie/fal/Google fail.

## If a model id 404s

Open that provider's model page, copy the current id into the recipe file, then retry. Model ids are the only routine maintenance.
