"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { 
  Star, Quote, ChevronLeft, ChevronRight, MessageSquare 
} from "lucide-react";

export const Testimonials: React.FC = () => {
  const { t } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "R. Sundaram",
      role: "G+1 House Owner",
      location: "Thanjavur, Tamil Nadu",
      quote: "VGA Builders handled our home construction with extreme responsibility. The daily site photo updates and proper 14-day slab curing gave us total peace of mind.",
      rating: 5,
    },
    {
      id: 2,
      name: "K. Meenakshi",
      role: "Commercial Property Owner",
      location: "Madurai, Tamil Nadu",
      quote: "Complete transparency in material specs and zero hidden costs. Their site engineers explained every stage from footing excavation to brick plastering.",
      rating: 5,
    },
    {
      id: 3,
      name: "S. Balakrishnan",
      role: "Duplex House Owner",
      location: "Thanjavur, Tamil Nadu",
      quote: "I was working outside Tamil Nadu while my house was built. VGA Builders kept me informed with videos of curing and brickwork every single day. Highly recommended!",
      rating: 5,
    },
  ];

  const prevTestimonial = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Our Clients Say About Us
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Real stories from home and commercial property owners across Tamil Nadu
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-amber-500/10 pointer-events-none" />

          <div className="relative z-10 space-y-6 text-center sm:text-left">
            {/* Stars */}
            <div className="flex items-center justify-center sm:justify-start space-x-1 text-amber-400">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            {/* Quote text */}
            <p className="text-base sm:text-xl font-medium text-slate-200 leading-relaxed italic">
              &quot;{testimonials[currentIndex].quote}&quot;
            </p>

            {/* Client Info */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-xs text-amber-400 font-semibold">
                  {testimonials[currentIndex].role} — {testimonials[currentIndex].location}
                </p>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
