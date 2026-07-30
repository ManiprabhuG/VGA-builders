"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Menu, X, Phone, Sun, Moon, Globe, Building2, ChevronDown, CheckCircle2 
} from "lucide-react";

export const Header: React.FC = () => {
  const { t, language, setLanguage, theme, setTheme } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

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
              <span className="text-xl sm:text-2xl font-black tracking-wider text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors flex items-center gap-1.5">
                VGA <span className="text-amber-500">BUILDERS</span>
              </span>
              <p className="text-[10px] sm:text-xs font-semibold text-amber-500 uppercase tracking-widest leading-none">
                {t("tagline")}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Controls: Language, Theme & Call CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-amber-500 transition-colors bg-white/50 dark:bg-slate-800/50"
              >
                <Globe className="w-3.5 h-3.5 text-amber-500" />
                <span>{language === "en" ? "English" : "தமிழ்"}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl py-1.5 z-50">
                  <button
                    onClick={() => { setLanguage("en"); setLangMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-amber-500/10 text-slate-800 dark:text-slate-200 hover:text-amber-500"
                  >
                    <span>English</span>
                    {language === "en" && <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />}
                  </button>
                  <button
                    onClick={() => { setLanguage("ta"); setLangMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-amber-500/10 text-slate-800 dark:text-slate-200 hover:text-amber-500"
                  >
                    <span>தமிழ் (Tamil)</span>
                    {language === "ta" && <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />}
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-amber-500 hover:text-amber-500 transition-colors bg-white/50 dark:bg-slate-800/50"
              title="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Quick Call Button */}
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
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg border border-slate-700 text-slate-200"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

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
                className="text-base font-semibold text-slate-200 hover:text-amber-500 py-1 transition-colors border-b border-slate-800/60"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 font-medium">Select Language</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg ${language === "en" ? "bg-amber-500 text-slate-950" : "text-slate-300"}`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setLanguage("ta")}
                    className={`px-3 py-1 text-xs font-bold rounded-lg ${language === "ta" ? "bg-amber-500 text-slate-950" : "text-slate-300"}`}
                  >
                    தமிழ்
                  </button>
                </div>
              </div>

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
