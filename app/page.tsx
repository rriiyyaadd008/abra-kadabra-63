"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Shield,
  Music,
  Coins,
  TrendingUp,
  Code,
  BarChart3,
  Star,
  Users,
  Clock,
  Headphones,
  ExternalLink,
  Sparkles,
  Zap,
  Crown,
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
      description: "Crystal clear audio streaming with playlist support and advanced music controls.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Coins,
      title: "Economy System",
      description: "Engaging economy with virtual currency, shops, gambling, and reward systems.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Leveling System",
      description: "XP-based leveling with customizable rewards and role assignments for active members.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Code,
      title: "Custom Commands",
      description: "Create personalized commands and automate server tasks with our intuitive system.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Server Analytics",
      description: "Detailed insights into server activity, member engagement, and growth metrics.",
      color: "from-violet-500 to-purple-500",
    },
  ]

  const testimonials = [
    {
      name: "ServerMaster",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Astroz transformed our Discord server! The moderation features are incredible and the music quality is unmatched.",
      server: "Gaming Paradise",
    },
    {
      name: "CommunityLead",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "Best Discord bot we've ever used. The economy system keeps our members engaged and the support is amazing!",
      server: "Tech Hub",
    },
    {
      name: "AdminPro",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      text: "The analytics and custom commands saved us hours of work. Highly recommend Astroz to any serious server owner.",
      server: "Creative Community",
    },
  ]

  const stats = [
    { label: "Active Servers", value: "10K+", icon: Users },
    { label: "Happy Users", value: "500K+", icon: Star },
    { label: "Uptime", value: "99.9%", icon: Clock },
    { label: "Support", value: "24/7", icon: Headphones },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <Image
                src="/astroz-logo.gif"
                alt="Astroz Dragon Logo"
                width={200}
                height={200}
                className="mx-auto animate-bounce"
                priority
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse" />
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                ASTROZ
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The most advanced Discord bot featuring robust security, moderation, and engagement tools. Elevate your
                server experience with cutting-edge features.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="https://discord.com/oauth2/authorize?client_id=1294043496843444256&permissions=8&scope=bot%20applications.commands">
                  <Crown className="mr-2 h-5 w-5" />
                  Invite Astroz
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="https://discord.gg/TCHCDc5bhQ">
                  Join Support Server
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the comprehensive suite of tools that make Astroz the ultimate Discord bot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              What Users Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied server owners who trust Astroz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <p className="text-sm text-gray-400">{testimonial.server}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Creator of Astroz
            </h2>
          </div>

          <Card className="max-w-2xl mx-auto bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                  <Image
                    src="/creator-riyad.webp"
                    alt="RIYAD - Creator of Astroz"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-cyan-500/50"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
                </div>
                <div className="text-center md:text-left space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">RIYAD</h3>
                    <Badge className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
                      Bot Developer & Creator
                    </Badge>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Passionate developer dedicated to creating the ultimate Discord bot experience. With years of
                    experience in bot development and community management, RIYAD continues to innovate and improve
                    Astroz for servers worldwide.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent"
                  >
                    <Link href="https://discord.gg/TCHCDc5bhQ">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Connect with RIYAD
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Server?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join thousands of Discord servers already using Astroz to create amazing communities. Get started today
              and experience the difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="https://discord.com/oauth2/authorize?client_id=1294043496843444256&permissions=8&scope=bot%20applications.commands">
                  <Zap className="mr-2 h-5 w-5" />
                  Add to Server Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
