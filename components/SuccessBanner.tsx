"use client";

export default function SuccessBanner({ message }: { message: string }) {
  if (!message) return null;

  return (
    <div
      style={{
        padding: "12px",
        background: "#e0ffe4",
        color: "#087a2f",
        borderRadius: "8px",
        marginBottom: "20px"
      }}
    >
      {message}
    </div>
  );
}