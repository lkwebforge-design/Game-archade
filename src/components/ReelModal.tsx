import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2, SkipForward } from 'lucide-react';
import { sound } from '../utils/audio';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [progress, setProgress] = useState(35);

  const chapters = [
    { title: 'Neural Biometrics in Unreal Engine 5.5', duration: '0:45' },
    { title: 'Zero-G 240Hz High Speed Physics', duration: '1:12' },
    { title: 'Adaptive Open World Ecosystems', duration: '0:58' },
    { title: 'In-Camera VFX & LED Stage Integration', duration: '1:30' },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Simulated progress
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 200);
    return () => clearInterval(interval);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl rounded-3xl bg-[#09081a] border border-purple-500/40 shadow-[0_0_100px_rgba(168,85,247,0.35)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d0c24] border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block" />
            <span className="text-white font-bold tracking-wider">AETHERIA STUDIO REEL 2026 // 4K 60FPS</span>
          </div>
          <button
            onClick={() => {
              sound.playBlip(400, 0.04);
              onClose();
            }}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cinematic Video Player Screen */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 scanlines opacity-25 pointer-events-none z-20" />

          {/* Animated Cinematic Canvas */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0520] via-[#1a0f3d] to-[#2c0d4a] flex items-center justify-center">
            {/* Dynamic Soundwave Bars Simulation */}
            <div className="flex items-center gap-1.5 h-32 opacity-75">
              {[40, 75, 20, 95, 60, 85, 30, 90, 65, 45, 80, 50, 90, 70, 35, 85].map((h, i) => (
                <div
                  key={i}
                  className="w-2.5 bg-gradient-to-t from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-150"
                  style={{
                    height: isPlaying ? `${Math.min(100, h * (0.8 + Math.random() * 0.4))}%` : '20%',
                  }}
                />
              ))}
            </div>

            {/* Chapter Overlay */}
            <div className="absolute bottom-16 inset-x-8 text-left z-20">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                CHAPTER {currentChapter + 1} OF 4
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mt-1">
                {chapters[currentChapter].title}
              </h3>
            </div>
          </div>

          {/* Center Play/Pause button on screen hover */}
          <button
            onClick={() => {
              sound.playBlip(isPlaying ? 300 : 600, 0.05);
              setIsPlaying(!isPlaying);
            }}
            className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform z-30 shadow-2xl"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>
        </div>

        {/* Video Scrubber & Controls */}
        <div className="p-4 sm:p-6 bg-[#0c0a22] border-t border-white/10">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-4 cursor-pointer">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-cyan-400 transition-colors font-bold"
              >
                {isPlaying ? 'PAUSE' : 'PLAY'}
              </button>
              <button
                onClick={() => {
                  sound.playBlip(650, 0.04);
                  setCurrentChapter((prev) => (prev + 1) % chapters.length);
                  setProgress(0);
                }}
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <span>NEXT CHAPTER</span>
                <SkipForward className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-neutral-400">
              <span>BITRATE: <strong className="text-white">48 Mbps RAW</strong></span>
              <span>AUDIO: <strong className="text-cyan-400">DOLBY ATMOS 7.1.4</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
