import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Music,
  Gamepad2,
  Users,
  Settings,
  Zap,
  Heart,
  MessageSquare,
  Crown,
  Gift,
  Calendar,
  BarChart3,
  Lock,
  Volume2,
  Dice6,
  Trophy,
  Star,
  Bot,
} from "lucide-react"
import Link from "next/link"

const featureCategories = [
  {
    title: "Moderation & Security",
    icon: Shield,
    color: "text-blue-600",
    features: [
      {
        name: "Auto Moderation",
        description: "Automatically detect and handle spam, inappropriate content, and rule violations",
        icon: Shield,
      },
      {
        name: "Custom Word Filters",
        description: "Create custom filters for words, phrases, and patterns with customizable actions",
        icon: MessageSquare,
      },
      {
        name: "Advanced Logging",
        description: "Comprehensive audit logs for all server activities and moderation actions",
        icon: BarChart3,
      },
      {
        name: "Role Management",
        description: "Automated role assignment, temporary roles, and permission management",
        icon: Crown,
      },
      {
        name: "Anti-Raid Protection",
        description: "Protect your server from raids with intelligent detection and prevention",
        icon: Lock,
      },
    ],
  },
  {
    title: "Music & Entertainment",
    icon: Music,
    color: "text-purple-600",
    features: [
      {
        name: "High-Quality Music",
        description: "Stream music from YouTube, Spotify, SoundCloud, and more platforms",
        icon: Music,
      },
      {
        name: "Playlist Management",
        description: "Create, save, and share custom playlists with your community",
        icon: Volume2,
      },
      {
        name: "Interactive Games",
        description: "Trivia, word games, number games, and more to keep your server engaged",
        icon: Gamepad2,
      },
      {
        name: "Fun Commands",
        description: "Memes, jokes, random facts, and entertainment commands for all ages",
        icon: Dice6,
      },
      {
        name: "Voice Activities",
        description: "Voice channel games and activities to bring your community together",
        icon: Users,
      },
    ],
  },
  {
    title: "Community Features",
    icon: Users,
    color: "text-green-600",
    features: [
      {
        name: "Leveling System",
        description: "Reward active members with XP, levels, and custom role rewards",
        icon: Trophy,
      },
      {
        name: "Welcome Messages",
        description: "Customizable welcome and goodbye messages with embed support",
        icon: Gift,
      },
      {
        name: "Event Management",
        description: "Create and manage server events with RSVP and reminder features",
        icon: Calendar,
      },
      {
        name: "Reaction Roles",
        description: "Let users assign themselves roles by reacting to messages",
        icon: Star,
      },
      {
        name: "Custom Commands",
        description: "Create custom commands and autoresponders for your server",
        icon: Bot,
      },
    ],
  },
  {
    title: "Utility & Tools",
    icon: Settings,
    color: "text-orange-600",
    features: [
      {
        name: "Server Statistics",
        description: "Detailed analytics and insights about your server activity",
        icon: BarChart3,
      },
      {
        name: "Reminder System",
        description: "Set personal and server-wide reminders with flexible scheduling",
        icon: Calendar,
      },
      {
        name: "Polls & Voting",
        description: "Create interactive polls and voting systems for community decisions",
        icon: MessageSquare,
      },
      {
        name: "Auto Roles",
        description: "Automatically assign roles based on various triggers and conditions",
        icon: Crown,
      },
      {
        name: "Server Backup",
        description: "Backup and restore server settings, roles, and configurations",
        icon: Shield,
      },
    ],
  },
]

export default function Features() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover all the amazing features that make Astroz the perfect Discord bot for your server. From advanced
          moderation to entertainment, we've got everything you need.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
              Add to Server
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">150+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Total Commands</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1.1K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Active Servers</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3.8M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Happy Users</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
          </CardContent>
        </Card>
      </div>

      {/* Feature Categories */}
      <div className="space-y-16">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center gap-3 mb-8">
              <category.icon className={`h-8 w-8 ${category.color}`} />
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <feature.icon className={`h-6 w-6 ${category.color}`} />
                      <CardTitle className="text-lg">{feature.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Premium Features */}
      <div className="mt-20 p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Premium Features
          </Badge>
          <h3 className="text-2xl font-bold mb-4">Unlock Even More with Astroz Premium</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Get access to exclusive features, priority support, and enhanced capabilities with our premium subscription.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Priority Support</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Crown className="h-5 w-5 text-purple-500" />
              <span>Exclusive Commands</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              <span>Custom Features</span>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/premium">Learn More About Premium</Link>
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Add Astroz to your server today and start enjoying all these amazing features!
        </p>
        <Button size="lg" asChild>
          <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
            Add Astroz to Your Server
          </Link>
        </Button>
      </div>
    </div>
  )
}
