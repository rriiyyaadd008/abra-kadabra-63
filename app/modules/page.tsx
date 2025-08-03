"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Shield, Eye, Settings, Server, Users, Gamepad2, Mic, ImageIcon, Heart } from "lucide-react"

export default function Modules() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const securityModules = [
    {
      icon: Shield,
      title: "Antinuke",
      description:
        "Protect your server from unauthorized changes and malicious attacks with Astroz' robust antinuke features, ensuring your community remains secure and stable.",
      color: "from-red-400 to-pink-600",
    },
    {
      icon: Eye,
      title: "Automoderation",
      description:
        "Maintain order effortlessly with Astroz' automoderation, which automatically detects and handles rule violations, keeping your server safe and pleasant for everyone.",
      color: "from-cyan-400 to-blue-600",
    },
    {
      icon: Settings,
      title: "Moderation",
      description:
        "Equip your moderators with powerful tools to manage your server effectively, including user management, message control, and customizable moderation actions.",
      color: "from-purple-400 to-indigo-600",
    },
    {
      icon: Server,
      title: "Server",
      description:
        "Streamline your server management with features like autorole, vcrole, reaction role, server stats tracking, and automated announcements, ensuring smooth operation.",
      color: "from-orange-400 to-red-600",
    },
    {
      icon: Users,
      title: "Custom Roles",
      description:
        "Streamline your server by Astroz custom role module, which provides an easy way of assigning roles to users without even knowing the role ID or mention just a simple custom tag and you're all good to go.",
      color: "from-green-400 to-emerald-600",
    },
  ]

  const engagementModules = [
    {
      icon: Gamepad2,
      title: "General",
      description:
        "Enhance your server with a variety of general commands, including fun activities, useful utilities, and informational tools to keep your community engaged and informed.",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Mic,
      title: "Voice",
      description:
        "Optimize your voice channels with advanced controls for user management, audio quality settings, and activity monitoring, enhancing the voice chat experience.",
      color: "from-indigo-400 to-purple-600",
    },
    {
      icon: ImageIcon,
      title: "Media",
      description:
        "Share and manage media content effortlessly with Astroz' media features, supporting image, video, and audio sharing, as well as integration with popular media platforms.",
      color: "from-pink-400 to-rose-600",
    },
    {
      icon: Heart,
      title: "Welcomer",
      description:
        "Create a warm and welcoming atmosphere for new members with customizable welcome messages, role assignments, and introductory information to help them get started.",
      color: "from-emerald-400 to-green-600",
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
              Main Modules
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Comprehensive suite of modules designed to enhance your Discord server experience
            </p>
          </div>
        </div>

        {/* Security & Management Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center">
              Security & Management Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityModules.map((module, index) => {
                const IconComponent = module.icon
                return (
                  <div
                    key={module.title}
                    className={`transition-all duration-1000 delay-${(index + 1) * 100}`}
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(32px)",
                    }}
                  >
                    <div className="relative group h-full">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${module.color} rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-300`}
                      />

                      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} mb-4`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        <h3
                          className={`text-xl font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent mb-3`}
                        >
                          {module.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">{module.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Engagement & Media Section */}
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
              Engagement & Media Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engagementModules.map((module, index) => {
                const IconComponent = module.icon
                return (
                  <div
                    key={module.title}
                    className={`transition-all duration-1000 delay-${700 + (index + 1) * 100}`}
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(32px)",
                    }}
                  >
                    <div className="relative group h-full">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${module.color} rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-300`}
                      />

                      <div className="relative bg-slate-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 h-full hover:border-gray-600/50 transition-all duration-300">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} mb-4`}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        <h3
                          className={`text-xl font-bold bg-gradient-to-r ${module.color} bg-clip-text text-transparent mb-3`}
                        >
                          {module.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">{module.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
