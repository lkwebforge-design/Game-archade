import React, { useEffect } from 'react';
import { X, Activity, Brain, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onOpenWhatsApp,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0b0a22] border border-cyan-500/40 shadow-[0_0_90px_rgba(6,182,212,0.25)] p-6 sm:p-10 text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            sound.playBlip(400, 0.04);
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-mono text-cyan-400 mb-2">
          BIOMETRIC RESEARCH PAPER // REPORT #B-2026-X
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
          Subconscious Immersion: Decoding Player Physiology in High-Stakes Gaming
        </h2>

        <p className="mt-3 text-base sm:text-lg text-purple-300">
          How real-time heart-rate variability and pupillometry predict rage-quits 4.2 minutes prior to session termination.
        </p>

        {/* Executive Findings Grid */}
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-rose-400 font-mono text-xs flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5" />
              <span>CARDIAC SPIKE</span>
            </div>
            <div className="font-display font-black text-3xl text-white mt-1 tabular-nums">
              +38 BPM
            </div>
            <div className="text-xs text-neutral-400 mt-1">Average delta during sudden death rounds</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-purple-400 font-mono text-xs flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" />
              <span>COGNITIVE FLOW</span>
            </div>
            <div className="font-display font-black text-3xl text-white mt-1 tabular-nums">
              96.4%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Sustained immersion with adaptive pacing</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-cyan-400 font-mono text-xs flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>CHURN REDUCTION</span>
            </div>
            <div className="font-display font-black text-3xl text-white mt-1 tabular-nums">
              -42%
            </div>
            <div className="text-xs text-neutral-400 mt-1">Player retention increase across 100K cohort</div>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <h3 className="font-display font-bold text-lg text-white">Methodology & Trial Cohort</h3>
          <p>
            During a 6-month trial across 4,200 closed-beta testers playing <em>ChronoBlade: Astral Divide</em>, our telemetry SDK intercepted micro-fluctuations in blood volume pulse (BVP) and galvanic skin conductance (GSR) paired with 240Hz gamepad force sensing.
          </p>
          <p>
            When standard algorithmic engines failed to recognize player exhaustion, the AETHERIA Dynamic Difficulty Engine smoothly lowered ambient light contrast and softened enemy attack cadences without decreasing XP yields, resulting in dramatic retention gains.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-neutral-400">
            Full 34-page whitepaper available under NDA
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenWhatsApp();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-cyan-400 hover:bg-cyan-300 text-neutral-950 transition-all active:scale-95"
          >
            <span>Request Full Research PDF via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
