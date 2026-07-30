"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { Target, Compass, CheckCircle2, ShieldCheck, Hammer, Layers } from "lucide-react";

export const CompanyProfile: React.FC = () => {
  const { t } = useApp();

  const goals = [
    "Deliver high-quality residential & commercial projects",
    "Execute G+1 and multi-story buildings with precision",
    "Follow strict quality control and structural safety standards",
    "Educate clients about proper concrete & wall curing techniques",
    "Share real-time construction site progress & updates",
    "Ensure complete transparency from foundation excavation to key handover",
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 dark:bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Company Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("profile_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t("profile_desc")}
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-24 h-24 text-amber-500" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t("mission_title")}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t("mission_desc")}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Compass className="w-24 h-24 text-amber-500" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {t("vision_title")}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {t("vision_desc")}
            </p>
          </div>
        </div>

        {/* Company Goals & Visual Feature Grid */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3 text-amber-400">
                <Hammer className="w-5 h-5" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Our Commitment & Company Goals
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Every brick laid by VGA Builders carries the commitment of structural strength, honest material specs, and responsible project management.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 font-medium">{goal}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="/images/gallery-2.jpg"
                alt="VGA Builders Construction Site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800 text-xs text-slate-300">
                <p className="font-semibold text-amber-400">Site Work Documentation</p>
                <p className="text-[11px] text-slate-400">Real progress photos provided weekly to clients.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
