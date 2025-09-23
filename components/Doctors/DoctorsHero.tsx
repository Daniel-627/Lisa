"use client"

export default function DoctorsHero() {
  return (
    <section className="relative rounded-2xl overflow-hidden text-white py-20 px-6 text-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/departments-bg.jpg')", // update with your image
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">Meet Our Doctors</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Our dedicated team of specialists is here to provide expert care,
          tailored to your needs.
        </p>
      </div>
    </section>
  )
}
