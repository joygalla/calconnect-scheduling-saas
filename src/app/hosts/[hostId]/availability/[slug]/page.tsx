"use client";

import { useEffect, useState } from "react";
import CalendarGrid from "@/components/CalendarGrid";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import TimeZoneSelector from "@/components/TimeZoneSelector";
import { getAvailabilityBySlug } from "@/lib/availabilityService";

export default function AvailabilitySlugPage({ params }: any) {
  const { hostId, slug } = params;

  const [availability, setAvailability] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getAvailabilityBySlug(hostId, slug);
      setAvailability(data);
      setLoading(false);
    };
    load();
  }, [hostId, slug]);

  if (loading) {
    return (
      <div className="p-6">
        <p>Loading availability...</p>
      </div>
    );
  }

  if (!availability) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-semibold text-red-600">
          Availability not found.
        </h1>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <TimeZoneSelector />
      <CalendarGrid availability={availability} />
      <TimeSlotPicker availability={availability} />
    </div>
  );
}