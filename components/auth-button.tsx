"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogIn, LogOut } from "lucide-react"

export function AuthButton() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <Button variant="ghost" size="sm" disabled>
        Loading...
      </Button>
    )
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={
              session.user.avatar
                ? `https://cdn.discordapp.com/avatars/${session.user.id}/${session.user.avatar}.png`
                : undefined
            }
            alt={session.user.name || "User"}
          />
          <AvatarFallback>{session.user.name?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium hidden sm:inline">{session.user.username || session.user.name}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => signOut()}
          className="text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:ml-2 sm:inline">Sign Out</span>
        </Button>
      </div>
    )
  }

  return (
    <Button
      variant="default"
      size="sm"
      onClick={() => signIn("discord")}
      className="bg-[#5865F2] hover:bg-[#4752C4] text-white"
    >
      <LogIn className="h-4 w-4" />
      <span className="ml-2">Login with Discord</span>
    </Button>
  )
}
