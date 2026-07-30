# VGA Builders - Premium Construction Company Web Application

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-amber)](#)

A modern, responsive, high-performance, and SEO-optimized web application for **VGA Builders**, a premier Tamil Nadu-based construction firm specializing in residential villas, G+1 houses, multi-story buildings, and commercial complexes across Thanjavur, Madurai, and surrounding regions.

---

## 🌟 Key Features

- **High-Impact Hero Section**: Real site progress showcase, brand taglines, key statistics counter (150+ Projects, 120+ Clients, 12+ Years, 80+ Workers), and quick contact actions.
- **Dual Language i18n**: Seamless toggle between **English** and **Tamil (தமிழ்)** across all sections.
- **Theme Switcher**: Dark & Light mode toggle with user preference persistence via `localStorage`.
- **Comprehensive Services Grid**: Interactive cards for Residential, Commercial, Brick Work, RCC Structural, Plastering, and Quality Curing.
- **Why Choose Us**: Feature highlights covering On-Site Transparency, Quality First, Responsible Engineers, Live Site Reports, Timely Delivery, and Local Tamil Nadu Expertise.
- **8-Step Construction Process Timeline**: Detailed workflow from consultation to handover, featuring a dedicated spotlight on **Step 6: Curing** (*"Cement and Steel are Important, but Curing is Like Gold."*).
- **Quality Education Infographic**: Dedicated section on *"Why Proper Curing Matters"* with side-by-side comparative analysis of structural durability vs shrinkage cracks.
- **Real Site Progress Gallery**: Category filters (Masonry, Curing, Residential, Commercial, Site Progress) with full-screen lightbox preview, zoom, and mobile touch support using authentic project images (`gallery-1.jpg` to `gallery-8.jpg`).
- **Reels-Inspired Video Showcase**: Interactive video progress cards with views, duration tags, and autoplay indicators.
- **Interactive Enquiry Form**: Multi-step project estimate & engineer site visit request form with instant visual confirmation.
- **Direct Contact & Offices**: Clickable phone numbers (`tel:+919791443090`), email, and office locations for **Thanjavur** & **Madurai**.
- **Floating Utilities Bar**: Quick access panel for language switching, theme toggling, and instant WhatsApp chat.
- **Technical SEO Suite**: Dynamic `sitemap.xml`, `robots.txt`, OpenGraph cards, Twitter preview cards, and JSON-LD Structured Data (`LocalBusiness`, `GeneralContractor`, `FAQPage`, `BreadcrumbList`).

---

## 🛠️ Technology Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism CSS variables
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Micro-Interactions
- **SEO & Structured Data**: Next Metadata API & JSON-LD

---

## 📁 Folder Structure

```
VGA Builders/
├── company.md                  # Project specification document
├── README.md                   # Complete project documentation
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
├── public/
│   └── images/                 # Gallery & logo assets
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       └── ... logo.jpg
└── src/
    ├── app/
    │   ├── globals.css         # Global design system & theme variables
    │   ├── layout.tsx          # Root layout with Metadata & Providers
    │   ├── page.tsx            # Main page structure
    │   ├── robots.ts           # Technical SEO robots.txt generator
    │   └── sitemap.ts          # Technical SEO sitemap.xml generator
    ├── components/
    │   ├── Header.tsx          # Responsive navbar with language & theme toggles
    │   ├── Hero.tsx            # Hero section & stats counters
    │   ├── CompanyProfile.tsx  # Mission, vision & goals
    │   ├── Services.tsx        # 6 Core construction services
    │   ├── WhyChooseUs.tsx     # Advantage cards & local trust banner
    │   ├── Projects.tsx        # Portfolio showcase with filter tabs
    │   ├── ProcessTimeline.tsx # 8-Step timeline & Curing quote spotlight
    │   ├── QualityEducation.tsx# Curing science & comparison infographic
    │   ├── Gallery.tsx         # Media gallery with lightbox preview
    │   ├── VideoShowcase.tsx   # Reels-inspired video cards
    │   ├── Testimonials.tsx   # Client reviews slider
    │   ├── TeamSection.tsx     # Engineers & site supervisors
    │   ├── EnquiryForm.tsx     # Project estimate & site visit form
    │   ├── ContactSection.tsx  # Thanjavur & Madurai office details
    │   ├── Footer.tsx          # Quick links & copyright
    │   ├── FloatingUtilities.tsx# Floating WhatsApp & settings bar
    │   └── JsonLdSchema.tsx    # Technical SEO JSON-LD schema
    └── context/
        └── AppContext.tsx      # i18n & Theme state manager
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/ManiprabhuG/VGA-builders.git
cd VGA-builders
npm install
```

### 3. Development Server
Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build & Production Verification
To verify code compilation and create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📤 Deployment Guide

### Vercel Deployment
1. Push your repository to GitHub (`https://github.com/ManiprabhuG/VGA-builders.git`).
2. Log in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import the `VGA-builders` repository.
4. Keep standard build settings (`Framework Preset: Next.js`, `Build Command: next build`).
5. Click **Deploy**. Vercel will automatically configure SSL, CDN caching, and automatic deployments on git push.

---

## 📄 License & Credits

© **VGA Builders**. All Rights Reserved.  
*Building With Responsibility.*
