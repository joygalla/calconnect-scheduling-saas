"use client";

import React, { useState } from "react";

export default function PaymentButton({ amount }: { amount: number }) {
  const [loading, setLoading] = useState(false);

  async function handlePay() {
    setLoading(true);

    try {
      const res = await fetch("/api/pay", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      if (!data.url) {
        alert("Failed to start checkout.");
        return;
      }

      window.location.href = data.url;
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      style={{
        padding: "14px 20px",
        background: "#4a3aff",
        color: "white",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        width: "100%",
        fontSize: "16px",
      }}
      onClick={handlePay}
      disabled={loading}
    >
      {loading ? "Processing..." : `Pay $${amount / 100}`}
    </button>
  );
}