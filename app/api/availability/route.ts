import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { hostId, date } = body;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hosts/${hostId}/${body.slug}/availability`,
      {
        method: "GET"
      }
    );

    const json = await res.json();
    return NextResponse.json(json);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}