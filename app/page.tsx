import Link from 'next/link';
import { Bot, DollarSign, Clock, Heart, BarChart3, Zap, CheckCircle, ArrowRight, Plug, Sparkles, TrendingUp, Wallet, Send, Users, ShieldCheck, BarChart2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { IntegrationLogosBar } from './components/IntegrationLogos';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section — Targeted at HR Teams */}
      <section style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 60%, #347BB6 100%)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}>
              <Zap className="w-4 h-4" />
              The AI Benefits Tool Your Employees Actually Need
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-white leading-tight">
              Give Your Employees an AI
              <span className="block" style={{ color: '#8BC5FF' }}>Benefits Advisor</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Your team has great benefits — but most employees don't use them. AI Benefits Agent connects to your existing HR platform and gives every employee a personal AI advisor that helps them maximize their HSA, 401(k), PTO, and health coverage.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#5C9367' }}
              >
                Talk to Sales
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
              Works with Justworks, Gusto, ADP, Rippling & more · No switching required
            </p>
          </div>
        </div>
      </section>

      {/* Integration Logos Bar */}
      <IntegrationLogosBar />

      {/* The Problem — HR Perspective */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#FFF0F0', color: '#D9535F' }}>
                The Problem
              </div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D2939' }}>
                You Offer Great Benefits.<br />Your Employees Don't Use Them.
              </h2>
              <p className="text-lg mb-4" style={{ color: '#667085' }}>
                The average employee leaves <strong style={{ color: '#1D2939' }}>$1,800+ in benefits value on the table</strong> every year. Not because they don't care — but because benefits are genuinely confusing, and HR teams can't personally advise every employee.
              </p>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                Employees don't know how much to put in their HSA. They miss their full 401(k) match. They lose PTO at year end. They pick the wrong health plan during open enrollment. And they don't ask HR because they don't want to seem uninformed.
              </p>
              <div className="space-y-3">
                {[
                  { stat: '73%', label: 'of employees don\'t fully understand their benefits package' },
                  { stat: '$1,800+', label: 'in benefits value left unclaimed per employee per year' },
                  { stat: '60%', label: 'of employees pick the same health plan every year without comparing' },
                ].map((item) => (
                  <div key={item.stat} className="flex items-center gap-4 p-3 rounded-lg" style={{ backgroundColor: '#F5F8FC', border: '1px solid #E2E8F0' }}>
                    <span className="text-xl font-bold flex-shrink-0" style={{ color: '#245A89' }}>{item.stat}</span>
                    <p className="text-sm" style={{ color: '#4B5563' }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#F0F9F2', color: '#5C9367' }}>
                The Solution
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1D2939' }}>Give Every Employee a Personal AI Benefits Advisor</h3>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                AI Benefits Agent connects to your existing HR platform and gives each employee an AI that knows their actual benefits — their specific plan, their HSA balance, their 401(k) match, their PTO balance — and helps them make the most of it.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Bot size={18} style={{ color: '#245A89' }} />, bg: '#EBF4FF', title: 'Available 24/7', desc: 'Employees get answers at 10pm before open enrollment, not just during business hours.' },
                  { icon: <ShieldCheck size={18} style={{ color: '#5C9367' }} />, bg: '#F0F9F2', title: 'Completely Unbiased', desc: 'No commissions, no upsells. Just honest guidance that helps employees make better decisions.' },
                  { icon: <Users size={18} style={{ color: '#D99A36' }} />, bg: '#FFF8EC', title: 'Scales to Every Employee', desc: 'One AI advisor for your entire workforce — from new hires to 20-year veterans.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border" style={{ borderColor: '#E2E8F0' }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.bg }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5" style={{ color: '#1D2939' }}>{item.title}</p>
                      <p className="text-xs" style={{ color: '#667085' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preview Section — Dashboard */}
      <section style={{ backgroundColor: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}>
              <Sparkles className="w-3 h-3" />
              What Your Employees See
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>A Personal Benefits Dashboard for Every Employee</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              Each employee gets a personalized view of their benefits — with AI-powered alerts when they're leaving money on the table.
            </p>
          </div>

          {/* Dashboard Mock */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border max-w-5xl mx-auto" style={{ borderColor: '#E2E8F0' }}>
            <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#1D2939' }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D9535F' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D99A36' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5C9367' }} />
              <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center" style={{ backgroundColor: '#374151', color: '#9CA3AF' }}>
                app.aibenefitsagent.com/dashboard
              </div>
            </div>
            <div className="flex" style={{ backgroundColor: '#F5F8FC', minHeight: 480 }}>
              <div className="w-48 flex-shrink-0 flex flex-col" style={{ backgroundColor: '#FFFFFF', borderRight: '1px solid #E2E8F0' }}>
                <div className="px-3 py-3 border-b" style={{ borderColor: '#E2E8F0' }}>
                  <div className="text-xs font-bold" style={{ color: '#245A89' }}>AI Benefits</div>
                </div>
                <nav className="px-2 py-3 space-y-0.5 flex-1">
                  {[{ label: 'Home', active: true }, { label: 'AI Assistant', active: false }, { label: 'My Benefits', active: false }, { label: 'Recommendations', active: false }].map(item => (
                    <div key={item.label} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs" style={{ backgroundColor: item.active ? '#E8F2FC' : 'transparent', color: item.active ? '#245A89' : '#667085', fontWeight: item.active ? 600 : 400 }}>
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.active ? '#245A89' : '#CBD5E1' }} />
                      {item.label}
                    </div>
                  ))}
                  <div className="pt-2 pb-1"><p className="px-2 text-xs font-semibold uppercase" style={{ color: '#CBD5E1', fontSize: 9 }}>Benefits</p></div>
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
              <div className="flex-1 p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: '#1D2939' }}>Good afternoon, Alex.</h3>
                    <p className="text-xs" style={{ color: '#667085' }}>What would you like to understand about your benefits?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: '#245A89' }}>A</div>
                </div>
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
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'Health Insurance', sub: 'HDHP — Justworks', status: 'Active', statusColor: '#5C9367', statusBg: '#F0F9F2', metric: '$340 / $1,500 deductible', pct: 23, color: '#D9535F' },
                    { label: 'HSA Account', sub: 'HSA via Justworks', status: 'Action needed', statusColor: '#D99A36', statusBg: '#FFF8EC', metric: '$1,200 / $4,150 contributed', pct: 29, color: '#245A89' },
                    { label: 'Retirement (401k)', sub: 'Fidelity via Justworks', status: 'Action needed', statusColor: '#D99A36', statusBg: '#FFF8EC', metric: '3% contribution · 4% match', pct: 75, color: '#5C9367' },
                    { label: 'Paid Time Off', sub: 'Justworks PTO Policy', status: 'Expiring soon', statusColor: '#D9535F', statusBg: '#FFF0F0', metric: '14.5 days · 4.5 expiring', pct: 60, color: '#D99A36' },
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

      {/* AI Chat Preview — HR Framing */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}>
                <Bot className="w-3 h-3" />
                The AI Your Employees Will Actually Use
              </div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D2939' }}>
                Answers the Questions Employees Are Afraid to Ask HR
              </h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                Employees have benefits questions — but they don't always feel comfortable asking HR. AI Benefits Agent gives them a private, judgment-free advisor available 24/7 that knows their actual plan details.
              </p>
              <div className="space-y-3">
                {[
                  '"How much should I contribute to my HSA this year?"',
                  '"Am I getting the full 401(k) match from my employer?"',
                  '"How many PTO days do I have left and when do they expire?"',
                  '"Should I choose the PPO or HDHP during open enrollment?"',
                  '"What does my health plan actually cover for this procedure?"',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: '#F5F8FC', border: '1px solid #E2E8F0' }}>
                    <span className="text-sm">💬</span>
                    <p className="text-sm italic" style={{ color: '#4B5563' }}>{q}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border" style={{ borderColor: '#E2E8F0' }}>
              <div className="flex items-center gap-2 px-4 py-2.5" style={{ backgroundColor: '#1D2939' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D9535F' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#D99A36' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#5C9367' }} />
                <div className="flex-1 mx-3 px-3 py-0.5 rounded text-xs text-center" style={{ backgroundColor: '#374151', color: '#9CA3AF' }}>
                  app.aibenefitsagent.com/assistant
                </div>
              </div>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#245A89' }}>
                <Bot size={16} className="text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>● Justworks</span>
              </div>
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

      {/* Why HR Teams Choose AI Benefits Agent */}
      <section style={{ backgroundColor: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1D2939' }}>Why HR Teams Add AI Benefits Agent</h2>
            <p className="mt-4 text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              Reduce benefits-related HR tickets, improve employee satisfaction, and help your team get more value from the benefits you already offer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wallet, title: 'HSA & FSA Guidance', desc: 'Employees learn how much to contribute, what\'s eligible, and how to invest their HSA for tax-free growth.', features: ['Contribution limit guidance', 'Eligible expense lookup', 'Investment strategy advice', 'Tax savings calculator'], bg: '#F0F9F2', color: '#5C9367' },
              { icon: BarChart3, title: '401(k) Optimization', desc: 'Every employee captures their full employer match and understands their vesting schedule and fund options.', features: ['Employer match maximization', 'Vesting schedule tracker', 'Contribution rate optimizer', 'Fund allocation guidance'], bg: '#EBF4FF', color: '#245A89' },
              { icon: Clock, title: 'PTO & Leave Navigation', desc: 'Employees know their exact balance, accrual rate, and expiration dates — reducing year-end PTO scrambles.', features: ['Real-time PTO balance', 'Accrual & expiration alerts', 'Policy plain-language explainer', 'FMLA & leave guidance'], bg: '#FFF8EC', color: '#D99A36' },
              { icon: Heart, title: 'Open Enrollment Support', desc: 'Employees make informed health plan decisions based on their actual usage — reducing costly plan mismatches.', features: ['PPO vs HDHP comparison', 'Open enrollment decision guide', 'Coverage explained in plain English', 'Deductible & OOP tracker'], bg: '#FFF0F0', color: '#D9535F' },
              { icon: Plug, title: 'Works With Your Stack', desc: 'No new HR platform needed. AI Benefits Agent connects to what you already use in minutes.', features: ['Justworks, Gusto, ADP, Rippling', 'BambooHR, Workday, Paychex', 'TriNet, Namely, Zenefits', 'More added regularly'], bg: '#EDE9FE', color: '#7C3AED' },
              { icon: Bot, title: 'Reduces HR Ticket Volume', desc: 'Employees get instant answers to common benefits questions — freeing your HR team for higher-value work.', features: ['24/7 availability for employees', 'Personalized to each employee\'s plan', 'No salespeople or upsells', 'Completely unbiased guidance'], bg: '#EBF4FF', color: '#347BB6' },
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

      {/* How It Works for HR */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1D2939' }}>Simple to Deploy, Powerful for Employees</h2>
            <p className="mt-4 text-xl" style={{ color: '#667085' }}>
              HR teams set it up once. Employees use it forever.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: '#245A89' }}>1</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1D2939' }}>Connect Your HR Platform</h3>
              <p style={{ color: '#667085' }}>HR connects your Justworks, Gusto, ADP, or Rippling account in minutes. We securely read your benefits data — no manual setup needed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: '#347BB6' }}>2</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1D2939' }}>Invite Your Employees</h3>
              <p style={{ color: '#667085' }}>Send employees a link. Each person gets a personalized dashboard showing their actual benefits — HSA, 401(k), PTO, health plan — with AI-powered guidance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: '#5C9367' }}>3</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1D2939' }}>Employees Maximize Their Benefits</h3>
              <p style={{ color: '#667085' }}>Employees ask questions, get proactive alerts, and make smarter benefits decisions — without calling HR. You see the impact in engagement and retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ backgroundColor: '#F5F8FC' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>Works With Your HR Platform</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              No switching platforms. No IT project. Connect in one click.
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
                  src={`https://img.logo.dev/${tool.domain}?token=pk_YckjJfb2Rt2NPcvwfZu06g&size=40&format=png`}
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

      {/* Stats */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$1,800+', label: 'Average benefits value left unclaimed per employee per year' },
              { value: '73%', label: 'Of employees don\'t fully understand their benefits package' },
              { value: '8+', label: 'HR platforms supported with more added every month' },
              { value: '4.9★', label: 'Average employee rating across all platforms' },
            ].map((stat) => (
              <div key={stat.value}>
                <p className="text-4xl font-bold mb-2" style={{ color: '#245A89' }}>{stat.value}</p>
                <p className="text-sm" style={{ color: '#667085' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — HR Focused */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bot className="w-14 h-14 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Help Your Employees Get More From Their Benefits
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
              You've invested in great benefits. AI Benefits Agent makes sure your employees actually use them — maximizing HSA contributions, capturing 401(k) matches, and navigating open enrollment with confidence.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105"
                style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}
              >
                Talk to Sales <ArrowRight className="w-5 h-5" />
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
