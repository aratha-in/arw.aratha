import React from 'react';
import Link from 'next/link';
import { HelpCircle, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { faqsData } from '@/lib/data';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | Aratha Research',
  description:
    'Answers to frequently asked questions about Aratha Research & Analytics: scope, confidentiality, statistical packages, academic ethics, turnaround times, and proposals.',
};

export default function FAQPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Clear Answers
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Find transparent answers regarding our research specializations, statistical toolsets, academic integrity protocols, and client proposal procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Categorized FAQs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {faqsData.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <span className="w-7 h-7 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center font-bold text-xs">
                0{idx + 1}
              </span>
              <h2 className="text-2xl font-serif font-bold text-gray-900">
                {cat.category}
              </h2>
            </div>

            <div className="space-y-4">
              {cat.questions.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#0F6B43]/40 transition-colors space-y-2"
                >
                  <h3 className="text-base font-bold text-gray-900 flex items-start gap-2.5">
                    <span className="text-[#0F6B43] font-mono">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-gray-600 pl-6 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-10 border border-gray-200 text-center space-y-4">
          <h3 className="text-2xl font-serif font-bold text-gray-900">
            Have a Specific Question About Your Upcoming Project?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-lg mx-auto">
            Our team responds to all formal project scoping queries within 12 business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/consultation"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Book 30-Min Discovery Call
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors"
            >
              Contact Advisory Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
