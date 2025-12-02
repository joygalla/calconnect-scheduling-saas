"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Users", href: "/users" },
    { name: "Bookings", href: "/bookings" },
    { name: "Settings", href: "/settings" },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-3 bg-white border-b w-full flex items-center"
      >
        <svg
          className="w-6 h-6 text-[#1D1E2C]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <span className="ml-3 text-lg font-medium text-[#1D1E2C]">Menu</span>
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-6 z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="mb-6 text-[#1D1E2C]"
        >
          ✕ Close
        </button>

        <nav className="flex flex-col space-y-4">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-2 rounded-lg transition ${
                  active
                    ? "bg-[#7a3cff] text-white font-semibold"
                    : "text-[#1D1E2C] hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
