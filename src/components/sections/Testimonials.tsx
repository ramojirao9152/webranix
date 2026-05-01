"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sai Kiran Reddy",
    role: "Founder at PixelShade",
    content: "WEBRANIX completely transformed our platform into a modern, scalable system. Their technical expertise and execution are outstanding.",
    rating: 5,
    avatar: "/images/testimonial1.png"
  },
  {
    name: "Sravani Lakshmi",
    role: "Founder of Shreya Dental",
    content: "After launching our new e-commerce platform, our conversions increased significantly. Best quality work at a very competitive price.",
    rating: 5,
    avatar: "/images/testimonial2.png"
  },
  {
    name: "Venkatesh Naidu",
    role: "Founder of Srih Skin Clinic",
    content: "The WEBRANIX team truly understood our vision and delivered beyond expectations. Our users love the experience now.",
    rating: 5,
    avatar: "/images/testimonial3.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-[36px] font-bold text-slate-900 mb-6">What Our Clients Say</h2>
          <p className="text-secondary max-w-xl mx-auto">
            Don't just take our word for it. Hear from the visionary leaders who have partnered with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 p-10 rounded-[40px] border border-slate-100 relative group hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#E44D55" className="text-primary" />
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
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
