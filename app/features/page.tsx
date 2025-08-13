"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Music,
  Coins,
  TrendingUp,
  Zap,
  BarChart3,
  Users,
  MessageSquare,
  Calendar,
  Gift,
  Settings,
  Lock,
  Volume2,
  DollarSign,
  Trophy,
  Command,
  PieChart,
  UserPlus,
  Hash,
  Clock,
  Star,
  Heart,
  Gamepad2,
  Bell,
  Filter,
  Database,
  Cpu,
  Wifi,
  ExternalLink,
} from "lucide-react"
import NextLink from "next/link"

export default function FeaturesPage() {
  const featureCategories = [
    {
      title: "Moderation & Security",
      description: "Keep your server safe with advanced moderation tools",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      features: [
        {
          name: "Auto Moderation",
          description: "Automatically detect and handle spam, inappropriate content, and rule violations",
          icon: Shield,
        },
        {
          name: "Custom Filters",
          description: "Create custom word filters and automod rules tailored to your community",
          icon: Filter,
        },
        {
          name: "Raid Protection",
          description: "Advanced anti-raid systems to protect against mass joins and attacks",
          icon: Lock,
        },
        {
          name: "Logging System",
          description: "Comprehensive logging of all moderation actions and server events",
          icon: Database,
        },
        {
          name: "Warning System",
          description: "Issue warnings to users with automatic escalation and punishment",
          icon: Bell,
        },
        {
          name: "Verification",
          description: "Captcha and role-based verification systems for new members",
          icon: UserPlus,
        },
      ],
    },
    {
      title: "Music & Entertainment",
      description: "High-quality music streaming and entertainment features",
      icon: Music,
      color: "from-purple-500 to-indigo-500",
      features: [
        {
          name: "High-Quality Audio",
          description: "Crystal clear music streaming from YouTube, Spotify, and more sources",
          icon: Volume2,
        },
        {
          name: "Queue Management",
          description: "Advanced queue system with shuffle, repeat, and playlist support",
          icon: Music,
        },
        {
          name: "DJ Controls",
          description: "DJ role permissions and advanced music controls for moderators",
          icon: Settings,
        },
        {
          name: "Music Games",
          description: "Interactive music games and trivia for community engagement",
          icon: Gamepad2,
        },
        {
          name: "Lyrics Display",
          description: "Real-time lyrics display for currently playing songs",
          icon: MessageSquare,
        },
        {
          name: "Radio Stations",
          description: "24/7 radio stations and live streaming support",
          icon: Wifi,
        },
      ],
    },
    {
      title: "Economy & Rewards",
      description: "Engaging economy system to keep your community active",
      icon: Coins,
      color: "from-yellow-500 to-orange-500",
      features: [
        {
          name: "Virtual Currency",
          description: "Custom currency system with earning, spending, and trading",
          icon: DollarSign,
        },
        {
          name: "Shop System",
          description: "Virtual shop with items, roles, and custom rewards for purchase",
          icon: Gift,
        },
        {
          name: "Daily Rewards",
          description: "Daily, weekly, and monthly rewards to encourage regular participation",
          icon: Calendar,
        },
        {
          name: "Mini Games",
          description: "Economy-based games like slots, blackjack, and coin flip",
          icon: Gamepad2,
        },
        {
          name: "Work System",
          description: "Virtual jobs and work commands to earn currency",
          icon: Cpu,
        },
        {
          name: "Leaderboards",
          description: "Rich leaderboards showing top earners and spenders",
          icon: Trophy,
        },
      ],
    },
    {
      title: "Leveling & XP",
      description: "Motivate your community with progression systems",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      features: [
        {
          name: "XP System",
          description: "Earn XP through chatting, voice activity, and special events",
          icon: TrendingUp,
        },
        {
          name: "Level Roles",
          description: "Automatic role rewards when users reach certain levels",
          icon: Users,
        },
        {
          name: "Custom Rewards",
          description: "Set custom rewards and perks for different level milestones",
          icon: Star,
        },
        {
          name: "Leaderboards",
          description: "Server and global leaderboards to showcase top members",
          icon: Trophy,
        },
        {
          name: "Voice XP",
          description: "Earn XP for time spent in voice channels",
          icon: Volume2,
        },
        {
          name: "Boost Multipliers",
          description: "XP boost events and multipliers for special occasions",
          icon: Zap,
        },
      ],
    },
    {
      title: "Custom Commands",
      description: "Create powerful automation and custom functionality",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      features: [
        {
          name: "Command Builder",
          description: "Easy-to-use command builder with variables and conditions",
          icon: Command,
        },
        {
          name: "Autoresponder",
          description: "Automatic responses to keywords and phrases",
          icon: MessageSquare,
        },
        {
          name: "Reaction Roles",
          description: "Self-assignable roles through message reactions",
          icon: Heart,
        },
        {
          name: "Welcome Messages",
          description: "Customizable welcome and goodbye messages with embeds",
          icon: UserPlus,
        },
        {
          name: "Auto Roles",
          description: "Automatically assign roles to new members",
          icon: Users,
        },
        {
          name: "Scheduled Messages",
          description: "Schedule messages and announcements for later",
          icon: Clock,
        },
      ],
    },
    {
      title: "Analytics & Insights",
      description: "Detailed insights into your server's activity and growth",
      icon: BarChart3,
      color: "from-teal-500 to-blue-500",
      features: [
        {
          name: "Server Statistics",
          description: "Comprehensive stats on member activity and engagement",
          icon: PieChart,
        },
        {
          name: "Growth Tracking",
          description: "Track server growth, member joins, and retention rates",
          icon: TrendingUp,
        },
        {
          name: "Channel Analytics",
          description: "Detailed analytics for individual channels and categories",
          icon: Hash,
        },
        {
          name: "Member Insights",
          description: "Individual member activity and engagement metrics",
          icon: Users,
        },
        {
          name: "Export Data",
          description: "Export analytics data for external analysis",
          icon: Database,
        },
        {
          name: "Real-time Dashboard",
          description: "Live dashboard with real-time server metrics",
          icon: BarChart3,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover all the amazing features that make Astroz the ultimate Discord bot for your server
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            <NextLink href="https://discord.com/oauth2/authorize?client_id=1294043496843444256&permissions=8&scope=bot%20applications.commands">
              Add Astroz Now <ExternalLink className="ml-2 h-5 w-5" />
            </NextLink>
          </Button>
        </div>
      </section>

      {/* Features Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {featureCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              {/* Category Header */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card
                    key={feature.name}
                    className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                    style={{ animationDelay: `${(categoryIndex * 6 + featureIndex) * 50}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                        <CardTitle className="text-white text-lg">{feature.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Trusted by Communities</h2>
            <p className="text-xl text-gray-400">Join thousands of servers already using Astroz</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1.1K+</div>
              <div className="text-gray-400">Active Servers</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3.8M+</div>
              <div className="text-gray-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Command className="h-8 w-8 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-gray-400">Commands</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience all these amazing features in your Discord server today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              <NextLink href="https://discord.com/oauth2/authorize?client_id=1294043496843444256&permissions=8&scope=bot%20applications.commands">
                Invite Astroz <ExternalLink className="ml-2 h-5 w-5" />
              </NextLink>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg font-semibold bg-transparent"
            >
              <NextLink href="https://discord.gg/TCHCDc5bhQ">
                Get Support <ExternalLink className="ml-2 h-5 w-5" />
              </NextLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Padding for bottom navigation */}
      <div className="h-20"></div>
    </div>
  )
}
