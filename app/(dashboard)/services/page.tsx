"use client";

import { useEffect, useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/services");
        const data = await res.json();
        setServices(data || []);
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <div style={{ padding: 40 }}>Loading services…</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Your Services</h1>

      {services.length === 0 && <p>No services found.</p>}

      <ul>
        {services.map((s) => (
          <li key={s.id}>{s.name}</li>
        ))}
      </ul>
    </div>
  );
}