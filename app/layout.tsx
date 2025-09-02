import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/Homepage/CTASection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lisa Hospital",
  description: "Modern healthcare with compassion and technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col 
        bg-white text-black dark:bg-[#003366] dark:text-white`}
      >
        <Providers>
          {/* Main container */}
          <div className="flex-1 w-full max-w-7xl mx-auto px-4 flex flex-col mb-6">
            <header>
              <Navbar />
            </header>

            <main className="flex-1">{children}</main>
          </div>

          {/* Footer */}
          <footer className="w-full bg-[#003366] text-white dark:bg-black dark:text-white">
            <div className="max-w-7xl mx-auto px-4 mt-10">
              <CTASection />
              <Footer />
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
