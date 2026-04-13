# Vercel secret rotation and redeploys

Use this checklist when security tooling asks you to **rotate secrets** or after **dependency upgrades** that need a fresh production deploy.

## This project (`probaterealestatesales` / this repo)

### 1. Secrets used by the app

| Variable | Purpose |
| -------- | ------- |
| `CRON_SECRET` | `Authorization: Bearer …` on `GET /api/cron` (see `vercel.json` crons). Must be ≥16 characters. |
| `REVALIDATION_SECRET` | Query `secret=` on `POST /api/revalidate` and `POST /api/indexnow`. |

Set both in **Vercel → Project → Settings → Environment Variables** for Production (and Preview/Development if you use those URLs).

### 2. Rotating values (dashboard)

1. Generate new random strings (e.g. `openssl rand -hex 24` twice, or a password manager).
2. In Vercel, **replace** `CRON_SECRET` and `REVALIDATION_SECRET` with the new values (same variable names).
3. **Vercel Cron:** Secured cron requests use the project’s `CRON_SECRET` per [Vercel cron security](https://vercel.com/docs/cron-jobs#securing-cron-jobs). After rotation, confirm the next scheduled run succeeds (or trigger a one-off test request with the new Bearer token).
4. **Update any automation** that calls:

   - `/api/revalidate?secret=…`
   - `/api/indexnow?secret=…`

   See [ISR-REVALIDATION.md](./ISR-REVALIDATION.md) and [INDEXNOW.md](./INDEXNOW.md).

5. **Redeploy** Production (Deployments → ⋮ → Redeploy) so all serverless instances pick up new env. Pushing to `main` also triggers a deploy if Git integration is enabled.

### 3. Local development

Copy [.env.example](../.env.example) to `.env.local` and fill `CRON_SECRET` and `REVALIDATION_SECRET` for local testing of API routes. Never commit real secrets.

---

## Other Vercel projects (e.g. `lone-mountain-homes-fx1b`)

Rotation is **per project** in the Vercel dashboard:

1. Open the target project (name shown on the Vercel dashboard).
2. **Settings → Environment Variables:** rotate API keys, database URLs, auth secrets, and any project-specific `CRON_SECRET` / `REVALIDATION_SECRET` as that codebase defines.
3. **Redeploy** production (and preview branches if they rely on those secrets).

No changes in *this* repository affect another project’s environment variables.

---

## After Next.js upgrades

After bumping `next` in [package.json](../package.json), run `npm run build` locally, commit `package-lock.json`, and push so Vercel builds with the patched framework.
