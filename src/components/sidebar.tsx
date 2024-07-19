"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/assets/icons";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/about", label: "About Me", icon: "👤" },
    { href: "/projects", label: "Projects", icon: "💼" },
    { href: "/contact", label: "Contact", icon: "📧" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 m-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white transform transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-20" : "w-64"}
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
      >
        {/* Collapse toggle button */}
        <button onClick={toggleCollapse} className="p-2 md:flex hidden">
          est
          {isCollapsed ? (
            <Icons.Hamburger color="#fff" />
          ) : (
            <Icons.Cross color="#fff" />
          )}
        </button>

        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 hover:bg-gray-700 px-3 py-2 rounded transition-colors duration-200"
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
