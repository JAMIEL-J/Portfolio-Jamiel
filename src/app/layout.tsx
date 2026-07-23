import type { Metadata } from "next";
import { Cinzel_Decorative, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: ["400"],
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamiel J — Data Analyst & AI Systems Builder",
  description: "SQL pipelines, metrics-driven dashboards, predictive modeling, and production analytics platforms. Currently targeting Data Analyst, ML Analyst, and Data Scientist roles.",
  authors: [{ name: "Jamiel J" }],
  keywords: ["Data Analyst", "AI Systems Builder", "SQL", "Tableau", "Python", "ML Analyst", "Data Scientist", "Vizzy", "DNA Assistant"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${instrument.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="googledf03a7f773d041b0" />
      </head>
      <body className="min-h-full flex flex-col bg-beige-bg text-coffee-dark font-sans selection:bg-coffee-medium selection:text-beige-bg">
        {children}
      </body>
    </html>
  );
}
