"use client";

export default function PageTitle({ title }: { title: string }) {
  return (
    <h1
      style={{
        fontSize: "28px",
        fontWeight: 600,
        marginBottom: "20px"
      }}
    >
      {title}
    </h1>
  );
}