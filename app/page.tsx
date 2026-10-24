import Link from 'next/link';
import { Bot, DollarSign, Clock, Heart, BarChart3, Zap, CheckCircle, ArrowRight, Star, Plug, Sparkles, AlertCircle, TrendingUp, Wallet, CalendarDays, Send, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { IntegrationLogosBar } from './components/IntegrationLogos';

const LOGO_DEV_KEY = 'pk_YckjJfb2Rt2NPcvwfZu06g';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 60%, #347BB6 100%)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}>
              <Zap className="w-4 h-4" />
              AI-Powered Benefits Navigation
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-white leading-tight">
              Finally Understand Your
              <span className="block" style={{ color: '#8BC5FF' }}>Benefits — With AI</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              AI Benefits Agent connects to your existing HR tools — Justworks, Gusto, ADP, Rippling, and more — and gives you an AI assistant that helps you actually use your benefits, maximize your HSA, optimize your 401(k), and navigate time off without the confusion.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#5C9367' }}
              >
                Contact Sales
              </Link>
              <Link
                href="/login"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-all hover:scale-105 border-2"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                Log In
              </Link>
            </div>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Works with your existing HR platform · No switching required
            </p>
          </div>
        </div>
      </section>

      {/* Integration Logos Bar */}
      <IntegrationLogosBar />

      {/* Platform Preview Section — Dashboard */}
      <section style={{ backgroundColor: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}>
              <Sparkles className="w-3 h-3" />
              The Platform
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>Your AI Benefits Dashboard</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              A personalized home screen that shows your benefits at a glance and surfaces the opportunities you're missing.
            </p>
          </div>

          {/* Dashboard Mock */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border max-w-5xl mx-auto" style={{ borderColor: '#E2E8F0' }}>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#1D2939' }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D9535F' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D99A36' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5C9367' }} />
              <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center" style={{ backgroundColor: '#374151', color: '#9CA3AF' }}>
                app.aibenefitsagent.com/dashboard
              </div>
            </div>
            {/* App layout */}
            <div className="flex" style={{ backgroundColor: '#F5F8FC', minHeight: 480 }}>
              {/* Sidebar */}
              <div className="w-48 flex-shrink-0 flex flex-col" style={{ backgroundColor: '#FFFFFF', borderRight: '1px solid #E2E8F0' }}>
                <div className="px-3 py-3 border-b" style={{ borderColor: '#E2E8F0' }}>
                  <div className="text-xs font-bold" style={{ color: '#245A89' }}>AI Benefits</div>
                </div>
                <nav className="px-2 py-3 space-y-0.5 flex-1">
                  {[
                    { label: 'Home', active: true },
                    { label: 'AI Assistant', active: false },
                    { label: 'My Benefits', active: false },
                    { label: 'Recommendations', active: false },
                  ].map(item => (
                    <div key={item.label} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs" style={{
                      backgroundColor: item.active ? '#E8F2FC' : 'transparent',
                      color: item.active ? '#245A89' : '#667085',
                      fontWeight: item.active ? 600 : 400,
                    }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.active ? '#245A89' : '#CBD5E1' }} />
                      {item.label}
                    </div>
                  ))}
                  <div className="pt-2 pb-1">
                    <p className="px-2 text-xs font-semibold uppercase" style={{ color: '#CBD5E1', fontSize: 9 }}>Benefits</p>
                  </div>
                  {['Health Insurance', 'HSA & FSA', 'Retirement', 'Paid Time Off'].map(item => (
                    <div key={item} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs" style={{ color: '#94A3B8' }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#E2E8F0' }} />
                      {item}
                    </div>
                  ))}
                </nav>
                <div className="px-3 py-3 border-t" style={{ borderColor: '#E2E8F0' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: '#245A89' }}>A</div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#1D2939' }}>Alex J.</p>
                      <p className="text-xs" style={{ color: '#94A3B8', fontSize: 9 }}>Justworks</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-6 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#1D2939' }}>Good afternoon, Alex.</h3>
                    <p className="text-xs" style={{ color: '#667085' }}>What would you like to understand about your benefits?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#245A89' }}>A</div>
                </div>

                {/* AI Input */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl mb-5" style={{ backgroundColor: '#FFFFFF', border: '1.5px solid #E2E8F0' }}>
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: '#EBF4FF' }}>
                    <Bot size={12} style={{ color: '#245A89' }} />
                  </div>
                  <span className="text-xs flex-1" style={{ color: '#94A3B8' }}>Ask anything about your benefits...</span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-xs" style={{ backgroundColor: '#F0F9F2', color: '#5C9367' }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5C9367' }} />
                    Justworks
                  </div>
                </div>

                {/* Benefits cards */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Health Insurance', sub: 'HDHP — Justworks', status: 'Active', statusColor: '#5C9367', statusBg: '#F0F9F2', metric: '$340 / $1,500 deductible', pct: 23, color: '#D9535F', bg: '#FFF0F0' },
                    { label: 'HSA Account', sub: 'HSA via Justworks', status: 'Action needed', statusColor: '#D99A36', statusBg: '#FFF8EC', metric: '$1,200 / $4,150 contributed', pct: 29, color: '#245A89', bg: '#EBF4FF' },
                    { label: 'Retirement (401k)', sub: 'Fidelity via Justworks', status: 'Action needed', statusColor: '#D99A36', statusBg: '#FFF8EC', metric: '3% contribution · 4% match', pct: 75, color: '#5C9367', bg: '#F0F9F2' },
                    { label: 'Paid Time Off', sub: 'Justworks PTO Policy', status: 'Expiring soon', statusColor: '#D9535F', statusBg: '#FFF0F0', metric: '14.5 days · 4.5 expiring', pct: 60, color: '#D99A36', bg: '#FFF8EC' },
                  ].map((card) => (
                    <div key={card.label} className="rounded-xl p-3" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="text-xs font-semibold" style={{ color: '#1D2939' }}>{card.label}</p>
                          <p style={{ color: '#94A3B8', fontSize: 9 }}>{card.sub}</p>
                        </div>
                        <span className="text-xs px-1.5 py-0.5 rounded-full" style={{ backgroundColor: card.statusBg, color: card.statusColor, fontSize: 9 }}>{card.status}</span>
                      </div>
                      <p style={{ color: '#667085', fontSize: 10 }} className="mb-1.5">{card.metric}</p>
                      <div className="w-full h-1 rounded-full" style={{ backgroundColor: '#F1F5F9' }}>
                        <div className="h-1 rounded-full" style={{ width: `${card.pct}%`, backgroundColor: card.color }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendations */}
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles size={12} style={{ color: '#245A89' }} />
                    <p className="text-xs font-semibold" style={{ color: '#1D2939' }}>Opportunities for You</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { title: 'Capture Your Full 401(k) Match', desc: 'You\'re leaving $1,440/year on the table', priority: 'High priority' },
                      { title: 'Max Your HSA Contribution', desc: 'Save ~$1,180 more in taxes this year', priority: 'High priority' },
                    ].map((rec) => (
                      <div key={rec.title} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBF4FF' }}>
                          <TrendingUp size={10} style={{ color: '#245A89' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold truncate" style={{ color: '#1D2939' }}>{rec.title}</p>
                          <p style={{ color: '#667085', fontSize: 10 }}>{rec.desc}</p>
                        </div>
                        <span className="text-xs px-1.5 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: '#FFF0F0', color: '#D9535F', fontSize: 9 }}>{rec.priority}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Preview Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}>
                <Bot className="w-3 h-3" />
                AI Assistant
              </div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D2939' }}>
                Ask Anything About Your Benefits
              </h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                The AI reads your actual benefits data from your HR platform and gives you personalized, specific answers — not generic advice. Ask about your HSA, 401(k) match, PTO balance, health coverage, and more.
              </p>
              <div className="space-y-3">
                {[
                  '"How much should I contribute to my HSA this year?"',
                  '"Am I getting the full 401(k) match from my employer?"',
                  '"How many PTO days do I have left and when do they expire?"',
                  '"Should I choose the PPO or HDHP during open enrollment?"',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F5F8FC', border: '1px solid #E2E8F0' }}>
                    <span className="text-sm">💬</span>
                    <p className="text-sm italic" style={{ color: '#4B5563' }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Chat Mock */}
            <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E2E8F0' }}>
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ backgroundColor: '#1D2939' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D9535F' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D99A36' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5C9367' }} />
                <div className="flex-1 mx-3 px-3 py-0.5 rounded text-xs text-center" style={{ backgroundColor: '#374151', color: '#9CA3AF' }}>
                  app.aibenefitsagent.com/assistant
                </div>
              </div>
              {/* Chat header */}
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#245A89' }}>
                <Bot size={16} className="text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>● Justworks</span>
              </div>
              {/* Messages */}
              <div className="p-4 space-y-3" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="flex justify-end">
                  <div className="px-3 py-2 rounded-2xl rounded-tr-sm text-sm max-w-xs" style={{ backgroundColor: '#245A89', color: '#FFFFFF' }}>
                    Am I getting my full 401(k) match?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#245A89' }}>
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-sm max-w-xs" style={{ backgroundColor: '#F5F8FC', color: '#1D2939', border: '1px solid #E2E8F0' }}>
                    Not quite! You're contributing 3% but your employer matches up to 4%. You're leaving <strong>$1,440/year</strong> on the table.
                  </div>
                </div>
                {/* Structured card */}
                <div className="rounded-xl overflow-hidden border ml-9" style={{ borderColor: '#E2E8F0' }}>
                  <div className="px-3 py-2 flex items-center gap-2" style={{ backgroundColor: '#F0F9F2' }}>
                    <TrendingUp size={12} style={{ color: '#5C9367' }} />
                    <span className="text-xs font-semibold" style={{ color: '#5C9367' }}>Your 401(k) Overview</span>
                    <span className="ml-auto text-xs" style={{ color: '#94A3B8' }}>via Justworks</span>
                  </div>
                  <div className="px-3 py-2 grid grid-cols-2 gap-2" style={{ backgroundColor: '#FFFFFF' }}>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Your Rate</p><p className="text-sm font-bold" style={{ color: '#D99A36' }}>3%</p></div>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Match Rate</p><p className="text-sm font-bold" style={{ color: '#1D2939' }}>4%</p></div>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Missed Match</p><p className="text-sm font-bold" style={{ color: '#D9535F' }}>$1,440/yr</p></div>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Vesting</p><p className="text-sm font-bold" style={{ color: '#5C9367' }}>60%</p></div>
                  </div>
                  <div className="px-3 py-2" style={{ backgroundColor: '#EBF4FF' }}>
                    <p className="text-xs" style={{ color: '#245A89' }}>💡 Increasing to 4% costs ~$55/paycheck but earns $120 in match — a 118% instant return.</p>
                  </div>
                </div>
                {/* Input */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl mt-2" style={{ border: '1.5px solid #E2E8F0' }}>
                  <span className="text-xs flex-1" style={{ color: '#94A3B8' }}>Ask a follow-up...</span>
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: '#245A89' }}>
                    <Send size={10} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section style={{ backgroundColor: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1D2939' }}>Your AI Benefits Navigator</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              Connects to your HR platform and helps you get the most out of every benefit you have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wallet, title: 'HSA & FSA Optimization', desc: 'Know exactly how much to contribute, what\'s eligible, and how to invest your HSA for long-term tax-free growth.', features: ['Contribution limit guidance', 'Eligible expense lookup', 'Investment strategy advice', 'Tax savings calculator'], bg: '#F0F9F2', color: '#5C9367' },
              { icon: BarChart3, title: '401(k) & Retirement', desc: 'Make sure you\'re capturing every dollar of employer match and get AI guidance on contribution rates and fund selection.', features: ['Employer match maximization', 'Vesting schedule tracker', 'Contribution rate optimizer', 'Fund allocation guidance'], bg: '#EBF4FF', color: '#245A89' },
              { icon: Clock, title: 'Time Off Navigation', desc: 'Know your exact PTO balance, accrual rate, expiration dates, and company policies. Never lose unused days again.', features: ['Real-time PTO balance', 'Accrual & expiration alerts', 'Policy plain-language explainer', 'FMLA & leave guidance'], bg: '#FFF8EC', color: '#D99A36' },
              { icon: Heart, title: 'Health Insurance Guidance', desc: 'Understand what your plan actually covers, compare PPO vs HDHP in plain English, and get help during open enrollment.', features: ['Coverage explainer in plain English', 'PPO vs HDHP comparison', 'Open enrollment decision guide', 'Deductible & OOP tracker'], bg: '#FFF0F0', color: '#D9535F' },
              { icon: Plug, title: 'HR Platform Integrations', desc: 'Connect your existing HR tools in minutes. AI Benefits Agent reads your actual benefits data — no manual entry.', features: ['Justworks, Gusto, ADP, Rippling', 'BambooHR, Workday, Paychex', 'TriNet, Namely, Zenefits', 'More added regularly'], bg: '#EDE9FE', color: '#7C3AED' },
              { icon: Bot, title: '24/7 AI Benefits Assistant', desc: 'Ask anything about your benefits in plain English. Get instant, personalized answers based on your actual plan.', features: ['Personalized to your actual plan', 'Available 24/7, instant answers', 'No salespeople or upsells', 'Completely unbiased guidance'], bg: '#EBF4FF', color: '#347BB6' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl border hover:shadow-lg transition-all hover:-translate-y-1 bg-white" style={{ borderColor: '#E2E8F0' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.bg }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: '#1D2939' }}>{item.title}</h3>
                  <p className="text-sm mb-4" style={{ color: '#667085' }}>{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: '#667085' }}>
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#5C9367' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrations Deep Dive */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>Works With Your HR Platform</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              Connect in one click. No IT team required. No switching platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { name: 'Justworks', domain: 'justworks.com' },
              { name: 'Gusto', domain: 'gusto.com' },
              { name: 'ADP', domain: 'adp.com' },
              { name: 'Rippling', domain: 'rippling.com' },
              { name: 'BambooHR', domain: 'bamboohr.com' },
              { name: 'Workday', domain: 'workday.com' },
              { name: 'Paychex', domain: 'paychex.com' },
              { name: 'TriNet', domain: 'trinet.com' },
            ].map((tool) => (
              <div key={tool.name} className="flex items-center gap-3 p-4 rounded-xl border bg-white hover:shadow-md transition-all" style={{ borderColor: '#E2E8F0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://logo.clearbit.com/${tool.domain}`}
                  alt={`${tool.name} logo`}
                  width={28}
                  height={28}
                  className="rounded-md object-contain flex-shrink-0"
                  style={{ width: 28, height: 28 }}
                />
                <span className="text-sm font-semibold" style={{ color: '#1D2939' }}>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1D2939' }}>Employees Are Finally Using Their Benefits</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "I had no idea I was missing $2,400/year in 401(k) match. AI Benefits Agent caught it in 30 seconds. I updated my contribution that same day.", name: "Marcus T.", role: "Software Engineer · Justworks user" },
              { quote: "Open enrollment used to give me anxiety. I asked the AI to compare my PPO vs HDHP options and it gave me a clear recommendation based on my actual usage. Game changer.", name: "Priya K.", role: "Marketing Manager · Gusto user" },
              { quote: "I had 8 PTO days expiring at year end and didn't know. The AI flagged it and helped me plan time off before I lost them. Saved me a week of vacation.", name: "James R.", role: "Operations Lead · ADP user" },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border" style={{ borderColor: '#E2E8F0' }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" style={{ color: '#D99A36' }} />
                  ))}
                </div>
                <p className="mb-6 text-sm italic" style={{ color: '#4B5563' }}>"{t.quote}"</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1D2939' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#667085' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$1,800+', label: 'Average benefits left unclaimed per employee per year' },
              { value: '73%', label: 'Of employees don\'t fully understand their benefits package' },
              { value: '8+', label: 'HR platforms supported with more added every month' },
              { value: '4.9★', label: 'Average user rating from employees across all platforms' },
            ].map((stat) => (
              <div key={stat.value}>
                <p className="text-4xl font-bold mb-2" style={{ color: '#245A89' }}>{stat.value}</p>
                <p className="text-sm" style={{ color: '#667085' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bot className="w-14 h-14 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Stop Leaving Benefits on the Table
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Connect your HR platform and start getting personalized AI guidance on your HSA, 401(k), time off, health insurance, and more.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}
              >
                Contact Sales <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/login"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                Log In
              </Link>
            </div>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>Works with Justworks, Gusto, ADP, Rippling, BambooHR, Workday & more</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
