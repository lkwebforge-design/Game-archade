import React, { useState, useEffect } from 'react';
import { Play, Pause, Gamepad2, Sliders, Zap, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

export const HowItWorksSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [difficultyMode, setDifficultyMode] = useState<'adaptive' | 'hardcore' | 'relaxed'>('adaptive');
  const [hapticLevel, setHapticLevel] = useState<number>(85);
  const [score, setScore] = useState(14820);
  const [playerX, setPlayerX] = useState(20);
  const [playerY, setPlayerY] = useState(0);

  // Live simulation tick when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScore((prev) => prev + 15);
      setPlayerX((prev) => (prev > 80 ? 10 : prev + 2));
      // periodic jump simulation
      if (Math.random() > 0.7) {
        setPlayerY(25);
        setTimeout(() => setPlayerY(0), 400);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    sound.playBlip(isPlaying ? 350 : 650, 0.08);
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-[#09081a] border-t border-b border-purple-500/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with stylized logo pill */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-purple-300 bg-purple-950/60 border border-purple-500/40 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Gamepad2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Live Gaming Console</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            HOW IT WORKS
          </h2>

          <p className="mt-3 text-lg sm:text-xl font-medium text-purple-300/90">
            Play Better. Stay Longer.
          </p>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed text-balance">
            Choose your setup, pick your game, squad up, and drop into a premium gaming environment built for smooth performance, competitive play, and social sessions.
          </p>
        </div>

        {/* The Central Gaming Terminal Screen & Controller Rig (Inspired by frame 00:01 - 00:02) */}
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative Lab Technologists / Gamers Silhouette Artwork */}
          <div className="relative rounded-2xl p-4 sm:p-8 bg-[#0d0c24] border border-purple-500/30 shadow-[0_0_50px_rgba(79,70,229,0.15)]">
            
            {/* Top Monitor Bar with Status Lights & Window Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-medium text-white hidden sm:inline">AETHERIA-GAME-KERNEL // BUILD 5.5.2</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}`} />
                  <span className={isPlaying ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                    {isPlaying ? 'LIVE SIMULATION' : 'PAUSED'}
                  </span>
                </span>
                <span className="text-neutral-500 hidden sm:inline">|</span>
                <span className="tabular-nums hidden sm:inline">120 FPS // < 8ms V-SYNC</span>
              </div>
            </div>

            {/* The Main Gameplay Screen Display */}
            <div className="relative aspect-[16/9] w-full bg-[#050510] rounded-xl overflow-hidden border border-white/15 shadow-inner">
              <div className="absolute inset-0 scanlines opacity-30 z-20 pointer-events-none" />

              {/* Game Viewport Canvas / Animation */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#24/71135] via-[#0f0c24] to-[#080724/7] p-6 flex flex-col justify-between z-10">
                {/* In-Game HUD overlay */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-4">
                    <div className="bg-black/60 px-3 py-1 rounded border border-white/10 text-white">
                      SCORE: <span className="text-cyan-400 font-bold tabular-nums">{score.toLocaleString()}</span>
                    </div>
                    <div className="bg-black/60 px-3 py-1 rounded border border-white/10 text-white hidden sm:block">
                      FLOW: <span className="text-purple-400 font-bold">96.8%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-neutral-400">BIOMETRIC TENSION:</span>
                    <div className="w-24 sm:w-36 h-2 bg-neutral-800 rounded-full overflow-hidden border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300"
                        style={{ width: `${isPlaying ? 68 : 15}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Game World: Neon Grid Horizon & Obstacles */}
                <div className="relative h-40 w-full overflow-hidden flex items-end">
                  {/* Grid floor */}
                  <div className="absolute inset-x-0 bottom-0 h-16 cyber-grid opacity-40 border-t border-purple-500/40" />

                  {/* Cyber Runner Character */}
                  <div
                    className="absolute transition-all duration-150"
                    style={{
                      left: `${playerX}%`,
                      bottom: `${playerY + 12}px`,
                    }}
                  >
                    <div className="w-9 h-14 bg-gradient-to-t from-cyan-500 to-purple-400 rounded-t-lg relative shadow-[0_0_20px_rgba(6,24/72,212,0.8)] flex items-center justify-center">
                      <div className="w-6 h-2 bg-white rounded-full -mt-4 shadow-[0_0_8px_#ffffff]" />
                      <div className="absolute -bottom-2 inset-x-1 h-3 flex justify-between">
                        <div className="w-1.5 h-3 bg-cyan-300 rounded" />
                        <div className="w-1.5 h-3 bg-cyan-300 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* Obstacles / Glowing Crystal Hazards */}
                  <div className="absolute right-1/4 bottom-3 w-6 h-12 bg-pink-500/80 rounded-t-md border-t-2 border-pink-300 shadow-[0_0_15px_rgba(244,63,94,0.6)]" />
                  <div className="absolute right-2/3 bottom-3 w-8 h-8 bg-purple-500/80 rotate-45 border border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
                </div>

                {/* PAUSED Overlay (Matches frame 00:02 in the video!) */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-[#070614]/85 backdrop-blur-sm flex flex-col items-center justify-center z-30 animate-in fade-in duration-200">
                    <div className="px-6 py-2 rounded-xl bg-purple-950/80 border border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-3">
                      <span className="font-display font-black text-2xl sm:text-3xl tracking-widest text-white glow-purple">
                        PAUSED
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 font-mono">
                      Adaptive Telemetry Freeze · Press Resume to Test Loop
                    </p>
                  </div>
                )}
              </div>

              {/* Pause / Play Trigger Button Floating in Bottom Right */}
              <button
                onClick={togglePlay}
                className="absolute bottom-4 right-4 z-30 flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/90 hover:bg-purple-500 text-white font-medium text-xs shadow-lg transition-transform active:scale-95"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" />
                    <span>Pause Sim</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume Sim</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Control Console Below the Screen */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
              {/* Difficulty Tuning Segmented Control */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-neutral-400 font-mono mb-2 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-purple-400" />
                  <span>DIFFICULTY CURVE</span>
                </div>
                <div className="flex gap-1">
                  {(['relaxed', 'adaptive', 'hardcore'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        sound.playBlip(550, 0.03);
                        setDifficultyMode(mode);
                      }}
                      className={`flex-1 py-1.5 px-2 rounded-md font-mono text-[11px] capitalize transition-all ${
                        difficultyMode === mode
                          ? 'bg-purple-600 text-white font-semibold shadow-sm'
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
              </div>

              {/* Haptic Latency Slider */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-neutral-400 font-mono mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>HAPTIC FORCE</span>
                  </span>
                  <span className="text-cyan-400 font-bold tabular-nums">{hapticLevel}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={hapticLevel}
                  onChange={(e) => setHapticLevel(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              {/* Dynamic Telemetry Status */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="text-neutral-400 font-mono mb-1 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-pink-400" />
                  <span>NEURAL REACTION</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-display font-bold text-lg tabular-nums">
                    {difficultyMode === 'adaptive' ? '24/74ms' : difficultyMode === 'hardcore' ? '142ms' : '230ms'}
                  </span>
                  <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Synchronized
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Lab Caption with Researchers */}
            <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400 border-t border-white/5">
              <span>Dual-channel haptic controller rig connected via telemetry bus</span>
              <span className="text-purple-300 font-mono">Compatible with Unreal Engine 5 & Unity 6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
