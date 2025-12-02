"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import BookingCalendar from "@/components/BookingCalendar";
import BookingTimeSlots from "@/components/BookingTimeSlots";
import BookingSummary from "@/components/BookingSummary";
import { getAvailability, scheduleBooking } from "@/services/bookingService";

export default function BookingPage() {
  const { hostId, slug } = useParams();
  const router = useRouter();

  const [host, setHost] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [slots, setSlots] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [duration, setDuration] = useState(30);
  const [loading, setLoading] = useState(false);

  // Step 1 — Load host & default availability
  useEffect(() => {
    async function load() {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE;
      const hostRes = await fetch(`${baseUrl}/hosts/${hostId}/${slug}`);
      const data = await hostRes.json();
      setHost(data);
    }
    load();
  }, [hostId, slug]);

  // Step 2 — when date is selected, load time slots
  useEffect(() => {
    if (!selectedDate) return;

    async function loadSlots() {
      const list = await getAvailability(hostId, slug, selectedDate);
      setSlots(list);
    }
    loadSlots();
  }, [selectedDate, hostId, slug]);

  const handleContinue = async (fullName: string, email: string) => {
    setLoading(true);

    const result = await scheduleBooking({
      hostId,
      slug,
      fullName,
      email,
      date: selectedDate,
      time: selectedTime,
      duration,
    });

    router.push(`/book/${hostId}/${slug}/confirm?bookingId=${result.bookingId}`);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 28, fontWeight: 600 }}>
        Book with {host?.firstName} {host?.lastName}
      </h1>

      {/* STEP 1: SELECT DATE */}
      <BookingCalendar onSelectDate={setSelectedDate} />

      {/* STEP 2: SELECT TIME */}
      {selectedDate ? (
        <BookingTimeSlots
          slots={slots}
          selected={selectedTime}
          onSelect={setSelectedTime}
        />
      ) : null}

      {/* STEP 3: SUMMARY + DETAILS FORM */}
      {selectedTime ? (
        <BookingSummary
          date={selectedDate}
          time={selectedTime}
          loading={loading}
          onContinue={handleContinue}
        />
      ) : null}
    </div>
  );
}