"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Music, Gamepad2, Gift, Smile, Wrench, Crown, Moon, Ticket, MessageSquare, EyeOff } from "lucide-react"

export default function ExtraModules() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const coreActivities = [
    {
      icon: Music,
      title: "Music",
      description:
        "Engage in the wonderful music system, now on Astroz with support from various platforms like YouTube, SoundCloud, Spotify etc",
      color: "from-purple-400 to-pink-600",
    },
    {
      icon: Gamepad2,
      title: "Games",
      description:
        "Enjoy a variety of interactive games, including trivia, card games, and mini-games, designed to entertain and engage members.",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Gift,
      title: "Giveaways",
      description:
        "Participate in exciting giveaways where you can win prizes, ranging from virtual items to real-world rewards, by meeting certain criteria or through random selection.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Smile,
      title: "Fun",
      description:
        "Explore a range of fun activities and commands, including memes, jokes, and quizzes, to keep the server lively and entertaining.",
      color: "from-yellow-400 to-orange-600",
    },
  ]

  const utilityManagement = [
    {
      icon: Wrench,
      title: "Utility",
      description:
        "Access a suite of helpful tools and commands, such as weather updates, reminders, and search functions, to enhance your server experience.",
      color: "from-gray-400 to-slate-600",
    },
    {
      icon: Crown,
      title: "Vanity Roles",
      description:
        "Choose from a selection of customizable roles that allow you to personalize your server identity and display your interests or status.",
      color: "from-amber-400 to-yellow-600",
    },
    {
      icon: Moon,
      title: "Nightmode",
      description:
        "Secure your server while everyone's asleep by enabling Astroz nightmode, ensuring removing all the administrative powers from all the members/bots temporarily.",
      color: "from-indigo-400 to-purple-600",
    },
    {
      icon: Ticket,
      title: "Tickets",
      description:
        "Utilize the ticket system to manage support requests, report issues, or seek help from server staff in an organized and efficient manner.",
      color: "from-teal-400 to-cyan-600",
    },
    {
      icon: MessageSquare,
      title: "Autoresponder",
      description:
        "Set up automated responses to common questions or commands, providing quick and consistent information to members without needing constant manual intervention.",
      color: "from-rose-400 to-pink-600",
    },
    {
      icon: EyeOff,
      title: "Ignore System",
      description:
        "Customize your server and allow the channels you want the bot to work in with Astroz customised ignore system, Astroz also provides a robust ignore bypass which is also configurable.",
      color: "from-red-400 to-orange-600",
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
              Extra Modules
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Extended functionality and entertainment features to enhance your Discord server experience
            </p>
          </div>
        </div>

        {/* Core Activities Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center">
              Core Activities
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreActivities.map((module, index) => {
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

        {/* Utility and Management Section */}
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-8 text-center">
              Utility and Management
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {utilityManagement.map((module, index) => {
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
