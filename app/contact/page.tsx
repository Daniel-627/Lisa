"use client"

import ContactHero from "@/components/Contact/ContactHero"
import ContactInfo from "@/components/Contact/ContactInfo"
import ContactForm from "@/components/Contact/ContactForm"
import ContactCTA from "@/components/Contact/ContactCTA"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactCTA />
    </div>
  )
}
