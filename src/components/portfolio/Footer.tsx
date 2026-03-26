import Magnetic from "./Magnetic";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    gsap.fromTo(
      footerRef.current.querySelectorAll(".footer-el"),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 95%", once: true },
      }
    );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <footer ref={footerRef} className="section-dark border-t px-6 md:px-10 py-12" style={{ borderColor: "hsl(228 14% 14%)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="footer-el flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <span className="font-bold text-3xl tracking-tighter" style={{ color: "hsl(48 20% 92%)" }}>
              N<span style={{ color: "hsl(158 64% 48%)" }}>.</span>KM
            </span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-primary/20">
              <circle cx="15" cy="15" r="12" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3">
                <animateTransform attributeName="transform" type="rotate" from="0 15 15" to="360 15 15" dur="20s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          <div className="footer-el flex items-center gap-6">
            {["Projects", "Skills", "Experience", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 hover:text-[hsl(158_64%_48%)]"
                style={{ color: "hsl(228 10% 42%)" }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="footer-el flex items-center gap-3">
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
                  className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 active:scale-95 hover:border-primary/40 hover:text-primary"
                  style={{ borderColor: "hsl(228 14% 18%)", color: "hsl(228 10% 42%)" }}
                >
                  <Icon size={14} />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="footer-el flex items-center justify-between pt-6 border-t" style={{ borderColor: "hsl(228 14% 12%)" }}>
          <span className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5" style={{ color: "hsl(228 10% 30%)" }}>
            © 2026 Naveen K M. Crafted with <Heart size={10} className="text-primary inline" /> care.
          </span>

          <Magnetic>
            <a
              href="#"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 active:scale-95"
              style={{ borderColor: "hsl(228 14% 18%)", color: "hsl(228 10% 42%)" }}
            >
              <ArrowUp size={14} />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
