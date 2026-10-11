import { Article, CaseStudy } from '@/types';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  tagline: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  methodologies: string[];
  idealFor: string[];
  sampleReportTitle: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: 's1',
    slug: 'company-research',
    title: 'Company Research & Corporate Intelligence',
    tagline: 'Deep-dive due diligence, corporate benchmarking, and strategic intelligence.',
    shortDescription: 'In-depth analysis of corporate background, operating business models, competitive positioning, and financial performance.',
    iconName: 'Building2',
    features: [
      'Company profiles and corporate background research',
      'Business model and organisational architecture analysis',
      'Company performance and operational benchmarking',
      'Corporate, balance sheet, and financial information analysis',
      'Competitor benchmarking and market share matrices',
      'Company and industry comparative analytics',
      'Board governance and strategic risk assessments',
      'M&A due diligence intelligence dossiers'
    ],
    deliverables: [
      'Comprehensive Corporate Profile Dossier (PDF)',
      'Financial Comparison & Ratio Model (Excel)',
      'Competitor Positioning Heatmap',
      'Executive Board Briefing Presentation (PPTX)'
    ],
    methodologies: [
      'Triangulated Secondary Desk Research',
      'SEC / Companies House & Regulatory Filings Examination',
      'Competitive Intelligence Scraping & Verification',
      'Ratio & Liquidity Benchmarking'
    ],
    idealFor: ['Corporate Strategy Directors', 'Private Equity & M&A Teams', 'Investment Analysts', 'Enterprise Founders'],
    sampleReportTitle: 'Target Corp: 360° Corporate Intelligence & Competitor Vulnerability Dossier'
  },
  {
    id: 's2',
    slug: 'market-research',
    title: 'Market Research & Market Intelligence',
    tagline: 'Empirical market sizing, customer dynamics, and competitive terrain analysis.',
    shortDescription: 'Evidence-based market opportunity sizing, consumer segmentation, competitive landscape mapping, and market entry assessments.',
    iconName: 'TrendingUp',
    features: [
      'Market size (TAM, SAM, SOM) and growth opportunity assessment',
      'Industry trends, disruptive drivers, and market development tracking',
      'Consumer behaviour and purchasing trigger research',
      'Customer segmentation and preference analysis (Demographic & Psychographic)',
      'Competitor analysis and supply side capability benchmarking',
      'Market entry and geographical expansion research',
      'Geographic market assessment and localized demand forecasting',
      'Primary survey design, field administration, and data interpretation',
      'Ongoing market intelligence reports and dynamic monitoring'
    ],
    deliverables: [
      'Market Sizing & Forecast Model (2026–2032)',
      'Customer Segmentation Persona Playbook',
      'Market Entry Feasibility & Risk Matrix',
      'Primary Survey Findings Report with Statistical Charts'
    ],
    methodologies: [
      'Bottom-Up & Top-Down Market Sizing Triangulation',
      'Stratified Random Sampling & CAWI Survey Administration',
      'Conjoint & Maximum Difference Scaling (MaxDiff)',
      'Porter’s Five Forces & PESTLE Macro Scan'
    ],
    idealFor: ['Product Strategy Leads', 'Chief Marketing Officers', 'Venture Capitalists', 'Market Entry Planners'],
    sampleReportTitle: 'Southeast Asia Commercial EV & Fleet Decarbonisation Market Intelligence (2026–2031)'
  },
  {
    id: 's3',
    slug: 'business-research',
    title: 'Business Research & Strategic Analysis',
    tagline: 'Structured frameworks and quantitative feasibility to guide critical enterprise choices.',
    shortDescription: 'Rigorous strategic investigations, business feasibility evaluations, and decision-support studies for scalable enterprises.',
    iconName: 'Compass',
    features: [
      'Business opportunity identification and evaluation',
      'Comprehensive business feasibility and viability studies',
      'Business model research and unit-economic validation',
      'Strategic management research and organizational alignment',
      'Startup and entrepreneurship ecosystem research',
      'Operational and business performance gap analysis',
      'Industry benchmarking and cost-structure comparisons',
      'Business planning and strategic hypothesis testing',
      'Executive decision-support reports and scenario simulations'
    ],
    deliverables: [
      'Bankable Business Feasibility Study',
      'Unit Economics & Scalability Stress-Test Model',
      'Strategic Option Evaluation Deck',
      'Executive Decision-Support Briefing Document'
    ],
    methodologies: [
      'Scenario Planning & Monte Carlo Sensitivity Analysis',
      'Value Chain Decomposition & Cost Benchmarking',
      'SWOT / TOWS Matrix & Blue Ocean Canvas',
      'Strategic Capability Auditing'
    ],
    idealFor: ['CEOs & Board Members', 'Early & Growth Stage Founders', 'Business Development Heads', 'Consulting Partners'],
    sampleReportTitle: 'Commercial Viability & Feasibility Blueprint: Multi-City Diagnostic Lab Network'
  },
  {
    id: 's4',
    slug: 'data-analysis',
    title: 'Data Analysis & Statistical Analysis',
    tagline: 'Transform raw datasets into mathematically validated, decision-ready insights.',
    shortDescription: 'Advanced quantitative modeling, hypothesis testing, survey data analytics, and interactive data visualisations.',
    iconName: 'BarChart3',
    features: [
      'Primary and secondary dataset hygiene, cleaning, and preparation',
      'Survey and questionnaire data cross-tabulation and weighting',
      'Quantitative and qualitative content/thematic analysis',
      'Descriptive and inferential statistical modeling',
      'Correlation, multiple regression, ANOVA, and MANOVA',
      'Hypothesis testing (p-value, confidence intervals, effect sizes)',
      'Factor analysis (EFA, CFA) and Structural Equation Modeling (SEM)',
      'Data visualisation, bespoke charts, and interactive dashboards',
      'Plain-language interpretation of complex mathematical findings',
      'Reproducible analytical codebooks (R, Python, SPSS, Stata)'
    ],
    deliverables: [
      'Cleaned, Imputed & Verified Dataset (CSV, SPSS SAV, RData)',
      'Comprehensive Statistical Findings Report with APA Tables',
      'Interactive BI Dashboard (Tableau, PowerBI or Web Embedded)',
      'Annotated Statistical Syntax & Code Notebook'
    ],
    methodologies: [
      'Normality & Multicollinearity Diagnostics',
      'Multivariate Regression & Logistic Regression',
      'Cluster Analysis (K-Means, Hierarchical) & PCA',
      'Power Analysis & Effect Size Calculations (Cohen’s d, η²)'
    ],
    idealFor: ['Business Intelligence Teams', 'Management Consultants', 'Market Researchers', 'Academic Scholars'],
    sampleReportTitle: 'Omnichannel Customer Basket Affinity & Elasticity: 250,000 Transaction Statistical Breakdown'
  },
  {
    id: 's5',
    slug: 'academic-phd-support',
    title: 'Academic & PhD Research Support',
    tagline: 'Methodological rigor, statistical precision, and ethical research consulting.',
    shortDescription: 'Consultative guidance on research design, questionnaire formulation, statistical analysis, and methodology for scholars and institutions.',
    iconName: 'GraduationCap',
    features: [
      'Research topic refinement and problem statement scoping',
      'Literature review structuring and theoretical framework design',
      'Research methodology consultation (Quantitative, Qualitative, Mixed-Methods)',
      'Conceptual framework and hypothesis development',
      'Survey questionnaire design and psychometric validation',
      'Research instrument reliability testing (Cronbach’s Alpha, Pilot testing)',
      'Doctoral dissertation and thesis data analysis support',
      'Statistical interpretation and publication-grade table creation',
      'Research paper data analysis and methodology review',
      'Academic editing, structural formatting, and citation verification'
    ],
    deliverables: [
      'Methodology Framework & Research Design Document',
      'Psychometrically Validated Questionnaire Instrument',
      'Statistical Analysis Chapter Appendices with Syntax',
      'Publication-Ready Visual Tables (APA 7th Edition Format)'
    ],
    methodologies: [
      'Philosophical Stance (Positivism vs Constructivism) Scoping',
      'Structural Equation Modeling (PLS-SEM & CB-SEM via SmartPLS / AMOS)',
      'Thematic & Content Analysis (NVivo / ATLAS.ti Protocol)',
      'Instrument Construct Validity (Convergent & Discriminant / HTMT)'
    ],
    idealFor: ['PhD Candidates', 'Postdoctoral Fellows', 'University Faculty', 'Academic Research Labs'],
    sampleReportTitle: 'Empirical Study on FinTech Trust: Structural Equation Modeling & Moderation Analysis'
  },
  {
    id: 's6',
    slug: 'research-reports',
    title: 'Research Report Generation & Documentation',
    tagline: 'Publication-grade executive reports structured for boardroom clarity and impact.',
    shortDescription: 'Custom, professionally written and visually compelling research reports with methodological transparency and actionable conclusions.',
    iconName: 'FileText',
    features: [
      'Custom corporate research reports tailored to bespoke requirements',
      'Market research and industry intelligence publications',
      'Data-driven statistical analysis reports and dashboards',
      'Investment memo and feasibility study reports',
      'Academic whitepapers and institutional research monographs',
      'Executive summaries and C-suite management presentations',
      'Interactive digital report portals and PDF documentation',
      'Strict quality audit: methodology, sources, limitations, and recommendations'
    ],
    deliverables: [
      'High-Impact Executive Summary (3–5 pages)',
      'Comprehensive Technical Research Report (30–80 pages)',
      'Accompanying Slide Deck (PowerPoint / Google Slides)',
      'Full Source Reference Bibliography & Audit Trail'
    ],
    methodologies: [
      'Pyramid Principle Structured Thinking',
      'Peer-Review Quality Control Checklists',
      'Data-to-Narrative Synthesis Protocol',
      'Corporate Brand Alignment Formatting'
    ],
    idealFor: ['Corporate Strategy Executives', 'Think Tanks & Foundations', 'Consulting Firms', 'Board Advisory Committees'],
    sampleReportTitle: 'State of Renewable Energy Storage: 2026 Industry Benchmark & Commercial Outlook'
  }
];

export const clientSegments = [
  {
    title: 'Corporates & Established Enterprises',
    description: 'Corporate intelligence, market expansion analysis, competitor benchmarking, and boardroom strategic reports to support executive decision-making.',
    iconName: 'Briefcase',
    stats: 'Enterprise Grade',
    keyNeeds: ['M&A due diligence', 'Competitor benchmarking', 'Market entry sizing', 'Customer churn analytics']
  },
  {
    title: 'Startups & High-Growth Founders',
    description: 'Empirical TAM/SAM/SOM validation, business model stress-testing, and investor-ready feasibility reports for fundraising and go-to-market.',
    iconName: 'Rocket',
    stats: 'Investor-Ready',
    keyNeeds: ['Pitch deck data verification', 'Unit economics modeling', 'Target demographic surveys', 'Pricing sensitivity']
  },
  {
    title: 'Management Consulting Firms',
    description: 'White-label research support, secondary intelligence gathering, and advanced statistical analysis that seamlessly plug into client engagements.',
    iconName: 'Users',
    stats: 'White-Label Available',
    keyNeeds: ['Data cleaning & SPSS/R modeling', 'Secondary desk research dossiers', 'Custom charts & decks', 'Fast turnaround']
  },
  {
    title: 'Financial & Business Analysts',
    description: 'Industry comparisons, ratio analysis, balance sheet deep-dives, and econometric forecasting to power investment theses.',
    iconName: 'LineChart',
    stats: 'Rigorous Math',
    keyNeeds: ['Financial ratio modeling', 'Sector supply-chain mapping', 'Risk matrix assessments', 'Valuation benchmarking']
  },
  {
    title: 'Academic Institutions & Research Labs',
    description: 'Collaborative research design, grant proposal data preparation, institutional surveys, and multi-variable econometric analysis.',
    iconName: 'School',
    stats: 'Institutional Grade',
    keyNeeds: ['Institutional surveys', 'Grant proposal methodology', 'Cross-sectional studies', 'Data curation']
  },
  {
    title: 'PhD Scholars & Research Candidates',
    description: 'Ethical, consultative assistance in refining research methodology, questionnaire design, and statistical data analysis for doctoral dissertations.',
    iconName: 'GraduationCap',
    stats: 'Academic Integrity',
    keyNeeds: ['Hypothesis testing & SEM', 'SPSS/R data interpretation', 'APA formatted tables', 'Literature framework']
  },
  {
    title: 'NGOs & Development Organisations',
    description: 'Socio-economic baseline surveys, program impact assessments, demographic analyses, and grant-compliant monitoring reports.',
    iconName: 'Globe',
    stats: 'Impact Analytics',
    keyNeeds: ['Baseline & endline surveys', 'Impact evaluation metrics', 'Demographic census analysis', 'Policy briefs']
  },
  {
    title: 'Market Research Teams & Agencies',
    description: 'Capacity augmentation for survey scripting, statistical cross-tabulation, cluster analysis, and custom intelligence reporting.',
    iconName: 'PieChart',
    stats: 'Scalable Capacity',
    keyNeeds: ['MaxDiff & Conjoint analysis', 'Survey coding & cleaning', 'Weighting & tabulations', 'Consumer sentiment']
  }
];

export const methodologyPhases = [
  {
    step: '01',
    title: 'Research Scoping & Hypotheses Framing',
    description: 'We clarify the underlying business or academic questions, define parameters, formulate explicit hypotheses, and agree on precise deliverable criteria.',
    activities: [
      'Stakeholder alignment interviews',
      'Literature & baseline scan',
      'Explicit research question formulation',
      'Mutual NDA & project scope charter'
    ]
  },
  {
    step: '02',
    title: 'Data Sourcing & Protocol Design',
    description: 'We design rigorous primary collection protocols (surveys, interviews) or identify authoritative secondary repositories (regulatory filings, industry databases).',
    activities: [
      'Sample size calculation & power analysis',
      'Survey questionnaire design & pilot test',
      'Secondary database mapping',
      'Data collection protocol validation'
    ]
  },
  {
    step: '03',
    title: 'Data Hygiene, Verification & Preparation',
    description: 'Raw information is systematically cleaned, screened for bias, cross-checked against primary sources, and prepared for high-fidelity modeling.',
    activities: [
      'Outlier detection & missing value treatment',
      'Cross-source secondary fact verification',
      'Normality & multicollinearity checks',
      'Standardized codebook & data dictionary'
    ]
  },
  {
    step: '04',
    title: 'Statistical Modeling & Analytical Testing',
    description: 'Applying appropriate quantitative and qualitative analytical models—from multivariate regression and SEM to competitive benchmarking matrices.',
    activities: [
      'Descriptive & inferential statistical tests',
      'Econometric / financial model calibration',
      'Factor validation (EFA/CFA) & SEM path modeling',
      'Sensitivity & scenario stress-testing'
    ]
  },
  {
    step: '05',
    title: 'Insight Synthesis & Cross-Validation',
    description: 'We bridge numbers and strategy. Findings are interpreted in plain executive language, contextualized against real-world constraints, and peer-reviewed.',
    activities: [
      'Pyramid principle narrative structuring',
      'Senior analyst peer-review audit',
      'Identification of strategic limitations & risks',
      'Actionable recommendations formulation'
    ]
  },
  {
    step: '06',
    title: 'Professional Report Generation & Briefing',
    description: 'We deliver presentation-ready PDF reports, interactive dashboards, and transparent codebooks, complemented by an executive walkthrough.',
    activities: [
      'Publication-grade charts & visual layouts',
      'Executive summary & board slides',
      'Delivery of editable data models & syntax',
      'Live consultation & findings briefing'
    ]
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'CleanTech Market Entry & Competitor Intelligence in Western Europe',
    clientType: 'Corporate / Enterprise',
    industry: 'Energy & Sustainability',
    challenge: 'A clean energy technology firm needed to assess the viability of launching its battery energy storage systems (BESS) across Germany, the Netherlands, and the UK, against 14 established incumbents.',
    solution: 'Aratha conducted a 360-degree competitor intelligence audit, regulatory subsidy scan, and a bottom-up addressable market sizing model across utility-scale and commercial segments.',
    analyticalApproach: [
      'Triangulated 10-year historic grid interconnection data',
      'Benchmarked CAPEX, warranty terms, and pricing across 14 OEMs',
      'Developed a multi-scenario tariff and payback sensitivity model'
    ],
    outcomes: [
      'Identified an overlooked €420M commercial segment with 3x lower competitive density',
      'Client successfully prioritized the UK and Netherlands for Q1 entry',
      'Board approved $18M capital deployment with high confidence'
    ],
    testimonialSnippet: 'Aratha provided the empirical depth our investment committee required. The data was rigorous, unbiased, and immediately actionable.'
  },
  {
    id: 'cs2',
    title: 'Structural Equation Modeling & Psychometric Analysis for Doctoral Thesis',
    clientType: 'PhD Candidate / Research Scholar',
    industry: 'Academic / Behavioral Finance',
    challenge: 'A doctoral candidate at a premier European university required advanced statistical moderation and mediation modeling on a 1,600-respondent FinTech adoption survey.',
    solution: 'Aratha provided comprehensive methodological consultation, data cleaning, exploratory factor analysis (EFA), confirmatory factor analysis (CFA), and PLS-SEM path modeling.',
    analyticalApproach: [
      'Construct validity verification via HTMT and Fornell-Larcker criteria',
      'Bootstrapped 5,000 sub-samples to test indirect mediation paths',
      'Prepared publication-ready APA 7th edition tables and path diagrams'
    ],
    outcomes: [
      'Dissertation defense completed with Highest Honors (Summa Cum Laude)',
      'Zero methodological objections raised by the external thesis committee',
      'Paper subsequently accepted at a top-tier peer-reviewed journal'
    ],
    testimonialSnippet: 'The statistical consulting adhered strictly to ethical guidelines while elevating my empirical chapters to world-class academic standards.'
  },
  {
    id: 'cs3',
    title: 'Retail Basket Affinity & Customer Segmentation of 250,000 Transactions',
    clientType: 'Management Consulting Firm',
    industry: 'Consumer Goods & Retail',
    challenge: 'A boutique management consulting firm lacked in-house data engineering capacity to analyze a massive 250,000-row transactional database for a premier hypermarket client.',
    solution: 'Aratha performed end-to-end data cleaning, RFM customer segmentation, and market basket affinity association rules (Apriori algorithm).',
    analyticalApproach: [
      'Unsupervised K-Means clustering with silhouette optimization',
      'Price elasticity calculation across 45 primary FMCG SKUs',
      'Delivered white-label executive slide deck and Tableau workbook'
    ],
    outcomes: [
      'Discovered 4 distinct high-margin customer cohorts representing 68% of profit',
      'Optimized cross-sell promotions resulting in a projected 4.2% basket size increase',
      'Delivered 3 days ahead of the consulting firm’s client deadline'
    ],
    testimonialSnippet: 'Aratha felt like an extension of our senior analytics team. Rapid, meticulous, and boardroom-ready.'
  }
];

export const articlesData: Article[] = [
  {
    id: 'art-01',
    slug: 'avoiding-common-pitfalls-in-market-sizing',
    title: 'Avoiding Common Pitfalls in Market Sizing: Bottom-Up vs. Top-Down Triangulation',
    category: 'Market Intelligence',
    readTime: '6 min read',
    publishDate: 'October 8, 2026',
    author: 'Marcus Vance, CFA — Lead Analyst',
    excerpt: 'Why single-method TAM estimations fail in pitch decks and boardroom presentations, and how empirical triangulation produces credible market estimates.',
    content: [
      'In high-stakes corporate decisions and venture capital pitches, few metrics are as scrutinised—and as frequently flawed—as Total Addressable Market (TAM).',
      'A common mistake is the top-down multiplication trap: taking a trillion-dollar macro industry report and arbitrarily assuming "if we capture just 1%". Institutional investors and seasoned corporate boards immediately discount this approach.',
      'At Aratha Research & Analytics, we mandate a triangulated framework combining top-down regulatory macro-data with rigorous bottom-up unit economics and supply-side capacity constraints.',
      'Bottom-up sizing begins with the fundamental economic transaction: Number of target customers × realistic purchase frequency × average contract value. When cross-verified against actual competitor capacity, this method yields figures that withstand institutional due diligence.'
    ],
    keyTakeaways: [
      'Never rely solely on top-down macro industry multipliers.',
      'Triangulate bottom-up unit economics with supply-side competitor capacity.',
      'Always present baseline, conservative, and aggressive scenario models.'
    ]
  },
  {
    id: 'art-02',
    slug: 'academic-integrity-statistical-consulting-guide',
    title: 'Ethical Guidelines in Statistical Consulting for Doctoral and Academic Research',
    category: 'Academic Methodology',
    readTime: '8 min read',
    publishDate: 'September 24, 2026',
    author: 'Dr. Helena Thorne, PhD — Head of Academic Research Support',
    excerpt: 'How academic research support must strictly differentiate consultative methodological guidance from unpermitted ghostwriting or data manipulation.',
    content: [
      'Maintaining absolute academic integrity is non-negotiable. Scholars frequently need guidance on complex statistical packages (such as R, Python, SPSS, or AMOS) and econometric modeling, but this must never cross the threshold into data fabrication or unethical authorial substitution.',
      'Our approach at Aratha is explicitly consultative: We work with the scholar’s genuine datasets, teach methodology, verify mathematical accuracy, and assist in interpreting statistical findings according to recognized academic conventions (e.g., APA 7th edition).',
      'We do not write theses for candidates, invent survey responses, or promise publication in journals. Legitimate academic support empowers the researcher to understand and defend their own findings with confidence.'
    ],
    keyTakeaways: [
      'Genuine research support focuses on methodology, data cleaning, and statistical interpretation.',
      'Data fabrication, p-hacking, and content ghostwriting are completely unethical and rejected.',
      'Empowering the researcher to defend their own thesis is the ultimate objective.'
    ]
  },
  {
    id: 'art-03',
    slug: 'structuring-board-ready-research-reports',
    title: 'The Architecture of an Impactful Corporate Research Report',
    category: 'Corporate Strategy',
    readTime: '5 min read',
    publishDate: 'September 12, 2026',
    author: 'Priya Kulkarni — Senior Strategy Consultant',
    excerpt: 'How to distill 80 pages of dense market data into an executive summary that drives strategic alignment and decisive board action.',
    content: [
      'Executives do not suffer from a lack of data; they suffer from a lack of clarity. A 70-page analytical report that leaves the core decision ambiguous is a failure of communication.',
      'At Aratha, our report development adheres to Barbara Minto’s Pyramid Principle: Lead with the governing conclusion, followed by structured logical arguments, supported by verifiable empirical data points.',
      'Every chart must answer a specific strategic question. Descriptive charts without context waste cognitive bandwidth. Analytical charts must highlight the variance, the anomaly, and the strategic implication.'
    ],
    keyTakeaways: [
      'Employ the Pyramid Principle: Conclusion first, supporting arguments second.',
      'Eliminate decorative data; every chart must inform a specific business decision.',
      'Ensure every executive summary can stand alone as a C-suite decision memo.'
    ]
  }
];

export const faqsData = [
  {
    category: 'General & Firm Overview',
    questions: [
      {
        q: 'What is Aratha Research & Analytics?',
        a: 'Aratha is an independent research and analytics firm. We specialize in company research, market intelligence, business feasibility, statistical data analysis, and professional research report development. We are not a book publisher, printing company, or academic ghostwriting service.'
      },
      {
        q: 'Who are your primary clients?',
        a: 'We serve corporate strategy teams, enterprises, startup founders, management consulting firms, financial analysts, academic institutions, PhD scholars, and NGOs across global markets.'
      },
      {
        q: 'How do you safeguard client confidentiality and proprietary data?',
        a: 'We execute comprehensive Non-Disclosure Agreements (NDAs) prior to receiving proprietary data. All client datasets, methodologies, and deliverables are encrypted, stored in isolated environments, and never shared or repurposed.'
      }
    ]
  },
  {
    category: 'Services & Methodologies',
    questions: [
      {
        q: 'What data formats and statistical tools do you support?',
        a: 'We work across Python, R, SPSS, Stata, SAS, Excel, and SQL. Deliverables can be provided in SPSS (.sav), R codebooks, Python Jupyter notebooks, interactive PowerBI/Tableau dashboards, and publication-ready Word/PDF files.'
      },
      {
        q: 'Can you collect primary data or conduct consumer surveys?',
        a: 'Yes. We design rigorous questionnaires, determine statistically sound sample sizes, administer CAWI (Computer Assisted Web Interviewing) surveys, clean raw responses, and perform cross-tabulations and segmentation analysis.'
      },
      {
        q: 'What is your turnaround time for a custom research project?',
        a: 'Timelines vary by scope. Rapid corporate intelligence dossiers typically take 5–8 business days. Complex market sizing models or doctoral statistical analysis mandates typically take 2–4 weeks. Exact schedules are confirmed in your formal research proposal.'
      }
    ]
  },
  {
    category: 'Academic & PhD Research',
    questions: [
      {
        q: 'How does Aratha support PhD candidates while maintaining academic integrity?',
        a: 'We provide consultative support on research design, questionnaire formulation, data cleaning, and statistical modeling (regression, SEM, ANOVA, etc.). We do NOT write dissertations, invent data, guarantee journal acceptance, or engage in academic misconduct. Our role is that of a methodological and statistical advisor.'
      },
      {
        q: 'Will you explain the statistical findings so I can defend my dissertation?',
        a: 'Yes, absolutely. Every academic support engagement includes a comprehensive walkthrough session where our senior analyst explains the hypotheses tests, statistical tables, effect sizes, and model diagnostics so you are fully prepared for your viva or defense.'
      }
    ]
  },
  {
    category: 'Proposals & Engagement',
    questions: [
      {
        q: 'How do I request a research proposal?',
        a: 'You can submit a project brief via our "Request a Research Proposal" form. Our analytical team reviews your requirements and responds with a detailed methodology outline, scope of deliverables, timeline, and fixed quote within 24–48 hours.'
      },
      {
        q: 'Can we book an exploratory consultation before committing?',
        a: 'Yes. You can schedule a 30-minute discovery consultation directly through our website to discuss your research questions, examine data availability, and clarify project feasibility.'
      }
    ]
  }
];
