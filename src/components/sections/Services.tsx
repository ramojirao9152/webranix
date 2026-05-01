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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6XLX5e4oVewcksvveJtNvOdBJ0WFo-f1y6Q3RuwY0PI114DA2XPKxiC6Q-uE1sOStwme8PETMScEqQc7jwTuGL1Um9YKS9THpwTCiCRboGql5tRapf34d1FCfIOWMtIw9i50xZgVYKdHX2o6ICFocD3BDM_6BH5w97fxiFBLSqYrp0nYJ94Sp07hFByKOKCTAn6LkmZmEU8-delHOq4r8lOPxU4IoDjbYYEeKNzK0p-XoBl5K98k7ik1BSKJSXjqSbORDNTMrqQc",
  },
  {
    title: "E-commerce Sites",
    description:
      "High-performance online stores built for scale and conversion to drive your digital revenue.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa6UQ5tBs9E2GvuYY09EQwF1_XQMi8Ubrutjo0ZJjRzAkuHUzcJhd9faJnwSqdfiQI3Qfhd5GISQJjPfnp3nRpHP5kuxM3OXe3B8WoM0zZokWqqUngGtmc8Oyy83gPFSflKu_O4cqUFFJ52ejgXI7cqpuXB1jRfWaL0p-_zDq3yEWwxEhQjVkGs_e6QHF248-0GhPy31x-a8CsyRPbukiIlLpidWHnlJkDPyXgIEaGBtes2_osa1HIOskXt9b_WsKeQvxOFxy7q1A",
  },
  {
    title: "App Development",
    description:
      "Scalable and high-performance mobile and web applications built with modern technologies for seamless user experiences.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCjFPnjidWgR00NBy_38swkdueBFLraUHLUw5uO_q9uAZ-4Fir-4wrZotkHdMek2MQePb094fesPtRxq-DrNQM9C8RUHC0iBYsJWtD6E239TYDPNkif6Yow0NYicUdD_G5zfNAvxZnVddCndj9h0hNsJVpcbKyDeUKX5EQrpkAgzXiQsWm6hx9He3rBIcVMWhMc2ODdPKWJL7SP_Fw6d02elgmAiCSKJnL8CSV0VjiebCwamQ8_H4M3KS9u4V6DGI0tiUSbNautVSo",
  },
  {
    title: "Wedding Invitation Websites",
    description:
      "Elegant, interactive digital invitations with cinematic charm to celebrate your special day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2grV3HSTkDbqLAPPZPXzo-9rxvPkpr9qGafn2eIShBmkJcmimDPUTutYXXUgykEFfb_Ylmmlpak9EvmfEmBXl_F-TCMzvW3e1qqX73sdTvggxKFn61_5ca40LS4yZPTcs5tUuehaQ0kHTHvdwPkR5Po-vqF0V5PeCcstwVyfM0Xka63usJdhd049fhjmqYKKBWGCOZMseuyFPw-UT-lqVYpmfP5O1D9kVOYyBkgrxHc4ixU4FRMV7kAW0pnQ3H4j8-i9kQYy1Ksw",
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
