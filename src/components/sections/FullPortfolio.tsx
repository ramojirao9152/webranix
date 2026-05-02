"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
    {
    title: "WheelCrafts",
    category: "Ecommerce",
    image: "https://cdn.shopify.com/s/files/1/0591/1176/8115/files/teak-wood-bullock-cart-home-decor-wheel-crafts_1.jpg?v=1777112107",
    description: "Explore exquisite handcrafted bullock carts and vintage-inspired teapoy tables, blending tradition with elegance.",
    journey: "We built a premium e-commerce experience for WheelCrafts to showcase their handcrafted teak wood products, focusing on high-quality product imagery and a seamless purchasing flow.",
    liveUrl: "https://wheelcrafts.in/"
  },
  {
    title: "Pixel Shade",
    category: "Design Agency",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200&h=800",
    description: "A premium creative studio specializing in cinematic visual storytelling.",
    journey: "We developed a sophisticated cinematic dark mode experience for Pixel Shade, focusing on high-impact visual assets and smooth interactivity that defines digital asset dominance.",
    liveUrl: "https://pixel-shade-six.vercel.app/"
  },
  {
    title: "Shreya Dental",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200&h=800",
    description: "A professional dental healthcare platform blending clinical precision with patient comfort.",
    journey: "For Dr. Shreya's Dental Abode, we implemented a trust-inducing clinical atelier interface with integrated appointment booking and a calming soft-purple aesthetic.",
    liveUrl: "https://shreya-dental.vercel.app/"
  },
  {
    title: "Srih Skin Clinic",
    category: "Dermatology",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200&h=800",
    description: "Advanced aesthetic dermatology center featuring cutting-edge laser treatments.",
    journey: "We showcased over 25 years of expertise for Srih Skin Clinic, using a professional theme of deep blues and vibrant orange accents to highlight their advanced technological approach.",
    liveUrl: "https://srih-skin-clinic.vercel.app/"
  },

];

export default function FullPortfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-50 rounded-2xl p-4 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div 
                className="relative aspect-video overflow-hidden rounded-xl mb-4 shadow-sm bg-slate-200 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  unoptimized
                />
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">{project.category}</span>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">{project.title}</h3>
                  <p className="text-slate-500 text-xs mt-2 line-clamp-2">{project.description}</p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-white text-[11px] font-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    Live Site <ExternalLink size={12} />
                  </a>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-primary text-[11px] font-bold hover:underline"
                  >
                    Know More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal (Simplified) */}
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-slate-900/90 backdrop-blur-md">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-12 relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
              >
                ✕ Close
              </button>
              
              <div className="mb-10">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{selectedProject.category}</span>
                <h2 className="text-[36px] font-bold text-slate-900 mb-6">{selectedProject.title} Case Study</h2>
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-2xl">
                  <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" unoptimized />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">The Journey</h4>
                      <p className="text-secondary leading-relaxed">{selectedProject.journey}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">Results</h4>
                      <p className="text-secondary leading-relaxed">The project resulted in a 40% increase in user engagement and significantly reduced load times, leading to a direct impact on the client's bottom line.</p>
                    </div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-slate-50 px-3 py-1 rounded-md text-xs font-bold text-slate-600">Next.js</span>
                        <span className="bg-slate-50 px-3 py-1 rounded-md text-xs font-bold text-slate-600">Tailwind</span>
                        <span className="bg-slate-50 px-3 py-1 rounded-md text-xs font-bold text-slate-600">GSAP</span>
                      </div>
                    </div>
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                    >
                      Live Preview <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </section>
  );
}
