"use client";

export default function PaySuccessPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "#f7f7ff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px", color: "#3b2fff" }}>
        Payment Successful
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Thank you! Your payment has been processed.
      </p>

      <a
        href="/dashboard"
        style={{
          padding: "12px 20px",
          background: "#3b2fff",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        Go back to Dashboard
      </a>
    </div>
  );
}