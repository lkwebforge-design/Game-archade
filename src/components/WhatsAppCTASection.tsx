import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const WhatsAppCTASection: React.FC = () => {
  const [projectScope, setProjectScope] = useState<string>('Biometric SDK Integration');
  const [platform, setPlatform] = useState<string>('PC / Console (Unreal 5)');
  const [studioName, setStudioName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const whatsappNumber = '15550198374'; // Standard studio international contact line

  const buildWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello AETHERIA Studio! 👋\n\nI would like to discuss a project inquiry:\n- Studio / Team: ${
        studioName || 'Confidential Studio'
      }\n- Scope: ${projectScope}\n- Target Platform: ${platform}\n\nPlease let us know your current availability for a discovery session.`
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const handleLaunchWhatsApp = () => {
    sound.playLaser();
    window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    sound.playBlip(600, 0.05);
    navigator.clipboard.writeText(buildWhatsAppUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#09081a] border-t border-purple-500/20 overflow-hidden">
      {/* Radiant Glow Behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-600/10 via-purple-600/15 to-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-[#110f2d] to-[#0a091d] border border-purple-500/30 p-8 sm:p-12 lg:p-16 shadow-[0_0_80px_rgba(168,85,247,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Agency Offer & Value Proposition */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 mb-4">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct Studio Access · WhatsApp Hotline</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Ready to Architect Your Next World?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                Connect directly with our Executive Creative Directors and Lead Engine Technologists via verified WhatsApp for zero-friction project scoping, NDA signing, and technical feasibility evaluations.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Guaranteed 2-hour response window for verified publisher inquiries</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Direct technical dialogue with principal engineers, not sales reps</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-300">
                  <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                  <span>Complimentary architecture review and hardware SDK allocation</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleLaunchWhatsApp}
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Launch WhatsApp Direct Chat</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCopyLink}
                  className="px-5 py-4 rounded-full font-medium text-xs text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  {copied ? 'Link Copied to Clipboard!' : 'Copy Direct Chat Link'}
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Brief Builder */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#080718] border border-white/10 shadow-inner">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h3 className="font-display font-bold text-lg text-white">
                    Instant Project Brief Builder
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400 uppercase">
                    Auto-Formatted
                  </span>
                </div>

                <div className="mt-5 space-y-4 text-xs">
                  {/* Studio / Publisher Name */}
                  <div>
                    <label className="block text-neutral-400 font-mono mb-1.5">
                      STUDIO / PRODUCTION COMPANY
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Horizon Interactive / Riot Labs"
                      value={studioName}
                      onChange={(e) => setStudioName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>

                  {/* Primary Scope Selector */}
                  <div>
                    <label className="block text-neutral-400 font-mono mb-1.5">
                      PRIMARY SERVICE SCOPE
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Biometric SDK Integration',
                        'AAA Game Direction',
                        'Real-Time 3D World',
                        'Virtual Production / MoCap',
                      ].map((item) => (
                        <button
                          key={item}
                          onClick={() => {
                            sound.playBlip(540, 0.02);
                            setProjectScope(item);
                          }}
                          className={`p-2.5 rounded-xl border text-left font-medium transition-all ${
                            projectScope === item
                              ? 'bg-purple-600/30 border-purple-400 text-white shadow-sm'
                              : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Platform */}
                  <div>
                    <label className="block text-neutral-400 font-mono mb-1.5">
                      ENGINE & TARGET PLATFORM
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        'PC / Console (Unreal 5)',
                        'Spatial XR / VisionOS',
                        'Custom WebGPU / Mobile',
                      ].map((plat) => (
                        <button
                          key={plat}
                          onClick={() => {
                            sound.playBlip(560, 0.02);
                            setPlatform(plat);
                          }}
                          className={`p-2 rounded-xl border text-center font-medium transition-all text-[11px] ${
                            platform === plat
                              ? 'bg-cyan-600/30 border-cyan-400 text-white'
                              : 'bg-white/5 border-white/5 text-neutral-400 hover:text-white'
                          }`}
                        >
                          {plat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preview Box */}
                  <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 font-mono text-[11px] text-neutral-300">
                    <div className="text-neutral-500 mb-1">Generated WhatsApp payload:</div>
                    <p className="line-clamp-2 italic text-neutral-400">
                      &quot;Inquiry for {studioName || 'Confidential Studio'}: {projectScope} on {platform}&quot;
                    </p>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleLaunchWhatsApp}
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-teal-400 hover:opacity-95 text-neutral-950 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Brief to WhatsApp Hotline</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
