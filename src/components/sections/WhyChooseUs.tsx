"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MonitorSmartphone, Banknote, ShieldCheck, PencilRuler } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const features = [
  {
    id: 1,
    title: "Platform Mastery",
    date: "TECHNICAL ELITE",
    content: "We build high-performance digital experiences using custom code (React/Next.js) as well as WordPress and Shopify.",
    category: "Technical",
    icon: MonitorSmartphone,
    relatedIds: [4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Unmatched ROI",
    date: "MARKET ADVANTAGE",
    content: "Premium, high-fidelity output at the most competitive price point, maximizing your return on investment.",
    category: "Financial",
    icon: Banknote,
    relatedIds: [1],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Endless Support",
    date: "MISSION CRITICAL",
    content: "24/7 post-deployment maintenance ensuring your digital asset remains secure and high-performing globally.",
    category: "Support",
    icon: ShieldCheck,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Elite Craftsmanship",
    date: "DESIGN PRECISION",
    content: "Creative intuition blended with technical rigour to build products that are beautiful, scalable, and conversion-optimized.",
    category: "Design",
    icon: PencilRuler,
    relatedIds: [1, 2],
    status: "completed" as const,
    energy: 100,
  }
];

// NEW ORBITAL LAYOUT (ACTIVE)
export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(headerRef.current?.children || [],
        { 
          opacity: 0, 
          y: 30 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div ref={headerRef} className="text-center mb-0">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The WEBRANIX Edge</span>
          <h2 className="text-[36px] leading-[1.2] tracking-[-0.03em] font-[700] text-slate-900 mb-6">
            Engineered for <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-2xl mx-auto">
            We combine architectural technicality with strategic design to build products that don't just exist—they dominate.
          </p>
        </div>
        
        <div className="relative -mt-10">
          <RadialOrbitalTimeline timelineData={features} />
        </div>
      </div>
    </section>
  );
}

/*
// PREVIOUS GRID LAYOUT (COMMENTED OUT)
export default function WhyChooseUsLegacy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (sectionRef.current) {
      gsap.fromTo(cardsRef.current, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The WEBRANIX Edge</span>
          <h2 className="text-[36px] leading-[1.2] tracking-[-0.03em] font-[700] text-slate-900 mb-6">
            Engineered for <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-2xl mx-auto">
            We combine architectural technicality with strategic design to build products that don't just exist—they dominate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div ref={addToCardsRef} className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_20px_40px_rgba(228,77,85,0.1)] transition-all group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <MonitorSmartphone size={32} />
            </div>
            <h3 className="text-[24px] leading-[1.3] tracking-[-0.02em] font-[700] text-xl mb-4 text-slate-900">Multi-Platform Mastery</h3>
            <p className="text-[16px] leading-[1.6] font-[400] text-secondary leading-relaxed">
              We build high-performance digital experiences using custom code (React/Next.js) as well as popular platforms like WordPress and Shopify, ensuring the right tool for every project.
            </p>
          </div>

          <div ref={addToCardsRef} className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_20px_40px_rgba(228,77,85,0.1)] transition-all group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Banknote size={32} />
            </div>
            <h3 className="text-[24px] leading-[1.3] tracking-[-0.02em] font-[700] mb-4 text-slate-900">Unmatched ROI</h3>
            <p className="text-[16px] leading-[1.6] font-[400] text-secondary leading-relaxed">
              We deliver premium, high-fidelity output at the most competitive price point in the market, maximizing ROI without compromising on quality.
            </p>
          </div>

          <div ref={addToCardsRef} className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_20px_40px_rgba(228,77,85,0.1)] transition-all group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-[24px] leading-[1.3] tracking-[-0.02em] font-[700] mb-4 text-slate-900">Endless Support</h3>
            <p className="text-[16px] leading-[1.6] font-[400] text-secondary leading-relaxed">
              Our commitment doesn't end at launch. We provide 24/7 post-deployment maintenance, ensuring your digital asset remains secure and high-performing.
            </p>
          </div>

          <div ref={addToCardsRef} className="bg-white p-8 rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-50 hover:shadow-[0_20px_40px_rgba(228,77,85,0.1)] transition-all group">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <PencilRuler size={32} />
            </div>
            <h3 className="text-[24px] leading-[1.3] tracking-[-0.02em] font-[700] mb-4 text-slate-900">Elite Craftsmanship</h3>
            <p className="text-[16px] leading-[1.6] font-[400] text-secondary leading-relaxed">
              We blend creative intuition with technical rigour to build products that are not just beautiful, but built to scale and convert globally.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
*/
