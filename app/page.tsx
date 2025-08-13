import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Users, Shield, Music, Gamepad2, Zap, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/astroz-logo.gif"
              alt="Astroz Logo"
              width={120}
              height={120}
              className="mx-auto rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Astroz
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            The most advanced Discord bot with powerful moderation, music, games, and entertainment features. Trusted by
            thousands of servers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
                Add to Server
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">View Features</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">1.1K+</div>
              <div className="text-gray-600 dark:text-gray-300">Active Servers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3.8M+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Astroz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Advanced Moderation</CardTitle>
                <CardDescription>
                  Powerful moderation tools with auto-mod, custom filters, and detailed logging.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Music className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>High-Quality Music</CardTitle>
                <CardDescription>
                  Crystal clear music streaming from YouTube, Spotify, and more platforms.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Gamepad2 className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Fun & Games</CardTitle>
                <CardDescription>
                  Engaging games, trivia, and entertainment commands to keep your server active.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-600 mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>Optimized performance with minimal latency and maximum reliability.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Community Features</CardTitle>
                <CardDescription>Level systems, custom roles, and community engagement tools.</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>Dedicated support team and comprehensive documentation available.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Amazing Bot!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  "Astroz has transformed our server. The moderation features are top-notch and the music quality is
                  incredible!"
                </p>
                <p className="text-sm text-gray-500 mt-2">- Server Owner</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Best Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  "The support team is incredibly helpful and responsive. Setup was a breeze!"
                </p>
                <p className="text-sm text-gray-500 mt-2">- Community Manager</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Feature Rich</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  "So many features packed into one bot. It's like having multiple bots in one!"
                </p>
                <p className="text-sm text-gray-500 mt-2">- Discord Admin</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Enhance Your Discord Server?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of servers already using Astroz to create amazing Discord communities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
              Add Astroz Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
