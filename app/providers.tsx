"use client"

import type { ReactNode } from "react"
import { Suspense } from "react"
import { SessionProvider } from "next-auth/react"

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <Suspense fallback={null}>{children}</Suspense>
    </SessionProvider>
  )
}
