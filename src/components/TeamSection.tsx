"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { 
  Users, HardHat, ShieldCheck, Award, Wrench, Briefcase 
} from "lucide-react";

export const TeamSection: React.FC = () => {
  const { t } = useApp();

  const teamMembers = [
    {
      name: "Er. M. Prabhu, B.E. Civil",
      role: "Chief Civil Engineer & Project Director",
      experience: "12+ Years Field Experience",
      expertise: "Structural RCC Design, Quality Audits & Site Management",
      icon: Briefcase,
    },
    {
      name: "S. Manikandan",
      role: "Senior Site Supervisor",
      experience: "10+ Years On-Site Leadership",
      expertise: "Brickwork Masonry Precision & Daily Curing Monitoring",
      icon: HardHat,
    },
    {
      name: "K. Ramesh",
      role: "RCC & Structural Specialist",
      experience: "8+ Years Heavy Construction",
      expertise: "Column Rebar Binding, Beam Shuttering & Slab Pouring",
      icon: Wrench,
    },
    {
      name: "VGA Skilled Masons & Crew",
      role: "Dedicated On-Site Workforce",
      experience: "80+ Certified Workers",
      expertise: "Plastering Finish, Brick Laying & Water Ponding Maintenance",
      icon: Users,
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Our Experts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Experienced Engineering & Site Team
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Engineers, supervisors, and skilled masons dedicated to responsible construction
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-amber-500 font-semibold mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {member.expertise}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span>Experience:</span>
                  <span className="text-slate-200">{member.experience}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
