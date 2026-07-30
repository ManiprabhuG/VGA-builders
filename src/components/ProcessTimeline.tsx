"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { 
  FileText, Search, Pickaxe, Layers, Building, Droplets, ClipboardCheck, Key, Quote 
} from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const { t } = useApp();

  const steps = [
    { num: 1, title: "Planning & Consultation", desc: "Custom floorplans, budget estimation, structural design alignment.", icon: FileText },
    { num: 2, title: "Site Inspection", desc: "Soil testing, site clearing, boundary marking & levelling.", icon: Search },
    { num: 3, title: "Foundation Work", desc: "Excavation, PCC bed, footing reinforcement & anti-termite treatment.", icon: Pickaxe },
    { num: 4, title: "Brick Work & Masonry", desc: "High compressive strength red brick wall construction with mortared joints.", icon: Layers },
    { num: 5, title: "Structural Construction", desc: "RCC columns, beam framing, slab shuttering & heavy steel binding.", icon: Building },
    { num: 6, title: "Proper Curing Process", desc: "Continuous water ponding & hessian cloth moistening for 10-14 days.", icon: Droplets, highlight: true },
    { num: 7, title: "Quality Inspection", desc: "Plastering check, electrical/plumbing testing & structural safety audit.", icon: ClipboardCheck },
    { num: 8, title: "Project Delivery", desc: "Final clean, key handover, structural documentation & warranty.", icon: Key },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("process_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t("process_subtitle")}
          </p>
        </div>

        {/* Step 6 Curing Banner Highlight */}
        <div className="mb-16 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 shadow-2xl text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10">
            <Quote className="w-48 h-48 text-slate-950" />
          </div>

          <div className="space-y-2 relative z-10">
            <div className="inline-block px-3 py-1 bg-slate-950 text-amber-400 text-xs font-black uppercase tracking-widest rounded-full">
              ★ Critical Step 6 Spotlight
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              {t("curing_quote")}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-900">
              VGA Builders strictly enforces extended water curing to achieve peak concrete compressive strength and zero surface cracks.
            </p>
          </div>

          <a
            href="#curing"
            className="relative z-10 whitespace-nowrap bg-slate-950 hover:bg-slate-900 text-amber-400 font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105"
          >
            Learn Curing Science →
          </a>
        </div>

        {/* 8-Step Grid Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className={`relative rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  step.highlight
                    ? "bg-amber-500/10 border-2 border-amber-500 shadow-xl shadow-amber-500/20"
                    : "bg-slate-950/80 border border-slate-800 hover:border-amber-500/40"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-sm ${
                      step.highlight ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-amber-400"
                    }`}>
                      0{step.num}
                    </span>
                    <Icon className={`w-6 h-6 ${step.highlight ? "text-amber-400 animate-bounce" : "text-slate-500"}`} />
                  </div>

                  <h3 className={`text-base font-bold ${step.highlight ? "text-amber-400" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {step.highlight && (
                  <div className="mt-4 pt-3 border-t border-amber-500/30 text-[10px] font-extrabold text-amber-400 uppercase tracking-widest text-center">
                    Crucial Quality Milestone
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
