"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { MenuIcon } from "lucide-react";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex">
        <div className="pb-12 w-64">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <div className="mb-2 px-4 text-xl font-semibold tracking-tight">
                Fancy Word Here
              </div>
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={pathname === item.href ? "ghost" : "ghost"}
                      className={`w-full justify-start ${
                        pathname === item.href ? "font-bold italic" : ""
                      }`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Separator orientation="vertical" />
      </div>
    </>
  );
}
