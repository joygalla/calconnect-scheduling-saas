"use client";

import { useState } from "react";

export default function BufferSettings({ hostId }: any) {
  const [buffer, setBuffer] = useState(0);
  const [times, setTimes] = useState("");

  const save = async () => {
    const payload = {
      buffer: Number(buffer),
      times: times
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
        .map((t) => ({ time: t, duration: 30 })),
    };

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/buffer/${hostId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("Saved!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ fontSize: 20 }}>Buffer & Blocked Times</h2>

      <label>Buffer (minutes)</label>
      <input
        type="number"
        value={buffer}
        onChange={(e) => setBuffer(e.target.value)}
        style={{ width: "100%", padding: 10, marginBottom: 20 }}
      />

      <label>Blocked Times (comma separated)</label>
      <input
        type="text"
        value={times}
        onChange={(e) => setTimes(e.target.value)}
        placeholder="09:00, 13:30, 15:00"
        style={{ width: "100%", padding: 10 }}
      />

      <button
        onClick={save}
        style={{
          marginTop: 20,
          padding: "12px 18px",
          background: "#4A3AFF",
          color: "white",
          borderRadius: 8,
        }}
      >
        Save
      </button>
    </div>
  );
}