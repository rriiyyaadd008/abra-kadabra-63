import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Shield,
  Music,
  Zap,
  Users,
  Settings,
  Bot,
  Heart,
  Gamepad2,
  ImageIcon,
  MessageSquare,
  Calendar,
  Lock,
  Volume2,
  Play,
  Search,
  List,
  Clock,
  UserCheck,
  AlertTriangle,
  Eye,
  FileText,
  Star,
  Gift,
  Dice1,
  Code,
  Globe,
  Zap as Lightning,
  Activity,
  BarChart3,
  TrendingUp,
  DollarSign,
  Bell,
  Notification,
  Megaphone,
} from "lucide-react"

export default function FeaturesPage() {
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
        },
        {
          name: "Advanced Logging",
          description: "Comprehensive audit logs for all server activities and moderation actions",
          icon: FileText,
        },
        {
          name: "Custom Filters",
          description: "Create custom word filters and automod rules tailored to your server",
          icon: Settings,
        },
        {
          name: "Role Management",
          description: "Automated role assignment and management based on user behavior",
          icon: UserCheck,
        },
        {
          name: "Anti-Raid Protection",
          description: "Protect your server from raids and mass join attacks",
          icon: Lock,
        },
        {
          name: "Warning System",
          description: "Issue warnings to users with automatic escalation and punishment",
          icon: AlertTriangle,
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
          name: "High-Quality Audio",
          description: "Crystal clear music streaming with support for multiple sources",
          icon: Volume2,
        },
        {
          name: "Playlist Management",
          description: "Create, save, and share custom playlists with your community",
          icon: List,
        },
        {
          name: "Music Controls",
          description: "Full playback controls including skip, pause, shuffle, and repeat",
          icon: Play,
        },
        {
          name: "Queue System",
          description: "Advanced queue management with voting and priority features",
          icon: Clock,
        },
        {
          name: "Multi-Source Support",
          description: "Play music from YouTube, Spotify, SoundCloud, and more",
          icon: Search,
        },
        {
          name: "Audio Effects",
          description: "Apply audio filters and effects to enhance your listening experience",
          icon: Settings,
        },
      ],
    },
    {
      title: "Utility & Tools",
      description: "Powerful utilities to enhance your server",
      icon: Zap,
      color: "text-yellow-600",
      features: [
        {
          name: "Server Statistics",
          description: "Detailed analytics and insights about your server activity",
          icon: BarChart3,
        },
        {
          name: "Custom Commands",
          description: "Create custom commands and autoresponders for your server",
          icon: Code,
        },
        {
          name: "Reaction Roles",
          description: "Let users assign roles to themselves using reaction menus",
          icon: Star,
        },
        {
          name: "Ticket System",
          description: "Professional support ticket system with categories and transcripts",
          icon: MessageSquare,
        },
        {
          name: "Giveaway Manager",
          description: "Host and manage giveaways with automatic winner selection",
          icon: Gift,
        },
        {
          name: "Reminder System",
          description: "Set reminders for yourself or your community members",
          icon: Bell,
        },
      ],
    },
    {
      title: "Fun & Games",
      description: "Keep your community engaged and entertained",
      icon: Gamepad2,
      color: "text-green-600",
      features: [
        {
          name: "Mini Games",
          description: "Built-in games like trivia, word games, and puzzles",
          icon: Dice1,
        },
        {
          name: "Economy System",
          description: "Virtual currency system with shops, gambling, and rewards",
          icon: DollarSign,
        },
        {
          name: "Leveling System",
          description: "XP and leveling system with customizable rewards and roles",
          icon: TrendingUp,
        },
        {
          name: "Image Generation",
          description: "Generate memes, avatars, and custom images with AI",
          icon: ImageIcon,
        },
        {
          name: "Social Features",
          description: "Marriage, pet, and social interaction commands",
          icon: Heart,
        },
        {
          name: "Daily Rewards",
          description: "Daily login bonuses and streak rewards for active users",
          icon: Calendar,
        },
      ],
    },
    {
      title: "Automation & AI",
      description: "Smart automation powered by artificial intelligence",
      icon: Bot,
      color: "text-indigo-600",
      features: [
        {
          name: "Smart Responses",
          description: "AI-powered chatbot that can answer questions and engage with users",
          icon: MessageSquare,
        },
        {
          name: "Content Moderation",
          description: "AI-based content analysis for detecting inappropriate material",
          icon: Eye,
        },
        {
          name: "Auto Translation",
          description: "Automatic message translation for multilingual communities",
          icon: Globe,
        },
        {
          name: "Sentiment Analysis",
          description: "Monitor community mood and detect potential conflicts",
          icon: Activity,
        },
        {
          name: "Smart Notifications",
          description: "Intelligent notification system that learns user preferences",
          icon: Notification,
        },
        {
          name: "Predictive Moderation",
          description: "Predict and prevent rule violations before they happen",
          icon: Lightning,
        },
      ],
    },
    {
      title: "Community Management",
      description: "Tools to build and manage thriving communities",
      icon: Users,
      color: "text-pink-600",
      features: [
        {
          name: "Welcome System",
          description: "Customizable welcome messages and auto-role assignment for new members",
          icon: UserCheck,
        },
        {
          name: "Event Management",
          description: "Create and manage server events with RSVP functionality",
          icon: Calendar,
        },
        {
          name: "Announcement System",
          description: "Schedule and manage announcements across multiple channels",
          icon: Megaphone,
        },
        {
          name: "Member Verification",
          description: "Advanced verification system to prevent bots and alts",
          icon: Lock,
        },
        {
          name: "Community Polls",
          description: "Create polls and surveys to gather community feedback",
          icon: BarChart3,
        },
        {
          name: "Activity Tracking",
          description: "Track member activity and engagement metrics",
          icon: TrendingUp,
        },
      ],
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Powerful Features</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover all the amazing features that make Astroz the most advanced Discord bot. From moderation to
          entertainment, we've got everything your server needs.
        </p>
      </div>

      <div className="grid gap-12">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className={`p-3 rounded-full bg-muted ${category.color}`}>
                  <category.icon className="h-8 w-8" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
              <p className="text-muted-foreground text-lg">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-muted ${category.color}`}>
                        <feature.icon className="h-5 w-5" />
                      </div>
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

      {/* Stats Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-blue-600">1.1K+</div>
            <div className="text-muted-foreground">Active Servers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-purple-600">3.8M+</div>
            <div className="text-muted-foreground">Happy Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-green-600">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-yellow-600">24/7</div>
            <div className="text-muted-foreground">Support</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience Astroz?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of servers already using Astroz to enhance their Discord experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Invite to Server
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            View Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
