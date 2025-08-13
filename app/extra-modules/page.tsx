"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Sparkles, Crown, Rocket, Star, Gift, Trophy, Zap, Heart } from "lucide-react"

export default function ExtraModules() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const extraModules = [
    {
      icon: Crown,
      title: "Premium Features",
      description: "Unlock advanced capabilities with Astroz Premium",
      features: ["Priority Support", "Custom Branding", "Advanced Analytics", "Exclusive Commands"],
      color: "from-yellow-500 to-orange-500",
      badge: "Premium",
    },
    {
      icon: Rocket,
      title: "AI Assistant",
      description: "Intelligent AI-powered features for your server",
      features: ["Smart Responses", "Content Moderation", "Auto Translation", "Chatbot Integration"],
      color: "from-blue-500 to-purple-500",
      badge: "Beta",
    },
    {
      icon: Gift,
      title: "Giveaway System",
      description: "Host exciting giveaways and events",
      features: ["Automated Giveaways", "Multiple Winners", "Role Requirements", "Time-based Events"],
      color: "from-pink-500 to-red-500",
      badge: "Popular",
    },
    {
      icon: Trophy,
      title: "Competition Hub",
      description: "Organize tournaments and competitions",
      features: ["Tournament Brackets", "Leaderboards", "Prize Management", "Team Formation"],
      color: "from-green-500 to-teal-500",
      badge: "New",
    },
    {
      icon: Sparkles,
      title: "Custom Integrations",
      description: "Connect with external services and APIs",
      features: ["Webhook Support", "API Connections", "Third-party Services", "Custom Notifications"],
      color: "from-indigo-500 to-blue-500",
      badge: "Advanced",
    },
    {
      icon: Heart,
      title: "Community Rewards",
      description: "Reward active community members",
      features: ["Loyalty Points", "Achievement System", "Member Perks", "Recognition Programs"],
      color: "from-red-500 to-pink-500",
      badge: "Community",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
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
            <div className="relative group inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <Sparkles className="relative w-16 h-16 text-purple-400 mx-auto" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 bg-clip-text text-transparent mb-4">
              Extra Modules
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full shadow-lg shadow-purple-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Enhance your server with premium features and advanced functionality
            </p>
          </div>
        </div>

        {/* Extra Modules Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {extraModules.map((module, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 h-full">
                    <div className="text-center">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} shadow-lg`}
                        >
                          <module.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {module.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                        {module.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{module.description}</p>

                      <div className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <Star className="w-3 h-3 text-purple-400 mr-3 flex-shrink-0" />
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

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div
            className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Ready to Upgrade?
                </h3>
                <p className="text-gray-300 mb-6">
                  Unlock the full potential of Astroz with our premium modules and advanced features.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Get Premium
                    </span>
                  </button>

                  <button className="group relative px-6 py-3 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25">
                    <span className="relative z-10">Learn More</span>
                  </button>
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
