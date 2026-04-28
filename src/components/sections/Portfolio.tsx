"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    category: "Design Agency",
    title: "Pixel Shade",
    description: "A high-end creative studio specializing in cinematic visual storytelling.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=800",
    liveUrl: "https://pixel-shade-six.vercel.app/"
  },
  {
    category: "Healthcare",
    title: "Shreya Dental",
    description: "Professional dental healthcare platform blending clinical precision with patient comfort.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=800",
    liveUrl: "https://shreya-dental.vercel.app/"
  },
  {
    category: "Dermatology",
    title: "Srih Skin Clinic",
    description: "Advanced aesthetic dermatology center featuring cutting-edge laser treatments.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&h=800",
    liveUrl: "https://srih-skin-clinic.vercel.app/"
  },
  {
    category: "Software Engineering",
    title: "Ramoji Rao",
    description: "A sleek, technical portfolio showcasing professional engineering expertise.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200&h=800",
    liveUrl: "https://ramojirao.in/"
  }
];

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const cardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for images
    imagesRef.current.forEach((img) => {
      if (img) {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom", 
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    // Reveal animation for cards
    if (cardsRef.current.length > 0) {
      gsap.fromTo(cardsRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.98
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
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

  const addToCardsRef = (el: HTMLAnchorElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addToImagesRef = (el: HTMLImageElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <section className="py-12 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">The Proof</span>
            <h2 className="text-[36px] leading-[1.2] tracking-[-0.03em] font-[700] text-slate-900 mb-6">
              The Performance <span className="text-primary">Gallery</span>
            </h2>
            <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary">
              Explore how we've helped industry disruptors achieve exponential growth through strategic design and elite technical performance.
            </p>
          </div>
          <Link href="/portfolio">
            <button className="font-semibold text-[16px] text-primary border-b-2 border-primary pb-1 hover:text-primary-container transition-colors">
              View All Projects
            </button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <a 
              key={idx} 
              ref={addToCardsRef}
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg relative bg-slate-100">
                <Image 
                  ref={addToImagesRef as any}
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-110" // scale slightly to allow room for parallax
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <span className="text-[10px] leading-[1.2] tracking-[0.05em] font-[700] text-primary uppercase block">
                  {project.category}
                </span>
                <h3 className="text-[20px] leading-[1.3] tracking-[-0.02em] font-[700] text-slate-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] leading-[1.6] font-[400] text-secondary line-clamp-3">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
