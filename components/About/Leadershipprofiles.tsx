"use client"

const leaders = [
  { name: "Dr. Jane Doe", role: "CEO", img: "/team/ceo.jpg" },
  { name: "Dr. John Smith", role: "Medical Director", img: "/team/director.jpg" },
  { name: "Mary Johnson", role: "Head of Nursing", img: "/team/nursing.jpg" },
]

export default function LeadershipProfiles() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-[#003366]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1BA3E2] text-center mb-12">Our Leadership</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {leaders.map((leader, i) => (
            <div key={i} className="bg-gray-100 dark:bg-[#002244] rounded-lg p-6 text-center shadow">
              <img
                src={leader.img}
                alt={leader.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg text-[#1BA3E2]">{leader.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
