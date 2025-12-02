"use client";
import { useState } from "react";

export default function Calendar({ onDateSelect }) {
  const [current, setCurrent] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) =>
    new Date(year, month, 1).getDay();

  const year = current.getFullYear();
  const month = current.getMonth();
  const totalDays = daysInMonth(year, month);
  const firstDay = firstDayOfMonth(year, month);

  const nextMonth = () => {
    const m = new Date(current);
    m.setMonth(m.getMonth() + 1);
    setCurrent(m);
  };

  const prevMonth = () => {
    const m = new Date(current);
    m.setMonth(m.getMonth() - 1);
    setCurrent(m);
  };

  const handleSelect = (day) => {
    const date = new Date(year, month, day);
    const formatted = date.toISOString().split("T")[0];
    onDateSelect(formatted);
  };

  const blanks = Array.from({ length: firstDay }, (_, i) => (
    <div key={"b" + i}></div>
  ));

  const days = Array.from({ length: totalDays }, (_, i) => {
    const day = i + 1;
    return (
      <button
        key={day}
        onClick={() => handleSelect(day)}
        className="border rounded p-2 hover:bg-blue-100"
      >
        {day}
      </button>
    );
  });

  return (
    <div className="w-full">
      <div className="flex justify-between mb-3">
        <button
          onClick={prevMonth}
          className="p-2 border rounded hover:bg-gray-100"
        >
          ←
        </button>

        <h2 className="font-semibold text-lg">
          {current.toLocaleString("default", { month: "long" })} {year}
        </h2>

        <button
          onClick={nextMonth}
          className="p-2 border rounded hover:bg-gray-100"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center font-semibold text-gray-600 mb-2">
        <div>Sun</div><div>Mon</div><div>Tue</div>
        <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {blanks}
        {days}
      </div>
    </div>
  );
}