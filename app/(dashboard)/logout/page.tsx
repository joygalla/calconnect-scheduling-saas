"use client";

import { useEffect } from "react";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    async function doLogout() {
      try {
        await signOut(auth);
      } catch (err) {
        console.error(err);
      } finally {
        router.push("/login");
      }
    }

    doLogout();
  }, [router]);

  return (
    <div style={{ padding: 40 }}>
      Logging you out…
    </div>
  );
}