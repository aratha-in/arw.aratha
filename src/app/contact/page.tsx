'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Connect With Our Research Team
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Whether exploring a corporate due diligence engagement, commissioning a market intelligence report, or seeking doctoral statistical advisory.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-md space-y-6">
              <h2 className="text-xl font-serif font-bold text-gray-900 border-b pb-4">
                Advisory & Proposal Desks
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block">Proposal & Project Briefs:</span>
                    <a href="mailto:proposals@aratharesearch.com" className="text-[#0F6B43] hover:underline">
                      proposals@aratharesearch.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block">Direct Inquiries:</span>
                    <a href="tel:+18005550199" className="text-gray-700 hover:text-[#0F6B43]">
                      +1 (800) 555-0199 (Americas)
                    </a>
                    <span className="block text-gray-500 mt-0.5">+44 20 7946 0912 (EMEA / UK)</span>
                    <span className="block text-gray-500 mt-0.5">+91 (22) 6700-4100 (Asia-Pacific)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block">Response Standard:</span>
                    <span className="text-gray-600">All formal project briefs receive review within 12 business hours.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  href="/consultation"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 30-Min Consultation Directly</span>
                </Link>
                <Link
                  href="/proposal"
                  className="w-full text-center py-2.5 px-4 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50 text-xs font-medium transition-colors"
                >
                  Submit Detailed Proposal Brief
                </Link>
              </div>
            </div>

            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-gray-200 text-xs text-gray-600 space-y-2">
              <span className="font-bold text-gray-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#0F6B43]" /> Non-Disclosure Agreement (NDA) Request:
              </span>
              <p>
                If your organisation requires an executed Mutual NDA prior to sharing proprietary datasets or target company names, please request our standard bilateral agreement at{' '}
                <a href="mailto:legal@aratharesearch.com" className="text-[#0F6B43] hover:underline font-semibold">
                  legal@aratharesearch.com
                </a>.
              </p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-md space-y-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900">
              Send an Advisory Query
            </h2>
            <p className="text-xs text-gray-600">
              For rapid project quotes or scope clarifications, please complete the quick form below:
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for contacting Aratha Research. Your query has been received and routed to our Senior Lead Analyst.');
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#0F6B43] outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#0F6B43] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Organisation / University</label>
                <input
                  type="text"
                  placeholder="Company or institution name"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#0F6B43] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Subject / Practice Area</label>
                <select className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#0F6B43] outline-hidden bg-white">
                  <option>Company Research & Corporate Intelligence</option>
                  <option>Market Research & Market Intelligence</option>
                  <option>Business Research & Strategic Analysis</option>
                  <option>Data Analysis & Statistical Analysis</option>
                  <option>Academic & PhD Research Support</option>
                  <option>Custom Research Report Generation</option>
                  <option>General Inquiry / Partnership</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Message / Project Summary</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide context regarding your research mandate or questions..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-[#0F6B43] outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                Send Message to Advisory Team
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
