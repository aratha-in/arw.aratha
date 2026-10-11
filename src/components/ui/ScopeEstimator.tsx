'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Layers } from 'lucide-react';

export default function ScopeEstimator() {
  const [selectedService, setSelectedService] = useState('market');
  const [dataReadiness, setDataReadiness] = useState('raw');
  const [depth, setDepth] = useState('standard');

  const configs: Record<string, { title: string; timeline: string; deliverables: string[]; recommendedApproach: string }> = {
    'company': {
      title: 'Company & Competitor Intelligence Dossier',
      timeline: depth === 'deep' ? '10–14 Business Days' : '5–7 Business Days',
      deliverables: ['SEC / Filings Financial Ratio Model', 'Competitor Capability Matrix', 'Executive Board Deck (PPTX)', 'Risk & Governance Analysis'],
      recommendedApproach: 'Triangulated secondary desk research with filings forensics and executive benchmarking.'
    },
    'market': {
      title: 'Market Opportunity Sizing (TAM/SAM/SOM)',
      timeline: depth === 'deep' ? '14–21 Business Days' : '7–10 Business Days',
      deliverables: ['Bottom-Up Addressable Sizing Model', 'Consumer Persona & Segmentation', 'Market Entry Scenario Matrix', 'Executive PDF Report'],
      recommendedApproach: 'Triangulated bottom-up unit economics with secondary macro-indices and competitive density scans.'
    },
    'data': {
      title: 'Statistical Modeling & Data Analytics Pack',
      timeline: depth === 'deep' ? '12–18 Business Days' : '5–8 Business Days',
      deliverables: ['Data Hygiene & Imputation Codebook', 'Multivariate Regression / SEM Output', 'APA 7th Edition Summary Tables', 'Interactive Tableau/PowerBI Dashboard'],
      recommendedApproach: 'Normality diagnostics, hypothesis testing, effect size verification, and clean R/Python notebooks.'
    },
    'academic': {
      title: 'Doctoral & Academic Research Methodology Advisory',
      timeline: depth === 'deep' ? '14–20 Business Days' : '7–12 Business Days',
      deliverables: ['Theoretical Framework Documentation', 'Psychometrically Validated Survey', 'Statistical Analysis Chapters & Syntax', 'Defense Walkthrough Briefing'],
      recommendedApproach: 'Consultative guidance adhering to absolute academic integrity and publication-grade empirical standards.'
    },
    'reports': {
      title: 'Boardroom-Ready Custom Research Report',
      timeline: depth === 'deep' ? '12–16 Business Days' : '6–9 Business Days',
      deliverables: ['C-Suite Executive Summary (3–5 pgs)', 'Comprehensive Analytical Monograph', 'Management Presentation Deck', 'Full Source Bibliography'],
      recommendedApproach: 'Pyramid principle narrative structuring backed by peer-reviewed statistical verification.'
    }
  };

  const current = configs[selectedService] || configs['market'];

  return (
    <div className="bg-[#171717] text-white rounded-3xl p-6 sm:p-10 border border-gray-800 shadow-2xl">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pb-8 border-b border-gray-800 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F6B43] text-white uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" /> Interactive Research Scope Estimator
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Configure Your Analytical Mandate
          </h3>
          <p className="text-gray-400 text-sm mt-1 max-w-xl">
            Select your research requirements to view recommended analytical methodologies, typical timelines, and expected deliverable formats.
          </p>
        </div>
        <div className="text-xs text-gray-400 bg-gray-900/90 border border-gray-800 p-3 rounded-xl flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#0F6B43]" />
          <span>Transparent methodology & zero hidden deliverables</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left: Interactive Selectors */}
        <div className="lg:col-span-5 space-y-6">
          {/* Service Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              1. Research Domain
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'company', label: 'Company Research & Competitor Intelligence' },
                { id: 'market', label: 'Market Sizing & Consumer Intelligence' },
                { id: 'data', label: 'Data Analysis & Statistical Modeling' },
                { id: 'academic', label: 'Academic & PhD Research Support' },
                { id: 'reports', label: 'Custom Research Report Generation' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedService(s.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium border transition-all ${
                    selectedService === s.id
                      ? 'bg-[#0F6B43] border-[#0F6B43] text-white font-semibold shadow-md'
                      : 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Data Readiness */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              2. Data Readiness
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'clean', label: 'Cleaned Dataset' },
                { id: 'raw', label: 'Raw Survey / DB' },
                { id: 'desk', label: 'Desk Research' },
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDataReadiness(d.id)}
                  className={`py-2 px-2 text-center rounded-lg text-xs font-medium border transition-all ${
                    dataReadiness === d.id
                      ? 'bg-[#0F6B43] border-[#0F6B43] text-white font-semibold'
                      : 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Depth / Complexity */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
              3. Scope Rigor
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setDepth('standard')}
                className={`py-2 px-3 text-center rounded-lg text-xs font-medium border transition-all ${
                  depth === 'standard'
                    ? 'bg-[#0F6B43] border-[#0F6B43] text-white font-semibold'
                    : 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                Standard Rigor (Targeted)
              </button>
              <button
                type="button"
                onClick={() => setDepth('deep')}
                className={`py-2 px-3 text-center rounded-lg text-xs font-medium border transition-all ${
                  depth === 'deep'
                    ? 'bg-[#0F6B43] border-[#0F6B43] text-white font-semibold'
                    : 'bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-700'
                }`}
              >
                Comprehensive (Multi-Scenario)
              </button>
            </div>
          </div>
        </div>

        {/* Right: Dynamic Output Card */}
        <div className="lg:col-span-7 bg-gray-900/90 rounded-2xl p-6 sm:p-8 border border-gray-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4">
              <span className="text-xs uppercase font-semibold text-gray-400">
                Recommended Specification
              </span>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 bg-[#0F6B43]/20 text-[#0F6B43] border border-[#0F6B43]/40 rounded-full">
                Timeline: {current.timeline}
              </span>
            </div>

            <h4 className="text-xl font-bold font-serif text-white mb-2">
              {current.title}
            </h4>

            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              <strong className="text-[#0F6B43]">Methodology Approach:</strong> {current.recommendedApproach}
            </p>

            <div className="space-y-3 mb-6">
              <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Standard Deliverable Package:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                {current.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#171717] p-2.5 rounded-lg border border-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-400">
              Need a formal scope proposal with line-item milestones?
            </div>
            <Link
              href="/proposal"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>Request Formal Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
