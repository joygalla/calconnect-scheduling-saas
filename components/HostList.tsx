"use client";

import HostCard from "./HostCard";

export default function HostList({ hosts }: { hosts: any[] }) {
  if (!hosts || hosts.length === 0)
    return <p style={{ marginTop: "20px" }}>No hosts found.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      {hosts.map((h) => (
        <HostCard
          key={h.id}
          id={h.id}
          slug={h.slug}
          name={h.name}
          timezone={h.timezone}
        />
      ))}
    </div>
  );
}