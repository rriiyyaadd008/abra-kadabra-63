"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"

export default function Privacy() {
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
              <Shield className="relative w-16 h-16 text-cyan-400 mx-auto" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Data Collection */}
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Database className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Data Collection
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Astroz collects minimal data necessary to provide our services effectively. We only collect
                    information that is essential for bot functionality and server management.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Discord user IDs and server IDs for command processing
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Message content only when explicitly using moderation features
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Server configuration settings and preferences
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Usage statistics for service improvement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Usage */}
          <div
            className={`transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-purple-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    How We Use Your Data
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Your data is used solely to provide and improve Astroz's services. We never sell, rent, or share
                    your personal information with third parties for marketing purposes.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Processing commands and providing bot functionality
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Maintaining server configurations and user preferences
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Analyzing usage patterns to improve service quality
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Providing customer support and troubleshooting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div
            className={`transition-all duration-1000 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-green-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                    Data Protection
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    We implement industry-standard security measures to protect your data from unauthorized access,
                    alteration, disclosure, or destruction.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Encrypted data transmission using TLS/SSL protocols
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Secure database storage with access controls
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Regular security audits and vulnerability assessments
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Limited access to data on a need-to-know basis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Rights */}
          <div
            className={`transition-all duration-1000 delay-900 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <UserCheck className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Your Rights
                  </h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    You have several rights regarding your personal data. We are committed to helping you exercise these
                    rights in accordance with applicable privacy laws.
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Right to access your personal data
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Right to correct inaccurate information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Right to delete your data (where legally permissible)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      Right to data portability
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
                <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Questions or Concerns?
                </h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy or how we handle your data, please don't hesitate
                  to contact us.
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
