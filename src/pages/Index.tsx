import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="noise" />
      <Navbar />
      <Hero />
      {/* Dark section */}
      <Projects />
      {/* Light section */}
      <Skills />
      {/* Dark section */}
      <Experience />
      {/* Light section */}
      <Contact />
      {/* Dark footer */}
      <Footer />
    </div>
  );
};

export default Index;
