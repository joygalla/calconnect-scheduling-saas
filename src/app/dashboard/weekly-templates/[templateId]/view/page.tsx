"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface WeeklyTemplate {
  id: string;
  name: string;
  days: Record<string, string[]>;
  createdAt: number;
}

export default function ViewWeeklyTemplate({ params }: any) {
  const { templateId } = params;

  const [template, setTemplate] = useState<WeeklyTemplate | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/availability/weekly/${templateId}`);
      const data = await res.json();
      setTemplate(data.template || null);
    }
    load();
  }, [templateId]);

  if (!template)
    return <div className="p-6 text-gray-500">Loading template…</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{template.name}</h1>

        <Link
          href={`/dashboard/weekly-templates/${templateId}/edit`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Edit
        </Link>
      </div>

      <div className="mt-6 space-y-3">
        {Object.entries(template.days).map(([day, slots]) => (
          <div key={day} className="border p-4 rounded-lg bg-white shadow-sm">
            <h3 className="font-semibold capitalize">{day}</h3>
            <p className="text-gray-500 mt-1">{slots.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}