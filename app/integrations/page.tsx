'use client';

import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';
import {
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Plus,
  ExternalLink,
  Shield,
  Database,
  Clock,
} from 'lucide-react';

const connectedPlatforms = [
  {
    name: 'Justworks',
    status: 'connected',
    lastSync: '2 minutes ago',
    color: '#245A89',
    initial: 'J',
    dataCategories: ['Health Insurance', 'HSA', '401(k)', 'PTO Balance', 'Pay Stubs', 'Benefits Enrollment'],
    description: 'Full HR platform integration — payroll, benefits, and time off.',
  },
];

const availablePlatforms = [
  { name: 'Gusto', color: '#F97316', initial: 'G', description: 'Payroll, benefits, and HR for small businesses.' },
  { name: 'ADP', color: '#DC2626', initial: 'A', description: 'Enterprise HR, payroll, and benefits management.' },
  { name: 'Rippling', color: '#7C3AED', initial: 'R', description: 'Unified HR, IT, and finance platform.' },
  { name: 'BambooHR', color: '#5C9367', initial: 'B', description: 'HR software for small and medium businesses.' },
  { name: 'Workday', color: '#0EA5E9', initial: 'W', description: 'Enterprise cloud applications for finance and HR.' },
  { name: 'Paychex', color: '#1D2939', initial: 'P', description: 'Payroll, HR, and benefits for businesses of all sizes.' },
  { name: 'TriNet', color: '#2563EB', initial: 'T', description: 'HR solutions for small and medium businesses.' },
  { name: 'Zenefits', color: '#D99A36', initial: 'Z', description: 'HR, benefits, and payroll software.' },
];

const dataCategories = [
  { icon: Shield, label: 'Health Insurance', desc: 'Plan type, coverage details, deductible, OOP max, premium' },
  { icon: Database, label: 'HSA / FSA', desc: 'Balance, contribution rate, annual limit, eligible expenses' },
  { icon: Database, label: '401(k) & Retirement', desc: 'Contribution rate, employer match, vesting schedule, fund allocation' },
  { icon: Clock, label: 'Paid Time Off', desc: 'Available balance, accrual rate, carryover limit, expiration dates' },
];

export default function IntegrationsPage() {
  return (
    <div style={{ backgroundColor: '#F5F8FC', minHeight: '100vh' }}>
      <Sidebar />
      <AppHeader title="Connected Platforms" subtitle="Manage your HR platform connections" />

      <main style={{ marginLeft: '248px', paddingTop: '64px' }}>
        <div className="max-w-4xl mx-auto px-8 py-10">

          {/* Connected Platforms */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4" style={{ color: '#1D2939' }}>Connected</h2>
            <div className="space-y-4">
              {connectedPlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-xl p-6"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: platform.color }}
                      >
                        {platform.initial}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold" style={{ color: '#1D2939' }}>{platform.name}</h3>
                          <span
                            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
                            style={{ backgroundColor: '#F0F9F2', color: '#5C9367' }}
                          >
                            <CheckCircle size={10} />
                            Connected
                          </span>
                        </div>
                        <p className="text-sm mt-0.5" style={{ color: '#667085' }}>{platform.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-colors hover:bg-gray-50"
                        style={{ borderColor: '#E2E8F0', color: '#667085' }}
                      >
                        <RefreshCw size={12} />
                        Sync now
                      </button>
                      <button
                        className="text-xs px-3 py-1.5 rounded-lg border transition-colors hover:bg-gray-50"
                        style={{ borderColor: '#E2E8F0', color: '#667085' }}
                      >
                        Manage
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-xs" style={{ color: '#94A3B8' }}>
                    <Clock size={12} />
                    Last synced {platform.lastSync}
                  </div>

                  <div>
                    <p className="text-xs font-medium mb-2" style={{ color: '#94A3B8' }}>DATA ACCESSED</p>
                    <div className="flex flex-wrap gap-2">
                      {platform.dataCategories.map((cat) => (
                        <span
                          key={cat}
                          className="text-xs px-2.5 py-1 rounded-lg"
                          style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <div
            className="rounded-xl p-5 mb-10 flex items-start gap-3"
            style={{ backgroundColor: '#EBF4FF', border: '1px solid #C3DEFF' }}
          >
            <Shield size={18} style={{ color: '#245A89', flexShrink: 0, marginTop: 2 }} />
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: '#245A89' }}>Your data is private and secure</p>
              <p className="text-xs" style={{ color: '#347BB6' }}>
                AI Benefits Agent reads your benefits data in read-only mode to provide personalized guidance. We never modify your HR data, share it with third parties, or use it for advertising. Your data is encrypted in transit and at rest. You can disconnect any platform at any time.
              </p>
            </div>
          </div>

          {/* What Data We Access */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-4" style={{ color: '#1D2939' }}>What We Access & Why</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dataCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.label}
                    className="rounded-xl p-4 flex items-start gap-3"
                    style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#EBF4FF' }}
                    >
                      <Icon size={14} style={{ color: '#245A89' }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-0.5" style={{ color: '#1D2939' }}>{cat.label}</p>
                      <p className="text-xs" style={{ color: '#667085' }}>{cat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Available Platforms */}
          <div>
            <h2 className="text-lg font-semibold mb-2" style={{ color: '#1D2939' }}>Add Another Platform</h2>
            <p className="text-sm mb-4" style={{ color: '#667085' }}>
              Connect additional HR platforms to get a complete view of your benefits.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {availablePlatforms.map((platform) => (
                <div
                  key={platform.name}
                  className="rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all hover:shadow-md"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ backgroundColor: platform.color }}
                  >
                    {platform.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold" style={{ color: '#1D2939' }}>{platform.name}</p>
                    <p className="text-xs truncate" style={{ color: '#94A3B8' }}>{platform.description}</p>
                  </div>
                  <button
                    className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg font-medium flex-shrink-0 transition-colors"
                    style={{ backgroundColor: '#EBF4FF', color: '#245A89' }}
                  >
                    <Plus size={12} />
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
