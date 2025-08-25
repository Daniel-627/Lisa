"use client"

import DoctorsHero from "@/components/Doctors/DoctorsHero"
import DoctorsFilter from "@/components/Doctors/DoctorsFilter"
import DoctorsGrid from "@/components/Doctors/DoctorsGrid"
import DoctorsCTA from "@/components/Doctors/DoctorsCTA"

export default function DoctorsPage() {
  return (
    <div className="flex flex-col">
      <DoctorsHero />
      <DoctorsFilter />
      <DoctorsGrid />
      <DoctorsCTA />
    </div>
  )
}
