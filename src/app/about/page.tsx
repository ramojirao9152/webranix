import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/AboutHero";
import Team from "@/components/sections/Team";
import ContactForm from "@/components/sections/ContactForm";

export const metadata = {
  title: "About Us | WEBRANIX",
  description: "Learn about our mission, our team, and our commitment to digital excellence.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <Team />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
