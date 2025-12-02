"use client";

export default function DashboardError({ error }: { error: any }) {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>
        Something went wrong
      </h1>

      <p style={{ color: "#555" }}>{error?.message || "Unknown error"}</p>
    </div>
  );
}