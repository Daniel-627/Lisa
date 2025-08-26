"use client"

import { useState } from "react"
import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login")

  return (
    <section className="py-12 px-6 max-w-md mx-auto">
      {/* Toggle buttons */}
      <div className="flex justify-center gap-6 mb-8">
        <button
          onClick={() => setActiveTab("login")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === "login"
              ? "bg-[#1BA3E2] text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab("signup")}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            activeTab === "signup"
              ? "bg-[#1BA3E2] text-white"
              : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
          }`}
        >
          Sign Up
        </button>
      </div>

      {/* Form */}
      {activeTab === "login" ? <LoginForm /> : <SignUpForm />}
    </section>
  )
}
