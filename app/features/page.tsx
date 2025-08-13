import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Shield,
  Music,
  GamepadIcon,
  Users,
  Settings,
  Bot,
  Zap,
  Star,
  Lock,
  MessageSquare,
  Calendar,
  BarChart3,
  Gift,
  Coins,
  Trophy,
  ImageIcon,
  Volume2,
  Search,
  Bell,
  Clock,
  Filter,
  UserCheck,
  Ban,
  AlertTriangle,
  Eye,
  FileText,
  Database,
  Webhook,
  Code,
  Palette,
  Globe,
  Heart,
} from "lucide-react"

const featureCategories = [
  {
    title: "Moderation & Security",
    icon: Shield,
    color: "text-red-600",
    features: [
      { name: "Auto Moderation", description: "Advanced spam and toxicity detection", icon: Shield },
      { name: "Custom Filters", description: "Create custom word and phrase filters", icon: Filter },
      { name: "User Verification", description: "Captcha and role-based verification", icon: UserCheck },
      { name: "Ban Management", description: "Temporary and permanent ban system", icon: Ban },
      { name: "Warning System", description: "Progressive warning and punishment", icon: AlertTriangle },
      { name: "Audit Logs", description: "Comprehensive server activity logging", icon: Eye },
      { name: "Raid Protection", description: "Automatic raid detection and mitigation", icon: Lock },
      { name: "Anti-Spam", description: "Intelligent spam detection and prevention", icon: MessageSquare },
    ],
  },
  {
    title: "Entertainment & Games",
    icon: GamepadIcon,
    color: "text-purple-600",
    features: [
      { name: "Mini Games", description: "Rock paper scissors, trivia, and more", icon: GamepadIcon },
      { name: "Economy System", description: "Virtual currency and shop system", icon: Coins },
      { name: "Leveling System", description: "XP and level progression for users", icon: Trophy },
      { name: "Custom Commands", description: "Create personalized server commands", icon: Code },
      { name: "Meme Generator", description: "Generate and share memes", icon: ImageIcon },
      { name: "Polls & Voting", description: "Interactive polls and voting systems", icon: BarChart3 },
      { name: "Giveaways", description: "Automated giveaway management", icon: Gift },
      { name: "Fun Commands", description: "Jokes, facts, and entertainment", icon: Star },
    ],
  },
  {
    title: "Music & Audio",
    icon: Music,
    color: "text-green-600",
    features: [
      { name: "High-Quality Music", description: "Crystal clear audio streaming", icon: Music },
      { name: "Playlist Support", description: "Create and manage playlists", icon: FileText },
      { name: "Queue Management", description: "Advanced queue controls", icon: Clock },
      { name: "Volume Control", description: "Individual and global volume settings", icon: Volume2 },
      { name: "Music Search", description: "Search across multiple platforms", icon: Search },
      { name: "Auto-Play", description: "Continuous music streaming", icon: Zap },
      { name: "Sound Effects", description: "Custom sound effects and clips", icon: Bell },
      { name: "Radio Stations", description: "24/7 radio station streaming", icon: Globe },
    ],
  },
  {
    title: "Utility & Management",
    icon: Settings,
    color: "text-blue-600",
    features: [
      { name: "Server Analytics", description: "Detailed server statistics", icon: BarChart3 },
      { name: "Role Management", description: "Advanced role assignment system", icon: Users },
      { name: "Channel Management", description: "Automated channel creation/deletion", icon: MessageSquare },
      { name: "Backup System", description: "Server backup and restoration", icon: Database },
      { name: "Webhook Integration", description: "Connect with external services", icon: Webhook },
      { name: "Custom Embeds", description: "Beautiful message formatting", icon: Palette },
      { name: "Scheduled Messages", description: "Automated message scheduling", icon: Calendar },
      { name: "Server Insights", description: "Member activity and engagement", icon: Eye },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Powerful Features
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Discover all the amazing features that make Astroz the most advanced Discord bot. Trusted by 1.1K+ servers and
          3.8M+ users worldwide.
        </p>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card>
          <CardContent className="p-6 text-center">
            <Bot className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">200+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Commands</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
            <div className="text-2xl font-bold">99.9%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">1.1K+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Servers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Heart className="h-8 w-8 mx-auto mb-2 text-red-600" />
            <div className="text-2xl font-bold">3.8M+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Users</div>
          </CardContent>
        </Card>
      </div>

      {/* Feature Categories */}
      <div className="space-y-16">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <div className="flex items-center mb-8">
              <category.icon className={`h-8 w-8 mr-3 ${category.color}`} />
              <h2 className="text-3xl font-bold">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.features.map((feature, featureIndex) => (
                <Card key={featureIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <feature.icon className={`h-5 w-5 ${category.color}`} />
                      <CardTitle className="text-lg">{feature.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience All Features?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Join thousands of servers already using Astroz's powerful features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID">
              <Bot className="mr-2 h-5 w-5" />
              Add to Discord
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">
              <Settings className="mr-2 h-5 w-5" />
              View Dashboard
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
