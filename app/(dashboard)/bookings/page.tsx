"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Link from "next/link";

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBookings() {
      try {
        const hostId = localStorage.getItem("hostId");
        if (!hostId) return;

        const res = await axios.get(`/bookings/host/${hostId}`);
        setBookings(res.data.bookings || []);
      } catch (err) {
        console.error("BOOKINGS LOAD ERROR", err);
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  if (loading)
    return (
      <div className="p-8 text-center text-xl font-semibold">
        Loading bookings...
      </div>
    );

  if (bookings.length === 0)
    return (
      <div className="p-8 text-center text-xl font-semibold">
        No bookings found.
      </div>
    );

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Bookings</h1>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="p-3 text-left">Client</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.bookingId} className="border-b">
                <td className="p-3">{b.clientName}</td>
                <td className="p-3">{b.clientEmail}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">{b.time}</td>
                <td className="p-3 capitalize">{b.status}</td>
                <td className="p-3">
                  <Link
                    href={`/bookings/${b.bookingId}`}
                    className="text-blue-600 hover:underline"
                  >
                    Open
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}