import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import Navigation from "@/components/navigation"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Astroz Bot - Advanced Discord Bot",
  description:
    "The most advanced Discord bot featuring robust security, moderation, music, economy, and engagement tools.",
  keywords: ["discord bot", "moderation", "music bot", "economy bot", "discord security"],
  authors: [{ name: "RIYAD" }],
  creator: "RIYAD",
  openGraph: {
    title: "Astroz Bot - Advanced Discord Bot",
    description:
      "The most advanced Discord bot featuring robust security, moderation, music, economy, and engagement tools.",
    url: "https://astroz-bot.vercel.app",
    siteName: "Astroz Bot",
    images: [
      {
        url: "/astroz-logo.gif",
        width: 1200,
        height: 630,
        alt: "Astroz Bot Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astroz Bot - Advanced Discord Bot",
    description:
      "The most advanced Discord bot featuring robust security, moderation, music, economy, and engagement tools.",
    images: ["/astroz-logo.gif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <main>{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
