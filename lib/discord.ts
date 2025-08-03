export interface DiscordGuild {
  id: string
  name: string
  icon: string | null
  owner: boolean
  permissions: string
  features: string[]
  permissions_new?: string
}

export interface DiscordUser {
  id: string
  username: string
  discriminator: string
  global_name?: string
  avatar: string | null
  email?: string
  verified?: boolean
  locale?: string
  mfa_enabled?: boolean
}

export class DiscordAPIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
  ) {
    super(message)
    this.name = "DiscordAPIError"
  }
}

export async function getDiscordGuilds(accessToken: string): Promise<DiscordGuild[]> {
  try {
    const response = await fetch("https://discord.com/api/v10/users/@me/guilds", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "Astroz-Dashboard/1.0",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new DiscordAPIError(`Failed to fetch Discord guilds: ${response.statusText}`, response.status)
    }

    const guilds = await response.json()
    return guilds.filter((guild: DiscordGuild) => hasAdminPermissions(guild.permissions))
  } catch (error) {
    if (error instanceof DiscordAPIError) {
      throw error
    }
    throw new DiscordAPIError("Network error while fetching guilds", 500)
  }
}

export async function getDiscordUser(accessToken: string): Promise<DiscordUser> {
  try {
    const response = await fetch("https://discord.com/api/v10/users/@me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "User-Agent": "Astroz-Dashboard/1.0",
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new DiscordAPIError(`Failed to fetch Discord user: ${response.statusText}`, response.status)
    }

    return await response.json()
  } catch (error) {
    if (error instanceof DiscordAPIError) {
      throw error
    }
    throw new DiscordAPIError("Network error while fetching user", 500)
  }
}

export function getDiscordAvatarUrl(userId: string, avatar: string | null, size = 128): string {
  if (!avatar) {
    const defaultAvatarNumber = (BigInt(userId) >> 22n) % 6n
    return `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png?size=${size}`
  }

  const extension = avatar.startsWith("a_") ? "gif" : "png"
  return `https://cdn.discordapp.com/avatars/${userId}/${avatar}.${extension}?size=${size}`
}

export function getDiscordGuildIconUrl(guildId: string, icon: string | null, size = 128): string {
  if (!icon) {
    return `/placeholder.svg?height=${size}&width=${size}&text=Server`
  }

  const extension = icon.startsWith("a_") ? "gif" : "png"
  return `https://cdn.discordapp.com/icons/${guildId}/${icon}.${extension}?size=${size}`
}

export function hasAdminPermissions(permissions: string): boolean {
  try {
    const permissionBit = BigInt(permissions)
    const adminPermission = BigInt(0x8) // ADMINISTRATOR
    const manageGuildPermission = BigInt(0x20) // MANAGE_GUILD

    return (
      (permissionBit & adminPermission) === adminPermission ||
      (permissionBit & manageGuildPermission) === manageGuildPermission
    )
  } catch {
    return false
  }
}

export function formatDiscordUsername(user: DiscordUser): string {
  if (user.global_name) {
    return user.global_name
  }

  if (user.discriminator === "0") {
    return user.username
  }

  return `${user.username}#${user.discriminator}`
}
