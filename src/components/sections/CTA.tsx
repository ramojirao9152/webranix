"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      // Reveal content
      gsap.fromTo(contentRef.current?.children || [],
        {
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );

      // Background animation
      gsap.to(blurRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-slate-900 text-white relative overflow-hidden">

      {/* Animated Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div
          ref={blurRef}
          className="absolute top-0 left-0 w-full h-full bg-primary/20 blur-[150px]"
        />
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <h2 className="text-[52px] leading-[1.1] tracking-[-0.04em] font-[800] mb-8">
          Ready to ignite your digital presence?
        </h2>

        <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-slate-400 max-w-2xl mx-auto mb-12">
          Our team of specialists is ready to help you navigate the future of digital products. Let's build something exceptional together.
        </p>

        <div className="flex justify-center gap-6">
          <Link href="/about#contact">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-semibold text-[16px] orange-bloom transition-all hover:scale-105 active:scale-95">
              Schedule a Strategy Call
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

