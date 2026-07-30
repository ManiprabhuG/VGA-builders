"use client";

import React from "react";

export const JsonLdSchema: React.FC = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "VGA Builders",
    "image": "https://vgabuilders.in/images/logo.jpg",
    "@id": "https://vgabuilders.in",
    "url": "https://vgabuilders.in",
    "telephone": "+919791443090",
    "priceRange": "₹₹₹",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Thanjavur Main Road",
        "addressLocality": "Thanjavur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "613001",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "K.K. Nagar",
        "addressLocality": "Madurai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "625020",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.787,
      "longitude": 79.1378
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://instagram.com/vga_builders"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is water curing important in concrete construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proper water curing allows cement to hydrate fully, preventing shrinkage cracks, enhancing structural durability, and ensuring maximum 28-day compressive strength."
        }
      },
      {
        "@type": "Question",
        "name": "Does VGA Builders handle residential G+1 house construction in Thanjavur and Madurai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, VGA Builders specializes in G+1 residential homes, custom villas, and commercial building construction across Thanjavur, Madurai, and surrounding Tamil Nadu regions."
        }
      },
      {
        "@type": "Question",
        "name": "How does VGA Builders ensure on-site transparency for clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "VGA Builders documents site progress daily with photos and videos of curing, brickwork, and RCC slab casting, keeping clients updated continuously."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vgabuilders.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://vgabuilders.in/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://vgabuilders.in/#projects"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};
