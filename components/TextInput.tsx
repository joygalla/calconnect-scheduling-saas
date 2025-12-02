"use client";

interface TextInputProps {
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (v: string) => void;
}

export default function TextInput({
  value,
  type = "text",
  placeholder = "",
  onChange
}: TextInputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        marginBottom: "12px"
      }}
    />
  );
}