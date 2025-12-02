"use client";

interface Props {
  availability: any;
  selectedDate: string;
  setSelectedDate: (d: string) => void;
}

export default function CalendarGrid({
  availability,
  selectedDate,
  setSelectedDate,
}: Props) {
  const days: string[] = [];

  const today = new Date();
  for (let i = 0; i < 60; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    const iso = date.toISOString().split("T")[0];
    days.push(iso);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: 10,
        marginTop: 20,
      }}
    >
      {days.map((date) => {
        const available = availability[date]?.length > 0;

        return (
          <div
            key={date}
            onClick={() => available && setSelectedDate(date)}
            style={{
              padding: 12,
              borderRadius: 8,
              textAlign: "center",
              cursor: available ? "pointer" : "not-allowed",
              background:
                selectedDate === date
                  ? "#4A3AFF"
                  : available
                  ? "#EAEAFF"
                  : "#F1F1F1",
              color: selectedDate === date ? "white" : "#333",
              border:
                selectedDate === date
                  ? "2px solid #3A2AFF"
                  : "1px solid #DDD",
            }}
          >
            <div style={{ fontSize: 14 }}>
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </div>
            <div
              style={{
                marginTop: 4,
                fontSize: 11,
                opacity: available ? 1 : 0.4,
              }}
            >
              {available ? "Available" : "Unavailable"}
            </div>
          </div>
        );
      })}
    </div>
  );
}