import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "PSMJ | Experiential Engagement & Event Solutions",
    template: "%s | PSMJ",
  },
  description:
    "PSMJ is a leading experiential engagement and event solutions company with over two decades of expertise in creating impactful corporate experiences — employee engagement, learning interventions, leadership experiences, conferences, expos, and business events.",
  keywords: [
    "experiential engagement",
    "event solutions",
    "corporate events",
    "employee engagement",
    "leadership experiences",
    "learning interventions",
    "conferences",
    "expos",
    "business events",
    "brand activation",
    "PSMJ",
  ],
  metadataBase: new URL("https://psmj.in/"), // replace with your actual domain
  openGraph: {
    siteName: "PSMJ",
    title: "PSMJ | Experiential Engagement & Event Solutions",
    description:
      "Transforming teams, strengthening leadership, and creating engaging workplace experiences through learning, consulting, events, and brand activation — for over two decades.",
    url: "https://psmj.in/",
    type: "website",
    images: [
      {
        url: "https://psmj.in/images/images/PSMJ-meta.jpg", // replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "PSMJ — Experiential Engagement & Event Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PSMJ | Experiential Engagement & Event Solutions",
    description:
      "Corporate experiences that transform teams and strengthen leadership — learning, consulting, events, and brand activation.",
    images: ["https://psmj.in/images/images/PSMJ-meta.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full  ">{children}</body>
       <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
    </html>
  );
}
