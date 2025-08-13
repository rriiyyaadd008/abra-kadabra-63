import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, ExternalLink, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Have questions, need support, or want to share feedback? We're here to help! Choose the best way to reach our
          team.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
            <CardTitle>Discord Support</CardTitle>
            <CardDescription>
              Join our official Discord server for real-time support and community discussions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Response Time</span>
                <Badge variant="secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  ~5 minutes
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Availability</span>
                <Badge variant="outline">24/7</Badge>
              </div>
              <Button className="w-full" asChild>
                <Link href="https://discord.gg/astroz" target="_blank" rel="noopener noreferrer">
                  Join Discord <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Mail className="h-12 w-12 text-green-600 mb-4" />
            <CardTitle>Email Support</CardTitle>
            <CardDescription>
              Send us an email for detailed inquiries, bug reports, or business matters.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Response Time</span>
                <Badge variant="secondary">
                  <Clock className="h-3 w-3 mr-1" />
                  ~24 hours
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Best For</span>
                <Badge variant="outline">Detailed Issues</Badge>
              </div>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="mailto:support@astroz.bot">
                  Send Email <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <CardTitle>Community Forum</CardTitle>
            <CardDescription>
              Browse our community forum for guides, tips, and discussions with other users.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Type</span>
                <Badge variant="secondary">Self-Help</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Best For</span>
                <Badge variant="outline">Learning</Badge>
              </div>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <Link href="/forum">
                  Visit Forum <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I add Astroz to my server?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Simply click the "Add to Server" button on our homepage, select your server, and grant the necessary
                permissions. Astroz will be ready to use immediately!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is Astroz free to use?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes! Astroz offers a comprehensive free tier with most features included. We also offer premium plans
                with additional features for larger communities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What permissions does Astroz need?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Astroz requires standard bot permissions like reading messages, sending messages, and managing roles. We
                only request permissions necessary for the features you want to use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do I report a bug or issue?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You can report bugs through our Discord server, email us directly, or use the feedback command in your
                server. We take all reports seriously and respond quickly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can I suggest new features?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We love hearing from our community. Join our Discord server and share your ideas in the suggestions
                channel. Many current features came from user suggestions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Is my server data safe with Astroz?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes, we take data privacy seriously. We only store necessary data for bot functionality and never share
                your information with third parties. Check our privacy policy for details.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Hours */}
      <section className="mb-16">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle className="text-2xl">24/7 Support Available</CardTitle>
            <CardDescription className="text-lg">
              Our community moderators and automated systems provide round-the-clock assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="font-semibold mb-2">Instant Help</h3>
                <p className="text-sm text-muted-foreground">
                  Use our help command in Discord for immediate assistance with common questions
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Community Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our active community members are always ready to help fellow users
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Developer Response</h3>
                <p className="text-sm text-muted-foreground">
                  Direct access to our development team for complex issues and feedback
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Don't hesitate to reach out! Our friendly team is always happy to help.
        </p>
        <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
          <Link href="https://discord.gg/astroz" target="_blank" rel="noopener noreferrer">
            Join Our Discord <MessageSquare className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
