"use client"

import ServicesHero from "@/components/Services/ServicesHero"
import ServicesList from "@/components/Services//ServicesList"
import ServiceHighlight from "@/components/Services/ServicesHighlight"
import ServicesCTA from "@/components/Services/ServicesCTA"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <ServicesList />
      <ServiceHighlight />
      <ServicesCTA />
    </div>
  )
}
