"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompanyProfile } from "@/components/CompanyProfile";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Projects } from "@/components/Projects";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { QualityEducation } from "@/components/QualityEducation";
import { Gallery } from "@/components/Gallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Testimonials } from "@/components/Testimonials";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingUtilities } from "@/components/FloatingUtilities";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <Hero />
      <CompanyProfile />
      <Services />
      <WhyChooseUs />
      <Projects />
      <ProcessTimeline />
      <QualityEducation />
      <Gallery />
      <VideoShowcase />
      <Testimonials />
      <TeamSection />
      <ContactSection />
      <Footer />
      <FloatingUtilities />
    </main>
  );
}
