import React from 'react';
import Link from 'next/link';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, FileSpreadsheet, Layers, PieChart } from 'lucide-react';

export const metadata = {
  title: 'Company Research & Corporate Intelligence | Aratha Research',
  description:
    'Deep corporate profiles, business model analysis, competitor benchmarking, financial statement forensics, and M&A due diligence intelligence dossiers.',
};

export default function CompanyResearchPage() {
  const capabilities = [
    { title: 'Company Profiles & Background Research', desc: 'Comprehensive operational history, corporate governance structure, executive leadership track records, and parent/subsidiary architecture.' },
    { title: 'Business Model & Organisational Analysis', desc: 'Deconstruction of value propositions, cost structure, monetization mechanics, and operating margins compared to industry standards.' },
    { title: 'Corporate & Financial Information Analysis', desc: 'Ratio analysis, cash conversion cycles, liquidity assessments, leverage profiles, and audit commentary across 5- to 10-year historic filings.' },
    { title: 'Competitor Benchmarking & Market Share', desc: 'Direct side-by-side matrices comparing product breadth, patent filings, pricing strategies, and customer sentiment metrics.' },
    { title: 'Company & Industry Comparative Analytics', desc: 'Cross-sectional peer group comparisons mapping operational efficiency and vulnerability to macroeconomic headwinds.' },
    { title: 'M&A Due Diligence Intelligence Dossiers', desc: 'Confidential investigative briefs evaluating acquisition targets, red flags, litigation exposure, and customer concentration risks.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-[#0F6B43]/30 text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              <Building2 className="w-4 h-4" /> Core Practice Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Company Research & Corporate Intelligence
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Uncompromising corporate due diligence, forensic filings analysis, and competitor benchmarking designed to protect capital and inform critical acquisitions.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/proposal?service=Company%20Research%20%26%20Corporate%20Intelligence"
                className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Request Intelligence Dossier</span>
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
            Analytical Scope & Specialized Capabilities
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl leading-relaxed mb-8">
            Every corporate intelligence dossier is built using triangulated primary and secondary sources: regulatory filings (SEC 10-K, Companies House, MCA), proprietary industry registries, and forensic competitive analysis.
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

        {/* Deliverables & Work Products */}
        <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              Work Products
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Standard Intelligence Deliverables
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We deliver boardroom-ready executive packages, complete with transparent source bibliographies and interactive financial models.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Executive Dossier (PDF):</strong> 35–60 page deep-dive into governance, finances, risk factors, and competitor matrices.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Forensic Financial Model (Excel):</strong> Normalized multi-year income statements, balance sheets, and peer ratio comparisons.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>C-Suite Presentation Deck (PPTX):</strong> 15-slide executive briefing designed for board meetings and M&A committees.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Confidential Red-Flag Memo:</strong> Unbiased analysis of litigation vulnerabilities, key-man risks, and supplier dependencies.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">
                Recent Intelligence Engagement Sample
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
                European CleanTech Competitor Benchmarking Dossier
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Assessed 12 battery storage OEMs across Western Europe for a corporate acquirer. Analyzed patent portfolios, warranty liability reserves, and supply chain bottlenecks, leading to a successful $18M asset acquisition.
              </p>
            </div>
            <Link
              href="/proposal?service=Company%20Research%20%26%20Corporate%20Intelligence"
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors"
            >
              Commission Similar Company Dossier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
