"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Package, Zap, Info, Mail, Shield, FileText, BarChart3 } from "lucide-react"
import { cn } from "@/lib/utils"
import AuthButton from "./auth-button"
import ThemeToggle from "./theme-toggle"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Modules", href: "/modules", icon: Package },
  { name: "Extra Modules", href: "/extra-modules", icon: Zap },
  { name: "Features", href: "/features", icon: Info },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Privacy", href: "/privacy", icon: Shield },
  { name: "Terms", href: "/terms", icon: FileText },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Top Auth Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <nav className="flex flex-col space-y-2 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link
              href="/"
              className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Astroz
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <AuthButton />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center space-x-1 py-2 overflow-x-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs font-medium transition-colors min-w-0 flex-shrink-0",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
