"use client";

import { useState } from "react";

export default function ServiceModal({ onSave, onClose }: any) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(30);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const save = () => {
    onSave({
      name,
      duration,
      price,
      description,
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: 30,
          borderRadius: 12,
          width: 400,
        }}
      >
        <h2>Create Service</h2>

        <label>Name</label>
        <input
          style={{ width: "100%", marginBottom: 12 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Duration</label>
        <select
          style={{ width: "100%", marginBottom: 12 }}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        >
          <option value={15}>15 minutes</option>
          <option value={30}>30 minutes</option>
          <option value={60}>60 minutes</option>
          <option value={90}>90 minutes</option>
        </select>

        <label>Price</label>
        <input
          style={{ width: "100%", marginBottom: 12 }}
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />

        <label>Description</label>
        <textarea
          style={{ width: "100%", marginBottom: 12 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={save} style={{ marginRight: 10 }}>
          Save
        </button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}