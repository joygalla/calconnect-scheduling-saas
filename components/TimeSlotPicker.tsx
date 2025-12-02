"use client";

interface Props {
  selectedDate: string;
  availability: any;
  selectedTime: string;
  setSelectedTime: (t: string) => void;
}

export default function TimeSlotPicker({
  selectedDate,
  availability,
  selectedTime,
  setSelectedTime,
}: Props) {
  const slots: string[] = availability[selectedDate] || [];

  return (
    <div style={{ marginTop: 20 }}>
      <h3 style={{ fontSize: 18, marginBottom: 10 }}>
        Available Times
      </h3>

      {slots.length === 0 && (
        <div style={{ color: "#777" }}>No slots available</div>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {slots.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            style={{
              padding: "10px 14px",
              borderRadius: 8,
              border:
                selectedTime === time
                  ? "2px solid #4A3AFF"
                  : "1px solid #CCC",
              background: selectedTime === time ? "#EAEAFF" : "white",
              cursor: "pointer",
            }}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}