import React from 'react';
import Link from 'next/link';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, Activity, FileCheck, HelpCircle } from 'lucide-react';
import { methodologyPhases } from '@/lib/data';

export const metadata = {
  title: 'Our Research Methodology & Quality Workflow | Aratha Research',
  description:
    'Discover Aratha’s 6-phase research workflow, quality assurance protocols, data hygiene controls, and rigorous peer-review standards.',
};

export default function MethodologyPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Quality Assurance Framework
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Our Research Methodology & Analytical Workflow
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Credible research is the product of disciplined process. Every project at Aratha is governed by a 6-phase protocol designed to eliminate bias, ensure mathematical accuracy, and deliver actionable findings.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Phases Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-10">
          {methodologyPhases.map((phase, idx) => (
            <div
              key={phase.step}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md flex flex-col lg:flex-row items-start gap-8"
            >
              <div className="lg:w-48 shrink-0 flex flex-col justify-between">
                <span className="text-5xl sm:text-6xl font-serif font-bold text-[#0F6B43]">
                  {phase.step}
                </span>
                <span className="text-xs uppercase font-bold tracking-widest text-gray-400 mt-2 block">
                  Phase 0{idx + 1}
                </span>
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-serif font-bold text-gray-900">
                  {phase.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {phase.description}
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider block mb-2">
                    Key Deliverables & Verification Checkpoints:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                    {phase.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Peer Review & QA Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              Internal Peer Review
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              The Two-Analyst Verification Gate
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              No deliverable is released to a client without undergoing our Two-Analyst Verification Gate. The primary lead analyst’s codebook, data formulas, and source citations are independently re-run and audited by a Senior Methodologist.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0F6B43]" />
              <span>Zero client surprises. Complete mathematical and procedural transparency.</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
            <Link
              href="/proposal"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold uppercase tracking-wider transition-all text-center shadow-md"
            >
              Commission Project with this Workflow
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
