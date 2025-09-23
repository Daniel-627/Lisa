import { getDoctorBySlug } from "@/lib/sanity"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ slug: string }>
}

export default async function DoctorPage({ params }: Props) {
    const { slug } = await params
    const doctor = await getDoctorBySlug(slug)

    if (!doctor) return notFound()

    return (
        <section className="pb-16">
            {/* 🔹 Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center text-center text-white rounded-2xl overflow-hidden">
                {doctor.photo && (
                    <Image
                        src={urlFor(doctor.photo).url()}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">{doctor.name}</h1>
                    {doctor.professional_title && (
                        <p className="text-lg md:text-xl mt-2">{doctor.professional_title}</p>
                    )}
                </div>
            </div>

            {/* 🔹 Main Content */}
            <div className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-12">
                {/* Left: Doctor Card */}
                <div className="bg-white dark:bg-[#002244] rounded-2xl shadow p-6 flex flex-col items-center">
                    {doctor.photo && (
                        <div className="relative w-64 h-64 mb-6 rounded-xl overflow-hidden shadow-md">
                            <Image
                                src={urlFor(doctor.photo).url()}
                                alt={doctor.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}

                    <h2 className="text-2xl font-bold text-[#003366] dark:text-white mb-2">
                        {doctor.name}
                    </h2>

                    {doctor.professional_title && (
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            {doctor.professional_title}
                        </p>
                    )}

                    {doctor.qualifications && doctor.qualifications.length > 0 && (
                        <div className="mb-4 text-center">
                            <h3 className="text-md font-semibold text-[#1BA3E2] mb-2">
                                Qualifications
                            </h3>
                            <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                                {doctor.qualifications.map((q: string, i: number) => (
                                    <li key={i}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {doctor.department && (
                        <div className="text-center">
                            <h3 className="text-md font-semibold text-[#1BA3E2] mb-1">
                                Department
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300">
                                {doctor.department.name}
                            </p>
                        </div>
                    )}
                </div>

                {/* Right: Bio */}
                <div>
                    <h2 className="text-2xl font-bold text-[#1BA3E2] mb-4">
                        About {doctor.name}
                    </h2>
                    {doctor.bio ? (
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {doctor.bio}
                        </p>
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400 italic">
                            Bio information coming soon.
                        </p>
                    )}
                </div>
            </div>

            {/* 🔹 Back button */}
            <div className="text-center mt-16">
                <Link
                    href="/doctors"
                    className="px-6 py-3 rounded-lg font-medium bg-[#1BA3E2] text-white hover:bg-[#003366] transition"
                >
                    Back to All Doctors
                </Link>
            </div>
        </section>
    )
}

export const revalidate = 60

