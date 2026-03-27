import Link from 'next/link';
import Image from 'next/image';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
              <Bot className="w-4 h-4" />
              Powered by AI — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#1F4E79' }}>for Benefits Education</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI benefits advisor. Ask anything about your benefits — coverage, costs, enrollment, eligibility — and get honest, unbiased answers instantly. No salespeople. No pressure. Just clarity.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#5E8F5E' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#1F4E79', borderColor: '#1F4E79', backgroundColor: '#FFFFFF' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              A knowledgeable benefits expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Bot className="w-8 h-8" style={{ color: '#1F4E79' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Answers Your Benefits Questions
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "What does my health plan cover?", "Am I eligible for this benefit?", "How do I enroll?" — and get clear, honest answers in seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#2F6FA3' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Educates You Step by Step
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI walks you through every aspect of your benefits — from understanding your coverage options to navigating enrollment periods — so you're never in the dark.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#5E8F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Helps You Maximize Your Benefits
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI identifies benefits you may be missing, explains your options clearly, and tells you exactly what steps to take to get the most out of your coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Agent Helps You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to understanding and maximizing your benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#1F4E79' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI About Your Situation</h3>
              <p style={{ color: '#6B7280' }}>
                Share your benefits questions, coverage needs, and goals. The AI instantly tailors its guidance to your specific situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#2F6FA3' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Education</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains your benefits options, eligibility requirements, enrollment steps, and what to expect — all in plain language you can actually understand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#5E8F5E' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Make a Confident Decision</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with unbiased knowledge, you can confidently navigate your benefits, enroll in the right plans, and make the most of what's available to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Ask the AI Anything About Your Benefits</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Here's a taste of what our AI agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What benefits am I eligible for?", a: "Eligibility depends on your employment status, location, and plan type. I can walk you through a personalized analysis based on your specific situation to identify all the benefits available to you..." },
              { q: "How do I enroll in my health insurance?", a: "Enrollment typically happens during open enrollment periods or after a qualifying life event. I can guide you step-by-step through the process, explain your plan options, and help you choose the right coverage for your needs..." },
              { q: "What's the difference between an HMO and a PPO?", a: "An HMO requires you to use in-network providers and get referrals for specialists, while a PPO gives you more flexibility to see any doctor without a referral. Here's how to decide which is right for you..." },
              { q: "Can you help me understand my benefits package?", a: "Absolutely. Share the key details — health, dental, vision, retirement, and any other benefits — and I'll explain what each one means, what it covers, and how to make the most of your package..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#F5F7FA' }}>
                  <span className="text-lg">👤</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1F4E79' }} />
                  <p style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Bot className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Benefits Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased answers to all your benefits questions. No sales calls. No pressure. Just an AI that's 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}
              >
                Talk to the AI Agent — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#1F2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">AI Benefits Agent</h3>
              <p style={{ color: '#9CA3AF' }}>
                Your AI agent for unbiased benefits education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Talk to AI
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" style={{ color: '#9CA3AF' }} className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p style={{ color: '#9CA3AF' }}>
                support@aibenefitsagent.com
              </p>
              <p className="mt-2" style={{ color: '#9CA3AF' }}>
                United States
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #374151', color: '#9CA3AF' }}>
            <p>&copy; 2025 AI Benefits Agent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
