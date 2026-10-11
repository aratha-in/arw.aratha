import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Aratha Research & Analytics | Research That Informs. Insights That Matter.',
  description:
    'Aratha Research & Analytics delivers company research, market intelligence, business analysis, data analytics, and customised research reports to help organisations and researchers make informed decisions.',
  keywords: [
    'Company research services',
    'Market research consultancy',
    'Business research firm',
    'Data analysis services',
    'Statistical analysis services',
    'Research report generation',
    'Industry research reports',
    'Business intelligence and market analysis',
    'PhD data analysis support',
    'Academic research methodology consultation'
  ],
  authors: [{ name: 'Aratha Research & Analytics' }],
  openGraph: {
    title: 'Aratha Research & Analytics | Evidence-Based Intelligence & Reports',
    description:
      'Independent research and analytics firm delivering corporate due diligence, market sizing, statistical data analysis, and publication-ready research reports.',
    url: 'https://aratharesearch.com',
    siteName: 'Aratha Research & Analytics',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#171717] antialiased selection:bg-[#0F6B43] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
