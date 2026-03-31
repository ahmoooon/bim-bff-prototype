import { NextRequest, NextResponse } from 'next/server';

const STRAPI_BASE_URL = process.env.STRAPI_BASE_URL!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get('word') || '';

  const endpoint = `${STRAPI_BASE_URL}/api/bims?populate=*&filters[Word][$containsi]=${encodeURIComponent(
    word
  )}`;

  const strapiRes = await fetch(endpoint, { cache: 'no-store' });
  const data = await strapiRes.json();

  return NextResponse.json(data, { status: 200 });
}
