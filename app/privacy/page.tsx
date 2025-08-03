"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import { Shield, Database, Lock, Users, FileText, AlertCircle, Mail, RefreshCw } from "lucide-react"

export default function Privacy() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      icon: Shield,
      title: "Introduction",
      content:
        "Welcome to our Astroz Development! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your data while using our bot's features.",
      color: "from-cyan-400 to-blue-600",
    },
    {
      icon: Database,
      title: "Information Collection",
      content: [
        {
          subtitle: "User Information",
          text: "This includes Discord usernames, user IDs, and server IDs to provide personalized features and manage server-specific settings.",
        },
        {
          subtitle: "Message Content",
          text: "Messages sent to or via the bot may be temporarily stored to provide functionalities such as moderation, automoderation, and autoresponder services.",
        },
        {
          subtitle: "Server Data",
          text: "Information about your server configuration, such as roles, permissions, and channel structures, to enable features like reaction roles, verification, and utility commands.",
        },
      ],
      color: "from-purple-400 to-indigo-600",
    },
    {
      icon: Users,
      title: "Usage of Information",
      content: [
        {
          subtitle: "Feature Provision",
          text: "To deliver and enhance features such as the economy system, games, giveaways, fun activities, and more.",
        },
        {
          subtitle: "Moderation and Security",
          text: "To maintain server security, enforce rules, and prevent unauthorized changes or malicious attacks.",
        },
        {
          subtitle: "User Engagement",
          text: "To personalize user experiences, manage role assignments, and provide automated responses to common queries.",
        },
      ],
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Lock,
      title: "Data Storage and Security",
      content: [
        {
          subtitle: "Data Retention",
          text: "We retain collected data only for as long as necessary to fulfill the purposes outlined in this policy. Temporary data, such as message content, is stored only for the duration needed to provide the relevant feature.",
        },
        {
          subtitle: "Security Measures",
          text: "We employ encryption, access controls, and regular security audits to ensure the safety of your information.",
        },
      ],
      color: "from-red-400 to-pink-600",
    },
    {
      icon: FileText,
      title: "Third-Party Services",
      content:
        "Our bot may integrate with third-party services to enhance its functionality. We ensure that any third-party service providers comply with relevant data protection regulations and handle your data securely.",
      color: "from-orange-400 to-yellow-600",
    },
    {
      icon: AlertCircle,
      title: "User Rights",
      content:
        "You have the right to access, update, or delete your personal information at any time. If you have any concerns about your data or need assistance, please contact us through the support channels provided.",
      color: "from-teal-400 to-cyan-600",
    },
    {
      icon: RefreshCw,
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be communicated through our Discord server or other appropriate channels.",
      color: "from-indigo-400 to-purple-600",
    },
    {
      icon: Mail,
      title: "Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to us via our support system.",
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
              Privacy Policy
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full shadow-lg shadow-cyan-500/50" />
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>

        {/* Privacy Sections */}
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

                        {Array.isArray(section.content) ? (
                          <div className="space-y-4">
                            {section.content.map((item, itemIndex) => (
                              <div key={itemIndex}>
                                <h4 className="text-lg font-semibold text-gray-200 mb-2">{item.subtitle}</h4>
                                <p className="text-gray-300 leading-relaxed">{item.text}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact CTA */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative group max-w-2xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-sm group-hover:blur-md transition-all duration-300" />

            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Questions About Privacy?
              </h3>
              <p className="text-gray-300 mb-6">
                If you have any concerns about your data or need clarification on our privacy practices, we're here to
                help.
              </p>

              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Contact Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  )
}
