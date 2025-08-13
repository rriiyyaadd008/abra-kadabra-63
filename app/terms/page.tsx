"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { FileText, Scale, AlertCircle, CheckCircle, XCircle, Info } from "lucide-react"

export default function Terms() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
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
      </div>

      <div className="relative z-10 px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <FileText className="relative w-16 h-16 text-cyan-400 mx-auto" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Please read these terms carefully before using Astroz services.
            </p>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Acceptance of Terms */}
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Scale className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Acceptance of Terms
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    By using Astroz, you agree to be bound by these Terms of Service. If you do not agree to these
                    terms, please do not use our services.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 mr-3 flex-shrink-0" />
                      You must be at least 13 years old to use Discord and Astroz
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 mr-3 flex-shrink-0" />
                      You must have permission to manage the Discord server where you add Astroz
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 mr-3 flex-shrink-0" />
                      You agree to use Astroz in compliance with Discord's Terms of Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Permitted Use */}
          <div
            className={`transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    Permitted Use
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Astroz is designed to enhance your Discord server experience. You may use our services for
                    legitimate purposes including:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Server moderation and management
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Community engagement and entertainment
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Music streaming and audio features
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Server analytics and insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Prohibited Activities */}
          <div
            className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <XCircle className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                    Prohibited Activities
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>The following activities are strictly prohibited when using Astroz:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 mr-3 flex-shrink-0" />
                      Using Astroz for spam, harassment, or abusive behavior
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 mr-3 flex-shrink-0" />
                      Attempting to exploit, hack, or reverse engineer our services
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 mr-3 flex-shrink-0" />
                      Violating Discord's Terms of Service or Community Guidelines
                    </li>
                    <li className="flex items-start">
                      <XCircle className="w-4 h-4 text-red-400 mt-1 mr-3 flex-shrink-0" />
                      Using our services for illegal activities or content
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service Availability */}
          <div
            className={`transition-all duration-1000 delay-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Service Availability
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    While we strive to maintain 99.9% uptime, we cannot guarantee uninterrupted service availability.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                      Scheduled maintenance may temporarily interrupt service
                    </li>
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                      We reserve the right to modify or discontinue features
                    </li>
                    <li className="flex items-start">
                      <Info className="w-4 h-4 text-orange-400 mt-1 mr-3 flex-shrink-0" />
                      Emergency maintenance may occur without prior notice
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-1100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center">
                <Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact our support team.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                    <span className="relative z-10">Contact Support</span>
                  </button>

                  <button className="group relative px-6 py-3 border-2 border-cyan-500/50 rounded-lg font-semibold text-cyan-400 overflow-hidden transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:text-white hover:shadow-lg hover:shadow-cyan-500/25">
                    <span className="relative z-10">Join Discord</span>
                  </button>
                </div>

                <p className="text-sm text-gray-400 mt-6">Last updated: January 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
