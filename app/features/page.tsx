"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Shield, Eye, Settings, Heart } from "lucide-react"

export default function Features() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Antinuke Feature",
      description:
        "Protect your server from unauthorized changes and malicious attacks with Astroz' robust antinuke features, ensuring your community remains secure and stable.",
      color: "from-red-400 to-pink-600",
      glowColor: "red-500/25",
    },
    {
      icon: Eye,
      title: "AutoModeration",
      description:
        "Maintain order effortlessly with Astroz' automoderation, which automatically detects and handles rule violations, keeping your server safe and pleasant for everyone.",
      color: "from-cyan-400 to-blue-600",
      glowColor: "cyan-500/25",
    },
    {
      icon: Settings,
      title: "Moderation",
      description:
        "Equip your moderators with powerful tools to manage your server effectively, including user management, message control, and customizable moderation actions.",
      color: "from-purple-400 to-indigo-600",
      glowColor: "purple-500/25",
    },
    {
      icon: Heart,
      title: "Welcomer",
      description:
        "Create a warm and welcoming atmosphere for new members with customizable welcome messages, role assignments, and introductory information to help them get started.",
      color: "from-green-400 to-emerald-600",
      glowColor: "green-500/25",
    },
  ]

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
              Features
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Discover the powerful capabilities that make Astroz the ultimate Discord bot for your server
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.title}
                  className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <div className="relative group h-full">
                    {/* Glowing border effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-300`}
                    />

                    <div className="relative bg-slate-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-gray-600/50 transition-all duration-300">
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg shadow-${feature.glowColor}`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <div>
                        <h3
                          className={`text-2xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-4`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Experience all these powerful features and more by adding Astroz to your Discord server today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1350794455283925085&permissions=2113268958&scope=bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  <span className="relative z-10">Invite Astroz</span>
                </a>

                <a
                  href="https://discord.gg/TCHCDc5bhQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center justify-center gap-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Join Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
