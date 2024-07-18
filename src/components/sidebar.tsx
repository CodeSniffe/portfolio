"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { MenuIcon, XIcon } from '@heroicons/react/outline'; // heroicons for menu icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white md:hidden">
        <div className="text-lg font-bold">Portfolio</div>
        <button onClick={toggleSidebar}>
          {/* {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />} */}
        </button>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:flex md:w-64`}
      >
        <nav className="flex flex-col p-4 space-y-2 md:space-y-0 md:space-x-2 md:flex-row md:items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
