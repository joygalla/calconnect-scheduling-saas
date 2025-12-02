"use client";

import ServiceCard from "./ServiceCard";

export default function ServiceList({ services }: { services: any[] }) {
  if (!services || services.length === 0)
    return <p style={{ marginTop: "20px" }}>No services found.</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      {services.map((s) => (
        <ServiceCard
          key={s.id}
          name={s.name}
          duration={s.duration}
          price={s.price}
        />
      ))}
    </div>
  );
}