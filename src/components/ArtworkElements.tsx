import React from 'react';

/**
 * High-fidelity Cyber Fantasy Hero Scene (Warrior & Cybernetic Phoenix)
 * Matches the dramatic composition and vibrant aesthetic in the reference video
 */
export const HeroSceneArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] flex items-center justify-center overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-b from-[#13112c]/90 via-[#0b0a1a]/95 to-[#070712] shadow-2xl ${className}`}>
      {/* Background celestial cosmic orbs & nebula glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 inset-x-0 h-48 bg-gradient-to-t from-[#070712] via-[#070712]/80 to-transparent z-10" />

      {/* SVG Canvas for Cyber Warrior and Celestial Cyber-Phoenix */}
      <svg
        viewBox="0 0 1200 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover z-0 select-none"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e1845" />
            <stop offset="40%" stopColor="#301e5e" />
            <stop offset="70%" stopColor="#4a154b" />
            <stop offset="100%" stopColor="#0d0c1f" />
          </linearGradient>

          <linearGradient id="phoenixBodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="30%" stopColor="#8b5cf6" />
            <stop offset="70%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          <linearGradient id="swordBladeGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          <linearGradient id="warriorCoatGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1e1b4b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <filter id="neonGlowCyan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="neonGlowPink" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Sky / Horizon */}
        <rect width="1200" height="680" fill="url(#skyGrad)" opacity="0.6" />

        {/* Cosmic Moons / Orbs */}
        <circle cx="280" cy="160" r="48" fill="#e0e7ff" opacity="0.15" />
        <circle cx="280" cy="160" r="40" fill="#c7d2fe" opacity="0.25" />
        <circle cx="295" cy="148" r="32" fill="#1e1845" opacity="0.75" />

        <circle cx="940" cy="120" r="35" fill="#38bdf8" opacity="0.2" />
        <circle cx="940" cy="120" r="35" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 6" opacity="0.6" />
        <circle cx="975" cy="105" r="10" fill="#a855f7" opacity="0.5" />

        {/* Distant Mountain Ridges */}
        <polygon points="0,520 220,380 440,490 620,390 850,510 1100,360 1200,430 1200,680 0,680" fill="#181335" opacity="0.8" />
        <polygon points="0,560 310,440 560,540 820,430 1060,530 1200,470 1200,680 0,680" fill="#120e28" />

        {/* Bioluminescent Flora & Foreground Terrain */}
        <polygon points="0,600 350,560 700,590 1050,570 1200,590 1200,680 0,680" fill="#090814" />
        
        {/* Neon Bioluminescent Plants */}
        <g opacity="0.8">
          <circle cx="120" cy="590" r="6" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <path d="M120,620 Q115,605 120,590" stroke="#06b6d4" strokeWidth="2" fill="none" />
          <circle cx="180" cy="575" r="8" fill="#ec4899" filter="url(#neonGlowPink)" />
          <path d="M180,615 Q190,595 180,575" stroke="#ec4899" strokeWidth="2.5" fill="none" />
          <circle cx="780" cy="600" r="7" fill="#8b5cf6" />
          <circle cx="840" cy="580" r="10" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <path d="M840,630 Q830,605 840,580" stroke="#38bdf8" strokeWidth="2" fill="none" />
          <circle cx="920" cy="590" r="6" fill="#f43f5e" />
        </g>

        {/* CYBER WARRIOR (Left Foreground) */}
        <g id="warriorGroup">
          {/* Shadow */}
          <ellipse cx="230" cy="630" rx="90" ry="18" fill="#000000" opacity="0.6" />

          {/* Flowing Trenchcoat / Cape */}
          <path
            d="M 170 380 Q 120 460 100 550 C 130 580 180 570 210 540 C 230 490 220 430 210 390 Z"
            fill="url(#warriorCoatGrad)"
            stroke="#6366f1"
            strokeWidth="1.5"
          />

          {/* Legs & Armored Boots */}
          <path d="M 190 510 L 175 620 L 210 625 L 220 530 Z" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <path d="M 230 510 L 255 615 L 290 615 L 260 520 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />

          {/* Torso & Cybernetic Armor Rig */}
          <path
            d="M 185 360 L 255 350 L 265 470 L 180 480 Z"
            fill="#1e1e38"
            stroke="#818cf8"
            strokeWidth="2"
          />
          {/* Tactical Vest Straps & Emissive LED Rig */}
          <line x1="195" y1="370" x2="245" y2="460" stroke="#6366f1" strokeWidth="3" />
          <line x1="245" y1="370" x2="195" y2="460" stroke="#6366f1" strokeWidth="3" />
          <circle cx="220" cy="410" r="5" fill="#38bdf8" filter="url(#neonGlowCyan)" />

          {/* Shoulders & Arms */}
          <path d="M 170 370 Q 150 420 180 470" stroke="#334155" strokeWidth="18" strokeLinecap="round" />
          <path d="M 260 360 Q 295 400 320 440" stroke="#334155" strokeWidth="16" strokeLinecap="round" />

          {/* Head & Hair Profile */}
          <circle cx="215" cy="315" r="28" fill="#e2e8f0" opacity="0.9" />
          {/* Stylized hair blowing left */}
          <path
            d="M 210 290 C 170 280 140 310 120 340 C 150 330 180 335 205 320 Z"
            fill="#090d16"
          />
          {/* Visor / Optical implant */}
          <path d="M 225 312 L 245 314" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" filter="url(#neonGlowCyan)" />

          {/* The Energized Blade / Katana pointing towards creature */}
          <g transform="rotate(32 300 420)">
            {/* Hilt */}
            <rect x="290" y="415" width="45" height="10" rx="3" fill="#0f172a" stroke="#818cf8" strokeWidth="2" />
            <rect x="335" y="410" width="8" height="20" rx="2" fill="#6366f1" />
            {/* Glowing Blade */}
            <path
              d="M 345 418 L 560 417 Q 575 419 565 423 L 345 423 Z"
              fill="url(#swordBladeGrad)"
              filter="url(#neonGlowCyan)"
            />
          </g>
        </g>

        {/* CELESTIAL CYBER-PHOENIX / GUARDIAN (Right Side) */}
        <g id="phoenixCreature">
          {/* Creature Glow Aura */}
          <ellipse cx="940" cy="360" rx="160" ry="120" fill="#a855f7" opacity="0.18" filter="url(#neonGlowPink)" />

          {/* Large Spread Wings (Layer 1 - Back Wings) */}
          <path
            d="M 880 340 C 800 240 700 230 650 280 C 720 310 790 350 850 400 Z"
            fill="#4338ca"
            opacity="0.8"
          />
          <path
            d="M 980 340 C 1060 220 1180 200 1220 250 C 1140 290 1060 350 990 400 Z"
            fill="#4338ca"
            opacity="0.8"
          />

          {/* Layer 2 - Primary Feather Wings with glowing edges */}
          <path
            d="M 860 360 C 750 280 670 320 620 390 C 690 395 760 410 840 430 Z"
            fill="url(#phoenixBodyGrad)"
            stroke="#f43f5e"
            strokeWidth="3"
            filter="url(#neonGlowPink)"
          />
          <path
            d="M 990 360 C 1100 270 1190 310 1240 380 C 1170 390 1090 410 1010 430 Z"
            fill="url(#phoenixBodyGrad)"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="url(#neonGlowCyan)"
          />

          {/* Feathers fringe details */}
          <g stroke="#ffffff" strokeWidth="2" opacity="0.6">
            <line x1="680" y1="360" x2="630" y2="400" />
            <line x1="720" y1="380" x2="670" y2="430" />
            <line x1="1160" y1="350" x2="1220" y2="390" />
            <line x1="1120" y1="375" x2="1170" y2="420" />
          </g>

          {/* Creature Body & Crest */}
          <ellipse cx="925" cy="380" rx="65" ry="85" fill="#1e1845" stroke="#8b5cf6" strokeWidth="3" />
          
          {/* Glowing Rune Core on Chest */}
          <polygon points="925,350 950,380 925,410 900,380" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <polygon points="925,360 940,380 925,400 910,380" fill="#ffffff" />

          {/* Head & Stylized Horns/Crest */}
          <circle cx="925" cy="285" r="45" fill="#13102b" stroke="#ec4899" strokeWidth="3" />
          
          {/* Horns */}
          <path d="M 895 265 C 870 215 840 210 825 220 C 850 250 885 260 895 270 Z" fill="#ec4899" />
          <path d="M 955 265 C 980 215 1010 210 1025 220 C 1000 250 965 260 955 270 Z" fill="#38bdf8" />

          {/* Luminous Glowing Eyes */}
          <ellipse cx="905" cy="285" rx="9" ry="6" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <ellipse cx="945" cy="285" rx="9" ry="6" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <circle cx="905" cy="285" r="3" fill="#ffffff" />
          <circle cx="945" cy="285" r="3" fill="#ffffff" />

          {/* Beak / Visor */}
          <polygon points="925,295 935,315 915,315" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1" />

          {/* Energy Beams & Floating Embers */}
          <circle cx="760" cy="300" r="4" fill="#38bdf8" filter="url(#neonGlowCyan)" />
          <circle cx="810" cy="240" r="3" fill="#ec4899" filter="url(#neonGlowPink)" />
          <circle cx="1060" cy="280" r="4" fill="#38bdf8" />
          <circle cx="1110" cy="330" r="5" fill="#f43f5e" filter="url(#neonGlowPink)" />
        </g>

        {/* Ambient floating HUD glyphs and telemetry markers */}
        <g opacity="0.4" stroke="#818cf8" strokeWidth="1" fill="none">
          <circle cx="600" cy="200" r="36" strokeDasharray="3 5" />
          <circle cx="600" cy="200" r="16" />
          <line x1="560" y1="200" x2="640" y2="200" />
          <line x1="600" y1="160" x2="600" y2="240" />
        </g>
      </svg>
    </div>
  );
};

/**
 * High-tech Streetwear Character + X-Ray Biometric Cyber-Skeleton
 * For the INSIGHTS interactive scanner component
 */
export const CharacterScanGraphic: React.FC<{
  scanPosition: number; // 0 to 100 percentage
  activeLayer: 'bio' | 'neural' | 'skeletal' | 'streetwear';
}> = ({ scanPosition, activeLayer }) => {
  return (
    <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-[#13112c] via-[#0b0a1a] to-[#070712] border border-purple-500/30 shadow-2xl">
      {/* Background Studio Grid & Ambient Lighting */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute inset-0 bg-radial from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      {/* SVG Container with both Normal and Cyber-X-Ray layers clipped dynamically */}
      <svg
        viewBox="0 0 500 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain select-none relative z-10"
      >
        <defs>
          <filter id="heartGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Clip path for the X-Ray reveal based on scanPosition slider */}
          <clipPath id="scanClip">
            <rect
              x="0"
              y={(scanPosition / 100) * 450}
              width="500"
              height="200"
            />
          </clipPath>
        </defs>

        {/* ----------------- LAYER 1: BASE NORMAL CHARACTER (Streetwear Gamer) ----------------- */}
        <g id="normalCharacter">
          {/* Shadow */}
          <ellipse cx="250" cy="610" rx="140" ry="20" fill="#000000" opacity="0.6" />

          {/* Legs & Cargo Pants */}
          <path d="M 190 440 L 175 600 L 225 605 L 240 450 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
          <path d="M 260 450 L 275 605 L 325 600 L 310 440 Z" fill="#1e1b4b" stroke="#312e81" strokeWidth="2" />
          
          {/* Chunky Futuristic Sneakers */}
          <rect x="160" y="590" width="70" height="25" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
          <rect x="270" y="590" width="70" height="25" rx="8" fill="#0f172a" stroke="#6366f1" strokeWidth="2" />
          <line x1="165" y1="605" x2="225" y2="605" stroke="#38bdf8" strokeWidth="3" />
          <line x1="275" y1="605" x2="335" y2="605" stroke="#38bdf8" strokeWidth="3" />

          {/* Tactical Vest / Chest Rig */}
          <path d="M 180 260 L 320 260 L 330 450 L 170 450 Z" fill="#f43f5e" opacity="0.85" />
          <rect x="195" y="290" width="110" height="140" rx="8" fill="#e11d48" stroke="#fda4af" strokeWidth="1.5" />
          
          {/* Tactical Pockets & Heavy Chrome Chain */}
          <rect x="205" y="340" width="40" height="40" rx="4" fill="#9f1239" stroke="#fda4af" strokeWidth="1" />
          <rect x="255" y="340" width="40" height="40" rx="4" fill="#9f1239" stroke="#fda4af" strokeWidth="1" />
          <path d="M 190 270 Q 250 320 310 270" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" strokeDasharray="3 8" />

          {/* Neck & Head */}
          <rect x="230" y="210" width="40" height="60" rx="8" fill="#fed7aa" />
          <circle cx="250" cy="180" r="55" fill="#fde68a" />

          {/* Anime Styled Vibrant Coral Hair */}
          <path
            d="M 190 180 C 170 120 200 90 250 90 C 300 90 330 120 310 180 C 330 150 350 190 330 210 C 310 180 300 230 270 200 C 250 220 230 200 210 220 C 190 200 170 220 190 180 Z"
            fill="#f43f5e"
            stroke="#fb7185"
            strokeWidth="3"
          />

          {/* Eyes & Cheek Blush & Expression */}
          <circle cx="225" cy="175" r="9" fill="#0f172a" />
          <circle cx="275" cy="175" r="9" fill="#0f172a" />
          <circle cx="228" cy="172" r="3" fill="#ffffff" />
          <circle cx="278" cy="172" r="3" fill="#ffffff" />
          <ellipse cx="210" cy="190" rx="10" ry="4" fill="#f43f5e" opacity="0.6" />
          <ellipse cx="290" cy="190" rx="10" ry="4" fill="#f43f5e" opacity="0.6" />
          {/* Confident Smile */}
          <path d="M 235 200 Q 250 212 265 200" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* ----------------- LAYER 2: CYBERNETIC X-RAY / NEURAL LAYER (Revealed inside scanner box) ----------------- */}
        {activeLayer !== 'streetwear' && (
          <g id="cyberXrayLayer" clipPath="url(#scanClip)">
            {/* Dark translucent scanner viewport backdrop */}
            <rect x="40" y="0" width="420" height="650" fill="#0a122c" opacity="0.95" />
            <rect x="40" y="0" width="420" height="650" className="scanlines" opacity="0.4" />

            {/* Glowing Skeletal Bones / Cyber Chassis */}
            <g stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.9">
              {/* Skull Outline */}
              <circle cx="250" cy="180" r="50" fill="#0b1739" stroke="#38bdf8" strokeWidth="3" />
              {/* Eye Sockets */}
              <circle cx="230" cy="175" r="14" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="270" cy="175" r="14" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
              {/* Glowing Cyan Optical Pupils */}
              <circle cx="230" cy="175" r="5" fill="#38bdf8" filter="url(#cyanGlow)" />
              <circle cx="270" cy="175" r="5" fill="#38bdf8" filter="url(#cyanGlow)" />
              {/* Jaw Teeth grid */}
              <path d="M 235 205 L 265 205 M 240 212 L 260 212" stroke="#38bdf8" strokeWidth="3" />

              {/* Spine Column */}
              <line x1="250" y1="230" x2="250" y2="440" stroke="#06b6d4" strokeWidth="10" strokeDasharray="6 8" />

              {/* Ribcage Structure */}
              <path d="M 190 280 Q 250 300 310 280" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 180 310 Q 250 330 320 310" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 185 340 Q 250 360 315 340" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 195 370 Q 250 390 305 370" fill="none" stroke="#38bdf8" strokeWidth="5" />
              <path d="M 210 400 Q 250 420 290 400" fill="none" stroke="#38bdf8" strokeWidth="5" />
            </g>

            {/* Glowing Biometric Core Heart Reactor (Animates in place) */}
            <g id="heartCore">
              <circle cx="235" cy="320" r="28" fill="#f43f5e" opacity="0.4" filter="url(#heartGlow)" />
              {/* Stylized Heart Polygon */}
              <path
                d="M 235 305 C 235 295 215 295 215 310 C 215 325 235 340 235 345 C 235 340 255 325 255 310 C 255 295 235 295 235 305 Z"
                fill="#f43f5e"
                stroke="#ffffff"
                strokeWidth="2"
                filter="url(#heartGlow)"
              />
              {/* EKG pulse line across heart */}
              <path
                d="M 160 325 L 205 325 L 215 305 L 225 345 L 235 310 L 245 330 L 255 325 L 340 325"
                stroke="#38bdf8"
                strokeWidth="2.5"
                fill="none"
                filter="url(#cyanGlow)"
              />
            </g>

            {/* Neural Synapse Nodes (when activeLayer is neural or bio) */}
            {(activeLayer === 'neural' || activeLayer === 'bio') && (
              <g stroke="#a855f7" strokeWidth="1.5" opacity="0.8">
                <circle cx="250" cy="140" r="4" fill="#c084fc" filter="url(#cyanGlow)" />
                <circle cx="220" cy="150" r="3" fill="#c084fc" />
                <circle cx="280" cy="150" r="3" fill="#c084fc" />
                <line x1="250" y1="140" x2="220" y2="150" />
                <line x1="250" y1="140" x2="280" y2="150" />
                <line x1="220" y1="150" x2="230" y2="175" />
                <line x1="280" y1="150" x2="270" y2="175" />
              </g>
            )}

            {/* Pelvis & Hip Joints */}
            <path d="M 200 420 Q 250 450 300 420 L 290 460 Q 250 470 210 460 Z" fill="#0e7490" stroke="#38bdf8" strokeWidth="3" />
          </g>
        )}

        {/* ----------------- LAYER 3: HOLOGRAPHIC SCANNER FRAME HUD ----------------- */}
        <g id="scannerHudOverlay" transform={`translate(0, ${(scanPosition / 100) * 450})`}>
          {/* Scanner Window Border */}
          <rect
            x="45"
            y="0"
            width="410"
            height="200"
            rx="12"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            filter="url(#cyanGlow)"
          />

          {/* Scanner Corner Brackets */}
          <path d="M 45 25 L 45 0 L 70 0" stroke="#ffffff" strokeWidth="4" fill="none" />
          <path d="M 455 25 L 455 0 L 430 0" stroke="#ffffff" strokeWidth="4" fill="none" />
          <path d="M 45 175 L 45 200 L 70 200" stroke="#ffffff" strokeWidth="4" fill="none" />
          <path d="M 455 175 L 455 200 L 430 200" stroke="#ffffff" strokeWidth="4" fill="none" />

          {/* Scanner Horizontal Active Laser Bar */}
          <line
            x1="50"
            y1="100"
            x2="450"
            y2="100"
            stroke="#ffffff"
            strokeWidth="2"
            strokeDasharray="12 4"
            filter="url(#cyanGlow)"
          />

          {/* HUD Target Reticles & Telemetry Text */}
          <circle cx="85" cy="40" r="14" stroke="#38bdf8" strokeWidth="2" fill="none" />
          <circle cx="85" cy="40" r="3" fill="#38bdf8" />
          <text x="110" y="44" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
            BIO-CORE // SYNC 98.4%
          </text>

          <text x="320" y="44" fill="#ec4899" fontSize="11" fontFamily="monospace" fontWeight="600">
            PULSE: 78 BPM
          </text>

          <text x="110" y="175" fill="#a855f7" fontSize="11" fontFamily="monospace" fontWeight="600">
            NEURAL_LOAD: OPTIMAL
          </text>
          <text x="340" y="175" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="600">
            LATENCY: 0.8ms
          </text>
        </g>
      </svg>
    </div>
  );
};
