"use client";

import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Scissors, Scan } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Stethoscope,
    title: "Pediatrics",
    description: "Comprehensive care for children and newborns.",
    link: "/services/pediatrics",
  },
  {
    icon: HeartPulse,
    title: "Cardiology",
    description: "Advanced heart and vascular care for all ages.",
    link: "/services/cardiology",
  },
  {
    icon: Scissors,
    title: "Surgery",
    description: "Modern surgical procedures with expert teams.",
    link: "/services/surgery",
  },
  {
    icon: Scan,
    title: "Radiology",
    description: "State-of-the-art imaging and diagnostic services.",
    link: "/services/radiology",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-8 bg-gray-50 dark:bg-[#003366]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
          Our Departments
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Specialized care across multiple fields of medicine
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#1BA3E2]/10 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1BA3E2]/20 text-[#1BA3E2] mb-4">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-[#003366] dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="mt-4 inline-block text-sm font-medium text-[#1BA3E2] hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
