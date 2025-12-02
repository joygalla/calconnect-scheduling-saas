"use client";

export default function AvailabilityMain() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: 600 }}>Availability</h1>

      <ul style={{ marginTop: 20 }}>
        <li><a href="/dashboard/availability/weekly">Weekly Template</a></li>
        <li><a href="/availability/HOST123/onyx">Daily Availability</a></li>
      </ul>
    </div>
  );
}