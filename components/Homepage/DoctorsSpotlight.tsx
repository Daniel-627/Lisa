"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mwangi",
    specialty: "Pediatrics",
    image: "/images/doctors/doctor1.jpg",
  },
  {
    id: 2,
    name: "Dr. James Otieno",
    specialty: "Cardiology",
    image: "/images/doctors/doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Amina Yusuf",
    specialty: "Surgery",
    image: "/images/doctors/doctor3.jpg",
  },
  {
    id: 4,
    name: "Dr. Peter Kariuki",
    specialty: "Radiology",
    image: "/images/doctors/doctor4.jpg",
  },
];

export default function DoctorsSpotlight() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="py-10  dark:bg-[#003366]/10">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
          Meet Our Specialists
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Trusted experts dedicated to your health and wellbeing.
        </p>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_25%] bg-white dark:bg-[#003366]/40 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-56 rounded-t-xl overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover hover:scale-105 transition"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#003366] dark:text-white">
                  {doc.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {doc.specialty}
                </p>
                <Link
                  href="/appointments"
                  className="mt-3 inline-block bg-[#1BA3E2] text-white px-4 py-2 rounded-full hover:bg-[#003366] transition"
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
