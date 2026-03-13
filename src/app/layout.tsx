import type { Metadata } from "next";
import "./globals.css";
import { getNavigation, getFooter } from "@/lib/sanity/queries";
import { mockNavigation, mockFooter } from "@/lib/sanity/mockData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Catedra UFC — Excellence In Education",
  description: "Shaping the future through world-class education, groundbreaking research, and a vibrant community of scholars.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let navData = mockNavigation;
  let footerData = mockFooter;

  try {
    const [nav, footer] = await Promise.all([getNavigation(), getFooter()]);
    if (nav) navData = nav;
    if (footer) footerData = footer;
  } catch {
    // Falls back to mock data in development
  }

  return (
    <html lang="en">
      <body>
        <Navbar data={navData} />
        <main>{children}</main>
        <Footer data={footerData} />
      </body>
    </html>
  );
}
