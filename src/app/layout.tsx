import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
      <body className={`${barlow.variable} ${barlowCondensed.variable}`}>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
