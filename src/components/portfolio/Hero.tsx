import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import Magnetic from "./Magnetic";
import VectorDecoration from "./VectorDecoration";
import { AnimatedHexagon, ConnectionLines, DNAHelix } from "./FloatingElements";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [hasProfileImage, setHasProfileImage] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      ".hero-line",
      { opacity: 0, y: 50, filter: "blur(8px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.1, ease: "power3.out" }
    );

    tl.fromTo(
      imageRef.current,
      { clipPath: "inset(100% 0 0 0)", opacity: 0 },
      { clipPath: "inset(0% 0 0 0)", opacity: 1, duration: 1.2, ease: "power4.inOut" },
      "-=0.6"
    );

    tl.fromTo(
      ".hero-decoration",
      { opacity: 0, scale: 0.6, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, stagger: 0.15, ease: "power2.out" },
      "-=0.8"
    );

    tl.fromTo(
      ".hero-social",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
      "-=0.4"
    );

    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPercent = (clientX / window.innerWidth - 0.5) * 2;
      const yPercent = (clientY / window.innerHeight - 0.5) * 2;
      gsap.to(".parallax-slow", { x: xPercent * 8, y: yPercent * 8, duration: 1.5, ease: "power2.out" });
      gsap.to(".parallax-fast", { x: xPercent * 20, y: yPercent * 20, duration: 1.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/[0.03]" />

      <div className="hero-decoration parallax-slow absolute top-16 right-8 hidden md:block text-primary/15">
        <AnimatedHexagon />
      </div>
      <div className="hero-decoration parallax-fast absolute bottom-40 left-4 hidden md:block text-primary/10">
        <VectorDecoration variant="cross" />
      </div>
      <div className="hero-decoration parallax-slow absolute top-1/4 right-1/3 hidden lg:block text-primary/10">
        <ConnectionLines />
      </div>
      <div className="hero-decoration parallax-fast absolute top-32 left-1/4 hidden lg:block text-primary/8">
        <VectorDecoration variant="dots" />
      </div>
      <div className="hero-decoration parallax-slow absolute top-20 right-[5%] hidden xl:block text-primary/12">
        <DNAHelix />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="hero-line flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
                Software Developer | Full-Stack | Backend
              </span>
            </div>

            <h1 className="hero-line text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9] mb-6">
              Naveen K M
              <br />
              <span className="text-gradient">Software Developer</span>
            </h1>

            <p className="hero-line text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
              Full-stack and backend developer with 2+ years of experience building web applications,
              automation workflows, and production-ready software.
            </p>

            <div className="hero-line flex flex-wrap gap-3 mb-10">
              {[
                { icon: Phone, text: "8095009620" },
                { icon: Mail, text: "naveenkmacharya@gmail.com" },
                { icon: MapPin, text: "Bangalore, India" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="glass-panel flex items-center gap-2 border border-border/70 px-4 py-2 rounded-full text-sm text-muted-foreground"
                >
                  <Icon size={14} className="text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="hero-line flex flex-wrap items-center gap-4 mb-12">
              <Magnetic>
                <a
                  href="#projects"
                  className="group flex items-center gap-3 bg-foreground text-background px-7 py-3.5 rounded-full font-medium text-sm hover:shadow-xl hover:shadow-foreground/10 active:scale-[0.97] transition-all duration-300"
                >
                  View Projects
                  <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/Naveen_K_M_Resume.pdf"
                  download="Naveen_K_M_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 border border-border bg-background/70 px-6 py-3.5 rounded-full font-medium text-sm text-foreground hover:border-primary/40 active:scale-[0.97] transition-all duration-300"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </Magnetic>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/naveen059" },
                { icon: Linkedin, href: "https://linkedin.com/in/naveen-k-m-130b341a6" },
                { icon: Mail, href: "mailto:naveenkmacharya@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <Magnetic key={href} strength={0.4}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-social w-10 h-10 rounded-full border border-border bg-background/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 active:scale-95 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
            <div ref={imageRef} className="relative">
              <div className="absolute -inset-6 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_left,hsl(200_90%_55%/0.18),transparent_35%),radial-gradient(circle_at_bottom_right,hsl(340_85%_60%/0.18),transparent_35%),linear-gradient(145deg,hsl(var(--primary)/0.06),transparent)] blur-2xl" />
              <div className="absolute -inset-3 rounded-3xl border border-primary/20" />
              <div className="absolute -inset-6 rounded-[2rem] border border-primary/8 hidden md:block" />
              <div className="absolute inset-6 -z-10 hidden md:block rounded-[2rem] border border-dashed border-primary/15" />

              <div className="w-64 h-72 md:w-80 md:h-96 rounded-2xl overflow-hidden bg-transparent relative shadow-2xl">
                {hasProfileImage ? (
                  <img
                    src="/profile.png"
                    alt="Naveen K M"
                    className="w-full h-full object-contain object-center relative z-10"
                    onError={() => setHasProfileImage(false)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-5xl md:text-6xl font-bold text-gradient">N</span>
                    </div>
                  </div>
                )}

              </div>

              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-background border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Open to opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hero-line">
          Scroll
        </span>
        <div className="hero-line rounded-full border border-border/60 bg-background/65 p-1.5">
          <ArrowDown size={14} className="text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
