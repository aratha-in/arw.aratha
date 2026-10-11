import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | Aratha Research & Analytics',
  description:
    'Terms of engagement, deliverable scope, intellectual property rights, and analytical service standards.',
};

export default function TermsPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="bg-[#171717] text-white py-16 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
            Terms of Engagement
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
            Terms & Conditions of Service
          </h1>
          <p className="text-sm text-gray-300">
            Aratha Research & Analytics · Applicable to All Analytical & Research Engagements
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md space-y-8 text-sm text-gray-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              1. Nature of Business & Engagement Scope
            </h2>
            <p>
              Aratha Research & Analytics is an independent research consultancy and data analytics firm. We investigate research questions, analyze empirical datasets, and author customized executive reports. We are not a book publisher, printing company, vanity press, or academic ghostwriting mill.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              2. Intellectual Property (IP) Ownership
            </h2>
            <p>
              Upon final payment of agreed fees, all customized research reports, models, slide decks, and codebooks developed specifically for the client become the sole intellectual property of the client. Aratha retains ownership only of pre-existing proprietary analytical methodologies, general statistical algorithms, and standard templates.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              3. Academic Integrity & Ethics Clause
            </h2>
            <p>
              For clients engaging our Academic & PhD Research Support practice, services are provided on a consultative, educational, and statistical advisory basis. Clients are responsible for authoring their own dissertations and research papers. Aratha strictly refuses requests to fabricate data, manipulate p-values, or author complete dissertations on behalf of students.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              4. Review & Revision Policy
            </h2>
            <p>
              Each project proposal specifies an agreed scope of work. Deliverables include a 14-day client review period during which minor revisions, additional scenario stress-testing within the original scope, or clarifying data walkthroughs are provided at no additional charge.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-gray-900">
              5. Governing Law
            </h2>
            <p>
              Unless otherwise specified in a formal bilateral contract, engagements are governed by standard commercial arbitration laws. For questions, contact{' '}
              <a href="mailto:contracts@aratharesearch.com" className="text-[#0F6B43] hover:underline font-semibold">
                contracts@aratharesearch.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
