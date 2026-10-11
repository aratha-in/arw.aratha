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
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  Search,
  Activity,
  FileSpreadsheet,
  Award,
  Users,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { servicesData, clientSegments, methodologyPhases, caseStudiesData, articlesData, faqsData } from '@/lib/data';
import ScopeEstimator from '@/components/ui/ScopeEstimator';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#171717] via-[#1c221e] to-[#171717] text-white pt-16 sm:pt-24 pb-20 sm:pb-32 border-b border-gray-800">
        {/* Subtle background analytical grid & glowing accents */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0F6B43]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0F6B43] animate-pulse" />
              <span>Independent Corporate & Academic Research Firm</span>
              <span className="text-gray-600">|</span>
              <span className="text-[#0F6B43] font-semibold">Evidence-Based Insights</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1]">
              Research That Informs.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Insights That Matter.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Aratha Research & Analytics delivers company research, market intelligence, business analysis, data analytics, and customised research reports to help organisations and researchers make informed decisions.
            </p>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/proposal"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0F6B43] hover:bg-[#09472c] text-white font-semibold text-base transition-all shadow-lg shadow-[#0F6B43]/30 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>Request a Research Proposal</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-base transition-all border border-white/20 flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left border-t border-gray-800/80">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">100%</div>
                <div className="text-xs text-gray-400 mt-0.5">Empirical & Methodological Rigor</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">24–48h</div>
                <div className="text-xs text-gray-400 mt-0.5">Rapid Proposal Turnaround</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">Strict NDA</div>
                <div className="text-xs text-gray-400 mt-0.5">Confidentiality & Data Protection</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400">Zero</div>
                <div className="text-xs text-gray-400 mt-0.5">Data Fabrication or Ghostwriting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION / POSITIONING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f5ee] text-[#0F6B43] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> About Aratha Research & Analytics
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
              Transforming complex information and datasets into decision-grade intelligence.
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              Aratha is a dedicated research and analytics firm providing comprehensive research, quantitative data analysis, business intelligence, and professional report development services.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              We help businesses, entrepreneurs, organisations, researchers, and academic institutions make informed decisions through evidence-based research, data-driven insights, and structured analytical reports.
            </p>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-800 space-y-1">
              <p className="font-semibold text-[#0F6B43]">Our Fundamental Promise:</p>
              <p className="font-serif italic text-gray-700">“Research with purpose. Analysis with clarity. Reports with impact.”</p>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="text-sm font-semibold text-[#0F6B43] hover:underline flex items-center gap-1.5"
              >
                <span>Read more about our firm & leadership</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/90 space-y-6">
              <h3 className="text-xs uppercase font-bold tracking-wider text-gray-400 border-b pb-3">
                Three Pillars of Practice
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 font-serif">Research Services</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Company due diligence, corporate intelligence, competitor benchmarking, market sizing (TAM/SAM/SOM), consumer behavior, and business feasibility studies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 font-serif">Data Analysis & Modeling</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Primary and secondary data cleaning, descriptive and inferential statistics, econometric regression, hypothesis testing, factor analysis, and interactive visual dashboards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#e8f5ee] text-[#0F6B43] flex items-center justify-center shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 font-serif">Research Reports & Documentation</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Board-level corporate dossiers, market intelligence publications, feasibility monographs, and academic research appendices formatted for immediate strategic impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES MATRIX */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43] bg-emerald-50 px-3 py-1 rounded-full">
              Full-Spectrum Research Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore our individual service specializations tailored for corporate enterprises, consulting firms, investors, and doctoral scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((srv) => (
              <div
                key={srv.id}
                className="group bg-[#FAFAF8] rounded-2xl p-7 border border-gray-200/90 hover:border-[#0F6B43]/50 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 group-hover:bg-[#0F6B43] group-hover:text-white text-[#0F6B43] flex items-center justify-center mb-5 transition-colors shadow-xs">
                    {srv.slug === 'company-research' && <Building2 className="w-6 h-6" />}
                    {srv.slug === 'market-research' && <TrendingUp className="w-6 h-6" />}
                    {srv.slug === 'business-research' && <Compass className="w-6 h-6" />}
                    {srv.slug === 'data-analysis' && <BarChart3 className="w-6 h-6" />}
                    {srv.slug === 'academic-phd-support' && <GraduationCap className="w-6 h-6" />}
                    {srv.slug === 'research-reports' && <FileText className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#0F6B43] transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-1.5 mb-6 text-xs text-gray-700">
                    {srv.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F6B43] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="text-xs font-semibold text-[#0F6B43] group-hover:underline flex items-center gap-1"
                  >
                    <span>View Service Scope</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href={`/proposal?service=${encodeURIComponent(srv.title)}`}
                    className="text-[11px] font-medium text-gray-500 hover:text-gray-900"
                  >
                    Request Brief →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <span>Compare All Services & Deliverables Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE SCOPE ESTIMATOR COMPONENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScopeEstimator />
      </section>

      {/* 5. ACADEMIC & PHD RESEARCH SUPPORT HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-950 via-[#132d20] to-[#171717] rounded-3xl p-8 sm:p-14 text-white border border-[#0F6B43]/30 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0F6B43] text-white uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" /> Academic & Doctoral Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Empowering Scholars with Methodological Rigor & Statistical Precision
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                We assist PhD candidates, postdoctoral fellows, and academic researchers in formulating conceptual frameworks, validating psychometric instruments, and executing advanced statistical analysis (SPSS, R, SmartPLS, AMOS, Stata).
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs text-emerald-200/90 leading-relaxed space-y-1">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0F6B43]" /> Our Non-Negotiable Academic Integrity Policy:
                </span>
                <p>
                  We operate as methodological advisors. We do NOT ghostwrite dissertations, fabricate empirical data, alter significance levels, or promise journal acceptances. We empower researchers to understand, interpret, and defend their own scholarship.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/services/academic-phd-support"
                  className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
                >
                  <span>Explore Academic Support Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/consultation"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Methodology Call</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/30 rounded-2xl p-6 border border-white/10 space-y-3.5 text-xs text-gray-300">
              <h4 className="font-semibold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Key Doctoral Consulting Areas:
              </h4>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Structural Equation Modeling (PLS-SEM & CB-SEM)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Questionnaire Reliability (Cronbach Alpha & Composite Reliability)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Construct Validity (HTMT, Convergent & Discriminant)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mediation & Moderation bootstrapping models</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Publication-ready APA 7th Edition statistical tables</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES & CLIENT SEGMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43] bg-emerald-50 px-3 py-1 rounded-full">
            Sectors We Empower
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
            Industries & Client Segments Served
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            From Fortune-listed corporations and early-stage founders to academic laboratories and non-governmental bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientSegments.map((seg, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0F6B43]/50 hover:shadow-lg transition-all space-y-3 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                  {seg.stats}
                </span>
                <h3 className="text-base font-serif font-bold text-gray-900 mt-2">
                  {seg.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">
                  {seg.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-gray-400 block mb-1">
                  Common Engagements:
                </span>
                <div className="flex flex-wrap gap-1">
                  {seg.keyNeeds.slice(0, 2).map((k, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-[#0F6B43] font-medium">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/industries"
            className="text-sm font-semibold text-[#0F6B43] hover:underline inline-flex items-center gap-1.5"
          >
            <span>View complete industry intelligence practices</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. RESEARCH METHODOLOGY & WORKFLOW */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43] bg-emerald-50 px-3 py-1 rounded-full">
              Analytical Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight">
              Our 6-Phase Research Methodology
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every mandate follows a proven, auditable quality protocol to guarantee methodological validity and actionable strategic relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methodologyPhases.map((phase) => (
              <div
                key={phase.step}
                className="bg-[#FAFAF8] rounded-2xl p-7 border border-gray-200/90 relative overflow-hidden space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-[#0F6B43]">
                    {phase.step}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-emerald-100/60 text-[#0F6B43] flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-gray-900">
                  {phase.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {phase.description}
                </p>

                <div className="pt-3 border-t border-gray-200/70">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1.5">
                    Core Activities:
                  </span>
                  <ul className="space-y-1 text-xs text-gray-700">
                    {phase.activities.slice(0, 3).map((act, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0F6B43]" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F6B43] text-white text-sm font-semibold hover:bg-[#09472c] transition-colors"
            >
              <span>Explore Detailed Methodology & Quality Assurance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. SELECTED PROJECTS & CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43] bg-emerald-50 px-3 py-1 rounded-full">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight mt-2">
              Selected Projects & Case Studies
            </h2>
            <p className="text-gray-600 text-sm mt-1 max-w-xl">
              Concrete examples of analytical investigations and strategic impacts delivered across enterprise and academic clients.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="text-sm font-semibold text-[#0F6B43] hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>All Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono px-2 py-0.5 rounded bg-emerald-50 text-[#0F6B43] font-semibold">
                    {cs.industry}
                  </span>
                  <span className="text-gray-400 font-medium">{cs.clientType}</span>
                </div>

                <h3 className="text-base font-serif font-bold text-gray-900 leading-snug">
                  {cs.title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-3">
                  {cs.challenge}
                </p>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-700 space-y-1">
                  <span className="font-semibold text-[#0F6B43] block">Key Outcome:</span>
                  <p>{cs.outcomes[0]}</p>
                </div>
              </div>

              {cs.testimonialSnippet && (
                <div className="mt-6 pt-4 border-t border-gray-100 italic text-xs text-gray-500">
                  “{cs.testimonialSnippet}”
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. RESEARCH INSIGHTS & ARTICLES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43] bg-emerald-50 px-3 py-1 rounded-full">
              Analytical Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight mt-2">
              Research Insights & Briefs
            </h2>
            <p className="text-gray-600 text-sm mt-1 max-w-xl">
              Practical guides on econometric modeling, market sizing methodologies, and executive reporting architecture.
            </p>
          </div>
          <Link
            href="/insights"
            className="text-sm font-semibold text-[#0F6B43] hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <Link
              key={art.id}
              href={`/insights/${art.slug}`}
              className="group bg-white rounded-2xl p-7 border border-gray-200 hover:border-[#0F6B43]/50 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="text-[#0F6B43] font-semibold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-base font-serif font-bold text-gray-900 group-hover:text-[#0F6B43] transition-colors leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>{art.author.split('—')[0]}</span>
                <span className="text-[#0F6B43] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Brief →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 10. FAQ SECTION ACCORDION PREVIEW */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0F6B43] bg-emerald-50 px-3 py-1 rounded-full">
              Client Questions
            </span>
            <h2 className="text-3xl font-serif font-bold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm">
              Answers regarding our scope, engagement models, NDA handling, and academic policies.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData[0].questions.map((faq, idx) => (
              <div key={idx} className="bg-[#FAFAF8] rounded-xl p-5 border border-gray-200 space-y-2">
                <h3 className="text-sm font-bold text-gray-900 flex items-start gap-2">
                  <span className="text-[#0F6B43] font-mono">Q:</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-gray-600 pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-xs font-semibold text-[#0F6B43] hover:underline"
            >
              View all categorized FAQs (Services, Academic Support, Proposals) →
            </Link>
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CONSULTATION / PROPOSAL CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-14 text-white text-center border border-gray-800 shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-xl bg-[#0F6B43] text-white flex items-center justify-center mx-auto">
            <Activity className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight max-w-2xl mx-auto">
            Ready to Commission Your Research Mandate?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you require an emergency competitor due diligence dossier or empirical econometric modeling for a doctoral thesis, our senior analysts are ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/proposal"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0F6B43]/20 flex items-center justify-center gap-2"
            >
              <span>Submit Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/consultation"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all border border-white/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book 30-Min Consultation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
