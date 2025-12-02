"use client";

import { useState } from "react";
import { createUser } from "@/lib/usersService";

export default function AddUserModal({ open, onClose, onCreated }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  if (!open) return null;

  async function handleCreate() {
    try {
      await createUser(email, password, role);
      setMessage("User created successfully!");
      onCreated();
      setTimeout(() => {
        setMessage("");
        onClose();
      }, 1200);
    } catch (err: any) {
      setMessage(err.message);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          width: "400px",
        }}
      >
        <h2 style={{ marginBottom: "15px" }}>Add New User</h2>

        {message && (
          <div
            style={{
              background: "#e8e6ff",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              color: "#4a3aff",
            }}
          >
            {message}
          </div>
        )}

        <label>Email</label>
        <input
          style={input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          style={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Role</label>
        <select
          style={input}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <button
            style={{
              flex: 1,
              background: "#4a3aff",
              color: "white",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleCreate}
          >
            Create
          </button>

          <button
            style={{
              flex: 1,
              background: "#ddd",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const input: any = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "12px",
  marginTop: "5px",
};