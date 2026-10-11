import React from 'react';
import Link from 'next/link';
import { BarChart3, CheckCircle2, ArrowRight, Activity, Terminal, Database, LineChart } from 'lucide-react';

export const metadata = {
  title: 'Data Analysis & Statistical Analysis Services | Aratha Research',
  description:
    'Advanced econometric modeling, survey data cleaning, hypothesis testing, multivariate regression, SEM, and interactive dashboards using Python, R, and SPSS.',
};

export default function DataAnalysisPage() {
  const capabilities = [
    { title: 'Data Cleaning, Hygiene & Imputation', desc: 'Systematic screening for outliers, multicollinearity, skewness, missing value imputation, and verification of normality assumptions.' },
    { title: 'Survey & Questionnaire Data Analysis', desc: 'Cross-tabulation, sample weighting, non-response bias testing, Likert-scale transformation, and categorical data modeling.' },
    { title: 'Descriptive & Inferential Statistics', desc: 'Mean, median, variance, standard deviations, paired/independent t-tests, ANOVA, MANOVA, and chi-square tests with effect sizes.' },
    { title: 'Correlation & Multivariate Regression', desc: 'Ordinary Least Squares (OLS), binary/multinomial logistic regression, hierarchical linear modeling, and time-series forecasting.' },
    { title: 'Structural Equation Modeling & Factor Analysis', desc: 'Exploratory Factor Analysis (EFA), Confirmatory Factor Analysis (CFA), and Partial Least Squares SEM (PLS-SEM) for multi-construct frameworks.' },
    { title: 'Visualisation & Interactive Dashboards', desc: 'Custom executive charts, distribution plots, correlation heatmaps, and interactive PowerBI/Tableau/Web dashboards.' }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-[#0F6B43]/30 text-xs font-semibold uppercase tracking-wider text-[#0F6B43]">
              <BarChart3 className="w-4 h-4" /> Core Practice Area
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Data Analysis & Statistical Analysis Services
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Transform raw datasets into mathematically validated findings. From econometric models to doctoral survey analysis, we ensure every statistical test is executed with total precision.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/proposal?service=Data%20Analysis%20%26%20Statistical%20Analysis"
                className="px-6 py-3 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
              >
                <span>Request Statistical Modeling</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/consultation"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider transition-all border border-white/20"
              >
                Book Analyst Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 tracking-tight mb-4">
            Advanced Quantitative Capabilities & Tooling
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl leading-relaxed mb-8">
            Our team works across Python, R, SPSS, Stata, SmartPLS, and SAS. Every project delivers fully documented syntax and code notebooks alongside plain-English executive summaries.
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
              Standard Data Assets
            </span>
            <h3 className="text-2xl font-serif font-bold text-gray-900">
              Statistical Deliverables Package
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We never just hand over a pile of numbers. We provide complete reproducibility, transparent code, and clear narrative interpretation.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Cleaned & Imputed Dataset:</strong> Formatted files in CSV, Excel, SPSS (.sav), or R (.RData) with detailed variable labels.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Statistical Findings Report (PDF):</strong> Publication-ready APA 7th edition tables, path diagrams, effect size diagnostics, and hypothesis conclusions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Documented Code & Syntax Notebook:</strong> Fully commented scripts in R (.Rmd), Python (.ipynb), or SPSS (.sps) ensuring complete reproducibility.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                <span><strong>Analyst Briefing Walkthrough:</strong> 45-minute live consultation reviewing all mathematical outputs so you understand every p-value and coefficient.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">
                Recent Data Analytics Engagement
              </span>
              <h4 className="font-serif font-bold text-lg text-gray-900 mb-2">
                Multivariate Clustering of 250,000 Retail Transactions
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Cleaned and segmented transactional point-of-sale data for an FMCG retail conglomerate. Applied K-Means silhouette clustering and market basket association rules (Apriori), uncovering 4 high-margin consumer cohorts driving 68% of cumulative net profit.
              </p>
            </div>
            <Link
              href="/proposal?service=Data%20Analysis%20%26%20Statistical%20Analysis"
              className="w-full text-center py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors"
            >
              Commission Statistical Analysis Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
