"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Stethoscope, Syringe, HeartPulse, Pill } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Decorative medical icons (background) */}
      <div className="absolute inset-0 z-0">
        <Stethoscope className="hidden sm:block absolute top-[10%] left-[5%] w-10 h-10 sm:w-16 sm:h-16 text-[#1BA3E2]/10 dark:text-white/10 rotate-12" />
        <Syringe className="absolute top-[25%] right-[8%] w-12 h-12 sm:w-20 sm:h-20 text-[#1BA3E2]/10 dark:text-white/10 -rotate-6" />
        <HeartPulse className="hidden md:block absolute bottom-[15%] left-[20%] w-12 h-12 md:w-24 md:h-24 text-[#1BA3E2]/10 dark:text-white/10 rotate-3" />
        <Pill className="absolute bottom-[8%] right-[30%] w-10 h-10 sm:w-14 sm:h-14 text-[#1BA3E2]/10 dark:text-white/10 rotate-45" />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-[#003366] dark:text-white"
        >
          About <span className="text-[#1BA3E2]">Lisa Hospital</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-6"
        >
          Lisa Hospital is more than a healthcare facility—it is a community of
          dedicated professionals committed to improving lives. For over a
          decade, we have combined compassionate care with cutting-edge
          technology to meet the evolving needs of our patients. From primary
          consultations to specialized treatments, we ensure every patient feels
          valued, safe, and supported. Our hospital continues to grow, guided by
          a mission of excellence, innovation, and empathy. With world-class
          doctors, modern infrastructure, and a patient-first culture, Lisa
          Hospital is shaping the future of healthcare with heart.
        </motion.p>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#003366] dark:text-white font-semibold underline hover:text-[#1BA3E2] dark:hover:text-[#40E0D0] transition"
        >
          Learn more about us
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
