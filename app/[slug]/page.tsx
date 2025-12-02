"use client";

import { useEffect, useState } from "react";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  slug: string; // username+random
};

type Slot = {
  time: string;
  datetime: string;
};

export default function BookingPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(false);

  const [date, setDate] = useState<string>(() => {
    return new Date().toISOString().split("T")[0];
  });

  const [slots, setSlots] = useState<Slot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [bookingMessage, setBookingMessage] = useState<string | null>(null);

  // -----------------------------
  // 1. LOAD HOST USER BY SLUG
  // -----------------------------
  useEffect(() => {
    async function loadUser() {
      try {
        setLoadingUser(true);

        const res = await fetch(`http://localhost:4000/users/slug/${slug}`);
        const data = await res.json();

        if (!data.success || !data.user) {
          setUser(null);
        } else {
          setUser(data.user);
        }
      } catch (err) {
        console.error("Error loading user:", err);
      } finally {
        setLoadingUser(false);
      }
    }

    loadUser();
  }, [slug]);

  // ----------------------------------------
  // 2. LOAD AVAILABLE SLOTS FOR SELECTED DATE
  // ----------------------------------------
  useEffect(() => {
    async function loadSlots() {
      if (!user) return;

      try {
        setLoadingSlots(true);

        const res = await fetch(
          `http://localhost:4000/availability/${user.id}/${date}`
        );
        const data = await res.json();

        if (!res.ok || !data.success) {
          setSlots([]);
        } else {
          setSlots(data.slots);
        }
      } catch (err) {
        console.error("Error loading slots:", err);
      } finally {
        setLoadingSlots(false);
      }
    }

    loadSlots();
  }, [user, date]);

  // ----------------------------------------
  // 3. BOOK SLOT
  // ----------------------------------------
  async function bookSlot(datetime: string) {
    if (!user) return;

    setBookingMessage("Booking...");

    try {
      const res = await fetch("http://localhost:4000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hostId: user.id,
          clientName: "Client",
          datetime,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setBookingMessage("Booking failed.");
      } else {
        setBookingMessage("Booking confirmed!");
      }
    } catch (err) {
      setBookingMessage("Error booking session.");
    }
  }

  // ----------------------------------------
  // UI STARTS HERE
  // ----------------------------------------

  if (loadingUser) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Book a Session with {user.firstName}
      </h1>

      <p style={{ color: "#555", marginBottom: 20 }}>
        {user.firstName} {user.lastName}
      </p>

      {/* Date Picker */}
      <label style={{ fontWeight: "bold" }}>Select a date:</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          padding: "10px",
          marginTop: "8px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <h2 style={{ marginTop: 30, marginBottom: 10 }}>Available Times</h2>

      {loadingSlots ? (
        <p>Loading slots...</p>
      ) : slots.length === 0 ? (
        <p>No available times for this date.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {slots.map((slot) => (
            <button
              key={slot.datetime}
              onClick={() => bookSlot(slot.datetime)}
              style={{
                padding: "12px 18px",
                background: "#0066ff",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {slot.time}
            </button>
          ))}
        </div>
      )}

      {bookingMessage && (
        <p style={{ marginTop: 20, fontWeight: "bold" }}>{bookingMessage}</p>
      )}
    </div>
  );
}