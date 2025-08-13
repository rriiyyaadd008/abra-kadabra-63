import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Globe, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Astroz
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about the story behind Astroz and the passionate team that makes it all possible.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Astroz was born from a simple idea: Discord servers deserve better tools. What started as a small
                project to help manage a gaming community has evolved into one of the most comprehensive Discord bots
                available today.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                We believe that every community is unique, and that's why Astroz is built with flexibility and
                customization at its core. Whether you're running a small friend group or a massive gaming guild, Astroz
                adapts to your needs.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Astroz serves over 50,000 servers and 2 million users worldwide, and we're just getting started.
                Our mission remains the same: to empower communities with the tools they need to thrive.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Image
                    src="/creator-riyad.webp"
                    alt="Riyad - Creator"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Riyad</CardTitle>
                <CardDescription>Creator & Lead Developer</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  The visionary behind Astroz. Riyad combines technical expertise with a deep understanding of community
                  needs to create features that truly matter.
                </p>
                <div className="flex justify-center space-x-4">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <Globe className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  <Image
                    src="/owner-majestic.png"
                    alt="Majestic - Co-Owner"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <CardTitle>Majestic</CardTitle>
                <CardDescription>Co-Owner & Community Manager</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  Majestic ensures that Astroz stays connected to its community. From gathering feedback to providing
                  support, they keep the user experience at the forefront.
                </p>
                <div className="flex justify-center space-x-4">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                  <Globe className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Every decision we make is guided by what's best for our community. Your feedback shapes our roadmap.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Badge className="mx-auto mb-4 text-lg px-4 py-2">Quality</Badge>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  We're committed to delivering high-quality features that work reliably, every single time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Accessibility</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Astroz should be accessible to everyone, regardless of technical expertise or server size.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-8">Astroz by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-muted-foreground">Active Servers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2M+</div>
              <div className="text-muted-foreground">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-muted-foreground">Years Running</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
