import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, Code, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About Astroz</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Born from a passion for building better Discord communities, Astroz has grown into the ultimate bot trusted by
          thousands of servers worldwide.
        </p>
      </div>

      {/* Story Section */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Astroz began as a simple moderation bot created by a small team of Discord enthusiasts who were
                frustrated with the limitations of existing solutions. We wanted something more powerful, more
                intuitive, and more reliable.
              </p>
              <p>
                What started as a weekend project quickly grew into something much bigger. As we added features and
                refined the user experience, word spread throughout the Discord community. Server owners loved the
                comprehensive feature set and the attention to detail.
              </p>
              <p>
                Today, Astroz serves over 1,100 servers and 3.8 million users, but we haven't forgotten our roots. We're
                still the same passionate team, committed to making Discord communities better, one server at a time.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/creator-riyad.webp"
              alt="Astroz Creator"
              width={400}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span className="font-semibold">Made with love</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Community First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every feature we build is designed with community needs in mind. Your feedback drives our development.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle>Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We obsess over speed and reliability. Your bot should work flawlessly, every single time.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We're constantly pushing boundaries, exploring new features and technologies to stay ahead.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Passion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We genuinely love what we do. This isn't just a project - it's our mission to improve Discord.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="text-center">
              <Image
                src="/creator-riyad.webp"
                alt="Riyad - Founder & Lead Developer"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-4"
              />
              <CardTitle>Riyad</CardTitle>
              <CardDescription>Founder & Lead Developer</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                The visionary behind Astroz, passionate about creating tools that bring communities together.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Discord.js</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <div className="w-[120px] h-[120px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MJ</span>
              </div>
              <CardTitle>MajesticOwner</CardTitle>
              <CardDescription>Co-Developer & Community Manager</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Ensures Astroz runs smoothly and helps build our amazing community of users.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Community</Badge>
                <Badge variant="secondary">Support</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <div className="w-[120px] h-[120px] bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AT</span>
              </div>
              <CardTitle>Astroz Team</CardTitle>
              <CardDescription>Contributors & Beta Testers</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Our dedicated community of contributors who help test features and provide feedback.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="secondary">Testing</Badge>
                <Badge variant="secondary">Feedback</Badge>
                <Badge variant="secondary">Ideas</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-12">Astroz by the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">1.1K+</div>
            <div className="text-muted-foreground">Active Servers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">3.8M+</div>
            <div className="text-muted-foreground">Users Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-muted-foreground">Commands</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Astroz Family</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Become part of our growing community and experience what makes Astroz special.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
            <Link href="/dashboard">
              Add to Server <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            asChild
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
