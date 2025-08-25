"use client"

import ServicesHero from "@/components/services/ServicesHero"
import ServicesList from "@/components/services/ServicesList"
import ServiceHighlight from "@/components/services/ServiceHighlight"
import ServicesCTA from "@/components/services/ServicesCTA"

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
