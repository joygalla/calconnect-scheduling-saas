"use client";

interface FormFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

export default function FormField({
  label,
  type = "text",
  value,
  onChange
}: FormFieldProps) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label
        style={{
          fontSize: "14px",
          fontWeight: 500,
          marginBottom: "6px",
          display: "block"
        }}
      >
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          fontSize: "14px"
        }}
      />
    </div>
  );
}