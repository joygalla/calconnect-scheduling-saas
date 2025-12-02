// services/bookingsService.ts

import { API_BASE } from "@/config/index";

export type Booking = {
  id: string;
  hostId: string;
  serviceId: string;
  startTime: string;
  endTime: string;
  status?: string;
  [key: string]: any;
};

/**
 * List bookings.
 * - If hostId is provided, fetch bookings for that host.
 * - If no hostId, fetch all bookings (used by /pay/bookings).
 */
export async function listAllBookings(hostId?: string): Promise<Booking[]> {
  const url = hostId
    ? `${API_BASE}/bookings/host/${hostId}`
    : `${API_BASE}/bookings`;

  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}