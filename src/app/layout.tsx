import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { JsonLdSchema } from "@/components/JsonLdSchema";

export const metadata: Metadata = {
  title: "VGA Builders | Construction Company in Tamil Nadu",
  description:
    "VGA Builders delivers residential and commercial construction services in Tamil Nadu with transparent project updates, quality workmanship, proper curing practices, and responsible site management.",
  keywords: [
    "Construction Company Tamil Nadu",
    "Builders in Thanjavur",
    "Builders in Madurai",
    "Residential Construction Tamil Nadu",
    "Commercial Construction Tamil Nadu",
    "House Construction Services",
    "Building Contractors Tamil Nadu",
    "G+1 House Construction",
    "Home Builders Tamil Nadu",
    "Civil Construction Company",
    "Brick Work Contractors",
    "Quality Construction Company",
    "Concrete Curing Services",
    "Best Construction Company in Tamil Nadu",
  ],
  authors: [{ name: "VGA Builders" }],
  creator: "VGA Builders",
  publisher: "VGA Builders",
  metadataBase: new URL("https://vgabuilders.in"),
  openGraph: {
    title: "VGA Builders | Building With Responsibility",
    description:
      "Premier residential & commercial construction builders in Thanjavur & Madurai. On-site progress documentation & proper water curing guarantee.",
    url: "https://vgabuilders.in",
    siteName: "VGA Builders",
    images: [
      {
        url: "/images/gallery-1.jpg",
        width: 1200,
        height: 630,
        alt: "VGA Builders Site Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGA Builders | Construction Company in Tamil Nadu",
    description:
      "Responsible home & commercial construction with complete site transparency and quality curing practices.",
    images: ["/images/gallery-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        <AppProvider>
          <JsonLdSchema />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
