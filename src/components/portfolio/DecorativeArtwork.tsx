import { useEffect, useRef } from "react";
import gsap from "gsap";

const DecorativeArtwork = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const layers = rootRef.current.querySelectorAll(".art-layer");
    layers.forEach((layer, i) => {
      gsap.to(layer, {
        y: i % 2 === 0 ? -12 : 14,
        x: i % 2 === 0 ? 8 : -10,
        duration: 7 + i * 1.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 overflow-hidden art-blend">
      <svg
        className="art-layer absolute -top-16 -left-20 w-[26rem] h-[26rem] opacity-45"
        viewBox="0 0 420 420"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="auroraA" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(170 170) rotate(90) scale(180)">
            <stop offset="0" stopColor="#22c55e" stopOpacity="0.55" />
            <stop offset="1" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="170" cy="170" r="170" fill="url(#auroraA)" />
      </svg>

      <svg
        className="art-layer absolute top-[20%] right-[-8rem] w-[30rem] h-[30rem] opacity-40"
        viewBox="0 0 480 480"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="auroraB" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(260 230) rotate(90) scale(190)">
            <stop offset="0" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="260" cy="230" r="190" fill="url(#auroraB)" />
      </svg>

      <svg
        className="art-layer absolute bottom-[-8rem] left-[28%] w-[28rem] h-[28rem] opacity-35"
        viewBox="0 0 440 440"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="auroraC" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 220) rotate(90) scale(170)">
            <stop offset="0" stopColor="#f59e0b" stopOpacity="0.45" />
            <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="220" cy="220" r="170" fill="url(#auroraC)" />
      </svg>

      <svg
        className="art-layer absolute top-[38%] left-[12%] w-[18rem] h-[18rem] opacity-50"
        viewBox="0 0 280 280"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="meshA" x1="0" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22c55e" stopOpacity="0.55" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M20 140C58 62 124 40 184 74C228 98 254 156 242 204" stroke="url(#meshA)" strokeWidth="1.3" />
        <path d="M34 208C82 250 150 252 206 220C234 204 246 186 256 156" stroke="url(#meshA)" strokeWidth="1.1" />
        <circle cx="90" cy="92" r="4" fill="#22c55e" fillOpacity="0.55" />
        <circle cx="212" cy="186" r="3.5" fill="#38bdf8" fillOpacity="0.5" />
      </svg>
    </div>
  );
};

export default DecorativeArtwork;
