"use client"; 

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flower2 } from "lucide-react";
import { Rethink_Sans } from "next/font/google";

const rethinkSans = Rethink_Sans({ subsets: ["latin"], weight: "400" });

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/prayer-garden", label: "Prayer Garden" },
  ];

  return (
    <header className="w-full max-w-3xl flex justify-between items-center mb-10">
      {/* Garden heading links to home page */}
      <Link
        href="/"
        className={`text-3xl font-bold flex items-center gap-2 text-pink-600 ${rethinkSans.className}`}
      >
        <Flower2 className="w-8 h-8" /> Garden
      </Link>

      <nav className="flex gap-4 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`transition ${
              pathname === link.href ? "text-pink-600" : "hover:text-pink-600"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
