"use client";

import React from "react";
import Spinner from "./Spinner";

export default function GlobalLoader({ loading }: { loading: boolean }) {
  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255,255,255,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Spinner />
    </div>
  );
}
