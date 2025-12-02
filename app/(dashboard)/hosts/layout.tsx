import React from "react";

export default function HostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "25px" }}>
      {children}
    </div>
  );
}