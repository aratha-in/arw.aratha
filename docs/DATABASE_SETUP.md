# Neo4j Database Setup & Integration Guide

**Aratha Research & Analytics** uses a native Neo4j Property Graph model to manage researchers, customer organisations, proposal enquiries, service taxonomy, consultations, research projects, and delivered reports.

---

## 1. Graph Data Model Overview

### Node Labels
- `(:Customer)` - Individuals submitting enquiries or booking consultations.
  - Properties: `id`, `fullName`, `email`, `phone`, `createdAt`
- `(:Organisation)` - Companies, universities, research institutes, or NGOs.
  - Properties: `id`, `name`, `clientCategory`
- `(:Enquiry)` - Research proposal briefs and RFPs.
  - Properties: `id`, `referenceNumber`, `service`, `projectTitle`, `description`, `dataAvailable`, `reportFormat`, `deadline`, `estimatedBudget`, `status`, `createdAt`, `updatedAt`
- `(:Service)` - Canonical service offerings.
  - Properties: `name`, `category`
- `(:Consultation)` - Scheduled expert consultations.
  - Properties: `id`, `referenceNumber`, `preferredDate`, `preferredTimeSlot`, `consultationTopic`, `status`, `createdAt`
- `(:ResearchProject)` - Active intelligence and analytics projects.
  - Properties: `id`, `projectCode`, `title`, `status`, `progressPercentage`, `leadAnalyst`, `startDate`, `targetDeliveryDate`
- `(:Report)` - Deliverable documents and analytical monographs.
  - Properties: `id`, `reportCode`, `title`, `sector`, `format`, `status`

### Relationships
- `(:Customer)-[:REPRESENTS]->(:Organisation)`
- `(:Customer)-[:SUBMITTED]->(:Enquiry)`
- `(:Enquiry)-[:REQUESTS]->(:Service)`
- `(:Enquiry)-[:LEADS_TO]->(:Consultation)`
- `(:Enquiry)-[:CREATES]->(:ResearchProject)`
- `(:ResearchProject)-[:PRODUCES]->(:Report)`

---

## 2. Quick Setup Options

### Option A: Neo4j Desktop (Local)
1. Download & install [Neo4j Desktop](https://neo4j.com/download/).
2. Create a new Graph DBMS (version 5.x recommended). Set a password (e.g. `aratha_secure_2026`).
3. Start the DBMS (default bolt port is `bolt://localhost:7687`).
4. Update your `.env.local`:
   ```bash
   NEO4J_URI=bolt://localhost:7687
   NEO4J_USERNAME=neo4j
   NEO4J_PASSWORD=aratha_secure_2026
   ```
5. Open the Neo4j Browser and run the initialization script in `docs/neo4j-schema.cypher`.

### Option B: Neo4j AuraDB (Cloud - Free Tier available)
1. Sign up at [Neo4j Aura](https://neo4j.com/cloud/platform/aura-graph-database/).
2. Create a Free AuraDB Instance.
3. Save the connection URI (`neo4j+s://<dbid>.databases.neo4j.io`) and generated password.
4. Add to `.env.local`:
   ```bash
   NEO4J_URI=neo4j+s://<dbid>.databases.neo4j.io
   NEO4J_USERNAME=neo4j
   NEO4J_PASSWORD=<your_aura_password>
   ```

### Option C: Zero-Config Resilience (Default)
If no `NEO4J_PASSWORD` is supplied in your environment variables, the application **automatically operates with the embedded graph persistence engine**. It manages nodes and relationships, provides sample corporate enquiries and projects, and ensures the entire website and Admin Portal run out-of-the-box for evaluation and testing.
