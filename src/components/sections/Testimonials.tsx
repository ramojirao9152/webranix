"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "CEO at NexaTech",
    content: "WEBRANIX transformed our banking platform into a modern masterpiece. Their technical prowess is unmatched in the industry.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director at LuxStore",
    content: "The ROI we've seen since launching our new marketplace is incredible. They delivered the best output at an unbeatable cost.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "David Park",
    role: "Founder of Lumina Health",
    content: "Working with the WEBRANIX team felt like having a true partner. They understood our mission and built a portal that our patients love.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200"
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
