"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CalendarBlank, MapPin, Checks } from "@phosphor-icons/react";

export default function Experience() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="experience" className="relative z-10 bg-background py-24 px-6 md:px-12 lg:px-24 border-t border-coffee-light/10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs tracking-[0.2em] text-coffee-medium uppercase inline-block">
            02 / Work History
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-coffee-dark font-bold leading-tight">
            Internship Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-coffee-light/20 pl-8 ml-4 space-y-12">
          {/* Timeline Dot Indicator */}
          <div className="absolute top-0 left-[-9px] w-[17px] h-[17px] rounded-full bg-coffee-dark border-4 border-[#fffdd0] shadow-sm shadow-coffee-dark/20 animate-pulse" />

          <motion.div
            initial={mounted ? { opacity: 0, x: -20 } : undefined}
            whileInView={mounted ? { opacity: 1, x: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Header info */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-coffee-dark text-[#fffdd0] font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-bold">
                  Internship
                </span>
                <h3 className="font-cinzel text-2xl text-coffee-dark font-semibold">
                  Data Analyst Trainee
                </h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-coffee-medium">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  BY8LABS AI Private Limited · Full-time
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-coffee-light/30" />
                <span className="flex items-center gap-1">
                  <CalendarBlank className="w-4 h-4" />
                  Jul 2025 – Aug 2025
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-coffee-light/30" />
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Pudukkottai, TN · On-site
                </span>
              </div>
            </div>

            {/* Role Deliverables */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-coffee-light/10 bg-[#fffdd0]/20 max-w-4xl space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-wider text-coffee-dark font-bold">
                Core Initiatives & Deliverables:
              </h4>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-coffee-dark/5 flex items-center justify-center text-coffee-dark shrink-0 mt-0.5">
                    <Checks className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-instrument text-lg text-coffee-medium/95 leading-relaxed">
                      <strong>Python EDA and Validation:</strong> Gained working proficiency in Python, including Pandas and NumPy, through structured data science training focused on exploratory data analysis workflows and data validation techniques.
                    </p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-coffee-dark/5 flex items-center justify-center text-coffee-dark shrink-0 mt-0.5">
                    <Checks className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-instrument text-lg text-coffee-medium/95 leading-relaxed">
                      <strong>Streamlit Dashboards:</strong> Built foundational Streamlit dashboards to visualise KPI metrics, developing practical understanding of end-to-end data-to-dashboard delivery pipelines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
