'use client';

import { Bell, Search } from 'lucide-react';

interface AppHeaderProps {
  title: string;
  subtitle?: string;
}

export default function AppHeader({ title, subtitle }: AppHeaderProps) {
  return (
    <header
      className="fixed top-0 right-0 flex items-center justify-between px-6 z-30"
      style={{
        left: '248px',
        height: '64px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <div>
        <h1 className="text-lg font-semibold" style={{ color: '#1D2939' }}>{title}</h1>
        {subtitle && <p className="text-xs" style={{ color: '#667085' }}>{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <button
          className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          style={{ border: '1px solid #E2E8F0' }}
          aria-label="Notifications"
        >
          <Bell size={16} style={{ color: '#667085' }} />
          <span
            className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
            style={{ backgroundColor: '#D9535F' }}
          />
        </button>

        {/* User Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-semibold cursor-pointer"
          style={{ backgroundColor: '#245A89' }}
        >
          A
        </div>
      </div>
    </header>
  );
}
