"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} />,
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and market landscape to build a solid strategic foundation.",
    color: "bg-orange-500"
  },
  {
    icon: <PenTool size={32} />,
    title: "Design",
    description: "Our designers craft high-fidelity prototypes that prioritize user experience and brand aesthetic.",
    color: "bg-blue-500"
  },
  {
    icon: <Code size={32} />,
    title: "Development",
    description: "We turn designs into reality using clean, scalable code and high-performance engineering standards.",
    color: "bg-purple-500"
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Delivery",
    description: "Rigorous testing and optimization ensure a flawless launch followed by ongoing strategic support.",
    color: "bg-green-500"
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-[36px] font-bold mb-6">Our Development Process</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A proven, step-by-step methodology that ensures every project is delivered on time and above expectations.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500 border-8 border-slate-900`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed px-4">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
