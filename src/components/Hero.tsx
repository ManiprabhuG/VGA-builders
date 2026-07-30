"use client";

import React from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Building2, ShieldCheck, Award, Users, HardHat, PhoneCall, ArrowRight, Eye, Sparkles 
} from "lucide-react";

export const Hero: React.FC = () => {
  const { t } = useApp();

  const stats = [
    { label: t("stat_projects"), count: "150+", icon: Building2 },
    { label: t("stat_clients"), count: "120+", icon: Award },
    { label: t("stat_experience"), count: "12+", icon: ShieldCheck },
    { label: t("stat_workers"), count: "80+", icon: HardHat },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 construction-grid">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>{t("tagline")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              {t("hero_title").split("&")[0]} & <br className="hidden sm:inline" />
              <span className="gold-gradient-text">
                {t("hero_title").split("&")[1] || "Complete Transparency"}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              {t("hero_subtitle")}
            </p>

            {/* Key Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <Eye className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>On-Site Transparency</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Proper Curing Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                <Building2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>G+1 & Commercial Experts</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-7 py-3.5 rounded-xl text-sm uppercase tracking-wider shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
              >
                <span>{t("cta_site_visit")}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:+919791443090"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold border border-slate-700 px-6 py-3.5 rounded-xl text-sm transition-all hover:border-amber-500"
              >
                <PhoneCall className="w-4 h-4 text-amber-500" />
                <span>{t("cta_call")}: 97914 43090</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Outer Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="/images/gallery-1.jpg"
                    alt="VGA Builders Site Progress"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-500/40 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-[11px] font-bold text-slate-200">Live Site Progress: Thanjavur</span>
                  </div>

                  {/* Quote Overlay */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-slate-200">
                    <p className="text-xs italic font-medium text-amber-400">
                      &quot;Cement and Steel are Important, but Curing is Like Gold.&quot;
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-semibold uppercase">
                      — VGA Builders Quality Standard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Counter Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-5 text-center hover:border-amber-500/40 transition-all hover:-translate-y-1"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white gold-gradient-text">
                    {stat.count}
                  </div>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
