'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Highlight Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0F6B43]/20 via-[#1a2e24] to-[#171717] border border-[#0F6B43]/40 mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F6B43] text-white uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" /> Client Briefing Desk Open
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              Have an upcoming research question or dataset to analyze?
            </h3>
            <p className="text-sm text-gray-300 max-w-2xl mt-1">
              Submit your project brief. Receive a structured methodology framework, deliverables scope, and custom proposal within 24–48 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/consultation"
              className="px-5 py-2.5 text-sm font-medium rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
            >
              Book Consultation
            </Link>
            <Link
              href="/proposal"
              className="px-6 py-2.5 text-sm font-semibold rounded-lg bg-[#0F6B43] hover:bg-[#0a4d30] text-white transition-all shadow-md flex items-center gap-2"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800 text-sm">
          {/* Col 1: About */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#0F6B43] flex items-center justify-center text-white font-bold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  ARATHA
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-[#0F6B43]">
                  Research & Analytics
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm">
              Aratha is an independent research consultancy and data analytics firm. We conduct research, analyse complex datasets, develop strategic intelligence, and produce executive research reports for corporate enterprises, consulting firms, startups, and academic scholars.
            </p>

            <div className="p-3.5 rounded-lg bg-gray-900/80 border border-gray-800 text-xs text-gray-300">
              <span className="font-semibold text-white block mb-0.5">Our Promise:</span>
              <span className="text-[#0F6B43] font-medium">Research with purpose.</span>{' '}
              <span className="text-gray-300 font-medium">Analysis with clarity.</span>{' '}
              <span className="text-white font-medium">Reports with impact.</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#0F6B43]" />
              <span>Enterprise-grade data security & strict mutual NDAs standard on all projects.</span>
            </div>
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 font-serif">
              Core Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/company-research" className="text-gray-400 hover:text-white transition-colors">
                  Company Research
                </Link>
              </li>
              <li>
                <Link href="/services/market-research" className="text-gray-400 hover:text-white transition-colors">
                  Market Research
                </Link>
              </li>
              <li>
                <Link href="/services/business-research" className="text-gray-400 hover:text-white transition-colors">
                  Business Research
                </Link>
              </li>
              <li>
                <Link href="/services/data-analysis" className="text-gray-400 hover:text-white transition-colors">
                  Data & Statistical Analysis
                </Link>
              </li>
              <li>
                <Link href="/services/academic-phd-support" className="text-gray-400 hover:text-white transition-colors">
                  Academic & PhD Support
                </Link>
              </li>
              <li>
                <Link href="/services/research-reports" className="text-gray-400 hover:text-white transition-colors">
                  Research Report Generation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#0F6B43] font-medium hover:underline inline-flex items-center gap-1 mt-1">
                  All Services Matrix <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research & Insights */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 font-serif">
              Firm & Methodology
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Aratha
                </Link>
              </li>
              <li>
                <Link href="/methodology" className="text-gray-400 hover:text-white transition-colors">
                  Our Research Methodology
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-white transition-colors">
                  Client Segments Served
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Selected Projects & Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-400 hover:text-white transition-colors">
                  Research Articles & Insights
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 pt-1">
                  <Lock className="w-3 h-3 text-[#0F6B43]" />
                  <span>Admin Intelligence Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Consultations */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4 font-serif">
              Contact & Scoping
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500">Proposal Desk</span>
                  <a href="mailto:proposals@aratharesearch.com" className="hover:text-white text-gray-300">
                    proposals@aratharesearch.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500">Direct Inquiries</span>
                  <a href="tel:+18005550199" className="hover:text-white text-gray-300">
                    +1 (800) 555-0199 / +91 (22) 6700-4100
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs text-gray-500">Global Hubs</span>
                  <span className="text-gray-300">
                    London, UK · Mumbai, India · New York, US
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-gray-800">
              <Link
                href="/proposal"
                className="w-full text-center block py-2 px-3 rounded-md bg-[#0F6B43]/20 hover:bg-[#0F6B43]/30 text-[#0F6B43] border border-[#0F6B43]/40 text-xs font-semibold transition-colors"
              >
                Submit Project Brief →
              </Link>
            </div>
          </div>
        </div>

        {/* Academic Integrity Pledge Box */}
        <div className="my-8 p-4 rounded-xl bg-gray-900/60 border border-gray-800 text-xs text-gray-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#0F6B43] shrink-0 mt-0.5" />
            <div>
              <span className="text-white font-semibold">Strict Academic Integrity Commitment:</span>{' '}
              Aratha supports doctoral scholars and academic researchers through consultative research design, questionnaire formulation, and statistical data analysis. We do not fabricate findings, manipulate survey data, guarantee journal acceptances, or ghostwrite academic dissertations.
            </div>
          </div>
          <Link
            href="/services/academic-phd-support"
            className="text-xs text-[#0F6B43] hover:underline font-medium shrink-0"
          >
            Read Ethics Policy
          </Link>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Aratha Research & Analytics. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy & NDA
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/faq" className="hover:text-gray-300 transition-colors">
              FAQ
            </Link>
            <Link href="/admin" className="hover:text-gray-300 transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3 text-[#0F6B43]" />
              <span>Admin Access</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
