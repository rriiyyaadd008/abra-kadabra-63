import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Astroz Bot - Advanced Discord Bot",
  description: "Astroz is a powerful Discord bot with moderation, music, and utility features for your server.",
  keywords: ["discord bot", "moderation", "music", "utility", "astroz"],
  authors: [{ name: "Astroz Team" }],
  openGraph: {
    title: "Astroz Bot - Advanced Discord Bot",
    description: "Astroz is a powerful Discord bot with moderation, music, and utility features for your server.",
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
          <div className="min-h-screen bg-background">
            <Navigation />
            <main>{children}</main>
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  )
}
