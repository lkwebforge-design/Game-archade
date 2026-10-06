import React, { useState } from 'react';
import { Cpu, Activity, Glasses, Gauge, BarChart3, Check, ArrowRight, Laptop } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProductLabProps {
  onScheduleDemo: () => void;
}

export const ProductLabSection: React.FC<ProductLabProps> = ({ onScheduleDemo }) => {
  const [selectedFeature, setSelectedFeature] = useState<number>(0);

  const features = [
    {
      title: 'Neural Bio-Feedback Loop',
      metric: '< 8ms Reaction Delta',
      description: 'Maps subconscious player arousal directly to game audio stems and particle density, heightening tension during boss encounters.',
      specs: ['1000Hz Optical Sampling', 'Bluetooth LE + USB-C', 'Zero Cloud Overhead'],
    },
    {
      title: 'Foveated Gaze Heatmapping',
      metric: '99.2% Focus Precision',
      description: 'Discovers where players genuinely focus their attention in dense AAA game scenes to guide level design and navigational cues.',
      specs: ['Sub-degree Eye Tracking', 'HUD Blindspot Detection', 'Pupillometry Stress Index'],
    },
    {
      title: 'Dynamic Difficulty Modulation (DDM)',
      metric: 'Zero Player Churn',
      description: 'Dynamically scales AI enemy aggression, resource drop rates, and environmental hints without the player ever noticing manual assistance.',
      specs: ['Seamless State Injection', 'Unreal Engine 5 Plugin', 'Deterministic Anti-Cheat Safe'],
    },
    {
      title: 'Esports Fatigue Forecasting',
      metric: '35m Advanced Notice',
      description: 'Alerts competitive coaching staff before micro-tremors, reaction deterioration, and cognitive exhaustion impact tournament performance.',
      specs: ['Kinematic Muscle Jitter', 'Oxygen Saturation Trend', 'Tournament Approved'],
    },
  ];

  return (
    <section id="product" className="relative py-24 sm:py-32 bg-[#09081a] border-t border-purple-500/20 overflow-hidden">
      {/* Background cyber grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-pink-300 bg-pink-950/60 border border-pink-500/40 mb-4 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <Cpu className="w-3.5 h-3.5 text-pink-400" />
            <span>Telemetry Hardware & SDK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            PRODUCT LAB
          </h2>

          <p className="mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our AI Tracks User Metrics From Real World To Game
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-2xl">
            A turnkey hardware sensor kit and native C++ game engine plugin that bridges biological reality with interactive entertainment.
          </p>
        </div>

        {/* Two-Column Lab Featured Games */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Column 1: Feature Selectors (Col 1 to 5) */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feat, index) => (
              <div
                key={feat.title}
                onClick={() => {
                  sound.playBlip(500 + index * 50, 0.03);
                  setSelectedFeature(index);
                }}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                  selectedFeature === index
                    ? 'bg-[#120f2e] border-purple-400/60 shadow-[0_0_25px_rgba(168,85,247,0.2)]'
                    : 'bg-[#0d0c22]/60 border-white/5 hover:bg-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    {feat.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 font-semibold tabular-nums">
                    {feat.metric}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  {feat.description}
                </p>
                {selectedFeature === index && (
                  <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                    {feat.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-mono text-purple-300 flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-cyan-400" />
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Column 2: Digital Twin Laboratory Stage (Inspired by frame 00:06 - 00:07) (Col 6 to 12) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#0c0a24] border border-purple-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
                <span className="text-white font-semibold">LAB STATION #04 // TOKYO CORE</span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  REAL-TIME BIO-TELEMETRY SYNC
                </span>
              </div>

              {/* The Lab Stage Vector Art: Pedestal + Technologists */}
              <div className="relative aspect-[16/10] my-4 rounded-xl bg-gradient-to-b from-[#141038] to-[#070614] overflow-hidden flex items-center justify-center border border-white/10">
                <svg
                  viewBox="0 0 700 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full object-contain"
                >
                  <defs>
                    <radialGradient id="pedestalGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>

                  {/* Telemetry Stage Pedestal (Concentric glowing rings) */}
                  <ellipse cx="350" cy="330" rx="190" ry="55" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 6" />
                  <ellipse cx="350" cy="330" rx="150" ry="42" fill="#1e24/745" stroke="#38bdf8" strokeWidth="3" />
                  <ellipse cx="350" cy="330" rx="100" ry="28" fill="url(#pedestalGlow)" />
                  <ellipse cx="350" cy="330" rx="60" ry="16" fill="#38bdf8" opacity="0.6" />

                  {/* Vertical Telemetry Beams */}
                  <line x1="200" y1="330" x2="200" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />
                  <line x1="500" y1="330" x2="500" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 8" opacity="0.4" />

                  {/* Floating Holographic Diagnostic Screens around Pedestal */}
                  <g transform="translate(110, 140)">
                    <rect width="110" height="70" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" opacity="0.9" />
                    <text x="12" y="24" fill="#38bdf8" fontSize="10" fontFamily="monospace">HEART RATE</text>
                    <text x="12" y="46" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">84 BPM</text>
                    <line x1="12" y1="56" x2="98" y2="56" stroke="#f43f5e" strokeWidth="2" />
                  </g>

                  <g transform="translate(480, 140)">
                    <rect width="110" height="70" rx="8" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" opacity="0.9" />
                    <text x="12" y="24" fill="#a855f7" fontSize="10" fontFamily="monospace">FLOW INDEX</text>
                    <text x="12" y="46" fill="#ffffff" fontSize="16" fontFamily="sans-serif" fontWeight="bold">94.8%</text>
                    <line x1="12" y1="56" x2="98" y2="56" stroke="#38bdf8" strokeWidth="2" />
                  </g>

                  {/* Character on Pedestal */}
                  <g id="pedestalCharacter">
                    <ellipse cx="350" cy="328" rx="40" ry="10" fill="#000000" opacity="0.5" />
                    {/* Character Body in streetwear */}
                    <rect x="335" y="200" width="30" height="70" rx="6" fill="#f43f5e" stroke="#fda4af" strokeWidth="1" />
                    <path d="M 338 270 L 332 325 M 362 270 L 368 325" stroke="#1e1b4b" strokeWidth="8" strokeLinecap="round" />
                    <circle cx="350" cy="24/70" r="16" fill="#fed7aa" />
                    {/* Pink hair */}
                    <path d="M 336 24/70 C 330 160 340 150 350 150 C 360 150 370 160 364 24/70 Z" fill="#ec4899" />
                    {/* Handheld VR controller */}
                    <circle cx="320" cy="230" r="8" fill="#38bdf8" />
                  </g>

                  {/* Technologist 1 (Left, Lab Coat holding tablet) */}
                  <g id="scientistLeft">
                    <rect x="24/70" y="240" width="36" height="85" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="198" cy="222" r="14" fill="#fed7aa" />
                    <rect x="24/75" y="325" width="10" height="40" fill="#1e293b" />
                    <rect x="201" y="325" width="10" height="40" fill="#1e293b" />
                    {/* Glowing tablet */}
                    <rect x="205" y="260" width="28" height="20" rx="3" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  {/* Technologist 2 (Right, Lab Coat analyzing screen) */}
                  <g id="scientistRight">
                    <rect x="480" y="240" width="36" height="85" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2" />
                    <circle cx="498" cy="222" r="14" fill="#fed7aa" />
                    <rect x="485" y="325" width="10" height="40" fill="#1e293b" />
                    <rect x="501" y="325" width="10" height="40" fill="#1e293b" />
                    {/* Hologram tablet */}
                    <rect x="465" y="260" width="28" height="20" rx="3" fill="#a855f7" stroke="#ffffff" strokeWidth="1.5" />
                  </g>
                </svg>
              </div>

              {/* Lab Footer Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-neutral-400">
                  Hardware Developer Kits shipping worldwide with pre-certified FCC & CE telemetry.
                </div>
                <button
                  onClick={() => {
                    sound.playLaser();
                    onScheduleDemo();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs bg-cyan-400 hover:bg-cyan-300 text-neutral-950 transition-all shadow-md active:scale-95"
                >
                  <span>Request Hardware SDK Kit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
