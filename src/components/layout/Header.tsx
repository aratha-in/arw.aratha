'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Building2,
  TrendingUp,
  Compass,
  BarChart3,
  GraduationCap,
  FileText,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Lock
} from 'lucide-react';

const serviceLinks = [
  {
    title: 'Company Research',
    desc: 'Corporate intelligence, due diligence & competitor benchmarking',
    href: '/services/company-research',
    icon: Building2,
  },
  {
    title: 'Market Research',
    desc: 'Market sizing (TAM/SAM/SOM), consumer behavior & market entry',
    href: '/services/market-research',
    icon: TrendingUp,
  },
  {
    title: 'Business Research',
    desc: 'Feasibility studies, strategic analysis & business models',
    href: '/services/business-research',
    icon: Compass,
  },
  {
    title: 'Data & Statistical Analysis',
    desc: 'Econometrics, survey analytics, regression & SEM modeling',
    href: '/services/data-analysis',
    icon: BarChart3,
  },
  {
    title: 'Academic & PhD Support',
    desc: 'Methodology design, instrument validation & statistical guidance',
    href: '/services/academic-phd-support',
    icon: GraduationCap,
  },
  {
    title: 'Research Report Generation',
    desc: 'C-suite executive reports, slide decks & custom monographs',
    href: '/services/research-reports',
    icon: FileText,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const isCurrent = (path: string) => pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80'
          : 'bg-[#FAFAF8] border-b border-gray-200/60'
      }`}
    >
      {/* Top Banner Bar */}
      <div className="bg-[#171717] text-gray-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#0F6B43] animate-pulse"></span>
            <span className="hidden sm:inline font-medium text-gray-200">
              Independent Research & Analytics Consultancy
            </span>
            <span className="sm:hidden font-medium text-gray-200">
              Aratha Research Firm
            </span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-400">Strict Non-Disclosure & Client Confidentiality</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <Lock className="w-3 h-3 text-[#0F6B43]" />
              <span>Admin Portal</span>
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded bg-[#171717] flex items-center justify-center text-white border border-[#0F6B43]/50 shadow-sm transition-transform group-hover:scale-105">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-[#0F6B43]"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#171717] font-serif leading-none">
                ARATHA
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-[#0F6B43] mt-1">
                Research & Analytics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith('/services')
                    ? 'text-[#0F6B43] font-semibold'
                    : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#0F6B43]' : 'text-gray-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-[560px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Our Research Capabilities
                    </span>
                    <Link
                      href="/services"
                      className="text-xs text-[#0F6B43] hover:underline font-medium flex items-center gap-1"
                    >
                      All Services Matrix <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {serviceLinks.map((srv) => {
                    const IconComponent = srv.icon;
                    return (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#e8f5ee]/50 transition-colors group"
                      >
                        <div className="p-2 rounded-md bg-gray-50 group-hover:bg-[#0F6B43] text-gray-600 group-hover:text-white transition-colors shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 group-hover:text-[#0F6B43] transition-colors">
                            {srv.title}
                          </div>
                          <div className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                            {srv.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/industries') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              Industries
            </Link>

            <Link
              href="/methodology"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/methodology') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              Methodology
            </Link>

            <Link
              href="/case-studies"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/case-studies') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              Case Studies
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/insights') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              Insights
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/about') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isCurrent('/contact') ? 'text-[#0F6B43] font-semibold' : 'text-gray-700 hover:text-[#0F6B43] hover:bg-gray-100/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-[#0F6B43] border border-gray-300 rounded-lg hover:border-[#0F6B43] bg-white transition-all shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#0F6B43]" />
              <span>Book Consultation</span>
            </Link>
            <Link
              href="/proposal"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0F6B43] hover:bg-[#09472c] rounded-lg transition-all shadow-sm shadow-[#0F6B43]/20 hover:shadow-md"
            >
              <span>Request Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/proposal"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0F6B43] rounded-md"
            >
              Proposal
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-hidden"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              About Aratha
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-[#0F6B43] font-semibold rounded-md hover:bg-gray-50"
            >
              All Services Overview
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-[#0F6B43]/20 ml-3 my-2">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block py-1.5 text-sm text-gray-600 hover:text-[#0F6B43]"
                >
                  {s.title}
                </Link>
              ))}
            </div>
            <Link
              href="/industries"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Industries & Client Segments
            </Link>
            <Link
              href="/methodology"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Research Methodology
            </Link>
            <Link
              href="/case-studies"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Projects & Case Studies
            </Link>
            <Link
              href="/insights"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Research Insights & Articles
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
            >
              Contact Us
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-2 text-base font-medium text-gray-500 rounded-md hover:bg-gray-50 flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-[#0F6B43]" />
              <span>Admin Management Dashboard</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Link
              href="/consultation"
              className="w-full text-center py-2.5 px-4 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 bg-gray-50"
            >
              Book 30-Min Consultation
            </Link>
            <Link
              href="/proposal"
              className="w-full text-center py-2.5 px-4 text-sm font-semibold rounded-lg text-white bg-[#0F6B43]"
            >
              Request a Research Proposal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
