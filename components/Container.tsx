"use client";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: "30px",
        marginLeft: "240px", // accounts for sidebar
        minHeight: "100vh",
        background: "#f8f8fb"
      }}
    >
      {children}
    </div>
  );
}