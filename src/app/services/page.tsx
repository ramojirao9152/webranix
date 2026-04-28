import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FullServices from "@/components/sections/FullServices";

export const metadata = {
  title: "Services | WEBRANIX",
  description: "Explore our range of premium digital services designed to scale your business.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-8">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Specialized Capabilities</span>
            <h1 className="text-[52px] leading-[1.1] tracking-[-0.04em] font-[900] text-slate-900 mb-6">
              Engineering Digital <span className="text-primary">Domination</span>
            </h1>
            <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-3xl">
              We bridge the gap between high-end digital craftsmanship and hyper-speed technical execution. WEBRANIX builds digital infrastructure that defines market leaders.
            </p>
          </div>
        </div>
        <FullServices />
      </main>
      <Footer />
    </>
  );
}
