"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function BookingSuccessPage({ params }) {
  const { hostId } = params;
  const search = useSearchParams();
  const bookingId = search.get("bookingId");

  const [booking, setBooking] = useState(null);
  const [host, setHost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        if (!bookingId) return;

        // Load booking
        const b = await axios.get(
          `http://localhost:5001/bookings/${bookingId}`
        );
        setBooking(b.data);

        // Load host info
        const h = await axios.get(`http://localhost:5001/hosts/${hostId}`);
        setHost(h.data);

      } catch (err) {
        console.error("Error fetching booking", err);
      }

      setLoading(false);
    }

    load();
  }, [bookingId, hostId]);

  if (loading) return <div className="p-10 text-xl">Loading confirmation...</div>;

  if (!booking)
    return (
      <div className="p-10 text-red-600 text-xl">
        Booking not found.
      </div>
    );

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Booking Confirmed!
      </h1>

      <div className="bg-white shadow rounded p-6 space-y-4 border">

        <p className="text-lg">
          Thank you <span className="font-semibold">{booking.clientName}</span>!
        </p>

        <p>
          You are booked with{" "}
          <strong>
            {host?.firstName} {host?.lastName}
          </strong>
        </p>

        <div className="border-t pt-4">
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.time}</p>
          <p><strong>Duration:</strong> {booking.duration} minutes</p>
          <p><strong>Email:</strong> {booking.clientEmail}</p>
        </div>

        <div className="pt-6">
          <a
            href={`/hosts/${hostId}/book`}
            className="text-blue-600 underline"
          >
            Book Another Appointment
          </a>
        </div>
      </div>
    </div>
  );
}