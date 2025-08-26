"use client"

import FaqHero from "@/components/Faq/FaqHero"
import FaqAccordion from "@/components/Faq/FaqAccordion"

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <FaqHero />
      <FaqAccordion />
    </div>
  )
}
