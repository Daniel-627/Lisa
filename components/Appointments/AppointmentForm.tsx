"use client"

import { useState } from "react"

export default function AppointmentForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Placeholder submit — integrate with Supabase, API, or email service later
    setTimeout(() => {
      setLoading(false)
      alert("✅ Appointment request submitted (demo)")
    }, 1200)
  }

  return (
    <section className="py-12 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-6 text-[#003366] dark:text-white">
        Book an Appointment
      </h2>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 space-y-6 bg-white dark:bg-gray-900 shadow-md"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+254 700 000 000"
            className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
            required
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Department / Service
          </label>
          <input
            type="text"
            placeholder="e.g. Cardiology, Pediatrics, Dental"
            className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Preferred Date
            </label>
            <input
              type="date"
              className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Preferred Time
            </label>
            <input
              type="time"
              className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
            />
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Additional Notes
          </label>
          <textarea
            placeholder="Briefly describe your concern..."
            rows={4}
            className="mt-2 w-full rounded-lg border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#1BA3E2] p-3"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-[#1BA3E2] hover:bg-[#003366] text-white font-medium transition"
          >
            {loading ? "Submitting..." : "Book Appointment"}
          </button>
        </div>
      </form>
    </section>
  )
}
