'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            We're here to help. Reach out to us through any of the channels below or fill out the form.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold" style={{ color: '#1F2937' }}>Get in Touch</h2>

            {/* Address */}
            <div className="rounded-xl p-5 border flex items-start gap-4" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <MapPin className="w-5 h-5" style={{ color: '#1F4E79' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#1F2937' }}>Our Address</h3>
                <p style={{ color: '#6B7280' }}>
                  1401 Pennsylvania Ave, Suite 105<br />
                  Wilmington, Delaware 19806<br />
                  United States of America
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl p-5 border flex items-start gap-4" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                <Phone className="w-5 h-5" style={{ color: '#5E8F5E' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#1F2937' }}>Support Number</h3>
                <a href="tel:+13022080220" className="font-medium hover:opacity-80" style={{ color: '#2F6FA3' }}>
                  (302) 208-0220
                </a>
                <p className="mt-1 text-sm" style={{ color: '#6B7280' }}>Monday – Friday, 9 AM – 5 PM ET</p>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-xl p-5 border flex items-start gap-4" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                <Mail className="w-5 h-5" style={{ color: '#2F6FA3' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#1F2937' }}>Email Support</h3>
                <a href="mailto:support@aibenefitsagent.com" className="font-medium hover:opacity-80" style={{ color: '#2F6FA3' }}>
                  support@aibenefitsagent.com
                </a>
              </div>
            </div>

            {/* SMS */}
            <div className="rounded-xl p-5 border flex items-start gap-4" style={{ backgroundColor: '#F5F7FA', borderColor: '#E5E7EB' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FEF3C7' }}>
                <MessageSquare className="w-5 h-5" style={{ color: '#D97706' }} />
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: '#1F2937' }}>SMS Support</h3>
                <p style={{ color: '#6B7280' }}>
                  Text <strong>HELP</strong> to <strong>(302) 208-0220</strong>. Reply <strong>STOP</strong> to opt out.
                </p>
                <Link href="/sms-terms" className="inline-block mt-1 text-sm font-medium hover:opacity-80" style={{ color: '#2F6FA3' }}>
                  View SMS Terms →
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Send Us a Message</h2>

            {submitted ? (
              <div className="rounded-xl p-8 text-center border" style={{ backgroundColor: '#F0FDF4', borderColor: '#86EFAC' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }}>
                  <svg className="w-8 h-8" style={{ color: '#5E8F5E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1F2937' }}>Message Sent!</h3>
                <p style={{ color: '#6B7280' }}>
                  Thank you for reaching out. We'll get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                      First Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: '#D1D5DB', color: '#1F2937' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                      Last Name <span style={{ color: '#EF4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2"
                      style={{ borderColor: '#D1D5DB', color: '#1F2937' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: '#D1D5DB', color: '#1F2937' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: '#D1D5DB', color: '#1F2937' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Subject <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: '#D1D5DB', color: formData.subject ? '#1F2937' : '#9CA3AF' }}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Account Support</option>
                    <option value="benefits">Benefits Question</option>
                    <option value="sms">SMS / Messaging</option>
                    <option value="legal">Legal / Privacy</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Message <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 resize-none"
                    style={{ borderColor: '#D1D5DB', color: '#1F2937' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 rounded-lg text-white font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: '#2F6FA3' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
