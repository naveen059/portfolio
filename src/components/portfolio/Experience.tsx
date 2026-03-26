import GSAPReveal from "./GSAPReveal";
import TextReveal from "./TextReveal";
import VectorDecoration from "./VectorDecoration";
import { Briefcase, GraduationCap, Code, BrainCircuit } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Software Developer",
    company: "Ninestars Information Technology, Bangalore",
    period: "Mar 2025 - Present",
    description:
      "Engineered end-to-end automation pipelines using Python and JavaScript, produced responsive HTML email templates and banner ads, integrated workflows into Jenkins CI/CD, and reduced manual effort by 60%.",
    tags: ["Python", "JavaScript", "Jenkins", "Linux"],
    icon: Code,
    accentColor: "158 64% 48%",
  },
  {
    role: "Technical Trainer - Software Development and Data Science",
    company: "Siva Academy, Bangalore",
    period: "Nov 2024 - Mar 2025",
    description:
      "Delivered full-stack training in Python, React.js, REST APIs, and Git to 20+ students, mentoring them through end-to-end projects with an 85%+ completion rate.",
    tags: ["Python", "React.js", "REST APIs", "Git"],
    icon: GraduationCap,
    accentColor: "280 60% 55%",
  },
  {
    role: "Junior Software Developer",
    company: "Lumos Learning, Bangalore",
    period: "Jun 2023 - Jan 2024",
    description:
      "Developed PHP-based platform features, built REST APIs and Python scripts, improved front-end responsiveness with jQuery and Bootstrap, and supported AWS Lex, Lambda, and CloudWatch integrations.",
    tags: ["PHP", "REST APIs", "Python", "AWS"],
    icon: Briefcase,
    accentColor: "200 75% 55%",
  },
  {
    role: "Data Science and Machine Learning Intern",
    company: "Gilbert Research Center, Bangalore",
    period: "Aug 2024 - Dec 2024",
    description:
      "Constructed and evaluated ML models in Python using pandas, NumPy, and scikit-learn, while streamlining preprocessing pipelines by approximately 40%.",
    tags: ["Python", "pandas", "NumPy", "scikit-learn"],
    icon: BrainCircuit,
    accentColor: "35 85% 55%",
  },
  {
    role: "Research and Development Intern",
    company: "Lumos Learning, Bangalore",
    period: "Feb 2023 - May 2023",
    description:
      "Improved UI performance across 3+ modules, reduced average page load time by approximately 25%, and supported backend feature development across 2 release cycles.",
    tags: ["UI Performance", "Backend", "SDLC"],
    icon: Briefcase,
    accentColor: "158 64% 48%",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const rows = gsap.utils.toArray<HTMLElement>(".exp-row");
    rows.forEach((row) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 44, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 88%", once: true },
        }
      );
    });

    const line = sectionRef.current?.querySelector(".timeline-line") as HTMLElement;
    if (line) {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.35,
          ease: "power2.out",
          scrollTrigger: { trigger: line, start: "top 85%", once: true },
        }
      );
    }

    const dots = gsap.utils.toArray<HTMLElement>(".timeline-icon");
    dots.forEach((dot, i) => {
      gsap.fromTo(
        dot,
        { scale: 0.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          delay: i * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: dot, start: "top 90%", once: true },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-padding section-dark relative overflow-hidden">
      <div className="absolute top-24 left-10 hidden md:block opacity-60">
        <VectorDecoration variant="dots" />
      </div>
      <div className="absolute bottom-24 right-10 hidden md:block opacity-60">
        <VectorDecoration variant="wave" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <GSAPReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] tracking-[0.3em] uppercase" style={{ color: "hsl(158 64% 48%)" }}>
              Experience
            </span>
            <div className="flex-1 h-px" style={{ background: "hsl(228 14% 18%)" }} />
          </div>
        </GSAPReveal>

        <TextReveal
          text="Where I've worked and what I've delivered"
          tag="h2"
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-16 md:mb-20"
        />

        <div className="relative">
          <div
            className="timeline-line absolute left-5 md:left-[258px] top-0 bottom-0 w-px origin-top"
            style={{ background: "linear-gradient(to bottom, hsl(158 64% 48% / 0.42), hsl(228 14% 18%))" }}
          />

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp) => {
              const IconComp = exp.icon;
              return (
                <article key={`${exp.role}-${exp.period}`} className="exp-row relative pl-14 md:pl-0">
                  <div className="timeline-icon absolute left-0 md:left-[238px] top-6 w-10 h-10 rounded-xl border-2 flex items-center justify-center z-10"
                    style={{
                      borderColor: `hsl(${exp.accentColor})`,
                      background: "hsl(228 22% 10%)",
                    }}
                  >
                    <IconComp size={16} style={{ color: `hsl(${exp.accentColor})` }} />
                  </div>

                  <div className="md:grid md:grid-cols-[230px_1fr] md:gap-14">
                    <div className="mb-4 md:mb-0 md:pt-1 md:pr-2">
                      <p className="font-mono text-[11px] uppercase tracking-widest mb-2" style={{ color: "hsl(228 10% 43%)" }}>
                        {exp.period}
                      </p>
                      <p className="text-sm leading-6 max-w-[220px]" style={{ color: "hsl(228 10% 36%)" }}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="glass-card rounded-2xl md:rounded-3xl p-5 md:p-7 border border-white/10">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: `hsl(${exp.accentColor})` }} />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-white/65">Role Snapshot</span>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm leading-relaxed mb-5 max-w-2xl" style={{ color: "hsl(228 10% 62%)" }}>
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border transition-colors duration-300"
                            style={{ borderColor: "hsl(228 14% 22%)", color: "hsl(228 10% 64%)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
