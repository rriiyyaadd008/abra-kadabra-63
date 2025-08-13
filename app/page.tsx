import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Music, Gamepad2, Users, Zap, Star, ArrowRight, Bot, Server, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container relative mx-auto px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/astroz-logo.gif"
                alt="Astroz Logo"
                width={120}
                height={120}
                className="rounded-full shadow-2xl"
              />
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Meet{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Astroz</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
              The most advanced Discord bot with powerful moderation, music, games, and countless features to enhance
              your server experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
                  <Bot className="mr-2 h-5 w-5" />
                  Invite Astroz
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/features">
                  Explore Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900/20">
                  <Server className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1.1K+</div>
              <div className="text-gray-600 dark:text-gray-400">Active Servers</div>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-purple-100 p-4 dark:bg-purple-900/20">
                  <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">3.8M+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/20">
                  <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</div>
              <div className="text-gray-600 dark:text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Powerful Features</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Everything you need to manage and enhance your Discord server
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Advanced Moderation</CardTitle>
                <CardDescription>
                  Comprehensive moderation tools with auto-mod, warnings, and custom punishments
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                  <Music className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>High-Quality Music</CardTitle>
                <CardDescription>
                  Crystal clear music streaming with playlist support and advanced controls
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                  <Gamepad2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Fun & Games</CardTitle>
                <CardDescription>
                  Engaging games, trivia, and entertainment features to keep your community active
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Loved by Communities</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              See what server owners are saying about Astroz
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Astroz has completely transformed our server management. The moderation features are incredible!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Gaming Community</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">15K+ members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "The music quality is outstanding and the bot never goes down. Highly recommended!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center">
                    <Music className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Music Lovers</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">8K+ members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription>
                  "Best Discord bot we've ever used. The features are endless and support is amazing!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Study Group</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">3K+ members</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Server?</h2>
          <p className="mb-8 text-xl text-blue-100">Join thousands of communities already using Astroz</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
                <Bot className="mr-2 h-5 w-5" />
                Add to Server
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/dashboard">
                View Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
