"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { getDepartments } from "@/lib/sanity";
import { Department } from "@/types/sanity";

export default function FeaturedServices() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (err) {
        console.error("Error fetching departments:", err);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <section className="py-12 bg-gray-50 dark:bg-[#003366]">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#003366] dark:text-white">
          Our Departments
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Specialized care across multiple fields of medicine
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, i) => (
          <motion.div
            key={dept._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/services/${dept.slug}`}
              className="flex items-center justify-between dark:bg-[#1BA3E2]/20 text-[#003366] hover:scale-110 dark:text-white rounded-xl p-6 shadow-md dark:hover:bg-[#1489c0] transition group"
            >
              <span className="text-lg font-semibold">{dept.name}</span>
              <ArrowRight className="w-6 h-6 text-[#1BA3E2] dark:text-white group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
