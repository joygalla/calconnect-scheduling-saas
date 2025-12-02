"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "18px 30px",
        background: "white",
        borderBottom: "1px solid #e6e6e6",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: 600 }}>CalConnect</h1>

      <nav style={{ display: "flex", gap: "20px" }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/users">Users</Link>
        <Link href="/settings">Settings</Link>
      </nav>
    </header>
  );
}