import React, { useState } from 'react';
import { Play, Sparkles, ChevronDown, Activity, Cpu, ShieldCheck } from 'lucide-react';
import { HeroSceneArtwork } from './ArtworkElements';
import { sound } from '../utils/audio';

interface HeroSectionProps {
  onOpenReel: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenReel }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background cyber grid & radiant light fields */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Subtitle & Category Kicker */}
        <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-purple-300 mb-4 tracking-wider">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="uppercase font-semibold">Creative Technology & Interactive Worlds Studio</span>
          <span aria-hidden="true" className="text-neutral-600">/</span>
          <span className="text-neutral-400 hidden sm:inline">Tokyo · London · Los Angeles</span>
        </div>

        {/* Hero Title Lockup inspired by ELIXIR typography */}
        <div className="relative mb-6">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] text-white">
            <span className="block bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
              AETHERIA
            </span>
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-3xl font-light leading-relaxed text-balance">
            We architect cinematic gaming realities and neural biometric engines that adapt digital worlds to human emotion.
          </p>
        </div>

        {/* CTAs and Interaction Points */}
        <div className="flex flex-wrap items-center gap-4 pt-2 pb-10">
          <button
            onClick={() => {
              sound.playLaser();
              onOpenReel();
            }}
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm text-neutral-950 bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 hover:opacity-95 transition-all shadow-[0_0_30px_rgba(168,85,247,0.35)] active:scale-95"
          >
            <span className="w-6 h-6 rounded-full bg-neutral-950/20 flex items-center justify-center">
              <Play className="w-3.5 h-3.5 fill-current text-neutral-950 ml-0.5" />
            </span>
            <span>Launch Studio Reel 2026</span>
          </button>

          <a
            href="#how-it-works"
            onClick={() => sound.playBlip(500, 0.05)}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/40 transition-all"
          >
            <span>Explore Architecture</span>
            <ChevronDown className="w-4 h-4 text-purple-400 animate-bounce" />
          </a>
        </div>

        {/* Marquee Key Art Graphic Composition (Warrior vs Cyber-Phoenix) */}
        <div className="relative mt-2">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-pink-500/30 rounded-3xl blur-xl opacity-75" />
          <HeroSceneArtwork />

          {/* Floating Telemetry Markers */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#080718]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300 z-20">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>RUNTIME: <strong className="text-white">UNREAL 5.5 + WEBGPU</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <span>BIOMETRIC LATENCY: <strong className="text-emerald-400 tabular-nums">0.8ms</strong></span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              <span>COMMERCIAL PROJECTS: <strong className="text-white">42 SHIPPED</strong></span>
            </div>
          </div>
        </div>

        {/* Adjacency Proof Section: Real metrics from shipped titles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-white/10 text-left">
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tabular-nums tracking-tight">
              42M+
            </div>
            <div className="text-xs text-neutral-400 mt-1">Global Players Engaged</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-cyan-400 tabular-nums tracking-tight">
              99.4%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Biometric Immersion Fidelity</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-purple-400 tabular-nums tracking-tight">
              18
            </div>
            <div className="text-xs text-neutral-400 mt-1">AAA & Indie Industry Laurels</div>
          </div>
          <div>
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-pink-400 tabular-nums tracking-tight">
              3
            </div>
            <div className="text-xs text-neutral-400 mt-1">Global Labs (TYO / LDN / LAX)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
