"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-white dark:bg-[#003366] py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6 text-[#003366] dark:text-white"
        >
          About Lisa Hospital
        </motion.h2>

        {/* Mission */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-lg mb-10 text-gray-700 dark:text-gray-200"
        >
          At Lisa Hospital, we are dedicated to providing compassionate,
          high-quality healthcare powered by modern technology and trusted
          specialists. Our mission is to serve patients with excellence and
          empathy.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: "250+", label: "Doctors" },
            { value: "10+", label: "Specialties" },
            { value: "50,000+", label: "Patients Served" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 * i }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <span className="text-4xl font-extrabold text-[#1BA3E2]">
                {stat.value}
              </span>
              <span className="text-lg text-[#003366] dark:text-white">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
