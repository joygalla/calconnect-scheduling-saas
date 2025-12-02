import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

const CLOUD_RUN_URL = process.env.CLOUD_RUN_URL!;

// Load service account key from env var (Vercel-safe)
const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountJson) {
  throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_KEY env var");
}

const auth = new GoogleAuth({
  credentials: JSON.parse(serviceAccountJson),
});

async function callBackend(path: string, options: any = {}) {
  const client = await auth.getIdTokenClient(CLOUD_RUN_URL);
  const url = `${CLOUD_RUN_URL}${path}`;
  const res = await client.request({
    url,
    method: options.method || "GET",
    data: options.body,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  return res;
}

export async function GET() {
  try {
    const res = await callBackend("/api/users");
    return NextResponse.json(res.data, { status: res.status });
  } catch (err: any) {
    console.error("Proxy GET /api/users error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Proxy error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await callBackend("/api/users", {
      method: "POST",
      body,
    });
    return NextResponse.json(res.data, { status: res.status });
  } catch (err: any) {
    console.error("Proxy POST /api/users error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Proxy error" },
      { status: 500 }
    );
  }
}
