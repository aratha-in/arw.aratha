import React from 'react';
import Link from 'next/link';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Activity, LineChart, FileText } from 'lucide-react';
import { caseStudiesData } from '@/lib/data';

export const metadata = {
  title: 'Selected Projects & Case Studies | Aratha Research',
  description:
    'Examine real-world analytical engagements: CleanTech market entry, doctoral structural equation modeling, and high-volume retail clustering.',
};

export default function CaseStudiesPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Verified Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Selected Analytical Projects & Outcomes
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Explore concrete examples of how our investigative research, econometric modeling, and executive report development create tangible strategic value for clients.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {caseStudiesData.map((cs, idx) => (
          <div
            key={cs.id}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-md space-y-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-[#0F6B43] border border-emerald-200">
                  {cs.industry}
                </span>
                <span className="text-xs text-gray-500 font-medium">| {cs.clientType}</span>
              </div>
              <span className="text-xs font-mono font-bold text-gray-400 uppercase">
                Case Study Ref: ARC-0{idx + 1}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 leading-snug">
              {cs.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900 uppercase text-xs tracking-wider text-gray-500 mb-1">
                    The Challenge:
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                    {cs.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 uppercase text-xs tracking-wider text-gray-500 mb-1">
                    Aratha’s Solution:
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                    {cs.solution}
                  </p>
                </div>
              </div>

              <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-gray-200 space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold text-[#0F6B43] tracking-wider block mb-2">
                    Analytical Methodologies Applied:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {cs.analyticalApproach.map((app, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <span className="text-xs uppercase font-bold text-gray-900 tracking-wider block mb-2">
                    Measurable Outcomes:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-800 font-medium">
                    {cs.outcomes.map((out, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2">
                        <span className="text-[#0F6B43] font-bold">✓</span>
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {cs.testimonialSnippet && (
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 italic text-xs text-gray-600 flex items-center justify-between">
                <span>“{cs.testimonialSnippet}”</span>
                <Link
                  href="/proposal"
                  className="text-xs font-semibold text-[#0F6B43] hover:underline shrink-0 ml-4 font-sans not-italic"
                >
                  Commission Similar Project →
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-12 text-white text-center border border-gray-800 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Have a Complex Analytical Problem to Solve?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Our analysts specialize in translating unstructured research briefs into structured, bankable project charters.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/proposal"
              className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Request a Research Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
