"use client";

export default function ErrorBanner({ message }: { message: string }) {
  if (!message) return null;

  return (
    <div
      style={{
        padding: "12px",
        background: "#ffdbdb",
        color: "#b40000",
        borderRadius: "8px",
        marginBottom: "20px"
      }}
    >
      {message}
    </div>
  );
}