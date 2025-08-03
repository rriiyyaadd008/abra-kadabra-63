"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { LogIn, Shield } from "lucide-react"

export default function SignIn() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDiscordSignIn = async () => {
    setIsLoading(true)
    try {
      // Direct Discord OAuth URL with your client ID
      const redirectUri = encodeURIComponent(`${window.location.origin}/dashboard`)
      const scope = encodeURIComponent("identify guilds")

      // Redirect to Discord OAuth
      window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1350794455283925085&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`
    } catch (error) {
      console.error("Sign in error:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Logo */}
        <div
          className={`mb-8 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image
                src="/astroz-logo.gif"
                alt="Astroz Dragon Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          className={`mb-8 text-center transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to Astroz
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Sign in with Discord to access your server dashboard and manage Astroz settings
          </p>
        </div>

        {/* Sign In Card */}
        <div
          className={`max-w-md w-full transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4 shadow-lg shadow-cyan-500/25">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Secure Authentication
                </h2>
                <p className="text-gray-300">
                  Connect your Discord account to access advanced features and server management tools
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span>Manage server configurations</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  <span>Configure antinuke settings</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span>Access advanced moderation tools</span>
                </div>
              </div>

              {/* Sign In Button */}
              <button
                onClick={handleDiscordSignIn}
                disabled={isLoading}
                className="group relative w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                <div className="relative z-10 flex items-center justify-center gap-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Connecting...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-5 h-5" />
                      <span>Sign in with Discord</span>
                    </>
                  )}
                </div>
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  By signing in, you agree to our{" "}
                  <a href="/terms" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div
          className={`mt-8 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="/"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  )
}
