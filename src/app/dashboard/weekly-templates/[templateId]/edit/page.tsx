"use client";

import { useEffect, useState } from "react";
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

export default function EditWeeklyTemplatePage({ params }: any) {
  const router = useRouter();
  const { templateId } = params;

  const [name, setName] = useState("");
  const [days, setDays] = useState<Record<string, string[]>>({});

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/availability/weekly/${templateId}`);
      const data = await res.json();
      if (data.template) {
        setName(data.template.name);
        setDays(data.template.days);
      }
    }
    load();
  }, [templateId]);

  const updateDay = (day: string, slots: string) => {
    setDays({
      ...days,
      [day]: slots.split(",").map((s) => s.trim()),
    });
  };

  const saveTemplate = async () => {
    const res = await fetch(`/api/availability/weekly/${templateId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, days }),
    });

    if (res.ok) {
      router.push("/dashboard/weekly-templates");
    } else {
      alert("Failed to update template");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Weekly Template</h1>

      <label className="block mb-4">
        <span className="font-semibold">Template Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg w-full p-2 mt-1"
        />
      </label>

      <div className="space-y-4">
        {DAYS.map((day) => (
          <div key={day}>
            <h2 className="font-semibold capitalize">{day}</h2>
            <input
              className="border rounded-lg w-full p-2"
              defaultValue={(days[day] || []).join(", ")}
              onChange={(e) => updateDay(day, e.target.value)}
            />
          </div>
        ))}
      </div>

      <button
        onClick={saveTemplate}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg"
      >
        Update Template
      </button>
    </div>
  );
}