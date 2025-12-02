"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import GoogleCalendarCard from "@/components/GoogleCalendarCard";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const un = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login");
      } else {
        setUser(u);
      }
      setLoading(false);
    });

    return () => un();
  }, [router]);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
        }}
      >
        Loading...
      </div>
    );

  if (!user) return null;

  const hostId = user.uid; // Firebase UID used as host ID

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Welcome, {user.email}
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* GOOGLE CALENDAR CARD */}
          <GoogleCalendarCard hostId={hostId} />

          {/* LINKS */}
          <div
            style={{
              padding: "20px",
              background: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>Navigation</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href="/users"
                style={{
                  padding: "12px 16px",
                  background: "#4a3aff",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Users
              </a>

              <a
                href="/bookings"
                style={{
                  padding: "12px 16px",
                  background: "#4a3aff",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Bookings
              </a>

              <a
                href="/availability"
                style={{
                  padding: "12px 16px",
                  background: "#4a3aff",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Availability
              </a>

              <a
                href="/settings"
                style={{
                  padding: "12px 16px",
                  background: "#4a3aff",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none",
                }}
              >
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}