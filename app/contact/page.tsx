"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { MessageCircle, Mail, ExternalLink } from "lucide-react"

export default function Contact() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Contact Us
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Get in touch with the Astroz team for support, feedback, or collaboration
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Discord Support */}
            <div
              className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 h-full text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-6 shadow-lg shadow-cyan-500/25">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                    Discord Support
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Join our Discord server for real-time support, community discussions, and the latest updates.
                  </p>

                  <a
                    href="https://discord.gg/TCHCDc5bhQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Join Server</span>
                    <ExternalLink className="w-4 h-4 relative z-10" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div
              className={`transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 h-full text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 mb-6 shadow-lg shadow-purple-500/25">
                    <Mail className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                    Direct Contact
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Reach out directly to our team for business inquiries, partnerships, or technical support.
                  </p>

                  <div className="space-y-3 text-gray-300">
                    <p className="text-sm">
                      <span className="text-purple-400 font-semibold">Creator:</span> RIYAD
                    </p>
                    <p className="text-sm">
                      <span className="text-purple-400 font-semibold">Response Time:</span> 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div
            className={`mt-12 transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Quick Actions
                </h3>
                <p className="text-gray-300 mb-6">
                  Get started with Astroz right away or explore our comprehensive features
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1350794455283925085&permissions=2113268958&scope=bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 inline-flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Invite Astroz</span>
                  </a>

                  <a
                    href="/modules"
                    className="group relative px-6 py-3 border-2 border-cyan-500/50 rounded-lg font-semibold text-cyan-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">View Modules</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
