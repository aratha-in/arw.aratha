import React from 'react';
import Link from 'next/link';
import {
  Briefcase,
  Rocket,
  Users,
  LineChart,
  School,
  GraduationCap,
  Globe,
  PieChart,
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { clientSegments } from '@/lib/data';

export const metadata = {
  title: 'Industries & Client Segments | Aratha Research',
  description:
    'Dedicated research and analytical practices for corporates, high-growth startups, consulting firms, financial analysts, academic institutions, PhD candidates, and NGOs.',
};

export default function IndustriesPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Sector Practices
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Industries & Client Segments Served
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We tailor our analytical frameworks to the specific governance, regulatory, and empirical standards of each client category—from corporate boardrooms to academic research departments.
            </p>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clientSegments.map((seg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-md hover:shadow-xl transition-all space-y-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-[#0F6B43] border border-emerald-200">
                    {seg.stats}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    Segment 0{idx + 1}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-2">
                  {seg.title}
                </h2>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {seg.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 space-y-2">
                <span className="text-xs uppercase font-semibold text-gray-400 tracking-wider block">
                  Tailored Mandates:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-700">
                  {seg.keyNeeds.map((need, nIdx) => (
                    <div key={nIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B43] shrink-0" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={`/proposal?category=${encodeURIComponent(seg.title)}`}
                    className="text-xs font-semibold text-[#0F6B43] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Request Proposal for this Segment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-12 text-white text-center border border-gray-800 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Don’t See Your Specific Industry or Domain Listed?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Our econometric and statistical modeling frameworks are domain-agnostic. We regularly execute bespoke research mandates across specialized niche sectors.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/consultation"
              className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Schedule an Exploratory Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
