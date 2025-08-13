import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "./providers"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Astroz - Advanced Discord Bot",
  description: "The ultimate Discord bot with moderation, music, economy, and more features",
  keywords: ["discord bot", "moderation", "music bot", "discord", "astroz"],
  authors: [{ name: "RIYAD" }],
  openGraph: {
    title: "Astroz - Advanced Discord Bot",
    description: "The ultimate Discord bot with moderation, music, economy, and more features",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <main className="pt-14 pb-20">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
