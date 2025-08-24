"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./ThemeToggle"
import { ToggleMenu } from "./ToggleMenu"
import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-[#003366]"
    >
      {/* Top Bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center justify-between px-4 py-2"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-[#1BA3E2] dark:text-white hover:text-[#40E0D0] transition-colors"
        >
          Lisa PMS
        </Link>

        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <ToggleMenu />
          </div>

          {/* Call Us button */}
          <Button
            size="sm"
            className="hidden md:flex bg-[#1BA3E2] hover:bg-[#40E0D0] text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Us
          </Button>
        </div>
      </motion.div>

      {/* Bottom Bar - only desktop */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="hidden md:flex items-center justify-between px-6 py-3"
      >
        {/* Nav links */}
        <div className="flex gap-6">
          <Link href="/" className="text-[#1BA3E2] dark:text-[#ffff] hover:text-[#40E0D0] transition-colors">Home</Link>
          <Link href="/about" className="text-[#1BA3E2] dark:text-[#ffff] hover:text-[#40E0D0] transition-colors">About Us</Link>
          <Link href="/services" className="text-[#1BA3E2] dark:text-[#ffff] hover:text-[#40E0D0] transition-colors">Services</Link>
          <Link href="/doctors" className="text-[#1BA3E2] dark:text-[#ffff] hover:text-[#40E0D0] transition-colors">Doctors</Link>
          <Link href="/contact" className="text-[#1BA3E2] dark:text-[#ffff] hover:text-[#40E0D0] transition-colors">Contact Us</Link>
          <Link href="/news" className="text-[#1BA3E2] dark:text-[#ffff] hover:text-[#40E0D0] transition-colors">News</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link href="/auth">
            <Button
              variant="outline"
              size="sm"
              className="border-[#1BA3E2] text-[#1BA3E2] hover:bg-[#1BA3E2] hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-[#003366]"
            >
              Sign Up / Login
            </Button>
          </Link>
          <Link href="/appointments">
            <Button
              size="sm"
              className="bg-[#1BA3E2] hover:bg-[#40E0D0] text-white"
            >
              Book Appointment
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.nav>
  )
}
