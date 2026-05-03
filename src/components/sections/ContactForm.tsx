"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify({
      ...object,
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
    });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();
      setStatus("idle");
      if (result.success) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">

          <div>
            <h2 className="text-[28px] md:text-[36px] font-bold text-slate-900 mb-6 md:mb-8">Let’s Build Something Amazing</h2>
            <p className="text-secondary text-base md:text-lg mb-8 md:mb-12">
              Ready to start your digital transformation? Fill out the form or reach out directly via the channels below.
            </p>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Email</span>
                  <span className="text-base md:text-lg font-bold text-slate-900">webranix@gmail.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Phone</span>
                  <span className="text-base md:text-lg font-bold text-slate-900">+91 9550073982</span>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <span className="block text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest">Office</span>
                  <span className="text-base md:text-lg font-bold text-slate-900">Hyderabad</span>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 md:p-10 rounded-3xl md:rounded-[40px] shadow-sm border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input name="name" required type="text" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Enter Your Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input name="email" required type="email" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Enter Your Email Address" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Project Type</label>
                <select name="project_type" defaultValue="" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-white text-slate-700 font-medium cursor-pointer shadow-sm hover:border-slate-300">
                  <option value="" disabled>Select Project Type</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Your Message</label>
                <textarea name="message" required rows={4} className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>

              <button disabled={status === "loading"} className="w-full bg-primary text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100">
                {status === "loading" ? "Sending..." : <>Send Message <Send size={20} /></>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
