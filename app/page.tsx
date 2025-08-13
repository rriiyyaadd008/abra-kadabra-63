import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Music, Gamepad2, Users, Zap, Star, ArrowRight, Bot, Server, UserCheck } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Advanced Moderation",
    description: "Keep your server safe with powerful moderation tools and auto-moderation features.",
  },
  {
    icon: Music,
    title: "High-Quality Music",
    description: "Play music from YouTube, Spotify, and more with crystal clear audio quality.",
  },
  {
    icon: Gamepad2,
    title: "Fun Games",
    description: "Engage your community with built-in games and entertainment features.",
  },
  {
    icon: Users,
    title: "Server Management",
    description: "Comprehensive tools to manage your server members and settings efficiently.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed and reliability with 99.9% uptime guarantee.",
  },
  {
    icon: Bot,
    title: "Easy Setup",
    description: "Get started in minutes with our simple setup process and intuitive commands.",
  },
]

const stats = [
  { icon: Server, label: "Active Servers", value: "1.1K+" },
  { icon: UserCheck, label: "Happy Users", value: "3.8M+" },
  { icon: Star, label: "Commands", value: "200+" },
]

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Server Owner",
    content: "Astroz has transformed our Discord server. The moderation features are top-notch!",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Sarah Chen",
    role: "Community Manager",
    content: "The music quality is incredible and the bot is so easy to use. Highly recommended!",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Mike Rodriguez",
    role: "Gaming Community",
    content: "Our members love the games and entertainment features. Great bot overall!",
    avatar: "/placeholder-user.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <img
              src="/astroz-logo.gif"
              alt="Astroz Bot"
              className="h-24 w-24 mx-auto mb-6 rounded-full border-4 border-primary/20"
            />
            <Badge variant="secondary" className="mb-4">
              🚀 Now with Advanced AI Features
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Meet Astroz Bot
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The most advanced Discord bot with powerful moderation, high-quality music, fun games, and comprehensive
            server management tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
                Add to Discord
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
              <Link href="/features">View Features</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Every Server</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create an amazing Discord community experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
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
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Server Owners</h2>
            <p className="text-xl text-muted-foreground">See what our community has to say about Astroz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Server?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of servers already using Astroz to create amazing Discord communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">
                Add Astroz Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
