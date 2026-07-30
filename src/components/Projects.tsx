"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Building2, MapPin, CheckCircle, Clock, Eye 
} from "lucide-react";

export const Projects: React.FC = () => {
  const { t } = useApp();
  const [filter, setFilter] = useState<"all" | "ongoing" | "completed">("all");

  const projectList = [
    {
      id: 1,
      title: t("project_1_title"),
      location: t("project_1_location"),
      status: t("project_1_status"),
      category: "ongoing",
      image: "/images/gallery-3.jpg",
      features: ["Brick Work Masonry", "RCC Structural Columns", "Stage-wise Quality Inspection", "24/7 Site Progress Monitoring"],
    },
    {
      id: 2,
      title: t("project_2_title"),
      location: t("project_2_location"),
      status: t("project_2_status"),
      category: "ongoing",
      image: "/images/gallery-4.jpg",
      features: ["Exterior Smooth Plastering", "Scaffolding Safety Rigging", "Structural Elevation Finishing", "Site Engineer Supervised"],
    },
    {
      id: 3,
      title: t("project_3_title"),
      location: t("project_3_location"),
      status: t("project_3_status"),
      category: "completed",
      image: "/images/gallery-7.jpg",
      features: ["Individual Villa Homes", "Architectural Elevation", "Turnkey Key Handover", "Complete Water Curing Certified"],
    },
  ];

  const filteredProjects = filter === "all" 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t("projects_title")}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t("projects_subtitle")}
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center space-x-3 pt-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                filter === "all"
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("ongoing")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                filter === "ongoing"
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40"
              }`}
            >
              Ongoing Sites
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                filter === "completed"
                  ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-amber-500/40"
              }`}
            >
              Completed Handovers
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[10px] font-bold text-amber-400 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>{project.status.split("-")[0]}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-amber-500 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {project.status}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-800">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 rounded-xl text-xs font-extrabold text-center block transition-colors uppercase tracking-wider"
                >
                  Request Similar Project Estimate
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
