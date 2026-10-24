'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12" style={{ backgroundColor: '#F5F8FC' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link href="/">
            <Image
              src="/new-logo.png"
              alt="AI Benefits Agent"
              width={200}
              height={55}
              className="h-10 w-auto mx-auto"
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
  );
}
