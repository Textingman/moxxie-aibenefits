import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>SMS Terms &amp; Conditions</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Last Updated: June 3, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <p className="mb-6" style={{ color: '#6B7280' }}>
            These SMS Terms &amp; Conditions ("SMS Terms") govern your participation in the SMS messaging programs offered by <strong>AI Benefits Agent</strong> ("Company," "we," "us," or "our"). By opting in to any of our SMS programs, you agree to these SMS Terms. Please read them carefully.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. SMS Programs Offered</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            AI Benefits Agent operates the following optional SMS messaging programs:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li><strong>Account Notifications:</strong> Transactional messages related to your account activity, including verification codes, enrollment confirmations, and important account updates.</li>
            <li><strong>Customer Care Messages:</strong> Support-related messages to assist you with questions, follow-ups, and guidance regarding your benefits inquiries.</li>
          </ul>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Participation in either program is entirely voluntary and is not required to use our Service or submit our form.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. How to Opt In</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may opt in to our SMS programs by checking the applicable opt-in checkbox on our signup form. By doing so, you provide your explicit written consent to receive SMS messages from that program at the mobile phone number you provide. You represent that you are the account holder or have the account holder's permission to enroll the number.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. How to Opt Out</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            You may opt out of any SMS program at any time by:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Replying <strong>STOP</strong> to any message from that program</li>
            <li>Contacting us at <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@aibenefitsagent.com</a></li>
            <li>Calling us at <a href="tel:+13022080220" className="font-medium" style={{ color: '#2F6FA3' }}>(302) 208-0220</a></li>
          </ul>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            After you send <strong>STOP</strong>, we will send you a one-time confirmation message confirming your opt-out. You will not receive any further SMS messages from that program unless you re-enroll. Opting out of one program does not automatically opt you out of other programs.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Help</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            For help with our SMS programs, reply <strong>HELP</strong> to any message or contact us at:
          </p>
          <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E5E7EB' }}>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Email:</strong> <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@aibenefitsagent.com</a></p>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Phone:</strong> <a href="tel:+13022080220" className="font-medium" style={{ color: '#2F6FA3' }}>(302) 208-0220</a></p>
            <p style={{ color: '#6B7280' }}><strong>Address:</strong> 1401 Pennsylvania Ave, Suite 105, Wilmington, Delaware 19806, United States of America</p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. Message Frequency</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Message frequency varies based on your account activity and the program you have opted into. For account notifications, you may receive messages whenever there is relevant account activity (e.g., verification codes, enrollment updates). For customer care, messages are sent only in response to your inquiries or as needed to assist you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Message and Data Rates</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Message and data rates may apply depending on your mobile carrier and plan. AI Benefits Agent does not charge for SMS messages, but your carrier's standard messaging rates may apply. Please contact your mobile carrier for details about your plan's messaging rates.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Supported Carriers</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Our SMS programs are available on most major U.S. carriers, including but not limited to AT&amp;T, Verizon, T-Mobile, Sprint, Boost Mobile, and U.S. Cellular. Carriers are not liable for delayed or undelivered messages. Message delivery is subject to effective transmission from your network operator.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Privacy and Data Use</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Your mobile phone number and any information collected through our SMS programs will be used solely to provide the SMS services you have opted into. <strong>We do not sell, share, or rent your mobile phone number or SMS opt-in data to third parties for marketing or promotional purposes.</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            For more information about how we handle your personal data, please review our <Link href="/privacy" className="font-medium" style={{ color: '#2F6FA3' }}>Privacy Policy</Link>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Content Restrictions</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            All SMS messages sent through our programs comply with applicable laws and carrier guidelines. We do not send messages containing prohibited content, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Illegal content or content promoting illegal activities</li>
            <li>Adult or sexually explicit content</li>
            <li>Gambling-related content</li>
            <li>Cannabis or controlled substance content</li>
            <li>Firearms or weapons content</li>
            <li>Hate speech or discriminatory content</li>
            <li>Phishing, fraud, or deceptive content</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Eligibility</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Our SMS programs are available to residents of the United States who are 18 years of age or older. By opting in, you represent that you meet these eligibility requirements and that you are the authorized user of the mobile phone number provided.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Changes to SMS Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We reserve the right to modify these SMS Terms at any time. We will notify you of material changes by sending an SMS notification or by posting the updated terms on our website. Your continued participation in our SMS programs after changes become effective constitutes your acceptance of the modified SMS Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Relationship to Terms of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            These SMS Terms are incorporated into and form part of our <Link href="/terms" className="font-medium" style={{ color: '#2F6FA3' }}>Terms of Service</Link>. In the event of any conflict between these SMS Terms and the Terms of Service with respect to SMS messaging, these SMS Terms shall control.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>13. Contact Us</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            If you have any questions about our SMS programs or these SMS Terms, please contact us:
          </p>
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E5E7EB' }}>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>AI Benefits Agent</strong></p>
            <p className="mb-2" style={{ color: '#6B7280' }}>1401 Pennsylvania Ave, Suite 105</p>
            <p className="mb-2" style={{ color: '#6B7280' }}>Wilmington, Delaware 19806</p>
            <p className="mb-2" style={{ color: '#6B7280' }}>United States of America</p>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Phone:</strong> <a href="tel:+13022080220" className="font-medium" style={{ color: '#2F6FA3' }}>(302) 208-0220</a></p>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Support:</strong> <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@aibenefitsagent.com</a></p>
            <p style={{ color: '#6B7280' }}><strong>Website:</strong> <a href="/" className="font-medium" style={{ color: '#2F6FA3' }}>https://aibenefitsagent.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
