"use client";

import GoogleCalendarCard from "../../../components/GoogleCalendarCard";
import WeeklyTemplateCard from "../../../components/WeeklyTemplateCard";

export default function SettingsPage() {
  const hostId = "HOST123"; // Replace with real auth later

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>Settings</h1>

      <GoogleCalendarCard hostId={hostId} />

      <WeeklyTemplateCard hostId={hostId} />
    </div>
  );
}