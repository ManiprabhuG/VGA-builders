"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { Menu, X, Phone } from "lucide-react";

export const Header: React.FC = () => {
  const { t } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_home"), href: "#hero" },
    { name: t("nav_about"), href: "#about" },
    { name: t("nav_services"), href: "#services" },
    { name: t("nav_why"), href: "#why-us" },
    { name: t("nav_projects"), href: "#projects" },
    { name: t("nav_process"), href: "#process" },
    { name: t("nav_curing"), href: "#curing" },
    { name: t("nav_gallery"), href: "#gallery" },
    { name: t("nav_videos"), href: "#videos" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl py-3 border-b border-amber-500/20" 
          : "bg-gradient-to-b from-slate-950/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 rounded-lg overflow-hidden border-2 border-amber-500 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Image 
                src="/images/logo.jpg" 
                alt="VGA Builders Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-black tracking-wider text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center gap-1.5">
                VGA <span className="text-amber-500">BUILDERS</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-4 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls: Quick Call CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919791443090"
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
            >
              <Phone className="w-3.5 h-3.5 fill-slate-950" />
              <span>97914 43090</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-amber-500/40 text-amber-500 hover:bg-amber-500/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-slate-950/95 backdrop-blur-xl border-b border-amber-500/20 py-6 px-6 shadow-2xl transition-all animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-slate-200 hover:text-amber-500 py-1.5 transition-colors border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="tel:+919791443090"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold py-3 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call 97914 43090</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
