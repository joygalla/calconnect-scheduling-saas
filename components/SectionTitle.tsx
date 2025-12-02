"use client";

export default function SectionTitle({ children }: { children: string }) {
  return (
    <h2
      style={{
        fontSize: "22px",
        fontWeight: 600,
        margin: "25px 0 10px"
      }}
    >
      {children}
    </h2>
  );
}