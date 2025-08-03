import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Astroz - Advanced Discord Bot",
    template: "%s | Astroz",
  },
  description:
    "Elevate your Discord server with Astroz - the most advanced bot featuring robust security, moderation, and engagement tools.",
  keywords: ["discord bot", "server management", "moderation", "antinuke", "discord security", "server bot"],
  authors: [{ name: "RIYAD", url: "https://discord.gg/TCHCDc5bhQ" }],
  creator: "RIYAD",
  publisher: "Astroz Development",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://astroz.dev",
    title: "Astroz - Advanced Discord Bot",
    description: "Elevate your Discord server with cutting-edge features and robust security.",
    siteName: "Astroz",
    images: [
      {
        url: "/astroz-logo.gif",
        width: 1200,
        height: 630,
        alt: "Astroz Dragon Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astroz - Advanced Discord Bot",
    description: "Elevate your Discord server with cutting-edge features and robust security.",
    images: ["/astroz-logo.gif"],
  },
  icons: {
    icon: "/astroz-logo.gif",
    shortcut: "/astroz-logo.gif",
    apple: "/astroz-logo.gif",
  },
  manifest: "/manifest.json",
  generator: "Astroz Development",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0ea5e9" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <meta name="generator" content="Astroz Development" />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}
      >
        <Suspense
          fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />}
        >
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  )
}
