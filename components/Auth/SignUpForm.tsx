"use client"

export default function SignUpForm() {
  return (
    <form className="grid gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BA3E2]"
      />
      <button
        type="submit"
        className="bg-[#1BA3E2] hover:bg-[#40E0D0] text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Sign Up
      </button>
    </form>
  )
}
