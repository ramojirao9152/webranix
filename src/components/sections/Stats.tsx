"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } as any,
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <></>
    // <section className="py-12 bg-white border-y border-slate-100">
    //   <div className="max-w-7xl mx-auto px-8">
    //     <motion.div 
    //       ref={ref}
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={inView ? "visible" : "hidden"}
    //       className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    //     >
    //       <motion.div variants={itemVariants} className="space-y-2">
    //         <Counter from={0} to={120} suffix="+" className="font-[700] text-[24px] leading-[1.3] tracking-[-0.02em] text-slate-900" />
    //         <p className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-primary uppercase">Projects Delivered</p>
    //       </motion.div>
          
    //       <motion.div variants={itemVariants} className="space-y-2">
    //         <Counter from={100} to={15} suffix="ms" duration={1.5} className="font-[700] text-[24px] leading-[1.3] tracking-[-0.02em] text-slate-900" />
    //         <p className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-primary uppercase">Avg Load Speed</p>
    //       </motion.div>
          
    //       <motion.div variants={itemVariants} className="space-y-2">
    //         <Counter from={0} to={98} suffix="%" className="font-[700] text-[24px] leading-[1.3] tracking-[-0.02em] text-slate-900" />
    //         <p className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-primary uppercase">Retention Rate</p>
    //       </motion.div>
          
    //       <motion.div variants={itemVariants} className="space-y-2">
    //         <div className="font-[700] text-[24px] leading-[1.3] tracking-[-0.02em] text-slate-900">$2B+</div>
    //         <p className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-primary uppercase">Client Valuation</p>
    //       </motion.div>
    //     </motion.div>
    //   </div>
    // </section>
  );
}
