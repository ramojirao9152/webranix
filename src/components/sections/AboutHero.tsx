"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      // Reveal Left Content
      gsap.fromTo(leftContentRef.current?.children || [],
        { 
          opacity: 0, 
          x: -40 
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );

      // Reveal Image Container
      gsap.fromTo(imageContainerRef.current,
        { 
          opacity: 0, 
          scale: 0.9,
          rotation: -3
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div ref={leftContentRef}>
            <h1 className="text-[52px] leading-[1.1] tracking-[-0.04em] font-[900] text-slate-900 mb-8">
              Engineering the Future of <span className="text-primary">Digital Agency</span>
            </h1>
            <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary mb-10">
              WEBRANIX started with a simple mission: to bridge the gap between high-end digital craftsmanship and market accessibility. We believe that premium digital experiences shouldn't be reserved for the fortune 500.
            </p>
            <div className="flex gap-12">
              <div>
                <span className="block text-4xl font-bold text-slate-900 mb-1">50+</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Projects</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-slate-900 mb-1">12</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Experts</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-slate-900 mb-1">99%</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Success Rate</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              ref={imageContainerRef}
              className="aspect-square bg-slate-100 rounded-[60px] overflow-hidden shadow-2xl relative group"
            >
              <img 
                src="/images/logo.jpeg" 
                alt="WEBRANIX Digital Foundry" 
                className="w-full h-full transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

