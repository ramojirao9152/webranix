"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Globe } from "lucide-react";

const team = [
  {
    name: "Our Founder",
    role: "Founder & Strategic Lead",
    image: "/images/webranix_founder.jpeg",
    bio: "Driving the strategic vision of WEBRANIX, bridging the gap between technical mastery and artistic excellence to deliver category-defining digital products."
  }
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const teamItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.fromTo(teamItemsRef.current,
        { 
          opacity: 0, 
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
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

  const addToTeamItemsRef = (el: HTMLDivElement | null) => {
    if (el && !teamItemsRef.current.includes(el)) {
      teamItemsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[36px] font-bold text-slate-900 mb-6">The Minds Behind WEBRANIX</h2>
          <p className="text-secondary max-w-xl mx-auto">
            A small team of dedicated experts working at the intersection of design and technology.
          </p>
        </div>

        <div className="flex justify-center">
          {team.map((member, idx) => (
            <div
              key={idx}
              ref={addToTeamItemsRef}
              className="group max-w-sm"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg relative bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Users size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
              <h3 className="text-[24px] font-bold text-slate-900">{member.name}</h3>
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
              <p className="text-secondary text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

