"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { 
  Home, Building, Layers, Shield, Droplets, Paintbrush, Check 
} from "lucide-react";

export const Services: React.FC = () => {
  const { t } = useApp();

  const serviceItems = [
    {
      icon: Home,
      title: t("s_residential"),
      subtitle: t("s_residential_sub"),
      features: ["Individual Homes", "Villas & Duplexes", "G+1 Houses", "Custom Floorplans"],
      badge: "Popular",
    },
    {
      icon: Building,
      title: t("s_commercial"),
      subtitle: t("s_commercial_sub"),
      features: ["Commercial Complexes", "Shops & Retails", "Office Spaces", "Warehouses"],
      badge: "Commercial",
    },
    {
      icon: Layers,
      title: t("s_brickwork"),
      subtitle: t("s_brickwork_sub"),
      features: ["Precision Brickwork", "Partition Walls", "Structural Masonry", "Foundation Walls"],
      badge: "Masonry",
    },
    {
      icon: Shield,
      title: t("s_structural"),
      subtitle: t("s_structural_sub"),
      features: ["Heavy RCC Frame", "Columns & Beams", "Roof Slabs", "RCC Staircases"],
      badge: "Structural",
    },
    {
      icon: Paintbrush,
      title: t("s_plastering"),
      subtitle: t("s_plastering_sub"),
      features: ["Smooth Internal Plaster", "Weatherproof External", "Surface Alignment", "Corner Leveling"],
      badge: "Finishing",
    },
    {
      icon: Droplets,
      title: t("s_curing"),
      subtitle: t("s_curing_sub"),
      features: ["Ponding Technique", "Hessian Cloth Curing", "10-14 Day Protocol", "Max Hydration"],
      badge: "Quality Guarantee",
      highlight: true,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("services_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t("services_subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between ${
                  item.highlight
                    ? "bg-gradient-to-b from-amber-500/20 via-slate-900 to-slate-900 border-2 border-amber-500 shadow-xl shadow-amber-500/10"
                    : "bg-slate-900/70 border border-slate-800 hover:border-amber-500/50 shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                      item.highlight ? "bg-amber-500 text-slate-950" : "bg-amber-500/10 text-amber-400"
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                      item.highlight ? "bg-amber-500 text-slate-950" : "bg-slate-800 text-amber-400 border border-amber-500/30"
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-800/80">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center text-xs text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-amber-500 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center block transition-all ${
                      item.highlight
                        ? "bg-amber-500 text-slate-950 hover:bg-amber-400"
                        : "bg-slate-800 text-slate-200 hover:bg-amber-500 hover:text-slate-950"
                    }`}
                  >
                    Enquire About Service →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
