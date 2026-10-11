import React from 'react';
import ConsultationForm from '@/components/forms/ConsultationForm';
import { Video, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Book a Research Consultation | Aratha Research & Analytics',
  description:
    'Schedule a 30-minute discovery consultation with a Senior Lead Analyst to evaluate research feasibility, datasets, or doctoral methodologies.',
};

export default function ConsultationPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-[#171717] text-white py-16 sm:py-20 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
            Expert Advisory
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
            Book a Research Consultation
          </h1>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Reserve a 30-minute video or phone consultation with a Senior Analyst. Discuss project viability, evaluate data quality, or review doctoral methodology requirements.
          </p>
        </div>
      </section>

      {/* Trust Highlights */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
          <div className="flex items-center gap-2">
            <Video className="w-4 h-4 text-[#0F6B43] shrink-0" />
            <span><strong>Secure Video Link:</strong> Direct consultation via encrypted room.</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#0F6B43] shrink-0" />
            <span><strong>No Obligation:</strong> Focused 30-min analytical scoping.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0F6B43] shrink-0" />
            <span><strong>Mutual NDA Ready:</strong> Safe to share proprietary hypotheses.</span>
          </div>
        </div>
      </div>

      {/* Main Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsultationForm />
      </div>
    </div>
  );
}
