"use client";

import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) router.push("/login");
      else setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, [router]);

  if (loading) return <div style={{ padding: 40 }}>Loading…</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Profile</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}