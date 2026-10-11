export type ClientCategory =
  | 'Corporate / Enterprise'
  | 'Startup / Entrepreneur'
  | 'Management Consulting Firm'
  | 'Financial & Business Analyst'
  | 'Academic Institution'
  | 'PhD Candidate / Research Scholar'
  | 'Faculty & University Researcher'
  | 'NGO / Development Organisation';

export type ServiceType =
  | 'Company Research & Corporate Intelligence'
  | 'Market Research & Market Intelligence'
  | 'Business Research & Strategic Analysis'
  | 'Data Analysis & Statistical Analysis'
  | 'Academic & PhD Research Support'
  | 'Research Report Generation'
  | 'Industry & Competitor Research'
  | 'Feasibility Studies & Business Analysis';

export type EnquiryStatus =
  | 'New'
  | 'Under Review'
  | 'Client Contacted'
  | 'Consultation Scheduled'
  | 'Proposal Sent'
  | 'Approved'
  | 'In Progress'
  | 'Report Delivered'
  | 'Completed'
  | 'Closed';

export type DeliverableFormat =
  | 'Executive PDF Report'
  | 'Excel Financial / Statistical Model'
  | 'PowerPoint Presentation Deck'
  | 'Raw Cleaned Dataset (CSV/SPSS/R)'
  | 'Interactive Dashboard'
  | 'Comprehensive Research Monograph';

export interface Enquiry {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  clientCategory: ClientCategory;
  service: ServiceType;
  projectTitle: string;
  description: string;
  dataAvailable: 'Yes - Cleaned Dataset' | 'Yes - Raw Data / Surveys' | 'Partial / Secondary Data Only' | 'No Data - Requires Primary Collection' | 'Desk Research Required';
  expectedDeliverables: DeliverableFormat[];
  reportFormat: string;
  deadline: string;
  estimatedBudget?: string;
  preferredConsultationDate?: string;
  status: EnquiryStatus;
  internalNotes?: string;
  assignedAnalyst?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Consultation {
  id: string;
  referenceNumber: string;
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  preferredDate: string;
  preferredTimeSlot: string;
  consultationTopic: string;
  projectOverview?: string;
  status: 'Requested' | 'Confirmed' | 'Completed' | 'Rescheduled' | 'Cancelled';
  meetingLink?: string;
  createdAt: string;
}

export interface ResearchProject {
  id: string;
  projectCode: string;
  title: string;
  clientName: string;
  organisation: string;
  service: ServiceType;
  status: EnquiryStatus;
  progressPercentage: number;
  startDate: string;
  targetDeliveryDate: string;
  leadAnalyst: string;
  deliverablesSummary: string;
}

export interface ResearchReport {
  id: string;
  reportCode: string;
  title: string;
  sector: string;
  publicationDate: string;
  pageCount: number;
  format: string;
  status: 'Drafting' | 'Peer Review' | 'Client Review' | 'Final Approved' | 'Delivered';
  summary: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: 'Market Intelligence' | 'Statistical Methods' | 'Corporate Strategy' | 'Academic Methodology';
  readTime: string;
  publishDate: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: ClientCategory;
  industry: string;
  challenge: string;
  solution: string;
  analyticalApproach: string[];
  outcomes: string[];
  testimonialSnippet?: string;
}
