'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Eye, Bell, Lock, CheckCircle2, MessageSquare, Mail } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6">
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Elite Prospects
            <br />
            <span className="text-blue-600">Safe Messaging Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A secure platform for parents to monitor their children's communications with scouts, 
            coaches, and agents on Elite Prospects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg h-14 px-8"
              onClick={() => router.push('/dashboard')}
            >
              <Shield className="mr-2 h-5 w-5" />
              View Demo Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg h-14 px-8"
              onClick={() => router.push('/verify/123456/a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9')}
            >
              View Verification Page
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Verification</h3>
              <p className="text-muted-foreground">
                Parents receive a secure, unique link from their child's account. 
                No one else can access your child's conversations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Read-Only Access</h3>
              <p className="text-muted-foreground">
                View all conversations between your child and adults on the platform. 
                Your child can message normally.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Notifications</h3>
              <p className="text-muted-foreground">
                Receive daily summaries and instant alerts when new conversations 
                are started with your child.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Compliant with International Standards
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>US SafeSport & MAAPP</strong>
                    <p className="text-muted-foreground">
                      Meets Minor Athlete Abuse Prevention Policies requirements
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Canadian Rule of Two</strong>
                    <p className="text-muted-foreground">
                      Aligned with Canadian Safe Sport Program standards
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>EU DSA & GDPR</strong>
                    <p className="text-muted-foreground">
                      Safety by design for children under EU regulations
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <div className="h-48 w-48 rounded-full bg-blue-100 flex items-center justify-center">
                <Lock className="h-24 w-24 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Routes Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Explore the POC</h2>
            <p className="text-muted-foreground mb-6">
              This is a proof-of-concept demo. Click below to explore different parts of the application:
            </p>
            <div className="grid gap-3">
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto py-4"
                onClick={() => router.push('/verify/123456/a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9')}
              >
                <Shield className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Verification Landing Page</div>
                  <div className="text-sm text-muted-foreground">
                    See how parents verify their identity with a secure token
                  </div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto py-4"
                onClick={() => router.push('/auth/signin')}
              >
                <Lock className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Sign In Page</div>
                  <div className="text-sm text-muted-foreground">
                    Frictionless authentication with Google or magic link
                  </div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto py-4"
                onClick={() => router.push('/dashboard')}
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Parent Dashboard</div>
                  <div className="text-sm text-muted-foreground">
                    Monitor multiple children and view their conversations
                  </div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto py-4"
                onClick={() => router.push('/emails/daily-summary')}
              >
                <Mail className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Daily Summary Email</div>
                  <div className="text-sm text-muted-foreground">
                    Example of daily conversation summary notification
                  </div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto py-4"
                onClick={() => router.push('/emails/new-conversation')}
              >
                <Bell className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">New Conversation Alert Email</div>
                  <div className="text-sm text-muted-foreground">
                    Example of instant notification when conversation starts
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Elite Prospects Safe Messaging Center - POC Demo</p>
          <p className="mt-2">Built with Next.js, TypeScript, Tailwind CSS & shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}
