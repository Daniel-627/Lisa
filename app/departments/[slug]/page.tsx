import { getDepartmentBySlug } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params
  const department = await getDepartmentBySlug(slug)

  if (!department) return notFound()

  return (
    <section className="pb-16">
      {/* 🔹 Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center text-center text-white max-w-6xl mx-auto rounded-2xl overflow-hidden">
        {department.image && (
          <Image
            src={urlFor(department.image).url()}
            alt={department.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60 rounded-2xl" />
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {department.name}
          </h1>
          {department.description && (
            <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl">
              {department.description}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        {/* 🔹 Detailed Description */}
        {department.description && (
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1BA3E2] mb-4">
              About {department.name}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {department.description}
            </p>
          </div>
        )}

        {/* 🔹 Doctors Section */}
        {department.doctors?.length > 0 && (
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1BA3E2] mb-6 sm:mb-8 text-center">
              Meet Our Doctors
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {department.doctors.map((doctor) => (
                <div
                  key={doctor._id}
                  className="relative group rounded-xl shadow-md hover:shadow-xl overflow-hidden bg-white dark:bg-[#002244] transition"
                >
                  {doctor.photo && (
                    <div className="relative w-full h-60 sm:h-52">
                      <Image
                        src={urlFor(doctor.photo).url()}
                        alt={doctor.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white text-center">
                      {doctor.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 🔹 CTA Section */}
      <section className="mt-16 sm:mt-20 py-12 sm:py-16 px-4 sm:px-6 bg-[#1BA3E2] text-white text-center rounded-2xl max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="mb-6 text-sm sm:text-base">
          Meet our team of specialists or book an appointment today.
        </p>
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Link
            href="/doctors"
            className="bg-white text-[#1BA3E2] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#40E0D0] hover:text-white transition"
          >
            Meet Our Doctors
          </Link>
          <Link
            href="/appointments"
            className="bg-[#003366] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#40E0D0] transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </section>
  )
}

export const revalidate = 60
