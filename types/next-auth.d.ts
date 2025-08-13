declare module "next-auth" {
  interface Session {
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

  interface Profile {
    id: string
    username: string
    discriminator: string
    avatar: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
    discriminator: string
    avatar: string
  }
}
