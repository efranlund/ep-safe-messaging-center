import { v4 as uuidv4 } from 'uuid';

// Types
export interface Child {
  id: string;
  playerId: string;
  name: string;
  dateOfBirth: string;
  age: number;
  position: string;
  team: string;
  verificationToken?: string;
  tokenExpiry?: Date;
  verified: boolean;
}

export interface Parent {
  id: string;
  email: string;
  name: string;
  children: string[]; // Array of child IDs
}

export interface NotificationSettings {
  childId: string;
  dailySummary: boolean;
  newConversations: boolean;
  urgentMessages: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Conversation {
  id: string;
  childId: string;
  otherPersonId: string;
  otherPersonName: string;
  otherPersonRole: 'scout' | 'coach' | 'agent' | 'teammate' | 'parent';
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  messages: Message[];
  eliteProspectsUrl?: string;
}

export interface VerificationToken {
  token: string;
  playerId: string;
  createdAt: Date;
  expiresAt: Date;
  used: boolean;
}

// Mock Children Data
export const mockChildren: Child[] = [
  {
    id: 'child-1',
    playerId: '123456',
    name: 'Emma Lindström',
    dateOfBirth: '2008-03-15',
    age: 16,
    position: 'Forward',
    team: 'Djurgårdens IF J18',
    verificationToken: 'a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9',
    tokenExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    verified: true,
  },
  {
    id: 'child-2',
    playerId: '234567',
    name: 'Lucas Andersson',
    dateOfBirth: '2009-07-22',
    age: 15,
    position: 'Defense',
    team: 'Frölunda HC J16',
    verificationToken: 'b8e9f3d0-5c2e-4b4f-0g3f-d9e6c7b5f8g0',
    tokenExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    verified: true,
  },
  {
    id: 'child-3',
    playerId: '345678',
    name: 'Oliver Bergman',
    dateOfBirth: '2010-11-08',
    age: 14,
    position: 'Goalie',
    team: 'AIK J14',
    verificationToken: 'c9f0g4e1-6d3f-5c5g-1h4g-e0f7d8c6g9h1',
    tokenExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    verified: false, // Unverified child
  },
];

// Mock Parent Data
export const mockParents: Parent[] = [
  {
    id: 'parent-1',
    email: 'sarah.lindstrom@example.com',
    name: 'Sarah Lindström',
    children: ['child-1', 'child-2'],
  },
];

// Mock Notification Settings
export const mockNotificationSettings: NotificationSettings[] = [
  {
    childId: 'child-1',
    dailySummary: true, // default enabled
    newConversations: true, // default enabled
    urgentMessages: false,
  },
  {
    childId: 'child-2',
    dailySummary: true, // default enabled
    newConversations: true, // default enabled
    urgentMessages: false,
  },
];

// Mock Conversations for Emma (child-1)
export const mockConversationsChild1: Conversation[] = [
  {
    id: 'conv-1',
    childId: 'child-1',
    otherPersonId: 'scout-1',
    otherPersonName: 'John Mitchell',
    otherPersonRole: 'scout',
    lastMessage: 'Looking forward to seeing you play at the tournament next weekend!',
    lastMessageTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unreadCount: 1,
    messages: [
      {
        id: 'msg-1',
        senderId: 'scout-1',
        senderName: 'John Mitchell',
        content: 'Hi Emma, I saw you play last weekend and was very impressed with your speed and hockey sense.',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
        read: true,
      },
      {
        id: 'msg-2',
        senderId: 'child-1',
        senderName: 'Emma Lindström',
        content: 'Thank you so much! That means a lot to me.',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-3',
        senderId: 'scout-1',
        senderName: 'John Mitchell',
        content: "I'd like to talk to you about our development program. Are you interested in learning more?",
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-4',
        senderId: 'child-1',
        senderName: 'Emma Lindström',
        content: 'Yes, definitely! I would love to hear more about it.',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 45 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-5',
        senderId: 'scout-1',
        senderName: 'John Mitchell',
        content: 'Looking forward to seeing you play at the tournament next weekend!',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        read: true,
      },
    ],
  },
  {
    id: 'conv-2',
    childId: 'child-1',
    otherPersonId: 'coach-1',
    otherPersonName: 'Anna Karlsson',
    otherPersonRole: 'coach',
    lastMessage: 'Great job at practice today! Keep working on that backhand.',
    lastMessageTime: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    unreadCount: 0,
    eliteProspectsUrl: 'https://www.eliteprospects.com/player/anna-karlsson',
    messages: [
      {
        id: 'msg-6',
        senderId: 'coach-1',
        senderName: 'Anna Karlsson',
        content: "Hi Emma, I wanted to talk to you about your development. You've made great progress this season.",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-7',
        senderId: 'child-1',
        senderName: 'Emma Lindström',
        content: 'Thank you coach! I really appreciate all your help.',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000 + 20 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-8',
        senderId: 'coach-1',
        senderName: 'Anna Karlsson',
        content: 'Great job at practice today! Keep working on that backhand.',
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        read: true,
      },
    ],
  },
  {
    id: 'conv-3',
    childId: 'child-1',
    otherPersonId: 'agent-1',
    otherPersonName: 'Marcus Johansson',
    otherPersonRole: 'agent',
    lastMessage: "I'd like to introduce myself and discuss potential opportunities.",
    lastMessageTime: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago
    unreadCount: 2,
    messages: [
      {
        id: 'msg-9',
        senderId: 'agent-1',
        senderName: 'Marcus Johansson',
        content: 'Hi Emma, my name is Marcus and I work with Elite Sports Management.',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-10',
        senderId: 'agent-1',
        senderName: 'Marcus Johansson',
        content: "I'd like to introduce myself and discuss potential opportunities.",
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        read: true,
      },
    ],
  },
];

// Mock Conversations for Lucas (child-2)
export const mockConversationsChild2: Conversation[] = [
  {
    id: 'conv-4',
    childId: 'child-2',
    otherPersonId: 'scout-2',
    otherPersonName: 'Erik Andersson',
    otherPersonRole: 'scout',
    lastMessage: 'Your skating has improved a lot since last year.',
    lastMessageTime: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    unreadCount: 0,
    messages: [
      {
        id: 'msg-11',
        senderId: 'scout-2',
        senderName: 'Erik Andersson',
        content: "Hi Lucas, I've been watching you this season and I'm impressed with your defensive play.",
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-12',
        senderId: 'child-2',
        senderName: 'Lucas Andersson',
        content: 'Thank you! I have been working hard on my positioning.',
        timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000 + 1 * 60 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-13',
        senderId: 'scout-2',
        senderName: 'Erik Andersson',
        content: 'Your skating has improved a lot since last year.',
        timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
        read: true,
      },
    ],
  },
  {
    id: 'conv-5',
    childId: 'child-2',
    otherPersonId: 'coach-2',
    otherPersonName: 'Per Lundqvist',
    otherPersonRole: 'coach',
    lastMessage: "Don't forget we have an early practice tomorrow at 6 AM.",
    lastMessageTime: new Date(Date.now() - 18 * 60 * 60 * 1000), // 18 hours ago
    unreadCount: 0,
    messages: [
      {
        id: 'msg-14',
        senderId: 'coach-2',
        senderName: 'Per Lundqvist',
        content: 'Lucas, can you confirm you received the new practice schedule?',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-15',
        senderId: 'child-2',
        senderName: 'Lucas Andersson',
        content: 'Yes, I got it. Thanks coach!',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 30 * 60 * 1000),
        read: true,
      },
      {
        id: 'msg-16',
        senderId: 'coach-2',
        senderName: 'Per Lundqvist',
        content: "Don't forget we have an early practice tomorrow at 6 AM.",
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000),
        read: true,
      },
    ],
  },
];

// Combine all conversations
export const allConversations = [
  ...mockConversationsChild1,
  ...mockConversationsChild2,
];

// Mock Verification Tokens
export const mockVerificationTokens: VerificationToken[] = [
  {
    token: 'a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9',
    playerId: '123456',
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    expiresAt: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000),
    used: false,
  },
  {
    token: 'b8e9f3d0-5c2e-4b4f-0g3f-d9e6c7b5f8g0',
    playerId: '234567',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    expiresAt: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
    used: false,
  },
  {
    token: 'c9f0g4e1-6d3f-5c5g-1h4g-e0f7d8c6g9h1',
    playerId: '345678',
    createdAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
    expiresAt: new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 23 * 60 * 60 * 1000),
    used: false,
  },
];

// Helper functions
export const getChildById = (childId: string): Child | undefined => {
  return mockChildren.find((child) => child.id === childId);
};

export const getChildByPlayerId = (playerId: string): Child | undefined => {
  return mockChildren.find((child) => child.playerId === playerId);
};

export const getConversationsByChildId = (childId: string): Conversation[] => {
  return allConversations.filter((conv) => conv.childId === childId);
};

export const getConversationById = (conversationId: string): Conversation | undefined => {
  return allConversations.find((conv) => conv.id === conversationId);
};

export const validateToken = (playerId: string, token: string): { valid: boolean; message: string } => {
  const tokenData = mockVerificationTokens.find(
    (t) => t.playerId === playerId && t.token === token
  );

  if (!tokenData) {
    return { valid: false, message: 'Invalid verification link' };
  }

  if (tokenData.used) {
    return { valid: false, message: 'This verification link has already been used' };
  }

  if (new Date() > tokenData.expiresAt) {
    return { valid: false, message: 'This verification link has expired' };
  }

  return { valid: true, message: 'Valid token' };
};

export const getParentByEmail = (email: string): Parent | undefined => {
  return mockParents.find((parent) => parent.email === email);
};

// Calculate unread message counts
export const getUnreadCountForChild = (childId: string): number => {
  const conversations = getConversationsByChildId(childId);
  return conversations.reduce((total, conv) => total + conv.unreadCount, 0);
};

export const getNotificationSettings = (childId: string): NotificationSettings | undefined => {
  return mockNotificationSettings.find((settings) => settings.childId === childId);
};

export const updateNotificationSettings = (
  childId: string, 
  updates: Partial<Omit<NotificationSettings, 'childId'>>
): void => {
  const index = mockNotificationSettings.findIndex((settings) => settings.childId === childId);
  if (index !== -1) {
    mockNotificationSettings[index] = {
      ...mockNotificationSettings[index],
      ...updates,
    };
  }
};

export const deleteChildConnection = (childId: string, parentId: string): void => {
  // In a real app, this would remove the connection from the database
  const parentIndex = mockParents.findIndex((parent) => parent.id === parentId);
  if (parentIndex !== -1) {
    mockParents[parentIndex].children = mockParents[parentIndex].children.filter(
      (id) => id !== childId
    );
  }
};

