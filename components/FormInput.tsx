"use client";

import React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}

export default function FormInput({
  label,
  value,
  onChange,
  type = "text",
  placeholder = ""
}: Props) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label style={{ display: "block", marginBottom: "6px", fontWeight: 500 }}>
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "14px"
        }}
      />
    </div>
  );
}