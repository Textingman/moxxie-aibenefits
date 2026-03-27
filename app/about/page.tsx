import Link from 'next/link';
import Image from 'next/image';
import { Bot, ShieldCheck, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              An AI Agent Built to Educate,<br />Not to Sell
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              AI Benefits Agent is an AI-powered platform that guides individuals through the benefits decision process with honest, unbiased education. We're not a benefits broker. We're your independent advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              The benefits industry is full of brokers and salespeople, but short on educators. Individuals are bombarded with confusing plan options, high-pressure tactics, and conflicting information — and most don't know who to trust.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We built an AI agent that acts as your personal benefits advisor — one that has no financial incentive to push you toward any particular plan or provider. It simply helps you understand your options and make the best decision for your situation.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Think of it as having a knowledgeable friend who happens to know everything about benefits — available 24/7, completely free, and always on your side.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Bot className="w-5 h-5" style={{ color: '#1F4E79' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>AI-Powered, Always Available</h3>
                  <p style={{ color: '#6B7280' }}>
                    Our AI agent is available 24/7 to answer your benefits questions instantly — no waiting, no appointments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#2F6FA3' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Zero Conflicts of Interest</h3>
                  <p style={{ color: '#6B7280' }}>
                    We receive no commissions or referral fees from benefits providers. Our AI's only job is to help you.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#5E8F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Education First</h3>
                  <p style={{ color: '#6B7280' }}>
                    We believe informed individuals make better decisions. Our AI educates before you ever talk to a broker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Covers Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>What Our AI Agent Covers</h2>
            <p className="text-xl" style={{ color: '#6B7280' }}>
              Comprehensive benefits education tailored to your situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Health Benefits</h3>
              <p style={{ color: '#6B7280' }}>
                How health insurance works, plan types, coverage details, and what to expect from enrollment.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Costs & Eligibility</h3>
              <p style={{ color: '#6B7280' }}>
                Premiums, deductibles, copays, subsidies, and eligibility requirements explained clearly.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }}>
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Enrollment Guidance</h3>
              <p style={{ color: '#6B7280' }}>
                How to navigate open enrollment, qualifying life events, and choosing the right plan for your needs.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Additional Benefits</h3>
              <p style={{ color: '#6B7280' }}>
                Dental, vision, life insurance, disability, retirement plans, and other supplemental benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Talk to Your AI Benefits Advisor?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Get instant, unbiased answers to all your benefits questions — completely free, with zero sales pressure.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}
          >
            Talk to the AI Agent — Free
          </Link>
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
