import Link from 'next/link';
import { Bot, DollarSign, Clock, Heart, BarChart3, ShieldCheck, Zap, CheckCircle, ArrowRight, Plug, Bell, TrendingUp, Wallet, Sparkles, Send } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { IntegrationLogosBar, IntegrationLogoGrid } from '../components/IntegrationLogos';

const LOGO_DEV_KEY = 'pk_YckjJfb2Rt2NPcvwfZu06g';

export default function ProductPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: '#F8FAFC' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
            <Zap className="w-4 h-4" />
            AI Benefits Navigation Platform
          </div>
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
            Your AI Layer on Top of<br />Any HR Platform
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10" style={{ color: '#6B7280' }}>
            AI Benefits Agent doesn't replace Justworks, Gusto, ADP, or Rippling — it makes them more powerful. Connect your existing HR platform and get an AI that helps you actually understand and maximize every benefit you have.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/signup" className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#1F4E79' }}>
              Connect Your Benefits — Free
            </Link>
            <Link href="/contact" className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105" style={{ color: '#1F4E79', borderColor: '#1F4E79' }}>
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E5E7EB' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold mb-6" style={{ color: '#9CA3AF' }}>CONNECTS TO YOUR EXISTING HR PLATFORM</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: 'Justworks', color: '#1F4E79', desc: 'Full integration' },
              { name: 'Gusto', color: '#F97316', desc: 'Full integration' },
              { name: 'ADP', color: '#DC2626', desc: 'Full integration' },
              { name: 'Rippling', color: '#7C3AED', desc: 'Full integration' },
              { name: 'BambooHR', color: '#5E8F5E', desc: 'Full integration' },
              { name: 'Workday', color: '#0EA5E9', desc: 'Full integration' },
              { name: 'Paychex', color: '#1F2937', desc: 'Full integration' },
              { name: 'TriNet', color: '#2563EB', desc: 'Full integration' },
              { name: 'Zenefits', color: '#D97706', desc: 'Coming soon' },
              { name: 'Namely', color: '#6B7280', desc: 'Coming soon' },
            ].map(tool => (
              <div key={tool.name} className="text-center">
                <div className="px-5 py-2.5 rounded-lg border font-bold text-sm mb-1" style={{ borderColor: '#E5E7EB', color: tool.color, backgroundColor: '#FFFFFF' }}>
                  {tool.name}
                </div>
                <p className="text-xs" style={{ color: '#9CA3AF' }}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSA & FSA Module */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#dcfce7' }}>
                <DollarSign className="w-7 h-7" style={{ color: '#5E8F5E' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>HSA & FSA Optimization</h2>
              <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
                Most employees contribute too little to their HSA, don't invest it, and don't know what's eligible. Our AI reads your actual plan data and gives you personalized guidance to maximize every dollar.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Annual contribution limit alerts',
                  'Eligible expense lookup (IRS list)',
                  'HSA investment strategy guidance',
                  'Tax savings calculator',
                  'FSA deadline & rollover alerts',
                  'Dependent care FSA guidance',
                  'LPFSA vs HSA comparison',
                  'Receipt tracking reminders',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5E8F5E' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E5E7EB' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#1F4E79' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>HSA Analysis</span>
              </div>
              <div className="p-5 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F8FAFC' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#9CA3AF' }}>YOUR HSA SUMMARY (via Justworks)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>2026 Contribution Limit</span>
                      <span className="font-bold" style={{ color: '#1F2937' }}>$4,150</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Your Current Contribution</span>
                      <span className="font-bold" style={{ color: '#D97706' }}>$1,200</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Remaining Opportunity</span>
                      <span className="font-bold" style={{ color: '#5E8F5E' }}>$2,950</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: '#FEF3C7', borderColor: '#D97706' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#92400E' }}>💡 AI Recommendation</p>
                  <p className="text-sm" style={{ color: '#78350F' }}>Maxing your HSA would save you ~$1,180 in federal taxes this year. At your tax bracket, that's $0.40 saved for every $1 contributed. Your HSA funds also grow tax-free — consider investing the balance above your 3-month emergency fund.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 401k Module */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E5E7EB' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#1F4E79' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>401(k) Analysis</span>
              </div>
              <div className="p-5 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F8FAFC' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#9CA3AF' }}>YOUR 401(k) SUMMARY (via Gusto)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Your Contribution Rate</span>
                      <span className="font-bold" style={{ color: '#D97706' }}>3%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Employer Match (up to)</span>
                      <span className="font-bold" style={{ color: '#1F2937' }}>4%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Match You're Missing</span>
                      <span className="font-bold" style={{ color: '#DC2626' }}>1% = $1,440/yr</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Vesting Status</span>
                      <span className="font-bold" style={{ color: '#5E8F5E' }}>60% vested</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: '#FEE2E2', borderColor: '#DC2626' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#991B1B' }}>⚠️ You're Leaving Free Money Behind</p>
                  <p className="text-sm" style={{ color: '#7F1D1D' }}>Increasing your contribution from 3% to 4% costs you ~$55/paycheck but earns you $120 in employer match. That's a 118% instant return. Want step-by-step instructions to update this in Gusto?</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#DBEAFE' }}>
                <BarChart3 className="w-7 h-7" style={{ color: '#1F4E79' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>401(k) & Retirement Guidance</h2>
              <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
                Most employees don't capture their full employer match — that's free money left on the table. Our AI reads your actual 401(k) data and tells you exactly what to do to maximize it.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Employer match gap detection',
                  'Vesting schedule tracker',
                  'Contribution rate optimizer',
                  'Fund allocation guidance',
                  'Roth vs Traditional comparison',
                  'Annual limit alerts ($23,500)',
                  'Catch-up contribution reminders',
                  'Rollover guidance',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5E8F5E' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Off Module */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#FEF3C7' }}>
                <Clock className="w-7 h-7" style={{ color: '#D97706' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>Time Off Navigation</h2>
              <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
                PTO policies are confusing — accrual rates, carryover limits, expiration dates, blackout periods. Our AI reads your company's actual policy and gives you a plain-English breakdown of exactly where you stand.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Real-time PTO balance',
                  'Accrual rate calculator',
                  'Expiration date alerts',
                  'Carryover limit tracker',
                  'Policy plain-language explainer',
                  'FMLA eligibility checker',
                  'Parental leave guidance',
                  'Sick vs PTO policy clarity',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5E8F5E' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E5E7EB' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#1F4E79' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>PTO Analysis</span>
              </div>
              <div className="p-5 space-y-4" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#F8FAFC' }}>
                  <p className="text-xs font-semibold mb-2" style={{ color: '#9CA3AF' }}>YOUR PTO SUMMARY (via BambooHR)</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Available PTO</span>
                      <span className="font-bold" style={{ color: '#1F2937' }}>14.5 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Accruing per month</span>
                      <span className="font-bold" style={{ color: '#1F2937' }}>1.25 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Carryover limit</span>
                      <span className="font-bold" style={{ color: '#D97706' }}>10 days max</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span style={{ color: '#6B7280' }}>Days expiring Dec 31</span>
                      <span className="font-bold" style={{ color: '#DC2626' }}>4.5 days ⚠️</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl border-l-4" style={{ backgroundColor: '#FEF3C7', borderColor: '#D97706' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#92400E' }}>⏰ Action Required Before Dec 31</p>
                  <p className="text-sm" style={{ color: '#78350F' }}>You'll lose 4.5 PTO days at year end due to your company's 10-day carryover limit. That's ~$1,100 in lost compensation at your salary. You have 9 weeks left — want me to suggest some time off windows that work around your team's schedule?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Insurance Module */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 rounded-2xl border overflow-hidden shadow-lg" style={{ borderColor: '#E5E7EB' }}>
              <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: '#1F4E79' }}>
                <Bot className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">AI Benefits Agent</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>Open Enrollment</span>
              </div>
              <div className="p-5 space-y-3" style={{ backgroundColor: '#FFFFFF' }}>
                <p className="text-sm font-semibold" style={{ color: '#1F2937' }}>PPO vs HDHP — Which is right for you?</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
                    <p className="text-xs font-bold mb-2" style={{ color: '#1F4E79' }}>PPO Plan</p>
                    <div className="space-y-1 text-xs" style={{ color: '#6B7280' }}>
                      <p>Premium: $280/mo</p>
                      <p>Deductible: $500</p>
                      <p>OOP Max: $3,000</p>
                      <p>HSA eligible: ❌</p>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl border-2" style={{ borderColor: '#5E8F5E' }}>
                    <p className="text-xs font-bold mb-2" style={{ color: '#5E8F5E' }}>HDHP + HSA ✓</p>
                    <div className="space-y-1 text-xs" style={{ color: '#6B7280' }}>
                      <p>Premium: $140/mo</p>
                      <p>Deductible: $1,500</p>
                      <p>OOP Max: $5,000</p>
                      <p>HSA eligible: ✅</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-xl" style={{ backgroundColor: '#dcfce7' }}>
                  <p className="text-xs font-semibold" style={{ color: '#166534' }}>🤖 AI Recommendation for You</p>
                  <p className="text-xs mt-1" style={{ color: '#14532D' }}>Based on your low medical usage last year (2 visits), the HDHP saves you $1,680/year in premiums. Max your HSA and you'll save an additional $1,180 in taxes. Net advantage: <strong>$2,860/year</strong> vs the PPO.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#FEE2E2' }}>
                <Heart className="w-7 h-7" style={{ color: '#DC2626' }} />
              </div>
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>Health Insurance Guidance</h2>
              <p className="text-lg mb-6" style={{ color: '#6B7280' }}>
                Open enrollment is one of the most important financial decisions you make each year — and most people just pick what they had before. Our AI analyzes your actual usage and helps you choose the right plan.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'PPO vs HDHP comparison',
                  'Open enrollment decision guide',
                  'Coverage explained in plain English',
                  'Deductible & OOP tracker',
                  'In-network provider lookup',
                  'Prescription drug coverage check',
                  'Dependent coverage guidance',
                  'COBRA vs marketplace comparison',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5E8F5E' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proactive Alerts */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FEF3C7' }}>
              <Bell className="w-7 h-7" style={{ color: '#D97706' }} />
            </div>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>Proactive Benefits Alerts</h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
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
                borderColor: alert.urgency === 'high' ? '#FCA5A5' : alert.urgency === 'medium' ? '#FCD34D' : '#E5E7EB',
                backgroundColor: alert.urgency === 'high' ? '#FFF5F5' : alert.urgency === 'medium' ? '#FFFBEB' : '#F8FAFC'
              }}>
                <div className="text-2xl mb-3">{alert.emoji}</div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: '#1F2937' }}>{alert.title}</h3>
                <p className="text-xs" style={{ color: '#6B7280' }}>{alert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Connect Your HR Platform Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Works with Justworks, Gusto, ADP, Rippling, BambooHR, Workday, Paychex, TriNet, and more. Set up in 3 minutes.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
