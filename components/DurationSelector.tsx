"use client";

interface Props {
  duration: number;
  onChange: (value: number) => void;
}

export default function DurationSelector({ duration, onChange }: Props) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1">Session Duration</label>

      <select
        value={duration}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border p-3 rounded-md"
      >
        <option value={15}>15 Minutes</option>
        <option value={30}>30 Minutes</option>
        <option value={60}>60 Minutes</option>
      </select>
    </div>
  );
}