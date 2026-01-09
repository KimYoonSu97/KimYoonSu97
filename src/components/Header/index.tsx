"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed top-0 z-50 w-full backdrop-blur-md border-white/20">
      <div className="flex justify-between items-center pr-7 pl-7 pt-5 pb-5">
        {/* Logo */}
        <div className="cursor-pointer pr-3">
          <Link href="/">
            <p className="font-bold text-[24px] hover:text-slate-600 transition-colors">
              Thomas
            </p>
          </Link>
        </div>

        {/* Current Page */}
        <div className="cursor-pointer pl-3 pr-3">
          <p className="font-bold text-[40px]">{pathname.split("/")[1]}</p>
        </div>

        {/* Menu Button */}
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer pl-3 flex items-center gap-2 hover:text-slate-600 transition-colors"
          >
            <p className="font-bold text-[24px]">menu</p>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white border border-slate-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div
                    className={`px-6 py-4 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-b-0 ${
                      pathname === item.path
                        ? "bg-slate-100 font-bold"
                        : "font-medium"
                    }`}
                  >
                    <p className="text-slate-900">{item.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
