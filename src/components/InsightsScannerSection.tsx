import React, { useState } from 'react';
import { Eye, Heart, Brain, Bone, Activity, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { CharacterScanGraphic } from './ArtworkElements';
import { ScannerLayer } from '../types';
import { sound } from '../utils/audio';

interface InsightsScannerProps {
  onOpenCaseStudy: () => void;
}

export const InsightsScannerSection: React.FC<InsightsScannerProps> = ({ onOpenCaseStudy }) => {
  const [scanPosition, setScanPosition] = useState<number>(38); // 0 to 100 percentage
  const [activeLayer, setActiveLayer] = useState<ScannerLayer>('bio');

  const handleSliderChange = (val: number) => {
    setScanPosition(val);
    if (Math.abs(val % 10) < 2) {
      sound.playBlip(700 + val * 3, 0.02);
    }
  };

  const layers: { id: ScannerLayer; label: string; icon: React.ReactNode; desc: string }[] = [
    {
      id: 'bio',
      label: 'Cardiovascular Core',
      icon: <Heart className="w-3.5 h-3.5 text-rose-400" />,
      desc: 'Monitors real-time heart rate variability, adrenaline surges, and micro-stress reflexes.',
    },
    {
      id: 'neural',
      label: 'Neural Synapses',
      icon: <Brain className="w-3.5 h-3.5 text-purple-400" />,
      desc: 'Tracks frontal-lobe focus index, immersion depth, and dopamine feedback loops.',
    },
    {
      id: 'skeletal',
      label: 'Kinematic Chassis',
      icon: <Bone className="w-3.5 h-3.5 text-cyan-400" />,
      desc: 'Assesses tendon tension, grip pressure, and kinetic reaction latencies.',
    },
    {
      id: 'streetwear',
      label: 'Surface Mesh',
      icon: <Eye className="w-3.5 h-3.5 text-amber-400" />,
      desc: 'High-fidelity external character modeling with responsive cloth physics.',
    },
  ];

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#070614] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: The Interactive X-Ray Scanner Graphic (Col 1 to 6) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* The Character Visual with moving scanner HUD */}
            <div className="relative w-full max-w-[440px]">
              <CharacterScanGraphic scanPosition={scanPosition} activeLayer={activeLayer} />

              {/* Interactive Vertical Slider Controls */}
              <div className="mt-4 p-4 rounded-xl bg-[#0c0a22] border border-white/10 shadow-lg">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-300 mb-2">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Activity className="w-3.5 h-3.5" />
                    <span>SCANNER APERTURE DEPTH</span>
                  </span>
                  <span className="text-white font-bold tabular-nums">{scanPosition}% Y-AXIS</span>
                </div>
                
                <input
                  type="range"
                  min="5"
                  max="85"
                  value={scanPosition}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  aria-label="Adjust X-Ray Scanner depth"
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-2">
                  <span>CRANIAL / NEURAL</span>
                  <span>CARDIO / CORE</span>
                  <span>KINETIC / CHASSIS</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Copywriting & Layer Tabs (Inspired by frame 00:03 - 00:05) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)] w-fit">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Biometric Deep Analytics</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
              INSIGHTS
            </h2>

            <p className="mt-3 text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Our Analytics Reveal What Happens Beneath The Surface
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every video game is unique, and player emotional investment cannot be evaluated by survey sheets or simple completion rates alone. Our biometric pipeline taps directly into physiological telemetry during live playthroughs to isolate exact moments of peak arousal, cognitive overload, and boredom.
            </p>

            {/* Interactive Layer Filter Buttons */}
            <div className="mt-6 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Select Diagnostic Layer:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {layers.map((layer) => (
                  <button
                    key={layer.id}
                    onClick={() => {
                      sound.playBlip(600, 0.04);
                      setActiveLayer(layer.id);
                    }}
                    className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all ${
                      activeLayer === layer.id
                        ? 'bg-purple-900/40 border-purple-400/60 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="p-1 rounded-lg bg-black/40 mt-0.5">{layer.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-white">{layer.label}</div>
                      <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">{layer.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Reading Telemetry Metrics Box */}
            <div className="mt-6 p-4 rounded-xl bg-[#0d0c24] border border-white/10 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xs text-neutral-400 font-mono">PULSE RATE</div>
                <div className="font-display font-extrabold text-xl text-rose-400 mt-0.5 tabular-nums">
                  78 BPM
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Resting delta +6</div>
              </div>
              <div className="border-x border-white/10">
                <div className="text-xs text-neutral-400 font-mono">FOCUS INDEX</div>
                <div className="font-display font-extrabold text-xl text-purple-300 mt-0.5 tabular-nums">
                  94.2%
                </div>
                <div className="text-[10px] text-emerald-400 font-mono">Zone Flow State</div>
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-mono">SYNC LATENCY</div>
                <div className="font-display font-extrabold text-xl text-cyan-400 mt-0.5 tabular-nums">
                  0.8ms
                </div>
                <div className="text-[10px] text-neutral-500 font-mono">Zero perceptible lag</div>
              </div>
            </div>

            {/* CTA Buttons (Case Study & Learn More) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  sound.playLaser();
                  onOpenCaseStudy();
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all active:scale-95"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#product"
                onClick={() => sound.playBlip(480, 0.04)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <span>Explore Lab Hardware</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
