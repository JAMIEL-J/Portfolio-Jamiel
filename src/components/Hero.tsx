"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, FileText, EnvelopeSimple, SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted so the browser allows autoplay (video moves)
  
  const { scrollY } = useScroll();
  
  // Parallax effects for the video
  const videoScale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const videoY = useTransform(scrollY, [0, 800], [0, 150]);
  const videoOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  useEffect(() => {
    setMounted(true);
    
    // Autoplay logic
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay failed:", err);
      });
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      if (!nextMuteState) {
        videoRef.current.play().catch((err) => console.log("Unmute play error:", err));
      }
    }
  };

  return (
    <div className="w-full">
      {/* Fixed Video Background Container */}
      <motion.div 
        className="fixed top-0 left-0 w-full h-[100dvh] bg-black -z-10 overflow-hidden flex items-center justify-center"
        style={{
          scale: mounted ? videoScale : 1,
          y: mounted ? videoY : 0,
          opacity: mounted ? videoOpacity : 1,
        }}
      >
        <video
          ref={videoRef}
          src="/Jameel_Data_Analyst_portfolio_intro_202606222047.mp4"
          className="w-full h-full object-cover"
          loop={false}
          playsInline
          autoPlay
          muted={isMuted} // Controlled by state, initially false
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 via-transparent to-transparent pointer-events-none" />

      </motion.div>

      {/* Placeholder to allow scrolling past the video */}
      <div className="relative w-full h-[100dvh] pointer-events-none">
        {/* Floating Speaker button inside the placeholder so it sits exactly over the video, is clickable, and scrolls away naturally */}
        <button
          type="button"
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 w-12 h-12 rounded-full bg-coffee-dark/85 hover:bg-coffee-dark backdrop-blur-md flex items-center justify-center text-[#fffdd0] shadow-lg transition-all transform active:scale-95 cursor-pointer border border-primary-beige/10 pointer-events-auto"
          aria-label={isMuted ? "Unmute Video Sound" : "Mute Video Sound"}
        >
          {isMuted ? (
            <SpeakerSlash className="w-5 h-5" />
          ) : (
            <SpeakerHigh className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Hero Content Section sliding over the video */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center py-20 px-6 md:px-12 lg:px-24 bg-background/95 border-t border-coffee-light/20 rounded-t-[3rem] overflow-hidden">
        {/* Subtle radial light, no infinite animation blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_top,#fffdd0_0%,transparent_70%)] opacity-30 pointer-events-none"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
          }}
          className="max-w-4xl w-full flex flex-col items-center justify-center text-center space-y-8 relative z-10"
        >
          {/* 1. Eyebrow */}
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
            <span className="font-mono text-[11px] md:text-xs tracking-[0.2em] text-coffee-medium uppercase">
              Data Analyst
            </span>
          </motion.div>

          {/* 2. Headline */}
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}>
            <h1 className="font-cinzel text-5xl sm:text-7xl md:text-[6rem] lg:text-[7rem] text-coffee-dark font-bold leading-[1.1] tracking-tight">
              JAMIEL J
            </h1>
          </motion.div>

          {/* 3. Subtext (Quote & Summary) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }} className="space-y-6 text-center w-full">
            <p className="font-instrument text-2xl sm:text-3xl md:text-4xl text-coffee-dark font-medium leading-relaxed w-full">
              "SQL, dashboards, and forecasting that find money other people miss."
            </p>
            <p className="font-instrument text-lg md:text-xl text-[#fffdd0] leading-relaxed max-w-2xl mx-auto">
              I work across the data stack — from SQL pipelines and dashboards to predictive models. Currently targeting Data Analyst roles, with Vizzy and DNA as proof I can build the systems that produce the insights, not just read them off a dashboard someone else made.
            </p>
          </motion.div>

          {/* 4. CTAs */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-coffee-dark hover:bg-coffee-medium text-[#fffdd0] font-mono text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors duration-200"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#resume"
              className="flex items-center gap-2 border border-coffee-dark/20 hover:border-coffee-dark bg-[#fffdd0]/10 hover:bg-[#fffdd0]/20 text-[#fffdd0] hover:text-coffee-dark font-mono text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors duration-200"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.6 } } }}
            className="flex justify-center items-center gap-8 pt-12 text-coffee-medium font-mono text-xs uppercase tracking-widest"
          >
            <a href="https://www.linkedin.com/in/jamiel-j-856ab9329/" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-dark transition-colors">
              LinkedIn
            </a>
            <span className="w-1 h-1 rounded-full bg-coffee-light/40" />
            <a href="mailto:jamieljahirhussain@gmail.com" className="hover:text-coffee-dark transition-colors">
              Email
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
