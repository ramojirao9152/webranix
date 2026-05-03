"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

// A simple counting animation component
function Counter({ from, to, duration = 2, suffix = "", className = "" }: { from: number, to: number, duration?: number, suffix?: string, className?: string }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [inView, from, to, duration]);

  return <div ref={nodeRef} className={className}>{count}{suffix}</div>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } as any,
  },
};

const FloatingGeometry = () => (
  <svg className="w-full h-full bg-slate-950 rounded-xl" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient cx="50%" cy="50%" fx="50%" fy="50%" id="orangeGlow" r="50%">
        <stop offset="0%" stopColor="#E44D55" stopOpacity="0.4"></stop>
        <stop offset="100%" stopColor="#E44D55" stopOpacity="0"></stop>
      </radialGradient>
      <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#E44D55" stopOpacity="0.8"></stop>
        <stop offset="100%" stopColor="#E44D55" stopOpacity="0.2"></stop>
      </linearGradient>
    </defs>
    <style>
      {`
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.1); opacity: 0.6; }
        }
        @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
        }
        .glow-sphere { animation: pulse 8s ease-in-out infinite; transform-origin: center; }
        .orbit-ring { animation: rotate-slow 20s linear infinite; transform-origin: center; }
        .floating-geo { animation: float 6s ease-in-out infinite; transform-origin: center; }
      `}
    </style>
    <circle className="glow-sphere" cx="400" cy="400" fill="url(#orangeGlow)" r="300"></circle>
    <circle className="orbit-ring" cx="400" cy="400" fill="none" r="60" stroke="#E44D55" strokeDasharray="10 5" strokeWidth="2"></circle>
    <circle cx="400" cy="400" fill="#E44D55" fillOpacity="0.2" r="40"></circle>
    <circle cx="400" cy="400" fill="#E44D55" r="15"></circle>
    <g className="orbit-ring">
      <rect fill="none" height="20" rx="10" stroke="#E44D55" strokeWidth="1.5" width="40" x="580" y="390"></rect>
      <circle cx="220" cy="400" fill="#E44D55" fillOpacity="0.6" r="8"></circle>
    </g>
    <path d="M250,250 L350,350 M550,250 L450,350 M250,550 L350,450 M550,550 L450,450" stroke="url(#lineGradient)" strokeOpacity="0.4" strokeWidth="1"></path>
    <g className="floating-geo">
      <polygon fill="none" opacity="0.5" points="150,150 170,140 160,170" stroke="#E44D55" strokeWidth="1"></polygon>
      <rect fill="none" height="30" opacity="0.4" rx="4" stroke="#E44D55" strokeWidth="1" transform="rotate(45 615 165)" width="30" x="600" y="150"></rect>
      <circle cx="180" cy="620" fill="none" opacity="0.6" r="12" stroke="#E44D55" strokeWidth="1"></circle>
    </g>
    <path d="M0,400 L800,400 M400,0 L400,800" stroke="white" strokeOpacity="0.05" strokeWidth="0.5"></path>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-8 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Area */}
        <motion.div 
          className="space-y-8 pt-12 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-[14px] leading-[1.2] tracking-[0.2em] font-[700] uppercase text-primary">Next-Gen Digital Foundry</span>
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-[52px] leading-[1.1] tracking-[-0.04em] font-[900] text-slate-900 max-w-xl">
            Architecting Digital <span className="text-primary">Dominance</span>.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-lg">
            WEBRANIX transforms high-growth brands through elite technical engineering and cinematic design. We don't just build websites; we build momentum.
          </motion.p>
          
          {/* <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2">
            <div>
              <Counter from={0} to={120} suffix="+" className="text-[18px] font-bold text-slate-900 leading-none" />
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mt-1">Deliveries</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-100 hidden sm:block" />
            <div>
              <Counter from={100} to={15} suffix="ms" duration={1.5} className="text-[18px] font-bold text-slate-900 leading-none" />
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mt-1">Speed</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-100 hidden sm:block" />
            <div>
              <Counter from={0} to={98} suffix="%" className="text-[18px] font-bold text-slate-900 leading-none" />
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mt-1">Retention</p>
            </div>
            <div className="w-[1px] h-8 bg-slate-100 hidden sm:block" />
            <div>
              <div className="text-[18px] font-bold text-slate-900 leading-none">$2B+</div>
              <p className="text-[10px] font-bold text-primary uppercase tracking-[0.1em] mt-1">Valuation</p>
            </div>
          </motion.div> */}

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href="/portfolio">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-[16px] orange-bloom transition-all hover:opacity-90">
                Our Portfolio
              </button>
            </Link>
            <Link href="/services">
              <button className="glass-card px-8 py-4 rounded-full font-semibold text-[16px] border border-slate-200 transition-all hover:bg-slate-50 text-slate-900">
                View Services
              </button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Right Graphic Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden glass-card p-4 shadow-xl">
            <FloatingGeometry />
          </div>
          
          {/* Floating Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-lg border-white/40 max-w-[200px]"
          >
            <div className="text-primary text-[32px] leading-[1.3] tracking-[-0.02em] font-[700]">100%</div>
            <p className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-secondary mt-1">Commitment To Quality</p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
