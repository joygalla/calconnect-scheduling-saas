const API_BASE = "http://localhost:5001";

/* -----------------------------------------------------------
   GET Weekly Template
------------------------------------------------------------ */
export async function getWeeklyTemplate(hostId: string) {
  const res = await fetch(`${API_BASE}/availability/${hostId}/weekly`);
  return res.json();
}

/* -----------------------------------------------------------
   SAVE Weekly Template
------------------------------------------------------------ */
export async function saveWeeklyTemplate(
  hostId: string,
  template: Record<string, string[]>
) {
  const res = await fetch(`${API_BASE}/availability/${hostId}/weekly`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ template }),
  });

  return res.json();
}