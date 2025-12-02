"use client";

import { useRouter } from "next/navigation";

export default function TimeSlots({ slots, hostId, slug, date }) {
  const router = useRouter();

  const book = (time) => {
    router.push(`/book/${hostId}/${slug}?date=${date}&time=${time}`);
  };

  if (!slots || slots.length === 0) {
    return <p className="text-gray-500">No available times for this date.</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => book(slot)}
          className="p-2 border rounded hover:bg-blue-200"
        >
          {slot}
        </button>
      ))}
    </div>
  );
}