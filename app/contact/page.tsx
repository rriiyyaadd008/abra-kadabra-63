import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Mail, Github, Twitter, HelpCircle, Bug } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or need help? We're here to assist you. Choose the best way to reach out to our
            team.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <MessageSquare className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Discord Support</CardTitle>
              <CardDescription>Join our support server for real-time help from our team and community.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Join Support Server
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Email Support</CardTitle>
              <CardDescription>Send us an email for detailed inquiries or business-related questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                <Mail className="mr-2 h-4 w-4" />
                support@astroz.bot
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Bug className="h-12 w-12 text-red-600 mb-4" />
              <CardTitle>Bug Reports</CardTitle>
              <CardDescription>Found a bug? Report it on our GitHub repository for quick resolution.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                <Github className="mr-2 h-4 w-4" />
                Report on GitHub
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <HelpCircle className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Check our comprehensive documentation for setup guides and tutorials.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                <HelpCircle className="mr-2 h-4 w-4" />
                View Docs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I add Astroz to my server?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simply click the "Invite Astroz" button on our homepage, select your server, and grant the necessary
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
                  Yes! Astroz offers a comprehensive free tier with all essential features. We also offer premium plans
                  with additional features for larger communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I configure Astroz?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You can configure Astroz using slash commands in Discord or through our web dashboard. Check our
                  documentation for detailed setup guides.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What permissions does Astroz need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Astroz requests only the permissions it needs to function. You can customize permissions during setup
                  or modify them later in your server settings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-6">Follow Us</h2>
          <p className="text-muted-foreground mb-8">
            Stay updated with the latest news, features, and community highlights.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg">
              <Twitter className="mr-2 h-5 w-5" />
              Twitter
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <MessageSquare className="mr-2 h-5 w-5" />
              Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
