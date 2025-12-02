"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { sendOAuthCode } from "../../../services/googleCalendarService";

export default function GoogleCallbackPage() {
  const params = useSearchParams();
  const router = useRouter();

  const [status, setStatus] = useState("Processing Google login…");

  useEffect(() => {
    const code = params.get("code");
    const hostId = params.get("state"); // If passed as ?state=

    if (!code || !hostId) {
      setStatus("Invalid Google login response.");
      return;
    }

    async function completeAuth() {
      setStatus("Connecting to Google…");

      const result = await sendOAuthCode(code, hostId);

      if (result.success) {
        setStatus("Google Calendar connected! Redirecting…");
        setTimeout(() => router.push("/dashboard"), 1200);
      } else {
        setStatus("Failed to connect Google Calendar.");
      }
    }

    completeAuth();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 22,
        color: "#333",
      }}
    >
      {status}
    </div>
  );
}