import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ test: 'test' });
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  return NextResponse.json(data);
}
