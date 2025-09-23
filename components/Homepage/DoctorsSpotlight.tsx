"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getDoctors } from "@/lib/sanity";   // ✅ fetch doctors from Sanity
import { Doctor } from "@/types/sanity";     // ✅ Doctor type
import { urlFor } from "@/sanity/lib/image"; // ✅ Sanity image builder

export default function DoctorsSpotlight() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await getDoctors();
      // ✅ shuffle randomly & pick 4
      const shuffled = [...data].sort(() => 0.5 - Math.random());
      setDoctors(shuffled.slice(0, 4));
    };
    loadDoctors();
  }, []);

  return (
    <section className="py-10 dark:bg-[#003366]/10">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
          Meet Our Specialists
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Trusted experts dedicated to your health and wellbeing.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doc, i) => (
          <motion.div
            key={doc._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-xl overflow-hidden shadow-lg h-80"
          >
            {doc.photo ? (
              <Image
                src={urlFor(doc.photo).width(400).height(400).url()}
                alt={doc.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No Image</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
              <div className="p-4 text-white">
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                {doc.professional_title && (
                  <p className="text-sm text-gray-200">
                    {doc.professional_title}
                  </p>
                )}
              </div>
              <div className="absolute bottom-4 right-4">
                <Link
                  href="/appointments"
                  className="bg-[#1BA3E2] text-white px-4 py-2 rounded-lg hover:bg-[#148ec0] transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Meet All Doctors Button */}
      <div className="text-center mt-12">
        <Link
          href="/doctors"
          className="px-6 py-3 rounded-lg font-medium bg-[#1BA3E2] text-white hover:bg-[#148ec0] transition"
        >
          Meet Our Doctors
        </Link>
      </div>
    </section>
  );
}
