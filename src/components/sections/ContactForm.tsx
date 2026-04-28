"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-[36px] font-bold text-slate-900 mb-8">Let’s Build Something Amazing</h2>
            <p className="text-secondary text-lg mb-12">
              Ready to start your digital transformation? Fill out the form or reach out directly via the channels below.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Email</span>
                  <span className="text-lg font-bold text-slate-900">hello@webranix.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Phone</span>
                  <span className="text-lg font-bold text-slate-900">+1 (555) 012-3456</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-400 uppercase tracking-widest">Office</span>
                  <span className="text-lg font-bold text-slate-900">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-10 rounded-[40px] shadow-sm border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Project Type</label>
                <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none bg-white">
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
