import React from 'react';
import Link from 'next/link';
import { TrendingUp, CheckCircle2, ArrowRight, PieChart, Users, Globe, Target } from 'lucide-react';

export const metadata = {
  title: 'Market Research & Market Intelligence | Aratha Research',
  description:
    'Evidence-based market sizing (TAM/SAM/SOM), consumer segmentation, geographic market entry feasibility, survey administration, and ongoing market intelligence.',
};

export default function MarketResearchPage() {
  const capabilities = [
    { title: 'Market Sizing & Opportunity Assessment', desc: 'Bottom-up and top-down triangulated TAM, SAM, and SOM forecasting models spanning 5- to 10-year horizons with scenario stress-testing.' },
    { title: 'Industry Trends & Disruptive Drivers', desc: 'Systematic tracking of technological, regulatory, macroeconomic, and supply-side structural shifts transforming your sector.' },
    { title: 'Consumer Behaviour & Trigger Research', desc: 'Empirical investigation of customer adoption obstacles, willingness-to-pay thresholds, brand switching habits, and purchase catalysts.' },
    { title: 'Customer Segmentation & Preference Mapping', desc: 'Cluster-based demographic and psychographic segmentation, persona development, and MaxDiff feature preference prioritization.' },
    { title: 'Geographic Market Entry Assessment', desc: 'Cross-border feasibility scoring evaluating localized compliance, tariff dynamics, logistics costs, and competitive density.' },
    { title: 'Survey Design & Field Administration', desc: 'Statistically powered survey instrument design, CAWI digital administration, response screening, and quota-controlled sampling.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-[#0F6B43]/30 text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              <TrendingUp className="w-4 h-4" /> Core Practice Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Market Research & Market Intelligence
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Empirical market sizing, customer segmentation, and market entry feasibility studies that eliminate speculative guesswork from executive growth strategies.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/proposal?service=Market%20Research%20%26%20Market%20Intelligence"
                className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Request Market Research Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                Book Scoping Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight mb-4">
            Specialized Market Intelligence Capabilities
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl leading-relaxed mb-8">
            We avoid generic syndicated aggregators. We construct custom market models calibrated specifically to your product definitions, customer criteria, and regional boundaries.
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

        {/* Deliverables Grid */}
        <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              Strategic Outputs
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Standard Market Deliverables
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every deliverable includes auditable spreadsheet models, verifiable citations, and executive presentation decks.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Dynamic Market Sizing Workbook (Excel):</strong> Fully parameterized model with toggleable growth scenarios and unit multipliers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Comprehensive Market Intelligence Report (PDF):</strong> 40–70 pages examining trends, regulation, and competitor density.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Customer Segmentation & Persona Guide:</strong> Empirically clustered customer personas with actionable value triggers.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>C-Suite Executive Presentation (PPTX):</strong> Visual, polished deck ready for board review or investor pitches.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">
                Recent Market Intelligence Project
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
                Southeast Asia Commercial EV Fleet Market Sizing (2026–2031)
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Constructed bottom-up TAM/SAM/SOM across 6 ASEAN economies evaluating light commercial logistics fleets. Triangulated battery swap economics, municipal subsidy phases, and depot CAPEX payback to support a $25M venture expansion.
              </p>
            </div>
            <Link
              href="/proposal?service=Market%20Research%20%26%20Market%20Intelligence"
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors"
            >
              Commission Market Intelligence Study
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
