"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { ArrowUp, List, X } from "@phosphor-icons/react";

export default function Home() {
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return scrollY.on("change", (latest) => {
      // Show header only after scrolling past most of the video height
      setIsScrolled(latest > window.innerHeight * 0.8);
      setShowScrollTop(latest > 600);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-coffee-medium selection:text-[#fffdd0]">
      {/* Scroll Progress Bar */}
      {mounted && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-coffee-accent origin-left z-[100]"
          style={{ scaleX }}
        />
      )}

      {/* Navigation Header */}
      <nav
        className={`fixed top-4 left-4 right-4 max-w-5xl mx-auto z-50 transition-all duration-500 h-14 sm:h-16 flex items-center rounded-full ${
          isScrolled
            ? "opacity-100 translate-y-0 bg-[#fffdd0]/90 border border-coffee-light/10 backdrop-blur-md shadow-lg shadow-coffee-dark/10"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="font-cinzel text-xl text-coffee-dark font-extrabold tracking-wide uppercase">
            Jamiel J
          </a>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-coffee-medium hover:text-coffee-dark transition-colors relative group"
              >
                {link.name}
                <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-coffee-dark transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#resume"
              className="bg-coffee-dark hover:bg-coffee-medium text-[#fffdd0] font-mono text-[10px] uppercase tracking-widest px-4.5 py-2.5 rounded-full transition-all shadow-md shadow-coffee-dark/5 active:scale-95"
            >
              Resume
            </a>
          </div>

          {/* Mobile Nav Menu Trigger */}
          <button
            type="button"
            className="md:hidden text-coffee-dark focus:outline-none cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={mounted ? { opacity: 0, y: -10 } : undefined}
            animate={mounted ? { opacity: 1, y: 0 } : undefined}
            className="absolute top-16 left-0 right-0 bg-primary-beige border-b border-coffee-light/10 shadow-lg px-6 py-8 flex flex-col gap-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-coffee-medium hover:text-coffee-dark"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#resume"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-coffee-dark text-center text-[#fffdd0] font-mono text-xs uppercase tracking-widest py-3 rounded-xl shadow-md"
            >
              Download Resume
            </a>
          </motion.div>
        )}
      </nav>

      {/* Main Container Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-coffee-dark text-[#fffdd0]/90 py-12 px-6 md:px-12 lg:px-24 border-t border-[#fffdd0]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs uppercase tracking-wider text-[#fffdd0]/50">
          <div>
            <p className="font-cinzel font-semibold text-[#fffdd0] mb-1.5">Jamiel J</p>
            <p>Data Analyst & AI Systems Builder</p>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 Jamiel J. All rights reserved.</p>
            <p className="mt-1 text-[10px]">Built with Next.js & Framer Motion</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Indicator button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-coffee-dark hover:bg-coffee-medium text-[#fffdd0] flex items-center justify-center shadow-lg shadow-coffee-dark/20 transition-all transform active:scale-95 cursor-pointer"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
