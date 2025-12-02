"use client";

export default function GoogleSyncButton({ hostId }: { hostId: string }) {
  async function connect() {
    const res = await fetch(`/api/google/auth-url/${hostId}`);
    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <button
      onClick={connect}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Connect Google Calendar
    </button>
  );
}