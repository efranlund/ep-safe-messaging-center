'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Shield, MessageSquare, LogOut, Bell, Settings } from 'lucide-react';
import { mockChildren, mockParents, getConversationsByChildId, getUnreadCountForChild, getNotificationSettings } from '@/lib/mock-data';

export default function DashboardPage() {
  const router = useRouter();
  const [parentName, setParentName] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  
  const parent = mockParents[0]; // Mock parent data
  const children = mockChildren.filter(child => parent.children.includes(child.id));

  useEffect(() => {
    // Check if parent name exists in localStorage
    const storedName = localStorage.getItem('parentName');
    
    if (!storedName) {
      // Redirect to onboarding if name is not set
      router.push('/auth/onboarding');
      return;
    }
    
    setParentName(storedName);
    setIsLoading(false);
  }, [router]);

  // Show loading state while checking for parent name
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  const handleViewChild = (childId: string) => {
    router.push(`/dashboard/child/${childId}`);
  };

  const handleSignOut = () => {
    // Clear parent name from localStorage on sign out
    localStorage.removeItem('parentName');
    router.push('/auth/signin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">Safe Messaging Center</h1>
                <p className="text-sm text-muted-foreground">{parentName || parent.name}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Welcome Section */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Your Children</h2>
            <p className="text-muted-foreground">
              Monitor and view conversations for each of your children on Elite Prospects
            </p>
          </div>

          {/* Children Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {children.map((child) => {
              const conversations = getConversationsByChildId(child.id);
              const unreadCount = getUnreadCountForChild(child.id);
              const notificationSettings = getNotificationSettings(child.id);

              return (
                <Card key={child.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleViewChild(child.id)}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-xl bg-blue-100 text-blue-700">
                          {child.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      {child.verified ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-700">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                          Pending
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{child.name}</CardTitle>
                    <CardDescription>
                      {child.age} years old • {child.position}
                    </CardDescription>
                    <CardDescription className="text-xs">
                      {child.team}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {conversations.length} conversation{conversations.length !== 1 ? 's' : ''}
                          </span>
                        </div>
                        {unreadCount > 0 && (
                          <Badge variant="destructive" className="rounded-full">
                            {unreadCount} new
                          </Badge>
                        )}
                      </div>

                      {/* Notification Settings Preview */}
                      {notificationSettings && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground border-t pt-3">
                          <Settings className="h-3 w-3" />
                          <span>
                            {notificationSettings.dailySummary && 'Daily summaries'}
                            {notificationSettings.dailySummary && notificationSettings.newConversations && ' • '}
                            {notificationSettings.newConversations && 'New conv.'}
                          </span>
                        </div>
                      )}

                      {/* View Button */}
                      <Button className="w-full" variant="outline">
                        View Conversations
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Info Banner */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Bell className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Notification Settings</h3>
                  <p className="text-sm text-muted-foreground">
                    Each child has unique notification settings. Click on a child card to view their conversations 
                    and customize notification preferences for that specific child.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

