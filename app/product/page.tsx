import Link from 'next/link';
import { Bot, DollarSign, Clock, Heart, BarChart3, ShieldCheck, Zap, CheckCircle, ArrowRight, Plug, Bell, TrendingUp, Wallet, Sparkles, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IntegrationLogosBar } from '../components/IntegrationLogos';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 60%, #347BB6 100%)' }} className="py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: '#FFFFFF' }}>
            <Zap className="w-4 h-4" />
            AI Benefits Navigation Platform
          </div>
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl text-white leading-tight mb-6">
            Your AI Layer on Top of
            <span className="block" style={{ color: '#8BC5FF' }}>Any HR Platform</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: 'rgba(255,255,255,0.85)' }}>
            AI Benefits Agent doesn't replace Justworks, Gusto, ADP, or Rippling — it makes them more powerful. Connect your existing HR platform and get an AI that helps you actually understand and maximize every benefit you have.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#5C9367' }}>
              Contact Sales
            </Link>
            <Link href="/login" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              Log In
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Logos Bar */}
      <IntegrationLogosBar />

      {/* Platform Preview — Dashboard */}
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
            <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: '#1D2939' }}>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D9535F' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#D99A36' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#5C9367' }} />
              <div className="flex-1 mx-4 px-3 py-1 rounded text-xs text-center" style={{ backgroundColor: '#374151', color: '#9CA3AF' }}>
                app.aibenefitsagent.com/dashboard
              </div>
            </div>
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
                      { title: 'Capture Your Full 401(k) Match', desc: 'You\'re leaving $1,440/year on the table' },
                      { title: 'Max Your HSA Contribution', desc: 'Save ~$1,180 more in taxes this year' },
                    ].map((rec) => (
                      <div key={rec.title} className="flex items-center gap-3 px-3 py-2 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
                        <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#EBF4FF' }}>
                          <TrendingUp size={10} style={{ color: '#245A89' }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold truncate" style={{ color: '#1D2939' }}>{rec.title}</p>
                          <p style={{ color: '#667085', fontSize: 10 }}>{rec.desc}</p>
                        </div>
                        <span className="text-xs px-1.5 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: '#FFF0F0', color: '#D9535F', fontSize: 9 }}>High priority</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chat Preview */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}>
                <Bot className="w-3 h-3" />
                AI Assistant
              </div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1D2939' }}>
                Personalized AI Answers for Every Benefit
              </h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                The AI reads your actual benefits data from your HR platform and gives you specific, personalized answers — not generic advice. HSA optimization, 401(k) match gaps, PTO expiration alerts, open enrollment guidance, and more.
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
                    How much should I put in my HSA this year?
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#245A89' }}>
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-tl-sm text-sm max-w-xs" style={{ backgroundColor: '#F5F8FC', color: '#1D2939', border: '1px solid #E2E8F0' }}>
                    Based on your HDHP plan, you can contribute up to <strong>$4,150</strong>. You've contributed $1,200 so far — maxing it saves ~$1,180 in taxes.
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border ml-9" style={{ borderColor: '#E2E8F0' }}>
                  <div className="px-3 py-2 flex items-center gap-2" style={{ backgroundColor: '#EBF4FF' }}>
                    <Wallet size={12} style={{ color: '#245A89' }} />
                    <span className="text-xs font-semibold" style={{ color: '#245A89' }}>Your HSA Overview</span>
                    <span className="ml-auto text-xs" style={{ color: '#94A3B8' }}>via Justworks</span>
                  </div>
                  <div className="px-3 py-2 grid grid-cols-2 gap-2" style={{ backgroundColor: '#FFFFFF' }}>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>2026 Limit</p><p className="text-sm font-bold" style={{ color: '#1D2939' }}>$4,150</p></div>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Contributed</p><p className="text-sm font-bold" style={{ color: '#D99A36' }}>$1,200</p></div>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Remaining</p><p className="text-sm font-bold" style={{ color: '#5C9367' }}>$2,950</p></div>
                    <div><p className="text-xs" style={{ color: '#94A3B8' }}>Tax Savings</p><p className="text-sm font-bold" style={{ color: '#245A89' }}>~$1,180</p></div>
                  </div>
                  <div className="px-3 py-2" style={{ backgroundColor: '#EBF4FF' }}>
                    <p className="text-xs" style={{ color: '#245A89' }}>💡 Maxing your HSA saves $0.40 in taxes for every $1 contributed. Your balance also grows tax-free.</p>
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

      {/* HSA & FSA Module */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#F0F9F2' }}>
                <DollarSign className="w-7 h-7" style={{ color: '#5C9367' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>HSA & FSA Optimization</h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                Most employees contribute too little to their HSA, don't invest it, and don't know what's eligible. Our AI reads your actual plan data and gives you personalized guidance to maximize every dollar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Annual contribution limit alerts', 'Eligible expense lookup (IRS list)', 'HSA investment strategy guidance', 'Tax savings calculator', 'FSA deadline & rollover alerts', 'Dependent care FSA guidance', 'LPFSA vs HSA comparison', 'Receipt tracking reminders'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5C9367' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#245A89' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>HSA Analysis</span>
              </div>
              <div className="p-5 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F8FC' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#94A3B8' }}>YOUR HSA SUMMARY (via Justworks)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>2026 Contribution Limit</span><span className="font-bold" style={{ color: '#1D2939' }}>$4,150</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Your Current Contribution</span><span className="font-bold" style={{ color: '#D99A36' }}>$1,200</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Remaining Opportunity</span><span className="font-bold" style={{ color: '#5C9367' }}>$2,950</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: '#FFF8EC', borderColor: '#D99A36' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#92400E' }}>💡 AI Recommendation</p>
                  <p className="text-sm" style={{ color: '#78350F' }}>Maxing your HSA would save you ~$1,180 in federal taxes this year. Your HSA funds also grow tax-free — consider investing the balance above your 3-month emergency fund.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 401k Module */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#245A89' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>401(k) Analysis</span>
              </div>
              <div className="p-5 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F8FC' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#94A3B8' }}>YOUR 401(k) SUMMARY (via Gusto)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Your Contribution Rate</span><span className="font-bold" style={{ color: '#D99A36' }}>3%</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Employer Match (up to)</span><span className="font-bold" style={{ color: '#1D2939' }}>4%</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Match You're Missing</span><span className="font-bold" style={{ color: '#D9535F' }}>1% = $1,440/yr</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Vesting Status</span><span className="font-bold" style={{ color: '#5C9367' }}>60% vested</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: '#FFF0F0', borderColor: '#D9535F' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#991B1B' }}>⚠️ You're Leaving Free Money Behind</p>
                  <p className="text-sm" style={{ color: '#7F1D1D' }}>Increasing your contribution from 3% to 4% costs you ~$55/paycheck but earns you $120 in employer match — a 118% instant return.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#EBF4FF' }}>
                <BarChart3 className="w-7 h-7" style={{ color: '#245A89' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>401(k) & Retirement Guidance</h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                Most employees don't capture their full employer match — that's free money left on the table. Our AI reads your actual 401(k) data and tells you exactly what to do to maximize it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Employer match gap detection', 'Vesting schedule tracker', 'Contribution rate optimizer', 'Fund allocation guidance', 'Roth vs Traditional comparison', 'Annual limit alerts ($23,500)', 'Catch-up contribution reminders', 'Rollover guidance'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5C9367' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Off Module */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#FFF8EC' }}>
                <Clock className="w-7 h-7" style={{ color: '#D99A36' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>Time Off Navigation</h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                PTO policies are confusing — accrual rates, carryover limits, expiration dates, blackout periods. Our AI reads your company's actual policy and gives you a plain-English breakdown of exactly where you stand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Real-time PTO balance', 'Accrual rate calculator', 'Expiration date alerts', 'Carryover limit tracker', 'Policy plain-language explainer', 'FMLA eligibility checker', 'Parental leave guidance', 'Sick vs PTO policy clarity'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5C9367' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#245A89' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>PTO Analysis</span>
              </div>
              <div className="p-5 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F5F8FC' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#94A3B8' }}>YOUR PTO SUMMARY (via BambooHR)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Available PTO</span><span className="font-bold" style={{ color: '#1D2939' }}>14.5 days</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Accruing per month</span><span className="font-bold" style={{ color: '#1D2939' }}>1.25 days</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Carryover limit</span><span className="font-bold" style={{ color: '#D99A36' }}>10 days max</span></div>
                    <div className="flex justify-between text-sm"><span style={{ color: '#667085' }}>Days expiring Dec 31</span><span className="font-bold" style={{ color: '#D9535F' }}>4.5 days ⚠️</span></div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: '#FFF8EC', borderColor: '#D99A36' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#92400E' }}>⏰ Action Required Before Dec 31</p>
                  <p className="text-sm" style={{ color: '#78350F' }}>You'll lose 4.5 PTO days at year end due to your company's 10-day carryover limit. That's ~$1,100 in lost compensation. You have 9 weeks left.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Module */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E2E8F0' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#245A89' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>Open Enrollment</span>
              </div>
              <div className="p-5 space-y-3" style={{ backgroundColor: '#FFFFFF' }}>
                <p className="text-sm font-semibold" style={{ color: '#1D2939' }}>PPO vs HDHP — Which is right for you?</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border" style={{ borderColor: '#E2E8F0' }}>
                    <p className="text-xs font-bold mb-2" style={{ color: '#245A89' }}>PPO Plan</p>
                    <div className="space-y-1 text-xs" style={{ color: '#667085' }}>
                      <p>Premium: $280/mo</p><p>Deductible: $500</p><p>OOP Max: $3,000</p><p>HSA eligible: ❌</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl border-2" style={{ borderColor: '#5C9367' }}>
                    <p className="text-xs font-bold mb-2" style={{ color: '#5C9367' }}>HDHP + HSA ✓</p>
                    <div className="space-y-1 text-xs" style={{ color: '#667085' }}>
                      <p>Premium: $140/mo</p><p>Deductible: $1,500</p><p>OOP Max: $5,000</p><p>HSA eligible: ✅</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-xl" style={{ backgroundColor: '#F0F9F2' }}>
                  <p className="text-xs font-semibold" style={{ color: '#166534' }}>🤖 AI Recommendation for You</p>
                  <p className="text-xs mt-1" style={{ color: '#14532D' }}>Based on your low medical usage last year (2 visits), the HDHP saves you $1,680/year in premiums. Max your HSA and save an additional $1,180 in taxes. Net advantage: <strong>$2,860/year</strong> vs the PPO.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#FFF0F0' }}>
                <Heart className="w-7 h-7" style={{ color: '#D9535F' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>Health Insurance Guidance</h2>
              <p className="text-lg mb-6" style={{ color: '#667085' }}>
                Open enrollment is one of the most important financial decisions you make each year — and most people just pick what they had before. Our AI analyzes your actual usage and helps you choose the right plan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['PPO vs HDHP comparison', 'Open enrollment decision guide', 'Coverage explained in plain English', 'Deductible & OOP tracker', 'In-network provider lookup', 'Prescription drug coverage check', 'Dependent coverage guidance', 'COBRA vs marketplace comparison'].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5C9367' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Alerts */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FFF8EC' }}>
              <Bell className="w-7 h-7" style={{ color: '#D99A36' }} />
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1D2939' }}>Proactive Benefits Alerts</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#667085' }}>
              Don't wait until it's too late. Our AI monitors your benefits and alerts you before deadlines, expirations, and missed opportunities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: '⏰', title: 'PTO Expiration Alert', desc: 'You have 4.5 PTO days expiring Dec 31. That\'s ~$1,100 in lost compensation. Here\'s how to use them.', urgency: 'high' },
              { emoji: '💰', title: '401(k) Match Gap', desc: 'You\'re contributing 3% but your employer matches up to 4%. You\'re leaving $1,440/year on the table.', urgency: 'high' },
              { emoji: '🏥', title: 'Open Enrollment Opens', desc: 'Your open enrollment window opens in 14 days. Based on your usage, I recommend switching to the HDHP.', urgency: 'medium' },
              { emoji: '💳', title: 'FSA Deadline Approaching', desc: 'Your FSA has $340 remaining with a use-it-or-lose-it deadline of Dec 31. Here are eligible expenses.', urgency: 'high' },
              { emoji: '📈', title: 'HSA Investment Opportunity', desc: 'Your HSA balance ($3,200) exceeds your 3-month medical fund. Consider investing the excess for tax-free growth.', urgency: 'medium' },
              { emoji: '🎯', title: 'Vesting Milestone', desc: 'You\'ll reach 75% vesting in your 401(k) employer match in 47 days. Consider your options before then.', urgency: 'low' },
            ].map((alert, i) => (
              <div key={i} className="p-5 rounded-xl border" style={{
                borderColor: alert.urgency === 'high' ? '#FCA5A5' : alert.urgency === 'medium' ? '#FCD34D' : '#E2E8F0',
                backgroundColor: alert.urgency === 'high' ? '#FFF5F5' : alert.urgency === 'medium' ? '#FFFBEB' : '#F5F8FC'
              }}>
                <div className="text-2xl mb-3">{alert.emoji}</div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#1D2939' }}>{alert.title}</h3>
                <p className="text-xs" style={{ color: '#667085' }}>{alert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-14 h-14 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Connect Your HR Platform Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Works with Justworks, Gusto, ADP, Rippling, BambooHR, Workday, Paychex, TriNet, and more. Set up in 3 minutes.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>
              Contact Sales <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/login" className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              Log In
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
