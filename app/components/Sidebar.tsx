'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Home,
  Bot,
  LayoutDashboard,
  Sparkles,
  Heart,
  Wallet,
  TrendingUp,
  CalendarDays,
  Plug,
  FileText,
  Settings,
  ChevronRight,
} from 'lucide-react';

const navSections = [
  {
    label: 'Main',
    items: [
      { href: '/dashboard', icon: Home, label: 'Home' },
      { href: '/assistant', icon: Bot, label: 'AI Assistant' },
      { href: '/benefits', icon: LayoutDashboard, label: 'My Benefits' },
      { href: '/recommendations', icon: Sparkles, label: 'Recommendations' },
    ],
  },
  {
    label: 'Benefits',
    items: [
      { href: '/benefits/health', icon: Heart, label: 'Health Insurance' },
      { href: '/benefits/hsa', icon: Wallet, label: 'HSA & FSA' },
      { href: '/benefits/retirement', icon: TrendingUp, label: 'Retirement' },
      { href: '/benefits/pto', icon: CalendarDays, label: 'Paid Time Off' },
    ],
  },
  {
    label: 'Account',
    items: [
      { href: '/integrations', icon: Plug, label: 'Connected Platforms' },
      { href: '/documents', icon: FileText, label: 'Documents' },
      { href: '/settings', icon: Settings, label: 'Settings' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <aside
      className="fixed left-0 top-0 h-full flex flex-col z-40"
      style={{
        width: '248px',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
      }}
    >
      {/* Logo */}
      <div className="flex items-center px-4 py-4" style={{ height: '64px', borderBottom: '1px solid #E2E8F0' }}>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/new-logo.png"
            alt="AI Benefits Agent"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navSections.map((section) => (
          <div key={section.label}>
            <p
              className="px-3 mb-1 text-xs font-semibold uppercase tracking-wider"
              style={{ color: '#94A3B8', letterSpacing: '0.08em' }}
            >
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 rounded-lg text-sm font-medium"
                      style={{
                        height: '40px',
                        backgroundColor: active ? '#E8F2FC' : 'transparent',
                        color: active ? '#245A89' : '#667085',
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      <Icon
                        size={18}
                        style={{ color: active ? '#245A89' : '#94A3B8', flexShrink: 0 }}
                      />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div
        className="px-3 py-4"
        style={{ borderTop: '1px solid #E2E8F0' }}
      >
        <div
          className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
            style={{ backgroundColor: '#245A89' }}
          >
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate" style={{ color: '#1D2939' }}>Alex Johnson</p>
            <p className="text-xs truncate" style={{ color: '#667085' }}>Connected: Justworks</p>
          </div>
          <ChevronRight size={14} style={{ color: '#94A3B8', flexShrink: 0 }} />
        </div>
      </div>
    </aside>
  );
}
