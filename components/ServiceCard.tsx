"use client";

interface ServiceCardProps {
  name: string;
  duration: number;
  price: number;
}

export default function ServiceCard({ name, duration, price }: ServiceCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "18px",
        borderRadius: "14px",
        boxShadow: "0 4px 22px rgba(0,0,0,0.06)",
        marginBottom: "18px"
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          fontWeight: 600,
          marginBottom: "6px"
        }}
      >
        {name}
      </h3>

      <p style={{ fontSize: "14px", color: "#666" }}>
        Duration: {duration} minutes
      </p>

      <p style={{ fontSize: "14px", color: "#666", marginTop: "4px" }}>
        Price: ${price}
      </p>
    </div>
  );
}