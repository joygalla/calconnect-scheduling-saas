"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ConfirmationPage() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bookingId) {
      setError("Missing booking ID.");
      setLoading(false);
      return;
    }

    async function fetchBooking() {
      try {
        const res = await fetch(`/api/bookings/${bookingId}`);
        const data = await res.json();

        if (!data.success) throw new Error(data.error);
        setBooking(data.booking);
      } catch (err: any) {
        setError(err.message || "Failed to load booking details.");
      } finally {
        setLoading(false);
      }
    }

    fetchBooking();
  }, [bookingId]);

  if (loading) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Loading your confirmation...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: 40 }}>
        <h2 style={{ color: "red" }}>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 60, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
        Booking Confirmed 🎉
      </h1>

      <div
        style={{
          padding: 20,
          border: "1px solid #ccc",
          borderRadius: 8,
          marginBottom: 30,
        }}
      >
        <p>
          <strong>Booking ID:</strong> {booking.id}
        </p>
        <p>
          <strong>Host:</strong> {booking.hostName}
        </p>
        <p>
          <strong>Client:</strong> {booking.clientName}
        </p>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(booking.datetime).toLocaleDateString()}
        </p>
        <p>
          <strong>Time:</strong>{" "}
          {new Date(booking.datetime).toLocaleTimeString()}
        </p>
      </div>

      <a
        href="/"
        style={{
          padding: "10px 20px",
          background: "#0070f3",
          color: "white",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Return Home
      </a>
    </div>
  );
}