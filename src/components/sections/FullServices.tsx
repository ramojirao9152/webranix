"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Wedding Invitation Websites",
    description: "Cinematic, interactive wedding websites crafted to tell your love story with stunning animations, RSVP systems, and personalized themes inspired by tradition and modern design.",
    priceHint: "Starting from ₹999",
    features: [
      "Animated Storytelling Experience",
      "RSVP & Guest Management",
      "Photo & Video Gallery",
      "Custom Themes (Telugu / Traditional / Modern)"
    ],
    color: "bg-rose-50",
    highlight: true
  },
  {
    title: "Portfolio Websites",
    description: "Modern, high-performance portfolio websites designed to showcase your skills, projects, and personal brand with a strong visual identity.",
    priceHint: "Starting from ₹2,999",
    features: [
      "Personal Branding Design",
      "Project Showcase",
      "Resume Integration",
      "SEO Optimization"
    ],
    color: "bg-orange-50"
  },
  {
    title: "E-Commerce Websites",
    description: "Scalable and conversion-focused online stores with secure payment integrations, smooth user experience, and powerful admin controls.",
    priceHint: "Starting from ₹7,999",
    features: [
      "Payment Gateway Integration",
      "Product & Inventory Management",
      "Cart & Checkout System",
      "Admin Dashboard"
    ],
    color: "bg-green-50"
  },

  // 🔽 Supporting Services (Keep these but lower emphasis)

  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built for performance and seamless user experience across Android and iOS devices.",
    priceHint: "Starting from ₹29,999",
    features: [
      "Android & iOS Apps",
      "Real-time Sync",
      "Push Notifications",
      "App Store Deployment"
    ],
    color: "bg-blue-50"
  },
  {
    title: "UI/UX Design",
    description: "User-focused design solutions that combine aesthetics with usability to create intuitive and engaging digital experiences.",
    priceHint: "Starting from ₹9,999",
    features: [
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems"
    ],
    color: "bg-purple-50"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your online presence, attract the right audience, and boost conversions.",
    priceHint: "Starting from ₹4,999",
    features: [
      "Social Media Marketing",
      "Performance Ads (PPC)",
      "Content Strategy",
      "Analytics & Reporting"
    ],
    color: "bg-yellow-50"
  }
];

export default function FullServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] leading-[1.2] tracking-[-0.03em] font-[700] text-slate-900 mb-6"
          >
            Precision-Engineered <span className="text-primary">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-2xl mx-auto"
          >
            We bridge the gap between high-end digital craftsmanship and hyper-speed technical execution. WEBRANIX builds digital infrastructure that defines market leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${service.color} p-10 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-shadow group`}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-6">
                  <h3 className="text-[22px] sm:text-[24px] leading-[1.2] tracking-[-0.02em] font-[700] text-slate-900">{service.title}</h3>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 border border-primary/10 px-3 py-1 rounded-full shadow-sm w-fit shrink-0">
                    {service.priceHint}
                  </span>
                </div>
                <p className="text-[16px] leading-[1.6] font-[400] text-secondary mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle2 size={18} className="text-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/about#contact"
                className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
              >
                Inquire about this service <ArrowRight size={20} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-3xl text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to scale your business?</h3>
          <p className="text-slate-400 mb-8 md:mb-10 max-w-xl mx-auto text-base md:text-lg">
            Join 50+ companies that have transformed their digital presence with WEBRANIX.
          </p>
          <Link href="/about#contact" className="bg-primary text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 transition-transform inline-block whitespace-nowrap">
            Start Your Project
          </Link>
        </div>

      </div>
    </section>
  );
}
