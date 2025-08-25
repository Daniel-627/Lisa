"use client"

import { useState } from "react"

const departments = [
  "All",
  "Outpatient",
  "Emergency",
  "Specialist Clinics",
  "Laboratory",
  "Pharmacy",
  "Radiology",
  "Physiotherapy",
  "Dental",
  "Maternity",
  "Eye Care",
  "MCH",
  "ICU/HDU",
]

export default function DoctorsFilter({ onFilter }: { onFilter?: (dep: string) => void }) {
  const [active, setActive] = useState("All")

  function handleClick(dep: string) {
    setActive(dep)
    if (onFilter) onFilter(dep)
  }

  return (
    <div className="bg-white dark:bg-[#003366] py-6 px-4 flex gap-3 flex-wrap justify-center">
      {departments.map((dep) => (
        <button
          key={dep}
          onClick={() => handleClick(dep)}
          className={`px-4 py-2 rounded-lg font-medium transition 
            ${active === dep 
              ? "bg-[#1BA3E2] text-white" 
              : "bg-gray-100 dark:bg-[#002244] text-[#1BA3E2] hover:bg-[#40E0D0] hover:text-white"}
          `}
        >
          {dep}
        </button>
      ))}
    </div>
  )
}
