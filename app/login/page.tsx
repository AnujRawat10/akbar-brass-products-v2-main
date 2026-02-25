"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { loginWithCredentials } from "@/lib/auth"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await loginWithCredentials(email, password)

      if (result.error) {
        setError(result.error)
        return
      }

      if (result.role === "admin" && result.admin) {
        localStorage.setItem("admin", JSON.stringify(result.admin))
        router.push("/admin")
      } else if (result.role === "user" && result.user) {
        login(result.user)
        router.push("/products")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f0efe2] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl font-normal text-[#63403A]">
            Akbar Brass Products
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-[#63403A]/40 mt-2">
            Sign in to continue
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-[#63403A]/50 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white border border-[#63403A]/15 rounded-sm px-4 py-3 text-sm text-[#63403A] placeholder:text-[#63403A]/25 focus:outline-none focus:border-[#63403A]/40 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.15em] text-[#63403A]/50 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white border border-[#63403A]/15 rounded-sm px-4 py-3 text-sm text-[#63403A] placeholder:text-[#63403A]/25 focus:outline-none focus:border-[#63403A]/40 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-2.5 rounded-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#63403A] text-[#f0efe2] font-medium py-3 text-sm uppercase tracking-wider rounded-sm transition-all hover:bg-[#63403A]/90 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-[#63403A]/30">
          Access is by invitation only.
        </p>
      </div>
    </div>
  )
}
