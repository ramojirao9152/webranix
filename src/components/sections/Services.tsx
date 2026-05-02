"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Portfolio & Business Websites",
    description:
      "Professional websites that combine personal branding and business presence—crafted to build authority, trust, and generate leads.",
    image:
      "https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-commerce Sites",
    description:
      "High-performance online stores built for scale and conversion to drive your digital revenue.",
    image:
      "https://images.unsplash.com/photo-1674027392887-751d6396b710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "App Development",
    description:
      "Scalable and high-performance mobile and web applications built with modern technologies for seamless user experiences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Wedding Invitation Websites",
    description:
      "Elegant, interactive digital invitations with cinematic charm to celebrate your special day.",
    image:
      "https://images.unsplash.com/photo-1656104717095-9d062b0d4e8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(cardsRef.current,
        { 
          opacity: 0, 
          y: 60,
          rotationX: 10,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: {
            amount: 0.6,
            from: "start"
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    }

    
    return () => {
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Capabilities</span>
          <h2 className="text-[36px] leading-[1.2] tracking-[-0.03em] font-[700] text-slate-900 mb-6">
            Precision-Engineered <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-2xl mx-auto">
            We don't just build websites; we architect digital growth engines that transform businesses through high-performance engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx}
              ref={addToCardsRef} 
              className="glass-card p-6 rounded-lg group hover:border-primary/30 transition-all flex flex-col gap-5 h-full"
            >
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-100 relative">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized // since we're using external googleusercontent images without config
                />
              </div>
              <div className="flex-grow">
                <h3 className="text-[20px] leading-[1.3] tracking-[-0.02em] font-[700] text-slate-900 mb-2">{service.title}</h3>
                <p className="text-[14px] leading-[1.6] font-[400] text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link className="inline-flex items-center gap-2 font-semibold text-[16px] text-primary hover:text-primary-container transition-colors group" href="/services">
            Explore All Services
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
