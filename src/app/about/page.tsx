import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Target, Award, CheckCircle2, ArrowRight, Users, Scale, FileText } from 'lucide-react';

export const metadata = {
  title: 'About Aratha Research & Analytics | Analytical Rigor & Ethics',
  description:
    'Learn about Aratha Research & Analytics: our founding mission, methodological standards, corporate due diligence capabilities, and ethical academic consulting commitment.',
};

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Institutional Profile
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Evidence-Based Intelligence for High-Stakes Decisions.
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Aratha Research & Analytics is an independent research consultancy and data analytics firm. We bridge the gap between dense raw data and clear strategic action.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Who We Are & What Drives Us
            </h2>
            <p>
              Founded by seasoned research economists, statistical modelers, and corporate strategy advisors, <strong>Aratha Research & Analytics</strong> was created to serve a singular purpose: deliver transparent, empirical, and decision-grade research to organisations navigating complex decisions.
            </p>
            <p>
              In modern commerce and academia, organizations are awash in data but starved of reliable clarity. Generic market reports often rely on inflated multiplier assumptions, while academic researchers struggle with inaccessible statistical software. Aratha solves this through hands-on rigor, custom mathematical modeling, and structured executive documentation.
            </p>
            <p>
              We are an analytics firm, not a publication press or book distributor. Every assignment we undertake is an investigatory project tailored specifically to the client’s explicit research questions, datasets, and strategic milestones.
            </p>

            <div className="p-6 bg-white rounded-2xl border border-gray-200/90 shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-gray-900 text-lg text-[#0F6B43]">
                Our Three Core Tenets
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F6B43] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Research with Purpose:</strong> We never generate filler data. Every variable, ratio, and secondary reference is curated to answer an explicit hypothesis.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F6B43] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Analysis with Clarity:</strong> Complex statistical formulas and multi-variable regressions are translated into clear, actionable executive insights.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0F6B43] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-gray-900">Reports with Impact:</strong> Deliverables are structured around Barbara Minto’s Pyramid Principle—leading with conclusions to drive decisive executive action.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAFAF8] rounded-2xl p-7 border border-gray-200 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Commitment to Integrity
              </span>
              <h3 className="text-xl font-serif font-bold text-gray-900">
                Ethical Research Standards
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We believe that research credibility is the most valuable asset in business and academia. We adhere to unambiguous ethical guardrails:
              </p>
              <ul className="space-y-2.5 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                  <span><strong>Zero Data Manipulation:</strong> We never p-hack, alter datasets to force desired conclusions, or fabricate survey responses.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                  <span><strong>Mutual Non-Disclosure (NDA):</strong> Client datasets, trade secrets, and corporate plans remain strictly isolated and encrypted.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                  <span><strong>Academic Independence:</strong> We do not ghostwrite student theses; we consult on methodology and teach statistical execution.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-emerald-100 shadow-md text-center space-y-4">
              <h4 className="text-base font-serif font-bold text-gray-900">
                Need to discuss an upcoming project?
              </h4>
              <p className="text-xs text-gray-600">
                Speak directly with one of our Lead Analysts to evaluate project parameters and data availability.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/consultation"
                  className="px-4 py-2.5 rounded-lg bg-[#0F6B43] hover:bg-[#09472c] text-white text-xs font-semibold transition-colors"
                >
                  Schedule Discovery Call
                </Link>
                <Link
                  href="/proposal"
                  className="px-4 py-2.5 rounded-lg border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Request a Formal Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
