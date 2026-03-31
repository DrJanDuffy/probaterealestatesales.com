import { timingSafeEqual } from 'node:crypto';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Vercel Cron → GET /api/cron (production only; schedule in vercel.json).
 *
 * Security: compare `Authorization: Bearer <CRON_SECRET>` (timing-safe). Set CRON_SECRET
 * in Vercel env (≥16 random chars per Vercel docs).
 *
 * Reliability: Vercel may deliver a cron more than once — keep work **idempotent**. Overlapping
 * invocations can occur if a run exceeds the interval — use a **distributed lock** (e.g. Redis)
 * if you must serialize runs.
 *
 * @see https://vercel.com/docs/cron-jobs/manage-cron-jobs#securing-cron-jobs
 */
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function isAuthorizedCronRequest(authHeader: string | null, secret: string | undefined): boolean {
  if (!secret || secret.length < 16) {
    return false;
  }
  const expected = `Bearer ${secret}`;
  if (!authHeader || authHeader.length !== expected.length) {
    return false;
  }
  try {
    return timingSafeEqual(Buffer.from(authHeader, 'utf8'), Buffer.from(expected, 'utf8'));
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get('authorization');

  if (!secret) {
    console.error('[cron] CRON_SECRET is not set');
    return NextResponse.json({ error: 'Misconfigured' }, { status: 500 });
  }

  if (secret.length < 16) {
    console.error('[cron] CRON_SECRET should be at least 16 characters (Vercel recommendation)');
    return NextResponse.json({ error: 'Misconfigured' }, { status: 500 });
  }

  if (!isAuthorizedCronRequest(auth, secret)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Add scheduled work here (revalidateTag, IndexNow batch, etc.). Keep idempotent.

  return NextResponse.json({
    ok: true,
    ranAt: new Date().toISOString(),
  });
}
