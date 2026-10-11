// ============================================================================
// ARATHA RESEARCH & ANALYTICS - NEO4J GRAPH DATA MODEL & CONSTRAINTS
// ============================================================================

// 1. UNIQUE IDENTIFIER CONSTRAINTS
CREATE CONSTRAINT customer_id_unique IF NOT EXISTS
FOR (c:Customer) REQUIRE c.id IS UNIQUE;

CREATE CONSTRAINT customer_email_unique IF NOT EXISTS
FOR (c:Customer) REQUIRE c.email IS UNIQUE;

CREATE CONSTRAINT organisation_name_unique IF NOT EXISTS
FOR (o:Organisation) REQUIRE o.name IS UNIQUE;

CREATE CONSTRAINT enquiry_id_unique IF NOT EXISTS
FOR (e:Enquiry) REQUIRE e.id IS UNIQUE;

CREATE CONSTRAINT enquiry_ref_unique IF NOT EXISTS
FOR (e:Enquiry) REQUIRE e.referenceNumber IS UNIQUE;

CREATE CONSTRAINT service_name_unique IF NOT EXISTS
FOR (s:Service) REQUIRE s.name IS UNIQUE;

CREATE CONSTRAINT project_id_unique IF NOT EXISTS
FOR (p:ResearchProject) REQUIRE p.id IS UNIQUE;

CREATE CONSTRAINT report_id_unique IF NOT EXISTS
FOR (r:Report) REQUIRE r.id IS UNIQUE;

CREATE CONSTRAINT consultation_id_unique IF NOT EXISTS
FOR (cons:Consultation) REQUIRE cons.id IS UNIQUE;

// 2. PERFORMANCE INDEXES
CREATE INDEX customer_name_index IF NOT EXISTS
FOR (c:Customer) ON (c.fullName);

CREATE INDEX enquiry_status_index IF NOT EXISTS
FOR (e:Enquiry) ON (e.status);

CREATE INDEX project_status_index IF NOT EXISTS
FOR (p:ResearchProject) ON (p.status);

// 3. CORE SERVICES INITIAL SEED
MERGE (:Service {name: 'Company Research & Corporate Intelligence', category: 'Corporate'})
MERGE (:Service {name: 'Market Research & Market Intelligence', category: 'Market'})
MERGE (:Service {name: 'Business Research & Strategic Analysis', category: 'Strategy'})
MERGE (:Service {name: 'Data Analysis & Statistical Analysis', category: 'Analytics'})
MERGE (:Service {name: 'Academic & PhD Research Support', category: 'Academic'})
MERGE (:Service {name: 'Research Report Generation', category: 'Documentation'})
MERGE (:Service {name: 'Industry & Competitor Research', category: 'Intelligence'})
MERGE (:Service {name: 'Feasibility Studies & Business Analysis', category: 'Feasibility'});

// 4. GRAPH RELATIONSHIP VERIFICATION QUERY
// Query to inspect the research pipeline graph
// MATCH (c:Customer)-[:REPRESENTS]->(o:Organisation)
// MATCH (c)-[:SUBMITTED]->(e:Enquiry)-[:REQUESTS]->(s:Service)
// OPTIONAL MATCH (e)-[:CREATES]->(p:ResearchProject)-[:PRODUCES]->(r:Report)
// RETURN c, o, e, s, p, r LIMIT 50;
