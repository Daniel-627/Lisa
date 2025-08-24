"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Activity, FileCheck } from "lucide-react";

const differentiators = [
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    description: "Round-the-clock medical support for any urgent needs.",
  },
  {
    icon: ShieldCheck,
    title: "Accredited Specialists",
    description: "Highly qualified doctors with international recognition.",
  },
  {
    icon: Activity,
    title: "Modern Equipment",
    description: "Advanced diagnostic and treatment technology.",
  },
  {
    icon: FileCheck,
    title: "Insurance Accepted",
    description: "We work with major providers for seamless care.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
          Why Choose Lisa Hospital?
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Compassion, expertise, and technology combined for your health.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {differentiators.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-gray-50 dark:bg-[#003366]/30 rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#40E0D0]/20 text-[#1BA3E2] mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-lg font-semibold text-[#003366] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
