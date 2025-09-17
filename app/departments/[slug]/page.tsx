import { getDepartmentBySlug } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function DepartmentPage({ params }: { params: Record<string, string> }) {
  const { slug } = params

  // Fetch department from Sanity
  const department = await getDepartmentBySlug(slug)

  if (!department) return notFound()

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#003366] dark:text-white mb-4">
            {department.name}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {department.description}
          </p>
        </div>

        {/* Image */}
        {department.image && (
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow mb-12">
            <Image
              src={urlFor(department.image).url()}
              alt={department.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Doctors */}
        {department.doctors?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1BA3E2] mb-6">
              Our Doctors
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {department.doctors.map((doctor) => (
                <Link
                  href={`/doctors/${doctor.slug}`}
                  key={doctor._id}
                  className="bg-gray-100 dark:bg-[#002244] p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  {doctor.photo && (
                    <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
                      <Image
                        src={urlFor(doctor.photo).url()}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-[#1BA3E2] mb-2">
                    {doctor.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="mt-12 text-center">
          <Link
            href="/departments"
            className="px-6 py-3 rounded-lg font-medium bg-[#1BA3E2] text-white hover:bg-[#003366] transition"
          >
            Back to Departments
          </Link>
        </div>
      </div>
    </section>
  )
}

export const revalidate = 60
