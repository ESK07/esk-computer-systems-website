const EskLogo = ({ className = "h-8 w-auto" }: { className?: string }) => (
  <svg viewBox="0 0 520 140" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="metalBase" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5fb6ff"/>
        <stop offset="25%" stopColor="#cfe9ff"/>
        <stop offset="50%" stopColor="#ffffff"/>
        <stop offset="75%" stopColor="#9aa7b3"/>
        <stop offset="100%" stopColor="#4f5962"/>
      </linearGradient>
      <linearGradient id="metalShadow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#000000" stopOpacity="0.25"/>
        <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
      </linearGradient>
      <linearGradient id="metalShine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0)"/>
        <stop offset="45%" stopColor="rgba(255,255,255,0.6)"/>
        <stop offset="55%" stopColor="rgba(255,255,255,0.6)"/>
        <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
      </linearGradient>
      <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="1.2" result="b"/>
        <feMerge>
          <feMergeNode in="b"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path d="M20 25 H135 V45 H65 V60 H120 V80 H65 V100 H135 V120 H20 Z"
          fill="url(#metalBase)" filter="url(#glowSoft)"/>
    <path d="M20 25 H135 V45 H20 Z" fill="url(#metalShadow)" opacity="0.4"/>
    <path d="M160 40 C200 15, 280 20, 280 55 C280 75, 230 80, 200 85 C170 90, 160 100, 160 110 C160 140, 260 135, 290 110"
          stroke="url(#metalBase)" strokeWidth="18" fill="none" strokeLinecap="round"/>
    <path d="M310 25 V120" stroke="url(#metalBase)" strokeWidth="18" strokeLinecap="round"/>
    <path d="M310 75 L390 25" stroke="url(#metalBase)" strokeWidth="18" strokeLinecap="round"/>
    <path d="M310 75 L390 120" stroke="url(#metalBase)" strokeWidth="18" strokeLinecap="round"/>
    <rect x="20" y="25" width="380" height="95" fill="url(#metalShine)" opacity="0.35"/>
    <text x="300" y="82" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="34"
          letterSpacing="4" fill="currentColor" opacity="0.85">
      SYSTEMS
    </text>
    <line x1="300" y1="98" x2="500" y2="98" stroke="currentColor" strokeWidth="3" opacity="0.5"/>
  </svg>
);

export default EskLogo;
