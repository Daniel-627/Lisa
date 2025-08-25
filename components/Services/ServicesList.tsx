"use client"

import Link from "next/link"

const services = [
  { name: "24hr Outpatient & Inpatient", slug: "outpatient-inpatient" },
  { name: "Accident & Emergency (A&E)", slug: "accident-emergency" },
  { name: "Specialist Clinics", slug: "specialist-clinics" },
  { name: "Laboratory", slug: "laboratory" },
  { name: "Pharmacy", slug: "pharmacy" },
  { name: "Radiology (Ultrasound, X-ray)", slug: "radiology" },
  { name: "Physiotherapy", slug: "physiotherapy" },
  { name: "Dental Unit", slug: "dental" },
  { name: "Maternity", slug: "maternity" },
  { name: "Eye Care Clinic", slug: "eye-care" },
  { name: "Mother & Child Health (MCH)", slug: "mch" },
  { name: "Critical Care (ICU/HDU)", slug: "icu-hdu" },
]

export default function ServicesList() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-[#003366]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1BA3E2] text-center mb-12">All Services</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={i}
              href={`/services/${service.slug}`}
              className="block bg-gray-100 dark:bg-[#002244] p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#1BA3E2] mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Learn more →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
