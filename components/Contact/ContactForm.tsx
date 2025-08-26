"use client"

export default function ContactForm() {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-[#1BA3E2] mb-6">
        Send Us a Message
      </h2>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
        ></textarea>
        <button
          type="submit"
          className="bg-[#1BA3E2] hover:bg-[#40E0D0] text-white font-semibold py-3 rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  )
}
