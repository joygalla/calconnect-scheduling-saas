"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function CreateWeeklyTemplatePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [days, setDays] = useState<Record<string, string[]>>({});

  const updateDay = (day: string, slots: string) => {
    setDays({
      ...days,
      [day]: slots.split(",").map((s) => s.trim()),
    });
  };

  const saveTemplate = async () => {
    const res = await fetch("/api/availability/weekly/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, days }),
    });

    if (res.ok) {
      router.push("/dashboard/weekly-templates");
    } else {
      alert("Failed to save template");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Weekly Template</h1>

      <label className="block mb-4">
        <span className="font-semibold">Template Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg w-full p-2 mt-1"
          placeholder="My Default Week"
        />
      </label>

      <div className="space-y-4">
        {DAYS.map((day) => (
          <div key={day}>
            <h2 className="font-semibold capitalize">{day}</h2>
            <input
              className="border rounded-lg w-full p-2"
              placeholder="Example: 09:00, 10:00, 13:30"
              onChange={(e) => updateDay(day, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button
        onClick={saveTemplate}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Save Template
      </button>
    </div>
  );
}