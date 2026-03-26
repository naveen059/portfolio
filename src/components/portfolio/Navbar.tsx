import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Magnetic from "./Magnetic";

const links = [
  { label: "Projects", href: "#projects", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Experience", href: "#experience", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#projects");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" });

    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const sections = links
      .map((link) => document.querySelector(link.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));

    const setFromHash = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", setFromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3" : "bg-background/35 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10">
        <Magnetic>
          <a href="#" className="font-bold text-2xl tracking-tighter text-foreground flex items-center gap-2">
            N<span className="text-primary">.</span>KM
            <span className="hidden md:inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-primary">
              Available
            </span>
          </a>
        </Magnetic>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Magnetic key={l.href} strength={0.15}>
              <a
                href={l.href}
                className={`relative rounded-full font-mono text-[11px] uppercase tracking-widest px-4 py-2 transition-colors duration-300 group hover:bg-muted/55 ${
                  activeHref === l.href ? "text-foreground bg-muted/70" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-primary/50 mr-1">{l.num}</span>
                {l.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-px bg-primary transition-transform duration-300 origin-left ${
                    activeHref === l.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            </Magnetic>
          ))}
        </div>

        <Magnetic>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest border border-primary/30 text-primary px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground active:scale-95 transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Let's Talk
          </a>
        </Magnetic>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground active:scale-95 transition-transform">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 pb-8 pt-3 rounded-b-2xl shadow-2xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-border/30"
            >
              <span className="text-primary mr-3">{l.num}</span>{l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
