"use client"

export default function DepartmentsHero() {
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
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Have questions, feedback, or need support? We’re here to help.
        </p>
      </div>
    </section>
  )
}
