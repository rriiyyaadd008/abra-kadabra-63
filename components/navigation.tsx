"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AuthButton } from "@/components/auth-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Modules", href: "/modules" },
  { name: "Extra Modules", href: "/extra-modules" },
  { name: "Features", href: "/features" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Dashboard", href: "/dashboard" },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <>
      {/* Top Auth Bar */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <img src="/astroz-logo.gif" alt="Astroz Bot" className="h-8 w-8" />
                <span className="font-bold text-lg">Astroz</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <AuthButton />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-8 overflow-x-auto py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "whitespace-nowrap text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary border-b-2 border-primary pb-2" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
