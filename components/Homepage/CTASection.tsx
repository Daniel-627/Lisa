"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section className=" py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <PhoneCall className="w-8 h-8" />
            Need urgent care?
          </h2>
          <p className="mt-2 text-lg">
            Call us now at{" "}
            <span className="font-semibold">+254 712 345 678</span>
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/appointments"
            className="bg-white text-[#003366] px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Book Online Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
