"use client";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        marginLeft: "220px",
        padding: "90px 40px 40px",
        minHeight: "100vh",
        background: "#f8f8fb"
      }}
    >
      {children}
    </div>
  );
}