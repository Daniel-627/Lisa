// app/appointments/page.tsx
"use client"

import AppointmentHero from "@/components/Appointments/AppointmentHero"
import AppointmentForm from "@/components/Appointments/AppointmentForm"
import AppointmentConfirmation from "@/components/Appointments/AppointmentConfirmation"

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col">
      <AppointmentHero />
      <AppointmentForm />
      <AppointmentConfirmation />
    </div>
  )
}
