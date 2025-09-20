"use client"

export default function AboutHero() {
  return (
    <section className="relative rounded-2xl overflow-hidden text-white py-20 px-6 text-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hospital-bg.jpg')", // change path to your image
        }}
      />

      {/* Overlay to keep text visible */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4">About Lisa Hospital</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Dedicated to providing world-class healthcare services with compassion and innovation.
        </p>
      </div>
    </section>
  )
}
