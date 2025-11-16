'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle2, XCircle, Loader2, UserCheck } from 'lucide-react';
import { getChildByPlayerId, validateToken } from '@/lib/mock-data';

export default function VerifyPage() {
  const params = useParams();
  const router = useRouter();
  const playerId = params.playerId as string;
  const token = params.token as string;
  
  const [validationState, setValidationState] = useState<'loading' | 'valid' | 'invalid'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [child, setChild] = useState<any>(null);

  useEffect(() => {
    // Validate the token
    const validation = validateToken(playerId, token);
    const childData = getChildByPlayerId(playerId);
    
    if (!validation.valid || !childData) {
      setValidationState('invalid');
      setErrorMessage(validation.message || 'Invalid verification link');
    } else {
      setValidationState('valid');
      setChild(childData);
    }
  }, [playerId, token]);

  const handleVerify = () => {
    // Redirect to sign in page
    router.push('/auth/signin');
  };

  if (validationState === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
              <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
            </div>
            <CardTitle>Verifying Link</CardTitle>
            <CardDescription>Please wait while we validate your verification link...</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (validationState === 'invalid') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-50 to-white p-4">
        <Card className="w-full max-w-md border-red-200">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-red-900">Invalid Link</CardTitle>
            <CardDescription className="text-red-700 text-base">
              {errorMessage}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              This verification link may have expired or already been used. Please request a new verification link from your child's account.
            </p>
            <Button variant="outline" onClick={() => router.push('/')}>
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center">
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <CardTitle className="text-3xl mb-2">Parent Verification</CardTitle>
          <CardDescription className="text-base">
            Elite Prospects Safe Messaging Center
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Child Information */}
          <div className="bg-blue-50 rounded-lg p-6 space-y-3">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-blue-600" />
              Player Information
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Name:</span>
                <span className="font-medium">{child.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Age:</span>
                <span className="font-medium">{child.age} years old</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Position:</span>
                <Badge variant="secondary">{child.position}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Team:</span>
                <span className="font-medium">{child.team}</span>
              </div>
            </div>
          </div>

          {/* What is Safe Messaging */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">What is Safe Messaging?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elite Prospects Safe Messaging Center allows parents and guardians to monitor 
              conversations between minors and adults on our platform. This is part of our 
              commitment to child safety and compliance with international youth sports standards.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">As a parent, you will:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Receive daily email summaries of your child's conversations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Have read-only access to all messages involving your child</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Get instant notifications when new conversations are started</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Monitor who your child is communicating with (scouts, coaches, etc.)</span>
              </li>
            </ul>
          </div>

          {/* Privacy Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-amber-900">
              <strong>Privacy Notice:</strong> Your verification gives you access only to conversations 
              involving {child.name}. Your access will automatically be removed when {child.name} turns 18.
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="w-full h-14 text-lg"
            onClick={handleVerify}
          >
            <Shield className="mr-2 h-5 w-5" />
            Continue to Verification
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            By continuing, you confirm that you are the parent or legal guardian of {child.name}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

