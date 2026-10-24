import Link from 'next/link';
import { CheckCircle, ArrowRight, Bot } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ backgroundColor: '#F8FAFC' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
            No hidden fees. No long-term contracts. Pay only for what you use. Start free for 30 days — no credit card required.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-8 rounded-2xl border shadow-md" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>Starter</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>Perfect for small teams getting started with HR automation</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold" style={{ color: '#1F4E79' }}>$49</span>
                <span className="text-sm ml-2" style={{ color: '#6B7280' }}>/month</span>
                <p className="text-sm mt-1" style={{ color: '#6B7280' }}>+ $6 per employee/month</p>
              </div>
              <Link href="/signup" className="block text-center py-3 px-6 rounded-lg font-semibold mb-8 transition-opacity hover:opacity-90" style={{ backgroundColor: '#F3F4F6', color: '#1F2937' }}>
                Start Free Trial
              </Link>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9CA3AF' }}>What's included</p>
                {[
                  'Payroll (up to 10 employees)',
                  'Direct deposit',
                  'Federal & state tax filing',
                  'Basic benefits administration',
                  'Time off tracking',
                  'Employee self-service portal',
                  'Standard reporting',
                  'Email support',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#4B5563' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#5E8F5E' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Professional - Highlighted */}
            <div className="p-8 rounded-2xl shadow-2xl relative" style={{ backgroundColor: '#1F4E79', border: '2px solid #1F4E79' }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>MOST POPULAR</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Professional</h3>
              <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>For growing businesses that need the full suite</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold" style={{ color: '#93C5FD' }}>$149</span>
                <span className="text-sm ml-2" style={{ color: 'rgba(255,255,255,0.7)' }}>/month</span>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>+ $8 per employee/month</p>
              </div>
              <Link href="/signup" className="block text-center py-3 px-6 rounded-lg font-semibold mb-8 transition-opacity hover:opacity-90" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>
                Start Free Trial
              </Link>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>Everything in Starter, plus</p>
                {[
                  'Unlimited employees',
                  'Full benefits administration',
                  'Health, dental & vision plans',
                  '401(k) & retirement plans',
                  'Time tracking & scheduling',
                  'HR compliance monitoring',
                  'Digital onboarding & I-9s',
                  'AI assistant & smart reporting',
                  'Multi-state payroll',
                  'Priority phone & email support',
                ].map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#93C5FD' }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border shadow-md" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>Enterprise</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>For large organizations with complex, custom needs</p>
              <div className="mb-6">
                <span className="text-5xl font-extrabold" style={{ color: '#1F4E79' }}>Custom</span>
                <p className="text-sm mt-1" style={{ color: '#6B7280' }}>Tailored to your organization</p>
              </div>
              <Link href="/contact" className="block text-center py-3 px-6 rounded-lg font-semibold mb-8 transition-opacity hover:opacity-90 border-2" style={{ color: '#1F4E79', borderColor: '#1F4E79', backgroundColor: '#FFFFFF' }}>
                Contact Sales
              </Link>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9CA3AF' }}>Everything in Professional, plus</p>
                {[
                  'Dedicated account manager',
                  'Custom integrations & API access',
                  'Advanced analytics & BI exports',
                  'Custom workflows & approvals',
                  'SSO & advanced security',
                  'SLA guarantee (99.9% uptime)',
                  'White-glove onboarding',
                  'Quarterly business reviews',
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

      {/* Feature Comparison Table */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1F2937' }}>Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                  <th className="text-left py-4 pr-8 text-sm font-semibold" style={{ color: '#6B7280' }}>Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold" style={{ color: '#1F2937' }}>Starter</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold" style={{ color: '#1F4E79' }}>Professional</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold" style={{ color: '#1F2937' }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Payroll processing', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Direct deposit', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Tax filing (federal & state)', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Employee count', starter: 'Up to 10', pro: 'Unlimited', enterprise: 'Unlimited' },
                  { feature: 'Benefits administration', starter: 'Basic', pro: 'Full', enterprise: 'Full + Custom' },
                  { feature: 'Health, dental & vision', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: '401(k) & retirement', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Time tracking', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Time off management', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'HR compliance monitoring', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Digital onboarding', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'AI assistant', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Multi-state payroll', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Custom integrations', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'Dedicated account manager', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'SLA guarantee', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
                ].map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: '1px solid #F3F4F6', backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#F8FAFC' }}>
                    <td className="py-3 pr-8 text-sm" style={{ color: '#4B5563' }}>{row.feature}</td>
                    <td className="py-3 px-4 text-center text-sm" style={{ color: row.starter === '—' ? '#D1D5DB' : '#4B5563' }}>{row.starter}</td>
                    <td className="py-3 px-4 text-center text-sm font-medium" style={{ color: row.pro === '—' ? '#D1D5DB' : '#1F4E79' }}>{row.pro}</td>
                    <td className="py-3 px-4 text-center text-sm" style={{ color: row.enterprise === '—' ? '#D1D5DB' : '#4B5563' }}>{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1F2937' }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Is there really no credit card required for the trial?', a: 'Correct. You can start your 30-day free trial with just your email address. No credit card needed until you decide to continue.' },
              { q: 'Can I change plans at any time?', a: 'Yes. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.' },
              { q: 'What counts as an "employee" for billing?', a: 'Any active employee on your payroll counts. Contractors paid via 1099 are billed separately at a flat rate per payment run.' },
              { q: 'Do you handle multi-state payroll?', a: 'Yes, on the Professional and Enterprise plans. We handle payroll tax calculations and filings for all 50 states.' },
              { q: 'Is my data secure?', a: 'Absolutely. We use bank-level 256-bit encryption, SOC 2 Type II compliance, and regular security audits to protect your data.' },
              { q: 'Can I migrate from my current payroll provider?', a: 'Yes. Our team provides free migration assistance for all plans. We\'ll import your employee data, payroll history, and benefits information.' },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl border" style={{ borderColor: '#E5E7EB' }}>
                <h3 className="font-bold mb-2" style={{ color: '#1F2937' }}>{faq.q}</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-14 h-14 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Free 30-Day Trial</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            No credit card required. Full access to all Professional features for 30 days.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105" style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}>
              Get Started Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/contact" className="inline-block px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all hover:scale-105" style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.6)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
