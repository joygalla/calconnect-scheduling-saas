"use client";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        padding: "20px",
        textAlign: "center",
        marginTop: "40px",
        color: "#666",
        fontSize: "14px"
      }}
    >
      © {new Date().getFullYear()} CalConnect. All rights reserved.
    </footer>
  );
}