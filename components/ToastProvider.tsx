"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          background: "#fff",
          color: "#333",
          border: "1px solid #ddd",
        },
        success: {
          style: {
            borderLeft: "4px solid #6C47FF",
          },
        },
        error: {
          style: {
            borderLeft: "4px solid #FF3B3B",
          },
        },
      }}
    />
  );
}
