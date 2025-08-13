import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Music,
  Zap,
  Users,
  Star,
  TrendingUp,
  MessageSquare,
  Gift,
  Clock,
  Lock,
  Bot,
  Settings,
  BarChart3,
  Headphones,
  UserCheck,
  AlertTriangle,
  Crown,
  Gamepad2,
} from "lucide-react"
import Link from "next/link"

const featureCategories = [
  {
    title: "Moderation & Security",
    description: "Keep your server safe and organized",
    icon: Shield,
    color: "text-blue-600",
    features: [
      {
        name: "Auto Moderation",
        description: "Automatically detect and handle spam, inappropriate content, and rule violations",
        icon: Shield,
        premium: false,
      },
      {
        name: "Custom Word Filters",
        description: "Create custom filters for words, phrases, and patterns with customizable actions",
        icon: AlertTriangle,
        premium: false,
      },
      {
        name: "Advanced Logging",
        description: "Comprehensive audit logs for all server activities and moderation actions",
        icon: BarChart3,
        premium: true,
      },
      {
        name: "Raid Protection",
        description: "Protect against server raids with intelligent detection and automatic responses",
        icon: Lock,
        premium: true,
      },
      {
        name: "Role Management",
        description: "Automated role assignment, reaction roles, and permission management",
        icon: UserCheck,
        premium: false,
      },
      {
        name: "Temporary Actions",
        description: "Temporary bans, mutes, and restrictions with automatic expiration",
        icon: Clock,
        premium: false,
      },
    ],
  },
  {
    title: "Music & Entertainment",
    description: "High-quality music and fun features",
    icon: Music,
    color: "text-purple-600",
    features: [
      {
        name: "High-Quality Music",
        description: "Crystal-clear audio from YouTube, Spotify, SoundCloud, and more",
        icon: Headphones,
        premium: false,
      },
      {
        name: "Advanced Queue System",
        description: "Queue management, shuffle, repeat, and playlist support",
        icon: Music,
        premium: false,
      },
      {
        name: "24/7 Music Mode",
        description: "Keep music playing even when no one is in the voice channel",
        icon: Clock,
        premium: true,
      },
      {
        name: "Custom Playlists",
        description: "Create and save custom playlists for your server",
        icon: Star,
        premium: true,
      },
      {
        name: "Music Filters",
        description: "Apply audio filters like bass boost, nightcore, and more",
        icon: Settings,
        premium: true,
      },
      {
        name: "Games & Fun",
        description: "Mini-games, trivia, and entertainment commands for your community",
        icon: Gamepad2,
        premium: false,
      },
    ],
  },
  {
    title: "Community Engagement",
    description: "Build and grow your community",
    icon: Users,
    color: "text-green-600",
    features: [
      {
        name: "Welcome System",
        description: "Customizable welcome messages, images, and auto-role assignment",
        icon: Users,
        premium: false,
      },
      {
        name: "Giveaway System",
        description: "Host giveaways with multiple winners, requirements, and automatic selection",
        icon: Gift,
        premium: false,
      },
      {
        name: "Polls & Voting",
        description: "Create polls with multiple options and real-time results",
        icon: MessageSquare,
        premium: false,
      },
      {
        name: "Level System",
        description: "XP and leveling system with customizable rewards and leaderboards",
        icon: TrendingUp,
        premium: true,
      },
      {
        name: "Custom Commands",
        description: "Create custom commands with variables, conditions, and actions",
        icon: Bot,
        premium: true,
      },
      {
        name: "Server Analytics",
        description: "Detailed insights into member activity, growth, and engagement",
        icon: BarChart3,
        premium: true,
      },
    ],
  },
  {
    title: "Utility & Tools",
    description: "Helpful tools for server management",
    icon: Zap,
    color: "text-yellow-600",
    features: [
      {
        name: "Server Information",
        description: "Detailed server stats, member info, and role information",
        icon: Settings,
        premium: false,
      },
      {
        name: "Reminder System",
        description: "Set reminders for yourself or your server members",
        icon: Clock,
        premium: false,
      },
      {
        name: "Ticket System",
        description: "Professional support ticket system with categories and transcripts",
        icon: MessageSquare,
        premium: true,
      },
      {
        name: "Backup & Restore",
        description: "Backup your server settings and restore them when needed",
        icon: Shield,
        premium: true,
      },
      {
        name: "Multi-Language",
        description: "Support for multiple languages with automatic detection",
        icon: Bot,
        premium: false,
      },
      {
        name: "API Integration",
        description: "Connect with external services and APIs for enhanced functionality",
        icon: Zap,
        premium: true,
      },
    ],
  },
]

const stats = [
  { label: "Active Servers", value: "1.1K+", color: "text-blue-600" },
  { label: "Happy Users", value: "3.8M+", color: "text-purple-600" },
  { label: "Commands Available", value: "200+", color: "text-green-600" },
  { label: "Uptime", value: "99.9%", color: "text-yellow-600" },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
          Powerful Features
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Discover all the amazing features that make Astroz the perfect Discord bot for your server. From advanced
          moderation to high-quality music, we've got everything you need.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
              Add to Server
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">View Dashboard</Link>
          </Button>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="space-y-16">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <category.icon className={`h-12 w-12 ${category.color}`} />
              </div>
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              <p className="text-lg text-muted-foreground">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <feature.icon className={`h-8 w-8 ${category.color}`} />
                      {feature.premium && (
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
                        >
                          <Crown className="h-3 w-3 mr-1" />
                          Premium
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg">{feature.name}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Premium CTA */}
      <div className="mt-20 text-center">
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-8">
            <Crown className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Unlock Premium Features</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get access to advanced features like 24/7 music, custom commands, detailed analytics, and priority
              support. Upgrade to Premium and take your server to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                Upgrade to Premium
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
