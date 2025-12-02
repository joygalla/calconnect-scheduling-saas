"use client";

import Link from "next/link";

interface HostCardProps {
  id: string;
  slug: string;
  name: string;
  timezone: string;
}

export default function HostCard({ id, slug, name, timezone }: HostCardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
        marginBottom: "20px"
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "6px"
        }}
      >
        {name}
      </h3>

      <p style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>
        Timezone: {timezone}
      </p>

      <Link
        href={`/availability/${id}/${slug}`}
        style={{
          display: "inline-block",
          padding: "10px 16px",
          background: "#4a3aff",
          color: "#fff",
          borderRadius: "8px",
          fontSize: "14px"
        }}
      >
        View Availability
      </Link>
    </div>
  );
}