"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sai Kiran Reddy",
    role: "Tech Lead",
    content: "WEBRANIX completely transformed our platform into a modern, scalable system. Their technical expertise and execution are outstanding.",
    rating: 5,
    avatar: "/images/testimonial1.png"
  },
  {
    name: "Sravani Lakshmi",
    role: "CEO, Ecom Solutions",
    content: "After launching our new e-commerce platform, our conversions increased significantly. Best quality work at a very competitive price.",
    rating: 5,
    avatar: "/images/testimonial2.png"
  },
  {
    name: "Venkatesh Naidu",
    role: "Product Manager",
    content: "The WEBRANIX team truly understood our vision and delivered beyond expectations. Our users love the experience now.",
    rating: 5,
    avatar: "/images/testimonial3.png"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto-play on mobile
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-[36px] font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-secondary max-w-xl mx-auto text-sm md:text-base">
            Don't just take our word for it. Hear from the visionary leaders who have partnered with us.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#E44D55" className="text-primary" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  {/* <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">{testimonial.role}</p> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative px-4">
          <div className="relative min-h-[340px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-[32px] border border-slate-100 flex flex-col items-center text-center shadow-lg shadow-slate-200/40"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Quote size={20} className="text-primary" fill="currentColor" />
                  </div>

                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#E44D55" className="text-primary" />
                    ))}
                  </div>

                  <p className="text-slate-700 text-sm md:text-base leading-relaxed italic mb-6 font-medium px-2">
                    "{testimonials[activeIndex].content}"
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 shadow-sm mx-auto mb-3 border-2 border-white">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">{testimonials[activeIndex].name}</h4>
                  {/* <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">{testimonials[activeIndex].role}</p> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm active:scale-95"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === activeIndex ? "bg-primary w-6" : "bg-slate-200 w-1.5"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm active:scale-95"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
