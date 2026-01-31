# ISR & On-Demand Revalidation

On-demand revalidation when new listings hit your feed.

## API Route

`POST /api/revalidate`

### Parameters

| Param | Description |
|-------|-------------|
| `secret` | Required. Must match `REVALIDATION_SECRET` env var |
| `path` | Path to revalidate (e.g. `/locations/henderson/`) |
| `tag` | Or use tag for tagged fetches |
| `indexnow=1` | Also notify IndexNow (Bing/Yandex) of the change |

### Example

```bash
# Revalidate single location page
curl -X POST "https://www.probaterealestatesales.com/api/revalidate?secret=YOUR_SECRET&path=/locations/henderson/"

# Revalidate all locations
curl -X POST "https://www.probaterealestatesales.com/api/revalidate?secret=YOUR_SECRET&path=/locations/"
```

## Environment

Set in Vercel / deployment:

```
REVALIDATION_SECRET=your-secure-random-string
```

## Webhook Setup (RealScout / MLS)

When new listings hit your feed, call the revalidation API:

1. **RealScout webhook** (if supported) – configure to POST to `/api/revalidate`
2. **Cron job** – run every N minutes to revalidate listing pages
3. **Manual** – trigger after bulk import

## Pages with ISR

- Location pages: `revalidate = 3600` (1 hour)
- On-demand: call API when listings update
