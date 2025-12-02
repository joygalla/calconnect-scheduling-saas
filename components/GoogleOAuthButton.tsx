"use client";

import { useState } from "react";

const GOOGLE_OAUTH_URL = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_URL;

export function GoogleOAuthButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (!GOOGLE_OAUTH_URL) {
      // Frontend-only warning if env is missing
      alert(
        "Google OAuth URL is not configured. Please set NEXT_PUBLIC_GOOGLE_OAUTH_URL."
      );
      return;
    }

    setLoading(true);

    // Simple: send the browser to the backend OAuth start route
    window.location.href = GOOGLE_OAUTH_URL;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {/* Simple Google "G" style circle */}
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-xs font-bold">
        G
      </span>
      {loading ? "Redirecting to Google..." : "Continue with Google"}
    </button>
  );
}