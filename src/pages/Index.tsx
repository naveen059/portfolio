import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import DecorativeArtwork from "@/components/portfolio/DecorativeArtwork";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative isolate">
      <DecorativeArtwork />
      <div className="noise" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Contact />
        <div className="section-divider" />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
