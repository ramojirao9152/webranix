import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-12">

        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-3">
            <Image src="/images/webranix_logo.png" alt="WEBRANIX Logo" width={40} height={40} className="object-cover rounded-full" />
            <span className="text-lg font-bold text-slate-900 uppercase tracking-widest">WEBRANIX</span>
          </div>
          <p className="text-[16px] leading-[1.6] font-[400] text-slate-500">
            A digital agency focused on craftsmanship, performance, and strategic innovation.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link href="https://www.instagram.com/webranix?igsh=enAxZjRzaHVxOXI5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </Link>
            <Link href="/" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </Link>
            <Link href="/" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </Link>
            <Link href="/" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-primary hover:border-primary transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h4 className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-slate-900 uppercase">Agency</h4>
            <ul className="space-y-2">
              <li><Link href="/portfolio" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Work</Link></li>
              <li><Link href="/services" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/about" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Process</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-slate-900 uppercase">Platform</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Insights</Link></li>
              <li><Link href="mailto:careers@webranix.com" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-slate-900 uppercase">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/about" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">Legal</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[14px] leading-[1.2] tracking-[0.05em] font-[700] text-slate-900 uppercase">Contact</h4>
            <ul className="space-y-2">
              <li><Link href="mailto:webranix@gmail.com" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">webranix@gmail.com</Link></li>
              <li><Link href="tel:+919550073982" className="font-inter text-xs uppercase tracking-widest text-slate-500 hover:text-primary transition-colors">+91 9550073982</Link></li>
            </ul>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 text-center md:text-left">
        <p className="font-inter text-xs uppercase tracking-widest text-slate-500">
          © 2024 WEBRANIX. Engineered for velocity.
        </p>
      </div>
    </footer>
  );
}
