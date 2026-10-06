import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Check, MessageSquare, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { sound } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenWhatsApp,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0c0a24] border border-purple-500/40 shadow-[0_0_80px_rgba(168,85,247,0.3)] p-6 sm:p-10 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playBlip(400, 0.04);
            onClose();
          }}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
          <span>{project.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>Shipped {project.year}</span>
          <span aria-hidden="true">·</span>
          <span className="text-purple-400">Classified Case Study</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
          {project.title}
        </h2>

        <p className="mt-2 text-base sm:text-xl font-medium text-purple-300">
          {project.tagline}
        </p>

        {/* Visual Showcase Stage inside modal */}
        <div className="my-6 rounded-2xl aspect-[16/8] bg-gradient-to-tr from-[#08061a] via-[#161238] to-[#251042] border border-white/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid opacity-30" />
          <div className="relative z-10 text-center p-6">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-3 animate-pulse" />
            <div className="font-display font-bold text-lg text-white">
              Interactive Runtime Telemetry Active
            </div>
            <div className="text-xs font-mono text-neutral-400 mt-1">
              Zero-latency neural pipeline integrated with Unreal Engine 5.5
            </div>
          </div>
        </div>

        {/* Architectural Overview */}
        <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
          <h3 className="font-display font-bold text-lg text-white">
            Architecture & Creative Strategy
          </h3>
          <p>{project.description}</p>
          <p>
            By integrating real-time bio-sensors into the game's core loop, the system dynamically scales enemy behavioral state machines, modulates volumetric fog density, and alters spatial auditory stems according to player autonomic stress.
          </p>
        </div>

        {/* Metrics Box */}
        <div className="my-6 p-6 rounded-2xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-xs text-neutral-400 font-mono">{m.label}</div>
              <div className="font-display font-black text-2xl sm:text-3xl text-white mt-1 tabular-nums">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono text-purple-300 bg-purple-950/60 border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-neutral-500">
            Confidential Client IP · Certified by AETHERIA Labs
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenWhatsApp();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg active:scale-95 transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Discuss Similar Architecture on WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
