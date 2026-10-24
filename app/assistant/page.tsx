'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';
import {
  Bot,
  Send,
  Paperclip,
  User,
  Sparkles,
  TrendingUp,
  Wallet,
  CalendarDays,
  Heart,
  AlertCircle,
  CheckCircle,
  RotateCcw,
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  card?: {
    type: 'retirement' | 'hsa' | 'pto' | 'health';
    data: Record<string, string>;
  };
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hi Alex! I'm your AI benefits advisor, connected to your Justworks account. I can help you understand your health insurance, optimize your HSA, maximize your 401(k) match, navigate your PTO, and answer any other benefits questions. What would you like to explore?",
    timestamp: new Date(),
  },
];

const sampleResponses: Record<string, { content: string; card?: Message['card'] }> = {
  hsa: {
    content: "Based on your Justworks HDHP plan, here's your HSA situation for 2026:",
    card: {
      type: 'hsa',
      data: {
        limit: '$4,150',
        contributed: '$1,200',
        remaining: '$2,950',
        balance: '$2,450',
        taxSavings: '~$1,180',
        recommendation: 'Maxing your HSA would save you approximately $1,180 in federal taxes this year. At your tax bracket, that\'s $0.40 saved for every $1 contributed. Your HSA balance also grows tax-free — consider investing the amount above your 3-month medical emergency fund.',
      },
    },
  },
  '401k': {
    content: "Here's your 401(k) situation based on your Justworks account:",
    card: {
      type: 'retirement',
      data: {
        yourRate: '3%',
        matchRate: '4%',
        missedMatch: '$1,440/year',
        vesting: '60% vested',
        costToFix: '~$55/paycheck',
        recommendation: 'Increasing your contribution from 3% to 4% costs you ~$55/paycheck but earns you $120 in employer match — a 118% instant return. To update this in Justworks: go to Benefits → Retirement → Edit Contribution Rate.',
      },
    },
  },
  pto: {
    content: "Here's your PTO status from Justworks:",
    card: {
      type: 'pto',
      data: {
        available: '14.5 days',
        accruing: '1.25 days/month',
        carryover: '10 days max',
        expiring: '4.5 days (Dec 31)',
        value: '~$1,100',
        recommendation: 'You\'ll lose 4.5 PTO days at year end due to your company\'s 10-day carryover limit. That\'s approximately $1,100 in lost compensation. You have 9 weeks left — I\'d suggest taking a few long weekends in November and December.',
      },
    },
  },
  health: {
    content: "Here's a summary of your current health insurance coverage through Justworks:",
    card: {
      type: 'health',
      data: {
        plan: 'HDHP (High Deductible Health Plan)',
        premium: '$140/month',
        deductible: '$1,500 individual',
        oopMax: '$5,000 individual',
        deductibleUsed: '$340 (23%)',
        hsaEligible: 'Yes',
        recommendation: 'Your HDHP is paired with your HSA, which is a powerful combination. Since you\'ve only used $340 of your $1,500 deductible this year, you\'re on track. Remember: HSA funds roll over forever and can be invested for tax-free growth.',
      },
    },
  },
};

function getResponse(input: string): { content: string; card?: Message['card'] } {
  const lower = input.toLowerCase();
  if (lower.includes('hsa') || lower.includes('fsa') || lower.includes('health savings') || lower.includes('contribute')) {
    return sampleResponses.hsa;
  }
  if (lower.includes('401') || lower.includes('retirement') || lower.includes('match') || lower.includes('vesting')) {
    return sampleResponses['401k'];
  }
  if (lower.includes('pto') || lower.includes('time off') || lower.includes('vacation') || lower.includes('paid time')) {
    return sampleResponses.pto;
  }
  if (lower.includes('health') || lower.includes('insurance') || lower.includes('hdhp') || lower.includes('ppo') || lower.includes('deductible') || lower.includes('cover')) {
    return sampleResponses.health;
  }
  return {
    content: `That's a great question about your benefits. Based on your Justworks account, I can see your current benefits package includes health insurance (HDHP), an HSA, 401(k) with employer match, and PTO. Could you be more specific about what you'd like to understand? For example, I can help you with:\n\n• Your HSA contribution strategy\n• Maximizing your 401(k) employer match\n• Understanding your health plan coverage\n• Planning your PTO before year-end`,
  };
}

function BenefitsCard({ card }: { card: NonNullable<Message['card']> }) {
  const icons = {
    retirement: TrendingUp,
    hsa: Wallet,
    pto: CalendarDays,
    health: Heart,
  };
  const colors = {
    retirement: '#5C9367',
    hsa: '#245A89',
    pto: '#D99A36',
    health: '#D9535F',
  };
  const bgs = {
    retirement: '#F0F9F2',
    hsa: '#EBF4FF',
    pto: '#FFF8EC',
    health: '#FFF0F0',
  };
  const titles = {
    retirement: 'Your Retirement Overview',
    hsa: 'Your HSA Overview',
    pto: 'Your PTO Overview',
    health: 'Your Health Plan Overview',
  };

  const Icon = icons[card.type];
  const color = colors[card.type];
  const bg = bgs[card.type];
  const title = titles[card.type];
  const { recommendation, ...metrics } = card.data;

  return (
    <div
      className="mt-3 rounded-xl overflow-hidden"
      style={{ border: '1px solid #E2E8F0' }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ backgroundColor: bg }}
      >
        <Icon size={16} style={{ color }} />
        <span className="text-sm font-semibold" style={{ color }}>{title}</span>
        <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#FFFFFF', color: '#667085' }}>
          via Justworks
        </span>
      </div>
      <div className="px-4 py-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="grid grid-cols-2 gap-3 mb-3">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key}>
              <p className="text-xs capitalize mb-0.5" style={{ color: '#94A3B8' }}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-sm font-semibold" style={{ color: '#1D2939' }}>{value}</p>
            </div>
          ))}
        </div>
        {recommendation && (
          <div
            className="flex items-start gap-2 p-3 rounded-lg text-xs"
            style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}
          >
            <Sparkles size={12} className="flex-shrink-0 mt-0.5" />
            <p>{recommendation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function AssistantContent() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get('q');
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasProcessedInitialQ = useRef(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialQ && !hasProcessedInitialQ.current) {
      hasProcessedInitialQ.current = true;
      handleSend(initialQ);
    }
  }, [initialQ]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    await new Promise(resolve => setTimeout(resolve, 1200));

    const response = getResponse(messageText);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: response.content,
      card: response.card,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages(prev => [...prev, assistantMessage]);
  };

  const suggestedFollowUps = [
    'How much should I contribute to my HSA?',
    'Am I getting my full 401(k) match?',
    'How many PTO days do I have left?',
    'What does my health plan cover?',
  ];

  return (
    <div style={{ backgroundColor: '#F5F8FC', minHeight: '100vh' }}>
      <Sidebar />
      <AppHeader title="AI Assistant" subtitle="Connected to Justworks" />

      <main
        style={{
          marginLeft: '248px',
          paddingTop: '64px',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'} ai-message-enter`}
              >
                {message.role === 'assistant' && (
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#245A89' }}
                  >
                    <Bot size={16} className="text-white" />
                  </div>
                )}
                <div className={`max-w-xl ${message.role === 'user' ? 'order-first' : ''}`}>
                  {message.role === 'user' ? (
                    <div
                      className="px-4 py-3 rounded-2xl rounded-tr-sm text-sm"
                      style={{ backgroundColor: '#245A89', color: '#FFFFFF' }}
                    >
                      {message.content}
                    </div>
                  ) : (
                    <div>
                      <div
                        className="px-4 py-3 rounded-2xl rounded-tl-sm text-sm"
                        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0', color: '#1D2939', lineHeight: 1.7 }}
                      >
                        {message.content.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < message.content.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </div>
                      {message.card && <BenefitsCard card={message.card} />}
                    </div>
                  )}
                  <p className="text-xs mt-1 px-1" style={{ color: '#94A3B8' }}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.role === 'user' && (
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: '#E2E8F0' }}
                  >
                    <User size={16} style={{ color: '#667085' }} />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3 justify-start ai-message-enter">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#245A89' }}
                >
                  <Bot size={16} className="text-white" />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}
                >
                  <div className="w-2 h-2 rounded-full typing-dot" style={{ backgroundColor: '#94A3B8' }} />
                  <div className="w-2 h-2 rounded-full typing-dot" style={{ backgroundColor: '#94A3B8' }} />
                  <div className="w-2 h-2 rounded-full typing-dot" style={{ backgroundColor: '#94A3B8' }} />
                </div>
              </div>
            )}

            {/* Suggested follow-ups (show after first exchange) */}
            {messages.length === 1 && (
              <div>
                <p className="text-xs font-medium mb-3" style={{ color: '#94A3B8' }}>Suggested questions</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedFollowUps.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="text-xs px-3 py-2 rounded-lg border transition-all hover:shadow-sm"
                      style={{
                        backgroundColor: '#FFFFFF',
                        borderColor: '#E2E8F0',
                        color: '#245A89',
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <div
          className="px-6 py-4"
          style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                border: '1.5px solid #E2E8F0',
                backgroundColor: '#FFFFFF',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about your benefits..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: '#1D2939' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs" style={{ backgroundColor: '#F0F9F2', color: '#5C9367' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5C9367' }} />
                  Justworks
                </div>
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: input.trim() && !isTyping ? '#245A89' : '#E2E8F0',
                    cursor: input.trim() && !isTyping ? 'pointer' : 'not-allowed',
                  }}
                >
                  <Send size={14} style={{ color: input.trim() && !isTyping ? '#FFFFFF' : '#94A3B8' }} />
                </button>
              </div>
            </div>
            <p className="text-center text-xs mt-2" style={{ color: '#94A3B8' }}>
              AI Benefits Agent reads your connected Justworks data to provide personalized guidance. Always verify important decisions with your HR team.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AssistantPage() {
  return (
    <Suspense fallback={<div style={{ backgroundColor: '#F5F8FC', minHeight: '100vh' }}><Sidebar /><AppHeader title="AI Assistant" /></div>}>
      <AssistantContent />
    </Suspense>
  );
}
