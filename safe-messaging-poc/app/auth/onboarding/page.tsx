'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, User } from 'lucide-react';

export default function OnboardingPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    setIsLoading(true);

    // Store parent name in localStorage (in production, this would be saved to a database)
    try {
      localStorage.setItem('parentName', name.trim());
      
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Redirect to dashboard
      router.push('/dashboard');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Welcome to Safe Messaging Center</CardTitle>
          <CardDescription className="text-base">
            Let's get started by telling us your name
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12"
                autoFocus
                disabled={isLoading}
              />
              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full h-12 text-base"
              disabled={isLoading || !name.trim()}
            >
              {isLoading ? 'Setting up...' : 'Continue'}
            </Button>
          </form>

          <div className="pt-4 border-t mt-6">
            <div className="flex items-start space-x-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <p>
                Your name will be used to personalize your experience and identify you as the parent or guardian.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

