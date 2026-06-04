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
                {/* Official LinkedIn logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path d="M7.75 9.5h-2.5v8h2.5v-8zm-1.25-1a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm10.25 1c-1.38 0-2.3.75-2.75 1.5V9.5h-2.5v8h2.5v-4.25c0-1.1.9-2 2-2s2 .9 2 2V17.5h2.5v-4.75c0-2.62-1.5-4.25-3.75-4.25z" fill="white"/>
                </svg>
              </a>
              <a
                href="https://www.google.com/search?q=Ai%20Benefits%20Agent&stick=H4sIAAAAAAAA_-NgU1I1qLCwTDZLSzGwtEy1SE01Nbe0MqhISzQ2NjdPNU4yTLYwMTNNW8Qq6Jip4JSal5qWWVKs4JiemlcCAJk4TK89AAAA&hl=en-US&mat=CQT5M4NBBd3TElcBTVDHnmsxmfZuhuwxTAWkzuuOpUB8MneAbvl8r37dXl2WEzyU35b09zZDc0ZjR3WFWaN4MTUpIg71FeUSLz_LlZ-FkQHurpBfdhlfBPEiBkl1PtBAV5Q&authuser=0&ved=0CAEQrMcEahcKEwjA74uPxeyUAxUAAAAAHQAAAAAQAg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google My Business"
                className="hover:opacity-80 transition-opacity"
              >
                {/* Google "G" logo */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
