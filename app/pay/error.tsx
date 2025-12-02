"use client";

export default function PayError({ error }: { error: Error }) {
  return (
    <div
      style={{
        padding: "30px",
        background: "#ffe5e5",
        borderRadius: "12px",
        color: "red"
      }}
    >
      <h2>Error Loading Payment Page</h2>
      <p>{error.message}</p>
    </div>
  );
}