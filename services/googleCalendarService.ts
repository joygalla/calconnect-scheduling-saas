// services/googleCalendarService.ts

const API_BASE = "http://localhost:5001";

// 1. Check if host already connected
export async function checkGoogleStatus(hostId: string) {
  const res = await fetch(`${API_BASE}/google/status/${hostId}`);
  return res.json();
}

// 2. Get Google auth URL
export async function getGoogleAuthUrl(hostId: string) {
  const res = await fetch(`${API_BASE}/google/auth/${hostId}`);
  const data = await res.json();
  return data.url;
}

// 3. Send OAuth callback code to backend
export async function sendOAuthCode(code: string, hostId: string) {
  const res = await fetch(`${API_BASE}/google/callback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code, hostId }),
  });

  return res.json();
}