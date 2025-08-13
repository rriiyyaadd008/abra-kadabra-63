"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Music,
  Coins,
  TrendingUp,
  Zap,
  BarChart3,
  Star,
  Users,
  Clock,
  Headphones,
  ChevronRight,
  ExternalLink,
} from "lucide-react"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
      </div>
    )
  }

  const features = [
    {
      icon: Shield,
      title: "Advanced Moderation",
      description: "Comprehensive anti-spam, auto-moderation, and security features to keep your server safe.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Music,
      title: "High-Quality Music",
      description: "Crystal clear audio streaming from multiple sources with advanced queue management.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Coins,
      title: "Economy System",
      description: "Engaging economy with currency, shops, gambling, and reward systems for your members.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Leveling System",
      description: "Motivate your community with XP, levels, and customizable role rewards.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      title: "Custom Commands",
      description: "Create powerful custom commands with variables, conditions, and automation.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Server Analytics",
      description: "Detailed insights into your server activity, member engagement, and growth metrics.",
      color: "from-teal-500 to-blue-500",
    },
  ]

  const testimonials = [
    {
      name: "ServerMaster",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Astroz transformed our server! The moderation features are incredible and the music quality is unmatched.",
    },
    {
      name: "CommunityLeader",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Best Discord bot we've ever used. The economy system keeps our members engaged 24/7.",
    },
    {
      name: "GuildOwner",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "The custom commands and automation features saved us hours of manual work. Highly recommended!",
    },
  ]

  const stats = [
    { label: "Active Servers", value: "10K+", icon: Users },
    { label: "Happy Users", value: "500K+", icon: Star },
    { label: "Uptime", value: "99.9%", icon: Clock },
    { label: "Support", value: "24/7", icon: Headphones },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/astroz-logo.gif"
                  alt="Astroz Dragon Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl shadow-2xl shadow-cyan-500/25"
                  priority
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 animate-pulse"></div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Astroz
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The most advanced Discord bot featuring robust security, moderation, music, economy, and engagement tools.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <Link href="https://discord.com/oauth2/authorize?client_id=1294043496843444256&permissions=8&scope=bot%20applications.commands">
                  Invite Astroz <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-semibold bg-transparent"
              >
                <Link href="https://discord.gg/TCHCDc5bhQ">
                  Join Support Server <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to manage and grow your Discord community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Join thousands of satisfied server owners</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Creator of Astroz</h2>
            <p className="text-xl text-gray-400">Meet the developer behind this amazing bot</p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/creator-riyad.webp"
                    alt="RIYAD - Creator of Astroz"
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/25"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">RIYAD</h3>
                  <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                    Bot Developer & Creator
                  </Badge>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Passionate developer dedicated to creating the best Discord bot experience. With years of experience
                    in bot development and community management, RIYAD has crafted Astroz to be the ultimate solution
                    for Discord servers.
                  </p>
                  <div className="mt-6">
                    <Button
                      asChild
                      variant="outline"
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                    >
                      <Link href="https://discord.gg/TCHCDc5bhQ">
                        Connect with RIYAD <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Server?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of Discord servers already using Astroz to enhance their community experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <Link href="https://discord.com/oauth2/authorize?client_id=1294043496843444256&permissions=8&scope=bot%20applications.commands">
                Add to Server <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <Link href="/features">
                View All Features <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Padding for bottom navigation */}
      <div className="h-20"></div>
    </div>
  )
}
