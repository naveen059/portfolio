import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

const TextReveal = ({ text, className = "", tag: Tag = "h2" }: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".word");

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 30,
        rotateX: -40,
        filter: "blur(4px)",
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.04,
        ease: "power3.out",
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
  }, [text]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} style={{ perspective: "600px" }}>
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className="word inline-block mr-[0.3em]" style={{ willChange: "transform, opacity, filter" }}>
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
};

export default TextReveal;
