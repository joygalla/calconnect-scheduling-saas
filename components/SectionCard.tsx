"use client";

export default function SectionCard({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 6px 22px rgba(0,0,0,0.06)",
        marginBottom: "25px"
      }}
    >
      {children}
    </div>
  );
}