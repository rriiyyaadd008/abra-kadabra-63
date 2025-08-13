"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Shield, Users, Music, Gamepad2, MessageSquare, BarChart3 } from "lucide-react"

export default function Modules() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const modules = [
    {
      icon: Shield,
      title: "Moderation",
      description: "Advanced moderation tools with auto-mod, custom filters, and comprehensive logging",
      features: ["Auto Moderation", "Custom Word Filters", "Punishment System", "Moderation Logs"],
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Community",
      description: "Build and manage thriving communities with engagement tools",
      features: ["Welcome System", "Role Management", "Member Verification", "Server Stats"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Music,
      title: "Music",
      description: "High-quality music streaming with playlist support",
      features: ["24/7 Music", "Playlist Management", "Queue System", "Audio Effects"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Gamepad2,
      title: "Entertainment",
      description: "Fun games and activities to keep your community engaged",
      features: ["Mini Games", "Economy System", "Leveling", "Daily Rewards"],
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: MessageSquare,
      title: "Utility",
      description: "Useful tools and commands for server management",
      features: ["Custom Commands", "Scheduled Messages", "Server Backup", "Multi-language"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Detailed insights and statistics about your server",
      features: ["Member Analytics", "Activity Tracking", "Growth Reports", "Engagement Metrics"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
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
              Core Modules
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Discover the powerful modules that make Astroz the ultimate Discord bot
            </p>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full">
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${module.color} mb-6 shadow-lg`}
                      >
                        <module.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{module.description}</p>

                      <div className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
