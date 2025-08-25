"use client"

import Link from "next/link"

export default function ServicesCTA() {
  return (
    <section className="py-16 px-6 bg-[#1BA3E2] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Need Medical Assistance?</h2>
      <p className="mb-6">Book an appointment with one of our specialists today.</p>
      <Link
        href="/appointments"
        className="bg-white text-[#1BA3E2] px-6 py-3 rounded-lg font-semibold hover:bg-[#40E0D0] hover:text-white transition"
      >
        Book Appointment
      </Link>
    </section>
  )
}
