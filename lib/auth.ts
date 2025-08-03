import type { NextAuthOptions } from "next-auth"
import DiscordProvider from "next-auth/providers/discord"
import CredentialsProvider from "next-auth/providers/credentials"

const discordId = process.env.DISCORD_CLIENT_ID
const discordSecret = process.env.DISCORD_CLIENT_SECRET

export const authOptions: NextAuthOptions = {
  providers: [
    ...(discordId && discordSecret
      ? [
          DiscordProvider({
            clientId: discordId,
            clientSecret: discordSecret,
            authorization: { params: { scope: "identify guilds" } },
          }),
        ]
      : []),
    CredentialsProvider({
      name: "dummy",
      credentials: {},
      authorize() {
        // Dummy provider so NextAuth initializes when Discord vars are absent.
        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "CHANGE_ME_IN_PROD",
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  callbacks: {
    async jwt({ token, account }) {
      if (account?.access_token) token.accessToken = account.access_token
      return token
    },
    async session({ session, token }) {
      if (token.accessToken) session.accessToken = token.accessToken as string
      return session
    },
  },
  pages: { signIn: "/auth/signin", error: "/auth/error" },
  debug: process.env.NODE_ENV === "development",
}
