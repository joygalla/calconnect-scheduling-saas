"use client";

export default function LoadingSpinner() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #ccc",
          borderTopColor: "#4a3aff",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      ></div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}