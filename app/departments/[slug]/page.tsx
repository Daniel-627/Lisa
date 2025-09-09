import { getDepartmentBySlug } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"

interface Props {
  params: { slug: string }
}

export default async function DepartmentPage({ params }: Props) {
  const department = await getDepartmentBySlug(params.slug)

  if (!department) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">Department not found</h1>
        <Link
          href="/departments"
          className="mt-6 inline-block bg-[#1BA3E2] text-white px-6 py-3 rounded-lg hover:bg-[#003366] transition"
        >
          Back to Departments
        </Link>
      </div>
    )
  }

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

        {/* Services in this Department */}
        {department.services && department.services.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-[#1BA3E2] mb-6">
              Services We Provide
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {department.services.map((service) => (
                <div
                  key={service._id}
                  className="bg-gray-100 dark:bg-[#002244] p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-semibold text-[#1BA3E2] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
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
