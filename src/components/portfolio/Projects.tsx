import GSAPReveal from "./GSAPReveal";
import TextReveal from "./TextReveal";
import VectorDecoration from "./VectorDecoration";
import Magnetic from "./Magnetic";
import { getTechLogo } from "./TechIcons";
import { ExternalLink, Github, ShieldCheck, ScanFace, HeartHandshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Creative Automation Pipeline",
    subtitle: "Marketing Creative Generation",
    description:
      "Built automation workflows using Python and JavaScript to generate high-volume marketing creatives, responsive HTML5 banners, and validation checks that reduced manual effort by 60%.",
    tags: ["Python", "JavaScript", "HTML5", "Jenkins", "Linux"],
    number: "01",
    accentColor: "158 64% 48%",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Creative Automation",
    repoUrl: "https://github.com/naveen059/nano-banana-vision",
    demoUrl: "",
  },
  {
    title: "AI-Based Attendance Monitoring System",
    subtitle: "Face Recognition Attendance",
    description:
      "Built a real-time face recognition attendance system using Django and OpenCV, automating check-ins for 100+ employees and eliminating manual tracking.",
    tags: ["Python", "Django", "OpenCV", "REST API", "Linux"],
    number: "02",
    accentColor: "35 85% 55%",
    icon: ScanFace,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    category: "AI / Automation",
    repoUrl: "https://github.com/naveen059/attandance-server",
    demoUrl: "",
  },
  {
    title: "TrustNGO",
    subtitle: "Transparent Donation Platform",
    description:
      "Developed a blockchain-backed platform using React.js and Node.js with smart contracts for tamper-proof fund tracking across 5+ NGO partners.",
    tags: ["React.js", "Node.js", "Blockchain", "REST API"],
    number: "03",
    accentColor: "280 60% 55%",
    icon: HeartHandshake,
    image: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=600&h=400&fit=crop",
    category: "Full-Stack App",
    repoUrl: "https://github.com/naveen059/TrustNGo/",
    demoUrl: "",
  },
  {
    title: "Healthcare Data Management System",
    subtitle: "Secure Backend Platform",
    description:
      "Built a Django backend for secure patient record management with access control, data validation, and error handling while improving database performance by 35%.",
    tags: ["Python", "Django", "PostgreSQL", "REST API"],
    number: "04",
    accentColor: "200 75% 55%",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
    category: "Backend Engineering",
    repoUrl: "https://github.com/naveen059/",
    demoUrl: "",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const IconComp = project.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 6;
    const rotateX = (0.5 - y) * 6;
    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 1100,
      duration: 0.45,
      ease: "power2.out",
    });
  };

  const resetTilt = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.55, ease: "power3.out" });
  };

  return (
    <div
      ref={cardRef}
      className="project-card group relative rounded-3xl overflow-hidden transition-all duration-700"
      style={{
        background: isHovered
          ? `linear-gradient(145deg, hsl(${project.accentColor} / 0.08), rgba(255,255,255,0.04))`
          : "rgba(255,255,255,0.03)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: isHovered
          ? `1px solid hsl(${project.accentColor} / 0.25)`
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isHovered
          ? `0 20px 60px hsl(${project.accentColor} / 0.12), inset 0 1px 0 rgba(255,255,255,0.08)`
          : "0 4px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
        transform: isHovered ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsHovered(false);
        resetTilt();
      }}
    >
      <div className="relative h-52 md:h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `linear-gradient(180deg, transparent 0%, hsl(${project.accentColor} / 0.1) 40%, hsl(228 22% 8% / 0.95) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(${project.accentColor} / 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, hsl(${project.accentColor} / 0.1) 0%, transparent 40%)`,
          }}
        />

        <div
          className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
          style={{
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
            border: `1px solid hsl(${project.accentColor} / 0.3)`,
          }}
        >
          <IconComp size={12} style={{ color: `hsl(${project.accentColor})` }} />
          <span className="font-mono text-[9px] uppercase tracking-widest" style={{ color: `hsl(${project.accentColor})` }}>
            {project.category}
          </span>
        </div>

        <span
          className="absolute top-4 right-5 font-mono text-7xl md:text-8xl font-bold select-none leading-none transition-all duration-700"
          style={{
            color: `hsl(${project.accentColor})`,
            opacity: isHovered ? 0.25 : 0.1,
            transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {project.number}
        </span>

        <div className="absolute bottom-0 left-0 right-0 h-8 bg-[linear-gradient(180deg,transparent,hsl(228_22%_8%/0.75))] pointer-events-none" />
        <div className="absolute left-4 bottom-3 flex items-center gap-2 pointer-events-none">
          <span className="font-mono text-[9px] uppercase tracking-widest text-white/60">Impact</span>
          <div className="w-24 h-1 rounded-full bg-white/15 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: isHovered ? "100%" : "65%",
                background: `linear-gradient(90deg, hsl(${project.accentColor}), hsl(${project.accentColor} / 0.55))`,
              }}
            />
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
          <Magnetic strength={0.3}>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all active:scale-95 hover:scale-110"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              <Github size={14} />
            </a>
          </Magnetic>
          <Magnetic strength={0.3}>
            <a
              href={project.demoUrl || project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all active:scale-95 hover:scale-110"
              style={{
                background: `hsl(${project.accentColor} / 0.25)`,
                backdropFilter: "blur(12px)",
                border: `1px solid hsl(${project.accentColor} / 0.4)`,
                color: "white",
              }}
              title={project.demoUrl ? "Open live project" : "Open repository"}
            >
              <ExternalLink size={14} />
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="p-6 md:p-8 relative z-10">
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: `hsl(${project.accentColor})` }} />
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-2 h-2 rounded-full transition-all duration-500"
            style={{
              background: `hsl(${project.accentColor})`,
              boxShadow: isHovered ? `0 0 8px hsl(${project.accentColor} / 0.5)` : "none",
            }}
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: `hsl(${project.accentColor})` }}>
            {project.subtitle}
          </span>
        </div>
        <h3
          className="text-2xl md:text-3xl font-bold tracking-tight mb-3 transition-colors duration-500"
          style={{ color: isHovered ? `hsl(${project.accentColor})` : "hsl(48 20% 92%)" }}
        >
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "hsl(228 10% 50%)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => {
            const logo = getTechLogo(tag);
            return (
              <div
                key={tag}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {logo && <img src={logo.url} alt={tag} width={14} height={14} loading="lazy" className="drop-shadow-sm" />}
                <span className="font-mono text-[10px] uppercase tracking-wider" style={{ color: "hsl(228 10% 55%)" }}>
                  {tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(ellipse at 50% 0%, hsl(${project.accentColor} / 0.06) 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100, rotateX: -8, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          delay: i * 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: card, start: "top 92%", once: true },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding section-dark relative overflow-hidden">
      <div className="absolute top-16 right-10 hidden md:block opacity-60">
        <VectorDecoration variant="grid" />
      </div>
      <div className="absolute bottom-16 left-8 hidden lg:block opacity-40">
        <VectorDecoration variant="wave" />
      </div>
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] rounded-full bg-[radial-gradient(circle,hsl(158_64%_48%/0.14),transparent_62%)] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-8 w-72 h-72 rounded-full bg-[radial-gradient(circle,hsl(35_85%_55%/0.12),transparent_62%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <GSAPReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: "hsl(158 64% 48%)" }}>
              Projects
            </span>
            <div className="flex-1 h-px" style={{ background: "hsl(228 14% 18%)" }} />
          </div>
        </GSAPReveal>

        <TextReveal
          text="Projects from the resume"
          tag="h2"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-20"
        />

        <GSAPReveal delay={0.2}>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-12">
            A curated mix of backend systems, automation pipelines, and full-stack products shipped with a focus on
            measurable impact, reliability, and user experience.
          </p>
        </GSAPReveal>

        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: "1200px" }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
