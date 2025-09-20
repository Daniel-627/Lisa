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
          {leaders.length > 0 ? (
            leaders.map((leader) => (
              <div
                key={leader._id}
                className="bg-gray-100 dark:bg-[#002244] rounded-lg p-6 text-center shadow"
              >
                {leader.photo ? (
                  <Image
                    src={urlFor(leader.photo).width(200).height(200).url()}
                    alt={leader.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto rounded-full mb-4 bg-gray-300" />
                )}
                <h3 className="font-semibold text-lg text-[#1BA3E2]">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {leader.role}
                </p>
              </div>
            ))
          ) : (
            // fallback static leaders
            <>
              <div className="bg-gray-100 dark:bg-[#002244] rounded-lg p-6 text-center shadow">
                <img
                  src="/team/ceo.jpg"
                  alt="Dr. Jane Doe"
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-[#1BA3E2]">
                  Dr. Jane Doe
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  CEO
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-[#002244] rounded-lg p-6 text-center shadow">
                <img
                  src="/team/director.jpg"
                  alt="Dr. John Smith"
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-[#1BA3E2]">
                  Dr. John Smith
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Medical Director
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-[#002244] rounded-lg p-6 text-center shadow">
                <img
                  src="/team/nursing.jpg"
                  alt="Mary Johnson"
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg text-[#1BA3E2]">
                  Mary Johnson
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Head of Nursing
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
