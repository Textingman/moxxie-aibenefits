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
              <a
                href="https://www.google.com/search?q=Ai%20Benefits%20Agent&stick=H4sIAAAAAAAA_-NgU1I1qLCwTDZLSzGwtEy1SE01Nbe0MqhISzQ2NjdPNU4yTLYwMTNNW8Qq6Jip4JSal5qWWVKs4JiemlcCAJk4TK89AAAA&hl=en-US&mat=CQT5M4NBBd3TElcBTVDHnmsxmfZuhuwxTAWkzuuOpUB8MneAbvl8r37dXl2WEzyU35b09zZDc0ZjR3WFWaN4MTUpIg71FeUSLz_LlZ-FkQHurpBfdhlfBPEiBkl1PtBAV5Q&authuser=0&ved=0CAEQrMcEahcKEwjA74uPxeyUAxUAAAAAHQAAAAAQAg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google My Business"
                className="hover:opacity-80 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#9CA3AF">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
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
