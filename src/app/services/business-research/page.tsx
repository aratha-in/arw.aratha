import React from 'react';
import Link from 'next/link';
import { Compass, CheckCircle2, ArrowRight, Layers, BarChart, Scale, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Business Research & Strategic Analysis | Aratha Research',
  description:
    'Comprehensive business feasibility studies, business model validation, strategic decision-support reports, and unit economic stress-testing.',
};

export default function BusinessResearchPage() {
  const capabilities = [
    { title: 'Business Opportunity Assessment', desc: 'Rigorous screening of commercial prospects, addressable market headroom, and capital requirements to filter high-probability ventures.' },
    { title: 'Bankable Feasibility & Viability Studies', desc: 'End-to-end commercial feasibility reports evaluating CAPEX/OPEX structures, sensitivity thresholds, regulatory approvals, and break-even timelines.' },
    { title: 'Business Model Research & Stress-Testing', desc: 'Deconstruction of unit economics (LTV, CAC, gross margin retention) under volatile macro and competitive headwinds.' },
    { title: 'Strategic Management Research', desc: 'Evaluating corporate diversification options, vertical integration feasibility, and resource-based competitive advantages.' },
    { title: 'Operational Performance Gap Analysis', desc: 'Benchmarking operational KPIs, overhead allocations, and headcount productivity against tier-1 industry quartiles.' },
    { title: 'Executive Decision-Support Reports', desc: 'C-suite briefing documents and structured decision matrices designed to achieve board consensus on major strategic pivots.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-[#0F6B43]/30 text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              <Compass className="w-4 h-4" /> Core Practice Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Business Research & Strategic Analysis
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Structured feasibility studies, unit economic stress-tests, and strategic decision frameworks to guide major capital commitments and enterprise growth.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/proposal?service=Business%20Research%20%26%20Strategic%20Analysis"
                className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Request Feasibility Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight mb-4">
            Strategic Investigation Capabilities
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl leading-relaxed mb-8">
            Our strategic research blends quantitative financial modeling with qualitative market dynamics to produce unbiased, bankable feasibility documentation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs space-y-2">
                <span className="w-7 h-7 rounded-md bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center font-bold text-xs mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-serif font-bold text-base text-gray-900">{c.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              Tangible Assets
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Strategic Deliverables Package
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Built to withstand the scrutiny of commercial lenders, institutional investors, and enterprise board committees.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Bankable Feasibility Study (PDF):</strong> 50–90 pages covering technical, operational, and commercial viability.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Sensitivity & Financial Model (Excel):</strong> Monte Carlo scenario simulations, NPV, IRR, and payback calculations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Boardroom Decision Memo:</strong> Concisely structured memo isolating key risks, mitigants, and recommended actions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Unit Economics Stress-Test Matrix:</strong> Breakeven variance tables based on shifting input costs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">
                Recent Feasibility Study Engagement
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
                Regional Diagnostic Healthcare Hub Network Feasibility
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Assessed commercial feasibility and patient demographic demand across 14 rural municipalities for a development healthcare trust. Modeled equipment payback, referral leakage, and government tariff reimbursements to support an institutional grant.
              </p>
            </div>
            <Link
              href="/proposal?service=Business%20Research%20%26%20Strategic%20Analysis"
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors"
            >
              Commission Business Feasibility Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
