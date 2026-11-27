import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agentsify UK | The right people, on shift, on time",
  description:
    "Vetted, compliance-checked staff for warehousing, forklift operations, hospitality and HGV driving. UK-wide staffing support, urgent cover available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} ${barlowSemiCondensed.variable}`}>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
