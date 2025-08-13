import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Astroz - Advanced Discord Bot",
  description:
    "The ultimate Discord bot for moderation, music, economy, and more. Join thousands of servers using Astroz!",
  keywords: ["discord bot", "moderation", "music bot", "economy bot", "astroz"],
  authors: [{ name: "RIYAD" }],
  creator: "RIYAD",
  publisher: "Astroz Development",
  robots: "index, follow",
  openGraph: {
    title: "Astroz - Advanced Discord Bot",
    description: "The ultimate Discord bot for moderation, music, economy, and more.",
    url: "https://astroz-bot.vercel.app",
    siteName: "Astroz Bot",
    images: [
      {
        url: "/dragon-logo.png",
        width: 1200,
        height: 630,
        alt: "Astroz Discord Bot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astroz - Advanced Discord Bot",
    description: "The ultimate Discord bot for moderation, music, economy, and more.",
    images: ["/dragon-logo.png"],
  },
  icons: {
    icon: "/dragon-logo.png",
    shortcut: "/dragon-logo.png",
    apple: "/dragon-logo.png",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="generator" content="Astroz Development" />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            /* Hide v0 attribution elements */
            [class*="v0"], [id*="v0"], [data-v0], 
            [class*="attribution"], [id*="attribution"],
            [href*="v0.dev"], [href*="chat"], 
            iframe[src*="v0"], div[class*="modal"][class*="v0"] {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              position: absolute !important;
              left: -9999px !important;
              width: 0 !important;
              height: 0 !important;
            }
          `,
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
