"use client";

import { useEffect, useState } from "react";
import { listAllBookings } from "@/services/bookingsService";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await listAllBookings();
        setBookings(data || []);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Bookings</h1>

      {bookings.length === 0 ? (
        <div>No bookings found.</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {bookings.map((b, idx) => (
            <li
              key={idx}
              style={{
                padding: "16px",
                border: "1px solid #ccc",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            >
              <p>
                <strong>Name:</strong> {b.clientName}
              </p>
              <p>
                <strong>Date:</strong> {b.date}
              </p>
              <p>
                <strong>Time:</strong> {b.time}
              </p>
              <p>
                <strong>Status:</strong> {b.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}