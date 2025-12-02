import { API_BASE } from "@/config/index";

export async function getWeeklyTemplate(hostId: string) {
  const res = await fetch(`${API_BASE}/availability/${hostId}/weekly`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) return null;
  return await res.json();
}

export async function saveWeeklyTemplate(hostId: string, template: any) {
  const res = await fetch(`${API_BASE}/availability/${hostId}/weekly`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(template),
  });

  return res.ok;
}