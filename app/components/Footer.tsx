import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#1F2937' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AI Benefits Agent</h3>
            <p style={{ color: '#9CA3AF' }}>
              Your AI agent for unbiased benefits education.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/ai-benefits/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9CA3AF">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" style={{ color: '#9CA3AF' }} className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/signup" style={{ color: '#9CA3AF' }} className="hover:text-white">
                  Talk to AI
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" style={{ color: '#9CA3AF' }} className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" style={{ color: '#9CA3AF' }} className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sms-terms" style={{ color: '#9CA3AF' }} className="hover:text-white">
                  SMS Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p style={{ color: '#9CA3AF' }}>
              <a href="mailto:support@aibenefitsagent.com" className="hover:text-white" style={{ color: '#9CA3AF' }}>
                support@aibenefitsagent.com
              </a>
            </p>
            <p className="mt-2" style={{ color: '#9CA3AF' }}>
              <a href="tel:+13022080220" className="hover:text-white" style={{ color: '#9CA3AF' }}>
                (302) 208-0220
              </a>
            </p>
            <p className="mt-2" style={{ color: '#9CA3AF' }}>
              1401 Pennsylvania Ave, Suite 105
            </p>
            <p style={{ color: '#9CA3AF' }}>
              Wilmington, DE 19806
            </p>
            <p style={{ color: '#9CA3AF' }}>
              United States of America
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #374151', color: '#9CA3AF' }}>
          <p>&copy; 2026 AI Benefits Agent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
