"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function BookingDetailsPage({ params }: any) {
  const { bookingId } = params;
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function fetchBooking() {
    try {
      const res = await axios.get(
        `http://localhost:5001/bookings/${bookingId}`
      );
      setBooking(res.data);
    } catch (err) {
      console.error("Fetch booking error:", err);
      setBooking(null);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchBooking();
  }, [bookingId]);

  if (loading) {
    return (
      <div className="p-6">
        <div className="text-xl">Loading booking...</div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="p-6">
        <div className="text-red-500 text-xl">Booking not found</div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Booking Details</h1>

      <div className="bg-white shadow rounded p-6 space-y-4">

        <div>
          <div className="text-gray-500 text-sm">Client Name</div>
          <div className="text-lg font-medium">{booking.clientName}</div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Client Email</div>
          <div className="text-lg font-medium">{booking.clientEmail}</div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Date</div>
          <div className="text-lg font-medium">{booking.date}</div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Time</div>
          <div className="text-lg font-medium">{booking.time}</div>
        </div>

        <div>
          <div className="text-gray-500 text-sm">Status</div>
          <div className="text-lg font-medium capitalize">{booking.status}</div>
        </div>

      </div>
    </div>
  );
}