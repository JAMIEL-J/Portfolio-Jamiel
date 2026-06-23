"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubLogo, ArrowSquareOut, Checks, Warning, ArrowRight, Gauge, Cpu, Kanban } from "@phosphor-icons/react";

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  github?: string;
  live?: string;
  stack: string[];
  metrics?: string[];
  sections: {
    title: string;
    items: string[];
  }[];
  notes?: string[];
}

const projects: ProjectDetails[] = [
  {
    id: "vizzy",
    title: "Vizzy — Full-Stack Analytics",
    subtitle: "Production-hardened analytics platform built solo across 5 phases, with 331+ tests.",
    type: "Flagship System",
    github: "https://github.com/JAMIEL-J/Vizzy-Analytics",
    live: "https://vizzy-ai-dqgw.vercel.app",
    stack: ["React 19", "FastAPI", "DuckDB", "SQLModel", "SQLGlot", "Zustand", "Recharts", "Redis", "Pandas", "Groq API"],
    metrics: ["104ms p95 latency on 1M rows", "DuckDB 3.34x faster than Pandas", "47.7MB peak heap on 1M rows"],
    sections: [
      {
        title: "Phase 1 & 2: Pipeline & Security Hardening",
        items: [
          "Implemented robust JWT/RBAC credentials validation layers.",
          "Secured access via Redis-based rate limiting on all public query endpoints.",
          "Eliminated raw SQL injection surfaces using parameterized queries via custom safe_identifier layers."
        ]
      },
      {
        title: "Phase 3 & 4: Zero-Input UX & Analytical Features",
        items: [
          "Zero-input first render: Dashboards populate immediately when data is ingested with no manual chart configuration required.",
          "Automated correlations: Custom algorithm maps Pearson/Spearman coefficients to output human-readable 'Why' charts annotations.",
          "NL2SQL translator: Converts plain English prompts into syntactically valid database queries.",
          "SQL console: Sandbox providing full execution, EXPLAIN plans, and formatting query checkers."
        ]
      },
      {
        title: "Phase 5 & Architecture: DuckDB-First Ingestion",
        items: [
          "Replaced standard Pandas pipeline to solve heap out-of-memory overhead entirely.",
          "Reduced peak Python heap memory down to 47.7MB (down from 500MB+ under Pandas).",
          "Forced strict fail-fast validation: Ingestion returns HTTP 422 immediately if database schemas fail to parse."
        ]
      }
    ],
    notes: [
      "Concurrency bug in kpi_engine.py resolved by replacing module-level duckdb handles with safe dependency injection.",
      "A 6-page conference paper on Vizzy was submitted to IJRASET; full B.Tech project report produced in MIET format."
    ]
  },
  {
    id: "dna",
    title: "DNA — Local AI Assistant",
    subtitle: "A fully local voice assistant built to run on an Intel i3 laptop with 8GB RAM and no GPU.",
    type: "Flagship System",
    github: "https://github.com/JAMIEL-J/DNA-Desktop-Assistant-",
    stack: ["Python", "Gemma 4 (Gemini)", "openWakeWord", "faster-whisper", "Piper", "DuckDB", "Pandas"],
    metrics: ["Quantized INT8 execution", "Runs locally on 8GB RAM", "Direct API calls (No LangChain overhead)"],
    sections: [
      {
        title: "Local Speech Pipeline",
        items: [
          "Wake Word: Configured openWakeWord trained for 'hey_jarvis'.",
          "Speech-to-Text: Integrated faster-whisper (base model, int8 quantized) with voice activity detection (VAD).",
          "Text-to-Speech: Configured Piper (en_US-lessac-medium variant) for zero-latency speech synthesis."
        ]
      },
      {
        title: "Reasoning & State Management",
        items: [
          "Direct API execution to avoid framework latency constraints on low-end hardware.",
          "Constructed core state machine: SLEEPING → ACTIVE (with 10-minute auto-sleep timer) → PROCESSING.",
          "Custom wake-word triggers bypass audio buffer queues to avoid system lag."
        ]
      },
      {
        title: "Core Assistant Skills",
        items: [
          "screen_skill.py: Captures active screen snapshots and parses elements using vision models.",
          "window_monitor.py: Monitors active system windows for contextual awareness.",
          "organizer_skill.py: Organizes local file system across 13 categories with preview, confirm, and undo capabilities.",
          "job_search_skill.py: Aggregates listings from Indeed RSS & Internshala, exporting data directly to CSV."
        ]
      }
    ],
    notes: [
      "Uses DuckDB for NL2SQL on files exceeding 100K rows, sandboxed Pandas for smaller data files.",
      "A dedicated Notion hub tracks the assistant's build history and integration benchmarks."
    ]
  },
  {
    id: "churn",
    title: "Customer Churn Prediction",
    subtitle: "Business-aware retention optimization using threshold tuning and ROI analysis.",
    type: "Analysis & Model",
    github: "https://github.com/JAMIEL-J/Customer-Churn-Prediction",
    live: "https://customer-churn-predictionss.streamlit.app/",
    stack: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Matplotlib"],
    metrics: ["$106K+ Net ROI Generated", "0.20 Optimal Threshold Found"],
    sections: [
      {
        title: "ROI-Driven Retention Strategy",
        items: [
          "Optimized customer retention strategy as measured by generating a net ROI of $106,374 and recovering $140K+ in at-risk revenue, by training a Random Forest classifier and tuning decision thresholds based on custom business cost matrices.",
          "Built a business-aware churn prediction system as measured by evaluating 14 business hypotheses and 24 engineered features capturing pricing pressure, by shifting focus from pure ML accuracy to value-based segment targeting.",
          "Deployed an interactive decision-support tool as measured by enabling dynamic threshold optimization and feature explainability for stakeholders, by developing a comprehensive web dashboard using Streamlit."
        ]
      }
    ]
  },
  {
    id: "forecasting",
    title: "Demand Forecasting & Inventory",
    subtitle: "End-to-End Decision-Support System for Retail Supply Chains.",
    type: "Analysis & Model",
    github: "https://github.com/JAMIEL-J/Demand-Forecasting-Inventory",
    live: "https://demand-forecasting-and-inventory-optimization.streamlit.app/",
    stack: ["Python", "XGBoost", "Streamlit", "Plotly", "Pandas"],
    metrics: ["4.01% Best WAPE Error", "31.7% Baseline Improvement"],
    sections: [
      {
        title: "Robust Inventory Optimization",
        items: [
          "Optimized retail supply chain inventory policies as measured by a 31.7% accuracy improvement over baselines (4.01% WAPE), by modeling non-linear demand drivers using XGBoost Quantile Regression.",
          "Enhanced safety stock and reorder point efficiency as measured by achieving ~90% service-level coverage under non-normal demand distributions, by translating predicted forecast intervals into dynamic inventory formulas.",
          "Deployed an interactive operational decision dashboard as measured by enabling dynamic scenario stress-testing across 45 store locations, by building a real-time risk simulation interface using Streamlit and Plotly."
        ]
      }
    ]
  },
  {
    id: "leakage",
    title: "Revenue Leak Detection",
    subtitle: "End-to-End E-commerce Conversion Funnel Optimization.",
    type: "Data Case Study",
    github: "https://github.com/JAMIEL-J/Conversion-Funnel-Analysis",
    stack: ["Google BigQuery", "SQL", "Python", "Tableau"],
    metrics: ["$1.14M+ Leakage Identified", "73,961 Funnel Drop-offs Captured"],
    sections: [
      {
        title: "Conversion Funnel Analysis",
        items: [
          "Identified $1.14M+ in revenue leakage as measured by isolating 73,961 critical session drop-offs, by constructing an end-to-end e-commerce conversion funnel using BigQuery SQL.",
          "Pinpointed an $835K segment-specific revenue leak as measured by desktop conversion variance, by conducting exploratory data analysis on 132,403 user sessions using Python and Tableau.",
          "Formulated targeted funnel optimization strategies as measured by capturing a 65% high-ROI leakage point, by developing actionable UI/UX recommendations for the Product View to Add to Cart stage."
        ]
      }
    ]
  },
  {
    id: "segmentation",
    title: "Customer Segmentation & Revenue Analysis",
    subtitle: "Strategic RFM Segmentation to identify revenue concentration and retention risk.",
    type: "Data Case Study",
    stack: ["MySQL", "Python", "Power BI", "Pandas"],
    metrics: ["High-Value Segment Drives ~80% Revenue", "End-to-End Analytics Pipeline"],
    sections: [
      {
        title: "Lifecycle-Based Retention Strategy",
        items: [
          "Categorized customer revenue concentration and churn risk as measured by identifying that ~80% of total revenue is driven by a highly concentrated segment, by engineering Recency, Frequency, and Monetary (RFM) metrics from raw transactional data using MySQL.",
          "Designed segment-specific retention strategies as measured by isolating high-value, at-risk customers representing the largest revenue threat, by validating RFM cohorts and analyzing revenue distribution using Python (pandas).",
          "Enabled data-driven marketing decision-making as measured by delivering clear visibility into long-tail revenue distribution, by building an interactive executive dashboard in Power BI."
        ]
      }
    ]
  },
  {
    id: "support-sla",
    title: "Customer Support SLA & Satisfaction Analysis",
    subtitle: "Interactive Excel dashboard identifying SLA breaches and satisfaction drivers.",
    type: "Interactive Dashboard",
    github: "https://github.com/JAMIEL-J/Customer-Support-SLA-Satisfaction-Analysis-Using-Excel",
    stack: ["Microsoft Excel", "Pivot Tables", "Data Validation", "XLOOKUP"],
    metrics: ["47.29% SLA Breach Identified", "88.43% Urgent Risk Found"],
    sections: [
      {
        title: "Support Operations Optimization",
        items: [
          "Identified critical customer support operational bottlenecks as measured by detecting a 47.29% resolution SLA breach and 55% first response delay, by building an interactive Pivot Chart dashboard and mapping SLA threshold rules in Excel.",
          "Flagged severe high-risk ticket priority failures as measured by uncovering an 88.43% SLA breach rate for urgent issues, by conducting calculated field analysis on response and resolution times using Excel logic functions.",
          "Correlated first-time resolution quality directly to customer satisfaction as measured by determining that 86.02% of reopened tickets resulted in low satisfaction scores, by structuring a multi-dimensional pivot analysis of 2,800 historical ticket records."
        ]
      }
    ]
  },
  {
    id: "sales-optimization",
    title: "Sales Performance & Territory Optimization",
    subtitle: "E-commerce sales analysis identifying revenue concentration and scalability.",
    type: "Data Case Study",
    github: "https://github.com/JAMIEL-J/Retail-Analytics",
    stack: ["MySQL", "Python", "Tableau", "Pandas"],
    metrics: ["₹13.59M Revenue Analyzed", "98K+ Orders Tracked"],
    sections: [
      {
        title: "Territory & Performance Optimization",
        items: [
          "Quantified high-risk geographical revenue concentration as measured by discovering that ~63% of total revenue is dependent on just three states, by building a unified sales fact table using MySQL ETL pipelines.",
          "Identified severe supply-side execution vulnerabilities as measured by uncovering that 64% of total platform revenue relies on sellers in a single state, by conducting analytical reasoning and performance distribution validation in Python.",
          "Formulated scalable expansion strategies targeting mid-tier regional markets as measured by delivering an executive summary highlighting high ROI potential outside saturated zones, by developing an interactive demand vs. supply territory dashboard in Tableau."
        ]
      }
    ]
  }
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectDetails>(projects[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="projects" className="relative z-10 bg-background py-24 px-6 md:px-12 lg:px-24 border-t border-coffee-light/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="font-mono text-xs tracking-[0.2em] text-coffee-medium uppercase inline-block">
              03 / Selected Works
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl text-coffee-dark font-bold leading-tight">
              Interactive Projects
            </h2>
          </div>
          <p className="font-instrument text-lg md:text-xl text-coffee-medium max-w-[35ch] md:text-right">
            Click any card in the Bento Grid below to load its full technical specifications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {projects.map((project) => {
            const isFlagship = project.type === "Flagship System";
            const isActive = activeProject.id === project.id;
            
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProject(project)}
                className={`text-left rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 border relative group overflow-hidden cursor-pointer ${
                  isFlagship 
                    ? "md:col-span-3 min-h-[280px]" 
                    : "md:col-span-2 min-h-[220px]"
                } ${
                  isActive 
                    ? "bg-coffee-dark border-coffee-dark text-[#fffdd0] shadow-lg shadow-coffee-dark/20 scale-[0.99]" 
                    : "bg-[#fffdd0]/25 border-coffee-light/10 hover:border-coffee-dark/20 text-coffee-dark glass-panel"
                }`}
              >
                {/* Visual subtle card pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 ${
                  isActive ? "bg-coffee-light/10" : "bg-coffee-medium/5 group-hover:opacity-100 opacity-0"
                }`} />

                {/* Top Info */}
                <div className="space-y-3 z-10">
                  <div className="flex justify-between items-start">
                    <span className={`font-mono text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full ${
                      isActive ? "bg-[#fffdd0]/20 text-[#fffdd0]" : "bg-coffee-dark/5 text-coffee-medium"
                    }`}>
                      {project.type}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-coffee-light animate-ping" />
                    )}
                  </div>
                  <h3 className="font-cinzel text-xl md:text-2xl font-bold leading-tight">
                    {project.title.split(" — ")[0]}
                  </h3>
                  <p className={`font-instrument text-base leading-relaxed ${
                    isActive ? "text-[#fffdd0]/80" : "text-coffee-medium"
                  }`}>
                    {project.subtitle}
                  </p>
                </div>

                {/* Bottom Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 z-10">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md ${
                        isActive ? "bg-[#fffdd0]/10 text-[#fffdd0]/90" : "bg-coffee-dark/5 text-coffee-medium/80 border border-coffee-light/5"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isActive ? "text-[#fffdd0]/60" : "text-coffee-light"
                    }`}>
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Project Details (Framer Motion Height / Opacity Transition) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={mounted ? { opacity: 0, y: 30 } : undefined}
            animate={mounted ? { opacity: 1, y: 0 } : undefined}
            exit={mounted ? { opacity: 0, y: -20 } : undefined}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full rounded-3xl border border-coffee-light/10 bg-[#fffdd0]/35 backdrop-blur-md p-6 md:p-10 shadow-md shadow-coffee-dark/5"
          >
            <div className="space-y-8">
              {/* Case Study Header */}
              <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-6 pb-6 border-b border-coffee-light/10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-coffee-medium font-bold px-2.5 py-1 bg-coffee-dark/5 rounded-full">
                      Case Study
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl text-coffee-dark font-extrabold">
                      {activeProject.title}
                    </h3>
                  </div>
                  <p className="font-instrument text-lg md:text-xl text-coffee-medium max-w-[65ch]">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* External Links */}
                <div className="flex flex-wrap gap-3">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-coffee-dark/20 hover:border-coffee-dark text-coffee-dark font-mono text-xs uppercase tracking-wider px-4.5 py-2.5 rounded-full transition-all bg-[#fffdd0]/50"
                    >
                      <GithubLogo className="w-4 h-4" />
                      Repository
                    </a>
                  )}
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-coffee-dark hover:bg-coffee-medium text-[#fffdd0] font-mono text-xs uppercase tracking-wider px-4.5 py-2.5 rounded-full transition-all shadow-md shadow-coffee-dark/5"
                    >
                      Live App
                      <ArrowSquareOut className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Grid content split: Metrics & Tech Stack | Phase Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Left Side Details Panel: Metrics and Tech Stack */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Benchmarks & Metrics */}
                  {activeProject.metrics && (
                    <div className="glass-panel p-6 rounded-2xl border border-coffee-light/10 bg-[#fffdd0]/20 space-y-4">
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-coffee-dark font-bold flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-coffee-medium" />
                        Performance & Impact
                      </h4>
                      <ul className="space-y-3">
                        {activeProject.metrics.map((metric, i) => (
                          <li key={i} className="font-instrument text-lg text-coffee-dark font-semibold border-b border-coffee-light/5 pb-2 last:border-0 last:pb-0">
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Complete Stack list */}
                  <div className="glass-panel p-6 rounded-2xl border border-coffee-light/10 bg-[#fffdd0]/20 space-y-4">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-coffee-dark font-bold flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-coffee-medium" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase tracking-wider bg-coffee-dark/5 text-coffee-medium px-2.5 py-1 rounded-md border border-coffee-light/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side Details Panel: Technical Explanations */}
                <div className="lg:col-span-8 space-y-8">
                  {activeProject.sections.map((sect, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="font-cinzel text-lg text-coffee-dark font-bold">
                        {sect.title}
                      </h4>
                      <ul className="space-y-3">
                        {sect.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-3">
                            <div className="w-5 h-5 rounded-full bg-coffee-dark/5 flex items-center justify-center text-coffee-dark shrink-0 mt-0.5">
                              <Checks className="w-3 h-3" />
                            </div>
                            <p className="font-instrument text-lg text-coffee-medium/95 leading-relaxed">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Supporting notes/issues */}
                  {activeProject.notes && (
                    <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10 space-y-3">
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-amber-800 font-bold flex items-center gap-2">
                        <Warning className="w-4 h-4 text-amber-700" />
                        Observations & Debug Details
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.notes.map((note, i) => (
                          <li key={i} className="font-instrument text-base text-coffee-medium/90 italic flex gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span>{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
