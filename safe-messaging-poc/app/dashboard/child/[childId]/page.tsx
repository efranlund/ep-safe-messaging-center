'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ArrowLeft, Shield, MessageSquare, Eye, UserCircle2, Briefcase, Bell, Trash2, AlertTriangle, Settings2 } from 'lucide-react';
import { 
  getChildById, 
  getConversationsByChildId, 
  getConversationById,
  getNotificationSettings,
  updateNotificationSettings,
  deleteChildConnection,
  mockParents,
} from '@/lib/mock-data';
import { format } from 'date-fns';

export default function ChildConversationsPage() {
  const params = useParams();
  const router = useRouter();
  const childId = params.childId as string;
  
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showSettingsSheet, setShowSettingsSheet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState(
    getNotificationSettings(childId) || {
      childId,
      dailySummary: true,
      newConversations: true,
    }
  );
  
  const child = getChildById(childId);
  const conversations = getConversationsByChildId(childId);
  const selectedConversation = selectedConversationId ? getConversationById(selectedConversationId) : null;
  const parent = mockParents[0]; // Mock parent data

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!child) {
    return <div>Child not found</div>;
  }

  const handleConversationClick = (conversationId: string) => {
    if (isMobile) {
      // Navigate to dedicated conversation page on mobile
      router.push(`/dashboard/child/${childId}/conversation/${conversationId}`);
    } else {
      // Select inline on desktop
      setSelectedConversationId(conversationId);
    }
  };

  const handleNotificationToggle = (setting: 'dailySummary' | 'newConversations') => {
    const newSettings = {
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    };
    setNotificationSettings(newSettings);
    updateNotificationSettings(childId, newSettings);
  };

  const handleDeleteConnection = () => {
    deleteChildConnection(childId, parent.id);
    setShowDeleteDialog(false);
    router.push('/dashboard');
  };

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
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-3 md:py-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>
                <ArrowLeft className="h-4 w-4 md:mr-2" />
                <span className="hidden md:inline">Back</span>
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-2 md:gap-3">
                <Avatar className="h-9 w-9 md:h-10 md:w-10">
                  <AvatarFallback className="bg-blue-100 text-blue-700">
                    {child.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h1 className="text-base md:text-lg font-semibold truncate">{child.name}</h1>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">
                    {child.age} years • {child.team}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Settings Button */}
            <Sheet open={showSettingsSheet} onOpenChange={setShowSettingsSheet}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Settings2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Settings</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <div className="flex flex-col h-full overflow-y-auto pr-6">
                  <SheetHeader className="pr-8">
                    <SheetTitle>Settings for {child.name}</SheetTitle>
                    <SheetDescription>
                      Manage notification preferences and connection settings
                    </SheetDescription>
                  </SheetHeader>

                  <div className="space-y-6 mt-6 pb-6">
                    {/* Notification Settings Section */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Bell className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Notification Settings</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Choose how you want to be notified about {child.name}'s messages
                      </p>

                      {/* Daily Summary */}
                      <div className="flex items-start justify-between gap-4 py-3 border-b">
                        <div className="flex-1">
                          <Label htmlFor="daily-summary" className="text-sm font-medium cursor-pointer">
                            Daily Summary
                          </Label>
                          <p className="text-xs text-muted-foreground mt-1">
                            Get a daily email with all conversation activity
                          </p>
                        </div>
                        <Switch
                          id="daily-summary"
                          checked={notificationSettings.dailySummary}
                          onCheckedChange={() => handleNotificationToggle('dailySummary')}
                        />
                      </div>

                      {/* New Conversations */}
                      <div className="flex items-start justify-between gap-4 py-3">
                        <div className="flex-1">
                          <Label htmlFor="new-conversations" className="text-sm font-medium cursor-pointer">
                            New Conversations
                          </Label>
                          <p className="text-xs text-muted-foreground mt-1">
                            Instant notification when someone starts a new conversation
                          </p>
                        </div>
                        <Switch
                          id="new-conversations"
                          checked={notificationSettings.newConversations}
                          onCheckedChange={() => handleNotificationToggle('newConversations')}
                        />
                      </div>
                    </div>

                    {/* Danger Zone Section */}
                    <div className="space-y-4 pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Trash2 className="h-5 w-5 text-red-600" />
                        <h3 className="font-semibold text-red-900">Danger Zone</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Permanently remove your connection to {child.name}'s account
                      </p>
                      <Button 
                        variant="destructive" 
                        className="w-full"
                        onClick={() => {
                          setShowSettingsSheet(false);
                          setShowDeleteDialog(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Connection
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <DialogTitle>Delete Connection to {child.name}?</DialogTitle>
            </div>
            <DialogDescription className="text-left space-y-3 pt-2">
              <p className="font-medium text-foreground">
                This action cannot be undone. Once deleted:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>You will no longer be able to view {child.name}'s conversations</li>
                <li>You will not receive any notifications about their messages</li>
                <li>{child.name} will be able to send and receive messages normally</li>
                <li>You will need {child.name} to invite you again to restore access</li>
              </ul>
              <p className="text-sm font-medium text-red-600 pt-2">
                Are you absolutely sure you want to proceed?
              </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowDeleteDialog(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteConnection}
            >
              Yes, Delete Connection
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 md:px-4 py-4 md:py-6">
        <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="pb-3 md:pb-6">
                <CardTitle className="text-lg md:text-xl">Conversations</CardTitle>
                <CardDescription>
                  {conversations.length} active conversation{conversations.length !== 1 ? 's' : ''}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-420px)] md:h-[600px]">
                  <div className="divide-y">
                    {conversations.map((conv) => (
                      <button
                        key={conv.id}
                        onClick={() => handleConversationClick(conv.id)}
                        className={`w-full text-left p-3 md:p-4 hover:bg-accent transition-colors active:bg-accent/80 ${
                          selectedConversationId === conv.id ? 'bg-accent' : ''
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                            <Avatar className="h-10 w-10 flex-shrink-0">
                              <AvatarFallback>
                                {conv.otherPersonName.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate text-sm md:text-base">
                                {conv.otherPersonName}
                              </p>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${getRoleBadgeColor(conv.otherPersonRole)} mt-1`}
                              >
                                {getRoleIcon(conv.otherPersonRole)}
                                <span className="ml-1 capitalize">{conv.otherPersonRole}</span>
                              </Badge>
                            </div>
                          </div>
                          {conv.unreadCount > 0 && (
                            <Badge variant="destructive" className="rounded-full ml-2 flex-shrink-0">
                              {conv.unreadCount}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-1">
                          {conv.lastMessage}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {format(conv.lastMessageTime, 'MMM d, h:mm a')}
                        </p>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Message View - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-2">
            {selectedConversation ? (
              <Card className="h-[700px] flex flex-col">
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback>
                          {selectedConversation.otherPersonName.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">
                          {selectedConversation.otherPersonName}
                        </CardTitle>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getRoleBadgeColor(selectedConversation.otherPersonRole)}`}
                        >
                          {getRoleIcon(selectedConversation.otherPersonRole)}
                          <span className="ml-1 capitalize">{selectedConversation.otherPersonRole}</span>
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {/* Read-Only Banner */}
                <div className="bg-blue-50 border-b border-blue-200 px-6 py-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <p className="text-sm text-blue-900">
                    <strong>Read-Only Mode:</strong> You are viewing this conversation as a parent/guardian
                  </p>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-6">
                  <div className="space-y-4">
                    {selectedConversation.messages.map((message) => {
                      const isChild = message.senderId === selectedConversation.childId;
                      
                      return (
                        <div
                          key={message.id}
                          className={`flex ${isChild ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[70%] ${isChild ? 'order-2' : 'order-1'}`}>
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
            ) : (
              <Card className="h-[700px] flex items-center justify-center">
                <CardContent className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Select a Conversation</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a conversation from the list to view the messages
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

