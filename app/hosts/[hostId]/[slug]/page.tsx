"use client";

import { useEffect, useState } from "react";
import CalendarGrid from "@/components/CalendarGrid";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import TimeZoneSelector from "@/components/TimeZoneSelector";

export default function HostBookingPage({ params }: any) {
  const { hostId, slug } = params;

  const [host, setHost] = useState<any>(null);
  const [availability, setAvailability] = useState<any>({});
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("UTC");
  const [loading, setLoading] = useState(true);

  // FETCH HOST DATA + AVAILABILITY
  const loadData = async () => {
    setLoading(true);

    const hostRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hosts/${hostId}/${slug}`
    );
    const hostJson = await hostRes.json();

    const availRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hosts/${hostId}/${slug}/availability`
    );
    const availJson = await availRes.json();

    setHost(hostJson);
    setAvailability(availJson.availability || {});
    setTimezone(hostJson.timezone || "UTC");

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const bookNow = async () => {
    if (!selectedDate || !selectedTime) {
      alert("Select a date & time");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/hosts/${hostId}/${slug}/schedule`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate,
          time: selectedTime,
          fullName: "Client Name",
          email: "client@email.com"
        })
      }
    );

    const json = await res.json();
    if (json.success) alert("Booking created!");
    else alert(json.error);
  };

  if (loading)
    return (
      <div style={{ padding: 20, fontSize: 20 }}>
        Loading host…
      </div>
    );

  return (
    <div style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 10 }}>
        Book with {host.firstName} {host.lastName}
      </h1>

      <TimeZoneSelector timezone={timezone} setTimezone={setTimezone} />

      <CalendarGrid
        availability={availability}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />

      {selectedDate && (
        <TimeSlotPicker
          selectedDate={selectedDate}
          availability={availability}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}

      <button
        onClick={bookNow}
        style={{
          marginTop: 30,
          padding: "14px 20px",
          background: "#4A3AFF",
          color: "white",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Confirm Booking
      </button>
    </div>
  );
}