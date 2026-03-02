/**
 * ─── PROJECT / DEPLOYMENT DATA ───
 * Original by Sarthak Handa — https://github.com/sarthak-handa
 *
 * Each entry drives both the card on the homepage AND the dedicated case-study page.
 * To add a project: copy an existing entry, change the slug, and fill in your data.
 * To remove a project: delete the entry from the array.
 */

export interface Project {
  slug: string;
  name: string;
  status: "PRODUCTION" | "ACTIVE" | "EXPERIMENTAL";
  latency: string;
  scale: string;
  role: string;
  tagline: string;
  problem: string;
  approach: string;
  architecture: string;
  results: string;
  learnings: string;
  stack: string[];
  flow: string[];
  sourceUrl?: string;
  liveUrl?: string;
  liveUrls?: { label: string; url: string }[];
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  // ─── 1. YOGIJI DIGI INTERNAL ANALYTICS ───────────────────────────────────────────────────────
  {
    slug: "yogiji-digi-internal-pbi-analytics",
    name: "YOGIJI DIGI — Internal PBI Analytics",
    status: "PRODUCTION",
    latency: "Real-time BI",
    scale: "Organization-wide",
    role: "Technical Product Analyst",
    tagline:
      "Revenue intelligence and forecasting Power BI system built to analyze fiscal performance, optimize dispatch planning, and drive strategic sales growth.",

    problem:
      "The organization lacked a unified analytical view of revenue, dispatch schedules, project execution trends, and future billing forecasts. Sales data, assembly dispatch timelines, and project-level billing values were scattered across multiple datasets, making it difficult to identify execution patterns, forecast revenue accurately, and prioritize assemblies for maximum business impact.",

    approach:
      "Conducted fiscal year-to-date revenue analysis to identify execution patterns, billing cycles, and project performance trends. Merged multiple operational datasets including sales data, assembly dispatch timelines, project manager allocations, billing values, and timesheets into a single structured Power BI data model. Built advanced DAX measures to calculate revenue trends, forecast future billings based on scheduled dispatches, and enable comparative historical vs projected analysis. Designed a multi-layered, insight-driven dashboard for leadership and operations teams.",

    architecture:
      "Multiple Data Sources (Sales Data + Dispatch Schedules + Timesheets + Project Metadata) → Data Cleaning & Transformation → Unified Data Model → DAX Measures (Revenue, Forecasting, Dispatch Metrics) → Interactive Power BI Dashboard → Leadership & Operations Decision Layer.",

    results:
      "Delivered a centralized analytics dashboard providing complete visibility into past revenue, forecasted billing, dispatch timelines, project-level performance, and project manager contributions. Enabled proactive assembly prioritization and execution planning. Optimized delivery alignment with forecasted sales, resulting in a 100% month-on-month revenue growth in December.",

    learnings:
      "Revenue forecasting requires operational context — billing cannot be analyzed without dispatch timelines and execution flow. Clean data modeling is more important than visual design. DAX-based forecasting becomes powerful when grounded in real operational constraints like timesheets and dispatch schedules. Data alignment across departments directly impacts revenue growth.",

    stack: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Data Transformation",
      "Excel",
      "Time-Series Forecasting",
      "Business Intelligence",
      "Data Merging",
    ],

    flow: [
      "Fiscal Year Revenue Analysis",
      "Pattern Recognition",
      "Dataset Merging",
      "Data Modeling",
      "DAX Measure Construction",
      "Forecast Calculation",
      "Dashboard Design",
      "Assembly Prioritization & Execution",
    ],

    liveUrl:
      "https://app.powerbi.com/groups/me/reports/51491eda-2ba8-4ba2-bfbe-7e5b8e4bdec5?pbi_source=desktop",

    metrics: [
      { label: "Revenue Growth (Dec)", value: "100%" },
      { label: "Forecasting Scope", value: "FY to Date + Future Dispatch" },
      { label: "Data Sources Merged", value: "Multiple Operational Datasets" },
      { label: "Visibility", value: "Project + PM + Assembly Level" },
    ],
  },

  // ─── 2. YOGIJI DIGI — Internal Analytics Software ────────────────────────────────────────────────
  {
    slug: "yogiji-digi-internal-analytics-software",
    name: "YOGIJI DIGI — Internal Analytics Software",
    status: "PRODUCTION",
    latency: "Real-time Processing",
    scale: "Multi-Departmental Deployment",
    role: "Technical Product Analyst",
    tagline:
      "Built a custom Business Intelligence engine replacing Power BI Embedded — delivering fully customizable analytics, forecasting, filtering, drilldowns, and export systems at zero licensing cost.",

    problem:
      "The organization relied on Power BI dashboards for revenue forecasting, dispatch tracking, and operational visibility. However, scaling required Power BI Embedded subscriptions, which significantly increased recurring costs and limited deep customization. Leadership required a system that could replicate Power BI’s analytical capabilities while allowing full control over business logic, UI behavior, exports, filtering hierarchy, and workflow automation — without dependency on third-party licensing.",

    approach:
      "Reverse-engineered the behavioral architecture of Power BI dashboards and rebuilt the analytical engine from scratch using JavaScript, Chart.js, custom state management, and a structured data modeling layer. Designed a centralized data ingestion pipeline that reads Excel-based operational datasets via secured APIs. Built a custom filtering engine supporting slicers, multi-select filters, cross-chart highlighting, drill-down matrices, sorting hierarchies, contextual toggles (Forecast vs Actuals), dynamic KPI recalculation, and export-ready PDF reporting. Implemented a front-end state controller to mimic Power BI’s interaction model including context switching, dynamic aggregation, and hierarchical table expansion.",

    architecture:
      "Excel Data Sources → Secured API Layer → Data Cleaning & Normalization → Custom Data Model (Indexed & Context-Aware) → State Management Engine → Interactive Chart Layer (Bar, Pie, Line) → KPI Computation Layer → Drill-Down Matrix Engine → PDF Export Engine → Internal Web Deployment.",

    results:
      "Successfully eliminated the need for Power BI Embedded subscriptions while maintaining identical analytical capabilities. Delivered a fully customizable internal BI platform supporting Forecast and Actual contexts, dispatch tracking, billing aggregation, product mix visualization, and manager-level performance analytics. Enabled unlimited UI customization, advanced sorting logic (Status > Date > Value > Name hierarchy), dynamic month range detection, contextual labeling, and automated report generation. Reduced recurring BI licensing costs to zero while increasing system flexibility.",

    learnings:
      "BI tools are interaction engines, not just chart libraries. The real power lies in state control, aggregation logic, and contextual data modeling. Rebuilding Power BI behavior required mastering cross-filtering logic, dataset normalization, and front-end state orchestration. Full ownership of analytics infrastructure provides long-term strategic leverage over third-party SaaS dependency.",

    stack: [
      "JavaScript (ES6+)",
      "Chart.js",
      "Custom State Management",
      "REST APIs",
      "Excel Data Integration",
      "Tailwind CSS",
      "Bootstrap",
      "Data Normalization",
      "PDF Generation (jsPDF)",
      "Front-End Architecture Design",
    ],

    flow: [
      "Excel Data Ingestion",
      "Data Cleaning & Parsing",
      "Status & Source Mapping",
      "Context Switching (Forecast / Actual)",
      "Dynamic KPI Computation",
      "Cross-Filter Engine",
      "Chart Interaction Layer",
      "Hierarchical Table Drilldown",
      "Sorting Logic Engine",
      "PDF Report Generation",
    ],

    metrics: [
      { label: "BI Licensing Cost", value: "Reduced to 0" },
      { label: "Context Modes", value: "Forecast + Actuals" },
      { label: "Cross-Filtering", value: "Chart ↔ Table ↔ KPI Sync" },
      { label: "Export Capability", value: "Automated PDF Reports" },
    ],
  },

  // ─── 3. YOGIJI DIGI — CRM Analytics Software ─────────────────────────────────────
  {
    slug: "yogiji-digi-crm-analytics-software",
    name: "YOGIJI DIGI — CRM Analytics Software",
    status: "PRODUCTION",
    latency: "Near Real-Time",
    scale: "Industrial Deployment (Rolling Mills)",
    role: "Technical Product Analyst",

    tagline:
      "Built a full-stack mill analytics engine that transforms AGC HMI raw data into operational intelligence, performance diagnostics, and decision-grade insights.",

    problem:
      "YOGIJI DIGI manufactures and installs cold rolling mills, but post-installation visibility into mill performance was limited to raw AGC HMI machine data. Clients could view basic operational parameters, yet there was no structured intelligence layer to analyze energy efficiency, pass distribution, thickness reduction efficiency, power utilization, operator performance, or production bottlenecks. The absence of a unified analytics system meant performance optimization depended heavily on manual interpretation rather than data-driven diagnostics.",

    approach:
      "Designed a tailored analytics engine that processes AGC HMI data and transforms it into structured production intelligence. Developed custom logic to compute derived metrics including reduction percentage, pass efficiency, energy-per-coil analysis, run vs idle time segmentation, and mill power profiling. Integrated Excel and machine-level datasets into a normalized data structure, then built both Power BI dashboards and a custom JavaScript analytics interface (Chart.js + Tailwind + dynamic filtering engine). Implemented cross-filter interactions, granularity control (day/week/month), pass-level distribution analytics, and thickness mapping for actionable mill diagnostics.",

    architecture:
      "AGC HMI Machine Data → Excel / CSV Ingestion → Data Cleaning & Structuring → Derived Metric Engine (Reduction %, Energy, Run/Idle, Power Peaks) → Aggregation Layer → Dual Interface Layer (Power BI + Custom Web Analytics Suite) → Operator / Management Decision Layer.",

    results:
      "Enabled full visibility of rolling mill operations beyond raw machine metrics. Delivered insights into energy consumption trends, maximum mill vs ISU power variance, pass distribution efficiency, output thickness consistency, productivity (MPM), and time utilization segmentation. Transformed the mill from a hardware sale into an analytics-enabled performance product. Provided clients with actionable diagnostics for throughput optimization, power stabilization, and reduction efficiency improvements.",

    learnings:
      "Industrial analytics is not about charts — it is about translating mechanical processes into measurable digital intelligence. AGC data alone is meaningless without contextual transformation. Reduction logic, pass count behavior, and energy correlation must be derived, not displayed. Designing analytics for physical systems requires understanding both mechanical engineering principles and software data modeling.",

    stack: [
      "Power BI",
      "JavaScript (ES6+)",
      "Chart.js",
      "Tailwind CSS",
      "DAX",
      "Excel Data Modeling",
      "CSV Parsing",
      "Industrial Data Analysis",
      "Time-Series Aggregation",
      "Custom Filtering Engine",
    ],

    flow: [
      "AGC HMI Data Capture",
      "CSV / Excel Structuring",
      "Metric Derivation (Reduction %, Energy, Power, Time)",
      "Pass-Level Aggregation",
      "Date & Granularity Filtering",
      "Cross-Chart Interaction Engine",
      "Dashboard Rendering",
      "Operational Decision Making",
    ],

    metrics: [
      { label: "Operational Visibility", value: "End-to-End Mill Analysis" },
      { label: "Derived Metrics Engine", value: "Custom Built" },
      { label: "Granularity Control", value: "Day / Week / Month" },
      { label: "Analytics Coverage", value: "Energy + Power + Thickness + Productivity" },
    ],
  },

  // ─── 4. YOGIJI DIGI — Project Execution Workflow & Planning OS ────────────────────────────────────────────────
  {
    slug: "yogiji-digi-project-execution-workflow",
    name: "YOGIJI DIGI — Project Execution Workflow & Planning OS",
    status: "PRODUCTION",
    latency: "Event-Driven (Real-Time Triggers)",
    scale: "Organization-Wide Governance System",
    role: "Workflow Architect & Technical Product Owner",

    tagline:
      "Designed and implemented a governance-controlled execution workflow system that digitizes SOPs, automates cross-department triggers, and enforces SLA-backed accountability across the entire project lifecycle.",

    problem:
      "Project execution previously relied on fragmented tools (Realisation software, PPTs, draw.io, manual follow-ups, and WhatsApp coordination). There was no unified governance layer enforcing structured stage progression, SLA accountability, escalation logic, or cross-department visibility. Delays in project number allocation, advance handling, PM assignment, and kickoff meetings were manually tracked and prone to bottlenecks.",

    approach:
      "Converted the entire organizational project lifecycle into a controlled digital workflow system. Documented end-to-end SOPs, translated them into stage-gated execution logic, and built a web-based governance panel (ydprojects). Implemented role-based access control (Sales, Design, Finance, Directors, COO/VP, Super Admin), automated WhatsApp + Email triggers, SLA countdown timers (24h, 48h, 15 days), escalation matrix automation, audit logging with timestamps, and weekly executive reporting. Created configuration panels allowing non-technical admins to update escalation numbers and emails without code changes.",

    architecture:
      "Lead Received → Kickoff Panel Entry (SO, Client, Site, Machine) → Stage 0: Workflow Initiation → Stage 1: Project Number Allocation (Design SLA 24h) → Stage 2: Director Decision (SLA 48h) → Stage 3: PM Assignment (COO/VP SLA 48h) → Stage 4: Kickoff Meeting Submission (SLA 48h) → Stage 5: Handover to Realisation Tool → Execution Active.",

    results:
      "Eliminated dependency on PPT, draw.io, and manual coordination for execution governance. Reduced ambiguity across departments by enforcing stage visibility and owner accountability. Enabled micromanagement-level tracking with automated escalation triggers. Ensured every project moves through a structured lifecycle with SLA-backed enforcement. Established a single source of truth for project status across Sales, Design, Finance, COO, and Directors.",

    learnings:
      "Execution fails not because of incompetence but because of missing systems. Governance must be embedded in software. SLA timers must be automated, not assumed. Escalation logic creates discipline. Visibility creates ownership. Configuration-driven systems reduce long-term maintenance risk.",

    stack: [
      "JavaScript (Vanilla + Modular Architecture)",
      "Bootstrap 5",
      "DataTables",
      "Role-Based Access Control (RBAC)",
      "Webhook Integrations",
      "WhatsApp Business API",
      "Email SMTP Automation",
      "SLA Timer Engine",
      "Audit Logging System",
      "PDF Export (jsPDF)",
      "Local Storage / State Management",
    ],

    flow: [
      "Lead Entry",
      "Workflow Initiation",
      "Project Number Allocation",
      "Director Decision",
      "Advance Handling (Conditional)",
      "PM Assignment",
      "Kickoff Meeting",
      "Escalation Logic",
      "Realisation Handover",
      "Weekly Executive Broadcast",
    ],

    metrics: [
      { label: "Governance Coverage", value: "End-to-End Lifecycle" },
      { label: "Escalation Engine", value: "Automated (24h / 48h / 15d / 168h)" },
      { label: "Trigger Channels", value: "Email + WhatsApp" },
      { label: "Role Control", value: "Sales / Design / Finance / COO / Directors" },
    ],
  },

  // ─── 5. VSS SALESCO — Digital Infrastructure & Analytics ───────────────────
  {
    slug: "vss-salesco-digital-infrastructure",
    name: "VSS SALESCO — Digital Infrastructure & Analytics",
    status: "PRODUCTION",
    latency: "Web Deployment",
    scale: "Business-Level",
    role: "Full-Stack Developer & Digital Systems Architect",

    tagline:
      "Built complete digital presence and operational reporting structure for a 20-year security & automation firm.",

    problem:
      "The company lacked structured digital infrastructure including website presence, standardized quotations, analytics tracking, and discoverability.",

    approach:
      "Developed website from scratch, structured SEO foundation, optimized analytics tracking, standardized invoicing & quotation formats, created business email infrastructure, and strengthened online credibility.",

    architecture:
      "Website Development → SEO Structuring → Analytics Setup → Quotation Standardization → Business Email & Google Presence.",

    results:
      "Improved discoverability, professional documentation, reporting clarity, and online credibility with 15+ five-star reviews.",

    learnings:
      "Digital maturity requires systems — not just a website. Structured documentation and measurable visibility define credibility.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "SEO",
      "Analytics",
      "Business Email Setup"
    ],

    flow: [
      "Website Build",
      "SEO Implementation",
      "Analytics Integration",
      "Quotation Structuring",
      "Digital Asset Setup"
    ], 

     liveUrl: "https://vsssalesco.in",

    metrics: [
      { label: "Business Experience", value: "20+ Years" },
      { label: "Google Reviews", value: "15+ 5★" },
      { label: "Business Emails", value: "5 Configured" },
      { label: "Digital Assets", value: "Fully Structured" }
    ],
  },

  // ─── 6. SYNOPS AI — Autonomous AI Execution Infrastructure ───────────────────────────────────────────────────
  {
    slug: "synops-ai-autonomous-execution-systems",
    name: "SYNOPS AI — Autonomous AI Execution Infrastructure",
    status: "EXPERIMENTAL",
    latency: "Asynchronous Orchestration",
    scale: "Enterprise Systems",
    role: "Founder & Systems Architect",

    tagline:
      "Building AI as operational infrastructure — not a feature, not a chatbot — but a systems layer for execution.",

    problem:
      "Most companies experiment with AI through isolated use-cases: chatbots, copilots, prompt engineers, and internal analysts. This leads to inconsistent outputs, vendor lock-in, lack of monitoring, and no execution-level observability. AI becomes a productivity trick — not operational infrastructure.",

    approach:
      "Position AI as a structural layer inside organizations. Offering architecture diagnostics and system design consultation initially, followed by deployment retainers or subscription-based orchestration layer access. Transitioning from scattered tools to execution-grade, multi-model AI workflows.",

    architecture:
      "Input Layer (Data Ingestion) → Processing Layer (Signal Extraction) → Intelligence Layer (LLM Orchestration) → Execution Layer (Autonomous Action). Capabilities include multi-model orchestration, autonomous task routing, predictive risk flagging, and execution scoring.",

    results:
      "Architecture defined. Brand and positioning established. Infrastructure blueprint designed. Moving toward MVP and pilot implementations.",

    learnings:
      "Enable businesses to operate with AI as a structured intelligence layer — reducing dependency on multiple analysts, prompt engineers, and fragmented software tools.",

    stack: [
      "Frontend (Custom HTML/CSS/JS)",
      "AI Model APIs (Multi-LLM Ready)",
      "System Architecture Design",
      "Workflow Orchestration Concepts",
      "Enterprise Positioning & Branding",
    ],

    flow: [
      "AI Execution Monitoring",
      "Decision Intelligence Systems",
      "Workflow Orchestration",
      "Multi-Model LLM Routing",
      "Autonomous Task Pipelines",
    ],

    liveUrl: "https://synopsai.vercel.app",

    metrics: [
      { label: "Target Segment", value: "Startups & MSMEs" },
      { label: "Current Stage", value: "Architecture Defined & Blueprinting" },
      { label: "Core Capability", value: "LLM Orchestration & Autonomous Routing" },
      { label: "Service Model", value: "Consultation to SaaS" },
    ],
  },
];
