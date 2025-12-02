"use client";

import DashboardCard from "./DashboardCard";

export default function DashboardGrid() {
  const stats = [
    { title: "Total Bookings", value: 42 },
    { title: "Active Hosts", value: 6 },
    { title: "Services Offered", value: 18 }
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px",
        flexWrap: "wrap"
      }}
    >
      {stats.map((s, i) => (
        <DashboardCard key={i} title={s.title} value={s.value} />
      ))}
    </div>
  );
}