import { Loader2 } from "lucide-react"

interface LoadingProps {
  size?: "sm" | "md" | "lg"
  text?: string
  className?: string
}

export function Loading({ size = "md", text, className = "" }: LoadingProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-cyan-400`} />
      {text && <p className={`${textSizeClasses[size]} text-gray-300 animate-pulse`}>{text}</p>}
    </div>
  )
}
