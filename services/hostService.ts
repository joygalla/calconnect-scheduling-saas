import { API_BASE } from "@/config/index";

export async function getHostDetails(hostId: string) {
  const res = await fetch(`${API_BASE}/hosts/${hostId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });

  if (!res.ok) return null;
  return await res.json();
}

export async function createHost(hostId: string, data: any) {
  const res = await fetch(`${API_BASE}/hosts/${hostId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.ok;
}