'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock, Eye, EyeOff, Bot, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#F5F8FC' }}>
      {/* Left Panel — Collateral */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12"
        style={{ background: 'linear-gradient(135deg, #1D4B75 0%, #245A89 60%, #347BB6 100%)' }}
      >
        {/* Logo at top */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/ai-logo.png"
              alt="AI Benefits Agent"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <Image
              src="/new-logo.png"
              alt="AI Benefits Agent"
              width={200}
              height={50}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
        </div>

        {/* Center content */}
        <div className="space-y-6">
          {/* Headline */}
          <div>
            <h2 className="text-3xl font-bold text-white leading-tight mb-3">
              Your employees are leaving money on the table.
            </h2>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.8)' }}>
              AI Benefits Agent helps every employee maximize their HSA, 401(k), PTO, and health coverage — connected to your existing HR platform.
            </p>
          </div>

          {/* Benefit highlights */}
          <div className="space-y-3">
            {[
              { icon: TrendingUp, color: '#5C9367', bg: 'rgba(92,147,103,0.2)', text: 'Capture full 401(k) employer match — avg $1,440/year recovered' },
              { icon: DollarSign, color: '#D99A36', bg: 'rgba(217,154,54,0.2)', text: 'Maximize HSA contributions — save ~$1,180 in taxes per employee' },
              { icon: Clock, color: '#8BC5FF', bg: 'rgba(139,197,255,0.2)', text: 'PTO expiration alerts — stop employees from losing vacation days' },
              { icon: CheckCircle, color: '#A78BFA', bg: 'rgba(167,139,250,0.2)', text: 'Open enrollment guidance — right plan, right coverage, every time' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: item.bg }}>
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>{item.text}</p>
                </div>
              );
            })}
          </div>

          {/* Mock chat preview */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="px-4 py-2.5 flex items-center gap-2" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <Bot size={14} className="text-white" />
              <span className="text-white font-semibold text-xs">AI Benefits Agent</span>
              <span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: '#5C9367', color: '#FFFFFF' }}>● Justworks</span>
            </div>
            <div className="p-4 space-y-2.5" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="flex justify-end">
                <div className="px-3 py-2 rounded-xl rounded-tr-sm text-xs max-w-xs" style={{ backgroundColor: '#245A89', color: '#FFFFFF' }}>
                  Am I getting my full 401(k) match?
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#245A89' }}>
                  <Bot size={12} className="text-white" />
                </div>
                <div className="px-3 py-2 rounded-xl rounded-tl-sm text-xs" style={{ backgroundColor: '#F5F8FC', color: '#1D2939', border: '1px solid #E2E8F0' }}>
                  Not quite! You're contributing 3% but your employer matches up to 4%. You're leaving <strong>$1,440/year</strong> on the table.
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border" style={{ borderColor: '#E2E8F0' }}>
                <div className="px-3 py-1.5 flex items-center gap-2" style={{ backgroundColor: '#F0F9F2' }}>
                  <span className="text-xs font-semibold" style={{ color: '#5C9367' }}>Your 401(k) Overview</span>
                  <span className="ml-auto text-xs" style={{ color: '#94A3B8' }}>via Justworks</span>
                </div>
                <div className="px-3 py-2 grid grid-cols-2 gap-2" style={{ backgroundColor: '#FFFFFF' }}>
                  <div><p className="text-xs" style={{ color: '#94A3B8' }}>Your Rate</p><p className="text-sm font-bold" style={{ color: '#D99A36' }}>3%</p></div>
                  <div><p className="text-xs" style={{ color: '#94A3B8' }}>Match Rate</p><p className="text-sm font-bold" style={{ color: '#1D2939' }}>4%</p></div>
                  <div><p className="text-xs" style={{ color: '#94A3B8' }}>Missed Match</p><p className="text-sm font-bold" style={{ color: '#D9535F' }}>$1,440/yr</p></div>
                  <div><p className="text-xs" style={{ color: '#94A3B8' }}>Vesting</p><p className="text-sm font-bold" style={{ color: '#5C9367' }}>60%</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex gap-6 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/ai-logo.png"
                alt="AI Benefits Agent"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <Image
                src="/new-logo.png"
                alt="AI Benefits Agent"
                width={160}
                height={44}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-1" style={{ color: '#1D2939' }}>Welcome back</h1>
            <p style={{ color: '#667085' }}>Sign in to your AI Benefits Agent account</p>
          </div>

          <div className="rounded-2xl p-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: '#1D2939' }}>
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={16} style={{ color: '#94A3B8' }} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="block w-full pl-10 pr-3 py-2.5 rounded-lg text-sm outline-none"
                    style={{
                      border: '1px solid #E2E8F0',
                      color: '#1D2939',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-sm font-medium" style={{ color: '#1D2939' }}>
                    Password
                  </label>
                  <Link href="/contact" className="text-xs font-medium" style={{ color: '#245A89' }}>
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={16} style={{ color: '#94A3B8' }} />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-10 pr-10 py-2.5 rounded-lg text-sm outline-none"
                    style={{
                      border: '1px solid #E2E8F0',
                      color: '#1D2939',
                      backgroundColor: '#FFFFFF',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword
                      ? <EyeOff size={16} style={{ color: '#94A3B8' }} />
                      : <Eye size={16} style={{ color: '#94A3B8' }} />
                    }
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#245A89' }}
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 pt-6" style={{ borderTop: '1px solid #F1F5F9' }}>
              <p className="text-center text-sm" style={{ color: '#667085' }}>
                Don't have an account?{' '}
                <Link href="/contact" className="font-semibold" style={{ color: '#245A89' }}>
                  Contact Sales
                </Link>
              </p>
            </div>
          </div>

          <p className="text-center text-xs mt-6" style={{ color: '#94A3B8' }}>
            By signing in, you agree to our{' '}
            <Link href="/terms" style={{ color: '#667085' }}>Terms of Service</Link>
            {' '}and{' '}
            <Link href="/privacy" style={{ color: '#667085' }}>Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
