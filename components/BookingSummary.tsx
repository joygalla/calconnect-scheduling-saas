"use client";

import { useState } from "react";

export default function BookingSummary({
  date,
  time,
  onContinue,
  loading,
}: any) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ marginTop: 40 }}>
      <h3>Enter your details</h3>

      <div style={{ marginTop: 15 }}>
        <input
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{ padding: 10, width: "100%", marginBottom: 10 }}
        />

        <input
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: 10, width: "100%", marginBottom: 10 }}
        />
      </div>

      <button
        onClick={() => onContinue(fullName, email)}
        disabled={loading}
        style={{
          padding: "12px 18px",
          background: "#4A3AFF",
          color: "#fff",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          marginTop: 10,
        }}
      >
        {loading ? "Saving..." : "Continue"}
      </button>
    </div>
  );
}