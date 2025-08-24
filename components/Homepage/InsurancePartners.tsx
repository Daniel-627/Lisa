"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { id: 1, name: "NHIF", logo: "/images/partners/nhif.png" },
  { id: 2, name: "Jubilee Insurance", logo: "/images/partners/jubilee.png" },
  { id: 3, name: "AAR Insurance", logo: "/images/partners/aar.png" },
  { id: 4, name: "Britam", logo: "/images/partners/britam.png" },
  { id: 5, name: "APA Insurance", logo: "/images/partners/apa.png" },
  { id: 6, name: "UAP Old Mutual", logo: "/images/partners/uap.png" },
];

export default function InsurancePartners() {
  return (
    <section className="py-10 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
            Insurance & Partners
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            We work with leading insurance providers and partners to give you the best care.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
