import GSAPReveal from "./GSAPReveal";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";
import VectorDecoration from "./VectorDecoration";
import { AnimatedHexagon } from "./FloatingElements";
import { Mail, MapPin, Phone, ArrowUpRight, Award, GraduationCap, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const illustrationRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!formRef.current) return;
    const fields = formRef.current.querySelectorAll(".form-field");
    gsap.fromTo(
      fields,
      { opacity: 0, y: 30, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 85%", once: true },
      }
    );

    if (illustrationRef.current) {
      const paths = illustrationRef.current.querySelectorAll(".envelope-line");
      paths.forEach((p, i) => {
        gsap.fromTo(
          p,
          { strokeDashoffset: 200, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3 + i * 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: illustrationRef.current, start: "top 85%", once: true },
          }
        );
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b ${
      focused === field ? "border-primary" : "border-border"
    } text-foreground text-sm py-3 placeholder:text-muted-foreground/40 focus:outline-none transition-colors duration-300`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 right-10 hidden md:block">
        <VectorDecoration variant="cross" />
      </div>
      <div className="absolute bottom-20 left-20 hidden lg:block text-primary/10">
        <AnimatedHexagon delay={2} />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <GSAPReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">Contact</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </GSAPReveal>

        <div className="grid md:grid-cols-2 gap-20 md:gap-16">
          <div>
            <TextReveal
              text="Education, achievements, and ways to connect."
              tag="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
            />

            <GSAPReveal delay={0.3}>
              <p className="text-muted-foreground text-sm leading-relaxed mb-10 max-w-sm">
                Bachelor of Engineering in Computer Science and Engineering from KS Institute of Technology,
                Bangalore, under VTU, with a CGPA of 8.66 / 10. Highlights include Smart India Hackathon 2022
                runner-up and certifications in Django, ReactJS, and Data Science.
              </p>
            </GSAPReveal>

            <GSAPReveal delay={0.2}>
              <svg ref={illustrationRef} width="180" height="120" viewBox="0 0 180 120" fill="none" className="text-primary/20 mb-10">
                <rect className="envelope-line" x="10" y="20" width="160" height="90" rx="8" stroke="currentColor" strokeWidth="1.2" strokeDasharray="200" />
                <path className="envelope-line" d="M10 25L90 70L170 25" stroke="currentColor" strokeWidth="1.2" strokeDasharray="200" />
                <circle className="envelope-line" cx="140" cy="15" r="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="80" />
                <path className="envelope-line" d="M136 15L139 18L145 12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="20" />
              </svg>
            </GSAPReveal>

            <GSAPReveal delay={0.4} stagger>
              <div className="space-y-5">
                {[
                  { icon: Mail, text: "naveenkmacharya@gmail.com", href: "mailto:naveenkmacharya@gmail.com" },
                  { icon: Phone, text: "+91 8095009620", href: "tel:+918095009620" },
                  { icon: MapPin, text: "Bangalore, India", href: "#" },
                  { icon: GraduationCap, text: "B.E. CSE | VTU | CGPA 8.66 / 10", href: "#" },
                  { icon: Award, text: "Smart India Hackathon 2022 Runner-Up", href: "#" },
                ].map(({ icon: Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span>{text}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-y-0 transition-all" />
                  </a>
                ))}
              </div>
            </GSAPReveal>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <div className="form-field">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                placeholder="Recruiter or company"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
                className={inputClass("name")}
              />
            </div>
            <div className="form-field">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                placeholder="work@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
                className={inputClass("email")}
              />
            </div>
            <div className="form-field">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Message</label>
              <textarea
                placeholder="Tell me about the role or project..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputClass("message")} resize-none`}
              />
            </div>

            <div className="form-field">
              <Magnetic>
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium text-sm hover:shadow-xl hover:shadow-foreground/10 active:scale-[0.97] transition-all duration-300"
                >
                  <Send size={14} className="group-hover:-rotate-12 transition-transform duration-300" />
                  Start a Conversation
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
