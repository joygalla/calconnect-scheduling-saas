"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useParams, useRouter } from "next/navigation";
import { confirmBooking } from "@/services/bookingService";

export default function ConfirmBookingPage() {
  const search = useSearchParams();
  const bookingId = search.get("bookingId");
  const router = useRouter();
  const { hostId, slug } = useParams();

  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);

    await confirmBooking(bookingId as string);

    router.push(`/book/${hostId}/${slug}/success`);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: 600 }}>Confirm Your Booking</h1>

      <p style={{ marginTop: 20 }}>
        Your booking is ready. Click confirm to finalize the appointment.
      </p>

      <button
        onClick={handleConfirm}
        disabled={loading}
        style={{
          marginTop: 20,
          padding: "12px 18px",
          background: "#4A3AFF",
          color: "#fff",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Saving..." : "Confirm Booking"}
      </button>
    </div>
  );
}