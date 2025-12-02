"use client";

export default function Label({ children }: { children: string }) {
  return (
    <label
      style={{
        fontSize: "14px",
        fontWeight: 500,
        display: "block",
        marginBottom: "6px"
      }}
    >
      {children}
    </label>
  );
}