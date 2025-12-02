"use client";

export default function ErrorPage({ error }: any) {
  return (
    <div style={{ padding: 30 }}>
      <h1>Login Error</h1>
      <p>{error?.message || "Something went wrong."}</p>
    </div>
  );
}