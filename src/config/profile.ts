/**
 * ─── CENTRAL PROFILE CONFIGURATION ───
 * Original by Sarthak Handa — https://github.com/sarthak-handa
 *
 * This is the SINGLE SOURCE OF TRUTH for all personal data displayed
 * across the portfolio. To update any information, edit this file only.
 *
 * Sections:
 * A. Identity & Bio
 * B. Links
 * C. Contact
 * D. Experience / Career Timeline
 * E. Hero Section Config (morph words, tech pills, status card)
 * F. Capabilities / Skills Grid
 * G. Resume Credential Metrics
 * H. Live Status Strip (Activity & Network section)
 * I. AI-Readable Skills (sr-only block)
 * J. Terminal Commands (stack, status)
 * K. Meta Tags
 */

// ─── A. Identity & Bio ───────────────────────────────────────────────────────

export const profile = {
  name: "Sarthak Handa",
  title: "Business Intelligence & Automation Consultant",
  photo: "/passport.png",
  altPhoto: "/alt-photo.png", // magnifying glass hover alternate
  location: "Faridabad, Haryana, India",
  tagline: "Enterprise Analytics · Automation · Scalable Reporting Systems",
  bio: "Business Intelligence & Systems Consultant with 3+ years of experience designing enterprise analytics platforms, automation frameworks, and scalable reporting ecosystems. I convert complex operational requirements into audit-safe Power BI models, API-integrated workflows, and real-time dashboards used by 25+ stakeholders.",
  resumeBio:
    "AWS Certified Cloud Practitioner (Valid till Jun 2026). Business Intelligence & Systems Consultant with strong expertise in Power BI (DAX, Star Schema, Incremental Models), advanced Excel modeling, API integrations, and workflow automation. Proven track record of building enterprise-grade analytics ecosystems, replacing third-party BI tools with custom dashboards, and enabling cross-functional reporting governance across operations teams.",
  status: "Available for Enterprise BI & Automation Leadership Roles",
  version: "1.0",

  // ─── B. Links ────────────────────────────────────────────────────────────────

  links: {
    github: "https://github.com/sarthak-handa",
    linkedin: "https://www.linkedin.com/in/sarthak-handa/",
    email: "sarthakh23@gmail.com",
    resume: "https://drive.google.com/file/d/1uogIZBQ5X95XtPmKdqfZj6yD_sJNGhCH/view?usp=sharing", // TODO: Replace with hosted resume PDF URL or drop file in /public/
    resumeOnline: "https://drive.google.com/file/d/1uogIZBQ5X95XtPmKdqfZj6yD_sJNGhCH/view?usp=sharing", // TODO: Replace with online resume URL (read.cv, etc.)
  },

  // ─── C. Contact ──────────────────────────────────────────────────────────────

  contact: {
    email: "sarthakh23@gmail.com",
    formAction: "https://script.google.com/macros/s/AKfycby7mCzrzccOqjbjgn0WEeAHiHauG8OPWCBWumlgW9Z_RMlOxT4RoEg80ue4fB8Y7i_F/exec", // TODO: Replace with your deployed Apps Script URL
  },

  // ─── D. Experience / Career Timeline ─────────────────────────────────────────

  experience: [
    {
      version: "5.0",
      title: "Business Intelligence & Automation Analyst",
      period: "October 2025 – Present",
      subtitle: "YOGIJI DIGI LTD, Faridabad",
      description:
        "Architected enterprise Power BI models integrating forecast and actual manufacturing data using star schema and incremental append logic. Replaced third-party BI tools with custom React-based dashboards enabling real-time mobile reporting. Integrated Excel planning systems with Microsoft Graph API ensuring live sync and audit-safe reporting. Designed automation workflows using Meta Cloud API & Twilio triggering dynamic WhatsApp and email notifications. Led stakeholder onboarding and internal workflow documentation.",
    },
    {
      version: "4.0",
      title: "Project Developer",
      period: "2023 – 2025",
      subtitle: "Genpact India Pvt Ltd",
      description:
        "Built analytics-driven reporting frameworks improving reporting accuracy and turnaround time. Standardized MIS dashboards reducing manual reconciliation effort by ~40%. Mentored 6 team members on SAP reporting structures and workflow routing processes.",
    },
    {
      version: "3.0",
      title: "Software Engineer",
      period: "2022 – 2022",
      subtitle: "DXC Technology",
      description:
        "Supported enterprise COBOL-based mainframe applications for global clients. Assisted in incident management, job scheduling workflows, and structured system monitoring within production environments.",
    },
    {
      version: "2.0",
      title: "Cyber Security Intern",
      period: "2021 – 2021",
      subtitle: "TISPL Pvt Ltd",
      description:
        "Conducted vulnerability assessments and penetration testing for client applications. Assisted in developing security protocols and incident response strategies.",
    },
    {
      version: "1.0",
      title: "Computer Science Engineer",
      period: "2018 – 2022",
      subtitle: "Amity School Of Engineering & Technology, Noida",
      description:
        "Bachelor of Technology in Computer Science Engineering with a focus on software development, data structures, algorithms, and database management. Completed projects on web development, data analysis, and machine learning.",
    },
  ],

  // ─── E. Hero Section Config ──────────────────────────────────────────────────

  hero: {
    /** Label shown at the top of the identity card */
    controlPanelLabel: "Enterprise Systems Active",
    /** Small live indicator text below CTAs */
    currentBuild:
      "Building enterprise BI & automation ecosystems for manufacturing operations",
    /** Words that auto-cycle in "I BUILD {X} THAT SCALE." */
    morphWords: [
      "ANALYTICS SYSTEMS",
      "POWER BI MODELS",
      "AUTOMATION WORKFLOWS",
      "DASHBOARDS",
      "REPORTING ECOSYSTEMS",
      "ENTERPRISE PLATFORMS",
    ],
    /** Tech badges shown in the tech pills card */
    techPills: [
      "Power BI",
      "DAX",
      "Advanced Excel",
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Microsoft Graph API",
      "Twilio API",
      "HTML",
      "CSS",
      "Star Schema Modeling",
      "Forecast Modeling",
      "Workflow Automation",
    ],
  },

  // ─── E.2 Status Card (hero bento) ───────────────────────────────────────────

  statusCard: {
    cloudProviders: "AWS Certified CCP",
    /** Set to null to hide the compliance row. Example: "SOC2 · ISO 27001" */
    compliance: null as string | null,
    uptime: "Enterprise Grade",
    experienceYears: "3+ yrs",
    responseTime: "< 24h",
    stackLabel: "BI + Automation Architecture",
  },

  // ─── F. Capabilities / Skills Grid ───────────────────────────────────────────

  capabilities: [
    {
      module: "Enterprise BI Architecture",
      status: "ACTIVE" as const,
      description:
        "Designing audit-safe Power BI data models using star schema, incremental append logic, KPI frameworks, and structured governance for manufacturing and operations teams.",
      tools: [
        "Power BI",
        "DAX",
        "Star Schema",
        "Incremental Models",
        "KPI Frameworks",
        "Forecast Modeling",
        "Data Modeling",
      ],
      details: [
        "Enterprise-grade semantic models",
        "Incremental data loading logic",
        "Forecast vs Actual structured modeling",
        "Executive KPI dashboards",
      ],
    },
    {
      module: "Automation & API Integration",
      status: "ACTIVE" as const,
      description:
        "Building API-integrated workflows connecting Excel planning sheets, dashboards, and communication systems with real-time sync and rule-based automation.",
      tools: [
        "REST APIs",
        "Microsoft Graph API",
        "Twilio API",
        "Meta Cloud API",
        "Workflow Automation",
        "Node.js",
      ],
      details: [
        "Live Excel sync via Graph API",
        "Rule-based notification engine",
        "WhatsApp & email automation",
        "Configurable communication workflows",
      ],
    },
    {
      module: "Custom Dashboard Engineering",
      status: "ACTIVE" as const,
      description:
        "Replacing third-party BI tools with scalable React-based web dashboards enabling real-time reporting and mobile accessibility.",
      tools: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "MongoDB",
      ],
      details: [
        "Real-time web dashboards",
        "Mobile-optimized reporting UI",
        "Custom visualization components",
        "Secure data routing",
      ],
    },
    {
      module: "Operations & Governance",
      status: "ACTIVE" as const,
      description:
        "Driving structured reporting governance, stakeholder onboarding, process optimization, and system documentation for cross-functional teams.",
      tools: [
        "Reporting Governance",
        "Stakeholder Enablement",
        "Process Optimization",
        "Documentation",
      ],
      details: [
        "Reduced manual reconciliation by 40%",
        "Enabled adoption across 25+ stakeholders",
        "Structured workflow documentation",
      ],
    },
    {
      module: "AI-Assisted Analytics & Automation",
      status: "ACTIVE" as const,
      description:
        "Designing AI-assisted analytics workflows integrated into business reporting ecosystems. Leveraging intelligent rule engines, automation triggers, and structured data modeling to enhance forecasting, KPI monitoring, and stakeholder communication systems.",
      tools: [
        "Power BI",
        "Advanced Excel",
        "Rule-Based Logic Systems",
        "Automation Workflows",
        "REST APIs",
        "Microsoft Graph API",
        "Twilio API",
        "Prompt Structuring",
      ],
      details: [
        "Forecast vs Actual structured KPI logic",
        "Rule-based automation for notifications",
        "Dynamic data sync between Excel and dashboards",
        "AI-assisted insight layering over structured datasets",
        "Workflow-triggered WhatsApp & email alerts",
      ],
    },
    {
      module: "Custom Workflow & Communication Automation",
      status: "ACTIVE" as const,
      description:
        "Designing scalable communication automation systems replacing manual coordination workflows. Built React-based WhatsApp trigger panels integrated with Twilio APIs for real-time task orchestration and operational monitoring.",
      tools: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "MongoDB",
        "REST APIs",
        "Twilio API",
        "Responsive Design",
      ],
      details: [
        "Replaced manual coordination with rule-based WhatsApp triggers",
        "Centralized trigger management panel for operational visibility",
        "Secure API-based data routing architecture",
        "Real-time event-driven communication workflows",
        "Integrated planning systems with automated notification sync",
      ],
    },
  ],

  // ─── G. Resume Credential Metrics ────────────────────────────────────────────

  resumeMetrics: [
    { label: "Experience", value: "3+ Years" },
    { label: "Primary Focus", value: "Enterprise BI & Automation" },
    { label: "Stakeholders Enabled", value: "25+" },
  ],

  // ─── H. Live Status Strip ────────────────────────────────────────────────────

  liveStatus: [
    {
      label: "BI SYSTEMS",
      value: "Active",
      color: "text-terminal-green",
      border: "border-terminal-green/20",
      bg: "bg-terminal-green/5",
    },
    {
      label: "AUTOMATION",
      value: "Operational",
      color: "text-cyan-400",
      border: "border-cyan-400/20",
      bg: "bg-cyan-400/5",
    },
    {
      label: "DASHBOARDS",
      value: "Real-Time",
      color: "text-amber-400",
      border: "border-amber-400/20",
      bg: "bg-amber-400/5",
    },
    {
      label: "CURRENT BUILD",
      value: "Enterprise Reporting Platform",
      color: "text-primary",
      border: "border-primary/20",
      bg: "bg-primary/5",
    },
    {
      label: "AWS CERTIFIED",
      value: "Valid till 2026",
      color: "text-violet-400",
      border: "border-violet-400/20",
      bg: "bg-violet-400/5",
    },
  ],

  // ─── I. AI-Readable Skills (sr-only) ────────────────────────────────────────

  skills: {
    analytics:
      "Power BI, DAX, Star Schema Modeling, Incremental Models, KPI Frameworks, Forecast Modeling",
    automation:
      "REST APIs, Microsoft Graph API, Twilio API, Workflow Automation",
    frontend:
      "React, JavaScript, HTML, CSS",
    backend:
      "Node.js, MongoDB",
    cloud:
      "AWS Certified Cloud Practitioner",
    operations:
      "Reporting Governance, Process Optimization, Stakeholder Enablement",
  },

  // ─── J. Terminal Command Data ────────────────────────────────────────────────

  terminalStack: {
    Analytics: "Power BI, DAX, Star Schema, Forecast Modeling",
    Automation: "REST APIs, Graph API, Twilio API, Workflow Logic",
    Frontend: "React, JavaScript, HTML, CSS",
    Backend: "Node.js, MongoDB",
    Cloud: "AWS (Certified CCP)",
    Operations: "Reporting Governance, Process Optimization",
  },

  systemJson: {
    runtime: "Active",
    primary_function: "Business Intelligence & Automation",
    cloud_integration: "AWS Certified",
    automation_level: "High",
    status: "Open to BI & Systems Consulting Roles",
    location: "Faridabad, Haryana, India",
    uptime: "Enterprise Grade",
  },

  // ─── K. Meta Tags ───────────────────────────────────────────────────────────

  meta: {
    pageTitle: "Sarthak Handa | Business Intelligence & Automation Architect",
    description:
      "AWS Certified Business Intelligence & Automation Consultant building enterprise analytics systems, structured reporting ecosystems, and scalable operational workflows.",
  },
} as const;
