import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FullPortfolio from "@/components/sections/FullPortfolio";

export const metadata = {
  title: "Portfolio | WEBRANIX",
  description: "View our portfolio of premium digital projects and success stories.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="bg-slate-50 py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-8">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Selected Case Studies</span>
            <h1 className="text-[52px] leading-[1.1] tracking-[-0.04em] font-[900] text-slate-900 mb-6">
              Moments of <span className="text-primary">Impact</span>
            </h1>
            <p className="text-[18px] leading-[1.6] tracking-[-0.01em] font-[400] text-secondary max-w-3xl">
              A curated archive of our most ambitious digital transformations. Each project represents a unique blend of technical mastery and strategic innovation designed for market disruption.
            </p>
          </div>
        </div>
        <FullPortfolio />
      </main>
      <Footer />
    </>
  );
}
