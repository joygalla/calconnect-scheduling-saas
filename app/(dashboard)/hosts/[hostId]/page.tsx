"use client";

import React, { useEffect, useState } from "react";
import { getHostDetails } from "@/services/hostService";
import Link from "next/link";

export default function HostOverviewPage({ params }: any) {
  const { hostId } = params;

  const [host, setHost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHost() {
      try {
        const data = await getHostDetails(hostId);
        setHost(data);
      } catch (err) {
        console.error("Failed loading host details:", err);
      }
      setLoading(false);
    }

    loadHost();
  }, [hostId]);

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading host...</div>;
  }

  if (!host) {
    return <div style={{ padding: "20px" }}>Host not found</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>{host.name}</h1>

      <div style={{ marginBottom: "20px" }}>
        <b>Email:</b> {host.email}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <b>Timezone:</b> {host.timezone}
      </div>

      <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
        <Link
          href={`/hosts/${hostId}/availability`}
          style={{
            padding: "12px 20px",
            background: "#4a3aff",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Manage Availability
        </Link>

        <Link
          href={`/hosts/${hostId}/services`}
          style={{
            padding: "12px 20px",
            background: "#3b82f6",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none"
          }}
        >
          Manage Services
        </Link>
      </div>
    </div>
  );
}