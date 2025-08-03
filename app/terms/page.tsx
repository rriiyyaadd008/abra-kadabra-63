"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { FileText, CheckCircle, XCircle, Copyright, Ban, RefreshCw, Mail } from "lucide-react"

export default function Terms() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content:
        "By using our Discord bot, you agree to be bound by these Terms of Service, including any additional terms and conditions and policies referenced herein.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: FileText,
      title: "Use of Services",
      content:
        "You agree to use the bot's services only for lawful purposes and in a manner consistent with the rights and obligations of other users and third parties.",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: XCircle,
      title: "Prohibited Activities",
      content:
        "You may not engage in any activity that disrupts, interferes with, or harms the functioning of the bot or its users, including but not limited to hacking, spamming, or distributing malware.",
      color: "from-red-400 to-pink-600",
    },
    {
      icon: Copyright,
      title: "Intellectual Property",
      content:
        "All content, features, and functionality provided by the bot are owned by us and are protected by copyright, trademark, and other intellectual property laws.",
      color: "from-purple-400 to-indigo-600",
    },
    {
      icon: Ban,
      title: "Termination",
      content:
        "We reserve the right to suspend or terminate your access to the bot's services at any time and for any reason without prior notice or liability.",
      color: "from-orange-400 to-red-600",
    },
    {
      icon: RefreshCw,
      title: "Changes to Terms",
      content:
        "We may update these Terms of Service from time to time. Your continued use of the bot after any such changes constitutes your acceptance of the new Terms.",
      color: "from-teal-400 to-cyan-600",
    },
    {
      icon: Mail,
      title: "Contact Us",
      content:
        "If you have any questions or concerns about these Terms of Service, please contact us via our support system.",
      color: "from-pink-400 to-rose-600",
    },
  ]

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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Please read these terms carefully before using Astroz
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div
                key={section.title}
                className={`transition-all duration-1000 delay-${(index + 1) * 100} ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="relative group">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${section.color} rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-all duration-300`}
                  />

                  <div className="relative bg-slate-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} mt-1`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-bold bg-gradient-to-r ${section.color} bg-clip-text text-transparent mb-4`}
                        >
                          {section.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Important Notice */}
        <div
          className={`mt-16 transition-all duration-1000 delay-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600">
                  <FileText className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-4">
                    Important Notice
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    By using Astroz, you acknowledge that you have read, understood, and agree to be bound by these
                    Terms of Service. If you do not agree to these terms, please discontinue use of the bot immediately.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                    >
                      <span className="relative z-10">Contact Support</span>
                    </a>

                    <a
                      href="/privacy"
                      className="group relative inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-500/50 rounded-lg font-semibold text-purple-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <span className="relative z-10">Privacy Policy</span>
                    </a>
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
