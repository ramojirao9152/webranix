import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
