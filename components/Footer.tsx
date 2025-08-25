"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-gray-200 dark:bg-black dark:text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1 - Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/doctors" className="hover:text-white">Staff / Doctors</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog / News</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        {/* Column 2 - Patient Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">For Patients</h3>
          <ul className="space-y-2">
            <li><Link href="/appointments" className="hover:text-white">Book Appointment</Link></li>
            <li><Link href="/auth" className="hover:text-white">Sign Up / Login</Link></li>
            <li><Link href="/billing" className="hover:text-white">Billing</Link></li>
            <li><Link href="/support" className="hover:text-white">Support</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 3 - Resources & Legal */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/siteplan" className="hover:text-white">Site Plan</Link></li>
            <li><Link href="/newsletter" className="hover:text-white">Newsletters</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact & Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">123 Lisa Hospital Road<br />Nairobi, Kenya</p>
          <p className="mt-2 text-sm">📞 +254 700 000 000</p>
          <p className="text-sm">✉️ info@lisahospital.com</p>

          {/* Subscribe */}
          <div className="mt-5">
            <p className="text-sm mb-2">Subscribe for health tips & updates</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="flex-1 px-3 py-2 rounded-l-md bg-white/10 border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-r-md border border-white/30 bg-transparent text-white hover:bg-white hover:text-[#003366] transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com" target="_blank"><Facebook className="w-5 h-5 hover:text-white" /></Link>
            <Link href="https://twitter.com" target="_blank"><Twitter className="w-5 h-5 hover:text-white" /></Link>
            <Link href="https://instagram.com" target="_blank"><Instagram className="w-5 h-5 hover:text-white" /></Link>
            <Link href="https://linkedin.com" target="_blank"><Linkedin className="w-5 h-5 hover:text-white" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 dark:border-gray-700 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Lisa PMS. All rights reserved.
      </div>
    </footer>
  );
}
