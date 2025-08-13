import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Zap,
  Users,
  Music,
  Gamepad2Icon as GameController2,
  MessageSquare,
  Settings,
  BarChart3,
  Lock,
  Bell,
  Gift,
  Trophy,
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Moderation",
      description: "Comprehensive moderation tools to keep your server safe and organized.",
      features: ["Auto-moderation", "Custom word filters", "Raid protection", "Detailed logging"],
      category: "Moderation",
    },
    {
      icon: Users,
      title: "Member Management",
      description: "Powerful tools to manage your community members effectively.",
      features: ["Role management", "Member verification", "Welcome messages", "Auto-roles"],
      category: "Management",
    },
    {
      icon: Music,
      title: "Music & Entertainment",
      description: "High-quality music streaming and entertainment features.",
      features: ["24/7 music playback", "Playlist support", "Sound effects", "Music quiz"],
      category: "Entertainment",
    },
    {
      icon: GameController2,
      title: "Fun & Games",
      description: "Engaging games and activities to keep your community active.",
      features: ["Mini-games", "Trivia", "Economy system", "Daily rewards"],
      category: "Games",
    },
    {
      icon: MessageSquare,
      title: "Custom Commands",
      description: "Create personalized commands tailored to your server's needs.",
      features: ["Custom responses", "Command aliases", "Conditional logic", "Variables"],
      category: "Customization",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Detailed statistics and insights about your server activity.",
      features: ["Member analytics", "Message statistics", "Growth tracking", "Activity reports"],
      category: "Analytics",
    },
    {
      icon: Lock,
      title: "Security Features",
      description: "Advanced security measures to protect your community.",
      features: ["Anti-spam", "Link protection", "Account age verification", "IP tracking"],
      category: "Security",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Stay informed with customizable notification systems.",
      features: ["Event reminders", "Announcement system", "DM notifications", "Channel alerts"],
      category: "Notifications",
    },
    {
      icon: Gift,
      title: "Giveaways & Events",
      description: "Host exciting giveaways and events for your community.",
      features: ["Automated giveaways", "Event scheduling", "Prize management", "Winner selection"],
      category: "Events",
    },
    {
      icon: Trophy,
      title: "Leveling System",
      description: "Reward active members with an engaging leveling system.",
      features: ["XP tracking", "Level rewards", "Leaderboards", "Custom level roles"],
      category: "Engagement",
    },
    {
      icon: Settings,
      title: "Easy Configuration",
      description: "Simple setup and configuration through our web dashboard.",
      features: ["Web dashboard", "One-click setup", "Backup & restore", "Multi-language"],
      category: "Configuration",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast responses with 99.9% uptime guarantee.",
      features: ["Sub-second responses", "Global CDN", "Auto-scaling", "24/7 monitoring"],
      category: "Performance",
    },
  ]

  const categories = [...new Set(features.map((f) => f.category))]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover all the amazing features that make Astroz the perfect Discord bot for your server. From advanced
            moderation to fun games, we've got everything you need.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="h-12 w-12 text-blue-600" />
                    <Badge variant="secondary">{feature.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Categories Overview */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Feature Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="font-semibold text-lg mb-2">{category}</div>
                <div className="text-sm text-muted-foreground">
                  {features.filter((f) => f.category === category).length} features
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience all these features and more by adding Astroz to your Discord server today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Add to Discord
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
