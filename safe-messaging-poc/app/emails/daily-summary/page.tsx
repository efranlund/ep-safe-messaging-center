'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function DailySummaryEmailExample() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => router.push('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="bg-white rounded-lg shadow-sm p-1">
          {/* Email Preview */}
          <div className="bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
            {/* Header */}
            <div style={{ backgroundColor: '#2563eb', padding: '24px', textAlign: 'center' }}>
              <h1 style={{ color: '#ffffff', margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
                Elite Prospects Safe Messaging Center
              </h1>
            </div>

            {/* Body */}
            <div style={{ padding: '32px 24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#111827' }}>
                Daily Summary for Emma Lindström
              </h2>
              
              <p style={{ color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
                Hi Sarah,
              </p>

              <p style={{ color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
                Here's your daily summary of Emma's conversations on Elite Prospects:
              </p>

              {/* Conversations List */}
              <div style={{ backgroundColor: '#f9fafb', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                  Active Conversations (3)
                </h3>

                {/* Conversation 1 */}
                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div>
                      <strong style={{ color: '#111827' }}>John Mitchell</strong>
                      <span style={{ color: '#6b7280', fontSize: '14px', marginLeft: '8px' }}>Scout</span>
                    </div>
                    <span style={{ color: '#2563eb', fontWeight: '600' }}>5 messages</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0 8px 0', fontStyle: 'italic' }}>
                    Looking forward to seeing you play at the tournament next weekend!
                  </p>
                  <a 
                    href="https://messaging.eliteprospects.com/dashboard/child/child-1/conversation/conv-1"
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    View Conversation →
                  </a>
                </div>

                {/* Conversation 2 */}
                <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div>
                      <strong style={{ color: '#111827' }}>Anna Karlsson</strong>
                      <span style={{ color: '#6b7280', fontSize: '14px', marginLeft: '8px' }}>Coach</span>
                    </div>
                    <span style={{ color: '#2563eb', fontWeight: '600' }}>3 messages</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0 8px 0', fontStyle: 'italic' }}>
                    Great job at practice today! Keep working on that backhand.
                  </p>
                  <a 
                    href="https://messaging.eliteprospects.com/dashboard/child/child-1/conversation/conv-2"
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    View Conversation →
                  </a>
                </div>

                {/* Conversation 3 */}
                <div style={{ paddingBottom: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div>
                      <strong style={{ color: '#111827' }}>Marcus Johansson</strong>
                      <span style={{ color: '#6b7280', fontSize: '14px', marginLeft: '8px' }}>Agent</span>
                    </div>
                    <span style={{ color: '#2563eb', fontWeight: '600' }}>2 messages</span>
                  </div>
                  <p style={{ color: '#6b7280', fontSize: '14px', margin: '4px 0 8px 0', fontStyle: 'italic' }}>
                    I'd like to introduce myself and discuss potential opportunities.
                  </p>
                  <a 
                    href="https://messaging.eliteprospects.com/dashboard/child/child-1/conversation/conv-3"
                    style={{ 
                      color: '#2563eb', 
                      textDecoration: 'none', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    View Conversation →
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '24px' }}>
                <a 
                  href="https://messaging.eliteprospects.com/dashboard"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#2563eb',
                    color: '#ffffff',
                    padding: '12px 32px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '16px'
                  }}
                >
                  View All Conversations
                </a>
              </div>

              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginTop: '24px' }}>
                This is an automated daily summary. You can manage your notification preferences in the 
                <a href="https://messaging.eliteprospects.com/dashboard" style={{ color: '#2563eb', textDecoration: 'none' }}> Safe Messaging Center</a>.
              </p>
            </div>

            {/* Footer */}
            <div style={{ backgroundColor: '#f9fafb', padding: '24px', textAlign: 'center', borderTop: '1px solid #e5e7eb' }}>
              <p style={{ color: '#6b7280', fontSize: '12px', margin: 0 }}>
                Elite Prospects Safe Messaging Center
                <br />
                Protecting young athletes through transparent communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

