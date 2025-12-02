"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useAuthUser } from "@/hooks/useAuthUser";

export default function TopNav() {
  const router = useRouter();
  const user = useAuthUser();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/login");

      setTimeout(() => {
        window.location.href = "/login";
      }, 50);
    } catch (err) {
      console.error(err);
    }
  };

  // fallback name (in case displayName is empty)
  const displayName =
    user?.displayName ||
    user?.email?.split("@")[0] || // e.g. joygalla123 → "joygalla123"
    "User";

  return (
    <div
      style={{
        width: "100%",
        padding: "15px 20px",
        background: "#ffffff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <h2 style={{ margin: 0 }}>CalConnect</h2>

      {user && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 500 }}>
            {displayName}
          </span>

          <button
            onClick={handleLogout}
            style={{
              background: "#e74c3c",
              color: "white",
              padding: "8px 14px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
