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
        className="p-2"
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
            className="fixed top-0 right-0 h-full w-3/4 bg-background shadow-lg z-50 p-6 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/staff" onClick={() => setOpen(false)}>Staff/Doctors</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            </div>

            <div className="flex flex-col gap-3 mt-auto">
              <Link href="/auth">
                <Button variant="outline" className="w-full">Sign Up / Login</Button>
              </Link>
              <Link href="/appointments">
                <Button className="w-full">Book Appointment</Button>
              </Link>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
