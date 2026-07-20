const INK = "#0B0C0E";
const YELLOW = "#FFC718";
const YELLOW_DEEP = "#E8AF00";
const SKIN = "#F4C89A";
const LEAF = "#8FAF7C";

function Sparkles() {
  return (
    <g stroke={INK} strokeWidth="1.4" fill="none" opacity=".55">
      <path d="M60 40l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={INK} stroke="none" opacity=".7" />
      <path d="M300 60l2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5z" fill={YELLOW_DEEP} stroke="none" />
      <path d="M320 130l2 4.5 4.5 2-4.5 2-2 4.5-2-4.5-4.5-2 4.5-2z" fill={INK} stroke="none" opacity=".6" />
      <path d="M40 130q14-10 22 4" strokeDasharray="3 5" />
      <path d="M312 96q-8 14 6 20" strokeDasharray="3 5" />
    </g>
  );
}

function Ground() {
  return <ellipse cx="180" cy="230" rx="150" ry="6" fill={INK} opacity=".08" />;
}

function MoneyBag({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-24 8c0-20 12-30 24-30s24 10 24 30-14 34-24 34-24-14-24-34z" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M-9-22c0-8 18-8 18 0" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="-13" y="-26" width="26" height="8" rx="3" fill={YELLOW} stroke={INK} strokeWidth="1.5" />
      <circle cx="0" cy="14" r="11" fill="#fff" stroke={INK} strokeWidth="1.5" />
      <text x="0" y="19" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>₹</text>
    </g>
  );
}

function Coins({ x, y }: { x: number; y: number }) {
  const rows = [0, 1, 2, 3, 4];
  return (
    <g transform={`translate(${x} ${y})`}>
      {rows.map((i) => (
        <ellipse key={i} cx="0" cy={-i * 9} rx="26" ry="10" fill={YELLOW} stroke={YELLOW_DEEP} strokeWidth="2" />
      ))}
    </g>
  );
}

function Plant({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d="M-10 0h20l-3 22h-14z" fill="#fff" stroke={INK} strokeWidth="1.6" />
      <path d="M0 0C-2 -18 -16 -20 -20 -30C-6 -30 2 -18 0 0z" fill={LEAF} />
      <path d="M0 0C4 -22 18 -22 22 -34C8 -32 0 -18 0 0z" fill={LEAF} opacity=".85" />
      <path d="M0 0C-1 -12 -10 -14 -12 -22C-3 -20 1 -10 0 0z" fill={LEAF} opacity=".7" />
    </g>
  );
}

function Person() {
  return (
    <g>
      {/* legs */}
      <path d="M155 150l-6 55h16l4-40 4 40h16l-6-55z" fill={INK} />
      {/* shoes */}
      <path d="M149 203h20l3 8c1 3-1 5-4 5h-22c-3 0-4-3-2-5z" fill="#fff" stroke={INK} strokeWidth="2" />
      <path d="M177 203h20l3 8c1 3-1 5-4 5h-22c-3 0-4-3-2-5z" fill="#fff" stroke={INK} strokeWidth="2" />
      {/* torso / jacket */}
      <path d="M148 96c6-10 16-16 26-16s20 6 26 16l8 56c1 6-3 10-9 10h-50c-6 0-10-4-9-10z" fill={YELLOW} stroke={INK} strokeWidth="2" />
      {/* inner shirt */}
      <path d="M166 88c4 10 20 10 24 0l-4 44h-16z" fill="#fff" stroke={INK} strokeWidth="1.5" />
      {/* arms */}
      <path d="M148 104c-14 2-24 12-26 24" stroke={SKIN} strokeWidth="12" strokeLinecap="round" fill="none" />
      <circle cx="120" cy="126" r="8" fill={SKIN} stroke={INK} strokeWidth="1.5" />
      <path d="M208 104c12 4 18 16 16 28" stroke={YELLOW_DEEP} strokeWidth="12" strokeLinecap="round" fill="none" />
      {/* neck + head */}
      <rect x="170" y="70" width="16" height="14" rx="4" fill={SKIN} />
      <circle cx="178" cy="58" r="20" fill={SKIN} stroke={INK} strokeWidth="2" />
      <path d="M158 54c-2-16 12-26 24-24 14 2 20 12 18 22-6-8-16-4-22-10-4 8-14 8-20 12z" fill={INK} />
    </g>
  );
}

export function AppHeroIllustration() {
  return (
    <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Sparkles />
      <Ground />
      <Coins x={252} y={214} />
      <MoneyBag x={296} y={198} />
      <Plant x={68} y={214} />

      {/* hourglass */}
      <g transform="translate(210 60)">
        <rect x="-32" y="0" width="64" height="14" rx="4" fill={INK} />
        <rect x="-32" y="130" width="64" height="14" rx="4" fill={INK} />
        <path d="M-24 14h48c0 26-20 34-20 50s20 24 20 50h-48c0-26 20-34 20-50s-20-24-20-50z" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <path d="M-16 100h32c-2 14-14 18-16 30-2-12-14-16-16-30z" fill={YELLOW} />
        <path d="M-6 18c2 8-2 12-2 18" stroke={YELLOW} strokeWidth="4" strokeLinecap="round" />
      </g>

      <Person />
    </svg>
  );
}
