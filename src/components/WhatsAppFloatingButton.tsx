import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState('Game Direction & Production');
  const [customMsg, setCustomMsg] = useState('');

  const handleLaunch = () => {
    sound.playLaser();
    const text = encodeURIComponent(
      `Hi AETHERIA Studio! 👋 I'm reaching out regarding: ${topic}.\n${
        customMsg ? `Note: ${customMsg}` : 'Could you share your current availability?'
      }`
    );
    window.open(`https://wa.me/15550198374?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Launcher Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0c0a24] border border-emerald-500/40 p-5 shadow-[0_0_50px_rgba(16,185,129,0.25)] text-neutral-100 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display font-bold text-sm text-white">WhatsApp Studio Concierge</span>
            </div>
            <button
              onClick={() => {
                sound.playBlip(400, 0.04);
                setIsOpen(false);
              }}
              className="p-1 rounded-full text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 mt-3 leading-relaxed">
            Connect directly with our Tokyo & London technical directors for instantaneous scoping.
          </p>

          <div className="mt-3 space-y-2">
            <label className="text-[11px] font-mono text-neutral-400 block">SELECT INQUIRY TOPIC:</label>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Game Direction & Production',
                'Biometrics SDK License',
                'Studio Lab Tour',
                'Custom XR Engine',
              ].map((t) => (
                <button
                  key={t}
                  onClick={() => {
                    sound.playBlip(550, 0.02);
                    setTopic(t);
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    topic === t
                      ? 'bg-emerald-500 text-neutral-950 font-bold'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <textarea
              rows={2}
              placeholder="Optional notes or project timeline..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full mt-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-emerald-400 resize-none"
            />
          </div>

          <button
            onClick={handleLaunch}
            className="w-full mt-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Open in WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Circle Button */}
      <button
        onClick={() => {
          sound.playBlip(isOpen ? 400 : 700, 0.04);
          setIsOpen(!isOpen);
        }}
        aria-label="Open WhatsApp Quick Chat"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300 active:scale-90"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#070712] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cyan-400 border-2 border-[#070712]" />
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 fill-current text-neutral-950 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
