"use client"

import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="py-16 px-6 bg-[#1BA3E2] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
      <p className="mb-6">Meet our team of specialists or book an appointment today.</p>
      <div className="flex justify-center gap-4">
        <Link href="/doctors" className="bg-white text-[#1BA3E2] px-6 py-3 rounded-lg font-semibold hover:bg-[#40E0D0] hover:text-white transition">
          Meet Our Doctors
        </Link>
        <Link href="/appointments" className="bg-[#003366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#40E0D0] transition">
          Book Appointment
        </Link>
      </div>
    </section>
  )
}
