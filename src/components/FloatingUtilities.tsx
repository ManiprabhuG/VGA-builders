"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { 
  Globe, Sun, Moon, MessageCircle, Settings, X, Check 
} from "lucide-react";

export const FloatingUtilities: React.FC = () => {
  const { language, setLanguage, theme, setTheme } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      
      {/* Expanded Controls Panel */}
      {open && (
        <div className="bg-slate-950/95 border border-amber-500/40 backdrop-blur-xl p-4 rounded-2xl shadow-2xl space-y-3 w-56 animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-black text-amber-400 uppercase tracking-wider">Quick Settings</span>
            <button 
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Language Switcher */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase">Language / மொழி</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setLanguage("en")}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-between ${
                  language === "en" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 border border-slate-800"
                }`}
              >
                <span>English</span>
                {language === "en" && <Check className="w-3 h-3" />}
              </button>
              <button
                onClick={() => setLanguage("ta")}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-between ${
                  language === "ta" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 border border-slate-800"
                }`}
              >
                <span>தமிழ்</span>
                {language === "ta" && <Check className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase">Color Mode</span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setTheme("dark")}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center gap-1.5 ${
                  theme === "dark" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 border border-slate-800"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </button>
              <button
                onClick={() => setTheme("light")}
                className={`py-1.5 px-2 rounded-lg text-xs font-bold flex items-center gap-1.5 ${
                  theme === "light" ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-slate-300 border border-slate-800"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Light</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div className="flex items-center space-x-3">
        {/* WhatsApp Direct Chat Button */}
        <a
          href="https://wa.me/919791443090?text=Hello%20VGA%20Builders,%20I%20would%20like%20to%20enquire%20about%20construction%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-slate-950" />
        </a>

        {/* Toggle Utility Modal Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-13 h-13 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/40 hover:scale-110 transition-transform"
          title="Language & Theme Options"
        >
          <Settings className={`w-6 h-6 ${open ? "rotate-90" : ""} transition-transform duration-300`} />
        </button>
      </div>

    </div>
  );
};
