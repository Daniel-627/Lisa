"use client"

export default function ServiceHighlight() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-[#002244]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#1BA3E2] mb-4">
            Emergency & Critical Care
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our Accident & Emergency unit is open 24/7 with state-of-the-art
            facilities and highly trained staff ready to respond immediately.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            From trauma care to ICU, we ensure rapid, life-saving interventions.
          </p>
        </div>
        <img
          src="/images/emergency.jpg"
          alt="Emergency Department"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}
