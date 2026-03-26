import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
  XCircle,
} from "lucide-react";
import GSAPReveal from "./GSAPReveal";
import TextReveal from "./TextReveal";
import Magnetic from "./Magnetic";
import VectorDecoration from "./VectorDecoration";
import { AnimatedHexagon } from "./FloatingElements";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ?? "https://formsubmit.co/ajax/naveenkmacharya@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
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
      paths.forEach((path, i) => {
        gsap.fromTo(
          path,
          { strokeDashoffset: 220, opacity: 0 },
          {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3 + i * 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: illustrationRef.current, start: "top 85%", once: true },
          }
        );
      });
    }

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const openMailClientFallback = () => {
    const subject = encodeURIComponent(`Portfolio message from ${formData.name.trim() || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:naveenkmacharya@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setFeedback("Please fill in your name, email, and message.");
      return;
    }

    try {
      setStatus("sending");
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: `Portfolio message from ${formData.name.trim()}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setFeedback("Message sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setFeedback("Unable to send right now. Opening your email app as fallback.");
      openMailClientFallback();
    }
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

      <div className="max-w-6xl mx-auto relative">
        <GSAPReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[11px] text-primary tracking-[0.3em] uppercase">Contact</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </GSAPReveal>

        <div className="grid md:grid-cols-2 gap-16 md:gap-14">
          <div>
            <TextReveal
              text="Let's build something that feels world-class."
              tag="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 leading-[1.1]"
            />

            <GSAPReveal delay={0.25}>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                I build full-stack products, backend systems, and automation flows. If you are hiring or planning
                a project, share details and I will respond quickly.
              </p>
            </GSAPReveal>

            <GSAPReveal delay={0.2}>
              <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-card/80 to-secondary/40 p-5 mb-8">
                <svg
                  ref={illustrationRef}
                  width="100%"
                  height="170"
                  viewBox="0 0 360 170"
                  fill="none"
                  className="text-primary/40"
                >
                  <rect
                    x="24"
                    y="26"
                    width="312"
                    height="118"
                    rx="14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="envelope-line"
                    strokeDasharray="260"
                  />
                  <path
                    d="M24 44L180 100L336 44"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="envelope-line"
                    strokeDasharray="260"
                  />
                  <path
                    d="M24 130L126 82"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    className="envelope-line"
                    strokeDasharray="120"
                  />
                  <path
                    d="M336 130L234 82"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    className="envelope-line"
                    strokeDasharray="120"
                  />
                  <rect
                    x="264"
                    y="12"
                    width="76"
                    height="26"
                    rx="13"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="envelope-line"
                    strokeDasharray="110"
                  />
                  <path
                    d="M276 25H328"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="envelope-line"
                    strokeDasharray="70"
                  />
                  <path
                    d="M40 122H98"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="envelope-line"
                    strokeDasharray="70"
                  />
                </svg>
              </div>
            </GSAPReveal>

            <GSAPReveal delay={0.35} stagger>
              <div className="grid grid-cols-2 gap-3 mb-10">
                <div className="rounded-2xl p-4 border border-border/60 bg-[radial-gradient(circle_at_20%_20%,hsl(158_64%_40%/0.20),transparent_62%),linear-gradient(145deg,hsl(var(--card)/0.9),hsl(var(--background)/0.7))]">
                  <Sparkles size={18} className="text-primary mb-3" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">UI Craft</p>
                  <p className="text-sm">Intentional layouts and polished interaction details.</p>
                </div>
                <div className="rounded-2xl p-4 border border-border/60 bg-[radial-gradient(circle_at_85%_20%,hsl(200_85%_55%/0.2),transparent_60%),linear-gradient(145deg,hsl(var(--card)/0.9),hsl(var(--background)/0.7))]">
                  <Send size={18} className="text-primary mb-3" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Fast Delivery</p>
                  <p className="text-sm">Reliable execution with strong communication.</p>
                </div>
              </div>
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

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-8 rounded-3xl border border-border/60 bg-gradient-to-br from-background/95 via-background/80 to-card/60 p-7 md:p-9 shadow-xl"
          >
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
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`${inputClass("message")} resize-none`}
              />
            </div>

            {feedback && (
              <div
                className={`form-field flex items-start gap-2 rounded-xl px-4 py-3 text-sm ${
                  status === "success"
                    ? "bg-primary/10 text-foreground border border-primary/30"
                    : "bg-destructive/10 text-foreground border border-destructive/30"
                }`}
              >
                {status === "success" ? <CheckCircle2 size={16} className="mt-0.5" /> : <XCircle size={16} className="mt-0.5" />}
                <span>{feedback}</span>
              </div>
            )}

            <div className="form-field">
              <Magnetic>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium text-sm hover:shadow-xl hover:shadow-foreground/10 active:scale-[0.97] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send size={14} className="group-hover:-rotate-12 transition-transform duration-300" />
                  {status === "sending" ? "Sending..." : "Start a Conversation"}
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
