"use client";

export default function EmptyState({ message }: { message: string }) {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
        color: "#666"
      }}
    >
      <p>{message}</p>
    </div>
  );
}