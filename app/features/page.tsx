import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Music,
  Users,
  Zap,
  Settings,
  MessageSquare,
  Trophy,
  Calendar,
  ImageIcon,
  Bot,
  Lock,
  Volume2,
  Gamepad2,
  Heart,
  Star,
  Gift,
  Bell,
  Search,
  BarChart3,
} from "lucide-react"

export default function FeaturesPage() {
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
          name: "Advanced Warnings",
          description: "Comprehensive warning system with customizable punishments and escalation",
          icon: Bell,
        },
        {
          name: "Anti-Raid Protection",
          description: "Protect your server from raids and mass join attacks",
          icon: Lock,
        },
        {
          name: "Custom Filters",
          description: "Create custom word filters and automod rules for your community",
          icon: Search,
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
          name: "Queue Management",
          description: "Advanced queue system with shuffle, repeat, and playlist support",
          icon: Volume2,
        },
        {
          name: "Music Filters",
          description: "Apply audio filters like bass boost, nightcore, and 8D effects",
          icon: Settings,
        },
        {
          name: "24/7 Music",
          description: "Keep the music playing even when you're away",
          icon: Heart,
        },
      ],
    },
    {
      title: "Server Management",
      icon: Users,
      color: "text-green-600",
      features: [
        {
          name: "Role Management",
          description: "Advanced role assignment, reaction roles, and permission management",
          icon: Users,
        },
        {
          name: "Channel Tools",
          description: "Create, manage, and organize channels with advanced permissions",
          icon: MessageSquare,
        },
        {
          name: "Server Analytics",
          description: "Detailed insights into server activity, member growth, and engagement",
          icon: BarChart3,
        },
        {
          name: "Welcome System",
          description: "Customizable welcome messages, autoroles, and member screening",
          icon: Gift,
        },
      ],
    },
    {
      title: "Utility & Tools",
      icon: Zap,
      color: "text-yellow-600",
      features: [
        {
          name: "Custom Commands",
          description: "Create custom commands and autoresponders for your server",
          icon: Bot,
        },
        {
          name: "Reminder System",
          description: "Set reminders for yourself or your community members",
          icon: Calendar,
        },
        {
          name: "Image Generation",
          description: "Generate memes, welcome images, and custom graphics",
          icon: ImageIcon,
        },
        {
          name: "Leveling System",
          description: "Engage your community with XP, levels, and leaderboards",
          icon: Trophy,
        },
      ],
    },
    {
      title: "Fun & Games",
      icon: Gamepad2,
      color: "text-red-600",
      features: [
        {
          name: "Mini Games",
          description: "Play games like trivia, word games, and reaction games",
          icon: Gamepad2,
        },
        {
          name: "Economy System",
          description: "Virtual currency, shops, and trading for your server",
          icon: Star,
        },
        {
          name: "Social Features",
          description: "Marriage system, profiles, and social interactions",
          icon: Heart,
        },
        {
          name: "Giveaways",
          description: "Host and manage giveaways with advanced entry requirements",
          icon: Gift,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover all the amazing features that make Astroz Bot the perfect choice for your Discord server. From
            advanced moderation to high-quality music streaming, we've got everything you need.
          </p>
          <div className="flex justify-center mt-6">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Trusted by 1.1K+ servers and 3.8M+ users
            </Badge>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${category.color}`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 ${category.color}`}>
                          <feature.icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-xl">{feature.name}</CardTitle>
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

        {/* Stats Section */}
        <div className="mt-20 py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Astroz by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-blue-600">1.1K+</div>
                <div className="text-gray-600 dark:text-gray-400">Active Servers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-green-600">3.8M+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-purple-600">99.9%</div>
                <div className="text-gray-600 dark:text-gray-400">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-red-600">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
