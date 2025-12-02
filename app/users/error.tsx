"use client";

export default function UsersError({ error }: { error: Error }) {
  return (
    <div
      style={{
        padding: "30px",
        background: "#ffe5e5",
        borderRadius: "12px",
        color: "red"
      }}
    >
      <h2>Error Loading Users</h2>
      <p>{error.message}</p>
    </div>
  );
}