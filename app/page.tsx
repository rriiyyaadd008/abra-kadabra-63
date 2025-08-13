import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Music, Zap, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/astroz-logo.gif"
              alt="Astroz Logo"
              width={120}
              height={120}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Astroz
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The most advanced Discord bot with powerful moderation, music, and utility features. Trusted by thousands of
            servers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
                Invite Astroz
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/features">View Features</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1.1K+</div>
              <div className="text-sm text-muted-foreground">Active Servers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">3.8M+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Astroz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle>Advanced Moderation</CardTitle>
                <CardDescription>
                  Powerful moderation tools with auto-mod, custom filters, and detailed logging
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Music className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle>High-Quality Music</CardTitle>
                <CardDescription>
                  Crystal clear music streaming with playlist support and advanced controls
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 mx-auto text-yellow-600 mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>Optimized performance with minimal latency and maximum reliability</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Astroz has completely transformed our server management. The moderation features are incredible!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Alex Johnson</p>
                    <p className="text-sm text-muted-foreground">Server Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "The music quality is amazing and the bot never goes down. Highly recommended!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    S
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Chen</p>
                    <p className="text-sm text-muted-foreground">Community Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  "Easy to set up and use. The support team is fantastic and always helpful!"
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Mike Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Gaming Community</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of servers already using Astroz to enhance their Discord experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
                Add to Server
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/astroz-logo.gif" alt="Astroz Logo" width={32} height={32} className="rounded-full" />
                <span className="font-bold text-lg">Astroz</span>
              </div>
              <p className="text-muted-foreground">The most advanced Discord bot for your server needs.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/features" className="hover:text-foreground">
                    Moderation
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-foreground">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-foreground">
                    Utilities
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-foreground">
                    Fun Commands
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/astroz" className="hover:text-foreground">
                    Discord Server
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Astroz. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
