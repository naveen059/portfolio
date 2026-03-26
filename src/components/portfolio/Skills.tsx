import GSAPReveal from "./GSAPReveal";
import TextReveal from "./TextReveal";
import VectorDecoration from "./VectorDecoration";
import { getTechLogo } from "./TechIcons";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Globe, Server, Cloud, GitBranch, Database, Zap, Gauge, Rocket, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    label: "Languages",
    icon: Code2,
    accent: "158 64% 40%",
    skills: ["Python", "JavaScript (ES6+)", "PHP", "Java", "SQL", "Bash", "C", "C++"],
  },
  {
    label: "Frontend",
    icon: Globe,
    accent: "200 80% 50%",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery", "AJAX", "Responsive Design"],
  },
  {
    label: "Backend",
    icon: Server,
    accent: "280 70% 55%",
    skills: ["Django", "Django REST Framework", "REST APIs", "Spring Boot", "Flask", "FastAPI"],
  },
  {
    label: "Cloud",
    icon: Cloud,
    accent: "35 90% 55%",
    skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS Lambda", "AWS Lex", "AWS CloudWatch", "Azure (AZ-900)"],
  },
  {
    label: "DevOps & Tools",
    icon: GitBranch,
    accent: "340 75% 55%",
    skills: ["Jenkins", "Docker", "CI/CD Pipelines", "Git", "GitHub", "GitLab", "Postman", "REST API Testing"],
  },
  {
    label: "Databases & Systems",
    icon: Database,
    accent: "290 65% 55%",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Linux", "UNIX", "Ubuntu", "Shell Scripting"],
  },
];

const stats = [
  { value: "2+", label: "Years Experience", icon: Zap },
  { value: "60%", label: "Manual Effort Cut", icon: Rocket },
  { value: "40%", label: "Faster Delivery", icon: Gauge },
  { value: "85%+", label: "Completion Rate", icon: Trophy },
];

const Skills = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    if (!statsRef.current) return;
    const items = statsRef.current.querySelectorAll(".stat-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: statsRef.current, start: "top 85%", once: true },
      }
    );

    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll(".category-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", once: true },
        }
      );
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const tiles = document.querySelectorAll(".skill-tile-active");
    if (tiles.length > 0) {
      gsap.fromTo(
        tiles,
        { opacity: 0, scale: 0.82, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.52, stagger: 0.05, ease: "back.out(1.7)" }
      );
    }
  }, [activeCategory]);

  const activeCat = skillCategories[activeCategory];
  const ActiveIcon = activeCat.icon;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-20 left-10 hidden md:block">
        <VectorDecoration variant="circle" />
      </div>
      <div className="absolute top-20 right-20 hidden lg:block">
        <VectorDecoration variant="dots" />
      </div>

      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[radial-gradient(circle,hsl(200_85%_55%/0.12),transparent_62%)] blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto mb-16 relative">
        <GSAPReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">Technical Skills</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </GSAPReveal>

        <TextReveal
          text="Technologies I work with"
          tag="h2"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6"
        />

        <GSAPReveal delay={0.3}>
          <p className="text-muted-foreground max-w-xl mb-16">
            Skills grouped directly from the resume across languages, frontend, backend, cloud, DevOps, databases,
            and operating systems.
          </p>
        </GSAPReveal>
      </div>

      <div ref={gridRef} className="max-w-6xl mx-auto mb-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            const isActive = activeCategory === i;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`category-card flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-[11px] uppercase tracking-wider transition-all duration-500 cursor-pointer border ${
                  isActive ? "text-foreground scale-105" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, hsl(${cat.accent} / 0.15), hsl(${cat.accent} / 0.05))`
                    : "hsl(var(--muted) / 0.3)",
                  borderColor: isActive ? `hsl(${cat.accent} / 0.4)` : "hsl(var(--border) / 0.5)",
                  boxShadow: isActive
                    ? `0 4px 20px hsl(${cat.accent} / 0.15), inset 0 1px 0 hsl(${cat.accent} / 0.1)`
                    : "none",
                }}
              >
                <Icon size={14} style={{ color: isActive ? `hsl(${cat.accent})` : undefined }} />
                <span>{cat.label}</span>
                <span
                  className="ml-1 px-1.5 py-0.5 rounded-md text-[9px]"
                  style={{
                    background: isActive ? `hsl(${cat.accent} / 0.2)` : "hsl(var(--muted) / 0.5)",
                    color: isActive ? `hsl(${cat.accent})` : undefined,
                  }}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="rounded-3xl p-8 md:p-10 relative overflow-hidden"
          style={{
            background: `linear-gradient(145deg, hsl(${activeCat.accent} / 0.08), hsl(var(--background) / 0.78))`,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid hsl(${activeCat.accent} / 0.18)`,
            boxShadow: `0 8px 40px hsl(${activeCat.accent} / 0.1), inset 0 1px 0 hsl(${activeCat.accent} / 0.1)`,
          }}
        >
          <div
            className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: `hsl(${activeCat.accent})` }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: `hsl(${activeCat.accent})` }}
          />

          <div className="flex items-center gap-3 mb-8 relative">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: `hsl(${activeCat.accent} / 0.16)`,
                border: `1px solid hsl(${activeCat.accent} / 0.25)`,
              }}
            >
              <ActiveIcon size={20} style={{ color: `hsl(${activeCat.accent})` }} />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight">{activeCat.label}</h3>
              <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                {activeCat.skills.length} technologies
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 relative">
            {activeCat.skills.map((skill) => {
              const logo = getTechLogo(skill);
              const isHovered = hoveredSkill === skill;
              return (
                <div
                  key={skill}
                  className="skill-tile-active group relative flex items-center gap-3 p-4 rounded-2xl cursor-default transition-all duration-400"
                  style={{
                    background: isHovered ? `hsl(${activeCat.accent} / 0.12)` : "hsl(var(--background) / 0.58)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: isHovered
                      ? `1px solid hsl(${activeCat.accent} / 0.35)`
                      : "1px solid hsl(var(--border) / 0.4)",
                    boxShadow: isHovered
                      ? `0 8px 24px hsl(${activeCat.accent} / 0.12), inset 0 1px 0 hsl(${activeCat.accent} / 0.08)`
                      : "0 2px 8px hsl(var(--foreground) / 0.03), inset 0 1px 0 hsl(var(--background) / 0.5)",
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-400"
                    style={{
                      background: isHovered ? `hsl(${activeCat.accent} / 0.16)` : "hsl(var(--muted) / 0.4)",
                      border: `1px solid ${isHovered ? `hsl(${activeCat.accent} / 0.22)` : "hsl(var(--border) / 0.3)"}`,
                    }}
                  >
                    {logo ? (
                      <img
                        src={logo.url}
                        alt={logo.name}
                        width={24}
                        height={24}
                        className={`drop-shadow-sm transition-transform duration-400 ${isHovered ? "scale-110" : ""}`}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded bg-primary/20" />
                    )}
                  </div>
                  <span
                    className={`font-medium text-sm tracking-tight transition-colors duration-300 ${
                      isHovered ? "text-foreground" : "text-foreground/80"
                    }`}
                  >
                    {skill}
                  </span>
                  {isHovered && (
                    <div
                      className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full"
                      style={{ background: `hsl(${activeCat.accent})` }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stat-item glass-panel p-8 md:p-10 text-center rounded-2xl group hover:scale-[1.03] transition-all duration-500"
              >
                <div className="mb-3 flex justify-center opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 font-mono">{stat.value}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
