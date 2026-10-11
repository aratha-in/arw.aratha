import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, User, Calendar, Tag } from 'lucide-react';
import { articlesData } from '@/lib/data';

export const metadata = {
  title: 'Research Insights & Articles | Aratha Research',
  description:
    'Thought leadership, econometric modeling guides, market sizing methodologies, and academic integrity insights from the Aratha analyst team.',
};

export default function InsightsPage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="bg-[#171717] text-white py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase font-bold tracking-widest text-[#0F6B43] bg-emerald-950/80 px-3 py-1 rounded-md border border-[#0F6B43]/30">
              Analyst Publications
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              Research Insights & Analytical Briefs
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Perspectives, mathematical guidelines, and methodology articles written by our Senior Economists, Statistical Modelers, and Research Directors.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#0F6B43]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="font-semibold text-[#0F6B43] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                <h2 className="text-xl font-serif font-bold text-gray-900 leading-snug">
                  <Link href={`/insights/${art.slug}`} className="hover:text-[#0F6B43] transition-colors">
                    {art.title}
                  </Link>
                </h2>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 text-xs text-gray-700">
                  <span className="font-semibold text-gray-900 block mb-1">Key Takeaway:</span>
                  <p className="italic text-gray-600">“{art.keyTakeaways[0]}”</p>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs">
                <div>
                  <span className="font-semibold text-gray-800 block">{art.author}</span>
                  <span className="text-gray-400">{art.publishDate}</span>
                </div>
                <Link
                  href={`/insights/${art.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-[#e8f5ee] text-[#0F6B43] font-semibold hover:bg-[#0F6B43] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
