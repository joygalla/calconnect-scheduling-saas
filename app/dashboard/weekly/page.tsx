"use client";

import WeeklyTemplateEditor from "@/components/WeeklyTemplateEditor";

export default function WeeklyPage() {
  const hostId = "HOST123"; // TODO: replace when auth added

  return (
    <div style={{ padding: 30 }}>
      <WeeklyTemplateEditor hostId={hostId} />
    </div>
  );
}