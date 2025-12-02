"use client";

import WeeklyTemplateEditor from "@/components/WeeklyTemplateEditor";

export default function WeeklyTemplatePage() {
  const hostId = "HOST123"; // Replace with real auth

  return (
    <div style={{ padding: 40 }}>
      <WeeklyTemplateEditor hostId={hostId} />
    </div>
  );
}