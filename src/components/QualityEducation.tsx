"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Droplets, ShieldCheck, AlertTriangle, Sparkles, CheckCircle2, Waves 
} from "lucide-react";

export const QualityEducation: React.FC = () => {
  const { t } = useApp();

  const curingCards = [
    {
      title: t("curing_wall"),
      subtitle: t("curing_wall_desc"),
      duration: "7 - 10 Days Continuous",
      method: "Hessian cloth & spray misting",
      impact: "Prevents brick mortar micro-fissures",
      image: "/images/gallery-5.jpg",
    },
    {
      title: t("curing_slab"),
      subtitle: t("curing_slab_desc"),
      duration: "10 - 14 Days Ponding",
      method: "Water bunding grid on roof slab",
      impact: "Eliminates thermal shrinkage cracks",
      image: "/images/gallery-6.jpg",
    },
    {
      title: t("curing_stairs"),
      subtitle: t("curing_stairs_desc"),
      duration: "10 Days Wet Hessian Wrapping",
      method: "Full canvas wet wrapping",
      impact: "Guarantees heavy load bearing bond",
      image: "/images/gallery-1.jpg",
    },
    {
      title: t("curing_concrete"),
      subtitle: t("curing_concrete_desc"),
      duration: "14 Days Column Ponding / Wrap",
      method: "Sprinkler & hessian column wrap",
      impact: "Reaches full 28-day M25/M30 grade strength",
      image: "/images/gallery-8.jpg",
    },
  ];

  return (
    <section id="curing" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Subtle Water Ripples Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Droplets className="w-3.5 h-3.5" />
            <span>Client Education & Quality Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("curing_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t("curing_subtitle")}
          </p>
        </div>

        {/* Infographic Comparison Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Without Curing */}
            <div className="bg-red-950/30 border border-red-800/40 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-red-400">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-lg font-bold">Without Proper Curing (Poor Contractor)</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Rapid evaporation causes severe shrinkage cracks in roof slabs & walls</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Concrete strength drops by up to 50%, risking structural degradation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>Water seepage, flaking plaster, and wall dampness after monsoon rain</span>
                </li>
              </ul>
            </div>

            {/* With VGA Curing Standard */}
            <div className="bg-amber-500/10 border border-amber-500/40 rounded-2xl p-6 space-y-3">
              <div className="flex items-center space-x-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-lg font-bold">With VGA Curing Standard (Guaranteed)</h3>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Maximum cement hydration for rock-solid compressive strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Zero structural shrinkage or hairline surface cracks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>100+ year building lifespan with weather-sealed plaster binding</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* 4 Curing Infographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curingCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                  {card.duration}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-800 text-[11px]">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500 font-medium">Technique:</span>
                    <span className="font-semibold text-amber-400">{card.method}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-500 font-medium">Result:</span>
                    <span className="font-semibold text-slate-200">{card.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
