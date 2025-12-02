"use client";

export default function WeeklyTimeRow({ label, slots, onChange }: any) {
  return (
    <div
      style={{
        padding: "12px 0",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h3 style={{ marginBottom: 8, textTransform: "capitalize" }}>{label}</h3>

      <textarea
        defaultValue={slots.join(", ")}
        onBlur={(e) => {
          const cleaned = e.target.value
            .split(",")
            .map((t) => t.trim())
            .filter((t) => t);
          onChange(label, cleaned);
        }}
        style={{
          width: "100%",
          padding: 10,
          minHeight: 50,
          borderRadius: 6,
          border: "1px solid #ccc",
        }}
      />
      <small>Example: 09:00, 09:30, 10:00</small>
    </div>
  );
}