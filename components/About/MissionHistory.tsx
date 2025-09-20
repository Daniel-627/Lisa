"use client"

import Image from "next/image"

export default function MissionVision() {
  const sections = [
    {
      title: "Our Mission",
      text: `At Lisa Hospital, our mission is to provide compassionate and comprehensive healthcare services that address both the physical and emotional needs of every patient. 
      We believe that healthcare is a right, not a privilege, and we work tirelessly to ensure accessibility, affordability, and excellence in treatment. 
      Guided by innovation, empathy, and integrity, we strive to set new standards in medical care by combining cutting-edge technology with a human touch.`,
      image: "/images/mission.jpg",
      reverse: false,
    },
    {
      title: "Our Vision",
      text: `Our vision is to become a leading healthcare institution that inspires trust and delivers hope across the region and beyond. 
      We aim to shape the future of medicine by fostering continuous research, training, and technological advancement. 
      Lisa Hospital envisions a world where patients feel truly cared for, where health outcomes are consistently improved, 
      and where communities flourish because of accessible, high-quality healthcare services.`,
      image: "/images/vision.jpg",
      reverse: true,
    },
    {
      title: "Core Values",
      text: `Everything we do at Lisa Hospital is rooted in our values: empathy, innovation, accountability, and collaboration. 
      Empathy ensures that patients always feel understood and respected. Innovation drives us to explore new ways of healing and prevention. 
      Accountability builds trust, and collaboration unites our doctors, nurses, staff, and patients as one team. 
      These values empower us to deliver care that is not only effective but also meaningful.`,
      image: "/images/values.jpg",
      reverse: false,
    },
  ]

  return (
    <section className="py-16 px-6 bg-white dark:bg-[#003366]">
      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 ${sec.reverse ? "md:flex-row-reverse" : ""
              }`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={sec.image}
                alt={sec.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1BA3E2] mb-4">{sec.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{sec.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
