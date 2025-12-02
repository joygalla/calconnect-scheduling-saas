"use client";

export default function PageContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f3f3f8",
        padding: "40px",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          background: "white",
          padding: "35px",
          borderRadius: "16px",
          boxShadow: "0 6px 26px rgba(0,0,0,0.08)"
        }}
      >
        {children}
      </div>
    </div>
  );
}