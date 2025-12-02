"use client";

export default function PageHeader({ title }: { title: string }) {
  return (
    <h1
      style={{
        fontSize: "28px",
        fontWeight: 600,
        marginBottom: "25px"
      }}
    >
      {title}
    </h1>
  );
}