"use client";

import { useEffect, useState } from "react";
import Calendar from "@/components/Calendar";
import TimeSlots from "@/components/TimeSlots";
import Spinner from "@/components/Spinner";

export default function PublicAvailabilityPage({ params }) {
  const { hostId, slug } = params;

  const [host, setHost] = useState(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [slotLoading, setSlotLoading] = useState(false);

  /** -----------------------------
   * 1. Load Host Profile
   * ----------------------------- */
  useEffect(() => {
    async function loadHost() {
      try {
        const res = await fetch(
          `http://localhost:5001/hosts/${hostId}/${slug}`
        );

        const data = await res.json();
        if (data.error) {
          setHost("NOT_FOUND");
        } else {
          setHost(data);
        }
      } catch (err) {
        setHost("NOT_FOUND");
      } finally {
        setLoading(false);
      }
    }

    loadHost();
  }, [hostId, slug]);

  /** -----------------------------
   * 2. Load available time slots for date
   * ----------------------------- */
  async function loadSlots(dateString: string) {
    setSelectedDate(dateString);
    setSlotLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5001/availability/${hostId}/${dateString}`
      );
      const data = await res.json();

      if (data.error) {
        setSlots([]);
      } else {
        setSlots(data.slots || []);
      }
    } catch (err) {
      setSlots([]);
    } finally {
      setSlotLoading(false);
    }
  }

  if (loading) return <Spinner />;

  /** -----------------------------
   * HOST NOT FOUND
   * ----------------------------- */
  if (host === "NOT_FOUND") {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Host Not Found</h1>
        <p>This booking link is invalid.</p>
      </div>
    );
  }

  /** -----------------------------
   * MAIN VIEW
   * ----------------------------- */
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Host identity */}
      <h1 className="text-3xl font-bold mb-2">
        Book with {host.firstName} {host.lastName}
      </h1>

      <p className="text-gray-600 mb-8">
        Timezone: <strong>{host.timezone}</strong>
      </p>

      {/* Calendar */}
      <div className="border p-4 rounded-lg mb-6">
        <Calendar onDateSelect={loadSlots} />
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Available Times for {selectedDate}
          </h2>

          {slotLoading ? (
            <Spinner />
          ) : (
            <TimeSlots slots={slots} hostId={hostId} slug={slug} date={selectedDate} />
          )}
        </div>
      )}
    </div>
  );
}