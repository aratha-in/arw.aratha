'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, Clock, CheckCircle2, AlertCircle, Video, User, Building, ArrowRight } from 'lucide-react';

const timeSlots = [
  '09:00 - 09:45 AM',
  '11:00 - 11:45 AM',
  '02:00 - 02:45 PM',
  '04:00 - 04:45 PM',
  '06:30 - 07:15 PM',
];

const consultationTopics = [
  'Research Methodology & Framework Scoping',
  'Company Intelligence & Due Diligence Brief',
  'Market Sizing & Feasibility Study Advisory',
  'Statistical Analysis & Doctoral Dissertation Support',
  'Custom Research Report Specifications',
  'General Enterprise Research Partnership',
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    preferredDate: '',
    preferredTimeSlot: '02:00 - 02:45 PM',
    consultationTopic: 'Research Methodology & Framework Scoping',
    projectOverview: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName || !formData.email || !formData.preferredDate || !formData.preferredTimeSlot) {
      setError('Please provide your name, email, preferred date, and time slot.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to book consultation');
      }

      setBookingRef(data.referenceNumber);
    } catch (err: any) {
      setError(err.message || 'An error occurred while booking your consultation.');
    } finally {
      setLoading(false);
    }
  };

  if (bookingRef) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-emerald-100 text-center max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-[#0F6B43] rounded-full mb-3">
          Consultation Slot Reserved
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
          Research Discovery Call Confirmed
        </h3>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          We have scheduled your session with an Aratha Senior Research Lead. A calendar invitation and secure video conference link have been emailed to <strong>{formData.email}</strong>.
        </p>

        <div className="my-6 p-5 bg-[#FAFAF8] rounded-xl border border-gray-200 text-left text-xs space-y-2">
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">Booking Reference:</span>
            <span className="font-mono font-bold text-[#0F6B43]">{bookingRef}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">Reserved Date:</span>
            <span className="font-semibold text-gray-800">{formData.preferredDate}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500 font-medium">Time Window:</span>
            <span className="font-semibold text-gray-800">{formData.preferredTimeSlot}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Primary Topic:</span>
            <span className="font-semibold text-gray-800">{formData.consultationTopic}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/proposal"
            className="px-5 py-2.5 rounded-lg bg-[#0F6B43] text-sm font-semibold text-white hover:bg-[#09472c] transition-colors"
          >
            Submit Project Brief in Advance
          </Link>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-200/80 space-y-6"
    >
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Dr. / Mr. / Ms. Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Work / Academic Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@institution.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Phone / Mobile Number
          </label>
          <input
            type="tel"
            placeholder="+1 555-0199 / +91 ..."
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Organisation / University
          </label>
          <input
            type="text"
            placeholder="e.g. Cambridge, Apex Advisory, etc."
            value={formData.organisation}
            onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Preferred Consultation Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            required
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
            Preferred Time Window (Local Time) <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.preferredTimeSlot}
            onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 bg-white outline-hidden"
          >
            {timeSlots.map((ts) => (
              <option key={ts} value={ts}>
                {ts}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
          Consultation Focus Area <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.consultationTopic}
          onChange={(e) => setFormData({ ...formData, consultationTopic: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 bg-white outline-hidden font-medium"
        >
          {consultationTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
          Brief Context / Specific Questions to Address
        </label>
        <textarea
          rows={3}
          placeholder="Help us pair you with the best specialist: mention current data availability, thesis stage, or corporate objective..."
          value={formData.projectOverview}
          onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-xl bg-[#0F6B43] hover:bg-[#09472c] text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
      >
        {loading ? (
          <>
            <Clock className="w-5 h-5 animate-spin" />
            <span>Reserving Slot...</span>
          </>
        ) : (
          <>
            <Video className="w-5 h-5" />
            <span>Confirm Research Consultation Call</span>
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        All discovery calls are conducted confidentially under mutual NDA upon request. No sales pitches—just practical analytical scoping.
      </p>
    </form>
  );
}
