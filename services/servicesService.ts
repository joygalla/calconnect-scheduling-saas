// services/servicesService.ts

import { API_BASE } from "@/config/index";

export type ServicePayload = {
  hostId: string;            // host owning the service
  name: string;
  price: number;
  durationMinutes?: number;  // used by onboarding/services page
  duration?: number;         // used by hosts/[hostId]/services page
  description?: string;
};

/**
 * Get all services for a given host.
 */
export async function getServicesByHost(hostId: string) {
  const res = await fetch(`${API_BASE}/services/${hostId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

/**
 * Create a new service for a host.
 *
 * Expects the payload to already contain `hostId`.
 */
export async function createService(service: ServicePayload) {
  const res = await fetch(`${API_BASE}/services/${service.hostId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(service),
  });

  if (!res.ok) {
    throw new Error("Failed to create service");
  }

  return res.json();
}