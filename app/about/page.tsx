// app/about/page.tsx
"use client"

import AboutHero from "@/components/About/AboutHero"
import MissionHistory from "@/components/About/MissionHistory"
import Accreditations from "@/components/About/Accreditations"
import LeadershipProfiles from "@/components/About/Leadershipprofiles"
import AboutCTA from "@/components/About/AboutCTA"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <MissionHistory />
      <Accreditations />
      <LeadershipProfiles />
      <AboutCTA />
    </div>
  )
}
