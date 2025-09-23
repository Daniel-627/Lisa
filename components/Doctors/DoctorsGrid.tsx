"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { getDoctors } from "@/lib/sanity";
import { Doctor } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

export default function DoctorsGrid() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [activeDep, setActiveDep] = useState("All");
  const [search, setSearch] = useState("");
  const [departments, setDepartments] = useState<string[]>(["All"]);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await getDoctors();
      setDoctors(data);

      // ✅ Collect unique departments from doctors
      const uniqueDeps = Array.from(
        new Set(data.map((doc) => doc.department?.name).filter(Boolean))
      ) as string[];

      setDepartments(["All", ...uniqueDeps]);
    };
    loadDoctors();
  }, []);

  // ✅ Filter logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesDep =
        activeDep === "All" ||
        doc.department?.name?.toLowerCase() === activeDep.toLowerCase();

      const matchesSearch =
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.professional_title?.toLowerCase().includes(search.toLowerCase());

      return matchesDep && matchesSearch;
    });
  }, [doctors, activeDep, search]);

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-[#002244]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003366] dark:text-white">
          Meet Our Doctors
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Our dedicated team of specialists is here to provide expert care,
          tailored to your needs.
        </p>
      </div>

      {/* ✅ Search bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search doctors by name or specialty..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#003366] text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-[#1BA3E2] outline-none"
        />
      </div>

      {/* ✅ Dynamic Filter buttons */}
      <div className="bg-white dark:bg-[#003366] py-4 px-3 flex gap-3 flex-wrap justify-center mb-10 rounded-lg shadow">
        {departments.map((dep) => (
          <button
            key={dep}
            onClick={() => setActiveDep(dep)}
            className={`px-4 py-2 rounded-lg font-medium transition ${activeDep === dep
                ? "bg-[#1BA3E2] text-white"
                : "bg-gray-100 dark:bg-[#002244] text-[#1BA3E2] hover:bg-[#40E0D0] hover:text-white"
              }`}
          >
            {dep}
          </button>
        ))}
      </div>

      {/* ✅ Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDoctors.map((doc, i) => (
            <motion.div
              key={doc._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#003366] rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              {/* Profile Image */}
              <div className="relative w-full h-64">
                {doc.photo ? (
                  <Image
                    src={urlFor(doc.photo).url()}
                    alt={doc.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-[#1BA3E2]">
                  {doc.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 mt-1">
                  {doc.professional_title}
                </p>
                {doc.department && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {doc.department.name}
                  </p>
                )}

                {/* CTA */}
                <Link
                  href={`/doctors/${doc.slug}`}
                  className="mt-auto w-full bg-[#1BA3E2] text-white py-3 px-4 rounded-lg hover:bg-[#003366] transition"
                >
                  View Profile
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No doctors found matching your criteria.
        </p>
      )}
    </section>
  );
}
