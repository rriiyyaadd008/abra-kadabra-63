"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import AuthButton from "./auth-button"
import ThemeToggle from "./theme-toggle"
import Image from "next/image"

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
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/astroz-logo.gif" alt="Astroz Logo" width={32} height={32} className="rounded-full" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Astroz
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <AuthButton />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="flex flex-col space-y-4 mt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      pathname === item.href ? "text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}
