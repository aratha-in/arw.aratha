import React from 'react';
import Link from 'next/link';
import {
  Building2,
  TrendingUp,
  Compass,
  BarChart3,
  GraduationCap,
  FileText,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Calendar,
  Layers
} from 'lucide-react';
import { servicesData } from '@/lib/data';

export const metadata = {
  title: 'Our Research & Analytics Services | Aratha Research',
  description:
    'Comprehensive corporate intelligence, market sizing, statistical data modeling, doctoral research support, and custom executive research report generation.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Practice Areas
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Comprehensive Research & Analytical Capabilities
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              We provide end-to-end investigatory and statistical services. From empirical survey administration and balance sheet forensic due diligence to doctoral dissertation methodology guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with In-Depth Feature Lists */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesData.map((srv, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={srv.id}
              id={srv.slug}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </span>
                    <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider">
                      Service Offering
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-600 font-serif italic text-[#0F6B43]">
                    “{srv.tagline}”
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    {srv.shortDescription}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Core Scope & Capabilities:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B43] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                      <span>In-Depth Service Page</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/proposal?service=${encodeURIComponent(srv.title)}`}
                      className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      Request Project Proposal
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#FAFAF8] rounded-2xl p-6 border border-gray-200 space-y-5 text-xs">
                  <div>
                    <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                      Standard Deliverables
                    </span>
                    <ul className="space-y-1.5 text-gray-800">
                      {srv.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="font-bold text-[#0F6B43]">•</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-2">
                      Analytical Methodologies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.methodologies.map((m, mIdx) => (
                        <span key={mIdx} className="px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700 font-medium">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200">
                    <span className="text-gray-400 font-semibold uppercase tracking-wider block mb-1">
                      Sample Title:
                    </span>
                    <span className="font-serif italic text-gray-900 font-semibold block">
                      {srv.sampleReportTitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-12 text-white text-center border border-gray-800 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold">
            Need a Custom Research Design or Multi-Service Scope?
          </h3>
          <p className="text-gray-300 text-sm max-w-xl mx-auto">
            Many enterprise mandates integrate company research with primary market surveys and statistical modeling. We tailor custom multi-phase research charters.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/proposal"
              className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#09472c] text-white font-semibold text-xs uppercase tracking-wider transition-colors"
            >
              Request Custom Charter Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
