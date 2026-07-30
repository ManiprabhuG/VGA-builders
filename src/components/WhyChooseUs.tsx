"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { 
  Eye, Award, Users, FileCheck, Clock, MapPin, Sparkles 
} from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const { t } = useApp();

  const reasons = [
    {
      icon: Eye,
      title: t("why_transparency_title"),
      desc: t("why_transparency_desc"),
    },
    {
      icon: Award,
      title: t("why_quality_title"),
      desc: t("why_quality_desc"),
    },
    {
      icon: Users,
      title: t("why_team_title"),
      desc: t("why_team_desc"),
    },
    {
      icon: FileCheck,
      title: t("why_docs_title"),
      desc: t("why_docs_desc"),
    },
    {
      icon: Clock,
      title: t("why_delivery_title"),
      desc: t("why_delivery_desc"),
    },
    {
      icon: MapPin,
      title: t("why_expertise_title"),
      desc: t("why_expertise_desc"),
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("why_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t("why_subtitle")}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Local Tamil Nadu Trust Banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <MapPin className="w-5 h-5 text-amber-500" />
              Serving Thanjavur, Madurai & Surrounding Regions
            </h4>
            <p className="text-xs text-slate-300">
              Need site engineers for your residential or commercial site inspection?
            </p>
          </div>
          <a
            href="tel:+919791443090"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all whitespace-nowrap"
          >
            Call Engineer Direct: 97914 43090
          </a>
        </div>

      </div>
    </section>
  );
};
