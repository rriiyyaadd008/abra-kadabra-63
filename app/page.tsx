"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import { ErrorBoundary } from "@/components/error-boundary"
import { Loading } from "@/components/loading"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Simple title override without complex DOM manipulation
    if (typeof window !== "undefined") {
      document.title = "Astroz - Advanced Discord Bot"
    }
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <Loading size="lg" text="Loading Astroz..." />
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Astroz",
              description: "Advanced Discord Bot for server management and security",
              applicationCategory: "CommunicationApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Person",
                name: "RIYAD",
              },
            }),
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0" aria-hidden="true">
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Main Content */}
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          {/* Logo */}
          <div
            className={`mb-8 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Image
                  src="/astroz-logo.gif"
                  alt="Astroz Dragon Logo - Advanced Discord Bot"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-2xl max-w-32 max-h-32 md:max-w-40 md:max-h-40"
                  priority
                  onLoad={() => setImageLoaded(true)}
                  style={{
                    objectFit: "contain",
                    background: "transparent",
                  }}
                />
                {!imageLoaded && <div className="absolute inset-0 bg-transparent animate-pulse rounded-lg" />}
              </div>
            </div>
          </div>

          {/* Title */}
          <header
            className={`mb-6 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              ASTROZ
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
          </header>

          {/* Tagline */}
          <div
            className={`mb-8 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl leading-relaxed">
              Advanced Discord Bot for the Future
            </p>
            <p className="text-sm md:text-base text-gray-400 mt-2 max-w-lg">
              Elevate your server experience with cutting-edge features
            </p>
          </div>

          {/* About Section */}
          <div
            className={`mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-10">
                <div className="text-center">
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                    About Astroz
                  </h2>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p className="text-base md:text-lg">
                      Meet <span className="text-cyan-400 font-semibold">Astroz</span>, an advanced and versatile
                      Discord bot designed to elevate your server experience. Packed with cutting-edge features and
                      robust security enhancements, Astroz ensures a seamless and protected environment for all users.
                    </p>

                    <p className="text-base md:text-lg">
                      Whether you're managing a community, hosting events, or simply chatting with friends, Astroz
                      provides the tools you need for efficient and enjoyable interactions.
                    </p>

                    <div className="pt-4">
                      <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Discover the next level of Discord engagement with Astroz today!
                      </p>
                    </div>
                  </div>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="flex items-center justify-center gap-2 text-cyan-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">Robust Security</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-purple-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372-.836 2.942.734 2.106 2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium">Advanced Features</span>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-blue-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      <span className="text-sm font-medium">Community Management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <a
              href="https://discord.gg/TCHCDc5bhQ"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative z-10 flex items-center gap-2">
                Support Server
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>

            <a
              href="https://discord.com/oauth2/authorize?client_id=1350794455283925085&permissions=2113268958&scope=bot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Invite Bot
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
            <a
              href="/auth/signin"
              className="group relative px-8 py-4 border-2 border-green-500/50 rounded-lg font-semibold text-green-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-green-400 hover:text-white hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Dashboard
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Creator Section */}
          <div
            className={`mt-20 transition-all duration-1000 delay-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
                  Our Team
                </h3>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                  {/* RIYAD's Card */}
                  <div className="flex flex-col items-center">
                    <div className="relative group mb-4">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/50">
                        <Image
                          src="/creator-riyad.webp"
                          alt="RIYAD - Creator of Astroz"
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      RIYAD
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Bot Owner & Head Developer</p>
                  </div>

                  {/* !! Majestic's Card */}
                  <div className="flex flex-col items-center">
                    <div className="relative group mb-4">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                      <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/50">
                        <Image
                          src="/owner-majestic.png"
                          alt="!! Majestic - Bot Owner"
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      !! Majestic
                    </div>
                    <p className="text-gray-400 text-sm mt-1">Bot Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Navigation />
      </div>
    </ErrorBoundary>
  )
}
