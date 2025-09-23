"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getLeaders } from "@/lib/sanity"
import { Leader } from "@/types/sanity"
import { urlFor } from "@/sanity/lib/image" // helper for sanity images

export default function LeadershipProfiles() {
  const [leaders, setLeaders] = useState<Leader[]>([])

  useEffect(() => {
    getLeaders().then(setLeaders)
  }, [])

  return (
    <section className="py-16 px-6 bg-white dark:bg-[#003366]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1BA3E2] text-center mb-12">
          Our Leadership
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader._id}
              className="relative group rounded-lg overflow-hidden shadow-lg h-80"
            >
              {leader.photo && (
                <Image
                  src={urlFor(leader.photo).width(400).height(400).url()}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              )}
              {/* Dark overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full text-white">
                  <h3 className="font-semibold text-lg">{leader.name}</h3>
                  <p className="text-sm">{leader.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
