"use client";

export default function ConversationError({ error }: any) {
  return (
    <div style={{ padding: 40, color: "red" }}>
      <h2>Conversation Failed</h2>
      <p>{error?.message || "Error loading conversation."}</p>
    </div>
  );
}