"use client"

export default function ContactInfo() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-xl font-semibold text-[#1BA3E2]">📞 Phone</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">+254 700 000 000</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#1BA3E2]">✉️ Email</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">info@lisahospital.com</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#1BA3E2]">📍 Address</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          123 Lisa Hospital Road, Nairobi, Kenya
        </p>
      </div>
    </section>
  )
}
