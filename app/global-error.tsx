"use client";

export default function GlobalError({ error, reset }: any) {
  return (
    <html>
      <body
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
          Something went wrong.
        </h2>

        <p style={{ color: "#555" }}>
          {error?.message || "An unexpected error occurred."}
        </p>

        <button
          onClick={() => reset()}
          style={{
            marginTop: "20px",
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#4a3aff",
            color: "white",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}