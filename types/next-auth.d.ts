declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: {
      id: string
      username: string
      discriminator: string
      avatar: string
      email?: string
      name?: string
      image?: string
    }
  }

  interface JWT {
    accessToken?: string
    discordId?: string
    username?: string
    discriminator?: string
    avatar?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    discordId?: string
    username?: string
    discriminator?: string
    avatar?: string
  }
}
