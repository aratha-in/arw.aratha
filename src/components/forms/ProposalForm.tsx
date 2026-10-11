'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  ShieldCheck,
  Calendar,
  Building2,
  DollarSign,
  Layers,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { ClientCategory, ServiceType, DeliverableFormat } from '@/types';

const clientCategories: ClientCategory[] = [
  'Corporate / Enterprise',
  'Startup / Entrepreneur',
  'Management Consulting Firm',
  'Financial & Business Analyst',
  'Academic Institution',
  'PhD Candidate / Research Scholar',
  'Faculty & University Researcher',
  'NGO / Development Organisation',
];

const serviceOptions: ServiceType[] = [
  'Company Research & Corporate Intelligence',
  'Market Research & Market Intelligence',
  'Business Research & Strategic Analysis',
  'Data Analysis & Statistical Analysis',
  'Academic & PhD Research Support',
  'Research Report Generation',
  'Industry & Competitor Research',
  'Feasibility Studies & Business Analysis',
];

const deliverableOptions: DeliverableFormat[] = [
  'Executive PDF Report',
  'Excel Financial / Statistical Model',
  'PowerPoint Presentation Deck',
  'Raw Cleaned Dataset (CSV/SPSS/R)',
  'Interactive Dashboard',
  'Comprehensive Research Monograph',
];

const dataAvailableOptions = [
  'Yes - Cleaned Dataset',
  'Yes - Raw Data / Surveys',
  'Partial / Secondary Data Only',
  'No Data - Requires Primary Collection',
  'Desk Research Required',
];

export default function ProposalForm({ initialService }: { initialService?: ServiceType }) {
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    clientCategory: 'Corporate / Enterprise' as ClientCategory,
    service: (initialService || 'Company Research & Corporate Intelligence') as ServiceType,
    projectTitle: '',
    description: '',
    dataAvailable: 'Partial / Secondary Data Only',
    expectedDeliverables: ['Executive PDF Report'] as DeliverableFormat[],
    reportFormat: 'Comprehensive Executive PDF + Slide Deck',
    deadline: '',
    estimatedBudget: '',
    preferredConsultationDate: '',
    consentPrivacy: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const toggleDeliverable = (item: DeliverableFormat) => {
    setFormData((prev) => {
      const exists = prev.expectedDeliverables.includes(item);
      if (exists) {
        return {
          ...prev,
          expectedDeliverables: prev.expectedDeliverables.filter((d) => d !== item),
        };
      } else {
        return {
          ...prev,
          expectedDeliverables: [...prev.expectedDeliverables, item],
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName || !formData.email || !formData.organisation || !formData.projectTitle || !formData.description) {
      setError('Please fill in all mandatory fields (Name, Work Email, Organisation, Project Title, Description).');
      return;
    }

    if (!formData.consentPrivacy) {
      setError('Please confirm that you agree to our Privacy & Data Handling policy.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit proposal request');
      }

      setSubmittedReference(data.referenceNumber);
    } catch (err: any) {
      setError(err.message || 'An error occurred while transmitting your request.');
    } finally {
      setLoading(false);
    }
  };

  if (submittedReference) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl border border-emerald-100 text-center max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-[#0F6B43] rounded-full mb-3">
          Proposal Request Logged
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight">
          Proposal Brief Successfully Submitted
        </h3>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed max-w-lg mx-auto">
          Your project specifications have been securely logged in our intelligence repository. A confirmation notice has been dispatched to <strong>{formData.email}</strong>.
        </p>

        <div className="my-8 p-6 bg-[#FAFAF8] rounded-xl border border-gray-200 text-left">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
            <span className="text-xs uppercase font-semibold tracking-wider text-gray-500">
              Unique Reference Number
            </span>
            <span className="text-base font-mono font-bold text-[#0F6B43] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              {submittedReference}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-600">
            <div>
              <span className="font-semibold text-gray-700 block">Project Scope:</span>
              <span className="truncate block">{formData.projectTitle}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 block">Service:</span>
              <span className="truncate block">{formData.service}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 block">Client Category:</span>
              <span>{formData.clientCategory}</span>
            </div>
            <div>
              <span className="font-semibold text-gray-700 block">Target Deadline:</span>
              <span>{formData.deadline || 'Flexible'}</span>
            </div>
          </div>
        </div>

        <div className="text-left bg-emerald-50/50 p-4 rounded-lg border border-emerald-100 text-xs text-gray-700 space-y-1.5 mb-8">
          <p className="font-bold text-[#0F6B43]">What happens next?</p>
          <p>• Our Lead Analyst will review data requirements and theoretical framework within 12 hours.</p>
          <p>• We prepare a formal Scope of Work, Deliverable Breakdown, and Fixed-Fee Estimate.</p>
          <p>• You will receive your formal research proposal within 24–48 business hours.</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              setSubmittedReference(null);
              setFormData({
                ...formData,
                projectTitle: '',
                description: '',
              });
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Submit Another Mandate
          </button>
          <Link
            href="/admin"
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#0F6B43] text-sm font-semibold text-white hover:bg-[#09472c] transition-all flex items-center justify-center gap-2"
          >
            <span>View in Admin Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-gray-200/80 space-y-8"
    >
      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold">Submission Incomplete:</span> {error}
          </div>
        </div>
      )}

      {/* Section 1: Client & Organisation Details */}
      <div>
        <div className="flex items-center gap-2.5 pb-2 border-b border-gray-100 mb-5">
          <Building2 className="w-5 h-5 text-[#0F6B43]" />
          <h3 className="text-base font-serif font-bold text-gray-900 uppercase tracking-wider">
            1. Client & Organisation Profile
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Arthur Sterling / Priya Menon"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Company / University / Organisation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Titan Corp / Oxford University / Self"
              value={formData.organisation}
              onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Work / Academic Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="name@organization.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Phone / WhatsApp Number
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000 / +91 ..."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Client Category <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.clientCategory}
              onChange={(e) => setFormData({ ...formData, clientCategory: e.target.value as ClientCategory })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 bg-white outline-hidden transition-all"
            >
              {clientCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Section 2: Research Mandate Specifications */}
      <div>
        <div className="flex items-center gap-2.5 pb-2 border-b border-gray-100 mb-5">
          <Layers className="w-5 h-5 text-[#0F6B43]" />
          <h3 className="text-base font-serif font-bold text-gray-900 uppercase tracking-wider">
            2. Research Mandate & Scope
          </h3>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Primary Service Required <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceType })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 bg-white outline-hidden transition-all font-medium"
            >
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Research Topic or Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. European CleanTech Market Opportunity & Competitor Sizing"
              value={formData.projectTitle}
              onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
              Detailed Project Description & Research Objectives <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe your research questions, hypotheses, specific geographies, industry sectors, or analytical challenges you wish to investigate..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                Type of Data Available
              </label>
              <select
                value={formData.dataAvailable}
                onChange={(e) => setFormData({ ...formData, dataAvailable: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 bg-white outline-hidden transition-all"
              >
                {dataAvailableOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                Target Project Deadline
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: Deliverables & Report Format */}
      <div>
        <div className="flex items-center gap-2.5 pb-2 border-b border-gray-100 mb-5">
          <FileText className="w-5 h-5 text-[#0F6B43]" />
          <h3 className="text-base font-serif font-bold text-gray-900 uppercase tracking-wider">
            3. Deliverables & Documentation Format
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">
              Expected Deliverables (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {deliverableOptions.map((item) => {
                const isSelected = formData.expectedDeliverables.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleDeliverable(item)}
                    className={`flex items-center gap-2 p-3 text-xs font-medium rounded-lg border text-left transition-all ${
                      isSelected
                        ? 'border-[#0F6B43] bg-[#e8f5ee] text-[#0F6B43] font-semibold'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-sm flex items-center justify-center shrink-0 border ${
                        isSelected ? 'bg-[#0F6B43] border-[#0F6B43] text-white' : 'border-gray-400 bg-white'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                Specific Report Format / Structure Requirements
              </label>
              <input
                type="text"
                placeholder="e.g. 40-page PDF report with executive slide summary"
                value={formData.reportFormat}
                onChange={(e) => setFormData({ ...formData, reportFormat: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5">
                Estimated Project Budget (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. $5,000 - $10,000 / €8,000"
                value={formData.estimatedBudget}
                onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm text-gray-900 outline-hidden transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Privacy & Submission */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 mb-6">
          <input
            id="privacy-consent"
            type="checkbox"
            required
            checked={formData.consentPrivacy}
            onChange={(e) => setFormData({ ...formData, consentPrivacy: e.target.checked })}
            className="mt-1 w-4 h-4 text-[#0F6B43] focus:ring-[#0F6B43] border-gray-300 rounded cursor-pointer"
          />
          <label htmlFor="privacy-consent" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
            I confirm that the submitted project details are accurate, and I consent to Aratha Research & Analytics processing this information to generate a proposal and feasibility analysis. I understand that all information is handled under strict Non-Disclosure Agreement (NDA) standards.{' '}
            <Link href="/privacy-policy" className="text-[#0F6B43] hover:underline font-semibold" target="_blank">
              Read Privacy Policy
            </Link>
            .
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-xl bg-[#0F6B43] hover:bg-[#09472c] text-white font-semibold text-base transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? (
            <>
              <Clock className="w-5 h-5 animate-spin" />
              <span>Generating Reference & Transmitting Proposal Brief...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Research Proposal Brief</span>
            </>
          )}
        </button>

        <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#0F6B43]" />
          <span>Guaranteed 24–48 hour turnaround on detailed methodology and fee schedule.</span>
        </p>
      </div>
    </form>
  );
}
