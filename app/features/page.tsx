import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield,
  Music,
  Gamepad2,
  Users,
  Zap,
  Bot,
  Settings,
  MessageSquare,
  ImageIcon,
  Calendar,
  Trophy,
  Heart,
  Sparkles,
  Lock,
  Volume2,
  Play,
  Shuffle,
  SkipForward,
  Dice1,
  Target,
  Crown,
  UserPlus,
  Ban,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"

const featureCategories = [
  {
    title: "Moderation & Security",
    icon: Shield,
    color: "text-red-500",
    features: [
      {
        icon: Ban,
        title: "Auto Moderation",
        description: "Automatically detect and handle spam, inappropriate content, and rule violations.",
      },
      {
        icon: AlertTriangle,
        title: "Warning System",
        description: "Issue warnings to users with automatic escalation and punishment tracking.",
      },
      {
        icon: Lock,
        title: "Channel Management",
        description: "Lock, unlock, and manage channel permissions with advanced controls.",
      },
      {
        icon: UserPlus,
        title: "Member Screening",
        description: "Advanced verification system to keep unwanted users out of your server.",
      },
    ],
  },
  {
    title: "Music & Entertainment",
    icon: Music,
    color: "text-purple-500",
    features: [
      {
        icon: Volume2,
        title: "High-Quality Audio",
        description: "Crystal clear music streaming from YouTube, Spotify, SoundCloud, and more.",
      },
      {
        icon: Play,
        title: "Queue Management",
        description: "Advanced playlist management with shuffle, repeat, and skip voting.",
      },
      {
        icon: Shuffle,
        title: "Smart Playlists",
        description: "Create and save custom playlists with intelligent recommendations.",
      },
      {
        icon: SkipForward,
        title: "DJ Controls",
        description: "Give trusted members DJ permissions to control music playback.",
      },
    ],
  },
  {
    title: "Games & Activities",
    icon: Gamepad2,
    color: "text-green-500",
    features: [
      {
        icon: Dice1,
        title: "Mini Games",
        description: "Built-in games like trivia, word games, and number guessing for community fun.",
      },
      {
        icon: Target,
        title: "Competitions",
        description: "Host server-wide competitions and tournaments with automatic scoring.",
      },
      {
        icon: Trophy,
        title: "Leaderboards",
        description: "Track user activity and engagement with customizable leaderboards.",
      },
      {
        icon: Crown,
        title: "Achievements",
        description: "Reward active members with badges and achievements for participation.",
      },
    ],
  },
  {
    title: "Server Management",
    icon: Users,
    color: "text-blue-500",
    features: [
      {
        icon: Settings,
        title: "Custom Commands",
        description: "Create personalized commands and automate server tasks with ease.",
      },
      {
        icon: MessageSquare,
        title: "Welcome Messages",
        description: "Greet new members with customizable welcome messages and role assignment.",
      },
      {
        icon: Calendar,
        title: "Event Scheduling",
        description: "Schedule and manage server events with automatic reminders and notifications.",
      },
      {
        icon: ImageIcon,
        title: "Media Management",
        description: "Automatically organize and moderate images, videos, and other media content.",
      },
    ],
  },
  {
    title: "Utility & Tools",
    icon: Zap,
    color: "text-yellow-500",
    features: [
      {
        icon: Bot,
        title: "AI Assistant",
        description: "Intelligent chatbot capabilities with natural language processing.",
      },
      {
        icon: Sparkles,
        title: "Custom Reactions",
        description: "Set up automatic reactions and responses to specific keywords or phrases.",
      },
      {
        icon: Heart,
        title: "Server Analytics",
        description: "Detailed insights into server activity, member engagement, and growth metrics.",
      },
      {
        icon: Settings,
        title: "Advanced Configuration",
        description: "Granular control over all bot features with per-channel and per-role settings.",
      },
    ],
  },
]

const stats = [
  { label: "Active Servers", value: "1.1K+" },
  { label: "Happy Users", value: "3.8M+" },
  { label: "Commands Available", value: "200+" },
  { label: "Uptime", value: "99.9%" },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            ⚡ Powerful Features
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Everything You Need
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover all the powerful features that make Astroz the ultimate Discord bot for your server.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {featureCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <category.icon className={`h-12 w-12 ${category.color}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.features.map((feature, featureIndex) => (
                  <Card key={featureIndex} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <feature.icon className={`h-8 w-8 ${category.color} mb-3`} />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Add Astroz to your Discord server today and unlock all these powerful features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
                Add to Discord
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
