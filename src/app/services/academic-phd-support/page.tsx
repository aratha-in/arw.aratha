import React from 'react';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, CheckCircle2, ArrowRight, BookOpen, Scale, Award } from 'lucide-react';

export const metadata = {
  title: 'Academic & PhD Research Support | Aratha Research',
  description:
    'Doctoral research methodology consulting, conceptual framework development, questionnaire psychometrics, SEM statistical analysis, and ethical thesis advisory.',
};

export default function AcademicPhDSupportPage() {
  const capabilities = [
    { title: 'Research Topic Refinement & Scoping', desc: 'Transforming broad intellectual curiosities into precise, viable, and academically rigorous research questions and sub-problems.' },
    { title: 'Conceptual & Theoretical Framework Design', desc: 'Structuring conceptual models linking independent, dependent, mediating, and moderating variables grounded in established peer-reviewed literature.' },
    { title: 'Methodology Consultation & Design', desc: 'Guidance on choosing quantitative, qualitative, or mixed-methods paradigms, epistemological grounding, sampling frames, and power analysis.' },
    { title: 'Questionnaire Design & Psychometric Validation', desc: 'Developing multi-item Likert scales, pilot testing, assessing face and content validity, and running reliability checks (Cronbach’s alpha).' },
    { title: 'Doctoral Data Analysis (SEM / Regression)', desc: 'Executing advanced statistical tests: PLS-SEM (SmartPLS), CB-SEM (AMOS), exploratory and confirmatory factor analysis (EFA/CFA), and regression models.' },
    { title: 'Publication-Ready APA 7th Edition Tables', desc: 'Generating properly formatted statistical tables, path coefficient diagrams, effect size matrices, and academic methodology appendices.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-[#0F6B43]/30 text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              <GraduationCap className="w-4 h-4" /> Academic & Doctoral Support
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Academic & PhD Research Support
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Consultative methodology guidance, questionnaire psychometrics, and advanced doctoral statistical analysis designed to empower scholars while maintaining uncompromising academic integrity.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/proposal?service=Academic%20%26%20PhD%20Research%20Support"
                className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Request Doctoral Advisory Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                Schedule Methodology Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Integrity Pledge Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#e8f5ee] border border-emerald-300/80 space-y-4">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#0F6B43]" />
            <h2 className="text-xl font-serif font-bold text-gray-900">
              Our Uncompromising Academic Integrity Charter
            </h2>
          </div>
          <p className="text-sm text-gray-800 leading-relaxed">
            Aratha Research & Analytics operates strictly as a <strong>methodological and statistical consulting partner</strong>. We are committed to fostering genuine scholarly development. We support the researcher’s own intellect, data, and writing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700 pt-2 border-t border-emerald-200">
            <div className="bg-white p-4 rounded-xl border border-emerald-200/80">
              <strong className="text-red-700 block mb-1">What We NEVER Do:</strong>
              • We do NOT ghostwrite theses or dissertations.<br />
              • We do NOT fabricate or simulate empirical survey data.<br />
              • We do NOT manipulate significance levels (p-hacking).<br />
              • We do NOT guarantee publication in specific journals.
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-200/80 md:col-span-2">
              <strong className="text-[#0F6B43] block mb-1">What We DO Provide:</strong>
              • Consultative guidance on selecting appropriate statistical tests.<br />
              • Data screening, outlier detection, and hygiene of your authentic dataset.<br />
              • Execution of complex statistical packages (SPSS, AMOS, SmartPLS, R).<br />
              • Education on how to interpret APA tables so you can defend your work with confidence.
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight mb-4">
            Doctoral Scoping & Consultation Areas
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl leading-relaxed mb-8">
            Every consultation is led by doctorally qualified analysts with deep experience publishing in Scopus, Web of Science, and ABDC-indexed journals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-xs space-y-2">
                <span className="w-7 h-7 rounded-md bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center font-bold text-xs mb-3">
                  0{i + 1}
                </span>
                <h3 className="font-serif font-bold text-base text-gray-900">{c.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables Section */}
        <div className="bg-[#FAFAF8] rounded-3xl p-8 sm:p-12 border border-gray-200 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              Scholarly Outputs
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Doctoral Support Deliverables Package
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We empower you to arrive at your doctoral thesis defense with total confidence in your methodology and mathematical appendices.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Methodological Framework Document:</strong> Clearly defined hypotheses, operational definitions, and rationale for statistical tests.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Psychometrically Validated Instrument:</strong> Survey scale with verified construct validity, factor loadings, and reliability benchmarks.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>APA 7th Edition Statistical Tables:</strong> Formatted summary tables for regression, mediation bootstrapping, or SEM path coefficients.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Oral Defense Coaching Session:</strong> 60-minute mock defense where our senior academic analyst quizzes you on potential examiner questions.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">
                Doctoral Case Highlight
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
                Structural Equation Modeling for Behavioral Economics PhD
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Advised a PhD scholar at the University of Cambridge on structural equation modeling across a 1,600-respondent FinTech survey. Verified discriminant validity via HTMT ratios and bootstrapped 5,000 resamples to test complex moderation interactions.
              </p>
            </div>
            <Link
              href="/proposal?service=Academic%20%26%20PhD%20Research%20Support"
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors"
            >
              Discuss Your Dissertation Scope
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
