import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Music,
  Gamepad2,
  Users,
  Zap,
  Settings,
  MessageSquare,
  Calendar,
  Trophy,
  Heart,
  Bot,
  Lock,
  Volume2,
  Dice1,
  UserCheck,
  Bell,
  BarChart3,
  Gift,
  Star,
  Sparkles,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">Powerful Features</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Discover all the amazing features that make Astroz the ultimate Discord bot for your server
        </p>
      </div>

      <Tabs defaultValue="moderation" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="games">Games & Fun</TabsTrigger>
          <TabsTrigger value="utility">Utility</TabsTrigger>
        </TabsList>

        <TabsContent value="moderation" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Auto Moderation</CardTitle>
                </div>
                <CardDescription>
                  Automatically detect and handle spam, inappropriate content, and rule violations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Anti-Spam</Badge>
                  <Badge variant="secondary">Link Filter</Badge>
                  <Badge variant="secondary">Word Filter</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Advanced Punishments</CardTitle>
                </div>
                <CardDescription>Comprehensive punishment system with warnings, mutes, kicks, and bans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Warnings</Badge>
                  <Badge variant="secondary">Temporary Mutes</Badge>
                  <Badge variant="secondary">Auto Punishments</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Moderation Logs</CardTitle>
                </div>
                <CardDescription>Detailed logging of all moderation actions and server events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Action Logs</Badge>
                  <Badge variant="secondary">Message Logs</Badge>
                  <Badge variant="secondary">Member Logs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <UserCheck className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Role Management</CardTitle>
                </div>
                <CardDescription>Advanced role assignment and management with reaction roles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Reaction Roles</Badge>
                  <Badge variant="secondary">Auto Roles</Badge>
                  <Badge variant="secondary">Role Hierarchy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Bell className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Alert System</CardTitle>
                </div>
                <CardDescription>Real-time alerts for suspicious activities and rule violations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Raid Protection</Badge>
                  <Badge variant="secondary">Mass Mention</Badge>
                  <Badge variant="secondary">Suspicious Activity</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg">Custom Commands</CardTitle>
                </div>
                <CardDescription>Create custom moderation commands tailored to your server needs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Responses</Badge>
                  <Badge variant="secondary">Automod Rules</Badge>
                  <Badge variant="secondary">Server Specific</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">High-Quality Audio</CardTitle>
                </div>
                <CardDescription>Crystal clear music streaming with support for multiple platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">YouTube</Badge>
                  <Badge variant="secondary">Spotify</Badge>
                  <Badge variant="secondary">SoundCloud</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Music className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Playlist Management</CardTitle>
                </div>
                <CardDescription>Create, save, and share playlists with advanced queue management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Custom Playlists</Badge>
                  <Badge variant="secondary">Queue Control</Badge>
                  <Badge variant="secondary">Shuffle & Loop</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Audio Controls</CardTitle>
                </div>
                <CardDescription>Advanced audio controls including bass boost, equalizer, and filters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Bass Boost</Badge>
                  <Badge variant="secondary">Equalizer</Badge>
                  <Badge variant="secondary">Audio Filters</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Multi-Server Support</CardTitle>
                </div>
                <CardDescription>Play music in multiple servers simultaneously with independent queues</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Multiple Servers</Badge>
                  <Badge variant="secondary">Independent Queues</Badge>
                  <Badge variant="secondary">24/7 Mode</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <CardTitle className="text-lg">Fast Loading</CardTitle>
                </div>
                <CardDescription>Lightning-fast song loading and seamless playback experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Instant Play</Badge>
                  <Badge variant="secondary">No Buffering</Badge>
                  <Badge variant="secondary">99.9% Uptime</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Premium Features</CardTitle>
                </div>
                <CardDescription>Exclusive premium features for enhanced music experience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Skip Limits</Badge>
                  <Badge variant="secondary">Priority Queue</Badge>
                  <Badge variant="secondary">Custom Filters</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="games" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Dice1 className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Mini Games</CardTitle>
                </div>
                <CardDescription>Engaging mini-games to keep your community entertained</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Trivia</Badge>
                  <Badge variant="secondary">Word Games</Badge>
                  <Badge variant="secondary">Number Games</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-600" />
                  <CardTitle className="text-lg">Leaderboards</CardTitle>
                </div>
                <CardDescription>Competitive leaderboards and achievement systems</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">XP System</Badge>
                  <Badge variant="secondary">Achievements</Badge>
                  <Badge variant="secondary">Rankings</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Interactive Games</CardTitle>
                </div>
                <CardDescription>Multi-player interactive games for community engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Rock Paper Scissors</Badge>
                  <Badge variant="secondary">Tic Tac Toe</Badge>
                  <Badge variant="secondary">Hangman</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Gift className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Economy System</CardTitle>
                </div>
                <CardDescription>Virtual economy with currency, shops, and trading</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Virtual Currency</Badge>
                  <Badge variant="secondary">Daily Rewards</Badge>
                  <Badge variant="secondary">Shop System</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Social Features</CardTitle>
                </div>
                <CardDescription>Social interaction features to build community bonds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Marriage System</Badge>
                  <Badge variant="secondary">Pet System</Badge>
                  <Badge variant="secondary">Profile Cards</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-pink-600" />
                  <CardTitle className="text-lg">Fun Commands</CardTitle>
                </div>
                <CardDescription>Entertaining commands for memes, jokes, and random fun</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Meme Generator</Badge>
                  <Badge variant="secondary">Jokes</Badge>
                  <Badge variant="secondary">Random Facts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="utility" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Event Management</CardTitle>
                </div>
                <CardDescription>Create and manage server events with reminders and RSVP</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Event Creation</Badge>
                  <Badge variant="secondary">Reminders</Badge>
                  <Badge variant="secondary">RSVP System</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Auto Messages</CardTitle>
                </div>
                <CardDescription>Automated welcome messages, announcements, and scheduled posts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Welcome Messages</Badge>
                  <Badge variant="secondary">Auto Announcements</Badge>
                  <Badge variant="secondary">Scheduled Posts</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Server Analytics</CardTitle>
                </div>
                <CardDescription>Detailed server statistics and member activity insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Member Stats</Badge>
                  <Badge variant="secondary">Activity Tracking</Badge>
                  <Badge variant="secondary">Growth Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Custom Responses</CardTitle>
                </div>
                <CardDescription>Create custom auto-responses and chatbot functionality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Auto Responses</Badge>
                  <Badge variant="secondary">Keyword Triggers</Badge>
                  <Badge variant="secondary">Smart Replies</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Settings className="h-5 w-5 text-gray-600" />
                  <CardTitle className="text-lg">Server Management</CardTitle>
                </div>
                <CardDescription>Comprehensive server management tools and utilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Channel Management</Badge>
                  <Badge variant="secondary">Permission Control</Badge>
                  <Badge variant="secondary">Backup System</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-600" />
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </div>
                <CardDescription>Fast and efficient commands for common server tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Quick Polls</Badge>
                  <Badge variant="secondary">Mass Actions</Badge>
                  <Badge variant="secondary">Bulk Operations</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Experience All Features?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Join 1.1K+ servers and 3.8M+ users already enjoying Astroz
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            <Bot className="mr-2 h-5 w-5" />
            Invite Astroz
          </a>
        </div>
      </div>
    </div>
  )
}
