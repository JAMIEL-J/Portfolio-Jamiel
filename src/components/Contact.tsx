"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EnvelopeSimple, LinkedinLogo, GithubLogo, DownloadSimple, PaperPlaneRight, Checks, Spinner } from "@phosphor-icons/react";

const resumeVariants = [
  {
    role: "Data Analyst Resume",
    description: "Click here to download my resume",
    filename: "Jamiel_J_CV.pdf"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("loading");
    
    // Simulate API request send
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleDownload = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="relative z-10 bg-background py-24 px-6 md:px-12 lg:px-24 border-t border-coffee-light/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-4">
          <span className="font-mono text-xs tracking-[0.2em] text-coffee-medium uppercase inline-block">
            05 / Connection
          </span>
          <h2 className="font-cinzel text-3xl md:text-5xl text-coffee-dark font-bold leading-tight">
            Resume & Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side: Resume Downloads & Links */}
          <div id="resume" className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-cinzel text-xl text-coffee-dark font-bold">
                ATS-Optimized Resumes
              </h3>
              <p className="font-instrument text-base text-coffee-medium/90 leading-relaxed">
                Download LaTeX-formatted, single-page ATS-compliant resumes tailored specifically for different career paths.
              </p>
            </div>

            {/* LaTeX Variants List */}
            <div className="flex flex-col gap-4">
              {resumeVariants.map((res) => (
                <button
                  key={res.role}
                  type="button"
                  onClick={() => handleDownload(res.filename)}
                  className="text-left glass-panel p-5 rounded-2xl border border-coffee-light/10 bg-[#fffdd0]/25 hover:border-coffee-dark/25 transition-all flex flex-col justify-between group cursor-pointer w-full"
                >
                  <div className="space-y-2">
                    <h4 className="font-cinzel text-sm text-coffee-dark font-bold group-hover:text-coffee-accent transition-colors">
                      {res.role}
                    </h4>
                    <p className="font-instrument text-xs text-coffee-medium leading-relaxed">
                      {res.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-coffee-light group-hover:text-coffee-dark transition-colors pt-4 mt-auto">
                    <DownloadSimple className="w-3.5 h-3.5" />
                    Download PDF
                  </div>
                </button>
              ))}
            </div>

            {/* Direct Channels */}
            <div className="glass-panel p-6 rounded-2xl border border-coffee-light/10 bg-[#fffdd0]/20 space-y-5">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-coffee-dark font-bold">
                Direct Channels
              </h4>
              
              <div className="space-y-3 font-mono text-xs">
                <a
                  href="mailto:jamieljahirhussain@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdd0]/30 border border-coffee-light/5 hover:border-coffee-dark/20 text-coffee-dark transition-all"
                >
                  <EnvelopeSimple className="w-4 h-4 text-coffee-medium" />
                  <span>jamieljahirhussain@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/jamiel-j-856ab9329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdd0]/30 border border-coffee-light/5 hover:border-coffee-dark/20 text-coffee-dark transition-all"
                >
                  <LinkedinLogo className="w-4 h-4 text-coffee-medium" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="https://github.com/JAMIEL-J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdd0]/30 border border-coffee-light/5 hover:border-coffee-dark/20 text-coffee-dark transition-all"
                >
                  <GithubLogo className="w-4 h-4 text-coffee-medium" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 md:p-8 rounded-3xl border border-coffee-light/10 bg-[#fffdd0]/25 space-y-6">
              <div className="space-y-2">
                <h3 className="font-cinzel text-xl text-coffee-dark font-bold">
                  Send a Direct Message
                </h3>
                <p className="font-instrument text-base text-coffee-medium/90">
                  Fill out the form below to reach out directly. The "council" will review it and get back to you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-instrument text-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-coffee-medium">
                      Your Name <span className="text-coffee-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full font-instrument text-base px-4 py-3 rounded-xl border border-coffee-light/10 focus:border-coffee-medium bg-[#fffdd0]/30 outline-none transition-all placeholder-coffee-light/50"
                      disabled={status === "loading"}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-coffee-medium">
                      Your Email <span className="text-coffee-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full font-instrument text-base px-4 py-3 rounded-xl border border-coffee-light/10 focus:border-coffee-medium bg-[#fffdd0]/30 outline-none transition-all placeholder-coffee-light/50"
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-coffee-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Enter subject"
                    className="w-full font-instrument text-base px-4 py-3 rounded-xl border border-coffee-light/10 focus:border-coffee-medium bg-[#fffdd0]/30 outline-none transition-all placeholder-coffee-light/50"
                    disabled={status === "loading"}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-coffee-medium">
                    Message <span className="text-coffee-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message here..."
                    className="w-full font-instrument text-base px-4 py-3 rounded-xl border border-coffee-light/10 focus:border-coffee-medium bg-[#fffdd0]/30 outline-none transition-all placeholder-coffee-light/50 resize-none"
                    disabled={status === "loading"}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full flex items-center justify-center gap-2 bg-coffee-dark hover:bg-coffee-medium disabled:bg-coffee-light/50 text-[#fffdd0] font-mono text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-md shadow-coffee-dark/5 active:scale-98 cursor-pointer"
                >
                  {status === "loading" && <Spinner className="w-4 h-4 animate-spin" />}
                  {status === "success" && <Checks className="w-4 h-4 text-emerald-300" />}
                  {status === "idle" && <PaperPlaneRight className="w-4 h-4" />}
                  
                  {status === "loading" && "Sending message..."}
                  {status === "success" && "Message Sent!"}
                  {status === "idle" && "Send Message"}
                </button>

                {/* Validation feedbacks */}
                {status === "success" && (
                  <motion.p
                    initial={mounted ? { opacity: 0, y: 10 } : undefined}
                    animate={mounted ? { opacity: 1, y: 0 } : undefined}
                    className="text-xs font-mono text-emerald-700 text-center"
                  >
                    Thank you! Your message was sent successfully. We will be in touch.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
