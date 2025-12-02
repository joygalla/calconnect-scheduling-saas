"use client";

export default function Error({ error, reset }: any) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Something went wrong
      </h1>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        {error?.message || "Unknown error occurred."}
      </p>

      <button
        onClick={() => reset()}
        style={{
          padding: "12px 20px",
          background: "#4a3aff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}