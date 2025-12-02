"use client";

import Spinner from "@/components/Spinner";

export default function WeeklyLoading() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Spinner />
      <p style={{ marginTop: "12px", opacity: 0.7 }}>Loading weekly…</p>
    </div>
  );
}