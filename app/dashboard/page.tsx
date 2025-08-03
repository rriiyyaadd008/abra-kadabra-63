"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import { Shield, Settings, Crown, LogOut, Server, ChevronRight, Ban, CheckCircle, XCircle } from "lucide-react"

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
  const router = useRouter()
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)
  const [guilds, setGuilds] = useState<DiscordGuild[]>([])
  const [user, setUser] = useState<DiscordUser | null>(null)
  const [loading, setLoading] = useState(true)
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

    // Check for code parameter from Discord OAuth
    const code = searchParams.get("code")

    // For demo purposes, we'll simulate a successful login if code exists
    // In a real app, you would exchange this code for an access token
    if (code) {
      console.log("Auth code received:", code)

      // Mock user data
      setUser({
        id: "123456789012345678",
        username: "Demo User",
        discriminator: "0000",
        avatar: null,
        email: "user@example.com",
      })

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
      setLoading(false)
    } else {
      // No auth code, redirect to sign in
      router.push("/auth/signin")
    }
  }, [searchParams, router])

  const handleSignOut = () => {
    // In a real app, you would clear tokens/cookies
    router.push("/")
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 border-b border-gray-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <Image src="/astroz-logo.gif" alt="Astroz Logo" fill className="object-contain" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Astroz Dashboard
                </h1>
                {selectedGuild && (
                  <button
                    onClick={handleBackToGuilds}
                    className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 mt-1"
                  >
                    <ChevronRight className="w-3 h-3 rotate-180" />
                    Back to servers
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {user && (
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={getDiscordAvatarUrl(user.id, user.avatar) || "/placeholder.svg"}
                      alt={user.username}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-gray-300 font-medium">{user.username}</span>
                </div>
              )}

              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-400 hover:text-red-300 transition-all duration-300"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {!selectedGuild ? (
          // Server List View
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Your Servers
              </h2>
              <p className="text-gray-300">
                Manage Astroz settings for servers where you have administrative permissions
              </p>
            </div>

            {guilds.length === 0 ? (
              <div className="text-center py-16">
                <Server className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No servers found</h3>
                <p className="text-gray-400 mb-6">
                  Astroz is not present in any of your servers, or you don't have administrative permissions.
                </p>
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1350794455283925085&permissions=2113268958&scope=bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
                >
                  <span>Invite Astroz</span>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guilds.map((guild, index) => {
                  const canManage = hasAdminPermissions(guild.permissions)

                  return (
                    <div
                      key={guild.id}
                      className={`transition-all duration-1000 delay-${index * 100} ${
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

                        <div className="relative bg-slate-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300">
                          <div className="flex items-start gap-4">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                              <Image
                                src={getDiscordGuildIconUrl(guild.id, guild.icon) || "/placeholder.svg"}
                                alt={guild.name}
                                fill
                                className="object-cover"
                              />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-lg font-semibold text-white truncate">{guild.name}</h3>
                                {guild.owner && <Crown className="w-4 h-4 text-yellow-400 flex-shrink-0" />}
                              </div>

                              <div className="flex items-center gap-2 mb-4">
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                                  <span className="text-sm text-gray-300">Astroz Active</span>
                                </div>
                              </div>

                              {canManage ? (
                                <button
                                  onClick={() => handleGuildSelect(guild)}
                                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:scale-105 transition-transform duration-300"
                                >
                                  <Settings className="w-4 h-4" />
                                  <span>Manage</span>
                                </button>
                              ) : (
                                <div className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-700/50 rounded-lg font-medium text-gray-400 cursor-not-allowed">
                                  <Ban className="w-4 h-4" />
                                  <span>No Permission</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : (
          // Server Management View
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Server Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                <Image
                  src={getDiscordGuildIconUrl(selectedGuild.id, selectedGuild.icon) || "/placeholder.svg"}
                  alt={selectedGuild.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {selectedGuild.name}
                </h2>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300">Astroz is active in this server</span>
                </div>
              </div>
            </div>

            {/* Antinuke Configuration */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-600">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                        Antinuke Configuration
                      </h3>
                      <p className="text-gray-300">Protect your server from malicious attacks</p>
                    </div>
                  </div>

                  {/* Master Toggle */}
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${antinukeConfig.enabled ? "bg-green-400" : "bg-red-400"}`}
                      />
                      <div>
                        <h4 className="font-semibold text-white">Antinuke System</h4>
                        <p className="text-sm text-gray-400">Enable or disable the entire antinuke system</p>
                      </div>
                    </div>
                    <button
                      onClick={() => updateAntinukeConfig("enabled", !antinukeConfig.enabled)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                        antinukeConfig.enabled ? "bg-green-500" : "bg-gray-600"
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                          antinukeConfig.enabled ? "translate-x-6" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Protection Settings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        key: "antiChannelCreate",
                        label: "Anti Channel Create",
                        desc: "Prevent unauthorized channel creation",
                      },
                      {
                        key: "antiChannelDelete",
                        label: "Anti Channel Delete",
                        desc: "Prevent unauthorized channel deletion",
                      },
                      { key: "antiRoleCreate", label: "Anti Role Create", desc: "Prevent unauthorized role creation" },
                      { key: "antiRoleDelete", label: "Anti Role Delete", desc: "Prevent unauthorized role deletion" },
                      { key: "antiBan", label: "Anti Ban", desc: "Prevent unauthorized member bans" },
                      { key: "antiKick", label: "Anti Kick", desc: "Prevent unauthorized member kicks" },
                      { key: "antiWebhook", label: "Anti Webhook", desc: "Prevent unauthorized webhook creation" },
                    ].map((setting) => (
                      <div
                        key={setting.key}
                        className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          {antinukeConfig[setting.key as keyof AntinukeConfig] ? (
                            <CheckCircle className="w-5 h-5 text-green-400" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400" />
                          )}
                          <div>
                            <h5 className="font-medium text-white text-sm">{setting.label}</h5>
                            <p className="text-xs text-gray-400">{setting.desc}</p>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            updateAntinukeConfig(
                              setting.key as keyof AntinukeConfig,
                              !antinukeConfig[setting.key as keyof AntinukeConfig],
                            )
                          }
                          disabled={!antinukeConfig.enabled}
                          className={`relative w-10 h-5 rounded-full transition-colors duration-300 disabled:opacity-50 ${
                            antinukeConfig[setting.key as keyof AntinukeConfig] ? "bg-green-500" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                              antinukeConfig[setting.key as keyof AntinukeConfig] ? "translate-x-5" : "translate-x-0.5"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Advanced Settings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Max Actions Before Punishment
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={antinukeConfig.maxActions}
                        onChange={(e) => updateAntinukeConfig("maxActions", Number.parseInt(e.target.value))}
                        disabled={!antinukeConfig.enabled}
                        className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Punishment Type</label>
                      <select
                        value={antinukeConfig.punishment}
                        onChange={(e) => updateAntinukeConfig("punishment", e.target.value)}
                        disabled={!antinukeConfig.enabled}
                        className="w-full px-3 py-2 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none disabled:opacity-50"
                      >
                        <option value="ban">Ban</option>
                        <option value="kick">Kick</option>
                        <option value="timeout">Timeout</option>
                      </select>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="mt-8 flex justify-end">
                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300">
                      Save Configuration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
