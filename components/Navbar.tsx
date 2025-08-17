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
      className="w-full border-b"
    >
      {/* Top Bar */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center justify-between px-4 py-2"
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          Lisa PMS
        </Link>

        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <div className="block md:hidden">
            <ToggleMenu />
          </div>

          {/* Call Us button */}
          <Button size="sm" className="hidden md:flex">
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
        className="hidden md:flex items-center justify-between px-6 py-3 bg-background/80 backdrop-blur-md"
      >
        {/* Nav links */}
        <div className="flex gap-6">
          <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/about" className="text-blue-600 hover:text-blue-700 transition-colors">About Us</Link>
          <Link href="/services" className="text-blue-600 hover:text-blue-700 transition-colors">Services</Link>
          <Link href="/staff" className="text-blue-600 hover:text-blue-700 transition-colors">Staff/Doctors</Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 transition-colors">Contact Us</Link>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 transition-colors">Blog</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link href="/auth">
            <Button variant="outline" size="sm">Sign Up / Login</Button>
          </Link>
          <Link href="/appointments">
            <Button size="sm">Book Appointment</Button>
          </Link>
          <ThemeToggle />
        </div>
      </motion.div>
    </motion.nav>
  )
}
