"use client";

import { useState } from "react";
import axios from "axios";
import WeeklyTemplateEditor from "@/components/WeeklyTemplateEditor";

export default function AvailabilityPage() {
  const [message, setMessage] = useState("");

  const generateDays = async () => {
    const hostId = "HOST123"; // Replace with real host

    const res = await axios.post(
      `http://localhost:5001/availability/${hostId}/generate`
    );

    setMessage(res.data.message);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Weekly Template</h1>

      <WeeklyTemplateEditor />

      <button
        onClick={generateDays}
        style={{
          marginTop: 20,
          padding: "10px 18px",
          background: "#4a3aff",
          color: "white",
          borderRadius: 6,
          border: "none",
        }}
      >
        Generate 60 Days Availability
      </button>

      {message && <p style={{ marginTop: 20 }}>{message}</p>}
    </div>
  );
}