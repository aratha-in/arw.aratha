import React, { Suspense } from 'react';
import ProposalForm from '@/components/forms/ProposalForm';
import { ShieldCheck, Clock, FileCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Request a Research Proposal | Aratha Research & Analytics',
  description:
    'Submit your research questions, dataset parameters, and expected deliverables. Receive a formal scope charter, methodology outline, and quote within 24–48 hours.',
};

export default function ProposalPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#171717] text-white py-16 sm:py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
            Project Scoping Portal
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Request a Formal Research Proposal
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Provide your project specifications, data readiness, and target deliverables below. Our Senior Lead Analysts will review your brief and prepare an actionable methodology charter and fee proposal.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#0F6B43] shrink-0" />
            <span><strong>24–48h Turnaround:</strong> Transparent proposal with line-item milestones.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0F6B43] shrink-0" />
            <span><strong>Strict Mutual NDA:</strong> Complete data confidentiality guaranteed.</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-[#0F6B43] shrink-0" />
            <span><strong>Fixed-Fee Scope:</strong> Zero surprise revisions or hidden deliverables.</span>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="p-12 text-center text-sm text-gray-500">Loading proposal builder...</div>}>
          <ProposalForm />
        </Suspense>
      </div>
    </div>
  );
}
