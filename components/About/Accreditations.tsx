"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { getAccreditations } from "@/lib/sanity"
import { Accreditation } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image"

export default function Accreditations() {
  const [items, setItems] = useState<Accreditation[]>([])

  useEffect(() => {
    getAccreditations().then(setItems)
  }, [])

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-[#002244] rounded-lg">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1BA3E2] mb-8">
          Certifications & Accreditations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item._id}
                className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg flex items-center justify-center"
              >
                {item.logo ? (
                  <Image
                    src={item.logo.asset?._ref ?
                      // Convert Sanity ref into usable URL
                      (urlFor(item.logo).width(200).url())
                      : "/placeholder.png"}
                    alt={item.title}
                    width={120}
                    height={120}
                    className="object-contain max-h-20"
                  />
                ) : (
                  <span>{item.title}</span>
                )}
              </div>
            ))
          ) : (
            <>
              {/* Fallback if Sanity has no data */}
              <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">ISO</div>
              <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">KEBS</div>
              <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">NHIF</div>
              <div className="bg-white dark:bg-[#003366] shadow p-6 rounded-lg">WHO</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

