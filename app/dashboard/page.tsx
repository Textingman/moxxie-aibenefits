'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';
import {
  Bot,
  Send,
  Paperclip,
  Heart,
  Wallet,
  TrendingUp,
  CalendarDays,
  ArrowRight,
  Sparkles,
  AlertCircle,
  CheckCircle,
  Clock,
  ChevronRight,
} from 'lucide-react';

const suggestions = [
  {
    icon: Heart,
    title: 'Understand My Health Plan',
    example: 'What does my health insurance actually cover?',
    color: '#D9535F',
    bg: '#FFF0F0',
  },
  {
    icon: Wallet,
    title: 'Optimize My HSA',
    example: 'How much should I contribute to my HSA?',
    color: '#245A89',
    bg: '#EBF4FF',
  },
  {
    icon: TrendingUp,
    title: 'Review My 401(k) Match',
    example: 'Am I receiving my full employer match?',
    color: '#5C9367',
    bg: '#F0F9F2',
  },
  {
    icon: CalendarDays,
    title: 'Check My PTO',
    example: 'How much paid time off do I have available?',
    color: '#D99A36',
    bg: '#FFF8EC',
  },
];

const benefitsCards = [
  {
    icon: Heart,
    label: 'Health Insurance',
    plan: 'HDHP — Justworks',
    metrics: [
      { label: 'Deductible Used', value: '$340', total: '$1,500', pct: 23 },
      { label: 'OOP Max', value: '$5,000' },
    ],
    action: 'Explore My Health Plan',
    href: '/benefits/health',
    color: '#D9535F',
    bg: '#FFF0F0',
    status: 'active',
  },
  {
    icon: Wallet,
    label: 'Health Savings Account',
    plan: 'HSA via Justworks',
    metrics: [
      { label: 'Current Balance', value: '$2,450' },
      { label: 'Annual Contribution', value: '$1,200', total: '$4,150', pct: 29 },
    ],
    action: 'Explore My HSA',
    href: '/benefits/hsa',
    color: '#245A89',
    bg: '#EBF4FF',
    status: 'action',
    alert: 'You could save $1,180 more in taxes',
  },
  {
    icon: TrendingUp,
    label: 'Retirement (401k)',
    plan: 'Fidelity via Justworks',
    metrics: [
      { label: 'Your Contribution', value: '3%' },
      { label: 'Employer Match', value: '4%' },
    ],
    action: 'Explore My 401(k)',
    href: '/benefits/retirement',
    color: '#5C9367',
    bg: '#F0F9F2',
    status: 'action',
    alert: 'Missing $1,440/yr in employer match',
  },
  {
    icon: CalendarDays,
    label: 'Paid Time Off',
    plan: 'Justworks PTO Policy',
    metrics: [
      { label: 'Available PTO', value: '14.5 days' },
      { label: 'Expiring Dec 31', value: '4.5 days' },
    ],
    action: 'Explore My PTO',
    href: '/benefits/pto',
    color: '#D99A36',
    bg: '#FFF8EC',
    status: 'warning',
    alert: '4.5 days expiring soon',
  },
];

const recommendations = [
  {
    icon: TrendingUp,
    title: 'Capture Your Full 401(k) Match',
    desc: 'Increase your contribution from 3% to 4% to capture $1,440/year in free employer match.',
    action: 'Update Contribution',
    priority: 'high',
    color: '#5C9367',
  },
  {
    icon: Wallet,
    title: 'Max Your HSA Contribution',
    desc: 'You have $2,950 remaining in HSA contribution room. Maxing it saves ~$1,180 in taxes.',
    action: 'Adjust HSA',
    priority: 'high',
    color: '#245A89',
  },
  {
    icon: CalendarDays,
    title: 'Use PTO Before Year End',
    desc: '4.5 PTO days expire Dec 31 due to your 10-day carryover limit. That\'s ~$1,100 in lost value.',
    action: 'Plan Time Off',
    priority: 'medium',
    color: '#D99A36',
  },
];

export default function DashboardPage() {
  const [inputValue, setInputValue] = useState('');

  const handleSuggestion = (example: string) => {
    setInputValue(example);
  };

  return (
    <div style={{ backgroundColor: '#F5F8FC', minHeight: '100vh' }}>
      <Sidebar />
      <AppHeader title="Home" subtitle="Good afternoon, Alex" />

      {/* Main Content */}
      <main
        style={{
          marginLeft: '248px',
          paddingTop: '64px',
          minHeight: '100vh',
        }}
      >
        <div className="max-w-4xl mx-auto px-8 py-10">

          {/* Welcome + AI Input */}
          <div className="mb-10">
            <h2
              className="mb-1"
              style={{ fontSize: '32px', fontWeight: 700, color: '#1D2939', lineHeight: 1.2 }}
            >
              Good afternoon, Alex.
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', color: '#667085' }}>
              What would you like to understand about your benefits?
            </p>

            {/* AI Input */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#EBF4FF' }}
              >
                <Bot size={16} style={{ color: '#245A89' }} />
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask anything about your benefits..."
                className="flex-1 bg-transparent outline-none text-sm"
                style={{ color: '#1D2939' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputValue.trim()) {
                    window.location.href = `/assistant?q=${encodeURIComponent(inputValue)}`;
                  }
                }}
              />
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs" style={{ backgroundColor: '#F0F9F2', color: '#5C9367' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5C9367' }} />
                  Justworks
                </div>
                <button
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                  style={{ backgroundColor: inputValue ? '#245A89' : '#E2E8F0' }}
                  onClick={() => {
                    if (inputValue.trim()) {
                      window.location.href = `/assistant?q=${encodeURIComponent(inputValue)}`;
                    }
                  }}
                >
                  <Send size={14} style={{ color: inputValue ? '#FFFFFF' : '#94A3B8' }} />
                </button>
              </div>
            </div>

            {/* Suggestion Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              {suggestions.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.title}
                    onClick={() => handleSuggestion(s.example)}
                    className="text-left p-4 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#E2E8F0',
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                      style={{ backgroundColor: s.bg }}
                    >
                      <Icon size={16} style={{ color: s.color }} />
                    </div>
                    <p className="text-xs font-semibold mb-1" style={{ color: '#1D2939' }}>{s.title}</p>
                    <p className="text-xs" style={{ color: '#94A3B8' }}>{s.example}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Benefits at a Glance */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold" style={{ color: '#1D2939' }}>Your Benefits at a Glance</h3>
              <Link href="/benefits" className="text-sm font-medium flex items-center gap-1" style={{ color: '#245A89' }}>
                View all <ChevronRight size={14} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefitsCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: card.bg }}
                        >
                          <Icon size={18} style={{ color: card.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: '#1D2939' }}>{card.label}</p>
                          <p className="text-xs" style={{ color: '#94A3B8' }}>{card.plan}</p>
                        </div>
                      </div>
                      {card.status === 'action' && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#FFF8EC', color: '#D99A36' }}>
                          Action needed
                        </span>
                      )}
                      {card.status === 'warning' && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#FFF0F0', color: '#D9535F' }}>
                          Expiring soon
                        </span>
                      )}
                      {card.status === 'active' && (
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: '#F0F9F2', color: '#5C9367' }}>
                          Active
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      {card.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="flex justify-between text-xs mb-1">
                            <span style={{ color: '#667085' }}>{m.label}</span>
                            <span className="font-semibold" style={{ color: '#1D2939' }}>
                              {m.value}{m.total ? ` / ${m.total}` : ''}
                            </span>
                          </div>
                          {m.pct !== undefined && (
                            <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: '#F1F5F9' }}>
                              <div
                                className="h-1.5 rounded-full"
                                style={{ width: `${m.pct}%`, backgroundColor: card.color }}
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {card.alert && (
                      <div
                        className="flex items-center gap-2 px-3 py-2 rounded-lg mb-3 text-xs"
                        style={{
                          backgroundColor: card.status === 'warning' ? '#FFF8EC' : '#EBF4FF',
                          color: card.status === 'warning' ? '#D99A36' : '#245A89',
                        }}
                      >
                        <AlertCircle size={12} />
                        {card.alert}
                      </div>
                    )}

                    <Link
                      href={card.href}
                      className="flex items-center justify-between text-xs font-semibold pt-3"
                      style={{ color: '#245A89', borderTop: '1px solid #F1F5F9' }}
                    >
                      {card.action}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} style={{ color: '#245A89' }} />
              <h3 className="text-lg font-semibold" style={{ color: '#1D2939' }}>Opportunities for You</h3>
            </div>
            <div className="space-y-3">
              {recommendations.map((rec, i) => {
                const Icon = rec.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E2E8F0',
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: rec.priority === 'high' ? '#EBF4FF' : '#FFF8EC' }}
                    >
                      <Icon size={16} style={{ color: rec.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-sm font-semibold" style={{ color: '#1D2939' }}>{rec.title}</p>
                        {rec.priority === 'high' && (
                          <span className="text-xs px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: '#FFF0F0', color: '#D9535F' }}>
                            High priority
                          </span>
                        )}
                      </div>
                      <p className="text-xs" style={{ color: '#667085' }}>{rec.desc}</p>
                    </div>
                    <Link
                      href="/assistant"
                      className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg flex-shrink-0 transition-colors"
                      style={{ backgroundColor: '#245A89', color: '#FFFFFF' }}
                    >
                      {rec.action} <ArrowRight size={11} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
