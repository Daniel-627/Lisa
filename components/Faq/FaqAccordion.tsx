"use client"

import { useState } from "react"

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online via our appointment page or call our reception desk directly. Once booked, you’ll receive a confirmation email or SMS.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "Yes, we partner with most major insurance providers. Please bring your insurance card during your visit.",
  },
  {
    question: "Is emergency care available 24/7?",
    answer:
      "Absolutely. Our Accident & Emergency department is open 24 hours a day, 7 days a week.",
  },
  {
    question: "How do I access my medical records?",
    answer:
      "Registered patients can securely access their medical history through the patient portal after logging in.",
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800 dark:text-gray-200"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
