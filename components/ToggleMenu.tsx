"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/ThemeToggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ToggleMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      {/* Menu button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#1BA3E2] dark:text-white hover:text-[#40E0D0] transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Slide-in menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-[#003366] shadow-lg z-50 p-6 flex flex-col gap-6"
          >
            {/* Nav links */}
            <div className="flex flex-col gap-4 text-lg">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/doctors", label: "Doctors" },
                { href: "/contact", label: "Contact Us" },
                { href: "/blog", label: "Blog" },
                { href: "/appointments", label: "Appointments" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[#1BA3E2] dark:text-white hover:text-[#40E0D0] dark:hover:text-[#40E0D0] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Buttons + Theme toggle */}
            <div className="flex flex-col gap-3 mt-auto">
              <Link href="/auth">
                <Button
                  variant="outline"
                  className="w-full border-[#1BA3E2] text-[#1BA3E2] hover:bg-[#1BA3E2] hover:text-white dark:border-white dark:text-white dark:hover:bg-[#40E0D0]"
                >
                  Sign Up / Login
                </Button>
              </Link>
              <Link href="/appointments">
                <Button className="w-full bg-[#1BA3E2] hover:bg-[#40E0D0] text-white dark:bg-[#40E0D0] dark:hover:bg-[#1BA3E2]">
                  Book Appointment
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
