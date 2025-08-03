"use client"

import { Component, type ReactNode } from "react"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    console.error("Error caught by boundary:", error)
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl blur-sm" />
              <div className="relative bg-slate-900/80 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
                <p className="text-gray-300 mb-6">
                  We encountered an unexpected error. Please try refreshing the page.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform duration-300"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh Page
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
