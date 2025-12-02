"use client";

import { useEffect, useState } from "react";

export default function GoogleCallbackPage() {
  const [status, setStatus] = useState("Connecting Google Calendar...");

  useEffect(() => {
    setStatus("Google Calendar connected. You may close this tab.");
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-6 border rounded-lg shadow-sm bg-white text-center">
        <h1 className="text-xl font-semibold">Google Calendar Sync</h1>
        <p className="mt-4 text-gray-700">{status}</p>
      </div>
    </div>
  );
}