"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useApp } from "@/context/AppContext";
import { 
  Images, Eye, X, ChevronLeft, ChevronRight, ZoomIn, Layers, Droplets, Home, Building, HardHat 
} from "lucide-react";

export const Gallery: React.FC = () => {
  const { t } = useApp();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: "/images/gallery-1.jpg",
      title: "Structural Columns & Steel Framing",
      category: "masonry",
      categoryName: "Masonry & Steel Work",
    },
    {
      id: 2,
      title: "Exterior Scaffolding & Plastering",
      src: "/images/gallery-2.jpg",
      category: "site-progress",
      categoryName: "Site Progress Gallery",
    },
    {
      id: 3,
      title: "RCC Roof Slab Curing Ponding",
      src: "/images/gallery-3.jpg",
      category: "curing",
      categoryName: "Curing Process Gallery",
    },
    {
      id: 4,
      title: "Thanjavur Residential Villa Brickwork",
      src: "/images/gallery-4.jpg",
      category: "residential",
      categoryName: "Residential Gallery",
    },
    {
      id: 5,
      title: "Brick Wall Moistening & Curing",
      src: "/images/gallery-5.jpg",
      category: "curing",
      categoryName: "Curing Process Gallery",
    },
    {
      id: 6,
      title: "Madurai Commercial Complex Elevation",
      src: "/images/gallery-6.jpg",
      category: "commercial",
      categoryName: "Commercial Gallery",
    },
    {
      id: 7,
      title: "Turnkey Individual Home Handover",
      src: "/images/gallery-7.jpg",
      category: "residential",
      categoryName: "Residential Gallery",
    },
    {
      id: 8,
      title: "Quality Concrete Inspection & Testing",
      src: "/images/gallery-8.jpg",
      category: "site-progress",
      categoryName: "Site Progress Gallery",
    },
  ];

  const categories = [
    { id: "all", label: "All Images", icon: Images },
    { id: "masonry", label: "Masonry Work", icon: Layers },
    { id: "curing", label: "Curing Process", icon: Droplets },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building },
    { id: "site-progress", label: "Site Progress", icon: HardHat },
  ];

  const filteredItems = activeTab === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Images className="w-3.5 h-3.5" />
            <span>Site Visual Documentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Real Site Progress Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Click any image to open full screen preview with zoom support
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === cat.id
                      ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20"
                      : "bg-slate-950 text-slate-300 border border-slate-800 hover:border-amber-500/40"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer border border-slate-800 bg-slate-950 shadow-xl hover:border-amber-500/60 transition-all duration-300"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 inline-block">
                  {item.categoryName}
                </span>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-3 rounded-full bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-3 rounded-full bg-slate-900 text-slate-300 hover:text-amber-400 border border-slate-800 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] relative flex flex-col items-center">
            <div className="relative w-full h-[65vh] rounded-2xl overflow-hidden border border-amber-500/30">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center space-y-1">
              <h3 className="text-lg font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-amber-400 font-semibold">
                {filteredItems[lightboxIndex].categoryName} ({lightboxIndex + 1} / {filteredItems.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
