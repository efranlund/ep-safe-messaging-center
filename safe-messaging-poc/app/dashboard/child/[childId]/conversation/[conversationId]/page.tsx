'use client';

import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Shield, Eye, UserCircle2, Briefcase, MessageSquare, ExternalLink } from 'lucide-react';
import { getChildById, getConversationById } from '@/lib/mock-data';
import { format } from 'date-fns';

export default function ConversationPage() {
  const params = useParams();
  const router = useRouter();
  const childId = params.childId as string;
  const conversationId = params.conversationId as string;

  const child = getChildById(childId);
  const conversation = getConversationById(conversationId);

  if (!child || !conversation) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-center text-muted-foreground">Conversation not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'scout':
        return <Eye className="h-4 w-4" />;
      case 'coach':
        return <UserCircle2 className="h-4 w-4" />;
      case 'agent':
        return <Briefcase className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'scout':
        return 'bg-blue-100 text-blue-700';
      case 'coach':
        return 'bg-green-100 text-green-700';
      case 'agent':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => router.push(`/dashboard/child/${childId}`)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="h-[calc(100vh-73px)] flex flex-col">
        <Card className="flex-1 flex flex-col m-4 md:m-6">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>
                    {conversation.otherPersonName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">
                    {conversation.otherPersonName}
                  </CardTitle>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${getRoleBadgeColor(conversation.otherPersonRole)}`}
                  >
                    {getRoleIcon(conversation.otherPersonRole)}
                    <span className="ml-1 capitalize">{conversation.otherPersonRole}</span>
                  </Badge>
                </div>
              </div>
              {conversation.eliteProspectsUrl && (
                <a
                  href={conversation.eliteProspectsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span className="hidden sm:inline">View Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </CardHeader>
          
          {/* Read-Only Banner */}
          <div className="bg-blue-50 border-b border-blue-200 px-4 md:px-6 py-3 flex items-center gap-2">
            <Shield className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <p className="text-sm text-blue-900">
              <strong>Read-Only Mode:</strong> You are viewing this conversation as a parent/guardian
            </p>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4 md:p-6">
            <div className="space-y-4">
              {conversation.messages.map((message) => {
                const isChild = message.senderId === conversation.childId;
                
                return (
                  <div
                    key={message.id}
                    className={`flex ${isChild ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] md:max-w-[70%] ${isChild ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`rounded-lg p-3 ${
                          isChild
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm font-medium mb-1">
                          {message.senderName}
                        </p>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 px-1">
                        {format(message.timestamp, 'MMM d, yyyy • h:mm a')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollArea>

          {/* Info Footer */}
          <div className="border-t p-4 bg-gray-50">
            <p className="text-xs text-center text-muted-foreground">
              You have read-only access to this conversation. {child.name} can send and receive messages normally.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}

