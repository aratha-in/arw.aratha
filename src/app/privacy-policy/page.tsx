import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy & Data Protection | Aratha Research & Analytics',
  description:
    'Our strict policies on client confidentiality, mutual non-disclosure agreements (NDAs), dataset encryption, and data retention standards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#171717] text-white py-16 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
            Enterprise Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Privacy Policy & Data Handling Standards
          </h1>
          <p className="text-sm text-gray-300">
            Effective Date: October 1, 2026 · Aratha Research & Analytics
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md space-y-8 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              1. Non-Disclosure & Client Confidentiality Commitment
            </h2>
            <p>
              At Aratha Research & Analytics, client confidentiality is paramount. We frequently handle sensitive corporate data, unreleased product blueprints, M&A target lists, and doctoral academic research findings. We treat all client information as strictly confidential under bilateral Non-Disclosure Agreements (NDAs).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              2. Information Collected
            </h2>
            <p>
              We collect information provided directly by clients during project scoping, proposal submission, and consultation bookings. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
              <li>Contact details (Full name, work/academic email address, telephone number, institution).</li>
              <li>Research parameters (Project title, problem statement, target industry, deadlines).</li>
              <li>Proprietary datasets (Survey responses, point-of-sale logs, internal operating metrics) provided explicitly for analytical processing.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              3. Data Security & Storage Architecture
            </h2>
            <p>
              Client datasets are never stored on public cloud directories or shared with third parties. All client files and analytical codebooks reside within isolated, encrypted storage environments with role-based access restricted strictly to analysts explicitly assigned to that mandate.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              4. Data Retention & Destruction Protocol
            </h2>
            <p>
              Following project completion and final report sign-off, client raw data is retained in our secure repository for a standard period of 60 days to allow for revisions and client briefing questions. Upon request or expiration of this window, all proprietary client datasets are permanently purged from our active systems.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              5. Contact Our Data Governance Officer
            </h2>
            <p>
              For questions concerning our data protection policies or to execute a custom enterprise NDA, contact our Legal & Privacy team at{' '}
              <a href="mailto:privacy@aratharesearch.com" className="text-[#0F6B43] hover:underline font-semibold">
                privacy@aratharesearch.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
