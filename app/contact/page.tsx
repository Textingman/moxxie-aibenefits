import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Address */}
          <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <MapPin className="w-5 h-5" style={{ color: '#1F4E79' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Our Address</h3>
                <p style={{ color: '#6B7280' }}>
                  1401 Pennsylvania Ave<br />
                  Suite 105<br />
                  Wilmington, Delaware 19806<br />
                  United States of America
                </p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                <Phone className="w-5 h-5" style={{ color: '#5E8F5E' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Support Number</h3>
                <a
                  href="tel:+13022080220"
                  className="text-lg font-medium hover:opacity-80"
                  style={{ color: '#2F6FA3' }}
                >
                  (302) 208-0220
                </a>
                <p className="mt-1 text-sm" style={{ color: '#6B7280' }}>
                  Monday – Friday, 9 AM – 5 PM ET
                </p>
              </div>
            </div>
          </div>

          {/* Email Support */}
          <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <Mail className="w-5 h-5" style={{ color: '#2F6FA3' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Email Support</h3>
                <a
                  href="mailto:support@aibenefitsagent.com"
                  className="font-medium hover:opacity-80"
                  style={{ color: '#2F6FA3' }}
                >
                  support@aibenefitsagent.com
                </a>
                <p className="mt-1 text-sm" style={{ color: '#6B7280' }}>
                  For general inquiries and account support
                </p>
              </div>
            </div>
          </div>

          {/* SMS */}
          <div className="rounded-xl p-6 border" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <MessageSquare className="w-5 h-5" style={{ color: '#D97706' }} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>SMS Support</h3>
                <p style={{ color: '#6B7280' }}>
                  Text <strong>HELP</strong> to <strong>(302) 208-0220</strong> for SMS support.
                  Reply <strong>STOP</strong> at any time to opt out of messages.
                </p>
                <Link
                  href="/sms-terms"
                  className="inline-block mt-2 text-sm font-medium hover:opacity-80"
                  style={{ color: '#2F6FA3' }}
                >
                  View SMS Terms &amp; Conditions →
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Email */}
        <div className="mt-8 rounded-xl p-6 border" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
          <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Legal Inquiries</h3>
          <p style={{ color: '#6B7280' }}>
            For legal matters, please contact us at{' '}
            <a
              href="mailto:legal@aibenefitsagent.com"
              className="font-medium hover:opacity-80"
              style={{ color: '#2F6FA3' }}
            >
              legal@aibenefitsagent.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
