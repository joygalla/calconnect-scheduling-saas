import { API_BASE } from "@/config/index";

export async function createCheckoutSession(data: any) {
  const res = await fetch(`${API_BASE}/payments/checkout-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
}