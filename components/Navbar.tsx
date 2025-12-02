"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseClient";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const router = useRouter();

  async function handleLogout() {
    await signOut(auth);
    router.push("/login");
  }

  return (
    <nav
      style={{
        width: "100%",
        padding: "16px 24px",
        background: "white",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      <div
        style={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#4a3aff",
        }}
      >
        CalConnect
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link href="/dashboard" style={{ textDecoration: "none", color: "#444" }}>
          Dashboard
        </Link>

        <Link href="/settings" style={{ textDecoration: "none", color: "#444" }}>
          Settings
        </Link>

        <button
          onClick={handleLogout}
          style={{
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 14px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}