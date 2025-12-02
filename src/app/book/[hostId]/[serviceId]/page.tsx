"use client";

import { useEffect, useState } from "react";
import BookingCalendar from "@/components/BookingCalendar";
import BookingForm from "@/components/BookingForm";
import BookingTimeSlots from "@/components/BookingTimeSlots";
import { getServiceById } from "@/lib/servicesService";
import { getHostById } from "@/lib/hostService";

export default function BookServicePage({ params }: any) {
  const { hostId, serviceId } = params;

  const [service, setService] = useState<any>(null);
  const [host, setHost] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      const s = await getServiceById(serviceId);
      const h = await getHostById(hostId);
      setService(s);
      setHost(h);
    };
    load();
  }, [serviceId, hostId]);

  if (!service || !host) {
    return (
      <div className="p-6">
        <p>Loading booking page...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">{service.name}</h1>

      <BookingCalendar
        hostId={hostId}
        serviceId={serviceId}
        onDateSelect={setSelectedDate}
      />

      {selectedDate && (
        <BookingTimeSlots
          hostId={hostId}
          serviceId={serviceId}
          date={selectedDate}
        />
      )}

      <BookingForm
        hostId={hostId}
        serviceId={serviceId}
        selectedDate={selectedDate}
      />
    </div>
  );
}