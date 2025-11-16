import { NextAuthOptions, DefaultSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

// Extend the session type to include id
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'mock-google-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'mock-google-client-secret',
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER || 'smtp://user:pass@localhost:1025',
      from: process.env.EMAIL_FROM || 'noreply@eliteprospects.com',
      // For demo purposes, we'll mock the email sending
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        console.log('Mock email sent to:', identifier);
        console.log('Verification URL:', url);
        // In production, this would send a real email
        // For demo, we'll just log it
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    verifyRequest: '/auth/verify-request',
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub || '';
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

