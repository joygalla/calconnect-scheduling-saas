"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type DashboardLayoutProps = {
  children: ReactNode;
};

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Availability", href: "/availability" },
  { label: "Bookings", href: "/bookings" },
  { label: "Calendar", href: "/calendar" },
  { label: "Hosts", href: "/hosts" },
  { label: "Integrations", href: "/integrations" },
  { label: "Messages", href: "/messages" },
  { label: "Services", href: "/services" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
  { label: "Signup", href: "/signup" },
  { label: "Weekly Schedules", href: "/weekly" },
  { label: "Logout", href: "/logout" },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f5f5fb] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 px-6 py-8 flex flex-col">
        {/* Logo / title */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>

        {/* Nav items */}
        <nav className="space-y-1 flex-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-10 py-8">{children}</main>
    </div>
  );
}