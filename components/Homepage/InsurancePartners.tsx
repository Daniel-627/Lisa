"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getInsurancePartners } from "@/lib/sanity";
import { InsurancePartner } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

export default function InsurancePartners() {
  const [partners, setPartners] = useState<InsurancePartner[]>([]);

  useEffect(() => {
    const loadPartners = async () => {
      const data = await getInsurancePartners();
      setPartners(data);
    };
    loadPartners();
  }, []);

  return (
    <section className="py-10">
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
            <motion.a
              key={partner._id}
              href={partner.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              {partner.logo ? (
                <Image
                  src={urlFor(partner.logo).url()}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain transition-transform"
                />
              ) : (
                <div className="w-[120px] h-[60px] bg-gray-200 flex items-center justify-center rounded text-sm text-gray-500">
                  No Logo
                </div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
