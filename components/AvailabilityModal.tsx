"use client";

import React, { useState, useEffect } from "react";
import CalendarGrid from "./CalendarGrid";
import TimeZoneSelector from "./TimeZoneSelector";
import { updateAvailability } from "../services/availabilityService";

export default function AvailabilityModal({ hostId, onClose }) {
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [workHours, setWorkHours] = useState({
    start: "09:00",
    end: "17:00",
  });
  const [interval, setInterval] = useState(30);

  const save = async () => {
    await updateAvailability(hostId, {
      timezone,
      workHours,
      interval,
    });
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0,
        width: "100%", height: "100%",
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Set Your Availability</h2>

        <TimeZoneSelector value={timezone} onChange={setTimezone} />

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>
            Work Hours
          </label>

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="time"
              value={workHours.start}
              onChange={(e) =>
                setWorkHours({ ...workHours, start: e.target.value })
              }
              style={{ padding: "10px", borderRadius: "6px" }}
            />

            <input
              type="time"
              value={workHours.end}
              onChange={(e) =>
                setWorkHours({ ...workHours, end: e.target.value })
              }
              style={{ padding: "10px", borderRadius: "6px" }}
            />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "6px" }}>
            Meeting Duration
          </label>

          <select
            value={interval}
            onChange={(e) => setInterval(Number(e.target.value))}
            style={{ padding: "10px", borderRadius: "6px", width: "100%" }}
          >
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            onClick={save}
            style={{
              padding: "12px 16px",
              background: "#4a3aff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Save
          </button>

          <button
            onClick={onClose}
            style={{
              padding: "12px 16px",
              background: "#ccc",
              color: "black",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}