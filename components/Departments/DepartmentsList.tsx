"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { getDepartments } from "@/lib/sanity"
import { Department } from "@/types/sanity"

export default function DepartmentsList() {
  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    const loadDepartments = async () => {
      const data = await getDepartments()
      setDepartments(data)
    }
    loadDepartments()
  }, [])

  return (
    <section className="py-16 px-6 bg-white dark:bg-[#003366]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1BA3E2] text-center mb-12">
          Our Departments
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <Link
              key={dept._id}
              href={`/departments/${dept.slug}`}
              className="block bg-gray-100 dark:bg-[#002244] p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#1BA3E2] mb-2">
                {dept.name}
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
