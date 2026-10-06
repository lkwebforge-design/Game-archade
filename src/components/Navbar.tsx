import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsAppModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleAudio = () => {
    const active = sound.toggleMute();
    setIsAudioActive(active);
  };

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Insights', href: '#insights' },
    { label: 'Product Lab', href: '#product' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Studios', href: '#studios' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0a1a]/90 backdrop-blur-xl border border-purple-500/25 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
            : 'bg-[#0e0c24]/50 backdrop-blur-md border border-white/10'
        }`}
      >
        {/* Zone 1: Single text element wordmark with subtle brand glyph */}
        <a
          href="#"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg py-1"
          onClick={() => sound.playBlip(600, 0.05)}
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 2L2 22h20L12 2zm0 6l5 10H7l5-10z" />
            </svg>
          </span>
          <span className="font-display font-extrabold tracking-tight text-xl bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent group-hover:to-purple-300 transition-colors">
            AETHERIA
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => sound.playBlip(480, 0.04)}
              className="relative hover:text-white transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 hover:after:w-full after:transition-all after:duration-250"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Ambient Sound Toggle */}
          <button
            onClick={handleToggleAudio}
            title={isAudioActive ? 'Mute ambient soundscape' : 'Enable ambient soundscape'}
            aria-label={isAudioActive ? 'Mute ambient audio' : 'Enable ambient audio'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span className="hidden lg:inline text-cyan-300">AUDIO ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span className="hidden lg:inline text-neutral-400">AUDIO</span>
              </>
            )}
          </button>

          {/* WhatsApp Direct CTA */}
          <button
            onClick={() => {
              sound.playLaser();
              onOpenWhatsAppModal();
            }}
            className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500 hover:text-neutral-950 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.15)] active:scale-95 whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400 group-hover:text-neutral-950 transition-colors" />
            <span>WhatsApp Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5 hidden sm:inline opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => {
              sound.playBlip(400, 0.05);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full text-neutral-300 hover:text-white bg-white/5 border border-white/10"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0d0c22]/95 backdrop-blur-2xl border border-purple-500/30 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  sound.playBlip(500, 0.04);
                  setIsMobileMenuOpen(false);
                }}
                className="px-3 py-2 text-base font-medium text-neutral-200 hover:text-purple-300 hover:bg-purple-950/40 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-emerald-500 text-neutral-950 hover:bg-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Chat on WhatsApp
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
