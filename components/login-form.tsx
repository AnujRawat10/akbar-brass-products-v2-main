"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { validateCredentials } from "@/lib/auth"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const user = validateCredentials(email, password)
    if (user) {
      login(user)
      router.push("/products")
    } else {
      setError("Invalid credentials. Try demo@akbarbrass.com / demo123")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium uppercase tracking-wider text-[#63403A]">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="demo@akbarbrass.com"
            required
            className="w-full border-[#63403A]/30 bg-white text-[#63403A] focus:border-[#63403A] focus:ring-[#63403A]"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium uppercase tracking-wider text-[#63403A]">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="demo123"
            required
            className="w-full border-[#63403A]/30 bg-white text-[#63403A] focus:border-[#63403A] focus:ring-[#63403A]"
          />
        </div>
        {error && <p className="text-sm text-red-700 font-mono bg-red-50 p-3 rounded-lg border border-red-200">{error}</p>}
        <Button
          type="submit"
          className="w-full bg-[#63403A] hover:bg-[#6B2410] text-[#f0efe2] font-semibold py-6 text-base transition-all hover:shadow-lg"
        >
          Sign In
        </Button>
      </form>
      <div className="mt-6 p-4 bg-white border border-[#63403A]/20 rounded-lg">
        <p className="text-sm text-[#63403A]">
          <span className="font-semibold">Demo credentials:</span>
          <br />
          Email: demo@akbarbrass.com
          <br />
          Password: demo123
        </p>
      </div>
    </div>
  )
}