"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Play, Video, Eye, Sparkles, CheckCircle2, Volume2, VolumeX 
} from "lucide-react";

export const VideoShowcase: React.FC = () => {
  const { t } = useApp();
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  const videoCards = [
    {
      id: 1,
      title: "Real Site Progress: Thanjavur G+1 Project",
      category: "Site Progress Reel",
      thumbnail: "/images/gallery-2.jpg",
      views: "2.4k views",
      duration: "0:45",
      desc: "Weekly site update video shared directly with house owner.",
    },
    {
      id: 2,
      title: "Quality Curing Water Ponding Method",
      category: "Curing Reel",
      thumbnail: "/images/gallery-3.jpg",
      views: "4.1k views",
      duration: "0:30",
      desc: "Demonstrating roof slab water bunding & ponding techniques.",
    },
    {
      id: 3,
      title: "Precision Brick Work & Mortar Alignment",
      category: "Masonry Reel",
      thumbnail: "/images/gallery-4.jpg",
      views: "1.8k views",
      duration: "0:50",
      desc: "Live site footage showing plumb bob vertical alignment.",
    },
    {
      id: 4,
      title: "Madurai Commercial Scaffolding & Plastering",
      category: "Construction Update",
      thumbnail: "/images/gallery-6.jpg",
      views: "3.2k views",
      duration: "1:15",
      desc: "Exterior plastering & safety scaffolding inspection.",
    },
  ];

  return (
    <section id="videos" className="py-20 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Video className="w-3.5 h-3.5" />
            <span>Reels-Inspired Site Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Watch Real Site Progress Videos
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            We document actual construction work so you can inspect quality from anywhere
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoCards.map((video) => (
            <div
              key={video.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-amber-500/60 transition-all duration-300 shadow-xl flex flex-col group relative"
            >
              {/* Thumbnail Container */}
              <div className="relative h-80 w-full overflow-hidden bg-slate-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/40 text-[10px] font-extrabold text-amber-400">
                  {video.category}
                </div>

                <div className="absolute top-4 right-4 bg-slate-950/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-bold text-slate-300">
                  {video.duration}
                </div>

                {/* Play Icon Trigger */}
                <button
                  onClick={() => setPlayingVideoId(video.id === playingVideoId ? null : video.id)}
                  className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shadow-2xl shadow-amber-500/50">
                    <Play className="w-6 h-6 fill-slate-950 ml-1" />
                  </div>
                </button>
              </div>

              {/* Card Bottom Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center space-x-2 text-[11px] text-amber-500 font-semibold mb-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{video.views}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {video.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 font-semibold border-t border-slate-800">
                  <span>Verified Site Reel</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Autoplay Ready
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
