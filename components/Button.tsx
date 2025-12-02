"use client";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "primary" | "danger" | "gray";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  color = "primary",
  type = "button",
  disabled = false
}: ButtonProps) {
  const colors: any = {
    primary: "#4a3aff",
    danger: "#ff4d4d",
    gray: "#888"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "12px 18px",
        borderRadius: "8px",
        border: "none",
        background: colors[color],
        color: "white",
        fontSize: "14px",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1
      }}
    >
      {children}
    </button>
  );
}