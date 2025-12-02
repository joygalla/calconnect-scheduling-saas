// components/BookingForm.tsx
"use client";

import { useState } from "react";
import axios from "axios";

export default function BookingForm({
  hostId,
  slug,
  date,
  time,
  onSuccess,
}: {
  hostId: string;
  slug: string;
  date: string;
  time: string;
  onSuccess: (bookingId: string) => void;
}) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitBooking = async () => {
    setError("");
    if (!fullName || !email) {
      setError("Please enter your name and email.");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        `https://api.calconnect.gallaghersresource.com/hosts/${hostId}/${slug}/schedule`,
        {
          fullName,
          email,
          date,
          time,
        }
      );

      if (res.data.success) {
        onSuccess(res.data.bookingId);
      } else {
        setError("Something went wrong.");
      }
    } catch (e: any) {
      setError(
        e.response?.data?.error || "Unable to schedule booking. Try again."
      );
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "white",
      }}
    >
      <h3 style={{ marginBottom: "15px" }}>
        Confirm your booking for:
        <br />
        <strong>
          {date} at {time}
        </strong>
      </h3>

      {error && (
        <div
          style={{
            background: "#ffdddd",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "10px",
            color: "#990000",
          }}
        >
          {error}
        </div>
      )}

      <div style={{ marginBottom: "12px" }}>
        <label>Full Name</label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <button
        onClick={submitBooking}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          background: "#4a3aff",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading ? "Scheduling..." : "Confirm Booking"}
      </button>
    </div>
  );
}