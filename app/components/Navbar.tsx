'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#245A89' : '#667085';

  return (
    <nav className="bg-white sticky top-0 z-50" style={{ borderBottom: '1px solid #E2E8F0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/ai-logo.png"
                alt="AI Benefits Agent"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/product" style={{ color: linkColor('/product') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Product
              </Link>
              <Link href="/pricing" style={{ color: linkColor('/pricing') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/contact" style={{ color: linkColor('/contact') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <div className="ml-4 flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium border-2 transition-opacity hover:opacity-80"
                  style={{ color: '#245A89', borderColor: '#245A89' }}
                >
                  Log In
                </Link>
                <Link
                  href="/contact"
                  className="text-white px-4 py-2 rounded-md text-sm font-semibold transition-opacity hover:opacity-90"
                  style={{ backgroundColor: '#245A89' }}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden">
            <Link
              href="/contact"
              className="text-white px-4 py-2 rounded-md text-sm font-semibold"
              style={{ backgroundColor: '#245A89' }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
