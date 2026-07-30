"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Building2, Phone, Mail, MapPin, ArrowUp 
} from "lucide-react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-amber-500">
                <Image src="/images/logo.jpg" alt="VGA Builders Logo" fill className="object-cover" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-wider">
                  VGA <span className="text-amber-500">BUILDERS</span>
                </span>
                <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest leading-none">
                  {t("tagline")}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              VGA Builders delivers residential and commercial construction services in Tamil Nadu with transparent project updates, quality workmanship, proper curing practices, and responsible site management.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="tel:+919791443090" 
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                title="Call Us"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="mailto:info@vgabuilders.in" 
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/vga_builders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-colors"
                title="Instagram Page"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-amber-500">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About VGA Builders</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Our Projects</a></li>
              <li><a href="#process" className="hover:text-amber-400 transition-colors">Construction Process</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-amber-500">
              Services
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Residential Construction</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial Buildings</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Brick Work & Masonry</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">RCC Structural Columns</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Smooth Plastering</a></li>
              <li><a href="#curing" className="hover:text-amber-400 transition-colors">Concrete Curing Guide</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-amber-500">
              Office Locations
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <p className="font-bold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" /> Thanjavur Office
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">Thanjavur, Tamil Nadu</p>
              </div>
              <div>
                <p className="font-bold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" /> Madurai Office
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">Madurai, Tamil Nadu</p>
              </div>
              <div>
                <p className="text-[10px] text-amber-400 font-bold uppercase">Phone / WhatsApp</p>
                <a href="tel:+919791443090" className="font-bold text-white hover:text-amber-400">
                  +91 97914 43090
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <p>{t("footer_rights")}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 rounded-xl transition-colors"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
