import Link from 'next/link';
import Image from 'next/image';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/SolarSolutions.png" 
                  alt="TrySolarSolutions" 
                  width={500} 
                  height={167}
                  className="h-32 w-auto"
                  priority
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" style={{ color: '#1E6FA8' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" style={{ color: '#6B7280' }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#F59E0B' }}>
                  Talk to Our AI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#FEF3C7', color: '#F59E0B' }}>
              <Bot className="w-4 h-4" />
              Powered by AI — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#F59E0B' }}>for Solar Education</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI solar advisor. Ask anything about solar — panels, costs, incentives, installers — and get honest, unbiased answers instantly. No salespeople. No pressure. Just clarity.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#F59E0B' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#2F8FCB', borderColor: '#2F8FCB', backgroundColor: '#FFFFFF' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              A knowledgeable solar expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <Bot className="w-8 h-8" style={{ color: '#F59E0B' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Answers Your Solar Questions
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "Is solar worth it for my home?", "What's a fair price per watt?", "Should I lease or buy?" — and get clear, honest answers in seconds.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#2F8FCB' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Educates You Step by Step
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI walks you through every aspect of going solar — from understanding your energy bill to evaluating installer quotes — so you're never in the dark.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#F59E0B' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Protects You from Bad Deals
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI flags red flags in solar contracts, identifies overpriced quotes, and tells you exactly what questions to ask before signing anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Agent Helps You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to becoming a confident, informed solar buyer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#F59E0B' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI About Your Home</h3>
              <p style={{ color: '#6B7280' }}>
                Share your location, energy usage, and goals. The AI instantly tailors its guidance to your specific situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#2F8FCB' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Education</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains your solar options, estimated costs, available incentives, and what to expect — all in plain language you can actually understand.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#F59E0B' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Make a Confident Decision</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with unbiased knowledge, you can confidently evaluate installer quotes, negotiate better deals, and choose the right solar solution for your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Ask the AI Anything About Solar</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Here's a taste of what our AI agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is solar actually worth it for my home?", a: "It depends on your energy usage, roof orientation, local utility rates, and available incentives. I can walk you through a personalized analysis based on your specific situation..." },
              { q: "What's a fair price for a solar installation?", a: "In 2025, the average cost is $2.50–$3.50 per watt before incentives. For a typical 8kW system, that's $20,000–$28,000 before the 30% federal tax credit, bringing it to $14,000–$19,600..." },
              { q: "Should I lease solar panels or buy them?", a: "Buying gives you full ownership, higher long-term savings, and access to tax credits. Leasing has lower upfront costs but you won't own the system or qualify for incentives. Here's how to decide..." },
              { q: "Can you review my current solar contract?", a: "Absolutely. Share the key terms — system size, price per watt, warranty length, escalator clauses, and buyout options — and I'll flag anything unusual, explain what it means, and tell you what to negotiate before signing..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#FEF3C7' }}>
                  <span className="text-lg">🏠</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#F59E0B' }} />
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
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #2F8FCB 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Bot className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Solar Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased answers to all your solar questions. No sales calls. No pressure. Just an AI that's 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#F59E0B' }}
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
              <h3 className="text-xl font-bold mb-4">TrySolarSolutions</h3>
              <p style={{ color: '#9CA3AF' }}>
                Your AI agent for unbiased solar education.
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
                support@trysolarsolutions.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #374151', color: '#9CA3AF' }}>
            <p>&copy; 2025 TrySolarSolutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
