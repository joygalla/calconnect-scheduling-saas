export async function getAvailability(hostId: string, slug: string, date: string) {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  const res = await fetch(`${base}/hosts/${hostId}/${slug}/availability?date=${date}`);
  const data = await res.json();
  return data.slots || [];
}

export async function scheduleBooking(body: any) {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  const res = await fetch(`${base}/bookings/schedule`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return await res.json();
}

export async function confirmBooking(bookingId: string) {
  const base = process.env.NEXT_PUBLIC_API_BASE;
  await fetch(`${base}/bookings/confirm`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bookingId }),
  });
}