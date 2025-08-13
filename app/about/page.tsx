"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Navigation from "@/components/navigation"

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Image
                  src="/astroz-logo.gif"
                  alt="Astroz Dragon Logo"
                  width={96}
                  height={96}
                  className="object-contain drop-shadow-2xl max-w-24 max-h-24"
                  priority
                  style={{
                    objectFit: "contain",
                    background: "transparent",
                  }}
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              About Astroz
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 md:p-12">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg md:text-xl">
                    <span className="text-cyan-400 font-semibold">Astroz</span> represents the pinnacle of Discord bot
                    technology, crafted with precision and passion to deliver an unparalleled server management
                    experience.
                  </p>

                  <p className="text-base md:text-lg">
                    Born from the vision of creating a comprehensive solution for Discord communities, Astroz combines
                    cutting-edge security features with intuitive user experience. Our bot is designed to grow with your
                    community, adapting to your needs while maintaining the highest standards of performance and
                    reliability.
                  </p>

                  <p className="text-base md:text-lg">
                    What sets Astroz apart is our commitment to innovation and community feedback. Every feature is
                    meticulously designed and tested to ensure it not only meets but exceeds the expectations of modern
                    Discord server administrators and their communities.
                  </p>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      Our Mission
                    </h3>
                    <p className="text-base md:text-lg">
                      To empower Discord communities with the most advanced, secure, and user-friendly bot experience
                      possible, fostering growth, engagement, and safety in every server we serve.
                    </p>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                      Meet the Creator
                    </h3>
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                        <Image
                          src="/creator-riyad.webp"
                          alt="RIYAD - Creator of Astroz"
                          width={120}
                          height={120}
                          className="relative rounded-full border-2 border-cyan-500/30"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-bold text-cyan-400 mb-2">RIYAD</h4>
                        <p className="text-purple-400 font-semibold mb-2">Creator & Lead Developer</p>
                        <p className="text-sm md:text-base">
                          The visionary behind Astroz, RIYAD brings years of experience in Discord bot development and
                          community management to create the ultimate server enhancement tool.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
