"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface WeeklyTemplate {
  id: string;
  name: string;
  days: Record<string, string[]>;
  createdAt: number;
}

export default function WeeklyTemplateListPage() {
  const [templates, setTemplates] = useState<WeeklyTemplate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTemplates() {
      try {
        const res = await fetch("/api/availability/weekly");
        const data = await res.json();
        setTemplates(data.templates || []);
      } catch (e) {
        console.error("Failed to load templates", e);
      }
      setLoading(false);
    }
    loadTemplates();
  }, []);

  if (loading) {
    return <div className="p-6 text-gray-500">Loading weekly templates…</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Weekly Templates</h1>

        <Link
          href="/dashboard/weekly-templates/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Create New Template
        </Link>
      </div>

      {templates.length === 0 && (
        <div className="text-gray-500">No templates yet. Create your first one.</div>
      )}

      <div className="space-y-4">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className="border rounded-lg p-4 flex justify-between items-center bg-white shadow-sm"
          >
            <div>
              <h2 className="text-xl font-semibold">{tpl.name}</h2>
              <p className="text-gray-500 text-sm">
                Created: {new Date(tpl.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href={`/dashboard/weekly-templates/${tpl.id}/view`}
                className="px-3 py-1 border rounded-lg"
              >
                View
              </Link>

              <Link
                href={`/dashboard/weekly-templates/${tpl.id}/edit`}
                className="px-3 py-1 rounded-lg bg-blue-600 text-white"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}