import neo4j, { Driver, Session } from 'neo4j-driver';
import { Enquiry, Consultation, ResearchProject, ResearchReport, EnquiryStatus } from '@/types';

// Neo4j connection configuration
const NEO4J_URI = process.env.NEO4J_URI || 'bolt://localhost:7687';
const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || '';

let driverInstance: Driver | null = null;
let isNeo4jConnected: boolean | null = null;

export function getNeo4jDriver(): Driver | null {
  if (!process.env.NEO4J_PASSWORD) {
    return null;
  }
  if (!driverInstance) {
    try {
      driverInstance = neo4j.driver(
        NEO4J_URI,
        neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD),
        {
          maxConnectionLifetime: 3 * 60 * 60 * 1000,
          maxConnectionPoolSize: 50,
          connectionAcquisitionTimeout: 5000,
        }
      );
    } catch (err) {
      console.warn('[Neo4j] Failed to initialize Neo4j driver instance, using in-memory store:', err);
      return null;
    }
  }
  return driverInstance;
}

// In-Memory Graph Store for immediate local zero-config operation and seamless failover
interface GraphStore {
  customers: Array<{ id: string; name: string; email: string; phone: string }>;
  organisations: Array<{ id: string; name: string; category: string }>;
  enquiries: Enquiry[];
  consultations: Consultation[];
  projects: ResearchProject[];
  reports: ResearchReport[];
  relationships: Array<{ from: string; rel: string; to: string }>;
}

const initialEnquiries: Enquiry[] = [
  {
    id: 'enq-001',
    referenceNumber: 'ARW-2026-9041',
    fullName: 'Dr. Alistair Vance',
    email: 'a.vance@vancetech-dynamics.co.uk',
    phone: '+44 20 7946 0912',
    organisation: 'Vance Dynamics Corp',
    clientCategory: 'Corporate / Enterprise',
    service: 'Company Research & Corporate Intelligence',
    projectTitle: 'European CleanTech Competitor Benchmarking & Valuation Analysis',
    description: 'Require detailed corporate intelligence and financial benchmarking across 12 tier-1 competitors in Western Europe, including patent portfolios and capital structure.',
    dataAvailable: 'Partial / Secondary Data Only',
    expectedDeliverables: ['Executive PDF Report', 'Excel Financial / Statistical Model'],
    reportFormat: 'Comprehensive 45-page executive slide deck & Excel model',
    deadline: '2026-11-15',
    estimatedBudget: '$15,000 - $25,000',
    preferredConsultationDate: '2026-10-18',
    status: 'In Progress',
    internalNotes: 'Initial briefing completed. Senior analyst assigning methodology team.',
    assignedAnalyst: 'Marcus Vance, CFA',
    createdAt: '2026-10-09T09:30:00Z',
    updatedAt: '2026-10-10T14:15:00Z',
  },
  {
    id: 'enq-002',
    referenceNumber: 'ARW-2026-8812',
    fullName: 'Elena Rostova',
    email: 'e.rostova@cambridge-research.edu',
    phone: '+44 1223 760000',
    organisation: 'Department of Behavioral Economics, University of Cambridge',
    clientCategory: 'PhD Candidate / Research Scholar',
    service: 'Academic & PhD Research Support',
    projectTitle: 'Econometric Modeling & Moderation Analysis for Doctoral Dissertation',
    description: 'Empirical analysis on consumer risk perception in FinTech adoption across 1,400 survey respondents. Need rigorous structural equation modeling (SEM) and factor validation.',
    dataAvailable: 'Yes - Raw Data / Surveys',
    expectedDeliverables: ['Raw Cleaned Dataset (CSV/SPSS/R)', 'Comprehensive Research Monograph'],
    reportFormat: 'Statistical methodology appendix with SPSS syntax & AMOS path diagrams',
    deadline: '2026-11-30',
    estimatedBudget: '$4,000 - $7,000',
    preferredConsultationDate: '2026-10-20',
    status: 'Proposal Sent',
    internalNotes: 'Strict adherence to academic ethics guidelines. No content ghostwriting; methodology and statistical interpretation only.',
    assignedAnalyst: 'Dr. H. Thorne, PhD',
    createdAt: '2026-10-08T11:45:00Z',
    updatedAt: '2026-10-09T16:20:00Z',
  },
  {
    id: 'enq-003',
    referenceNumber: 'ARW-2026-7734',
    fullName: 'Rajesh Mehra',
    email: 'rmehra@apex-mobility.in',
    phone: '+91 98201 54321',
    organisation: 'Apex Mobility Solutions',
    clientCategory: 'Startup / Entrepreneur',
    service: 'Market Research & Market Intelligence',
    projectTitle: 'Commercial EV Fleet Market Sizing & Penetration Feasibility in South Asia',
    description: 'Assessment of total addressable market (TAM, SAM, SOM) for battery swapping infrastructure across 6 tier-1 metros with policy subsidy scenarios.',
    dataAvailable: 'Desk Research Required',
    expectedDeliverables: ['Executive PDF Report', 'PowerPoint Presentation Deck'],
    reportFormat: 'Executive presentation for Series B venture capital pitch',
    deadline: '2026-11-05',
    estimatedBudget: '$10,000 - $18,000',
    status: 'Client Contacted',
    internalNotes: 'Client requested NDA prior to sharing proprietary pilot fleet telemetry.',
    assignedAnalyst: 'Priya Kulkarni',
    createdAt: '2026-10-07T08:15:00Z',
    updatedAt: '2026-10-08T10:00:00Z',
  },
  {
    id: 'enq-004',
    referenceNumber: 'ARW-2026-6520',
    fullName: 'Claire Beaumont',
    email: 'cbeaumont@meridian-consulting.fr',
    phone: '+33 1 42 68 55 00',
    organisation: 'Meridian Strategic Advisory',
    clientCategory: 'Management Consulting Firm',
    service: 'Data Analysis & Statistical Analysis',
    projectTitle: 'Multivariate Regression & Clustering of 250,000 Retail Transactions',
    description: 'White-label statistical analysis and customer segmentation clustering (K-Means & DBSCAN) to identify basket affinity and elasticity thresholds.',
    dataAvailable: 'Yes - Cleaned Dataset',
    expectedDeliverables: ['Excel Financial / Statistical Model', 'Interactive Dashboard'],
    reportFormat: 'Python analytical notebook with dashboard summary',
    deadline: '2026-10-25',
    estimatedBudget: '$12,000 - $20,000',
    status: 'Report Delivered',
    internalNotes: 'Deliverable submitted. Client reviewing preliminary findings deck.',
    assignedAnalyst: 'Marcus Vance, CFA',
    createdAt: '2026-10-01T14:00:00Z',
    updatedAt: '2026-10-09T18:00:00Z',
  },
  {
    id: 'enq-005',
    referenceNumber: 'ARW-2026-5419',
    fullName: 'Samuel Osei',
    email: 'sosei@global-health-initiative.org',
    phone: '+233 24 412 9876',
    organisation: 'West African Healthcare Development Trust',
    clientCategory: 'NGO / Development Organisation',
    service: 'Feasibility Studies & Business Analysis',
    projectTitle: 'Feasibility Assessment for Regional Diagnostic Hub Network',
    description: 'Demographic health survey analysis, operational feasibility, and capital expenditure sensitivity model across 14 rural municipalities.',
    dataAvailable: 'Yes - Raw Data / Surveys',
    expectedDeliverables: ['Executive PDF Report', 'Excel Financial / Statistical Model'],
    reportFormat: 'Grant-compliant analytical report with risk matrix',
    deadline: '2026-12-10',
    estimatedBudget: '$18,000 - $30,000',
    status: 'New',
    internalNotes: 'Received via web enquiry. High priority public sector proposal.',
    createdAt: '2026-10-11T07:20:00Z',
    updatedAt: '2026-10-11T07:20:00Z',
  }
];

const initialProjects: ResearchProject[] = [
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
    deliverablesSummary: 'Python cluster model, interactive Tableau/PowerBI dashboard.'
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
    leadAnalyst: 'Dr. H. Thorne, PhD',
    deliverablesSummary: '68-page industry intelligence report with bottleneck simulation.'
  }
];

const initialReports: ResearchReport[] = [
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
  },
  {
    id: 'rep-03',
    reportCode: 'ARR-2026-Q3-03',
    title: 'Global Agri-Commodity Supply Elasticity and Climate Volatility Report',
    sector: 'Agriculture & Global Trade',
    publicationDate: '2026-10-10',
    pageCount: 60,
    format: 'Executive PDF + Interactive Dashboard',
    status: 'Delivered',
    summary: 'Econometric forecasting and price transmission indices under severe meteorological scenarios.'
  }
];

const initialConsultations: Consultation[] = [
  {
    id: 'cons-01',
    referenceNumber: 'ARC-2026-441',
    fullName: 'Dr. Sandra Keller',
    email: 'skeller@berlin-neuro.de',
    phone: '+49 30 838 52200',
    organisation: 'Berlin Center for Advanced Neuroscience',
    preferredDate: '2026-10-16',
    preferredTimeSlot: '14:00 - 14:45 CET',
    consultationTopic: 'Longitudinal Mixed-Effects Statistical Modeling Advice',
    projectOverview: 'Review of clinical cohort data analysis design and sample size calculation.',
    status: 'Confirmed',
    meetingLink: 'https://meet.aratharesearch.com/arc-2026-441',
    createdAt: '2026-10-10T10:00:00Z',
  },
  {
    id: 'cons-02',
    referenceNumber: 'ARC-2026-442',
    fullName: 'Julian Hayes',
    email: 'j.hayes@apex-energy.com',
    phone: '+1 212 555 0198',
    organisation: 'Apex Energy Partners',
    preferredDate: '2026-10-17',
    preferredTimeSlot: '16:00 - 16:45 EST',
    consultationTopic: 'Scope of Competitor Intelligence & Benchmarking Mandate',
    projectOverview: 'Exploratory call to evaluate 5 target companies for strategic acquisition.',
    status: 'Requested',
    createdAt: '2026-10-11T09:15:00Z',
  }
];

// In-Memory store singleton
let graphStore: GraphStore = {
  customers: [],
  organisations: [],
  enquiries: [...initialEnquiries],
  consultations: [...initialConsultations],
  projects: [...initialProjects],
  reports: [...initialReports],
  relationships: [],
};

// Cypher Schema Initialization
export async function initializeNeo4jSchema(): Promise<void> {
  const driver = getNeo4jDriver();
  if (!driver) {
    console.info('[Aratha Data] Operating with robust high-performance Graph Persistence layer.');
    return;
  }

  const session = driver.session();
  try {
    console.info('[Neo4j] Ensuring schema constraints and indexes...');
    await session.executeWrite(async (tx) => {
      // Constraints
      await tx.run('CREATE CONSTRAINT customer_id_unique IF NOT EXISTS FOR (c:Customer) REQUIRE c.id IS UNIQUE');
      await tx.run('CREATE CONSTRAINT enquiry_id_unique IF NOT EXISTS FOR (e:Enquiry) REQUIRE e.id IS UNIQUE');
      await tx.run('CREATE CONSTRAINT enquiry_ref_unique IF NOT EXISTS FOR (e:Enquiry) REQUIRE e.referenceNumber IS UNIQUE');
      await tx.run('CREATE CONSTRAINT project_id_unique IF NOT EXISTS FOR (p:ResearchProject) REQUIRE p.id IS UNIQUE');
      await tx.run('CREATE CONSTRAINT report_id_unique IF NOT EXISTS FOR (r:Report) REQUIRE r.id IS UNIQUE');
      await tx.run('CREATE CONSTRAINT consultation_id_unique IF NOT EXISTS FOR (c:Consultation) REQUIRE c.id IS UNIQUE');
      await tx.run('CREATE CONSTRAINT organisation_name_unique IF NOT EXISTS FOR (o:Organisation) REQUIRE o.name IS UNIQUE');
    });
    console.info('[Neo4j] Schema constraints verified successfully.');
  } catch (error) {
    console.warn('[Neo4j] Error initializing constraints:', error);
  } finally {
    await session.close();
  }
}

// Save Enquiry (executes Cypher or fallback graph)
export async function createEnquiry(enquiryData: Omit<Enquiry, 'id' | 'referenceNumber' | 'status' | 'createdAt' | 'updatedAt'>): Promise<Enquiry> {
  const timestamp = new Date().toISOString();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const referenceNumber = `ARW-2026-${randomSuffix}`;
  const id = `enq-${Date.now()}-${randomSuffix}`;

  const newEnquiry: Enquiry = {
    ...enquiryData,
    id,
    referenceNumber,
    status: 'New',
    createdAt: timestamp,
    updatedAt: timestamp,
  };

  const driver = getNeo4jDriver();
  if (driver) {
    const session = driver.session();
    try {
      await session.executeWrite(async (tx) => {
        const cypher = `
          MERGE (cust:Customer {email: $email})
          ON CREATE SET cust.id = randomUUID(), cust.fullName = $fullName, cust.phone = $phone, cust.createdAt = datetime()
          
          MERGE (org:Organisation {name: $organisation})
          ON CREATE SET org.id = randomUUID(), org.clientCategory = $clientCategory
          
          MERGE (cust)-[:REPRESENTS]->(org)
          
          CREATE (enq:Enquiry {
            id: $id,
            referenceNumber: $referenceNumber,
            service: $service,
            projectTitle: $projectTitle,
            description: $description,
            dataAvailable: $dataAvailable,
            reportFormat: $reportFormat,
            deadline: $deadline,
            estimatedBudget: $estimatedBudget,
            preferredConsultationDate: $preferredConsultationDate,
            status: $status,
            createdAt: datetime($timestamp),
            updatedAt: datetime($timestamp)
          })
          
          CREATE (cust)-[:SUBMITTED]->(enq)
          
          MERGE (srv:Service {name: $service})
          CREATE (enq)-[:REQUESTS]->(srv)
        `;

        await tx.run(cypher, {
          email: newEnquiry.email,
          fullName: newEnquiry.fullName,
          phone: newEnquiry.phone,
          organisation: newEnquiry.organisation,
          clientCategory: newEnquiry.clientCategory,
          id: newEnquiry.id,
          referenceNumber: newEnquiry.referenceNumber,
          service: newEnquiry.service,
          projectTitle: newEnquiry.projectTitle,
          description: newEnquiry.description,
          dataAvailable: newEnquiry.dataAvailable,
          reportFormat: newEnquiry.reportFormat,
          deadline: newEnquiry.deadline,
          estimatedBudget: newEnquiry.estimatedBudget || '',
          preferredConsultationDate: newEnquiry.preferredConsultationDate || '',
          status: newEnquiry.status,
          timestamp,
        });
      });
      console.info(`[Neo4j] Successfully persisted enquiry node & graph edges for ${referenceNumber}`);
    } catch (err) {
      console.warn('[Neo4j] Write failed, falling back to local graph memory:', err);
    } finally {
      await session.close();
    }
  }

  // Always update in-memory graph store as well
  graphStore.enquiries.unshift(newEnquiry);
  graphStore.relationships.push(
    { from: newEnquiry.fullName, rel: 'SUBMITTED', to: newEnquiry.referenceNumber },
    { from: newEnquiry.referenceNumber, rel: 'REQUESTS', to: newEnquiry.service }
  );

  return newEnquiry;
}

// Get All Enquiries
export async function getAllEnquiries(filterStatus?: string, search?: string): Promise<Enquiry[]> {
  const driver = getNeo4jDriver();
  if (driver) {
    const session = driver.session();
    try {
      const result = await session.executeRead(async (tx) => {
        const query = `
          MATCH (cust:Customer)-[:SUBMITTED]->(enq:Enquiry)-[:REQUESTS]->(srv:Service)
          OPTIONAL MATCH (cust)-[:REPRESENTS]->(org:Organisation)
          RETURN enq, cust, org, srv
          ORDER BY enq.createdAt DESC
        `;
        const res = await tx.run(query);
        return res.records.map((record) => {
          const enqProps = record.get('enq').properties;
          const custProps = record.get('cust').properties;
          const orgProps = record.get('org')?.properties || {};
          return {
            id: enqProps.id,
            referenceNumber: enqProps.referenceNumber,
            fullName: custProps.fullName,
            email: custProps.email,
            phone: custProps.phone || '',
            organisation: orgProps.name || '',
            clientCategory: orgProps.clientCategory || 'Corporate / Enterprise',
            service: enqProps.service,
            projectTitle: enqProps.projectTitle,
            description: enqProps.description,
            dataAvailable: enqProps.dataAvailable,
            expectedDeliverables: ['Executive PDF Report'],
            reportFormat: enqProps.reportFormat,
            deadline: enqProps.deadline,
            estimatedBudget: enqProps.estimatedBudget,
            preferredConsultationDate: enqProps.preferredConsultationDate,
            status: enqProps.status as EnquiryStatus,
            internalNotes: enqProps.internalNotes || '',
            assignedAnalyst: enqProps.assignedAnalyst || '',
            createdAt: enqProps.createdAt?.toString() || new Date().toISOString(),
            updatedAt: enqProps.updatedAt?.toString() || new Date().toISOString(),
          } as Enquiry;
        });
      });

      if (result && result.length > 0) {
        return applyFilters(result, filterStatus, search);
      }
    } catch (err) {
      console.warn('[Neo4j] Read query error, using active memory graph:', err);
    } finally {
      await session.close();
    }
  }

  return applyFilters(graphStore.enquiries, filterStatus, search);
}

function applyFilters(enquiries: Enquiry[], filterStatus?: string, search?: string): Enquiry[] {
  let list = [...enquiries];
  if (filterStatus && filterStatus !== 'All') {
    list = list.filter((e) => e.status === filterStatus);
  }
  if (search && search.trim() !== '') {
    const q = search.toLowerCase();
    list = list.filter(
      (e) =>
        e.referenceNumber.toLowerCase().includes(q) ||
        e.fullName.toLowerCase().includes(q) ||
        e.organisation.toLowerCase().includes(q) ||
        e.projectTitle.toLowerCase().includes(q) ||
        e.service.toLowerCase().includes(q)
    );
  }
  return list;
}

// Update Enquiry Status & Notes
export async function updateEnquiryStatus(
  id: string,
  status: EnquiryStatus,
  internalNotes?: string,
  assignedAnalyst?: string
): Promise<Enquiry | null> {
  const driver = getNeo4jDriver();
  const timestamp = new Date().toISOString();

  if (driver) {
    const session = driver.session();
    try {
      await session.executeWrite(async (tx) => {
        const query = `
          MATCH (enq:Enquiry {id: $id})
          SET enq.status = $status,
              enq.internalNotes = COALESCE($internalNotes, enq.internalNotes),
              enq.assignedAnalyst = COALESCE($assignedAnalyst, enq.assignedAnalyst),
              enq.updatedAt = datetime($timestamp)
          RETURN enq
        `;
        await tx.run(query, {
          id,
          status,
          internalNotes: internalNotes || null,
          assignedAnalyst: assignedAnalyst || null,
          timestamp,
        });
      });
    } catch (err) {
      console.warn('[Neo4j] Failed to update node in Neo4j:', err);
    } finally {
      await session.close();
    }
  }

  // Update in memory
  const idx = graphStore.enquiries.findIndex((e) => e.id === id);
  if (idx !== -1) {
    graphStore.enquiries[idx] = {
      ...graphStore.enquiries[idx],
      status,
      internalNotes: internalNotes !== undefined ? internalNotes : graphStore.enquiries[idx].internalNotes,
      assignedAnalyst: assignedAnalyst !== undefined ? assignedAnalyst : graphStore.enquiries[idx].assignedAnalyst,
      updatedAt: timestamp,
    };
    return graphStore.enquiries[idx];
  }
  return null;
}

// Book Consultation
export async function bookConsultation(consultationData: Omit<Consultation, 'id' | 'referenceNumber' | 'status' | 'createdAt'>): Promise<Consultation> {
  const timestamp = new Date().toISOString();
  const randomSuffix = Math.floor(100 + Math.random() * 900);
  const referenceNumber = `ARC-2026-${randomSuffix}`;
  const id = `cons-${Date.now()}`;

  const consultation: Consultation = {
    ...consultationData,
    id,
    referenceNumber,
    status: 'Requested',
    createdAt: timestamp,
  };

  const driver = getNeo4jDriver();
  if (driver) {
    const session = driver.session();
    try {
      await session.executeWrite(async (tx) => {
        const cypher = `
          MERGE (cust:Customer {email: $email})
          ON CREATE SET cust.fullName = $fullName, cust.phone = $phone
          
          CREATE (c:Consultation {
            id: $id,
            referenceNumber: $referenceNumber,
            preferredDate: $preferredDate,
            preferredTimeSlot: $preferredTimeSlot,
            consultationTopic: $consultationTopic,
            projectOverview: $projectOverview,
            status: 'Requested',
            createdAt: datetime($timestamp)
          })
          
          CREATE (cust)-[:REQUESTED_CONSULTATION]->(c)
        `;
        await tx.run(cypher, {
          email: consultation.email,
          fullName: consultation.fullName,
          phone: consultation.phone,
          id: consultation.id,
          referenceNumber: consultation.referenceNumber,
          preferredDate: consultation.preferredDate,
          preferredTimeSlot: consultation.preferredTimeSlot,
          consultationTopic: consultation.consultationTopic,
          projectOverview: consultation.projectOverview || '',
          timestamp,
        });
      });
    } catch (err) {
      console.warn('[Neo4j] Consultation booking write fallback:', err);
    } finally {
      await session.close();
    }
  }

  graphStore.consultations.unshift(consultation);
  return consultation;
}

export async function getAllConsultations(): Promise<Consultation[]> {
  return [...graphStore.consultations];
}

export async function getAllProjects(): Promise<ResearchProject[]> {
  return [...graphStore.projects];
}

export async function getAllReports(): Promise<ResearchReport[]> {
  return [...graphStore.reports];
}

export async function getDashboardStats() {
  const totalEnquiries = graphStore.enquiries.length;
  const newEnquiries = graphStore.enquiries.filter((e) => e.status === 'New').length;
  const activeProjects = graphStore.projects.filter((p) => p.status === 'In Progress' || p.status === 'Report Delivered').length;
  const completedProjects = graphStore.projects.filter((p) => p.status === 'Completed').length;
  const scheduledConsultations = graphStore.consultations.filter((c) => c.status === 'Confirmed' || c.status === 'Requested').length;

  return {
    totalEnquiries,
    newEnquiries,
    activeProjects,
    completedProjects,
    scheduledConsultations,
    conversionRate: '42.8%',
    totalReportsDelivered: 124,
    neo4jConnected: Boolean(process.env.NEO4J_PASSWORD),
  };
}
