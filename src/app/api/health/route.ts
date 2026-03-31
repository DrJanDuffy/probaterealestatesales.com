import { NextResponse } from 'next/server';

/** GET /api/health — lightweight probe for uptime monitors and load balancers */
export async function GET() {
  return NextResponse.json({ ok: true });
}
