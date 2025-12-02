"use client";

import { useState, useEffect } from "react";
import { saveServices, getServices } from "@/lib/services";

export default function ServiceSelector({ hostId }: { hostId: string }) {
  const [services, setServices] = useState<number[]>([]);

  useEffect(() => {
    getServices(hostId).then((s) => setServices(s));
  }, [hostId]);

  function toggle(value: number) {
    if (services.includes(value)) {
      setServices(services.filter((v) => v !== value));
    } else {
      setServices([...services, value]);
    }
  }

  async function save() {
    await saveServices(hostId, services);
    alert("Saved!");
  }

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-xl">Service Duration</h2>

      {[30, 60, 90].map((d) => (
        <label key={d} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={services.includes(d)}
            onChange={() => toggle(d)}
          />
          {d} Minutes
        </label>
      ))}

      <button onClick={save} className="bg-blue-600 text-white px-4 py-2 rounded">
        Save Services
      </button>
    </div>
  );
}