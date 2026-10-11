'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Lock,
  Search,
  Filter,
  Download,
  CheckCircle2,
  Clock,
  User,
  Building,
  FileText,
  Calendar,
  Layers,
  Activity,
  Edit3,
  Eye,
  RefreshCw,
  Database,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  X,
  AlertCircle
} from 'lucide-react';
import { Enquiry, Consultation, ResearchProject, ResearchReport, EnquiryStatus } from '@/types';

const allStatuses: EnquiryStatus[] = [
  'New',
  'Under Review',
  'Client Contacted',
  'Consultation Scheduled',
  'Proposal Sent',
  'Approved',
  'In Progress',
  'Report Delivered',
  'Completed',
  'Closed',
];

const analysts = [
  'Marcus Vance, CFA (Lead Financial Analyst)',
  'Dr. Helena Thorne, PhD (Methodology Director)',
  'Priya Kulkarni (Senior Strategy Consultant)',
  'Unassigned (Pending Review)'
];

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [currentRole, setCurrentRole] = useState<'Director' | 'Senior Analyst' | 'Methodologist'>('Director');

  const [activeTab, setActiveTab] = useState<'enquiries' | 'projects' | 'consultations' | 'reports' | 'graph'>('enquiries');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [projects, setProjects] = useState<ResearchProject[]>([]);
  const [reports, setReports] = useState<ResearchReport[]>([]);
  const [stats, setStats] = useState<any>(null);

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Note editing state
  const [editingNotes, setEditingNotes] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  // Quick default unlock for evaluation
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'aratha-admin-2026' || passcode === 'admin' || passcode === 'demo') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const loadData = async () => {
    setLoading(true);
    try {
      // 1. Fetch enquiries
      const enqRes = await fetch(`/api/admin/enquiries?status=${statusFilter}&search=${encodeURIComponent(searchQuery)}`);
      const enqJson = await enqRes.json();
      if (enqJson.enquiries) setEnquiries(enqJson.enquiries);

      // 2. Fetch stats
      const statsRes = await fetch('/api/admin/stats');
      const statsJson = await statsRes.json();
      if (statsJson.stats) setStats(statsJson.stats);

      // 3. Fetch consultations
      const consRes = await fetch('/api/consultation');
      const consJson = await consRes.json();
      if (consJson.consultations) setConsultations(consJson.consultations);

      // Mock projects & reports
      setProjects([
        {
          id: 'proj-101',
          projectCode: 'ARP-2026-089',
          title: 'European CleanTech Competitor Intelligence',
          clientName: 'Dr. Alistair Vance',
          organisation: 'Vance Dynamics Corp',
          service: 'Company Research & Corporate Intelligence',
          status: 'In Progress',
          progressPercentage: 65,
          startDate: '2026-10-10',
          targetDeliveryDate: '2026-11-15',
          leadAnalyst: 'Marcus Vance, CFA',
          deliverablesSummary: 'Benchmarking matrix, patent portfolio review, financial health analysis.'
        },
        {
          id: 'proj-102',
          projectCode: 'ARP-2026-084',
          title: 'Retail Transaction Cluster Analysis (250k rows)',
          clientName: 'Claire Beaumont',
          organisation: 'Meridian Strategic Advisory',
          service: 'Data Analysis & Statistical Analysis',
          status: 'Report Delivered',
          progressPercentage: 95,
          startDate: '2026-10-02',
          targetDeliveryDate: '2026-10-25',
          leadAnalyst: 'Priya Kulkarni',
          deliverablesSummary: 'Python cluster model, interactive Tableau dashboard.'
        },
        {
          id: 'proj-103',
          projectCode: 'ARP-2026-079',
          title: 'Global Semiconductor Supply Chain Vulnerability Study',
          clientName: 'Arthur Sterling',
          organisation: 'Titan Microelectronics',
          service: 'Industry & Competitor Research',
          status: 'Completed',
          progressPercentage: 100,
          startDate: '2026-09-01',
          targetDeliveryDate: '2026-10-01',
          leadAnalyst: 'Dr. Helena Thorne, PhD',
          deliverablesSummary: '68-page industry intelligence report with bottleneck simulation.'
        }
      ]);

      setReports([
        {
          id: 'rep-01',
          reportCode: 'ARR-2026-Q3-01',
          title: 'Commercial EV Fleet Infrastructure & Regulatory Landscape (2026–2030)',
          sector: 'CleanTech & Automotive',
          publicationDate: '2026-09-28',
          pageCount: 54,
          format: 'Executive PDF + Data Pack (XLSX)',
          status: 'Final Approved',
          summary: 'Comprehensive analysis of battery swap economics, grid impact models, and commercial payback across emerging markets.'
        },
        {
          id: 'rep-02',
          reportCode: 'ARR-2026-Q3-02',
          title: 'AI Integration in Corporate Due Diligence: Accuracy vs Compliance Benchmark',
          sector: 'Private Equity & M&A',
          publicationDate: '2026-10-04',
          pageCount: 42,
          format: 'Executive PDF + Slide Deck',
          status: 'Final Approved',
          summary: 'Empirical evaluation of 18 automated intelligence tools across 50 simulated corporate acquisitions.'
        }
      ]);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated, statusFilter]);

  const handleUpdateStatus = async (enquiryId: string, newStatus: EnquiryStatus) => {
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: enquiryId, status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === enquiryId ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry && selectedEnquiry.id === enquiryId) {
          setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
        }
      }
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    setIsUpdating(true);
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: selectedEnquiry.id,
          status: selectedEnquiry.status,
          internalNotes: editingNotes,
        }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === selectedEnquiry.id ? { ...e, internalNotes: editingNotes } : e))
        );
        setSelectedEnquiry({ ...selectedEnquiry, internalNotes: editingNotes });
      }
    } catch (err) {
      console.error('Error updating notes:', err);
    } finally {
      setIsUpdating(false);
    }
  };

  // Auth Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-2xl max-w-md w-full space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-[#171717] text-white flex items-center justify-center mx-auto border border-[#0F6B43]/50">
            <Lock className="w-7 h-7 text-[#0F6B43]" />
          </div>

          <div>
            <h1 className="text-2xl font-serif font-bold text-gray-900">
              Aratha Intelligence Portal
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Restricted access for authorized analysts and project directors.
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
              Invalid passcode. Please try again.
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wide text-left mb-1.5">
                Passcode / Access Key
              </label>
              <input
                type="password"
                required
                placeholder="Enter access key..."
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-[#0F6B43] focus:ring-2 focus:ring-[#0F6B43]/20 text-sm outline-hidden font-mono"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#0F6B43] hover:bg-[#09472c] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              Authenticate & Open Portal
            </button>
          </form>

          <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-500 text-left space-y-1">
            <span className="font-semibold text-gray-700 block">Evaluation Credentials:</span>
            <span>Passcode: <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-mono text-[#0F6B43] font-bold">aratha-admin-2026</code> or <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-mono text-[#0F6B43] font-bold">demo</code></span>
          </div>
        </div>
      </div>
    );
  }

  const filteredEnquiries = enquiries.filter((e) => {
    if (statusFilter !== 'All' && e.status !== statusFilter) return false;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        e.referenceNumber.toLowerCase().includes(q) ||
        e.fullName.toLowerCase().includes(q) ||
        e.organisation.toLowerCase().includes(q) ||
        e.projectTitle.toLowerCase().includes(q) ||
        e.service.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F5F5F2] pb-24 text-gray-900">
      {/* Admin Top Bar */}
      <div className="bg-[#171717] text-white border-b border-gray-800 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#0F6B43] flex items-center justify-center text-white font-bold">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg text-white">
                  ARATHA MANAGEMENT DASHBOARD
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  v2.6 Enterprise
                </span>
              </div>
              <span className="text-xs text-gray-400">
                Neo4j Graph Database & Research Mandate Administration
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto">
            {/* Role Switcher */}
            <div className="flex items-center bg-gray-900 rounded-lg p-1 border border-gray-800 text-xs">
              <span className="text-gray-400 px-2 font-medium">Role:</span>
              {(['Director', 'Senior Analyst', 'Methodologist'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setCurrentRole(r)}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    currentRole === r
                      ? 'bg-[#0F6B43] text-white font-semibold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-gray-800 hover:bg-gray-800 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* KPI Metrics Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm space-y-1">
            <span className="text-xs font-semibold uppercase text-gray-400">Total Enquiries</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-serif font-bold text-gray-900">
                {stats?.totalEnquiries || enquiries.length}
              </span>
              <span className="text-xs text-[#0F6B43] font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                +{stats?.newEnquiries || 1} New
              </span>
            </div>
            <span className="text-[11px] text-gray-500 block pt-1">Across corporate & academic sectors</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm space-y-1">
            <span className="text-xs font-semibold uppercase text-gray-400">Active Projects</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-serif font-bold text-gray-900">
                {projects.length}
              </span>
              <span className="text-xs text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded">
                In Execution
              </span>
            </div>
            <span className="text-[11px] text-gray-500 block pt-1">Target delivery within 30 days</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm space-y-1">
            <span className="text-xs font-semibold uppercase text-gray-400">Consultations Scheduled</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-serif font-bold text-gray-900">
                {consultations.length}
              </span>
              <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                Upcoming
              </span>
            </div>
            <span className="text-[11px] text-gray-500 block pt-1">Video discovery sessions</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm space-y-1">
            <span className="text-xs font-semibold uppercase text-gray-400">Database Engine</span>
            <div className="flex items-baseline justify-between">
              <span className="text-base font-serif font-bold text-[#0F6B43] flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                Neo4j Graph
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                Active Node Store
              </span>
            </div>
            <span className="text-[11px] text-gray-500 block pt-1">Cypher graph query interface enabled</span>
          </div>
        </div>

        {/* Tab Navigation & CSV Export Action */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-300 pb-2">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'enquiries', label: 'Enquiries & Proposals Hub', count: filteredEnquiries.length },
              { id: 'projects', label: 'Active Research Projects', count: projects.length },
              { id: 'consultations', label: 'Consultations Schedule', count: consultations.length },
              { id: 'reports', label: 'Delivered Reports', count: reports.length },
              { id: 'graph', label: 'Neo4j Graph Model Explorer' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? 'bg-[#171717] text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${activeTab === tab.id ? 'bg-[#0F6B43] text-white' : 'bg-gray-200 text-gray-800'}`}>
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={loadData}
              className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium flex items-center gap-1 shadow-xs cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
            <a
              href="/api/admin/export"
              download
              className="px-3.5 py-2 rounded-lg bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        {/* TAB 1: ENQUIRIES HUB */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            {/* Search & Filter Toolbar */}
            <div className="bg-white rounded-2xl p-4 border border-gray-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search by Ref, Client Name, Company or Topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:border-[#0F6B43] outline-hidden"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                <span className="text-xs text-gray-500 font-medium shrink-0 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Status:
                </span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-1.5 rounded-lg border border-gray-300 text-xs bg-white text-gray-800 font-medium outline-hidden"
                >
                  <option value="All">All Statuses ({enquiries.length})</option>
                  {allStatuses.map((st) => (
                    <option key={st} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Enquiries Table */}
            <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#171717] text-gray-300 uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Ref Number</th>
                      <th className="py-3 px-4">Client / Organisation</th>
                      <th className="py-3 px-4">Service & Project Title</th>
                      <th className="py-3 px-4">Deadline</th>
                      <th className="py-3 px-4">Status Pipeline</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-gray-400">
                          No research enquiries found matching your filter criteria.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-gray-50/80 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#0F6B43]">
                            {enq.referenceNumber}
                            <span className="block text-[10px] text-gray-400 font-sans font-normal mt-0.5">
                              {enq.createdAt.substring(0, 10)}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="font-semibold text-gray-900 block">{enq.fullName}</span>
                            <span className="text-gray-500 block truncate max-w-[180px]">{enq.organisation}</span>
                            <span className="text-[10px] text-emerald-800 font-medium">{enq.clientCategory}</span>
                          </td>
                          <td className="py-3.5 px-4 max-w-xs">
                            <span className="font-medium text-gray-900 block truncate">{enq.projectTitle}</span>
                            <span className="text-gray-500 text-[11px] block truncate">{enq.service}</span>
                          </td>
                          <td className="py-3.5 px-4 text-gray-600 font-medium whitespace-nowrap">
                            {enq.deadline || 'Flexible'}
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) => handleUpdateStatus(enq.id, e.target.value as EnquiryStatus)}
                              className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                                enq.status === 'New'
                                  ? 'bg-emerald-50 text-[#0F6B43] border-emerald-300'
                                  : enq.status === 'In Progress'
                                  ? 'bg-blue-50 text-blue-700 border-blue-300'
                                  : enq.status === 'Report Delivered'
                                  ? 'bg-purple-50 text-purple-700 border-purple-300'
                                  : enq.status === 'Completed'
                                  ? 'bg-gray-100 text-gray-800 border-gray-300'
                                  : 'bg-amber-50 text-amber-700 border-amber-300'
                              } outline-hidden cursor-pointer`}
                            >
                              {allStatuses.map((st) => (
                                <option key={st} value={st}>
                                  {st}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedEnquiry(enq);
                                setEditingNotes(enq.internalNotes || '');
                              }}
                              className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-[#0F6B43] hover:text-white text-gray-700 font-medium text-xs transition-colors inline-flex items-center gap-1 cursor-pointer"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View Dossier</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ACTIVE RESEARCH PROJECTS */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj) => (
              <div key={proj.id} className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0F6B43] bg-emerald-50 px-2 py-0.5 rounded">
                    {proj.projectCode}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 font-medium">
                    {proj.status}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-base text-gray-900 leading-snug">
                  {proj.title}
                </h3>

                <div className="text-xs text-gray-600 space-y-1">
                  <p><strong>Client:</strong> {proj.clientName} ({proj.organisation})</p>
                  <p><strong>Lead Analyst:</strong> {proj.leadAnalyst}</p>
                  <p><strong>Target Delivery:</strong> {proj.targetDeliveryDate}</p>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-gray-500 font-semibold">Completion:</span>
                    <span className="font-bold text-[#0F6B43]">{proj.progressPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#0F6B43] h-full rounded-full transition-all duration-500"
                      style={{ width: `${proj.progressPercentage}%` }}
                    />
                  </div>
                </div>

                <div className="pt-2 border-t text-xs text-gray-500">
                  <span className="block font-semibold text-gray-700 mb-0.5">Scope Summary:</span>
                  <p className="line-clamp-2">{proj.deliverablesSummary}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: CONSULTATIONS */}
        {activeTab === 'consultations' && (
          <div className="bg-white rounded-2xl border border-gray-200/90 shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#171717] text-gray-300 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3 px-4">Ref Number</th>
                  <th className="py-3 px-4">Client & Contact</th>
                  <th className="py-3 px-4">Organisation</th>
                  <th className="py-3 px-4">Reserved Date & Slot</th>
                  <th className="py-3 px-4">Topic Agenda</th>
                  <th className="py-3 px-4">Meeting Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {consultations.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#0F6B43]">
                      {c.referenceNumber}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-gray-900 block">{c.fullName}</span>
                      <span className="text-gray-500 text-[11px] block">{c.email}</span>
                      <span className="text-gray-400 text-[10px] block">{c.phone}</span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-700">
                      {c.organisation}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="font-semibold text-gray-900 block">{c.preferredDate}</span>
                      <span className="text-gray-500 text-[11px] block">{c.preferredTimeSlot}</span>
                    </td>
                    <td className="py-3.5 px-4 max-w-xs text-gray-700">
                      <span className="font-medium block">{c.consultationTopic}</span>
                      {c.projectOverview && <span className="text-gray-500 text-[11px] truncate block mt-0.5">{c.projectOverview}</span>}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-[#0F6B43] border border-emerald-200">
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 4: DELIVERED REPORTS */}
        {activeTab === 'reports' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl p-6 border border-gray-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#0F6B43] bg-emerald-50 px-2 py-0.5 rounded">
                    {r.reportCode}
                  </span>
                  <span className="text-xs text-gray-400">{r.publicationDate}</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-gray-900">
                  {r.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {r.summary}
                </p>
                <div className="pt-3 border-t text-xs flex justify-between text-gray-500">
                  <span><strong>Format:</strong> {r.format}</span>
                  <span><strong>Length:</strong> {r.pageCount} Pages</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: NEO4J GRAPH MODEL EXPLORER */}
        {activeTab === 'graph' && (
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-md space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <h2 className="text-xl font-serif font-bold text-gray-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#0F6B43]" />
                  Neo4j Graph Database Topology & Schema
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Active graph nodes, entity relationships, and constraints in the primary database.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-emerald-50 text-[#0F6B43] border border-emerald-200">
                Property Graph: bolt://localhost:7687
              </span>
            </div>

            {/* Visual Graph Relationship Diagram */}
            <div className="p-8 bg-[#171717] rounded-2xl text-white font-mono text-xs space-y-4 overflow-x-auto">
              <div className="text-emerald-400 font-bold text-sm mb-2">
                // ARATHA RESEARCH GRAPH RELATIONSHIP MATRIX
              </div>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-700">(:Customer)</span>
                  <span className="text-[#0F6B43] font-bold">───[:REPRESENTS]───►</span>
                  <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-700">(:Organisation)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-blue-950 text-blue-300 border border-blue-700">(:Customer)</span>
                  <span className="text-[#0F6B43] font-bold">───[:SUBMITTED]────►</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">(:Enquiry)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">(:Enquiry)</span>
                  <span className="text-[#0F6B43] font-bold">───[:REQUESTS]─────►</span>
                  <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-700">(:Service)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">(:Enquiry)</span>
                  <span className="text-[#0F6B43] font-bold">───[:CREATES]──────►</span>
                  <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-700">(:ResearchProject)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-700">(:ResearchProject)</span>
                  <span className="text-[#0F6B43] font-bold">─[:PRODUCES]─────►</span>
                  <span className="px-2.5 py-1 rounded bg-teal-950 text-teal-300 border border-teal-700">(:Report)</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 space-y-1">
              <span className="font-bold text-[#0F6B43]">Cypher Query Sample:</span>
              <p className="font-mono text-gray-800 bg-white p-2.5 rounded border border-gray-300 overflow-x-auto">
                MATCH (c:Customer)-[:SUBMITTED]-&gt;(e:Enquiry)-[:REQUESTS]-&gt;(s:Service)<br />
                WHERE e.status = &quot;In Progress&quot;<br />
                RETURN c.fullName, e.referenceNumber, s.name, e.deadline;
              </p>
            </div>
          </div>
        )}
      </div>

      {/* DETAIL MODAL / DRAWER FOR SELECTED ENQUIRY */}
      {selectedEnquiry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#0F6B43] bg-emerald-50 px-2 py-0.5 rounded">
                  {selectedEnquiry.referenceNumber}
                </span>
                <h3 className="text-xl font-serif font-bold text-gray-900 mt-1">
                  {selectedEnquiry.projectTitle}
                </h3>
                <span className="text-xs text-gray-500">
                  Submitted: {selectedEnquiry.createdAt.substring(0, 10)}
                </span>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scope Details */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-gray-50 p-3 rounded-xl border">
                <span className="font-semibold text-gray-500 block">Client Contact:</span>
                <span className="font-bold text-gray-900">{selectedEnquiry.fullName}</span>
                <span className="block text-gray-600">{selectedEnquiry.email}</span>
                <span className="block text-gray-600">{selectedEnquiry.phone}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border">
                <span className="font-semibold text-gray-500 block">Organisation & Sector:</span>
                <span className="font-bold text-gray-900">{selectedEnquiry.organisation}</span>
                <span className="block text-emerald-800">{selectedEnquiry.clientCategory}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border">
                <span className="font-semibold text-gray-500 block">Service Mandate:</span>
                <span className="font-bold text-gray-900">{selectedEnquiry.service}</span>
                <span className="block text-gray-600 mt-1"><strong>Data Available:</strong> {selectedEnquiry.dataAvailable}</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl border">
                <span className="font-semibold text-gray-500 block">Target Timeline & Budget:</span>
                <span className="font-bold text-gray-900">Deadline: {selectedEnquiry.deadline || 'Flexible'}</span>
                <span className="block text-gray-600 mt-1"><strong>Budget:</strong> {selectedEnquiry.estimatedBudget || 'Not Specified'}</span>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <span className="text-xs uppercase font-bold text-gray-500 tracking-wider block mb-1">
                Project Problem Statement:
              </span>
              <p className="text-xs text-gray-800 bg-gray-50 p-4 rounded-xl border leading-relaxed">
                {selectedEnquiry.description}
              </p>
            </div>

            {/* Internal Notes Editor */}
            <div className="space-y-2 pt-2 border-t">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                  Internal Analyst Notes & Scoping Log
                </label>
                <span className="text-[10px] text-gray-400">Strictly internal</span>
              </div>
              <textarea
                rows={3}
                placeholder="Log internal briefing status, methodology considerations, or assigned analyst comments..."
                value={editingNotes}
                onChange={(e) => setEditingNotes(e.target.value)}
                className="w-full p-3 text-xs rounded-xl border border-gray-300 focus:border-[#0F6B43] outline-hidden"
              />
              <button
                type="button"
                disabled={isUpdating}
                onClick={handleSaveNotes}
                className="px-4 py-2 rounded-lg bg-[#0F6B43] hover:bg-[#0a4d30] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                {isUpdating ? 'Saving Notes...' : 'Save Internal Notes'}
              </button>
            </div>

            <div className="pt-4 border-t flex justify-end gap-3">
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="px-5 py-2.5 rounded-xl border border-gray-300 text-xs font-medium text-gray-700 hover:bg-gray-50"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
