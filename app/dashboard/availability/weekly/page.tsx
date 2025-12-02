"use client";

import WeeklyTemplateEditor from "@/components/WeeklyTemplateEditor";

export default function WeeklyPage() {
  const hostId = "HOST123"; // temp until auth ready

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 30, fontWeight: 700 }}>Weekly Template</h1>
      <WeeklyTemplateEditor hostId={hostId} />
    </div>
  );
}