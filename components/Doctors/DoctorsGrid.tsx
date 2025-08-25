"use client"

import Link from "next/link"

const doctors = [
  {
    id: 1,
    name: "Dr. Jane Mwangi",
    specialty: "Cardiologist",
    department: "Specialist Clinics",
    image: "/images/doctors/doctor1.jpg",
  },
  {
    id: 2,
    name: "Dr. John Otieno",
    specialty: "Orthopedic Surgeon",
    department: "Emergency",
    image: "/images/doctors/doctor2.jpg",
  },
  {
    id: 3,
    name: "Dr. Amina Ali",
    specialty: "Pediatrician",
    department: "MCH",
    image: "/images/doctors/doctor3.jpg",
  },
]

export default function DoctorsGrid() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-[#002244]">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <Link
            key={doc.id}
            href={`/doctors/${doc.id}`}
            className="bg-white dark:bg-[#003366] rounded-lg shadow hover:shadow-lg transition p-6 text-center"
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-[#1BA3E2]">{doc.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">{doc.specialty}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{doc.department}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
