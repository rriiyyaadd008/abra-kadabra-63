import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Music,
  Zap,
  Users,
  Bot,
  Gamepad2,
  Calendar,
  TrendingUp,
  Mic,
  Volume2,
  Play,
  Repeat,
  Heart,
  Star,
  Trophy,
  Gift,
  Coins,
  Target,
  AlertTriangle,
  Ban,
  UserX,
  Clock,
  Eye,
  Filter,
  Webhook,
  Bell,
  Search,
  Hash,
  AtSign,
  FileText,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"
import NextLink from "next/link"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Astroz Features</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover all the powerful features that make Astroz the ultimate Discord bot. From advanced moderation to
          high-quality music streaming, we've got everything your server needs.
        </p>
        <div className="flex justify-center gap-2 mt-6">
          <Badge variant="secondary">1.1K+ Servers</Badge>
          <Badge variant="secondary">3.8M+ Users</Badge>
          <Badge variant="secondary">99.9% Uptime</Badge>
        </div>
      </div>

      {/* Moderation Features */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-blue-600" />
          <h2 className="text-3xl font-bold">Advanced Moderation</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Ban className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle>Auto Moderation</CardTitle>
              <CardDescription>
                Automatically detect and handle spam, inappropriate content, and rule violations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Anti-spam protection</li>
                <li>• Profanity filtering</li>
                <li>• Link/invite filtering</li>
                <li>• Mass mention protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <UserX className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Punishment System</CardTitle>
              <CardDescription>Comprehensive punishment system with warnings, mutes, kicks, and bans</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Temporary & permanent bans</li>
                <li>• Timed mutes</li>
                <li>• Warning system</li>
                <li>• Automatic escalation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Eye className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Audit Logs</CardTitle>
              <CardDescription>Detailed logging of all moderation actions and server events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Message logs</li>
                <li>• Member join/leave logs</li>
                <li>• Role & channel changes</li>
                <li>• Moderation action logs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Filter className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Content Filtering</CardTitle>
              <CardDescription>Advanced content filtering with customizable rules and exceptions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom word filters</li>
                <li>• Image content scanning</li>
                <li>• Regex pattern matching</li>
                <li>• Whitelist/blacklist system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Timed Actions</CardTitle>
              <CardDescription>Schedule and automate moderation actions with precise timing</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Temporary mutes</li>
                <li>• Scheduled unmutes/unbans</li>
                <li>• Reminder system</li>
                <li>• Auto-role assignment</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <AlertTriangle className="h-8 w-8 text-yellow-500 mb-2" />
              <CardTitle>Raid Protection</CardTitle>
              <CardDescription>Protect your server from raids and mass join attacks</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Join rate limiting</li>
                <li>• Account age verification</li>
                <li>• Automatic lockdown</li>
                <li>• Suspicious activity detection</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Music Features */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Music className="h-8 w-8 text-green-600" />
          <h2 className="text-3xl font-bold">High-Quality Music</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Volume2 className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Multiple Sources</CardTitle>
              <CardDescription>Stream music from various platforms with crystal-clear quality</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• YouTube & YouTube Music</li>
                <li>• Spotify integration</li>
                <li>• SoundCloud support</li>
                <li>• Direct file uploads</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Play className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Advanced Queue</CardTitle>
              <CardDescription>Powerful queue management with playlist support and controls</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Queue manipulation</li>
                <li>• Playlist import/export</li>
                <li>• Shuffle & repeat modes</li>
                <li>• Skip voting system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Mic className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Voice Controls</CardTitle>
              <CardDescription>Complete voice channel control with advanced audio settings</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Volume control</li>
                <li>• Bass boost & filters</li>
                <li>• Speed adjustment</li>
                <li>• Audio effects</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle>Personal Playlists</CardTitle>
              <CardDescription>Create and manage personal playlists with favorites system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom playlists</li>
                <li>• Favorite tracks</li>
                <li>• Playlist sharing</li>
                <li>• Recently played</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Search className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Smart Search</CardTitle>
              <CardDescription>Intelligent search with auto-suggestions and quick results</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Auto-complete suggestions</li>
                <li>• Search by lyrics</li>
                <li>• Artist/album search</li>
                <li>• Quick play buttons</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Repeat className="h-8 w-8 text-indigo-500 mb-2" />
              <CardTitle>24/7 Music</CardTitle>
              <CardDescription>Continuous music streaming with auto-play and radio modes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 24/7 mode</li>
                <li>• Auto-play similar songs</li>
                <li>• Radio stations</li>
                <li>• Ambient soundscapes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Utility Features */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="h-8 w-8 text-yellow-600" />
          <h2 className="text-3xl font-bold">Utility & Tools</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Calendar className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Event Management</CardTitle>
              <CardDescription>Create and manage server events with automated reminders</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Event scheduling</li>
                <li>• RSVP system</li>
                <li>• Automatic reminders</li>
                <li>• Recurring events</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Bell className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Custom Notifications</CardTitle>
              <CardDescription>Set up custom notifications for various server activities</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Welcome messages</li>
                <li>• Leave notifications</li>
                <li>• Role change alerts</li>
                <li>• Custom triggers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Webhook className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Webhook Integration</CardTitle>
              <CardDescription>Connect external services with powerful webhook support</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• GitHub integration</li>
                <li>• Twitch notifications</li>
                <li>• YouTube alerts</li>
                <li>• Custom webhooks</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Server Backup</CardTitle>
              <CardDescription>Comprehensive server backup and restoration system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Full server backup</li>
                <li>• Selective restoration</li>
                <li>• Scheduled backups</li>
                <li>• Cloud storage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Hash className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle>Channel Management</CardTitle>
              <CardDescription>Advanced channel creation and management tools</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Auto channel creation</li>
                <li>• Temporary channels</li>
                <li>• Channel templates</li>
                <li>• Permission sync</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <AtSign className="h-8 w-8 text-indigo-500 mb-2" />
              <CardTitle>Role Management</CardTitle>
              <CardDescription>Sophisticated role assignment and management system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Reaction roles</li>
                <li>• Auto-role assignment</li>
                <li>• Role hierarchies</li>
                <li>• Temporary roles</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Community Features */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Users className="h-8 w-8 text-purple-600" />
          <h2 className="text-3xl font-bold">Community & Engagement</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Leveling System</CardTitle>
              <CardDescription>Engage your community with XP, levels, and rank rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• XP & level tracking</li>
                <li>• Custom level rewards</li>
                <li>• Leaderboards</li>
                <li>• Role rewards</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Coins className="h-8 w-8 text-yellow-500 mb-2" />
              <CardTitle>Economy System</CardTitle>
              <CardDescription>Full-featured economy with currency, shops, and trading</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Virtual currency</li>
                <li>• Daily rewards</li>
                <li>• Shop system</li>
                <li>• User trading</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Gamepad2 className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Mini Games</CardTitle>
              <CardDescription>Fun mini-games to keep your community entertained</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Trivia games</li>
                <li>• Word games</li>
                <li>• Casino games</li>
                <li>• Custom games</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Trophy className="h-8 w-8 text-orange-500 mb-2" />
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Reward active members with achievements and badges</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Custom achievements</li>
                <li>• Progress tracking</li>
                <li>• Badge collection</li>
                <li>• Milestone rewards</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Gift className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle>Giveaways</CardTitle>
              <CardDescription>Host exciting giveaways with advanced entry requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Timed giveaways</li>
                <li>• Entry requirements</li>
                <li>• Multiple winners</li>
                <li>• Automatic selection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-purple-500 mb-2" />
              <CardTitle>Reputation System</CardTitle>
              <CardDescription>Let members rate each other with a karma-based system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Member ratings</li>
                <li>• Reputation points</li>
                <li>• Trust levels</li>
                <li>• Recognition badges</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <BarChart3 className="h-8 w-8 text-indigo-600" />
          <h2 className="text-3xl font-bold">Analytics & Insights</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Activity className="h-8 w-8 text-green-500 mb-2" />
              <CardTitle>Server Analytics</CardTitle>
              <CardDescription>Detailed insights into your server's activity and growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Member activity tracking</li>
                <li>• Message statistics</li>
                <li>• Growth analytics</li>
                <li>• Peak activity times</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <PieChart className="h-8 w-8 text-blue-500 mb-2" />
              <CardTitle>Channel Insights</CardTitle>
              <CardDescription>Understand which channels are most active and engaging</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Channel activity metrics</li>
                <li>• Popular content types</li>
                <li>• Engagement rates</li>
                <li>• Usage patterns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-red-500 mb-2" />
              <CardTitle>Member Insights</CardTitle>
              <CardDescription>Track member engagement and identify your most active users</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Top contributors</li>
                <li>• Member retention</li>
                <li>• Activity heatmaps</li>
                <li>• Engagement scoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Server?</h2>
        <p className="text-xl mb-8 opacity-90">
          Join 1.1K+ servers and 3.8M+ users who trust Astroz for their Discord communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <NextLink href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
              <Bot className="mr-2 h-5 w-5" />
              Invite Astroz Now
            </NextLink>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
            asChild
          >
            <NextLink href="https://discord.gg/your-support-server">Join Support Server</NextLink>
          </Button>
        </div>
      </section>
    </div>
  )
}
