"use client";

export default function BookingTimeSlots({
  slots,
  selected,
  onSelect,
}: any) {
  return (
    <div style={{ marginTop: 30 }}>
      <h3>Select a time</h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
        {slots.length === 0 ? (
          <p>No available slots.</p>
        ) : (
          slots.map((t: string) => (
            <button
              key={t}
              onClick={() => onSelect(t)}
              style={{
                padding: 10,
                background: selected === t ? "#4A3AFF" : "#eee",
                color: selected === t ? "white" : "black",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              {t}
            </button>
          ))
        )}
      </div>
    </div>
  );
}