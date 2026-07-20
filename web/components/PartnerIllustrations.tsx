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

function PersonBase({
  armPose,
}: {
  armPose: "wave" | "point" | "relax";
}) {
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

      {armPose === "wave" && (
        <>
          <path d="M148 104c-14 2-24 12-26 24" stroke={SKIN} strokeWidth="12" strokeLinecap="round" fill="none" />
          <circle cx="120" cy="126" r="8" fill={SKIN} stroke={INK} strokeWidth="1.5" />
          <path d="M208 104c12 4 18 16 16 28" stroke={YELLOW_DEEP} strokeWidth="12" strokeLinecap="round" fill="none" />
        </>
      )}
      {armPose === "point" && (
        <>
          <path d="M150 104c-16 6-26 20-24 34" stroke={YELLOW_DEEP} strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M206 104c14-2 28 4 34 14" stroke={SKIN} strokeWidth="12" strokeLinecap="round" fill="none" />
          <circle cx="242" cy="120" r="8" fill={SKIN} stroke={INK} strokeWidth="1.5" />
        </>
      )}
      {armPose === "relax" && (
        <>
          <path d="M150 100c-10-10-8-22 2-26" stroke={SKIN} strokeWidth="12" strokeLinecap="round" fill="none" />
          <path d="M206 100c10-10 8-22-2-26" stroke={SKIN} strokeWidth="12" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* neck + head */}
      <rect x="170" y="70" width="16" height="14" rx="4" fill={SKIN} />
      <circle cx="178" cy="58" r="20" fill={SKIN} stroke={INK} strokeWidth="2" />
      <path d="M158 54c-2-16 12-26 24-24 14 2 20 12 18 22-6-8-16-4-22-10-4 8-14 8-20 12z" fill={INK} />
    </g>
  );
}

export function IllustrationHourglass() {
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

      <PersonBase armPose="wave" />
    </svg>
  );
}

export function IllustrationTablet() {
  return (
    <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Sparkles />
      <Ground />
      <Coins x={272} y={214} />
      <MoneyBag x={230} y={200} />
      <Plant x={318} y={218} />

      {/* clock */}
      <g transform="translate(300 90)">
        <circle r="22" fill="#fff" stroke={INK} strokeWidth="2" />
        <path d="M0 0V-13M0 0l9 6" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* tablet */}
      <g transform="translate(258 150)">
        <rect x="-58" y="-90" width="116" height="150" rx="14" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <circle cx="0" cy="-76" r="3" fill={INK} />
        <rect x="-40" y="-52" width="80" height="16" rx="8" fill="#F6F4EF" stroke={INK} strokeWidth="1.5" />
        <circle cx="-30" cy="-44" r="5" fill={YELLOW} />
        <rect x="-40" y="-22" width="80" height="16" rx="8" fill="#F6F4EF" stroke={INK} strokeWidth="1.5" />
        <circle cx="-30" cy="-14" r="5" fill={YELLOW} />
        <rect x="-40" y="14" width="80" height="18" rx="9" fill={YELLOW} stroke={INK} strokeWidth="1.5" />
      </g>

      <PersonBase armPose="point" />
    </svg>
  );
}

export function IllustrationArmchair() {
  return (
    <svg viewBox="0 0 360 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Sparkles />
      <Ground />
      <Coins x={286} y={214} />
      <MoneyBag x={324} y={198} />

      {/* phone */}
      <g transform="translate(258 130)">
        <rect x="-48" y="-90" width="96" height="150" rx="16" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <circle cx="0" cy="-58" r="20" fill={YELLOW} />
        <path d="M-9-58l6 7 12-14" stroke={INK} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="-32" y="-16" width="64" height="14" rx="7" fill="#F6F4EF" stroke={INK} strokeWidth="1.5" />
      </g>

      {/* armchair */}
      <g transform="translate(150 150)">
        <path d="M-58 40V0c0-22 18-38 40-38h20c22 0 40 16 40 38v40z" fill="#fff" stroke={INK} strokeWidth="2.5" />
        <rect x="-66" y="20" width="16" height="34" rx="6" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="50" y="20" width="16" height="34" rx="6" fill="#fff" stroke={INK} strokeWidth="2" />
        <rect x="-58" y="40" width="116" height="16" rx="6" fill="#F6F4EF" stroke={INK} strokeWidth="2" />
      </g>

      {/* seated person (simplified, relaxed) */}
      <g transform="translate(178 96)">
        <path d="M-14 54l-4 34h14l2-24 2 24h14l-4-34z" fill={INK} />
        <path d="M-32 100h20l2 6c1 3-1 5-4 5h-16c-3 0-4-3-2-5z" fill="#fff" stroke={INK} strokeWidth="2" transform="translate(20 -18)" />
        <path d="M-8 20c4-8 12-13 20-13s16 5 20 13l4 38c1 5-3 9-8 9h-32c-5 0-9-4-8-9z" fill={YELLOW} stroke={INK} strokeWidth="2" />
        <path d="M28 10c8-8 6-18-2-22" stroke={SKIN} strokeWidth="11" strokeLinecap="round" fill="none" />
        <path d="M-6 10c-8-8-6-18 2-22" stroke={SKIN} strokeWidth="11" strokeLinecap="round" fill="none" />
        <rect x="4" y="-8" width="14" height="12" rx="4" fill={SKIN} />
        <circle cx="11" cy="-20" r="18" fill={SKIN} stroke={INK} strokeWidth="2" />
        <path d="M-7-24c-2-14 10-24 22-22 12 2 18 11 16 20-5-7-14-3-20-9-4 7-12 7-18 11z" fill={INK} />
      </g>
    </svg>
  );
}
