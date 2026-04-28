import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-12">
        
        <div className="space-y-6 max-w-sm">
          <div className="text-lg font-bold text-slate-900 uppercase tracking-widest">
            WEBRANIX
          </div>
          <p className="text-[16px] leading-[1.6] font-[400] text-slate-500">
            A digital agency focused on craftsmanship, performance, and strategic innovation.
          </p>
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
