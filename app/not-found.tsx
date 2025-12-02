export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "30px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>404</h1>
      <p style={{ fontSize: "18px", color: "#444" }}>
        The page you’re looking for does not exist.
      </p>

      <a
        href="/"
        style={{
          marginTop: "20px",
          padding: "10px 18px",
          background: "#4a3aff",
          borderRadius: "8px",
          color: "white",
          textDecoration: "none",
        }}
      >
        Go Home
      </a>
    </div>
  );
}