"use client";

import { useState } from "react";

export default function BufferSelector({ buffer, setBuffer }: any) {
  return (
    <div className="space-y-2">
      <h3 className="font-medium">Buffer Between Meetings</h3>
      <select
        value={buffer}
        onChange={(e) => setBuffer(Number(e.target.value))}
        className="border p-2 rounded"
      >
        <option value={0}>No Buffer</option>
        <option value={5}>5 minutes</option>
        <option value={10}>10 minutes</option>
        <option value={15}>15 minutes</option>
        <option value={30}>30 minutes</option>
      </select>
    </div>
  );
}