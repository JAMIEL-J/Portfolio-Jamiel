# JAMIEL J — PORTFOLIO SITE MAP & FULL CONTENT

---

## 1. HOME / HERO

**Headline:** Jamiel J — Data Analyst & AI Systems Builder

**Subheadline:** SQL, dashboards, and forecasting that find money other people miss — plus full-stack analytics platforms and AI systems built and shipped, not just studied.

**Intro line:**
I work across the data stack — from SQL pipelines and dashboards to predictive models and production analytics platforms. Currently targeting Data Analyst / ML Analyst / Data Scientist roles, with Vizzy and DNA as proof I can build the systems that produce the insights, not just read them off a dashboard someone else made.

**CTA:** View Projects | Download Resume | Contact

---

## 2. ABOUT ME

I'm Jamiel J (full name Jahir Jamiel), a B.Tech Information Technology graduate from M.I.E.T Engineering College, Tiruchirappalli, graduating June 2026. I'm based in Pudukkottai/Tiruchirappalli, Tamil Nadu, India.

I work as a practitioner, not a student. I did a Data Analyst internship at BY8LABS AI (Jul–Aug 2025) building Streamlit KPI dashboards, EDA pipelines, and data validation workflows. Outside of that, I've built two flagship systems from scratch: **Vizzy**, a full-stack analytics platform that went through five hardening phases and 331+ tests, and **DNA**, a fully local voice assistant built to run on a laptop with no GPU.

My technical identity spans two tracks: **data analytics** (SQL, Tableau, EDA, dashboarding, forecasting, segmentation) and **AI/ML engineering** (model building, system architecture, production hardening). The analytics track is where I'm job-hunting right now — Data Analyst, ML Analyst, Data Scientist roles. The AI engineering track (AI Engineer / Agent Architect) is my genuine long-term trajectory, roughly 12–18 months out.

I run my own QA process on my projects — informal "council" reviews with multiple personas auditing each phase of work before I call it done. I don't ship things I haven't tried to break first.

**What I've actually delivered:**
- Found $1.14M in revenue leakage in a real e-commerce funnel using SQL + Tableau
- Built a fraud detection model with 99.76% recall and 0.9993 ROC-AUC
- Built a demand forecasting pipeline beating baseline by 31.7%
- Built and hardened a production analytics platform (Vizzy) across security, performance, and UX
- Built a fully local AI voice assistant (DNA) constrained to run on 8GB RAM with no GPU

---

## 3. EXPERIENCE

**Data Analyst Intern — BY8LABS AI** (Jul–Aug 2025)
- Built KPI dashboards in Streamlit for stakeholder-facing reporting
- Designed EDA pipelines to surface data quality issues before they hit downstream models
- Built data validation workflows to catch bad data at ingestion, not after it's already broken something

---

## 4. PROJECTS

### Vizzy — Full-Stack Analytics Platform
*GitHub: github.com/JAMIEL-J/Vizzy-Analytics · Live demo: vizzy-ai-dqgw.vercel.app*

A production-hardened analytics platform built solo across 5 phases, with 331+ tests.

**Phase 1 — Security hardening:**
- JWT/RBAC authentication
- Redis-based rate limiting
- Path traversal protection
- Parameterized queries via a `safe_identifier` layer (no raw SQL injection surface)

**Phase 2 — Pipeline integrity:**
- `query_utils` parameterization across the data layer
- Eliminated unsafe string-built queries

**Phase 3 — Product UX:**
- Zero-input first render — the dashboard populates the moment data lands, no manual chart configuration required
- Automated "Why" annotations on charts using Pearson/Spearman correlation analysis to explain *why* a pattern exists, not just that it does
- NL2SQL endpoint — plain-English questions translated into SQL

**Phase 4 — Analyst capabilities:**
- SQL execute/explain/validate endpoints for power users
- Multi-file upload with a join builder
- CSV/TSV export

**Phase 5 — Maintainability:**
- `chart_recommender.py` split from a monolith into 14 modules
- `UserDashboard.tsx` split into 9 modules

**Major architectural rework — DuckDB-First Upload Pipeline:**
- Eliminated the pandas out-of-memory bottleneck entirely
- 47.7MB peak Python heap on a 1M-row CSV — down from 500MB+ under the old pandas-based pipeline
- Hard-fails with HTTP 422 if the DuckDB build fails — no silent pandas fallback masking bad data

**Performance benchmarks:**
- 104ms p95 query latency on 1M rows
- DuckDB runs 3.34x faster than pandas at 1M-row scale
- Routing crossover point (where DuckDB clearly wins over pandas) sits around 100K rows

**Bug it shipped with and fixed:**
- A P0 concurrency bug in `kpi_engine.py` — a module-level `set_duckdb_reader()` call that was unsafe under async concurrent load. Fixed via dependency injection.

**Known open issues (being upfront, not hiding them):**
- Non-deterministic behavior in `ANY_VALUE(TYPEOF())` inside `metadata_profiler.py`
- Chart recommendation cardinality still relies on a 200-row sample, not the full dataset
- `pandas_pipeline.py` sanitization not yet fully verified

**Stack:** React 19, Vite, Tailwind, Recharts, Zustand (frontend) / FastAPI, DuckDB, SQLModel, SQLGlot, pandas, Groq API (backend)

**Other:** A 6-page conference paper on Vizzy was submitted to IJRASET (team project, 4 co-authors), and a full B.Tech project report was produced in MIET format.

---

### DNA — Local AI Voice Assistant
*GitHub: github.com/JAMIEL-J/DNA-Voice-Assistant*

A fully local-first voice assistant, built under a hard hardware constraint: Intel i3-1134G4, 8GB RAM, no GPU. Every architectural decision was shaped by that ceiling. All build phases complete as of April 2026.

**Voice pipeline:**
- Wake word detection: OpenWakeWord (`hey_jarvis`)
- Speech-to-text: faster-whisper, base model, int8 quantized, with VAD filtering
- Text-to-speech: Piper (`en_US-lessac-medium`)

**Reasoning layer:**
- Gemma 4 31B via Gemini API, handling both text and vision input
- No LangChain — direct API calls, because the framework overhead wasn't justified on this hardware

**Session state machine:**
- SLEEPING → ACTIVE (10-minute auto-sleep) → PROCESSING
- Dismiss phrases trigger an immediate return to sleep

**Skills built:**
- `screen_skill.py` — screen understanding via the Gemma 4 vision model
- `window_monitor.py` — proactive context awareness based on active windows
- `organizer_skill.py` — file organization with preview, confirm, and undo across 13 categories
- `job_search_skill.py` — pulls listings from Indeed RSS and Internshala, exports to CSV

**Data handling:**
- DuckDB for NL2SQL on datasets over 100K rows
- Sandboxed pandas execution (NL2Py) for smaller files

**Knowledge base:** A dedicated Notion hub tracks the project's documentation and roadmap.

---

### Fraud Detection Model
- LightGBM classifier
- **99.76% recall**, **ROC-AUC 0.9993**
- Built to catch fraud cases while keeping false positives low enough that analysts can actually act on every flag

### Demand Forecasting Pipeline
- Ensemble of XGBoost, Prophet, and SARIMAX
- **4.01% WAPE**, beating baseline forecasting accuracy by **31.7%**

### Revenue & Funnel Analysis
- SQL + Tableau analysis on Google's public GA4 BigQuery e-commerce dataset
- Identified **$1.14M in revenue leakage** across the conversion funnel

### RFM Customer Segmentation
- Recency-Frequency-Monetary segmentation
- Found that the **top 20% of customers generate 65% of revenue**

---

## 5. SKILLS

**Data Analytics:** SQL, Python, Tableau, Excel, EDA, data validation, KPI dashboarding (Streamlit), statistical analysis (Pearson/Spearman correlation), customer segmentation (RFM), demand forecasting

**ML / Predictive Modeling:** LightGBM, XGBoost, Prophet, SARIMAX, classification, time-series forecasting

**AI / Systems Engineering:** FastAPI, DuckDB, SQLModel, SQLGlot, React, Vite, Tailwind, Recharts, Zustand, JWT/RBAC auth, Redis rate limiting, async concurrency handling, LLM integration (Gemini API, Groq API), local speech pipelines (faster-whisper, Piper, OpenWakeWord)

**Tooling:** Git/GitHub, JIRA, Notion, Google's agentic IDE ("Antigravity") for AI-assisted development

---

## 6. EDUCATION

**B.Tech, Information Technology** — M.I.E.T Engineering College, Tiruchirappalli (graduating June 2026)

---

## 7. RESUME / CONTACT

- Resume download (ATS-optimized LaTeX, 2-page, role-specific variants: Data Analyst, Data Scientist, Business Analyst, AI Engineer)
- GitHub: github.com/JAMIEL-J
- Email / LinkedIn / Contact form
