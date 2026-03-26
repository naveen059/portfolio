const VectorDecoration = ({ variant = "dots" }: { variant?: "dots" | "grid" | "circle" | "cross" | "wave" }) => {
  switch (variant) {
    case "dots":
      return (
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-primary/10">
          {Array.from({ length: 36 }, (_, i) => (
            <circle
              key={i}
              cx={10 + (i % 6) * 20}
              cy={10 + Math.floor(i / 6) * 20}
              r="2"
              fill="currentColor"
            />
          ))}
        </svg>
      );
    case "grid":
      return (
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="text-primary/8">
          {Array.from({ length: 4 }, (_, i) => (
            <g key={i}>
              <line x1={40 * (i + 1)} y1="0" x2={40 * (i + 1)} y2="160" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1={40 * (i + 1)} x2="160" y2={40 * (i + 1)} stroke="currentColor" strokeWidth="0.5" />
            </g>
          ))}
        </svg>
      );
    case "circle":
      return (
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="text-primary/10">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="currentColor" strokeWidth="0.3" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="currentColor" strokeWidth="0.3" />
        </svg>
      );
    case "cross":
      return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="text-primary/15">
          {Array.from({ length: 9 }, (_, i) => {
            const cx = 20 + (i % 3) * 30;
            const cy = 20 + Math.floor(i / 3) * 30;
            return (
              <g key={i}>
                <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke="currentColor" strokeWidth="1" />
                <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} stroke="currentColor" strokeWidth="1" />
              </g>
            );
          })}
        </svg>
      );
    case "wave":
      return (
        <svg width="300" height="60" viewBox="0 0 300 60" fill="none" className="text-primary/10">
          <path
            d="M0 30 Q25 0 50 30 T100 30 T150 30 T200 30 T250 30 T300 30"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 45 Q25 15 50 45 T100 45 T150 45 T200 45 T250 45 T300 45"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      );
  }
};

export default VectorDecoration;
