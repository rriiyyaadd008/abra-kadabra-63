"use client"

import type React from "react"
import { SessionProvider } from "next-auth/react"
import { ErrorBoundary } from "@/components/error-boundary"
import Navigation from "@/components/navigation"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ErrorBoundary>
        <Navigation />
        {children}
      </ErrorBoundary>
    </SessionProvider>
  )
}
