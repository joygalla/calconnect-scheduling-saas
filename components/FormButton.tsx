"use client";

interface Props {
  label: string;
  onClick: () => void;
  color?: string;
}

export default function FormButton({ label, onClick, color = "#4a3aff" }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 18px",
        background: color,
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 500
      }}
    >
      {label}
    </button>
  );
}