"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ToggleMenu() {
  const [open, setOpen] = React.useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <div>
      {/* Menu toggle button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="p-2 text-[#1BA3E2] dark:text-white hover:text-[#40E0D0] transition-colors duration-200"
      >
        {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Slide-in menu from LEFT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-[#003366] shadow-lg z-50 p-6 flex flex-col gap-6"
          >
            {/* Header with logo + close button */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-[#1BA3E2] dark:text-white">
                LISA PMS
              </span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 text-[#1BA3E2] dark:text-white hover:text-[#40E0D0] transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-4 text-lg">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/departments", label: "Departments" },
                { href: "/doctors", label: "Doctors" },
                { href: "/contact", label: "Contact Us" },
                { href: "/newsletter", label: "News" },
                { href: "/appointments", label: "Appointments" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-[#1BA3E2] dark:text-white hover:text-[#40E0D0] dark:hover:text-[#40E0D0] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Buttons + Theme toggle */}
            <div className="flex flex-col gap-4 mt-auto">
              <Link href="/auth" onClick={closeMenu}>
                <Button
                  variant="outline"
                  className="w-full border-[#1BA3E2] text-[#1BA3E2] hover:bg-[#1BA3E2] hover:text-white dark:border-white dark:text-white dark:hover:bg-[#40E0D0]"
                >
                  Sign Up / Login
                </Button>
              </Link>
              <Link href="/appointments" onClick={closeMenu}>
                <Button className="w-full bg-[#1BA3E2] hover:bg-[#40E0D0] text-white dark:bg-[#40E0D0] dark:hover:bg-[#1BA3E2]">
                  Book Appointment
                </Button>
              </Link>
              {/* Call Us button (same style as Book Appointment) */}
              <a href="tel:+254700000000" onClick={closeMenu}>
                <Button className="w-full bg-[#1BA3E2] hover:bg-[#40E0D0] text-white dark:bg-[#40E0D0] dark:hover:bg-[#1BA3E2] flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us
                </Button>
              </a>
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
