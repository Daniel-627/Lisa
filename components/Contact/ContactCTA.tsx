"use client"

import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="bg-[#003366] text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Need urgent assistance?</h2>
      <p className="mb-6">Book an appointment with one of our specialists today.</p>
      <Link
        href="/appointments"
        className="bg-[#1BA3E2] hover:bg-[#40E0D0] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Book Appointment
      </Link>
    </section>
  )
}
