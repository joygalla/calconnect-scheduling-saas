import { API_BASE } from "@/config/index";

export async function getUserById(userId: string) {
  const res = await fetch(`${API_BASE}/users/${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) return null;
  return await res.json();
}