"use client";

export default function Spinner() {
  return (
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "4px solid #ddd",
        borderTopColor: "#4a3aff",
        animation: "spin 1s linear infinite",
        margin: "0 auto",
      }}
    />
  );
}