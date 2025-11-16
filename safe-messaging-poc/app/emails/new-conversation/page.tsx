'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function NewConversationEmailExample() {
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
              {/* Alert Badge */}
              <div style={{ 
                backgroundColor: '#dbeafe', 
                border: '1px solid #93c5fd',
                borderRadius: '6px', 
                padding: '12px 16px', 
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ fontSize: '20px', marginRight: '12px' }}>🔔</span>
                <span style={{ color: '#1e40af', fontWeight: '600', fontSize: '14px' }}>
                  New Conversation Alert
                </span>
              </div>

              <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#111827' }}>
                New conversation started with Emma Lindström
              </h2>
              
              <p style={{ color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
                Hi Sarah,
              </p>

              <p style={{ color: '#4b5563', marginBottom: '24px', lineHeight: '1.5' }}>
                A new conversation has been started with your child, <strong>Emma Lindström</strong>, on Elite Prospects.
              </p>

              {/* Conversation Details */}
              <div style={{ backgroundColor: '#f9fafb', borderRadius: '8px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                  Conversation Details
                </h3>

                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px', display: 'block', marginBottom: '4px' }}>
                    Contact Person
                  </span>
                  <strong style={{ color: '#111827', fontSize: '16px' }}>John Mitchell</strong>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px', display: 'block', marginBottom: '4px' }}>
                    Role
                  </span>
                  <span style={{ 
                    display: 'inline-block',
                    backgroundColor: '#dbeafe', 
                    color: '#1e40af', 
                    padding: '4px 12px', 
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    Scout
                  </span>
                </div>

                <div style={{ marginBottom: '12px' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px', display: 'block', marginBottom: '4px' }}>
                    Started At
                  </span>
                  <span style={{ color: '#111827', fontSize: '14px' }}>
                    November 16, 2025 at 2:45 PM
                  </span>
                </div>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280', fontSize: '14px', display: 'block', marginBottom: '8px' }}>
                    First Message
                  </span>
                  <p style={{ 
                    color: '#111827', 
                    fontSize: '14px', 
                    fontStyle: 'italic',
                    backgroundColor: '#ffffff',
                    padding: '12px',
                    borderRadius: '6px',
                    border: '1px solid #e5e7eb',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Hi Emma, I saw you play last weekend and was very impressed with your speed and hockey sense.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div style={{ textAlign: 'center', marginTop: '32px', marginBottom: '24px' }}>
                <a 
                  href="https://messaging.eliteprospects.com/dashboard/child/child-1/conversation/conv-1"
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
                  View Conversation
                </a>
              </div>

              {/* Info Box */}
              <div style={{ 
                backgroundColor: '#fef3c7', 
                border: '1px solid #fbbf24',
                borderRadius: '6px', 
                padding: '16px', 
                marginTop: '24px'
              }}>
                <p style={{ color: '#92400e', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                  <strong>Why am I receiving this?</strong><br />
                  You're receiving this notification because a new conversation has been initiated with Emma. 
                  All conversations are monitored through the Safe Messaging Center to ensure Emma's safety.
                </p>
              </div>

              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginTop: '24px' }}>
                You can manage your notification preferences in the 
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

