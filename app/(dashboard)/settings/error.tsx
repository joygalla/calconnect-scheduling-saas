"use client";

export default function SettingsError({ error, reset }: any) {
  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "26px", fontWeight: 600, color: "red" }}>
        Settings Error
      </h1>

      <p style={{ marginTop: "10px" }}>
        {error?.message || "Something went wrong loading settings."}
      </p>

      <button
        onClick={() => reset()}
        style={{
          marginTop: "20px",
          padding: "10px 16px",
          background: "#000",
          color: "#fff",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}