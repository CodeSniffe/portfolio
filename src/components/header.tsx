import React from "react";
import Link from "next/link";
import { ThemeToggler } from "./themeToggler";

const Header: React.FC = () => {
  return (
    <header className="px-4 py-2 flex justify-end items-center w-full border-b-2">
      <ThemeToggler />
    </header>
  );
};

export default Header;
