import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  variant: "blockchain" | "medical" | "marketplace" | "ai";
  className?: string;
}

const ProjectIllustration = ({ variant, className }: Props) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(".anim-el");
    els.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.1,
          ease: "power2.out",
        }
      );
    });

    // Continuous subtle animation
    const pulseEls = ref.current.querySelectorAll(".pulse-el");
    pulseEls.forEach((el, i) => {
      gsap.to(el, {
        opacity: 0.3,
        duration: 1.5 + i * 0.3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
  }, []);

  const illustrations: Record<string, JSX.Element> = {
    blockchain: (
      <svg ref={ref} width="200" height="160" viewBox="0 0 200 160" fill="none" className={className}>
        {/* Chain of blocks */}
        <rect className="anim-el" x="10" y="50" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="1.2" />
        <rect className="anim-el" x="80" y="50" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="1.2" />
        <rect className="anim-el" x="150" y="50" width="40" height="40" rx="6" stroke="currentColor" strokeWidth="1.2" />
        {/* Connection lines */}
        <line className="pulse-el" x1="50" y1="70" x2="80" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <line className="pulse-el" x1="120" y1="70" x2="150" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        {/* Hash symbols inside */}
        <text className="anim-el" x="30" y="75" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.6">#1</text>
        <text className="anim-el" x="100" y="75" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.6">#2</text>
        <text className="anim-el" x="170" y="75" textAnchor="middle" fill="currentColor" fontSize="10" fontFamily="monospace" opacity="0.6">#3</text>
        {/* Lock icons */}
        <circle className="anim-el" cx="30" y="120" r="8" stroke="currentColor" strokeWidth="0.8" opacity="0.4" cy="120" />
        <circle className="anim-el" cx="100" cy="120" r="8" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <path className="pulse-el" d="M27 118V115A3 3 0 0133 115V118" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <path className="pulse-el" d="M97 118V115A3 3 0 01103 115V118" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        {/* Network nodes */}
        <circle className="pulse-el" cx="170" cy="30" r="3" fill="currentColor" opacity="0.3" />
        <circle className="pulse-el" cx="185" cy="40" r="2" fill="currentColor" opacity="0.2" />
        <circle className="pulse-el" cx="160" cy="25" r="2" fill="currentColor" opacity="0.2" />
        <line className="pulse-el" x1="170" y1="30" x2="185" y2="40" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <line className="pulse-el" x1="170" y1="30" x2="160" y2="25" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>
    ),
    medical: (
      <svg ref={ref} width="200" height="160" viewBox="0 0 200 160" fill="none" className={className}>
        {/* Blood drop */}
        <path className="anim-el" d="M100 20Q115 55 115 75A15 15 0 0185 75Q85 55 100 20Z" stroke="currentColor" strokeWidth="1.2" />
        {/* Cross */}
        <rect className="anim-el" x="95" y="45" width="10" height="24" rx="2" fill="currentColor" opacity="0.15" />
        <rect className="anim-el" x="88" y="52" width="24" height="10" rx="2" fill="currentColor" opacity="0.15" />
        {/* Heartbeat line */}
        <polyline className="anim-el" points="20,110 50,110 60,90 70,130 80,100 90,110 130,110 140,85 150,125 160,105 170,110 195,110" stroke="currentColor" strokeWidth="1.2" fill="none" />
        {/* Connection nodes */}
        <circle className="pulse-el" cx="30" cy="40" r="4" stroke="currentColor" strokeWidth="0.8" />
        <circle className="pulse-el" cx="170" cy="40" r="4" stroke="currentColor" strokeWidth="0.8" />
        <path className="pulse-el" d="M34 40H85" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        <path className="pulse-el" d="M115 40H166" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
      </svg>
    ),
    marketplace: (
      <svg ref={ref} width="200" height="160" viewBox="0 0 200 160" fill="none" className={className}>
        {/* Storefront */}
        <rect className="anim-el" x="40" y="60" width="50" height="50" rx="4" stroke="currentColor" strokeWidth="1.2" />
        <path className="anim-el" d="M35 60L65 35L95 60" stroke="currentColor" strokeWidth="1.2" fill="none" />
        {/* Window */}
        <rect className="anim-el" x="52" y="75" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line className="anim-el" x1="59.5" y1="75" x2="59.5" y2="90" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        <line className="anim-el" x1="52" y1="82.5" x2="67" y2="82.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        {/* Arrow connecting */}
        <path className="pulse-el" d="M95 85H120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <polygon className="pulse-el" points="120,82 126,85 120,88" fill="currentColor" opacity="0.5" />
        {/* Phone/device */}
        <rect className="anim-el" x="130" y="55" width="35" height="60" rx="5" stroke="currentColor" strokeWidth="1.2" />
        <circle className="anim-el" cx="147.5" cy="108" r="2.5" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <rect className="anim-el" x="136" y="65" width="23" height="35" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        {/* Location pin */}
        <circle className="pulse-el" cx="30" cy="30" r="6" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <circle className="pulse-el" cx="30" cy="30" r="2" fill="currentColor" opacity="0.3" />
        <path className="pulse-el" d="M30 36L30 45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
    ai: (
      <svg ref={ref} width="200" height="160" viewBox="0 0 200 160" fill="none" className={className}>
        {/* Neural network */}
        {/* Input layer */}
        {[30, 55, 80, 105].map((y, i) => (
          <circle key={`i${i}`} className="anim-el" cx="30" cy={y} r="5" stroke="currentColor" strokeWidth="1" />
        ))}
        {/* Hidden layer */}
        {[40, 65, 90].map((y, i) => (
          <circle key={`h${i}`} className="anim-el" cx="100" cy={y} r="5" stroke="currentColor" strokeWidth="1" />
        ))}
        {/* Output layer */}
        {[55, 80].map((y, i) => (
          <circle key={`o${i}`} className="anim-el" cx="170" cy={y} r="5" stroke="currentColor" strokeWidth="1" />
        ))}
        {/* Connections */}
        {[30, 55, 80, 105].flatMap((iy) =>
          [40, 65, 90].map((hy, j) => (
            <line key={`c1-${iy}-${j}`} className="pulse-el" x1="35" y1={iy} x2="95" y2={hy} stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          ))
        )}
        {[40, 65, 90].flatMap((hy) =>
          [55, 80].map((oy, j) => (
            <line key={`c2-${hy}-${j}`} className="pulse-el" x1="105" y1={hy} x2="165" y2={oy} stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
          ))
        )}
        {/* Camera icon */}
        <rect className="anim-el" x="50" y="120" width="30" height="22" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <circle className="anim-el" cx="65" cy="131" r="6" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <rect className="anim-el" x="58" y="118" width="10" height="4" rx="2" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        {/* Eye/scan lines */}
        <path className="pulse-el" d="M120 130Q140 115 160 130Q140 145 120 130Z" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
        <circle className="pulse-el" cx="140" cy="130" r="4" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      </svg>
    ),
  };

  return illustrations[variant] || null;
};

export default ProjectIllustration;
