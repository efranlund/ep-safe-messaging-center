# 🚀 Quick Start Guide

## Elite Prospects Safe Messaging Center POC

### Starting the Application

The development server is already running! Open your browser and navigate to:

```
http://localhost:3000
```

### Demo URLs to Explore

#### 1. Home Page
```
http://localhost:3000
```
- Overview of the Safe Messaging Center
- Links to all demo pages
- Compliance information

#### 2. Verification Landing Page
```
http://localhost:3000/verify/123456/a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9
```
- Shows secure token validation
- Displays child information (Emma Lindström)
- Explains parent access features
- Mobile-optimized with trust indicators

#### 3. Sign In Page
```
http://localhost:3000/auth/signin
```
- Frictionless authentication
- Google OAuth (one-click) - Click to go to dashboard
- Magic link email (passwordless)
- Trust and safety messaging

#### 4. Parent Dashboard
```
http://localhost:3000/dashboard
```
- View all children (Emma & Lucas)
- See conversation counts
- Unread message indicators
- Quick access to each child's conversations
- Option to add another child

#### 5. Emma's Conversations
```
http://localhost:3000/dashboard/child/child-1
```
- 3 conversations (Scout, Coach, Agent)
- Read-only message threads
- Role badges for adults
- Clear "read-only" indicators

#### 6. Lucas's Conversations
```
http://localhost:3000/dashboard/child/child-2
```
- 2 conversations (Scout, Coach)
- Similar interface to Emma's view

### Key Features to Demonstrate

✅ **Secure Verification**
- Unique tokens per player
- Token expiry validation
- Cannot be guessed from player IDs

✅ **Frictionless Auth**
- Google sign in (simulated)
- Magic link email (simulated)
- Mobile-first design

✅ **Multi-Child Support**
- Monitor multiple children
- Individual dashboards per child
- Aggregate notifications

✅ **Read-Only Access**
- Parents can view all messages
- Clear indicators throughout
- No ability to send messages

✅ **Role Identification**
- Scouts (blue badge)
- Coaches (green badge)
- Agents (purple badge)

### Mock Data

**Parent Account:**
- Name: Sarah Lindström
- Email: sarah.lindstrom@example.com

**Children:**
1. **Emma Lindström** (16, Forward)
   - Team: Djurgårdens IF J18
   - 3 active conversations
   - Verified

2. **Lucas Andersson** (15, Defense)
   - Team: Frölunda HC J16
   - 2 active conversations
   - Verified

3. **Oliver Bergman** (14, Goalie)
   - Team: AIK J14
   - Unverified (pending)

### Navigation Flow

1. Start at **Home** (http://localhost:3000)
2. Click "View Verification Page" or navigate to verification URL
3. Click "Continue to Verification"
4. On Sign In page, click "Continue with Google"
5. Now on Dashboard - view both children
6. Click "View Conversations" on Emma's card
7. Select any conversation to view messages
8. Note the "Read-Only Mode" banner
9. Use "Back" button to return to dashboard

### Mobile Testing

1. Open Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or "Pixel 5"
4. Navigate through the app
5. Test touch targets and responsive layout

### Stopping the Server

Press `Ctrl+C` in the terminal where the dev server is running.

### Restarting

```bash
cd /Users/ericfranlund/Dev/ep-safe-messaging-center/safe-messaging-poc
npm run dev
```

---

## 🎯 Presentation Tips

1. **Start with the problem**: Show the strategy document explaining why this is needed
2. **Demo the verification flow**: Show the secure token URL structure
3. **Highlight trust indicators**: Shield icons, badges, reassuring copy
4. **Show mobile responsiveness**: Resize browser or use device preview
5. **Emphasize read-only**: Point out the persistent banners and messaging
6. **Demo multi-child support**: Show how one parent monitors multiple children
7. **Discuss compliance**: Reference SafeSport, Rule of Two, DSA

## 📱 Mobile-First Design

All pages are optimized for mobile:
- Touch-friendly buttons (min 44px)
- Responsive grid layouts
- Mobile navigation
- Stack layouts on small screens
- Large, readable text

## 🔐 Security Highlights

- **Secure tokens**: UUID-based, cannot be guessed
- **Token expiry**: 30-day default
- **Token validation**: Checks existence, expiry, usage
- **Read-only access**: Parents cannot send messages
- **Auto-removal**: Access ends at age 18

## 🎨 Design System

- **Primary color**: Blue (trust, security)
- **Success**: Green (verified, safe)
- **Warning**: Amber (pending, attention)
- **Danger**: Red (errors, critical)
- **Badges**: Color-coded by role
- **Icons**: Lucide React (consistent, modern)

---

**Ready to demo! 🎉**

