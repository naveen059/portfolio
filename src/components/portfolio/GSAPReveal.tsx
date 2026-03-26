import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  stagger?: boolean;
}

const GSAPReveal = ({ children, className, delay = 0, direction = "up", stagger = false }: GSAPRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = {
      opacity: 0,
      filter: "blur(6px)",
      y: direction === "up" ? 40 : 0,
      x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
    };

    const to: gsap.TweenVars = {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      x: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    };

    if (stagger && el.children.length > 0) {
      gsap.fromTo(el.children, from, { ...to, stagger: 0.08 });
    } else {
      gsap.fromTo(el, from, to);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [delay, direction, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default GSAPReveal;
