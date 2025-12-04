import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif tracking-tight text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 text-sm">Sign in to access exclusive products</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
