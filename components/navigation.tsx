"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

const mainNavItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const dropdownNavItems = [
  { href: "/modules", label: "Modules" },
  { href: "/extra-modules", label: "Extra Modules" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6">
      {mainNavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More pages</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {dropdownNavItems.map((item) => (
            <DropdownMenuItem key={item.href} asChild>
              <Link href={item.href} className={cn("w-full", pathname === item.href && "bg-accent")}>
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
