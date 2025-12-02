"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f8ff",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Welcome to CalConnect
      </h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link
          href="/login"
          style={{
            background: "#4a3aff",
            padding: "12px 26px",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>

        <Link
          href="/signup"
          style={{
            background: "#222",
            padding: "12px 26px",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}