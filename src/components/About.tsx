"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, ChartBar, Cpu, ShieldCheck } from "@phosphor-icons/react";

const stats = [
  {
    value: "$1.14M",
    label: "Revenue Leakage Identified",
    description: "Found in conversion funnel using SQL & Tableau on Google's public GA4 e-commerce BigQuery dataset.",
  },
  {
    value: "$106K",
    label: "Churn Retention ROI",
    description: "Built a business-aware churn prediction system evaluating 14 hypotheses and 24 engineered features for value-based segment targeting.",
  },
  {
    value: "31.7%",
    label: "Forecasting Improvement",
    description: "Beaten baseline accuracy using an ensemble of XGBoost, Prophet, and SARIMAX (4.01% WAPE).",
  },
  {
    value: "104ms",
    label: "p95 Latency on 1M Rows",
    description: "Achieved blazing fast data retrieval in the Vizzy platform using DuckDB, operating 3.34x faster than Pandas.",
  },
];

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative z-10 bg-background py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-coffee-light/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Block */}
        <div className="space-y-4">
          <span className="font-mono text-xs tracking-[0.2em] text-coffee-medium uppercase inline-block">
            01 / Professional Identity
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-coffee-dark font-bold leading-tight">
            About Me
          </h2>
        </div>

        {/* Biography Content split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6 font-instrument text-lg md:text-xl text-coffee-medium/90 leading-relaxed">
            <p>
              I'm <strong className="text-coffee-dark">Jamiel J</strong> (full name Jamiel Jahirhussain), a B.Tech Information Technology graduate from M.I.E.T Engineering College, Tiruchirappalli. Currently based in Pudukkottai and Tiruchirappalli, Tamil Nadu, India.
            </p>
            <p>
              I operate as a practitioner rather than a student. During my Data Analyst internship at <strong className="text-coffee-dark">BY8LABS AI</strong> (July–August 2025), I developed KPI dashboards, exploratory data analysis pipelines, and ingestion-level validation workflows.
            </p>
            <p>
              I maintain a strict self-imposed quality assurance process, holding informal <strong className="text-coffee-dark">"council" reviews</strong> with multiple persona audits for each phase of building before considering any work complete. I try to break my code before shipping it.
            </p>
          </div>

          {/* Core Tracks Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl space-y-6 border border-coffee-light/10 bg-[#fffdd0]/20">
              <h3 className="font-cinzel text-xl text-coffee-dark font-semibold">
                Dual-Track Trajectory
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coffee-dark/5 flex items-center justify-center text-coffee-dark shrink-0">
                    <ChartBar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-coffee-dark font-bold">
                      Data Analytics Track
                    </h4>
                    <p className="font-instrument text-base text-coffee-medium/90 mt-1">
                      SQL queries, Tableau dashboarding, exploratory analysis, forecasting, and cohort RFM segmentation. Currently job-hunting in this zone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-coffee-dark/5 flex items-center justify-center text-coffee-dark shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-coffee-dark font-bold">
                      AI & Systems Track
                    </h4>
                    <p className="font-instrument text-base text-coffee-medium/90 mt-1">
                      Production engineering, async APIs, local speech pipelines, model building, and multi-agent frameworks. My long-term roadmap.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Subcard */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-coffee-light/10 bg-[#fffdd0]/10 font-instrument">
              <GraduationCap className="w-8 h-8 text-coffee-medium shrink-0" />
              <div>
                <h4 className="text-sm font-mono text-coffee-light uppercase tracking-wider">Education</h4>
                <p className="text-coffee-dark font-semibold">B.Tech in Information Technology</p>
                <p className="text-sm text-coffee-medium">M.I.E.T Engineering College, Tiruchirappalli (Graduating June 2026)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantified Impact / Stats Grid */}
        <div className="space-y-8 pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-coffee-medium" />
            <h3 className="font-cinzel text-lg text-coffee-dark font-semibold">
              Delivered and Audited Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={mounted ? { opacity: 0, y: 20 } : undefined}
                whileInView={mounted ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel p-6 rounded-2xl border border-coffee-light/10 bg-[#fffdd0]/20 flex flex-col justify-between"
              >
                <div>
                  <span className="font-cinzel text-3xl md:text-4xl text-coffee-dark font-bold block mb-2">
                    {stat.value}
                  </span>
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-coffee-medium font-bold mb-3">
                    {stat.label}
                  </h4>
                </div>
                <p className="font-instrument text-base text-coffee-medium/85 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
