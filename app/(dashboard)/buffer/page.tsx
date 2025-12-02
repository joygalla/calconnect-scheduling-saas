"use client";

import BufferSettings from "@/components/BufferSettings";

export default function BufferPage() {
  const hostId = "HOST123"; // replace after auth

  return (
    <div style={{ padding: 40 }}>
      <BufferSettings hostId={hostId} />
    </div>
  );
}