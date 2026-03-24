export function LogoIcon({ size = 40, dark = false, className = "" }) {
  const dim    = dark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.08)";
  const dimStroke = dark ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.14)";
  const midFill   = dark ? "rgba(212,168,83,0.22)"  : "rgba(184,134,42,0.18)";
  const midStroke = dark ? "rgba(212,168,83,0.55)"  : "rgba(184,134,42,0.60)";
  const midLine   = dark ? "rgba(212,168,83,0.44)"  : "rgba(184,134,42,0.50)";
  const mainFill  = dark ? "rgba(212,168,83,0.18)"  : "rgba(184,134,42,0.14)";
  const accent    = dark ? "#D4A853"                : "#B8862A";
  const baseLine  = dark ? "rgba(212,168,83,0.35)"  : "rgba(184,134,42,0.35)";
  const innerLine = dark ? "rgba(212,168,83,0.30)"  : "rgba(184,134,42,0.28)";
  const innerLine2= dark ? "rgba(212,168,83,0.50)"  : "rgba(184,134,42,0.45)";
 
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Librarium"
      role="img"
    >
      <rect
        x="2" y="14" width="7" height="24" rx="1"
        fill={dim}
        stroke={dimStroke}
        strokeWidth="0.8"
      />
      <line
        x1="2.4" y1="16.5" x2="8.6" y2="16.5"
        stroke={dim} strokeWidth="0.6"
      />
 
      <rect
        x="11" y="8" width="8" height="30" rx="1"
        fill={midFill}
        stroke={midStroke}
        strokeWidth="0.8"
      />
      <line
        x1="11.4" y1="11" x2="18.6" y2="11"
        stroke={midLine} strokeWidth="0.6"
      />
      <path
        d="M21 2 L31 2 L38 9 L38 38 L21 38 Z"
        fill={mainFill}
        stroke={accent}
        strokeWidth="1"
      />
 
      <line
        x1="31" y1="2" x2="38" y2="9"
        stroke={accent} strokeWidth="1" opacity="0.7"
      />
      <line x1="21.5" y1="6"  x2="30"   y2="6"  stroke={innerLine2} strokeWidth="0.6"/>
      <line x1="21.5" y1="9"  x2="37.5" y2="9"  stroke={innerLine}  strokeWidth="0.5"/>
      <line x1="21.5" y1="32" x2="37.5" y2="32" stroke={innerLine}  strokeWidth="0.5"/>
      <line x1="21.5" y1="35" x2="37.5" y2="35" stroke={innerLine}  strokeWidth="0.5"/>
 
      <line
        x1="2" y1="38" x2="38" y2="38"
        stroke={baseLine} strokeWidth="0.8"
      />
 
      <circle cx="29.5" cy="22" r="1.5" fill={accent} opacity="0.9"/>
    </svg>
  );
}