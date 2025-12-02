"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HostLandingPage({ params }: any) {
  const { hostId } = params;

  const [host, setHost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadHost = async () => {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hosts/${hostId}/info`
    );
    const json = await res.json();

    setHost(json);
    setLoading(false);
  };

  useEffect(() => {
    loadHost();
  }, []);

  if (loading)
    return (
      <div style={{ padding: 40 }}>
        Loading host…
      </div>
    );

  if (!host)
    return (
      <div style={{ padding: 40 }}>
        Host not found.
      </div>
    );

  return (
    <div style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32 }}>
        {host.firstName} {host.lastName}
      </h1>

      <p style={{ marginTop: 10, color: "#666" }}>
        Book a session with this host.
      </p>

      <Link
        href={`/hosts/${hostId}/${host.slug}`}
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 18px",
          background: "#4A3AFF",
          color: "white",
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        View Availability
      </Link>
    </div>
  );
}