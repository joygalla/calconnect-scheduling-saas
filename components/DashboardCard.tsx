"use client";

interface DashboardCardProps {
  title: string;
  value: string | number;
}

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "14px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        flex: 1,
        minWidth: "220px"
      }}
    >
      <p style={{ fontSize: "14px", color: "#666", marginBottom: "6px" }}>
        {title}
      </p>

      <h3 style={{ fontSize: "26px", fontWeight: 700 }}>{value}</h3>
    </div>
  );
}