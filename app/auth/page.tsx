"use client"

import AuthHero from "@/components/Auth/AuthHero"
import AuthTabs from "@/components/Auth/AuthTabs"

export default function AuthPage() {
  return (
    <div className="flex flex-col">
      <AuthHero />
      <AuthTabs />
    </div>
  )
}
