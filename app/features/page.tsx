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
  Trophy,
  Calendar,
  Lock,
  BarChart3,
  Webhook,
  ArrowRight,
} from "lucide-react"

const featureCategories = [
  {
    title: "Moderation & Security",
    description: "Keep your server safe and organized",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    features: [
      {
        name: "Auto Moderation",
        description: "Automatically detect and handle spam, inappropriate content, and rule violations",
        icon: Shield,
      },
      {
        name: "Custom Filters",
        description: "Create custom word filters and automod rules tailored to your community",
        icon: Lock,
      },
      {
        name: "Detailed Logging",
        description: "Comprehensive audit logs for all moderation actions and server events",
        icon: BarChart3,
      },
      {
        name: "Role Management",
        description: "Advanced role assignment and permission management tools",
        icon: Users,
      },
    ],
  },
  {
    title: "Music & Entertainment",
    description: "High-quality audio and fun activities",
    icon: Music,
    color: "from-purple-500 to-pink-500",
    features: [
      {
        name: "Multi-Platform Music",
        description: "Play music from YouTube, Spotify, SoundCloud, and more platforms",
        icon: Music,
      },
      {
        name: "Queue Management",
        description: "Advanced queue system with shuffle, repeat, and playlist support",
        icon: Settings,
      },
      {
        name: "Mini Games",
        description: "Engage your community with trivia, word games, and interactive activities",
        icon: Gamepad2,
      },
      {
        name: "Custom Playlists",
        description: "Create and save custom playlists for your server",
        icon: Trophy,
      },
    ],
  },
  {
    title: "Community Tools",
    description: "Build and grow your community",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        name: "Level System",
        description: "Reward active members with XP, levels, and custom role rewards",
        icon: Trophy,
      },
      {
        name: "Welcome Messages",
        description: "Customizable welcome messages and member screening",
        icon: MessageSquare,
      },
      {
        name: "Event Management",
        description: "Create and manage server events with RSVP functionality",
        icon: Calendar,
      },
      {
        name: "Custom Commands",
        description: "Create custom commands and autoresponders for your server",
        icon: Bot,
      },
    ],
  },
  {
    title: "Utility & Automation",
    description: "Streamline server management",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    features: [
      {
        name: "Reaction Roles",
        description: "Let members assign roles to themselves using reactions",
        icon: Settings,
      },
      {
        name: "Auto Roles",
        description: "Automatically assign roles to new members based on criteria",
        icon: Users,
      },
      {
        name: "Webhooks",
        description: "Integration with external services and custom webhooks",
        icon: Webhook,
      },
      {
        name: "Server Stats",
        description: "Real-time server statistics and member analytics",
        icon: BarChart3,
      },
    ],
  },
]

const highlights = [
  {
    title: "99.9% Uptime",
    description: "Reliable service you can count on",
    icon: Zap,
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it",
    icon: MessageSquare,
  },
  {
    title: "Regular Updates",
    description: "New features and improvements monthly",
    icon: Settings,
  },
  {
    title: "Easy Setup",
    description: "Get started in under 5 minutes",
    icon: Bot,
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🎯 Complete Feature Set
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Everything Your Discord Server Needs</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover all the powerful features that make Astroz the perfect Discord bot for communities of all sizes.
              From moderation to entertainment, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
                  <Bot className="mr-2 h-5 w-5" />
                  Add to Discord
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/dashboard">
                  View Dashboard
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {featureCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} mb-4`}
                  >
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{category.title}</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <Card key={featureIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                          >
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{feature.name}</CardTitle>
                          </div>
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
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Astroz?</h2>
            <p className="text-xl text-muted-foreground">
              Built with reliability, performance, and user experience in mind
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 1.1K+ servers and 3.8M+ users who trust Astroz to power their Discord communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
                  <Bot className="mr-2 h-5 w-5" />
                  Invite Astroz Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/contact">
                  Get Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
