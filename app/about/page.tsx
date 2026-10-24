import Link from 'next/link';
import { Bot, ShieldCheck, Zap, DollarSign, Heart, Clock, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F8FAFC' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
              <Bot className="w-4 h-4" />
              AI Benefits Navigation
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              We Help Employees Actually<br />Use Their Benefits
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              AI Benefits Agent is an AI-powered benefits navigation tool that connects to your existing HR platform — Justworks, Gusto, ADP, Rippling, and more — and helps you understand, optimize, and maximize every benefit you have.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>The Problem We're Solving</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              Companies spend thousands of dollars per employee on benefits packages — health insurance, HSAs, 401(k) matching, PTO, dental, vision, life insurance. But most employees don't fully understand what they have, let alone how to maximize it.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              The average employee leaves <strong style={{ color: '#1F2937' }}>$1,800+ in benefits value on the table every year</strong>. Not because they don't care — but because benefits are genuinely confusing, and there's no one to ask at 10pm when you're trying to figure out if you should switch to the HDHP.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              HR platforms like Justworks, Gusto, and ADP are great at administering benefits. But they're not built to educate employees or give personalized guidance. That's the gap we fill.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <h3 className="font-bold text-lg mb-6" style={{ color: '#1F2937' }}>What employees struggle with:</h3>
            <div className="space-y-4">
              {[
                { emoji: '❓', text: '"Should I choose the PPO or HDHP? I don\'t know the difference."' },
                { emoji: '💸', text: '"Am I getting my full 401(k) match? I\'m not sure what I\'m contributing."' },
                { emoji: '⏰', text: '"How many PTO days do I have? When do they expire?"' },
                { emoji: '🏦', text: '"What can I actually spend my HSA on? Is this expense eligible?"' },
                { emoji: '📋', text: '"Open enrollment is in 2 weeks and I have no idea what to pick."' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F8FAFC' }}>
                  <span>{item.emoji}</span>
                  <p className="text-sm italic" style={{ color: '#4B5563' }}>{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-semibold" style={{ color: '#1F4E79' }}>AI Benefits Agent answers all of these — instantly, for free.</p>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section style={{ backgroundColor: '#F8FAFC' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>We're Not Another HR Platform</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              We work alongside your existing tools — not instead of them.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <Bot className="w-6 h-6" style={{ color: '#1F4E79' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>AI-Powered, Personalized</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                Our AI reads your actual benefits data from your HR platform and gives you personalized guidance — not generic advice. Your HSA limit, your 401(k) match, your PTO balance.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#dcfce7' }}>
                <ShieldCheck className="w-6 h-6" style={{ color: '#5E8F5E' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>100% Unbiased</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                We don't sell benefits. We don't earn commissions. We have zero financial incentive to push you toward any particular plan or provider. Our only job is to help you.
              </p>
            </div>
            <div className="p-6 rounded-2xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FEF3C7' }}>
                <Zap className="w-6 h-6" style={{ color: '#D97706' }} />
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>Works With What You Have</h3>
              <p className="text-sm" style={{ color: '#6B7280' }}>
                No switching platforms. No convincing your HR team. Just connect your existing Justworks, Gusto, ADP, or Rippling account and start getting answers in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>What AI Benefits Agent Covers</h2>
            <p className="text-xl" style={{ color: '#6B7280' }}>
              Every benefit you have — explained, optimized, and monitored by AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <DollarSign className="w-6 h-6" style={{ color: '#5E8F5E' }} />, bg: '#dcfce7', title: 'HSA & FSA', desc: 'Contribution limits, eligible expenses, investment strategy, tax savings, and deadline alerts.' },
              { icon: <BarChart3 className="w-6 h-6" style={{ color: '#1F4E79' }} />, bg: '#DBEAFE', title: '401(k) & Retirement', desc: 'Employer match maximization, vesting schedules, contribution optimization, and fund guidance.' },
              { icon: <Clock className="w-6 h-6" style={{ color: '#D97706' }} />, bg: '#FEF3C7', title: 'Time Off & PTO', desc: 'Real-time balances, accrual rates, expiration alerts, carryover limits, and FMLA guidance.' },
              { icon: <Heart className="w-6 h-6" style={{ color: '#DC2626' }} />, bg: '#FEE2E2', title: 'Health Insurance', desc: 'PPO vs HDHP comparison, open enrollment guidance, coverage explanations, and deductible tracking.' },
              { icon: <ShieldCheck className="w-6 h-6" style={{ color: '#7C3AED' }} />, bg: '#EDE9FE', title: 'Dental & Vision', desc: 'Coverage details, in-network providers, annual maximums, and when to use your benefits.' },
              { icon: <Bot className="w-6 h-6" style={{ color: '#2F6FA3' }} />, bg: '#DBEAFE', title: 'Life & Disability', desc: 'Coverage amounts, beneficiary guidance, supplemental insurance decisions, and claims support.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl border bg-white hover:shadow-lg transition-all" style={{ borderColor: '#E5E7EB' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: item.bg }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Platforms */}
      <section style={{ backgroundColor: '#F8FAFC' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>Works With Your HR Platform</h2>
            <p className="text-xl" style={{ color: '#6B7280' }}>
              Connect in one click. No IT team required.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: 'Justworks', color: '#1F4E79', features: ['Benefits data', 'PTO balance', 'Health plans', '401(k) info'] },
              { name: 'Gusto', color: '#F97316', features: ['Benefits data', 'PTO balance', 'Health plans', '401(k) info'] },
              { name: 'ADP', color: '#DC2626', features: ['Benefits data', 'PTO balance', 'Health plans', '401(k) info'] },
              { name: 'Rippling', color: '#7C3AED', features: ['Benefits data', 'PTO balance', 'Health plans', '401(k) info'] },
            ].map(platform => (
              <div key={platform.name} className="p-5 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
                <p className="font-bold text-lg mb-3" style={{ color: platform.color }}>{platform.name}</p>
                <ul className="space-y-1">
                  {platform.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#6B7280' }}>
                      <CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color: '#5E8F5E' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: '#9CA3AF' }}>Also supports BambooHR, Workday, Paychex, TriNet, and more</p>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>Our Principles</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { emoji: '🎯', title: 'Personalized, Not Generic', desc: 'Your benefits are unique. Our AI reads your actual plan data and gives you advice specific to your situation.' },
              { emoji: '🔒', title: 'Privacy First', desc: 'We read your benefits data to help you. We never sell it, share it, or use it for anything else.' },
              { emoji: '💚', title: 'Always Unbiased', desc: 'No commissions. No upsells. No salespeople. Just honest AI guidance that\'s 100% on your side.' },
              { emoji: '⚡', title: 'Instant Answers', desc: 'Benefits questions shouldn\'t require a call to HR. Get answers in seconds, any time of day.' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
                <div className="text-4xl mb-4">{v.emoji}</div>
                <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>{v.title}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop Leaving Benefits on the Table
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Connect your HR platform and start getting personalized AI guidance on your HSA, 401(k), time off, health insurance, and more — in minutes.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
              style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}
            >
              Connect Your Benefits — Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105"
              style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              Book a Demo
            </Link>
          </div>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Works with Justworks, Gusto, ADP, Rippling, BambooHR, Workday & more</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
