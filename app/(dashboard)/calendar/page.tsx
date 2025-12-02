"use client";

import React, { useEffect, useState } from "react";
import Calendar from "@/components/Calendar";
import { getAllBookings } from "@/services/bookingService";

export default function CalendarMainPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getAllBookings();
        setBookings(data);
      } catch (err) {
        console.error("Error loading bookings:", err);
      }
      setLoading(false);
    }
    load();
  }, []);

  const filteredBookings = bookings.filter((b) => b.date === selectedDate);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Calendar</h1>

      <Calendar selected={selectedDate} onSelect={setSelectedDate} />

      {selectedDate && (
        <div style={{ marginTop: "25px" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
            Bookings for {selectedDate}
          </h2>

          {filteredBookings.length === 0 ? (
            <p>No bookings for this date.</p>
          ) : (
            filteredBookings.map((b) => (
              <div
                key={b.id}
                style={{
                  background: "white",
                  padding: "14px",
                  borderRadius: "10px",
                  marginBottom: "10px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                }}
              >
                <p><b>{b.clientName}</b> – {b.time}</p>
                <p>{b.serviceName}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}