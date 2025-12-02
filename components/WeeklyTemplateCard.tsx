"use client";

import { useEffect, useState } from "react";
import WeeklyTemplateEditor from "./WeeklyTemplateEditor";
import {
  getWeeklyTemplate,
  saveWeeklyTemplate,
} from "../services/recurringAvailabilityService";

export default function WeeklyTemplateCard({ hostId }: { hostId: string }) {
  const [template, setTemplate] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await getWeeklyTemplate(hostId);
      setTemplate(data.template || {});
      setLoading(false);
    }
    load();
  }, [hostId]);

  const save = async (newTemplate: Record<string, string[]>) => {
    await saveWeeklyTemplate(hostId, newTemplate);
    setTemplate(newTemplate);
    setEditing(false);
  };

  if (loading)
    return (
      <div
        style={{
          padding: 20,
          background: "#fafafa",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        Loading weekly template...
      </div>
    );

  return (
    <div
      style={{
        background: "white",
        padding: 24,
        borderRadius: 12,
        border: "1px solid #ddd",
        marginBottom: 20,
      }}
    >
      <h2 style={{ fontSize: 20, marginBottom: 10 }}>
        Weekly Recurring Availability
      </h2>

      {!editing && (
        <>
          {Object.keys(template).length === 0 ? (
            <p style={{ color: "#555" }}>No weekly availability set.</p>
          ) : (
            <ul>
              {Object.keys(template).map((day) => (
                <li key={day} style={{ marginBottom: 6 }}>
                  <strong>{day}:</strong> {template[day].join(", ")}
                </li>
              ))}
            </ul>
          )}

          <button
            onClick={() => setEditing(true)}
            style={{
              marginTop: 10,
              padding: "10px 16px",
              borderRadius: 6,
              background: "#4a3aff",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Edit Weekly Template
          </button>
        </>
      )}

      {editing && (
        <WeeklyTemplateEditor
          template={template}
          onCancel={() => setEditing(false)}
          onSave={save}
        />
      )}
    </div>
  );
}