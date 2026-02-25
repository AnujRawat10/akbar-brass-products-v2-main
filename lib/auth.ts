export interface User {
  id: string
  email: string
  name: string
}

export interface LoginResult {
  role?: "admin" | "user"
  user?: User
  admin?: { email: string }
  error?: string
}

export async function loginWithCredentials(
  email: string,
  password: string
): Promise<LoginResult> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  const data = await res.json()

  if (!res.ok) {
    return { error: data.error }
  }

  return {
    role: data.role,
    user: data.user,
    admin: data.admin,
  }
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
