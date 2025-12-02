"use client";

import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <header
      style={{
        width: "100%",
        background: "white",
        padding: "15px 25px",
        borderBottom: "1px solid #eee",
        position: "fixed",
        left: "220px",
        top: 0,
        height: "60px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        zIndex: 10
      }}
    >
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 16px",
          borderRadius: "8px",
          background: "#ff4d4d",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "14px"
        }}
      >
        Logout
      </button>
    </header>
  );
}