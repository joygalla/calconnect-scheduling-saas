"use client";

import { useEffect, useState } from "react";

export default function BookingConfirmPage({ searchParams, params }: any) {
  const { hostId, slug } = params;
  const bookingId = searchParams.bookingId;

  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const loadBooking = async () => {
    setLoading(true);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${bookingId}`
    );
    const json = await res.json();

    setBooking(json);
    setLoading(false);
  };

  useEffect(() => {
    if (bookingId) loadBooking();
  }, []);

  if (!bookingId)
    return (
      <div style={{ padding: 40 }}>
        Invalid confirmation link.
      </div>
    );

  if (loading)
    return (
      <div style={{ padding: 40 }}>
        Loading booking…
      </div>
    );

  return (
    <div style={{ padding: 40, maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 10 }}>Booking Confirmed</h1>

      <div
        style={{
          marginTop: 20,
          padding: 20,
          background: "#FAFAFF",
          borderRadius: 10,
          border: "1px solid #DDD"
        }}
      >
        <p>
          <strong>Name:</strong> {booking.clientName}
        </p>
        <p>
          <strong>Email:</strong> {booking.clientEmail}
        </p>
        <p>
          <strong>Date:</strong> {booking.date}
        </p>
        <p>
          <strong>Time:</strong> {booking.time}
        </p>
        <p>
          <strong>Host:</strong> {booking.hostName}
        </p>
      </div>

      <p style={{ marginTop: 20 }}>
        A confirmation email has been sent.
      </p>
    </div>
  );
}