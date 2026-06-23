"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Brain, Wrench, HardDrive, Cpu, FileSql, ChartPieSlice, Code } from "@phosphor-icons/react";

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
}

const coreBadges = [
  { name: "SQL (BigQuery/DuckDB)", icon: FileSql },
  { name: "Python", icon: Code },
  { name: "Tableau", icon: ChartPieSlice },
  { name: "FastAPI", icon: HardDrive },
  { name: "React / Next.js", icon: Cpu },
  { name: "LightGBM / XGBoost", icon: Brain },
  { name: "Gemma / Gemini API", icon: Brain },
  { name: "Zustand / Recharts", icon: Database },
];

const categories: SkillCategory[] = [
  {
    id: "analytics",
    name: "Data Analytics",
    icon: Database,
    skills: [
      "SQL (Query optimization, Joins, Aggregations)",
      "Python (Pandas, NumPy, EDA Pipelines)",
      "Tableau Desktop & Server Dashboarding",
      "Streamlit KPI Dashboards Development",
      "Ingestion-Level Data Validation",
      "RFM Customer Segmentation Analysis",
      "Funnel & Conversion Leakage Audits",
      "Statistical Correlation Analysis (Pearson/Spearman)",
      "Advanced Microsoft Excel Data Modeling"
    ]
  },
  {
    id: "ml",
    name: "ML & Predictive Modeling",
    icon: Brain,
    skills: [
      "LightGBM & XGBoost Classifiers",
      "Time-Series Forecasting (Prophet, SARIMAX)",
      "Weighted Absolute Percentage Error (WAPE) Optimization",
      "Precision-Recall Threshold Calibration",
      "Supervised Machine Learning Workflows",
      "Imbalanced Class Data Resampling"
    ]
  },
  {
    id: "systems",
    name: "AI & Systems Engineering",
    icon: Cpu,
    skills: [
      "FastAPI Async Web Service Architecture",
      "DuckDB-First Memory-Optimized Ingestion",
      "SQLModel ORM & Database Schema Control",
      "SQLGlot Abstract Syntax Tree Query Parsing",
      "Zustand State Store Integration",
      "Recharts Custom Visual Chart Components",
      "JWT & RBAC Security Authentication Layers",
      "Redis Cache & Rate Limiting Integration",
      "Local LLM pipelines (faster-whisper, Piper, OpenWakeWord)",
      "Gemini & Groq Structured API Integration"
    ]
  },
  {
    id: "tooling",
    name: "Tooling & Infrastructure",
    icon: Wrench,
    skills: [
      "Git & GitHub Version Control Pipelines",
      "JIRA Project Planning & Agility",
      "Notion Engineering Knowledge Hubs",
      "Vercel Deployment Integrations",
      "LaTeX ATS-Optimized Document Formatting",
      "Antigravity Agentic IDE Workflows"
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("analytics");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="relative z-10 bg-background py-24 px-6 md:px-12 lg:px-24 border-t border-coffee-light/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs tracking-[0.2em] text-coffee-medium uppercase inline-block">
            04 / Competencies
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-coffee-dark font-bold leading-tight">
            Skills & Stack
          </h2>
        </div>

        {/* Badge-First High-Visibility Core Stack display */}
        <div className="space-y-6">
          <h3 className="font-cinzel text-lg text-coffee-dark font-semibold">
            Core Technology Stack
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {coreBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.name}
                  whileHover={mounted ? { scale: 1.03, y: -2 } : undefined}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="flex items-center gap-2 border border-coffee-light/15 bg-[#fffdd0]/35 backdrop-blur-md px-4.5 py-2.5 rounded-full font-mono text-xs text-coffee-dark select-none shadow-sm shadow-coffee-dark/5"
                >
                  <Icon className="w-4 h-4 text-coffee-medium" />
                  <span>{badge.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Categorized Tab Selector */}
        <div className="space-y-8 pt-6">
          <h3 className="font-cinzel text-lg text-coffee-dark font-semibold">
            Detailed Categories
          </h3>

          {/* Tabs header */}
          <div className="flex flex-wrap gap-2 border-b border-coffee-light/10 pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-t-xl font-mono text-xs uppercase tracking-wider transition-all border-t border-x cursor-pointer ${
                    isActive 
                      ? "bg-[#fffdd0]/40 border-coffee-light/15 text-coffee-dark font-bold border-b-2 border-b-[#fffdd0] -mb-[3px]" 
                      : "border-transparent bg-transparent text-coffee-light hover:text-coffee-dark"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Tabs Content Details */}
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-coffee-light/10 bg-[#fffdd0]/20 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={mounted ? { opacity: 0, y: 15 } : undefined}
                animate={mounted ? { opacity: 1, y: 0 } : undefined}
                exit={mounted ? { opacity: 0, y: -10 } : undefined}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {categories.find((cat) => cat.id === activeTab)?.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={mounted ? { opacity: 0, scale: 0.98 } : undefined}
                    animate={mounted ? { opacity: 1, scale: 1 } : undefined}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="p-4 rounded-xl border border-coffee-light/5 bg-[#fffdd0]/20 hover:bg-[#fffdd0]/40 hover:border-coffee-light/15 transition-all flex items-start gap-2.5 font-instrument text-base leading-relaxed text-coffee-medium hover:text-coffee-dark"
                  >
                    <span className="text-coffee-light text-xs font-mono select-none mt-1">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
