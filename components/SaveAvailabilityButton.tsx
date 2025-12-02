"use client";

interface SaveAvailabilityButtonProps {
  onClick: () => void;
  loading: boolean;
}

export default function SaveAvailabilityButton({
  onClick,
  loading,
}: SaveAvailabilityButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`mt-6 w-full py-3 rounded-lg text-white font-semibold
        ${loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}
      `}
    >
      {loading ? "Saving..." : "Save Availability"}
    </button>
  );
}