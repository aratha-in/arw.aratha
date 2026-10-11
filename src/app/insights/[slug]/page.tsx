import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, User, CheckCircle2, Share2, ArrowRight } from 'lucide-react';
import { articlesData } from '@/lib/data';

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="pb-20">
      {/* Article Header */}
      <section className="bg-[#171717] text-white py-16 sm:py-24 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#0F6B43] text-white">
              {article.category}
            </span>
            <span className="text-xs text-gray-400">·</span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-gray-400 border-t border-gray-800">
            <span className="font-semibold text-gray-200">{article.author}</span>
            <span>·</span>
            <span>{article.publishDate}</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-6 text-gray-800 text-base leading-relaxed">
            <p className="text-lg font-serif italic text-gray-700 bg-gray-50 p-6 rounded-2xl border-l-4 border-[#0F6B43]">
              {article.excerpt}
            </p>

            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="my-8 p-6 bg-[#FAFAF8] rounded-2xl border border-gray-200 space-y-3">
              <h3 className="text-sm uppercase font-bold tracking-wider text-[#0F6B43]">
                Summary Key Takeaways:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0F6B43] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4">
              <span className="text-xs uppercase font-bold text-gray-400 block">
                Commission Custom Analysis
              </span>
              <h3 className="font-serif font-bold text-lg text-gray-900">
                Need similar analytical rigor applied to your business?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our analysts are available to review your research questions and prepare a bespoke scope of work.
              </p>
              <Link
                href="/proposal"
                className="w-full text-center block py-2.5 px-4 rounded-xl bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors"
              >
                Request Research Proposal
              </Link>
            </div>

            <div className="bg-[#FAFAF8] p-5 rounded-2xl border border-gray-200 text-xs text-gray-600 space-y-2">
              <strong className="text-gray-900 block">About Aratha Publications:</strong>
              <p>
                All articles are authored by our active consulting analysts based on empirical field experience and econometric best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
