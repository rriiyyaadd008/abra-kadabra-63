import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, MessageSquare, Settings, Gamepad2, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    category: "Moderation",
    icon: Shield,
    color: "text-red-600",
    items: [
      {
        title: "Auto Moderation",
        description: "Automatically detect and handle spam, inappropriate content, and rule violations",
        badge: "Advanced",
      },
      {
        title: "Custom Filters",
        description: "Create custom word filters and automod rules tailored to your community",
        badge: "Customizable",
      },
      {
        title: "Moderation Logs",
        description: "Comprehensive logging of all moderation actions with detailed audit trails",
        badge: "Detailed",
      },
      {
        title: "Temporary Actions",
        description: "Automatic unmuting, unbanning, and role removal with timed moderation",
        badge: "Automated",
      },
    ],
  },
  {
    category: "Engagement",
    icon: MessageSquare,
    color: "text-blue-600",
    items: [
      {
        title: "Interactive Polls",
        description: "Create engaging polls with multiple choice options and real-time results",
        badge: "Interactive",
      },
      {
        title: "Giveaways",
        description: "Host exciting giveaways with automatic winner selection and notifications",
        badge: "Popular",
      },
      {
        title: "Reaction Roles",
        description: "Let users self-assign roles by reacting to messages",
        badge: "Easy Setup",
      },
      {
        title: "Welcome System",
        description: "Customizable welcome messages and auto-role assignment for new members",
        badge: "Welcoming",
      },
    ],
  },
  {
    category: "Entertainment",
    icon: Gamepad2,
    color: "text-purple-600",
    items: [
      {
        title: "Mini Games",
        description: "Built-in games like trivia, word games, and puzzles to keep members engaged",
        badge: "Fun",
      },
      {
        title: "Music Player",
        description: "High-quality music streaming with playlist support and queue management",
        badge: "Premium",
      },
      {
        title: "Meme Generator",
        description: "Generate and share memes directly in your Discord server",
        badge: "Creative",
      },
      {
        title: "Daily Rewards",
        description: "Reward active members with daily bonuses and streak multipliers",
        badge: "Rewarding",
      },
    ],
  },
  {
    category: "Utility",
    icon: Settings,
    color: "text-green-600",
    items: [
      {
        title: "Server Analytics",
        description: "Detailed insights into server activity, member growth, and engagement metrics",
        badge: "Insightful",
      },
      {
        title: "Custom Commands",
        description: "Create personalized commands with variables and conditional logic",
        badge: "Flexible",
      },
      {
        title: "Scheduled Messages",
        description: "Automatically send messages at specific times or intervals",
        badge: "Automated",
      },
      {
        title: "Backup & Restore",
        description: "Complete server backup including roles, channels, and settings",
        badge: "Secure",
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Powerful Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover all the amazing features that make Astroz the ultimate Discord bot for your community. From advanced
          moderation to engaging entertainment, we've got everything covered.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
          <div className="text-sm text-muted-foreground">Commands</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
          <div className="text-sm text-muted-foreground">Uptime</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
          <div className="text-sm text-muted-foreground">Support</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">1.1K+</div>
          <div className="text-sm text-muted-foreground">Servers</div>
        </div>
      </div>

      {/* Feature Categories */}
      <div className="space-y-16">
        {features.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center space-x-3 mb-8">
              <category.icon className={`h-8 w-8 ${category.color}`} />
              <h2 className="text-3xl font-bold">{category.category}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((feature, featureIndex) => (
                <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <Badge variant="secondary">{feature.badge}</Badge>
                    </div>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of communities already using Astroz to create amazing Discord experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="/dashboard">
              Add to Server <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
