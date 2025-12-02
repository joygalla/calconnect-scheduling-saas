"use client";

import { useState, useEffect } from "react";
import WeeklyTimeRow from "./WeeklyTimeRow";

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function WeeklyTemplateEditor({ hostId }: any) {
  const [template, setTemplate] = useState<any>({});

  useEffect(() => {
    async function load() {
      const base = process.env.NEXT_PUBLIC_API_BASE;
      const res = await fetch(`${base}/recurring/${hostId}/weekly`);
      const data = await res.json();
      setTemplate(data.weeklyTemplate || {});
    }
    load();
  }, [hostId]);

  const updateSlots = (day: string, slots: string[]) => {
    setTemplate((prev: any) => ({
      ...prev,
      [day]: slots,
    }));
  };

  const saveTemplate = async () => {
    const base = process.env.NEXT_PUBLIC_API_BASE;

    await fetch(`${base}/recurring/${hostId}/weekly`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weeklyTemplate: template }),
    });

    alert("Weekly template saved!");
  };

  const generateDays = async () => {
    const base = process.env.NEXT_PUBLIC_API_BASE;
    await fetch(`${base}/recurring/${hostId}/generate`, { method: "POST" });
    alert("60 days of availability generated!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontSize: 26, fontWeight: 700 }}>Weekly Availability Template</h2>
      <p style={{ marginBottom: 20 }}>
        Set your weekly recurring schedule. This will generate your next 60 days of availability.
      </p>

      {weekdays.map((day) => (
        <WeeklyTimeRow
          key={day}
          label={day}
          slots={template[day] || []}
          onChange={updateSlots}
        />
      ))}

      <button
        onClick={saveTemplate}
        style={{
          marginTop: 20,
          padding: "12px 16px",
          background: "#4A3AFF",
          color: "white",
          borderRadius: 6,
          border: "none",
        }}
      >
        Save Weekly Template
      </button>

      <button
        onClick={generateDays}
        style={{
          marginLeft: 10,
          padding: "12px 16px",
          background: "#0B8A00",
          color: "white",
          borderRadius: 6,
          border: "none",
        }}
      >
        Generate 60 Days
      </button>
    </div>
  );
}