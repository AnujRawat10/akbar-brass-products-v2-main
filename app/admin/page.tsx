"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Users,
  Plus,
  LogOut,
  ToggleLeft,
  ToggleRight,
  Trash2,
  X,
  Eye,
  EyeOff,
} from "lucide-react"

interface UserRecord {
  _id: string
  email: string
  name: string
  isActive: boolean
  createdAt: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState<UserRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)

  // Create form state
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [createError, setCreateError] = useState("")
  const [isCreating, setIsCreating] = useState(false)

  // Check admin session
  useEffect(() => {
    const admin = localStorage.getItem("admin")
    if (!admin) {
      router.push("/login")
      return
    }
    setIsAdmin(true)
    fetchUsers()
  }, [router])

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users")
      const data = await res.json()
      if (res.ok) setUsers(data.users)
    } catch (error) {
      console.error("Failed to fetch users:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreateError("")
    setIsCreating(true)

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          email: newEmail,
          password: newPassword,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setCreateError(data.error)
        return
      }

      setNewName("")
      setNewEmail("")
      setNewPassword("")
      setShowCreateForm(false)
      fetchUsers()
    } catch {
      setCreateError("Failed to create user.")
    } finally {
      setIsCreating(false)
    }
  }

  const handleToggleActive = async (userId: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      })

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u._id === userId ? { ...u, isActive: !currentStatus } : u
          )
        )
      }
    } catch (error) {
      console.error("Failed to toggle user:", error)
    }
  }

  const handleDeleteUser = async (userId: string, userName: string) => {
    if (!window.confirm(`Delete user "${userName}"? This cannot be undone.`)) return

    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
      })

      if (res.ok) {
        setUsers((prev) => prev.filter((u) => u._id !== userId))
      }
    } catch (error) {
      console.error("Failed to delete user:", error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin")
    router.push("/login")
  }

  if (!isAdmin) return null

  const activeCount = users.filter((u) => u.isActive).length
  const inactiveCount = users.filter((u) => !u.isActive).length

  return (
    <div className="min-h-screen bg-[#f0efe2]">
      {/* Header */}
      <header data-admin className="border-b border-[#63403A]/10 px-6 py-4 bg-[#f0efe2]">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#63403A]/10 flex items-center justify-center">
              <Users className="h-4 w-4 text-[#63403A]/60" />
            </div>
            <div>
              <h1 className="text-sm font-medium tracking-wide text-[#63403A]">
                Admin Panel
              </h1>
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#63403A]/40">
                Akbar Brass Products
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#63403A]/50 hover:text-[#63403A] transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </header>

      <main className="px-6 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-[#63403A]/10 rounded-sm p-4">
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#63403A]/40">
                Total Users
              </p>
              <p className="text-2xl font-light mt-1 text-[#63403A]">{users.length}</p>
            </div>
            <div className="bg-white border border-[#63403A]/10 rounded-sm p-4">
              <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-600/60">
                Active
              </p>
              <p className="text-2xl font-light mt-1 text-emerald-600">{activeCount}</p>
            </div>
            <div className="bg-white border border-[#63403A]/10 rounded-sm p-4">
              <p className="text-[10px] uppercase tracking-[0.15em] text-red-500/60">
                Inactive
              </p>
              <p className="text-2xl font-light mt-1 text-red-500">{inactiveCount}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs uppercase tracking-[0.15em] text-[#63403A]/50">
              Manage Users
            </h2>
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 bg-[#63403A] text-[#f0efe2] px-4 py-2 text-xs uppercase tracking-wider rounded-sm font-medium hover:bg-[#63403A]/90 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              Add User
            </button>
          </div>

          {/* Create User Form */}
          {showCreateForm && (
            <div className="bg-white border border-[#63403A]/10 rounded-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[#63403A]">Create New User</h3>
                <button
                  onClick={() => {
                    setShowCreateForm(false)
                    setCreateError("")
                  }}
                  className="text-[#63403A]/30 hover:text-[#63403A]/60 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <form onSubmit={handleCreateUser} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-[#63403A]/50 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      required
                      className="w-full bg-[#f0efe2] border border-[#63403A]/15 rounded-sm px-3 py-2.5 text-sm text-[#63403A] placeholder:text-[#63403A]/25 focus:outline-none focus:border-[#63403A]/40 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.15em] text-[#63403A]/50 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      required
                      className="w-full bg-[#f0efe2] border border-[#63403A]/15 rounded-sm px-3 py-2.5 text-sm text-[#63403A] placeholder:text-[#63403A]/25 focus:outline-none focus:border-[#63403A]/40 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.15em] text-[#63403A]/50 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      minLength={6}
                      className="w-full bg-[#f0efe2] border border-[#63403A]/15 rounded-sm px-3 py-2.5 text-sm text-[#63403A] placeholder:text-[#63403A]/25 focus:outline-none focus:border-[#63403A]/40 transition-colors pr-10"
                      placeholder="Min 6 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#63403A]/30 hover:text-[#63403A]/60 transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {createError && (
                  <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded-sm">
                    {createError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isCreating}
                  className="bg-[#63403A] text-[#f0efe2] px-6 py-2.5 text-xs uppercase tracking-wider rounded-sm font-medium hover:bg-[#63403A]/90 transition-colors disabled:opacity-50"
                >
                  {isCreating ? "Creating..." : "Create User"}
                </button>
              </form>
            </div>
          )}

          {/* Users List */}
          {isLoading ? (
            <div className="space-y-3">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white border border-[#63403A]/10 rounded-sm h-16"
                />
              ))}
            </div>
          ) : users.length === 0 ? (
            <div className="text-center py-16 text-[#63403A]/30">
              <Users className="h-8 w-8 mx-auto mb-3 opacity-50" />
              <p className="text-sm">No users yet. Add your first user above.</p>
            </div>
          ) : (
            <div className="space-y-2">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center justify-between bg-white border border-[#63403A]/10 rounded-sm px-5 py-4"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`h-2 w-2 rounded-full flex-shrink-0 ${
                        user.isActive ? "bg-emerald-500" : "bg-red-400"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#63403A] truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-[#63403A]/40 truncate">{user.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm ${
                        user.isActive
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>

                    <button
                      onClick={() => handleToggleActive(user._id, user.isActive)}
                      className="p-2 transition-colors"
                      title={user.isActive ? "Deactivate user" : "Activate user"}
                    >
                      {user.isActive ? (
                        <ToggleRight className="h-5 w-5 text-emerald-500" />
                      ) : (
                        <ToggleLeft className="h-5 w-5 text-red-400" />
                      )}
                    </button>

                    <button
                      onClick={() => handleDeleteUser(user._id, user.name)}
                      className="p-2 text-[#63403A]/20 hover:text-red-500 transition-colors"
                      title="Delete user"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
