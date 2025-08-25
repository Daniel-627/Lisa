"use client"

export default function Accreditations() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-[#002244]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1BA3E2] mb-8">Certifications & Accreditations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Replace with real logos */}
          <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">ISO</div>
          <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">KEBS</div>
          <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">NHIF</div>
          <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">WHO</div>
        </div>
      </div>
    </section>
  )
}
