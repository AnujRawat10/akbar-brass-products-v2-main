// Simple demo authentication system
export interface User {
  id: string
  email: string
  name: string
}

const DEMO_USER = {
  id: "1",
  email: "demo@akbarbrass.com",
  password: "demo123",
  name: "Demo User",
}

export function validateCredentials(email: string, password: string): User | null {
  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    return {
      id: DEMO_USER.id,
      email: DEMO_USER.email,
      name: DEMO_USER.name,
    }
  }
  return null
}

export function getStoredUser(): User | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem("user")
  return stored ? JSON.parse(stored) : null
}

export function storeUser(user: User): void {
  localStorage.setItem("user", JSON.stringify(user))
}

export function clearUser(): void {
  localStorage.removeItem("user")
}
