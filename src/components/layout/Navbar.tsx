"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["none", "0 0 40px rgba(255, 122, 0, 0.05)"]
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const phoneNumber = "+919550073982";
  const message = "Hi WEBRANIX! I'd like to start a project.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.nav
      style={{ backgroundColor, backdropFilter: backdropBlur, boxShadow }}
      className="fixed top-0 w-full z-50 border-b border-white/20 transition-colors"
    >
      <div className="flex justify-between items-center h-20 px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/webranix_logo.png" alt="WEBRANIX Logo" width={40} height={40} className="object-cover rounded-full" />
          <span className="text-xl font-black tracking-widest text-slate-900">WEBRANIX</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`font-medium text-sm transition-colors ${isActive("/") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"}`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`font-medium text-sm transition-colors ${isActive("/services") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"}`}
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            className={`font-medium text-sm transition-colors ${isActive("/portfolio") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"}`}
          >
            Portfolio
          </Link>
          <Link 
            href="/about" 
            className={`font-medium text-sm transition-colors ${isActive("/about") ? "text-primary font-bold" : "text-slate-600 hover:text-primary"}`}
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/about#contact">
            <motion.button
              whileHover={{ scale: 0.95 }}
              whileTap={{ scale: 0.9 }}
              className="hidden md:block bg-primary text-white px-6 py-2 rounded-full font-button orange-bloom transition-transform duration-200"
            >
              Contact
            </motion.button>
          </Link>

          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4"
        >
          <Link 
            href="/" 
            className={`font-medium transition-colors ${isActive("/") ? "text-primary font-bold" : "text-slate-600"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`font-medium transition-colors ${isActive("/services") ? "text-primary font-bold" : "text-slate-600"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            className={`font-medium transition-colors ${isActive("/portfolio") ? "text-primary font-bold" : "text-slate-600"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/about" 
            className={`font-medium transition-colors ${isActive("/about") ? "text-primary font-bold" : "text-slate-600"}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-button mt-4 w-full">
              Start a Project
            </button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
