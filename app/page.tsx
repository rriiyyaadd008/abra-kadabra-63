import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Music, Gamepad2, Users, Zap, Star, ArrowRight, Bot, Server, Heart } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Advanced Moderation",
    description: "Keep your server safe with auto-moderation, custom filters, and detailed logging.",
  },
  {
    icon: Music,
    title: "High-Quality Music",
    description: "Play music from YouTube, Spotify, and more with crystal clear audio quality.",
  },
  {
    icon: Gamepad2,
    title: "Fun Games",
    description: "Engage your community with mini-games, trivia, and interactive activities.",
  },
  {
    icon: Users,
    title: "Community Tools",
    description: "Level systems, custom roles, and member management tools.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed and reliability with 99.9% uptime guarantee.",
  },
  {
    icon: Bot,
    title: "Easy Setup",
    description: "Get started in minutes with our intuitive dashboard and setup wizard.",
  },
]

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Server Owner",
    content: "Astroz has transformed our Discord server. The moderation features are incredible!",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Community Manager",
    content: "Best Discord bot I've ever used. The music quality is amazing and setup was so easy.",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Mike Rodriguez",
    role: "Gaming Community",
    content: "Our members love the games and activities. Engagement has increased by 300%!",
    avatar: "/placeholder-user.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <Image
                src="/astroz-logo.gif"
                alt="Astroz Logo"
                width={120}
                height={120}
                className="rounded-full shadow-lg"
              />
            </div>
            <Badge variant="secondary" className="mb-4">
              🚀 Now serving 1.1K+ servers
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Meet Astroz
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              The most advanced Discord bot with powerful moderation, high-quality music, fun games, and community
              tools. Trusted by 3.8M+ users worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
                  <Bot className="mr-2 h-5 w-5" />
                  Invite Astroz
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/features">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Server className="h-8 w-8 text-blue-600 mr-2" />
                <span className="text-3xl font-bold">1.1K+</span>
              </div>
              <p className="text-muted-foreground">Active Servers</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600 mr-2" />
                <span className="text-3xl font-bold">3.8M+</span>
              </div>
              <p className="text-muted-foreground">Happy Users</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Heart className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-3xl font-bold">99.9%</span>
              </div>
              <p className="text-muted-foreground">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Powerful Features for Every Server</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create an amazing Discord community experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Loved by Communities Worldwide</h2>
            <p className="text-xl text-muted-foreground">See what server owners are saying about Astroz</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Discord Server?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of communities already using Astroz to create amazing Discord experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot%20applications.commands">
                  <Bot className="mr-2 h-5 w-5" />
                  Add to Discord
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/dashboard">
                  <Zap className="mr-2 h-5 w-5" />
                  View Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
