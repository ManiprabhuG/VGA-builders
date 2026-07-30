"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { EnquiryForm } from "./EnquiryForm";
import { 
  MapPin, Phone, Mail, Clock, Send, ShieldCheck, Sparkles 
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

export const ContactSection: React.FC = () => {
  const { t } = useApp();

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("contact_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Have questions about house construction cost per sq ft or site inspection? Talk to our engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Locations & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Thanjavur Office */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/40 transition-colors shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-amber-400">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  {t("office_thanjavur")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Thanjavur, Tamil Nadu, India
              </p>
              <p className="text-[11px] text-slate-500">
                Serving Thanjavur City, Vallam, Orathanadu & nearby districts.
              </p>
            </div>

            {/* Madurai Office */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/40 transition-colors shadow-xl space-y-3">
              <div className="flex items-center space-x-3 text-amber-400">
                <MapPin className="w-5 h-5" />
                <h3 className="text-lg font-bold text-white">
                  {t("office_madurai")}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Madurai, Tamil Nadu, India
              </p>
              <p className="text-[11px] text-slate-500">
                Serving Madurai City, K.K. Nagar, Mattuthavani & Southern TN.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+919791443090"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-200 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    {t("phone_label")}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-400">
                    +91 97914 43090
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@vgabuilders.in"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-200 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    {t("email_label")}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-400">
                    info@vgabuilders.in
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/vga_builders"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500 text-slate-200 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">
                    {t("instagram_label")}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-amber-400">
                    @vga_builders
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
};
