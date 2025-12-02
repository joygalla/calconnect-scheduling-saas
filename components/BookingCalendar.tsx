"use client";

export default function BookingCalendar({ onSelectDate }: any) {
  const today = new Date();
  const days: string[] = [];

  for (let i = 0; i < 30; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    days.push(d.toISOString().slice(0, 10));
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Select a date</h3>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 10 }}>
        {days.map((d) => (
          <button
            key={d}
            onClick={() => onSelectDate(d)}
            style={{
              padding: 10,
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
              borderRadius: 6,
            }}
          >
            {d}
          </button>
        ))}
      </div>
    </div>
  );
}