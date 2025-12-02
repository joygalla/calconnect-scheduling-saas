"use client";

import { useState, useEffect } from "react";
import { checkGoogleStatus, getGoogleAuthUrl } from "../services/googleCalendarService";

export default function GoogleCalendarCard({ hostId }: { hostId: string }) {
  const [connected, setConnected] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  // Check if already connected
  useEffect(() => {
    async function loadStatus() {
      const status = await checkGoogleStatus(hostId);
      setConnected(status.connected);
      setLoading(false);
    }
    loadStatus();
  }, [hostId]);

  const connectGoogle = async () => {
    const url = await getGoogleAuthUrl(hostId);
    if (url) window.location.href = url;
  };

  if (loading)
    return (
      <div style={{ padding: 20, background: "#fafafa", borderRadius: 10 }}>
        Checking Google Calendar…
      </div>
    );

  return (
    <div
      style={{
        background: "white",
        padding: 24,
        borderRadius: 12,
        border: "1px solid #ddd",
        marginBottom: 20,
      }}
    >
      <h2 style={{ marginBottom: 10, fontSize: 20 }}>
        Google Calendar Integration
      </h2>

      {connected ? (
        <div
          style={{
            padding: 12,
            background: "#dfffe0",
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          ✔ Google Calendar is Connected
        </div>
      ) : (
        <div
          style={{
            padding: 12,
            background: "#fff3cd",
            borderRadius: 6,
            marginBottom: 10,
          }}
        >
          Not connected
        </div>
      )}

      {!connected && (
        <button
          onClick={connectGoogle}
          style={{
            background: "#4285F4",
            color: "white",
            padding: "12px 16px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
          }}
        >
          Connect Google Calendar
        </button>
      )}

      {connected && (
        <div style={{ marginTop: 10 }}>
          Your bookings will be synced to Google Calendar.
        </div>
      )}
    </div>
  );
}