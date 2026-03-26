import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LineRevealProps {
  children: React.ReactNode;
  className?: string;
}

const LineReveal = ({ children, className }: LineRevealProps) => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const inner = el.querySelector(".line-reveal-inner") as HTMLElement;
    if (!inner) return;

    gsap.fromTo(
      inner,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <div className="line-reveal-inner">
        {children}
      </div>
    </div>
  );
};

export default LineReveal;
