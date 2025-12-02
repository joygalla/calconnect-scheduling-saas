"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Services", href: "/services" },
    { name: "Availability", href: "/availability" },
    { name: "Users", href: "/users" },
    { name: "Settings", href: "/settings" }
  ];

  return (
    <aside
      style={{
        width: "220px",
        background: "white",
        height: "100vh",
        padding: "25px",
        position: "fixed",
        left: 0,
        top: 0,
        borderRight: "1px solid #eee"
      }}
    >
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "30px"
        }}
      >
        CalConnect
      </h1>

      <nav>
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href}>
              <div
                style={{
                  padding: "12px 14px",
                  marginBottom: "8px",
                  borderRadius: "8px",
                  background: active ? "#4a3aff" : "#f5f5ff",
                  color: active ? "white" : "#333",
                  fontWeight: active ? 600 : 500,
                  cursor: "pointer"
                }}
              >
                {item.name}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}