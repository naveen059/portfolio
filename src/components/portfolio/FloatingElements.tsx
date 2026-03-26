import { useEffect, useRef } from "react";
import gsap from "gsap";

// Animated floating code snippet
export const FloatingCode = ({ className }: { className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      y: -12,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div ref={ref} className={`font-mono text-[10px] leading-relaxed select-none ${className}`}>
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-destructive/60" />
          <span className="w-2 h-2 rounded-full bg-amber-400/60" />
          <span className="w-2 h-2 rounded-full bg-primary/60" />
        </div>
        <div className="space-y-1">
          <span className="text-primary/70">const</span>{" "}
          <span className="text-foreground/80">portfolio</span>{" "}
          <span className="text-primary/70">=</span>{" "}
          <span className="text-amber-500/70">{"{"}</span>
          <div className="pl-3">
            <span className="text-foreground/60">passion</span>
            <span className="text-primary/50">:</span>{" "}
            <span className="text-primary/70">"∞"</span>,
          </div>
          <div className="pl-3">
            <span className="text-foreground/60">coffee</span>
            <span className="text-primary/50">:</span>{" "}
            <span className="text-primary/70">true</span>
          </div>
          <span className="text-amber-500/70">{"}"}</span>
        </div>
      </div>
    </div>
  );
};

// Animated geometric shape
export const AnimatedHexagon = ({ className, delay = 0 }: { className?: string; delay?: number }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { rotation: 0, scale: 0.9 },
      { rotation: 360, scale: 1, duration: 25, ease: "none", repeat: -1, delay }
    );
  }, [delay]);

  return (
    <svg ref={ref} width="80" height="80" viewBox="0 0 80 80" fill="none" className={className}>
      <polygon
        points="40,5 70,20 70,55 40,75 10,55 10,20"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      <polygon
        points="40,15 58,25 58,50 40,65 22,50 22,25"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  );
};

// Pulsing connection lines
export const ConnectionLines = ({ className }: { className?: string }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const paths = ref.current.querySelectorAll("path");
    paths.forEach((path, i) => {
      gsap.fromTo(
        path,
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 3 + i * 0.5,
          ease: "none",
          repeat: -1,
        }
      );
    });
  }, []);

  return (
    <svg ref={ref} width="200" height="200" viewBox="0 0 200 200" fill="none" className={className}>
      <path d="M20 100 Q60 40 100 100 T180 100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 4" />
      <path d="M20 120 Q60 60 100 120 T180 120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 6" />
      <path d="M20 80 Q60 20 100 80 T180 80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" />
      <circle cx="100" cy="100" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="50" cy="80" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="150" cy="110" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
};

// Animated DNA helix decoration
export const DNAHelix = ({ className }: { className?: string }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const circles = ref.current.querySelectorAll("circle");
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        attr: { r: 2 + Math.random() * 1.5 },
        opacity: 0.3 + Math.random() * 0.5,
        duration: 1.5 + Math.random(),
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: i * 0.15,
      });
    });
  }, []);

  return (
    <svg ref={ref} width="40" height="300" viewBox="0 0 40 300" fill="none" className={className}>
      {Array.from({ length: 15 }, (_, i) => {
        const y = 10 + i * 20;
        const x1 = 10 + Math.sin(i * 0.8) * 8;
        const x2 = 30 - Math.sin(i * 0.8) * 8;
        return (
          <g key={i}>
            <circle cx={x1} cy={y} r="2" fill="currentColor" />
            <circle cx={x2} cy={y} r="2" fill="currentColor" />
            <line x1={x1} y1={y} x2={x2} y2={y} stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          </g>
        );
      })}
    </svg>
  );
};

// Orbiting dots
export const OrbitingDots = ({ className, radius = 60 }: { className?: string; radius?: number }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const dots = ref.current.querySelectorAll(".orbit-dot");
    dots.forEach((dot, i) => {
      gsap.to(dot, {
        motionPath: {
          path: `M${radius},0 A${radius},${radius} 0 1,1 ${radius - 0.01},0`,
          align: "self",
          autoRotate: false,
        },
        duration: 6 + i * 2,
        ease: "none",
        repeat: -1,
        delay: i * 1.5,
      });
    });
  }, [radius]);

  const size = radius * 2 + 20;
  const center = size / 2;

  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={className}>
      <circle cx={center} cy={center} r={radius} stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
      <circle cx={center} cy={center} r={radius * 0.6} stroke="currentColor" strokeWidth="0.3" opacity="0.15" />
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          className="orbit-dot"
          cx={center + radius * Math.cos(i * 2.1)}
          cy={center + radius * Math.sin(i * 2.1)}
          r="3"
          fill="currentColor"
          opacity="0.5"
        />
      ))}
    </svg>
  );
};
