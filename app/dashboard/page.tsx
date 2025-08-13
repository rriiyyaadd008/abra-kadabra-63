"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Navigation from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Server, Users, Shield, Settings, BarChart3, MessageSquare, Crown, ExternalLink, Plus } from "lucide-react"

interface DiscordGuild {
  id: string
  name: string
  icon: string | null
  owner: boolean
  permissions: string
  features: string[]
}

interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string | null
  email?: string
}

interface AntinukeConfig {
  enabled: boolean
  antiChannelCreate: boolean
  antiChannelDelete: boolean
  antiRoleCreate: boolean
  antiRoleDelete: boolean
  antiBan: boolean
  antiKick: boolean
  antiWebhook: boolean
  maxActions: number
  punishment: "ban" | "kick" | "timeout"
}

// Mock functions for demo purposes
function getDiscordAvatarUrl(userId: string, avatar: string | null): string {
  if (!avatar) {
    return `https://cdn.discordapp.com/embed/avatars/${Number.parseInt(userId) % 5}.png`
  }
  return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.png?size=128`
}

function getDiscordGuildIconUrl(guildId: string, icon: string | null): string {
  if (!icon) {
    return "/placeholder.svg?height=64&width=64"
  }
  return `https://cdn.discordapp.com/icons/${guildId}/${icon}.png?size=128`
}

function hasAdminPermissions(permissions: string): boolean {
  const permissionBit = BigInt(permissions)
  const adminPermission = BigInt(0x8) // ADMINISTRATOR permission
  const manageGuildPermission = BigInt(0x20) // MANAGE_GUILD permission

  return (
    (permissionBit & adminPermission) === adminPermission ||
    (permissionBit & manageGuildPermission) === manageGuildPermission
  )
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [mounted, setMounted] = useState(false)
  const [guilds, setGuilds] = useState<DiscordGuild[]>([])
  const [selectedGuild, setSelectedGuild] = useState<DiscordGuild | null>(null)
  const [antinukeConfig, setAntinukeConfig] = useState<AntinukeConfig>({
    enabled: true,
    antiChannelCreate: true,
    antiChannelDelete: true,
    antiRoleCreate: true,
    antiRoleDelete: true,
    antiBan: true,
    antiKick: true,
    antiWebhook: true,
    maxActions: 3,
    punishment: "ban",
  })

  useEffect(() => {
    setMounted(true)

    // Mock guild data
    const mockGuilds: DiscordGuild[] = [
      {
        id: "111111111111111111",
        name: "Gaming Community",
        icon: null,
        owner: true,
        permissions: "8", // Admin
        features: [],
      },
      {
        id: "222222222222222222",
        name: "Astroz Support",
        icon: null,
        owner: false,
        permissions: "8", // Admin
        features: [],
      },
      {
        id: "333333333333333333",
        name: "Development Server",
        icon: null,
        owner: true,
        permissions: "8", // Admin
        features: [],
      },
    ]

    setGuilds(mockGuilds)
  }, [])

  const handleSignOut = () => {
    // In a real app, you would clear tokens/cookies
    window.location.href = "/"
  }

  const handleGuildSelect = (guild: DiscordGuild) => {
    setSelectedGuild(guild)
  }

  const handleBackToGuilds = () => {
    setSelectedGuild(null)
  }

  const updateAntinukeConfig = (key: keyof AntinukeConfig, value: any) => {
    setAntinukeConfig((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-4 py-12 flex items-center justify-center min-h-screen">
          <div className="text-center max-w-md">
            <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Access Required
            </h1>
            <p className="text-xl text-gray-300">
              Please sign in with Discord to access your server dashboard and manage Astroz settings.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
              Sign In with Discord
            </Button>
          </div>
        </div>

        <Navigation />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Dashboard
            </h1>
            <p className="text-xl text-gray-300">
              Welcome back, {session.user?.name}! Manage your servers and configure Astroz.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Server className="w-8 h-8 text-blue-500" />
                  <Badge variant="secondary">Active</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">3</div>
                <p className="text-sm text-gray-400">Servers</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Users className="w-8 h-8 text-green-500" />
                  <Badge variant="secondary">Total</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">1,247</div>
                <p className="text-sm text-gray-400">Members</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <MessageSquare className="w-8 h-8 text-purple-500" />
                  <Badge variant="secondary">24h</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">892</div>
                <p className="text-sm text-gray-400">Messages</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Shield className="w-8 h-8 text-red-500" />
                  <Badge variant="secondary">Today</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">12</div>
                <p className="text-sm text-gray-400">Mod Actions</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Server Management */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Your Servers
            </h2>
            <p className="text-gray-300">Manage Astroz settings for your Discord servers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Example Server Cards */}
            {guilds.map((guild, index) => {
              const canManage = hasAdminPermissions(guild.permissions)

              return (
                <Card
                  key={guild.id}
                  className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Server className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">{guild.name}</CardTitle>
                          <CardDescription>{guild.features.length} members • Active</CardDescription>
                        </div>
                      </div>
                      {guild.owner && <Crown className="w-5 h-5 text-yellow-500" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-4 text-sm">
                        {canManage ? (
                          <span className="text-green-400">✓ Moderation</span>
                        ) : (
                          <span className="text-gray-400">✗ Moderation</span>
                        )}
                        {/* Additional features can be added here */}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1" onClick={() => handleGuildSelect(guild)}>
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button size="sm" variant="outline" className="bg-transparent">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Add Server Card */}
            <Card className="bg-slate-900/80 backdrop-blur-sm border border-dashed border-cyan-500/40 hover:border-cyan-400/60 transition-colors">
              <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                <Plus className="w-12 h-12 text-cyan-400 mb-4" />
                <CardTitle className="text-white mb-2">Add Astroz to Server</CardTitle>
                <CardDescription className="mb-4">Invite Astroz to another Discord server you manage</CardDescription>
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Invite Bot
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
