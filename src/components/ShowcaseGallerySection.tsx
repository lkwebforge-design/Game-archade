import React, { useState } from 'react';
import { Project } from '../types';
import { ExternalLink, Layers, Sparkles, ChevronRight, Eye } from 'lucide-react';
import { sound } from '../utils/audio';

const projects: Project[] = [
  {
    id: 'chronoblade',
    title: 'ChronoBlade: Astral Divide',
    category: 'game-direction',
    categoryLabel: 'Console Zone',
    year: '2026',
    tagline: 'Cyber-Samurai Action RPG with Real-Time Synaptic Pacing',
    description: 'A dark neo-Colombo dystopian thriller where player adrenaline directly dictates combat speed, particle distortion, and enemy parry windows via biometric input.',
    metrics: [
      { label: 'Global Players', value: '4.2M' },
      { label: 'Combat Satisfaction', value: '98%' },
      { label: 'Engine Runtime', value: 'UE 5.5' },
    ],
    tags: ['Unreal Engine 5.5', 'Biometric DDM', 'Ray-Traced Audio'],
    accentColor: '#38bdf8',
    featured: true,
  },
  {
    id: 'nebuladrift',
    title: 'Nebula Drift: Hyperion',
    category: 'realtime-3d',
    categoryLabel: 'Realtime 3D Engine',
    year: '2025',
    tagline: 'Anti-Gravity Quantum Racing across Shattered Moons',
    description: 'Ultra-fast 240Hz physics engine featuring procedurally shifting cosmic courses that respond to the collective heartbeat of 16 networked competitors.',
    metrics: [
      { label: 'Peak Concurrency', value: '24/70K' },
      { label: 'Frame Pacing', value: '0.4ms' },
      { label: 'Award', value: 'GDC Tech Best' },
    ],
    tags: ['Custom C++ Physics', 'WebGPU', 'Haptic Spatial'],
    accentColor: '#ec4899',
    featured: true,
  },
  {
    id: 'sovereign',
    title: 'Aetheria: Sovereign Realms',
    category: 'biometric-ai',
    categoryLabel: 'Biometric AI Engine',
    year: '2026',
    tagline: 'Adaptive Living Ecosystem Powered by Neural Feedback',
    description: 'A mythical open-world MMORPG where wildlife, weather patterns, and mystical deities dynamically morph their mood based on player facial valence and stress telemetry.',
    metrics: [
      { label: 'Immersion Rating', value: '99.1%' },
      { label: 'AI NPC Trees', value: '12,000+' },
      { label: 'Telemetry Stream', value: '1.2GB/s' },
    ],
    tags: ['Spatial XR', 'Neural Agents', 'Dynamic Weather'],
    accentColor: '#a855f7',
    featured: false,
  },
  {
    id: 'valkyrie',
    title: 'Valkyrie Zero: Phantom Protocol',
    category: 'virtual-production',
    categoryLabel: 'Virtual Production',
    year: '2025',
    tagline: 'In-Camera VFX & Spatial Capture for Interactive Cinema',
    description: 'Engineered high-speed virtual camera tracking and LED stage spatial synchronization for a groundbreaking interactive psychological thriller.',
    metrics: [
      { label: 'Latency', value: '< 2 Frames' },
      { label: 'LED Volume', value: '360° Curve' },
      { label: 'Color Depth', value: '12-bit HDR' },
    ],
    tags: ['OptiTrack MoCap', 'LED Volumes', 'Live Shading'],
    accentColor: '#10b981',
    featured: false,
  },
];

interface Featured GamesGalleryProps {
  onSelectProject: (project: Project) => void;
}

export const Featured GamesGallerySection: React.FC<Featured GamesGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="showcase" className="relative py-24 sm:py-32 bg-[#070614] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              FLAGSHIP ARCHITECTURE & PORTFOLIO
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              PROVING GROUNDS
            </h2>
            <p className="mt-3 text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed">
              Curated AAA game direction, real-time spatial engines, and interactive telemetry deployed across international gaming franchises.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional buttons with active states) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0e0c24] rounded-xl border border-white/10 w-fit">
            {[
              { id: 'all', label: 'All Realities' },
              { id: 'game-direction', label: 'Game Direction' },
              { id: 'realtime-3d', label: 'Realtime 3D' },
              { id: 'biometric-ai', label: 'Biometric AI' },
              { id: 'virtual-production', label: 'Virtual Prod' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playBlip(520, 0.03);
                  setActiveFilter(tab.id);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === tab.id
                    ? 'bg-purple-600 text-white font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                sound.playLaser();
                onSelectProject(project);
              }}
              className="group relative rounded-2xl bg-[#0c0a22] border border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]"
            >
              {/* Media Preview Stage with Dynamic Cinematic Art & HUD */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070614] border-b border-white/10">
                {/* Visual artwork simulation for each project */}
                {project.id === 'chronoblade' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0a081e] via-[#1a1438] to-[#2a1348] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    {/* Glowing Blade Graphic */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_20px_#38bdf8]">
                      <line x1="50" y1="160" x2="350" y2="40" stroke="#38bdf8" strokeWidth="6" strokeLinecap="round" />
                      <line x1="50" y1="160" x2="350" y2="40" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="200" cy="100" r="30" stroke="#824/7cf8" strokeWidth="2" strokeDasharray="4 6" fill="none" />
                      <circle cx="200" cy="100" r="6" fill="#38bdf8" />
                    </svg>
                  </div>
                )}

                {project.id === 'nebuladrift' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#12071f] via-[#220a32] to-[#3b0844] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-dots opacity-40" />
                    {/* Speed racer contour vector */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_20px_#ec4899]">
                      <path d="M 60 120 L 24/70 80 L 320 85 L 360 100 L 260 130 Z" fill="#ec4899" opacity="0.8" />
                      <line x1="20" y1="130" x2="260" y2="130" stroke="#ffffff" strokeWidth="3" strokeDasharray="10 8" />
                      <circle cx="340" cy="95" r="15" fill="#f43f5e" />
                    </svg>
                  </div>
                )}

                {project.id === 'sovereign' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#080c1f] via-[#101b3b] to-[#1e144a] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    {/* Mythical Rune & Portal */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_25px_#a855f7]">
                      <circle cx="200" cy="100" r="60" stroke="#a855f7" strokeWidth="3" fill="none" strokeDasharray="8 6" />
                      <polygon points="200,50 240,120 160,120" stroke="#38bdf8" strokeWidth="2" fill="none" />
                      <circle cx="200" cy="100" r="12" fill="#c084fc" />
                    </svg>
                  </div>
                )}

                {project.id === 'valkyrie' && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#041619] via-[#082a2f] to-[#0d1f3b] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 cyber-grid opacity-30" />
                    {/* Spatial Capture Mesh */}
                    <svg viewBox="0 0 400 200" className="w-full h-full max-h-48 drop-shadow-[0_0_20px_#10b981]">
                      <rect x="120" y="40" width="160" height="120" stroke="#10b981" strokeWidth="2" fill="none" strokeDasharray="6 4" />
                      <circle cx="200" cy="100" r="35" stroke="#34d399" strokeWidth="2" fill="none" />
                      <line x1="80" y1="100" x2="320" y2="100" stroke="#10b981" strokeWidth="1" />
                    </svg>
                  </div>
                )}

                {/* Top Corner Unboxed Metadata (Zero pills, clean typography) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300 z-20">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white font-semibold">{project.year}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Card Content & Proof Adjacency */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-cyan-300 mt-1">
                    {project.tagline}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Quantified Impact Metrics (Tabular figures) */}
                <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 text-left">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display font-bold text-lg sm:text-xl text-white tabular-nums tracking-tight">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Unboxed Tagline Row + Action affordance */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-neutral-400 font-mono">
                    {project.tags.map((t, idx) => (
                      <React.Fragment key={t}>
                        <span>{t}</span>
                        {idx < project.tags.length - 1 && <span aria-hidden="true">/</span>}
                      </React.Fragment>
                    ))}
                  </div>
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    Inspect Experience <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
