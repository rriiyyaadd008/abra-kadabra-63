"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3X3, Star, Zap, Info, MessageCircle, Shield, FileText, LayoutDashboard } from "lucide-react"
import { memo } from "react"

interface NavItem {
  href: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/modules", label: "Main Modules", icon: Grid3X3 },
  { href: "/extra-modules", label: "Extra Modules", icon: Star },
  { href: "/features", label: "Features", icon: Zap },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: MessageCircle },
  { href: "/privacy", label: "Privacy", icon: Shield },
  { href: "/terms", label: "Terms", icon: FileText },
  { href: "/auth/signin", label: "Dashboard", icon: LayoutDashboard },
]

function Navigation() {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-cyan-500/20"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex justify-center items-center px-2 py-3">
        <div className="flex gap-1 bg-slate-800/50 rounded-full p-2 border border-cyan-500/30 overflow-x-auto max-w-full">
          {navItems.map((item) => {
            const IconComponent = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-3 py-2 rounded-full transition-all duration-300 flex items-center gap-1 text-xs whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <IconComponent className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium hidden sm:inline">{item.label}</span>

                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default memo(Navigation)
