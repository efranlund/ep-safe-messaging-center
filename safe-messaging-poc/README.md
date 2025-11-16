# Elite Prospects Safe Messaging Center - POC

A proof-of-concept demonstrating a secure messaging platform for parents to monitor their children's communications with scouts, coaches, and agents on Elite Prospects.

## 🎯 Overview

This POC addresses the need for child safety compliance as Elite Prospects transitions from a "data platform" to a "community platform" with features like Messenger, video uploads, and team communication.

### Compliance Standards

- **US SafeSport & MAAPP**: Minor Athlete Abuse Prevention Policies
- **Canadian Rule of Two**: Canadian Safe Sport Program
- **EU DSA & GDPR**: Safety by design for children

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
cd /Users/ericfranlund/Dev/ep-safe-messaging-center/safe-messaging-poc
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Features

### 1. **Secure Parent Verification**
- Unique verification links with secure tokens
- Token expiry and one-time use validation
- Cannot be guessed from public player IDs

### 2. **Frictionless Authentication**
- Sign in with Google (one-click)
- Magic link via email (passwordless)
- Mobile-optimized, safe and trustworthy design

### 3. **Multi-Child Dashboard**
- Monitor multiple children from one account
- View conversation counts and unread messages
- Quick access to each child's communications

### 4. **Read-Only Conversation Access**
- View all messages between child and adults
- See who child is communicating with (role badges)
- Clear "read-only" indicators throughout

### 5. **Email Notifications** (Mock)
- Daily digest of conversations
- Instant alerts for new conversations
- Logged and tracked

## 🗺️ Demo Routes

Navigate to these URLs to explore different parts of the application:

### Home Page
```
http://localhost:3000
```
Landing page with overview and navigation to all demo routes.

### Verification Landing Page
```
http://localhost:3000/verify/123456/a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9
```
Shows how parents verify their identity with a secure token. Displays child information and explains the Safe Messaging program.

### Sign In Page
```
http://localhost:3000/auth/signin
```
Frictionless authentication with Google OAuth and Magic Link options. Mobile-friendly with trust indicators.

### Parent Dashboard
```
http://localhost:3000/dashboard
```
Main dashboard showing all connected children, conversation counts, and quick access to view each child's messages.

### Child Conversations (Emma)
```
http://localhost:3000/dashboard/child/child-1
```
View all conversations for Emma Lindström (16 years old). Includes messages with scouts, coaches, and agents.

### Child Conversations (Lucas)
```
http://localhost:3000/dashboard/child/child-2
```
View all conversations for Lucas Andersson (15 years old).

## 🧪 Mock Data

The POC includes realistic mock data for demonstration:

### Mock Children
1. **Emma Lindström** (16, Forward, Djurgårdens IF J18)
   - Verified parent access
   - 3 active conversations (scout, coach, agent)

2. **Lucas Andersson** (15, Defense, Frölunda HC J16)
   - Verified parent access
   - 2 active conversations (scout, coach)

3. **Oliver Bergman** (14, Goalie, AIK J14)
   - Unverified (pending parent verification)

### Mock Parent
- **Sarah Lindström** (sarah.lindstrom@example.com)
- Monitors Emma and Lucas

### Verification Tokens
Each child has a unique verification token:
- Emma: `a7f8e2c9-4b1d-4a3e-9f2e-c8d5b6a4e7f9`
- Lucas: `b8e9f3d0-5c2e-4b4f-0g3f-d9e6c7b5f8g0`
- Oliver: `c9f0g4e1-6d3f-5c5g-1h4g-e0f7d8c6g9h1`

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: NextAuth.js (Google OAuth + Magic Link)
- **Icons**: Lucide React
- **Date Formatting**: date-fns

## 📂 Project Structure

```
safe-messaging-poc/
├── app/
│   ├── api/auth/[...nextauth]/    # NextAuth API route
│   ├── auth/signin/               # Sign in page
│   ├── dashboard/                 # Parent dashboard
│   │   └── child/[childId]/       # Child conversation view
│   ├── verify/[playerId]/[token]/ # Verification landing page
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   └── globals.css                # Global styles
├── components/
│   ├── ui/                        # shadcn/ui components
│   ├── auth/                      # Auth-related components
│   ├── parent/                    # Parent-specific components
│   └── layout/                    # Layout components
├── lib/
│   ├── auth.ts                    # NextAuth configuration
│   ├── mock-data.ts               # Mock data & helper functions
│   └── utils.ts                   # Utility functions
└── public/                        # Static assets
```

## 🔐 Security Features

### Token Validation
- Unique UUID for each verification request
- Expiry dates (30 days by default)
- One-time use tokens
- Cannot be reverse-engineered from public player IDs

### Authentication
- Google OAuth integration
- Email magic links (passwordless)
- Session management via NextAuth.js

### Privacy
- Read-only access for parents
- Automatic access removal at age 18
- No parent participation in conversations

## 🎨 Design Principles

### Mobile-First
- Responsive design for all screen sizes
- Touch-optimized buttons and targets
- Mobile-friendly navigation

### Trust & Safety
- Shield icons and security badges throughout
- Clear explanations of features
- Reassuring copy and messaging
- Prominent "read-only" indicators

### Frictionless UX
- One-click Google sign in
- Magic links (no passwords)
- Minimal form fields
- Clear visual hierarchy

## 📧 Email Notifications (Mock)

The POC demonstrates email notification concepts:

1. **Daily Digest**: Summary of conversations
2. **New Conversation Alert**: Instant notification
3. **Verification Email**: Sent to parent with secure link

*Note: Actual email sending is mocked in this POC. In production, this would use a real email service.*

## 🔄 Future Enhancements

For a production implementation, consider:

- Real database (PostgreSQL, MongoDB, etc.)
- Actual email service integration (SendGrid, AWS SES, etc.)
- Real-time messaging with WebSockets
- Push notifications
- Report/flag functionality
- Admin dashboard for Elite Prospects staff
- Analytics and monitoring
- Automated content moderation
- Multi-language support

## 📝 Notes

- This is a **static POC** with mock data
- No real backend or database
- Authentication is simulated (clicking "Sign in with Google" redirects to dashboard)
- Email sending is logged to console only
- All data resets on page refresh

## 🤝 Contributing

This is a proof-of-concept demo. For production implementation, coordinate with the Elite Prospects development team.

## 📄 License

Proprietary - Elite Prospects

---

Built with ❤️ for safer youth sports communications
