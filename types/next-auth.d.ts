declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      username?: string
      discriminator?: string
      avatar?: string
    }
  }

  interface User {
    id: string
    username?: string
    discriminator?: string
    avatar?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string
    username?: string
    discriminator?: string
    avatar?: string
  }
}
